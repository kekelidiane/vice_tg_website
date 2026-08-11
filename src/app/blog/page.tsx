import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog - VICE TOGO",
};

export default function BlogPage() {
  return (
    <div className="bg-gray-50 min-h-screen pt-28 md:pt-32 pb-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Toutes nos actualités
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Retrouvez ici l&apos;ensemble de nos activités scolaires,
          environnementales et de sensibilisation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition flex flex-col"
          >
            <div className="relative w-full h-56">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-green-700 hover:text-yellow-500 transition mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-yellow-500 mb-3">
                <span>{article.date}</span> par{" "}
                <span className="text-green-700">{article.author}</span>
              </p>
              <p className="text-gray-700 flex-grow">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
