import { Question } from '@/types/quiz';
import { ResponseDisplay } from '../response-display';

interface QuestionPreviewProps {
  question: Question;
  index: number;
}

export const QuestionPreview = ({ question, index }: QuestionPreviewProps) => {
  return (
    <div className="border border-[#E5E5E5] p-8 bg-white hover:border-black transition-colors">
      <div className="flex items-center space-x-3 mb-4">
        <span className="px-3 py-1 bg-black text-white text-[9px] font-bold uppercase tracking-widest">
          {question.type}
        </span>
        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
          Question {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="text-xl font-bold tracking-tight text-black mb-6">
        {question.text}
      </h3>

      <div className="pt-6 border-t border-[#E5E5E5]">
        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 block">
          Response Format
        </label>
        <ResponseDisplay question={question} />
      </div>
    </div>
  );
};
