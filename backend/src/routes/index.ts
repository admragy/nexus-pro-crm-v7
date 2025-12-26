import { Router } from 'express'
import authRoutes from './authRoutes'
import customerRoutes from './customerRoutes'
import analyticsRoutes from './analyticsRoutes'
import aiRoutes from './aiRoutes'
import integrationRoutes from './integrationRoutes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/customers', customerRoutes)
router.use('/analytics', analyticsRoutes)
router.use('/ai', aiRoutes)
router.use('/integrations', integrationRoutes)

export default router
