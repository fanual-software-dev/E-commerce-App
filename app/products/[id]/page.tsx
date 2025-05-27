"use client";
import Details from "@/components/products/Details";
import { baseAPI } from "@/schemas/AxiosInstance";
import { ProductType } from "@/utils/lib/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProoduct] = useState<ProductType>();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean | string>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const serverResponse = await baseAPI.get(`/api/product/${id}`);

        if (serverResponse.status === 200) {
          setProoduct(serverResponse.data.data);
          setError(false);
        } else {
          setError("Product not fetched because of some error");
        }

        console.log(serverResponse);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      }

      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      {loading && <p className="text-white ">Loading...</p>}
      {product && <Details product={product} />}
      {error && <p className="text-white">{error}</p>}
    </>
  );
};

export default ProductDetail;
