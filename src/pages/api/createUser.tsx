import { Example } from '.prisma/client'
import { createUser } from '../../server/insert'

async function createUserHandler(req: { body: { name: any; email: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: Example): void; new(): any } } }) {
  const { name, email } = req.body

  const user = await createUser(name, email)

  res.status(201).json(user)
}

export default createUserHandler
