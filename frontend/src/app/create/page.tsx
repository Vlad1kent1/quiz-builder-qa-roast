import Link from 'next/link';
import { QuizForm } from '@/components/pages/create';

export default function CreateQuizPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-12 border-l-4 border-black pl-6">
        <Link 
          href="/quizzes" 
          className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black mb-4 block transition-colors"
        >
          ← Back to List
        </Link>
        <h1 className="text-4xl font-black uppercase tracking-tighter">New Quiz</h1>
        <p className="text-gray-400 text-sm mt-2">Configure your custom assessment module.</p>
      </div>

      <QuizForm />
    </div>
  );
}
