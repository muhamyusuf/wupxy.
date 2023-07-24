import Card from '@/components/ui/Card';
import { portofolio } from '@/datas';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portofolio',
  description: 'Portofolio || Wupxy',
};

export default function Portofolio() {
  return (
    <main>
      <div className="paddingY">
        <h1>Portofolio</h1>

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

        <div className="max-w-3xl">
          <h2 className="mt-10 font-bold text-center">Current projects</h2>

          <div className="grid gap-3 mt-10 tablet:grid-cols-1 laptop:grid-cols-2 laptop:gap-7 tablet-gap-5">
            {portofolio.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
