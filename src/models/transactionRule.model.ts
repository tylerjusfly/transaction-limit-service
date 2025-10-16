import mongoose, { Schema, Document, Model } from 'mongoose';

export const TRANSACTION_TYPES = ['transfer', 'airtime_purchase', 'bill_payment', 'withdrawal', 'deposit'] as const;

export type TransactionType = (typeof TRANSACTION_TYPES)[number];

export const PERIODS = ['daily', 'weekly', 'monthly', 'yearly'] as const;
export type Period = (typeof PERIODS)[number];

export interface TransactionRule extends Document {
  tier: string;
  transactionType: TransactionType;
  period: Period;
  currency?: string; // ISO 4217 (optional if limits are count-only)
  limitAmount?: number; // Maximum cumulative amount allowed in period
  limitCount?: number; // Maximum number of transactions allowed in period
  perTransactionMin?: number;
  perTransactionMax?: number;
  isEnabled: boolean;
  metadata?: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionRuleSchema = new Schema<TransactionRule>(
  {
    tier: { type: String, required: true, index: true },
    transactionType: { type: String, enum: TRANSACTION_TYPES, required: true },
    period: { type: String, enum: PERIODS, required: true },
    currency: { type: String },
    limitAmount: { type: Number, min: 0 },
    limitCount: { type: Number, min: 0 },
    perTransactionMin: { type: Number, min: 0 },
    perTransactionMax: { type: Number, min: 0 },
    isEnabled: { type: Boolean, default: true, index: true },
    metadata: { type: Schema.Types.Mixed }
  },
  { timestamps: true }
);

// Ensure unique active rule per (tier, type, period).
// Partial unique index applies only when isEnabled === true
TransactionRuleSchema.index({ tier: 1, transactionType: 1, period: 1 }, { unique: true, partialFilterExpression: { isEnabled: true } });

// Helpful query index
TransactionRuleSchema.index({
  tier: 1,
  transactionType: 1,
  period: 1,
  isEnabled: 1
});

export const TransactionRuleModel: Model<TransactionRule> =
  mongoose.models.TransactionRule || mongoose.model<TransactionRule>('TransactionRule', TransactionRuleSchema);
