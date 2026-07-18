import { CustomErrors } from "./custom-errors.js";

export class BadRequestError extends CustomErrors {
  statusCode = 400;
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
