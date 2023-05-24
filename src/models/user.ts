import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class User {

  async create(name: string, email: string) {
    const user = await this.find(email);

    if (user) {
      return user;
    }

    return prisma.user.create({
      data: {
        email,
        name,
      }
    });
  }

  async find(email: string) {
    return prisma.user.findFirst({
      where: {
        email,
      },
    });
  }
}
