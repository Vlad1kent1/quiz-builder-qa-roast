import { Quiz } from '@/types/quiz';
import { QuizCard } from '../quiz-card';
import Link from 'next/link';

interface QuizListProps {
  quizzes: Quiz[];
  onDelete: (id: number) => void;
}

export const QuizList = ({ quizzes, onDelete }: QuizListProps) => {
  if (quizzes.length === 0) {
    return (
      <div className="text-center py-24 border-2 border-dashed border-[#E5E5E5]">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
          System empty // No data found
        </p>
        <Link
          href="/create"
          className="inline-block px-10 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#222] transition-all"
        >
          Initialize First Module
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E5E5E5]">
      {quizzes.map((quiz) => (
        <div key={quiz.id} className="border-r border-b border-[#E5E5E5]">
          <QuizCard quiz={quiz} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
};
