import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page h-screen p-5 flex flex-col justify-start  items-center gap-80">
      <div className="font-bold text-white text-[30px] mt-10">
        Welcome To Our Store
      </div>
      <Link
        to="/products"
        className="bg-white px-6 py-3 rounded-[7px] hover:bg-blue-700 hover:text-white duration-300"
      >
        Get Started!
      </Link>
    </div>
  );
};

export default HomePage;
