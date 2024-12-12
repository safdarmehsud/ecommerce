import Icons from "../assets/Icons/Icons";

const Products = ({ product }) => {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="addToCard-icons relative">
          <ul className=" flex absolute right-[2%] mt-2 z-10">
            <li className="h-7 w-7 rounded-sm p-1 bg-slate-300 text-xl text-red-500">
              <Icons.MdFavoriteBorder />
            </li>
            <li className="h-7 w-7 rounded-sm p-1 bg-slate-300 text-xl ml-1 text-blue-600">
              <Icons.MdOutlineShoppingBag />
            </li>
          </ul>
        </div>
        {/* Product Image */}
        <div className="group">
          {" "}
          <img
            className="rounded-t-lg w-full h-60 object-cover group-hover:scale-105 duration-300"
            src={product.image}
            alt=""
          />
        </div>
        {/* Product Details */}
        <div className="p-4">
          <h5 className="text-lg font-bold text-gray-900 truncate">
            {product.name}
          </h5>
          <p className="mt-2 text-sm text-gray-600">{product.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xl font-semibold text-orange-500">
              ${product.price}
            </span>
            <button className="px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg hover:bg-orange-600 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
