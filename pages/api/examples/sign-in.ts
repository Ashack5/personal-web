import type { NextApiRequest, NextApiResponse } from 'next'
import { getStatusFromCode, ErrorResponse } from '@/_core/fetcher/core'
import { csrf } from '@/_core/middlewares/csrf'

type Data =
  | {
      result: 'success'
    }
  | ErrorResponse

function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.status(404).json({
      status: getStatusFromCode(404),
      message: 'not found',
    })
  }
  const response = { result: 'success' } as const
  res.status(200).json(response)
}

export default csrf(handler)
