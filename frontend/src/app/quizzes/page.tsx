'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Quiz } from '@/types/quiz';
import { quizApi } from '@/lib/api';
import { QuizList } from '@/components/pages/quizzes';

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchQuizzes = async () => {
    try {
      const data = await quizApi.getQuizzes();
      setQuizzes(data);
    } catch (_error) {
      console.error('Failed to fetch quizzes:', _error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    const loadData = async () => {
      await fetchQuizzes();
    };
    loadData();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm('Proceed with deletion of module?')) return;
    try {
      await quizApi.deleteQuiz(id);
      setQuizzes(prev => prev.filter(q => q.id !== id));
    } catch (_error) {
      console.error('Failed to delete quiz:', _error);
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-32 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">
          Syncing Database...
        </span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="border-l-4 border-black pl-6">
          <h1 className="text-5xl font-black uppercase tracking-tighter">Library</h1>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mt-2">
            Central Registry // Manage Modules
          </p>
        </div>
        
        <Link
          href="/create"
          className="px-8 py-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#222] transition-all"
        >
          + New Module
        </Link>
      </header>

      <QuizList quizzes={quizzes} onDelete={handleDelete} />

      <footer className="mt-24 pt-8 border-t border-[#E5E5E5]">
        <p className="text-[9px] font-medium uppercase tracking-widest text-gray-300">
          Data Integrity Verified // {quizzes.length} modules loaded
        </p>
      </footer>
    </div>
  );
}
