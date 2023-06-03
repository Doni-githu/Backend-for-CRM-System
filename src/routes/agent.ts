import { Router, Response, Request } from "express"
import Agent from "../modules/SimpleAgent"

interface PostAgent {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    companyName: string,
    phoneNumber: string,
    rol: string
}

const router = Router()

router.post('/', async (req: Request, res: Response) => {
    const agent = req.body as PostAgent
    
    const useEmail = await Agent.findOne({ email: agent.email })
    const usePhone = await Agent.findOne({ phoneNumber: agent.phoneNumber })


    if (useEmail) {
        res.status(400).json({
            message: 'This email using'
        })
        return
    }

    if (usePhone) {
        res.status(400).json({ message: 'This phone number using' })
        return
    }





})

export default router 