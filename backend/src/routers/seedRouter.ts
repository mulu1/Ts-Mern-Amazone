import express, { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import { ProductModel } from '../models/productModel'
import { sampleUsers, sampleproducts } from '../data'
import { UserModel } from '../models/userModel'

export const seedRouter = express.Router()

seedRouter.get(
  '/',
  expressAsyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({})
    const createdProducts = await ProductModel.insertMany(sampleproducts)

    await UserModel.deleteMany({})
    const createdUsers = await UserModel.insertMany(sampleUsers)

    res.json({ createdProducts, createdUsers })
  })
)
