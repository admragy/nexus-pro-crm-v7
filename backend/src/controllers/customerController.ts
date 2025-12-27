import { Request, Response } from 'express'

export const getCustomers = async (_req: Request, res: Response) => {
  res.json([{ id: '1', name: 'John Doe', email: 'john@example.com' }])
}

export const createCustomer = async (req: Request, res: Response) => {
  res.status(201).json({ message: 'Customer created', customer: req.body })
}

export const getCustomer = async (req: Request, res: Response) => {
  res.json({ id: req.params.id, name: 'John Doe' })
}

export const updateCustomer = async (req: Request, res: Response) => {
  res.json({ message: 'Customer updated', id: req.params.id })
}

export const deleteCustomer = async (req: Request, res: Response) => {
  res.json({ message: 'Customer deleted', id: req.params.id })
}

export const getCustomerInsights = async (req: Request, res: Response) => {
  res.json({ insights: 'AI-generated insights for customer ' + req.params.id })
}
