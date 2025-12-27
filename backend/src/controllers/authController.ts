import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'admin@nexus.com' && password === 'password') {
    const token = jwt.sign({ id: '1', role: 'ADMIN' }, process.env.JWT_SECRET || 'secret')
    return res.json({ token, user: { id: '1', email, role: 'ADMIN' } })
  }
  return res.status(401).json({ message: 'Invalid credentials' })
}

export const register = async (req: Request, res: Response) => {
  const { email, name } = req.body
  res.status(201).json({ message: 'User registered successfully', user: { email, name } })
}

export const refresh = async (_req: Request, res: Response) => {
  res.json({ token: 'new-token' })
}

export const logout = async (_req: Request, res: Response) => {
  res.json({ message: 'Logged out successfully' })
}
