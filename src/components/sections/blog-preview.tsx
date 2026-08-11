import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function BlogPreview() {
  const latest = articles.slice(0, 3);

  return (
    <section id="blog" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Consultez notre blog
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Découvrez nos activités scolaires, environnementales et de
          sensibilisation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {latest.map((article) => (
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
              <h3 className="text-xl font-semibold text-green-700 hover:text-yellow-500 transition mb-2">
                {article.title}
              </h3>
              <p className="text-sm text-yellow-500 mb-3">
                <span>{article.date}</span> par{" "}
                <span className="text-green-700">{article.author}</span>
              </p>
              <p className="text-gray-700 flex-grow">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/blog"
          className="inline-block bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-800 transition"
        >
          Voir plus d&apos;articles
        </Link>
      </div>
    </section>
  );
}
