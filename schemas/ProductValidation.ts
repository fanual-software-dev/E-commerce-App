import { z } from "zod";

//     export type Variants = {
//     sku: string,
//     color: string,
//     size: string,
//     price: number,
//     stock: number,
//     images: string[],
//     attributes: {[key: string]: string | number}
// }

// export type ProductType = {
//     _id: number,
//     name: string,
//     description: string,
//     category: string,
//     subCategory: string,
//     brand: string,
//     variants: Variants[],
//     specifications: [{
//         key: string,
//         value: string | number
//     }],

//     reviews: [{
//         user: string,
//         rating: number,
//         comment: string,
//         createdAt: string
//     }],

//     averageRating: number,
//     status: string,
//     tags: string[],
//     weight: number,
//     dimensions: {
//         width: number,
//         height: number,
//         length: number
//     }
//     isfeatured: boolean,
//     totalStock: number,
//     createdAt: string,
//     updatedAt: string,

// }

export const ProductValidationForm = z.object({
  name: z.string().min(1, "Name of product should be at least one character"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  subcategory: z.string().min(1, "Subcategory is required"),
  brand: z.string().min(1, "Brand is required"),
  status: z.string().min(1, "Status is required"),
  totalStock: z.number().min(0, "Total stock can't be negative"),
  weight: z.number().min(0, "Weight can't be negative"),
  tags: z.string().min(1, "Tags are required"),
});

export const DimensionsValidation = z.object({
  height: z.number().min(0, "height can't be negative"),
  width: z.number().min(0, "width can't be negative"),
  length: z.number().min(0, "length can't be negative"),
});

export const VariantsVaidation = z.object({
  sku: z.number().min(0, "SKU can't be negative"),
  color: z.string().min(1, "Color is required"),
  size: z.string().min(1, "Size can't be less than 1"),
  price: z.number().min(0, "Price can't be negative"),
  stock: z.number().min(0, "Stock can't be negative"),
  images: z.string().min(1, "Images are required"),
});

export type ProductValidationFormType = z.infer<typeof ProductValidationForm>;
export type DimensionsValidationType = z.infer<typeof DimensionsValidation>;
export type VariantsVaidationType = z.infer<typeof VariantsVaidation>;
