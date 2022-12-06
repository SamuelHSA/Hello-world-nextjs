// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const x = {
  name: 'Samuel',
  idade: '15'
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.method)
  res.status(200).json(x)
}
   