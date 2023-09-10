import { Mdx } from '@/components/Mdx';
import { allPortoDetails } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeftCircle } from 'lucide-react';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata | undefined> {
  const doc = allPortoDetails.find((doc) => doc.slugAsParams === params.slug);

  if (!doc) return;

  return {
    title: doc.title,
    description: doc.description,
  };
}

async function getDocsFromParams(slug: string) {
  const doc = allPortoDetails.find((doc) => doc.slugAsParams === slug);

  if (!doc) notFound();

  return doc;
}

const PortoDetail = async ({ params }: PageProps) => {
  const doc = await getDocsFromParams(params.slug);

  return (
    <div className="paddingY">
      <Link href="/portofolio" className="flex items-center gap-2">
        <ChevronLeftCircle /> <span className="mb-1 text-xl">Back</span>
      </Link>

      <h1 className="mt-10">{doc.title}</h1>

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

export default PortoDetail;
