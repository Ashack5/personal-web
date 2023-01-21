import type { NextApiRequest, NextApiResponse } from 'next'
import { getStatusFromCode, ErrorResponse } from '@/_core/fetcher/core'

type Data =
  | {
      hello: string
    }
  | ErrorResponse

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'GET') {
    res.status(404).json({
      status: getStatusFromCode(404),
      message: 'not found',
    })
  }
  const response = { hello: 'world' }
  res.status(200).json(response)
}
