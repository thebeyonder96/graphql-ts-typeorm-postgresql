export class CustomError extends Error {
  private code: number;
  private errorRaw: any;
  constructor(code: number, message: string, errorRaw: any = null) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
    this.errorRaw = errorRaw;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
  }
  get HttpStatusCode() {
    return this.code;
  }

  get rawError(){
    return {
        code: this.code,
        error: this.errorRaw
    }
  }
}
