import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"
dotenv.config()

const app=express()

app.use(cors({}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port=process.env.PORT||8000
app.listen(port,()=>{
    console.log(`server running port ${port}`)
})