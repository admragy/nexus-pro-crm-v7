import { Router } from 'express'
import {
  predictSales,
  classifyCustomer,
  getRecommendations,
  analyzeSentiment,
} from '../controllers/aiController'
import { authenticate } from '../middleware/auth'

const router = Router()

router.use(authenticate)

router.post('/predict', predictSales)
router.post('/classify', classifyCustomer)
router.post('/recommend', getRecommendations)
router.post('/sentiment', analyzeSentiment)

export default router
