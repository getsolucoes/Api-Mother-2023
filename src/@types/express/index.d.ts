import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      admin: {
        id: string;
      };
    }
  }
}
