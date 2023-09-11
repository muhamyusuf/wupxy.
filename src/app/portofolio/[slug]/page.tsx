import { Mdx } from '@/components/Mdx';
import { allPortoDetails } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeftCircle } from 'lucide-react';
import { buttonVariants } from '@/components/ui/Button';
import LinkPorto from '@/components/ui/LinkPorto';

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
      <Link
        href="/portofolio"
        className={`flex items-center gap-2 -ml-4 ${buttonVariants({
          variant: 'ghost',
        })}`}
      >
        <ChevronLeftCircle /> <span className="mb-1 text-xl">Back</span>
      </Link>

      <h1 className="mt-10">{doc.title}</h1>

      <div className="flex flex-col justify-between gap-2 mt-5 laptop:items-center laptop:flex-row">
        <p className="descriptionBlog">{doc.description}</p>
        <p className="text-[12px] text-gray">Published at {doc.date}</p>
      </div>

      <div className="w-full h-[0.5px] bg-gray"></div>

      {doc.github ? <LinkPorto className="mt-5" link={doc.github} /> : null}

      <div className="text-justify paragraphContainer descriptionBlog">
        <Mdx code={doc.body.code} />
      </div>

      <Link
        href="/portofolio"
        className={`flex items-center gap-2 mx-auto w-full mt-10 ${buttonVariants(
          {
            variant: 'ghost',
          }
        )}`}
      >
        <ChevronLeftCircle />{' '}
        <span className="mb-1 text-xl">List All Portofolio</span>
      </Link>
    </div>
  );
};

export default PortoDetail;
