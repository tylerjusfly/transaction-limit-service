import mongoose, { Schema, Document, Model } from 'mongoose';
import { Period, TransactionType } from './transactionRule.model';

export interface TransactionUsage extends Document {
  userId: string; // external user id from user service
  tier: string; // cached tier at the time of transaction, useful for audits
  transactionType: TransactionType;
  period: Period;
  windowStart: Date; // inclusive
  windowEnd: Date; // exclusive
  currency?: string;
  totalAmount: number; // accumulated amount in window
  totalCount: number; // accumulated count in window
  updatedAt: Date;
  createdAt: Date;
}

const TransactionUsageSchema = new Schema<TransactionUsage>(
  {
    userId: { type: String, required: true, index: true },
    tier: { type: String, required: true },
    transactionType: { type: String, required: true },
    period: { type: String, required: true },
    windowStart: { type: Date, required: true },
    windowEnd: { type: Date, required: true },
    currency: { type: String },
    totalAmount: { type: Number, required: true, default: 0 },
    totalCount: { type: Number, required: true, default: 0 }
  },
  { timestamps: true }
);

// Unique usage doc per user/type/period/window
TransactionUsageSchema.index({ userId: 1, transactionType: 1, period: 1, windowStart: 1, windowEnd: 1 }, { unique: true });

// Range query index
TransactionUsageSchema.index({
  userId: 1,
  transactionType: 1,
  period: 1,
  windowStart: 1
});

export const TransactionUsageModel: Model<TransactionUsage> =
  mongoose.models.TransactionUsage || mongoose.model<TransactionUsage>('TransactionUsage', TransactionUsageSchema);
