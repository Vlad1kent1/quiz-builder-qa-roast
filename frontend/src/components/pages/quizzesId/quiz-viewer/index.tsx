'use client';

import { Quiz } from '@/types/quiz';
import { QuestionPreview } from '../question-preview';

export const QuizViewer = ({ quiz }: { quiz: Quiz }) => {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-5xl font-bold uppercase tracking-tight leading-none">
          {quiz.title}
        </h1>
        <div className="flex items-center space-x-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <span className="px-3 py-1 border border-[#E5E5E5]">ID: {quiz.id}</span>
          <span>Questions: {quiz.questions?.length || 0}</span>
        </div>
      </header>

      <main className="space-y-8">
        {quiz.questions?.map((question, index) => (
          <QuestionPreview key={question.id || index} question={question} index={index} />
        ))}
      </main>
    </div>
  );
};
