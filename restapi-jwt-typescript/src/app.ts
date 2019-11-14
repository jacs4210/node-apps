import express, { Application } from 'express';
import authRoutes from './routes/auth';
import morgan from 'morgan';

const app: Application = express();

// settings
app.set('port', 3001);

// middlewares
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);

export default app;