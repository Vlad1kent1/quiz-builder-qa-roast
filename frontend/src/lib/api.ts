import axios from 'axios';
import { Quiz } from '@/types/quiz';
import { QuizFormData } from '@/components/pages/create/quiz-form';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const quizApi = {
  getQuizzes: async (): Promise<Quiz[]> => {
    const response = await api.get('/quizzes');
    return response.data;
  },

  getQuizById: async (id: number): Promise<Quiz> => {
    const response = await api.get(`/quizzes/${id}`);
    return response.data;
  },

  createQuiz: async (data: QuizFormData): Promise<Quiz> => {
    const response = await api.post('/quizzes', data);
    return response.data;
  },

  deleteQuiz: async (id: number): Promise<void> => {
    await api.delete(`/quizzes/${id}`);
  },
};

export default api;
