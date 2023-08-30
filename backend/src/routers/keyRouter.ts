import express from 'express'
export const keyRouter = express.Router()
// /api/keys/paypal
keyRouter.get('/paypal', (req, res) => {
  res.json({
    clientId:
      process.env.PAYPAL_CLIENT_ID ||
      'AXx413lhBz9aGqCGVCC_Orzmde41aCHVxS0yvH-ITyjwa97kbb3HVsqeYWzN3ey9LzFesreKXOjhIseI',
  })
})
