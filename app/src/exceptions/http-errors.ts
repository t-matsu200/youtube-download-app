'use strict';
import { Request, Response } from 'express';
import { Logger } from '../util/logger';

class HttpException extends Error {
  statusCode?: number;
  message: string;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message;
  }
}

export const badRequestException =
  (message = '400 Bad Request'): HttpException => {
    return new HttpException(400, message);
};

export const forbiddenException =
  (message = '403 Forbidden'): HttpException => {
    return new HttpException(403, message);
};

// Error Handler Middleware
export default function errorHandler(
  err: HttpException,
  req: Request,
  res: Response,
): void {
  Logger.error(err);
  res.status(err.statusCode || 500).json({message: err.message});
}
