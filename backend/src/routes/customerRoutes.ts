import { Router } from 'express'
import {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerInsights,
} from '../controllers/customerController'
import { authenticate } from '../middleware/auth'
import { validateRequest } from '../middleware/validation'
import { customerSchema } from '../utils/validators'

const router = Router()

router.use(authenticate)

router.get('/', getCustomers)
router.get('/:id', getCustomer)
router.post('/', validateRequest(customerSchema), createCustomer)
router.put('/:id', validateRequest(customerSchema), updateCustomer)
router.delete('/:id', deleteCustomer)
router.get('/:id/insights', getCustomerInsights)

export default router
