import { Schema, Document } from 'mongoose';

export interface ContentItem extends Document {
  title: string;
  summary: string;
  url: string;
  source: string;
  category: string;
  publishDate: Date;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export const ContentItemSchema = new Schema({
  title: String,
  summary: String,
  url: String,
  source: String,
  category: String,
  publishDate: Date,
  tags: [String],
}, { timestamps: true });
