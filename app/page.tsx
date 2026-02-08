import { Advantages } from '@/lib/components/advantages';
import { Features } from '@/lib/components/features';
import { Header } from '@/lib/components/header';
import { HowItWorks } from '@/lib/components/how-it-works';
import { RequestForm } from '@/lib/components/request-form';

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Features />
        <Advantages />
        <HowItWorks />
        <RequestForm />
      </main>
    </div>
  );
}
