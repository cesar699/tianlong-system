import { Schema, Document } from 'mongoose';

export interface MoneyOpportunity extends Document {
  title: string;
  description: string;
  risk: string;
  estimatedProfit: number;
  timeCost: number;
  successRate: number;
  createdAt: Date;
  updatedAt: Date;
}

export const MoneyOpportunitySchema = new Schema({
  title: String,
  description: String,
  risk: String,
  estimatedProfit: Number,
  timeCost: Number,
  successRate: Number,
}, { timestamps: true });
