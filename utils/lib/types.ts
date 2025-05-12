export type Variants = {
    sku: string,
    color: string,
    size: string,
    price: number,
    stock: number,
    images: string[],
    attributes: {[key: string]: string | number}
}

export type ProductType = {
    _id: number,
    name: string,
    description: string,
    category: string,
    subCategory: string,
    brand: string,
    variants: Variants[],
    specifications: [{
        key: string,
        value: string | number
    }],
    
    reviews: [{
        user: string,
        rating: number,
        comment: string,
        createdAt: string
    }],

    averageRating: number,
    status: string,
    tags: string[],
    weight: number,
    dimensions: {
        width: number,
        height: number,
        length: number
    }
    isfeatured: boolean,
    totalStock: number,
    createdAt: string,
    updatedAt: string,
    
}

export type ProductAction = {
    setProducts: (products: ProductType[]) => void,
    addProduct: (product: ProductType) => void,
    removeProduct: (id: number) => void,
    updateProduct: (updatedProduct: ProductType) => void,
}

export type ProductStore = {
    products: ProductType[] 
} 

export type ProductStoreType = ProductStore & ProductAction
