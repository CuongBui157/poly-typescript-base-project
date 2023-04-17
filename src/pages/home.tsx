import { useEffect, useState } from "react";
import Product from "../components/products";
import { IProduct } from "../models";
import { getAll } from "../api/product";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProduct = async () => {
    const { data } = await getAll();
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(products);
  return (
    <>
      <h1 className=" text-lg font-bold px-[10%] py-[20px]">New Product</h1>
      <div className="flex flex-row gap-x-[10px] gap-y-[10px] mx-[10%]">
        {products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
