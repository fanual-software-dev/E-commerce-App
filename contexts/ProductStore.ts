import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { ProductStoreType,ProductType } from '@/utils/lib/types'

export const useProductStore = create<ProductStoreType>()(persist(set=>({
    products: [],
    setProducts: (products:ProductType[]) => set(() => ({products})),
    addProduct: (product:ProductType) => set((state) => ({products: [...state.products, product]})),
    removeProduct: (id:number) => set((state) => ({products: state.products.filter((product) => product._id !== id)})),
    updateProduct: (updatedProduct:ProductType) => set((state) => ({
        products: state.products.map((product) =>
            product._id === updatedProduct._id ? updatedProduct : product
        )
    })),
}),
{
    name: 'product-storage',
    partialize: (state) => ({products: state.products}),
}))