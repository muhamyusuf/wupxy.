import { Metadata } from 'next';
import Link from 'next/link';
import { allDocs } from 'contentlayer/generated';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog || Wupxy',
};

const Blog = () => {
  const sortedDocs = allDocs.slice().sort((a, b) => {
    // Ganti 'publishedAt' dengan properti yang sesuai untuk mengurutkan berdasarkan tanggal
    if (new Date(a.date) > new Date(b.date)) {
      return -1;
    }
    return 1;
  });

  return (
    <main>
      <div className="paddingY">
        <h1>Blog & Article</h1>

        <div className="flex flex-col gap-4 mt-10 -ml-2">
          {sortedDocs.map((doc, index) => (
            <Link
              key={index}
              href={`${doc.slug}`}
              className="relative flex items-center justify-between gap-4 px-2 py-2 transition duration-200 ease-in-out rounded-md shadow-sm shadow-white/10 opacity-80 hover:opacity-100 hover:text-white"
            >
              <div>
                <h2 className="text-white">{doc.title}</h2>
                <p className="descriptionBlog">{doc.description}</p>
              </div>

              <ArrowUpRight className="hidden tablet:block" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
