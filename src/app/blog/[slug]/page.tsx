import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return { title: article ? `${article.title} - VICE TOGO` : "Article introuvable" };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <article className="bg-white min-h-screen pt-28 md:pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-green-700 hover:text-yellow-500 transition text-sm font-medium"
        >
          ← Retour aux articles
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mt-4 mb-2">
          {article.title}
        </h1>
        <p className="text-sm text-yellow-500 mb-8">
          <span>{article.date}</span> par{" "}
          <span className="text-green-700">{article.author}</span>
        </p>

        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-md mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
