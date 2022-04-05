// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

type Data = {
  name: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
  const session = await getSession({ req })
  if (!session) {
    // Not Signed in
    return res.status(401).end()
  }
  res.status(200).json({ name: 'John Doe' })
  res.end()
}
