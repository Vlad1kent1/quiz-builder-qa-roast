'use client'

import { useEffect } from 'react';
import { Trash2, Settings2 } from 'lucide-react';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { QuizFormData } from '../quiz-form';

interface QuestionSettingsProps {
  questionIndex: number;
  type: 'boolean' | 'input' | 'checkbox';
  answers: string[];
  register: UseFormRegister<QuizFormData>;
  setValue: UseFormSetValue<QuizFormData>;
}

export const QuestionSettings = ({ questionIndex, type, answers, register, setValue }: QuestionSettingsProps) => {
  useEffect(() => {
    if (type === 'boolean' && answers.length !== 2) {
      setValue(`questions.${questionIndex}.answers`, ['True', 'False']);
    }
    if (type === 'input' && answers.length !== 1) {
      setValue(`questions.${questionIndex}.answers`, ['']);
    }
    if (type === 'checkbox' && answers.length === 0) {
      setValue(`questions.${questionIndex}.answers`, ['', '']);
    }
  }, [type, questionIndex, setValue, answers.length]);

  if (type === 'checkbox') {
    const addAnswer = () => setValue(`questions.${questionIndex}.answers`, [...answers, '']);
    const removeAnswer = (idx: number) => setValue(`questions.${questionIndex}.answers`, answers.filter((_, i) => i !== idx));

    return (
      <div className="mt-4 ml-6 p-4 border-l border-[#E5E5E5] bg-white space-y-3">
        <div className="flex items-center space-x-2 mb-2 text-gray-400">
          <Settings2 size={14} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Configure Choices</span>
        </div>
        {answers.map((_, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <input
              {...register(`questions.${questionIndex}.answers.${idx}`)}
              className="flex-1 px-3 py-2 text-sm border border-[#E5E5E5] focus:border-black outline-none bg-white"
              placeholder={`Choice ${idx + 1}`}
            />
            {answers.length > 2 && (
              <button type="button" onClick={() => removeAnswer(idx)} className="p-2 hover:text-red-600 transition-colors">
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addAnswer}
          className="text-[10px] font-bold uppercase border border-[#E5E5E5] px-3 py-1.5 hover:bg-black hover:text-white transition-all"
        >
          + Add Choice
        </button>
      </div>
    );
  }

  if (type === 'boolean') {
    return (
      <div className="mt-4 ml-6 p-4 border-l border-[#E5E5E5] bg-white space-y-3">
        <div className="flex items-center space-x-2 mb-2 text-gray-400">
          <Settings2 size={14} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Label Customization</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-[9px] font-bold uppercase text-gray-400">Positive</label>
            <input
              {...register(`questions.${questionIndex}.answers.0`)}
              className="w-full px-3 py-2 text-sm border border-[#E5E5E5] focus:border-black outline-none bg-white"
            />
          </div>
          <div>
            <label className="text-[9px] font-bold uppercase text-gray-400">Negative</label>
            <input
              {...register(`questions.${questionIndex}.answers.1`)}
              className="w-full px-3 py-2 text-sm border border-[#E5E5E5] focus:border-black outline-none bg-white"
            />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'input') {
    return (
      <div className="mt-4 ml-6 p-4 border-l border-[#E5E5E5] bg-white space-y-3">
        <div className="flex items-center space-x-2 mb-2 text-gray-400">
          <Settings2 size={14} />
          <span className="text-[10px] font-bold uppercase tracking-wider">Answer Hint</span>
        </div>
        <input
          {...register(`questions.${questionIndex}.answers.0`)}
          className="w-full px-3 py-2 text-sm border border-[#E5E5E5] focus:border-black outline-none bg-white"
          placeholder="Expected answer hint..."
        />
      </div>
    );
  }

  return null;
};