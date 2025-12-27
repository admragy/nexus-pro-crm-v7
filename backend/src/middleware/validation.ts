import { Request, Response, NextFunction } from 'express'

export const validateRequest = (_schema: any) => {
  return (_req: Request, _res: Response, next: NextFunction) => {
    // Basic validation logic
    next()
  }
}
