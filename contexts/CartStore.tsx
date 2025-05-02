import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export type CartItem = {
    id:number,
    name:string,
    price:number,
    quantity:number,
    imgUrl:string,

}

export type State = {
    cartItems: CartItem[]
}

export type Actions = {
    addToCart: (item:CartItem)=>void,
    removeFromCart: (id:number) => void,
    increaseItemQun: (id:number) => void,
    decreaseItemQun: (id:number) => void
}

export type CartStore = State & Actions

export const useCartStore = create<CartStore>()(persist(set => ({
    
    cartItems: [],
    
    addToCart: (item : CartItem) => set((state)=>({cartItems:[...state.cartItems,item]})),
    
    removeFromCart: (id : number) => set((state)=>({cartItems: state.cartItems.filter((item)=> (item.id !== id ) )})),
    
    decreaseItemQun: (id:number)=>set((state)=>({cartItems: state.cartItems.map((item)=>{
        if (item.id ==id){
            const newItem = {...item, quantity:item.quantity - 1}
            return newItem
        }

        else return item
    })})),
    
    increaseItemQun: (id:number)=>set((state)=>({cartItems: state.cartItems.map((item)=>{
        if (item.id ==id){
            const newItem = {...item, quantity:item.quantity + 1}
            return newItem
        }

        else return item
    })}))
    
}),

{
    name:'cartItem-storage',
    partialize: state => ({cartItems: state.cartItems})
}
))