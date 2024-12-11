import Icons from "../assets/Icons/Icons";
const Navigation = () => {
  return (
    <>
      <div className="main-nav flex justify-between shadow-lg rounded-t-lg">
        <div className="nav-logo flex ml-3">
          <i className="text-5xl">
            <Icons.FaBagShopping className="text-orange-600 mt-2" />
          </i>
          <p className="text-6xl text-black font-bold">E</p>
          <p className="text-4xl text-orange-600 font-bold flex mt-3 uppercase">
            commerce
          </p>
        </div>
        <div className="nav-menu-items">
          <ul className="flex mt-2">
            <li className="p-3 text-lg font-semibold  cursor-pointer ">Home</li>
            <li className="p-3 text-lg font-semibold  cursor-pointer">
              About Us
            </li>
            <li className="p-3 text-lg font-semibold  cursor-pointer">Blog</li>
            <li className="p-3 text-lg font-semibold  cursor-pointer">
              Products
            </li>
            <li className="p-3 text-lg font-semibold  cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="nav-search-bar p-2">
          <form action="action">
            <input
              type="search"
              placeholder="Search Items"
              className=" border-none outline-orange-400 outline-4 h-8 w-[100%] shadow-lg  rounded-md placeholder:pl-2 p-5 "
            />
          </form>
        </div>
        <div className="nav-signup-signout-div flex p-2">
          <button className="h-[40px] w-[80px] bg-orange-600 rounded-lg font-semibold hover:text-white hover:bg-black duration-300">
            SignIn
          </button>
          <button className="h-[40px] w-[80px] bg-orange-600 ml-1 rounded-lg font-semibold hover:text-white hover:bg-black duration-300">
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};
export default Navigation;
