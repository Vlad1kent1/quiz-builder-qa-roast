'use client'

import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { Trash2 } from 'lucide-react';
import { QuestionSettings } from '../question-settings';
import { QuizFormData } from '../quiz-form';

interface QuestionItemProps {
  index: number;
  remove: (index: number) => void;
  register: UseFormRegister<QuizFormData>;
  setValue: UseFormSetValue<QuizFormData>;
  watchType: string;
  watchAnswers: string[];
  errors: FieldErrors<QuizFormData>;
}

export const QuestionItem = ({ index, remove, register, setValue, watchType, watchAnswers, errors }: QuestionItemProps) => {
  return (
    <div className="border border-[#E5E5E5] p-6 bg-white hover:border-black transition-colors group">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold uppercase tracking-widest">Question {String(index + 1).padStart(2, '0')}</h3>
        <button
          type="button"
          onClick={() => remove(index)}
          className="p-2 text-gray-300 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Trash2 size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase mb-2 text-gray-400">Question Text</label>
          <input
            {...register(`questions.${index}.text`)}
            className="w-full px-3 py-2 border border-[#E5E5E5] focus:border-black outline-none transition-all bg-white"
            placeholder="Type your question here..."
          />
          {errors?.questions?.[index]?.text && <p className="mt-1 text-[10px] text-red-600 uppercase font-bold">{errors.questions[index].text.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase mb-2 text-gray-400">Question Type</label>
          <select
            {...register(`questions.${index}.type`)}
            className="w-full px-3 py-2 border border-[#E5E5E5] focus:border-black outline-none bg-white transition-all cursor-pointer"
          >
            <option value="input">Short Answer</option>
            <option value="boolean">True / False</option>
            <option value="checkbox">Multiple Choice</option>
          </select>
        </div>

        <QuestionSettings
          questionIndex={index}
          type={watchType as 'boolean' | 'input' | 'checkbox'}
          answers={watchAnswers || []}
          register={register}
          setValue={setValue}
        />
      </div>
    </div>
  );
};
