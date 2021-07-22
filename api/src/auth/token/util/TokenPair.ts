import { PrismaClient } from "@prisma/client";
import { v4 as uuid } from "uuid";

export class TokenPair {
  public accessToken: string;
  public refreshToken: string;

  constructor({
    accessToken,
    refreshToken,
  }: { accessToken?: string; refreshToken?: string } = {}) {
    this.accessToken = accessToken ?? TokenPairUtil.generateUniqueToken();
    this.refreshToken = refreshToken ?? TokenPairUtil.generateUniqueToken();
  }
}

export class TokenPairUtil {
  private prisma: PrismaClient;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  static generateUniqueToken() {
    // return uuid();

    const data = new Array(64).fill(0).map((_, __) => {
      return Math.floor(Math.random() * 16).toString(16);
    });

    return data.join('');
  }

  generateTokenPair = async (userId: string) => {
    try {
      const token_pair = new TokenPair();

      await this.prisma.tokenPair.create({
        data: {
          accessToken: token_pair.accessToken,
          refreshToken: token_pair.refreshToken,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });

      return token_pair;
    } catch (error) {
      return null;
    }
  };

  regenerateTokenPair = async (refreshToken: string) => {
    try {
      const token_pair = new TokenPair();

      const old_pair = await this.prisma.tokenPair.findUnique({
        where: { refreshToken },
      });

      if (!old_pair) return null;

      await this.prisma.tokenPair.update({
        data: {
          accessToken: token_pair.accessToken,
          refreshToken: token_pair.refreshToken,
        },
        where: { refreshToken: old_pair.refreshToken },
      });
      return token_pair;
    } catch (error) {
      return null;
    }
  };
}