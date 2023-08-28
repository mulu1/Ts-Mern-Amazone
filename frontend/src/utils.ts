import { ApiError } from './types/ApiError'
import { CartItem } from './types/Cart'
import { product } from './types/Product'

export const getError = (error: ApiError) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message
}
export const convertProductToCartItem = (product: product): CartItem => {
  const cartItem: CartItem = {
    _id: product._id,
    name: product.name,
    slug: product.slug,
    image: product.image,
    price: product.price,
    countInStock: product.countInstock,
    quantity: 1,
  }
  return cartItem
}
