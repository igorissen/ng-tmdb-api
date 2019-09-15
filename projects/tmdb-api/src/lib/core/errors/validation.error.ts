/**
 * ValidationError class which extends Error class
 */
export class ValidationError extends Error {
  /**
   * Constructor
   *
   * @param message error description
   */
  constructor(message: string = 'Validation error') {
    super(message);
    this.name = 'ValidationError';
  }
}
