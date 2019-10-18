export class GRPCError extends Error {
  public readonly code: number;
  public constructor(code: number, message: string) {
    super(message);
    this.code = code;
  }
}
