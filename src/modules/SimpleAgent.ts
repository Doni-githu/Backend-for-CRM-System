import { Schema, model } from "mongoose";

const AgentSchema: Schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    companyName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    rol: { type: String, required: true }
})

const Agent = model('Agent', AgentSchema)
export default Agent