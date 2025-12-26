import { Router } from 'express'
import {
  getDashboardMetrics,
  getSalesAnalytics,
  getPredictions,
  generateReport,
} from '../controllers/analyticsController'
import { authenticate } from '../middleware/auth'

const router = Router()

router.use(authenticate)

router.get('/dashboard', getDashboardMetrics)
router.get('/sales', getSalesAnalytics)
router.get('/predictions', getPredictions)
router.post('/reports/:type', generateReport)

export default router
