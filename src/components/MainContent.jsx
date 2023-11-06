import { FaClock } from "react-icons/fa";

const MainContent = () => {
  return (
    <main className="text-gray-600 px-16 py-6 bg-gray-100 md:col-span-2">
      <div className="text-red-400 flex justify-center md:justify-end">
        <a href="#" className="btn border-red-400 md:border-2 hover:bg-red-300 hover:text-white transition ease-out duration-500">
          Login
        </a>
        <a className="btn ml-4 border-red-400 md:border-2 hover:bg-red-300 hover:text-white transition ease-out duration-500" href="#">
          Sign up
        </a>
      </div>

      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 className="text-2xl font-semibold">For Ninjas</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest Recipes
        </h4>
        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          {/* cards go here */}
          <div className="card hover:shadow-lg">
            <img
              className="w-full h-32 sm:h-48 object-cover"
              src="src\assets\stew.jpg"
              alt="card"
            />
            <div className="m-4">
              <span className="font-bold">5 Bean Chilli stew</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Mario
              </span>
            </div>
            <div className="badge">
              <FaClock className="w-5 inline-block" />
              <span>25 mins</span>
            </div>
          </div>

          <div className="card hover:shadow-lg">
            <img
              className="w-full h-32 sm:h-48 object-cover"
              src="src\assets\noodles.jpg"
              alt="noodles"
            />
            <div className="m-4">
              <span className="font-bold">Veg Noodles</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Mario
              </span>
            </div>
            <div className="badge">
              <FaClock className="w-5 inline-block" />
              <span>25 mins</span>
            </div>
          </div>

          <div className="card hover:shadow-lg">
            <img
              className="w-full h-32 sm:h-48 object-cover"
              src="src\assets\curry.jpg"
              alt="curry"
            />
            <div className="m-4">
              <span className="font-bold">Beef curry</span>
              <span className="block text-gray-500 text-sm">
                Recipe by Mario
              </span>
            </div>
            <div className="badge">
              <FaClock className="w-5 inline-block" />
              <span>25 mins</span>
            </div>
          </div>
        </div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most Popular
        </h4>
        <div className="mt-8">{/* cards go here */}</div>
        <div className="flex justify-center">
          <div className="bg-gray-200 text-gray-500 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Load more</div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
