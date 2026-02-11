import { Advantages } from '@/lib/components/advantages';
import { Background } from '@/lib/components/background';
import { Features } from '@/lib/components/features';
import { Header } from '@/lib/components/header';
import { HowItWorks } from '@/lib/components/how-it-works';
import { QA } from '@/lib/components/qa';
import { RequestForm } from '@/lib/components/request-form';

export default function Home() {
  return (
    <>
      <Background />
      <main>
        <Header />
        <Features />
        <Advantages />
        <HowItWorks />
        <RequestForm />
        <QA />
      </main>
    </>
  );
}
