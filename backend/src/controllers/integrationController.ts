import { Request, Response } from 'express'

export const getIntegrations = async (_req: Request, res: Response) => {
  res.json([{ id: 'slack', name: 'Slack', status: 'connected' }])
}

export const connectIntegration = async (_req: Request, res: Response) => {
  res.json({ message: 'Service connected' })
}

export const disconnectIntegration = async (_req: Request, res: Response) => {
  res.json({ message: 'Service disconnected' })
}

export const syncData = async (_req: Request, res: Response) => {
  res.json({ message: 'Data sync started' })
}
