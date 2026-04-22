import Link from 'next/link';
import { Trash2, ArrowRight } from 'lucide-react';
import { Quiz } from '@/types/quiz';

interface QuizCardProps {
  quiz: Quiz;
  onDelete: (id: number) => void;
}

export const QuizCard = ({ quiz, onDelete }: QuizCardProps) => {
  return (
    <div className="group border border-[#E5E5E5] p-8 bg-white hover:border-black transition-all relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 text-[40px] font-black text-gray-50 select-none group-hover:text-gray-100 transition-colors">
        #{quiz.id}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-8">
          <h3 className="text-xl font-bold uppercase tracking-tighter max-w-[80%]">
            {quiz.title}
          </h3>
          <button
            onClick={() => onDelete(quiz.id)}
            className="p-2 text-gray-300 hover:text-black transition-colors"
          >
            <Trash2 size={18} />
          </button>
        </div>

        <div className="mt-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
            Data segments: {quiz._count?.questions || 0}
          </p>
          
          <Link
            href={`/quizzes/${quiz.id}`}
            className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-black pb-1 w-fit hover:space-x-4 transition-all"
          >
            <span>Open Module</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};
