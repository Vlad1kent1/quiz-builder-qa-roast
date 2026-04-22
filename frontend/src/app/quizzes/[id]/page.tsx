'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Quiz } from "@/types/quiz";
import { quizApi } from "@/lib/api";
import { QuizViewer } from "@/components/pages/quizzesId/quiz-viewer";

export default function QuizDetailPage() {
  const params = useParams();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchQuiz = async (id: number) => {
    try {
      const data = await quizApi.getQuizById(id);
      setQuiz(data);
    } catch (_error) {
      console.error("Failed to fetch quiz:", _error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadQuizData = async () => {
      if (params?.id) {
        const id = typeof params.id === 'string' ? parseInt(params.id) : null;
        if (id) {
          await fetchQuiz(id);
        }
      }
    };

    loadQuizData();
  }, [params?.id]);

  if (loading) return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center font-bold uppercase tracking-widest animate-pulse">
      Loading Data...
    </div>
  );

  if (!quiz) return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
      <p className="text-gray-400 uppercase font-bold tracking-widest mb-6">Module not found</p>
      <Link href="/quizzes" className="inline-block bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest">
        Return to Dashboard
      </Link>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="mb-12">
        <Link href="/quizzes" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors">
          ← Back to Quizzes
        </Link>
      </div>
      
      <QuizViewer quiz={quiz} />
    </div>
  );
}
