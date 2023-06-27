import Card from '@/components/ui/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portofolio',
  description: 'Portofolio || Wupxy',
};

export default function Portofolio() {
  return (
    <main>
      <div className="paddingY">
        <h1 className="heading1">Portofolio</h1>

        <div className="paragraphContainer">
          <p className="description">
            I <b> like </b> when I receiving{' '}
            <b> assignments, projects, or insights </b>
            from others. It gives me the opportunity to continually sharpen my
            skills, abilities, and sense of responsibility towards a task or
            job. Embracing these opportunities allows me to grow and develop
            both personally and professionally, fueling my passion for
            continuous improvement. I believe that every new task or project is
            a chance to learn, innovate, and make a positive impact.
          </p>
        </div>

        <div className="max-w-2xl">
          <h2 className="mt-10 font-bold text-center heading2">
            Current projects
          </h2>

          <div className="grid gap-3 mt-10 tablet:grid-cols-2 laptop:gap-7 tablet-gap-5">
            <Card
              title="MuAD School Profile"
              description="Rebuild & increase performance MuAD School Profile Website with latest technology"
              image="/assets/images/website_MuAD.png"
              link="https://muadwebsite.vercel.app"
            />

            <Card
              title="Unwind Community"
              description="Build this awesome fullstack website with awesome logic and concistency of design"
              image="/assets/images/unwind_website.png"
              link="https://unwind-community.vercel.app"
            />

            <Card
              title="Et-Bien Website"
              description="Make landing page with high quality design and best layout for user experience"
              image="/assets/images/etbien-website.png"
              link="https://et-bien.vercel.app"
            />

            <Card
              title="Simplicity"
              description="Landing page with animation, gradient color and high quality design"
              image="/assets/images/simplicity-website.png"
              link="https://simplicitydesign.vercel.app"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
