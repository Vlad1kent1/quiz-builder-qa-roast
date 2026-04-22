export type QuestionType = 'boolean' | 'input' | 'checkbox';

export interface Question {
  id?: number;
  text: string;
  type: QuestionType;
  answers?: string[];
}

export interface Quiz {
  id: number;
  title: string;
  questions?: Question[];
  _count?: {
    questions: number;
  };
}