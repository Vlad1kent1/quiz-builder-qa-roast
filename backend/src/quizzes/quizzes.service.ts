import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(private prismaService: PrismaService) {}

  async create(createQuizDto: CreateQuizDto) {
    return this.prismaService.quiz.create({
      data: {
        title: createQuizDto.title,
        questions: {
          create: createQuizDto.questions,
        },
      },
      include: {
        questions: true,
      },
    });
  }

  async findAll() {
    try {
      return await this.prismaService.quiz.findMany({
        include: {
          _count: {
            select: {
              questions: true,
            },
          },
        },
      });
    } catch (_error) {
      console.error('Error in findAll:', _error);
      throw _error;
    }
  }

  async findOne(id: number) {
    return this.prismaService.quiz.findUnique({
      where: { id },
      include: {
        questions: true,
      },
    });
  }

  async update(id: number, updateQuizDto: UpdateQuizDto) {
    // For simplicity, only update the title for now
    // Complex nested updates would require more sophisticated logic
    const { title } = updateQuizDto;
    return this.prismaService.quiz.update({
      where: { id },
      data: { title },
    });
  }

  async remove(id: number) {
    return this.prismaService.quiz.delete({
      where: { id },
    });
  }
}
