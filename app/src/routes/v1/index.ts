'use strict';
import express from 'express';
import uploadRouter from './file-upload';

const router = express.Router();

// v1以下のルーティング
router.use('/download', uploadRouter);

export default router;
