"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `user: ${this.client} details: ${this.details} owes:${this.amount}`;
    }
}
exports.Invoice = Invoice;
