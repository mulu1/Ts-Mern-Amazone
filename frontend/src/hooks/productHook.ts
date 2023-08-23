import { useQuery } from '@tanstack/react-query'
import apiClient from '../apiClient'
import { product } from '../types/Product'

export const useGetProductsQuery = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => (await apiClient.get<product[]>(`api/products`)).data,
  })

export const useGetProductDetailsBySlugQuery = (slug: string) =>
  useQuery({
    queryKey: ['products', slug],
    queryFn: async () =>
      (await apiClient.get<product>(`api/products/slug/${slug}`)).data,
  })
