import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'About || Wupxy',
};

export default function About() {
  return (
    <main>
      <div className="paddingY">
        <h1>About</h1>

        <div className="paragraphContainer">
          <p className="description">
            Hello, I&lsquo;m <b>Wupxy.</b> But most people in around me call me{' '}
            <b>Ucup.</b>
          </p>

          <p className="description">
            I&lsquo;m an individual who has a <b>strong passion</b> for the
            world of technology, especially in the field of web development. I
            find immense joy in continuously learning new things as it keeps me
            motivated to master these skills.
          </p>

          <Image
            src="/assets/images/growth.png"
            alt="growth image"
            width={720}
            height={480}
            className="object-cover w-full h-full"
            priority
          />

          <p className="description">
            Furthermore, I take great pleasure in being able to contribute to
            the well-being of others with the <b> knowledge </b> I have gained.
            By helping others, I firmly believe that goodness will eventually
            come back to us in one way or another. My aspiration is to make a
            <b> meaningful impact </b> in the field of technology, starting from
            the people in my immediate surroundings and extending to a wider
            community.
          </p>
        </div>
      </div>
    </main>
  );
}
