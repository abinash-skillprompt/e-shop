const CartProduct = () => {
  return (
    <div className="grid grid-cols-3 gap-4 items-center text-gray-800">
      <div className="flex items-center">
        <img
          src="https://via.placeholder.com/50"
          alt="Plain Mirror"
          className="w-12 h-12 rounded-md mr-4"
        />
        <div>
          <p className="font-medium">Plain Mirror</p>
          <p className="text-sm text-gray-500">Rs. 25,000</p>
        </div>
      </div>
      <div>1</div>
      <div className="flex justify-between items-center">
        <p>Rs 25,000</p>
        <button className="text-red-500 hover:text-red-700">Delete</button>
      </div>
    </div>
  );
};

export default CartProduct;
