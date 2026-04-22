'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { quizApi } from '@/lib/api';
import { QuestionItem } from '../question-item';

const quizSchema = z.object({
  title: z.string().min(1, 'Quiz title is required'),
  questions: z.array(
    z.object({
      text: z.string().min(1, 'Question text is required'),
      type: z.enum(['boolean', 'input', 'checkbox']),
      answers: z.array(z.string()), 
    })
  ).min(1, 'At least one question is required'),
});

export type QuizFormData = z.infer<typeof quizSchema>;

export const QuizForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { 
    register, 
    control, 
    handleSubmit, 
    watch, 
    setValue, 
    formState: { errors } 
  } = useForm<QuizFormData>({
    resolver: zodResolver(quizSchema),
    defaultValues: { 
      title: '', 
      questions: [{ text: '', type: 'input', answers: [] }] 
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: 'questions' });
  // eslint-disable-next-line react-hooks/incompatible-library
  const watchedQuestions = watch('questions');

  const onSubmit = async (data: QuizFormData) => {
    setIsSubmitting(true);
    try {
      await quizApi.createQuiz(data);
      router.push('/quizzes');
    } catch {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      <section>
        <label className="block text-xs font-bold uppercase mb-3 tracking-widest text-gray-400">
          General Info
        </label>
        <input
          {...register('title')}
          className="text-2xl w-full px-0 py-2 border-b-2 border-[#E5E5E5] focus:border-black outline-none transition-all bg-transparent font-medium placeholder:text-gray-200"
          placeholder="Enter Quiz Title"
        />
        {errors.title && (
          <p className="mt-2 text-[10px] text-red-600 font-bold uppercase">{errors.title.message}</p>
        )}
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5]">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-500">Structure</h2>
          <button
            type="button"
            onClick={() => append({ text: '', type: 'input', answers: [] })}
            className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-4 py-2 hover:bg-[#222] transition-all"
          >
            + Add Question
          </button>
        </div>

        <div className="space-y-8">
          {fields.map((field, index) => (
            <QuestionItem
              key={field.id}
              index={index}
              register={register}
              setValue={setValue}
              remove={remove}
              watchType={watchedQuestions[index]?.type}
              watchAnswers={watchedQuestions[index]?.answers || []} 
              errors={errors}
            />
          ))}
        </div>
      </section>

      <div className="pt-6 border-t border-[#E5E5E5] flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-12 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-gray-900 disabled:bg-gray-200 transition-all active:scale-[0.98]"
        >
          {isSubmitting ? 'Syncing...' : 'Finalize Quiz'}
        </button>
      </div>
    </form>
  );
};
