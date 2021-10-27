'use strict';
import express, { NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import errorHandler from './exceptions/http-errors';
import router from './routes/v1/index';
import { Logger } from './util/logger';

const app = express();

app.use(Logger.accessConfig);

// JSONオブジェクトの受信設定
app.use(express.json())
// 配列側のオブジェクトの受信設定
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ルーティング
// app.use('/api/v1', router);

app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(200).end();
});

// catch 404 and forward to error handler
app.use(function(req: express.Request, res: express.Response, next: NextFunction) {
  return res.status(404).json({message: 'URL not found.'});
});

app.use(errorHandler);

module.exports = app;
