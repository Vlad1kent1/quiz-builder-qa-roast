import { Question } from '@/types/quiz';

export const ResponseDisplay = ({ question }: { question: Question }) => {
  const answers = question.answers || [];

  switch (question.type) {
    case 'boolean':
      return (
        <div className="mt-4 space-y-3">
          {[answers[0] || 'True', answers[1] || 'False'].map((label, i) => (
            <div key={i} className="flex items-center space-x-3 opacity-60">
              <div className="w-4 h-4 rounded-full border border-black shrink-0" />
              <span className="text-sm font-medium uppercase tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      );

    case 'checkbox':
      return (
        <div className="mt-4 space-y-3">
          {answers.length > 0 ? (
            answers.map((answer: string, i: number) => (
              <div key={i} className="flex items-center space-x-3 opacity-60">
                <div className="w-4 h-4 border border-black shrink-0" />
                <span className="text-sm font-medium uppercase tracking-wide">{answer}</span>
              </div>
            ))
          ) : (
            <p className="text-[10px] text-gray-400 italic uppercase">No choices defined</p>
          )}
        </div>
      );

    case 'input':
      return (
        <div className="mt-4">
          <div className="w-full border-b border-[#E5E5E5] py-2 opacity-50">
            <span className="text-sm text-gray-400 italic">
              {answers[0] ? `Expected: ${answers[0]}` : 'Short text response layout'}
            </span>
          </div>
        </div>
      );

    default:
      return null;
  }
};
