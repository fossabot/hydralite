import { registerDecorator, ValidationOptions } from 'class-validator';

export function registerCustomDecorator(
  validator: any,
  validationOptions?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator,
    });
  };
}
