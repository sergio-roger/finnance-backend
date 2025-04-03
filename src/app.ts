// src/app.ts
import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { userRoutes } from '@modules/user/user.routes';

dotenv.config();

export class App {
  public app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.middlewares();
    this.routes();
    this.mongoConnection();
  }

  private middlewares(): void {
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use('/api/users', userRoutes);
  }

  private async mongoConnection(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGO_URI || '');
      console.log('✅ Connected to MongoDB');
    } catch (error) {
      console.error('❌ MongoDB connection error:', error);
    }
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running on http://localhost:${this.port}`);
    });
  }
}
