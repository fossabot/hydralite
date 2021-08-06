import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { MockProxy, mockDeep } from "jest-mock-extended";

export type Context = {
  prisma: PrismaClient;
  req: Request;
  res: Response;
};

export type MockContext = {
  prisma: MockProxy<PrismaClient>;
  req: MockProxy<Request>;
  res: MockProxy<Response>;
};

export function createMockContext(): MockContext {
  return {
    prisma: mockDeep<PrismaClient>(),
    req: mockDeep<Request>(),
    res: mockDeep<Response>(),
  };
}
