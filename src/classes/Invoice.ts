import { HasFormatter } from './../interfaces/HasFormatter';

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format(): string {
    return `user: ${this.client} details: ${this.details} owes:${this.amount}`;
  }
}
