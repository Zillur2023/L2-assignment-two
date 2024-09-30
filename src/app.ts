import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './app/routes';

const app: Application = express();

// app.use(express.json());
// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5000'] }));

app.use('/api', router);

// app.use(globalErrorHandler);
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
