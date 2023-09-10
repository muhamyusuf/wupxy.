import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="paddingY">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/WupxyMode.jpg"
            alt="Wupxy Profil"
            width={150}
            height={150}
            className="object-cover rounded-full w-30 h-30 aspect-square grayscale"
            priority
          />

          <div className="flex flex-col">
            <h1>Muhammad Yusuf</h1>
            <p className="mt-1 description">Web developer</p>
          </div>
        </div>

        <div className="paragraphContainer">
          <p className="description">
            I&lsquo;m a freelance web developer. I can enhance the{' '}
            <b>QUALITY</b> of your website in terms of <b>DESIGN</b> and{' '}
            <b>PERFORMANCE</b> using constantly updated technologies that keep
            up with the latest trends.
          </p>

          <p className="description">
            <b>&ldquo;Keeping Learning&rdquo; </b>
            is a principle I hold on to in order to continuously grow and keep
            up with the incredible advancements in technology.
          </p>
        </div>

        <div className="flex flex-col mt-5 tablet:mt-10">
          <p className="description">Interest with me ?</p>

          <Link href="/contact" className="mt-5">
            <Button>Get in touch</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
