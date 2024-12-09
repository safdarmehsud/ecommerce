import Icons from "../assets/Icons/Icons";
const Navigation = () => {
  return (
    <>
      <div className="main-nav flex justify-between shadow-lg">
        <div className="nav-logo flex ml-3">
          <i className="text-5xl">
            <Icons.FaBagShopping className="text-orange-600 mt-2" />
          </i>
          <p className="text-6xl text-black font-bold">E</p>
          <p className="text-4xl text-orange-600 font-bold flex mt-2">
            commerce
          </p>
        </div>
        <div className="nav-menu-items">
          <ul className="flex">
            <li className="p-2 text-lg font-semibold">Home</li>
            <li className="p-2 text-lg font-semibold">About Us</li>
            <li className="p-2 text-lg font-semibold">Blog</li>
            <li className="p-2 text-lg font-semibold">Pages</li>
            <li className="p-2 text-lg font-semibold">Contact Us</li>
          </ul>
        </div>
        <div className="nav-search-bar p-2">
          <form action="action">
            <input
              type="search"
              placeholder="Search Items"
              className=" border-none outline-orange-400 outline-4 h-8 w-[100%] shadow-lg  rounded-md placeholder:pl-2 p-2"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default Navigation;
