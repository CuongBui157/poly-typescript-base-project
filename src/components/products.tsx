import { IProduct } from "../models";

type Props = {
  data: IProduct;
};

const Product = ({data}: Props) => {
  return (
    <>
      <div className=" bg-gray-200 rounded-lg overflow-hidden shadow-lg">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{data.name}</h2>
          <p className="text-sm text-gray-600">{data.brand}</p>
          <p className="text-sm text-gray-600">{data.description}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm font-medium text-gray-800">${data.price}</span>
            <span className="text-sm text-gray-600">{data.origin}</span>
          </div>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
