import express, { Request, Response } from 'express'
import expressAsyncHandler from 'express-async-handler'
import { ProductModel } from '../models/productModel'
import { sampleproducts } from '../data'

export const seedRouter = express.Router()

seedRouter.get(
  '/',
  expressAsyncHandler(async (req: Request, res: Response) => {
    await ProductModel.deleteMany({})
    const createdProducts = await ProductModel.insertMany(sampleproducts)
    res.json({ createdProducts })
  })
)
