import { Mdx } from '@/components/Mdx';
import { allDocs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog || Wupxy',
};

async function getDocsFromParams(slug: string) {
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
}

const Docs = async ({ params }: PageProps) => {
  const doc = await getDocsFromParams(params.slug);

  return (
    <div className="paddingY">
      <h1 className="heading1">{doc.title}</h1>

      <div className="flex items-center justify-between gap-2">
        <p className="descriptionBlog">{doc.description}</p>
        <p className="text-[12px] text-gray">Published at {doc.date}</p>
      </div>
      <div className="w-full h-[0.5px] bg-gray"></div>

      <div className="text-justify paragraphContainer descriptionBlog">
        <Mdx code={doc.body.code} />
      </div>
    </div>
  );
};

export default Docs;
