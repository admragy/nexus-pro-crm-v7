import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { createServer } from 'http'
import { Server } from 'socket.io'
import dotenv from 'dotenv'
import { logger } from './utils/logger'
import { errorHandler } from './middleware/errorHandler'
import { notFound } from './middleware/notFound'
import routes from './routes'

dotenv.config()

const app: Application = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  },
})

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Request logging
app.use((req: Request, _res: Response, next: NextFunction) => {
  logger.info(`${req.method} ${req.path}`)
  next()
})

// Health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: process.env.APP_VERSION || '7.0.0',
  })
})

// API Routes
app.use('/api/v1', routes)

// Socket.io connection
io.on('connection', (socket) => {
  logger.info(`Client connected: ${socket.id}`)
  
  socket.on('disconnect', () => {
    logger.info(`Client disconnected: ${socket.id}`)
  })
})

// Error handling
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.BACKEND_PORT || 5000

httpServer.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`)
  logger.info(`📊 Environment: ${process.env.NODE_ENV || 'development'}`)
  logger.info(`🔗 API: http://localhost:${PORT}/api/v1`)
})

export { io }
export default app
