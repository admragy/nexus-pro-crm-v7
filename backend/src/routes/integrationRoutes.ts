import { Router } from 'express'
import {
  getIntegrations,
  connectIntegration,
  disconnectIntegration,
  syncData,
} from '../controllers/integrationController'
import { authenticate } from '../middleware/auth'

const router = Router()

router.use(authenticate)

router.get('/', getIntegrations)
router.post('/connect', connectIntegration)
router.delete('/:id', disconnectIntegration)
router.post('/sync', syncData)

export default router
