import { Metadata } from 'next';
import Link from 'next/link';
import { allDocs } from 'contentlayer/generated';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog || Wupxy',
};

const Blog = () => {
  const reversedDocs = allDocs.slice().reverse();

  return (
    <main>
      <div className="paddingY">
        <h1 className="heading1">Blog & Article</h1>

        <div className="flex flex-col paragraphContainer">
          {reversedDocs.map((doc, index) => (
            <Link
              key={index}
              href={`${doc.slug}`}
              className="flex items-center justify-between gap-4 px-2 py-2 transition duration-200 ease-in-out opacity-80 hover:opacity-100 hover:text-white"
            >
              <div>
                <h2 className="heading2">{doc.title}</h2>
                <p className="descriptionBlog">{doc.description}</p>
              </div>

              <svg
                className="mr-2"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                  fill="currentColor"
                ></path>
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;
