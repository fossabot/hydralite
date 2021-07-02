import {
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { PrismaClient } from "@prisma/client";
import { registerCustomDecorator } from "~/util/registerCustomDecorator";

const prisma = new PrismaClient();

@ValidatorConstraint({ async: true })
export class DoesUserExistConstraint implements ValidatorConstraintInterface {
  validate = (userId: string) =>
    !!prisma.user.findUnique({ where: { id: userId } });
}

export const DoesUserExist = (validationOptions?: ValidationOptions) => registerCustomDecorator(DoesUserExistConstraint, validationOptions);
