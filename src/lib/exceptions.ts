export class CustomError extends Error {
  constructor(message = "Algo salió mal!") {
    super(message);
    this.name = "Custom Error";
  }
}
