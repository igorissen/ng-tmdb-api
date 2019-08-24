export class ValidationError extends Error {
  constructor(message: string = 'Validation error') {
    super(message);
    this.name = 'ValidationError';
  }
}
