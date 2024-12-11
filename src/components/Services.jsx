import Icons from "../assets/Icons/Icons";
const Services = () => {
  return (
    <>
      <div className="services-main mt-10 h-[200px]">
        <div className="services  h-[150px] flex justify-center items-center">
          <ul className="flex justify-between w-[80%]  m-auto  ">
            <li className="block text-center h-[100px] w-[200px] bg-orange-400 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <Icons.CiDeliveryTruck className="text-6xl m-auto text-white" />{" "}
              <p className="font-semibold text-lg text-white">Delivery</p>
            </li>
            <li className="block text-center h-[100px] w-[200px] bg-orange-400 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <Icons.FaProductHunt className="text-6xl m-auto text-white" />{" "}
              <p className="font-semibold text-lg text-white">
                Quality Product
              </p>
            </li>
            <li className="block text-center h-[100px] w-[200px] bg-orange-400 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <Icons.MdPayment className="text-6xl m-auto text-white" />{" "}
              <p className="font-semibold text-lg text-white">Safe Payment</p>
            </li>
            <li className="block text-center h-[100px] w-[200px] bg-orange-400 rounded-lg cursor-pointer hover:scale-105 duration-300">
              <Icons.BiSupport className="text-6xl m-auto text-white" />{" "}
              <p className="font-semibold text-lg text-white">
                Customer Support
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Services;
