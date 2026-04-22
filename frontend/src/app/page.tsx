import { Hero, FeatureGrid, ActionButtons } from '@/components/pages/home';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20">
      <main className="w-full max-w-4xl px-4 flex flex-col items-center space-y-16">
        <Hero />

        <FeatureGrid />

        <ActionButtons />
      </main>
    </div>
  );
}


