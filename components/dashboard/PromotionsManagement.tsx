"use client";
import { useUserStore } from "@/contexts/UserStore";
import { useProductStore } from "@/contexts/ProductStore";
import React, { useState } from "react";

interface Promotion {
  id: number;
  title: string;
  discount: number;
  productIds: number[];
}

const PromotionsManagement = () => {
  const user = useUserStore((state) => state.user);
  const products = useProductStore((state) => state.products);
  const [promotions, setPromotions] = useState<Promotion[]>([
    {
      id: 1,
      title: "Summer Sale",
      discount: 20,
      productIds: products.slice(0, 2).map((p) => p._id),
    },
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newDiscount, setNewDiscount] = useState(0);
  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);

  const handleProductSelect = (id: number) => {
    setSelectedProductIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id],
    );
  };

  const handleAddPromotion = () => {
    if (!newTitle || !newDiscount || selectedProductIds.length === 0) return;
    setPromotions((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newTitle,
        discount: newDiscount,
        productIds: selectedProductIds,
      },
    ]);
    setNewTitle("");
    setNewDiscount(0);
    setSelectedProductIds([]);
  };

  const handleRemovePromotion = (id: number) => {
    setPromotions((prev) => prev.filter((promo) => promo.id !== id));
  };

  return (
    <div className="text-white py-8 px-2 xl:pl-24">
      <p>Welcome Back, {user?.firstName ?? ""}</p>
      <div className="mt-8 bg-[#1A1A1A] rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Promotions & Discounts</h2>
        <p className="mb-6 text-gray-300">
          Create promotions and apply them to multiple products.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#232323] rounded-lg p-4">
            <h3 className="font-semibold mb-2">Add New Promotion</h3>
            <input
              className="w-full p-2 rounded bg-[#181818] text-white mb-2"
              placeholder="Promotion Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <label
              className="block text-sm text-gray-400 mb-1"
              htmlFor="discount-input"
            >
              Discount (%)
            </label>
            <input
              id="discount-input"
              className="w-full p-2 rounded bg-[#181818] text-white mb-2"
              placeholder="e.g. 10 for 10%"
              type="number"
              value={newDiscount}
              onChange={(e) => setNewDiscount(Number(e.target.value))}
            />
            <div className="mb-2">
              <p className="mb-1 text-sm text-gray-400">Select Products:</p>
              <div className="max-h-32 overflow-y-auto border border-[#181818] rounded p-2 bg-[#181818]">
                {products.length === 0 && (
                  <span className="text-xs text-gray-500">
                    No products available
                  </span>
                )}
                {products.map((product) => (
                  <label
                    key={product._id}
                    className="flex items-center gap-2 text-xs cursor-pointer mb-1"
                  >
                    <input
                      type="checkbox"
                      checked={selectedProductIds.includes(product._id)}
                      onChange={() => handleProductSelect(product._id)}
                    />
                    <span>
                      {product.name}{" "}
                      <span className="text-gray-400">
                        ({product.category})
                      </span>
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <button
              className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition w-full"
              onClick={handleAddPromotion}
            >
              Add Promotion
            </button>
          </div>
          <div className="bg-[#232323] rounded-lg p-4">
            <h3 className="font-semibold mb-2">Active Promotions</h3>
            <ul className="space-y-4">
              {promotions.length === 0 && (
                <li className="text-xs text-gray-500">No promotions</li>
              )}
              {promotions.map((promo) => (
                <li key={promo.id} className="bg-[#181818] p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{promo.title}</span>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400 transition text-xs"
                      onClick={() => handleRemovePromotion(promo.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">
                    Discount:{" "}
                    <span className="text-yellow-400">{promo.discount}%</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">Products:</div>
                  <ul className="ml-3 list-disc text-xs">
                    {promo.productIds.map((pid) => {
                      const prod = products.find((p) => p._id === pid);
                      return prod ? (
                        <li key={pid}>
                          {prod.name}{" "}
                          <span className="text-gray-500">
                            ({prod.category})
                          </span>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionsManagement;
