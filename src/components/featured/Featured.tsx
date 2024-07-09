const Featured = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold">Featured Product</h1>
        <div className="flex justify-center items-center gap-2 font-medium">
          Show All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 hover:cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 pt-14">
        {/* this is card */}
        <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
          <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
              {/* love  */}
              <div className="flex items-center">
                <svg
                  width={30}
                  className="cursor-pointer fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                </svg>
              </div>
              <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                30% off
              </button>
            </div>
            <img
              width={260}
              height={260}
              className="h-full w-full rounded-lg bg-black/40"
              src="https://source.unsplash.com/260x260/?macbook"
              alt="card navigate ui"
            />
          </div>
          <div className="space-y-2 font-semibold">
            <h6 className="text-sm md:text-base lg:text-lg">Product Name</h6>
            <p className="text-xs font-semibold text-gray-400 md:text-sm">
              Waterproof Sport HD Monitor for MacBook
            </p>
            <p>$20</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
            <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">
              View Details
            </button>
            <button className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
          <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
              {/* love  */}
              <div className="flex items-center">
                <svg
                  width={30}
                  className="cursor-pointer fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                </svg>
              </div>
              <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                30% off
              </button>
            </div>
            <img
              width={260}
              height={260}
              className="h-full w-full rounded-lg bg-black/40"
              src="https://source.unsplash.com/260x260/?macbook"
              alt="card navigate ui"
            />
          </div>
          <div className="space-y-2 font-semibold">
            <h6 className="text-sm md:text-base lg:text-lg">Product Name</h6>
            <p className="text-xs font-semibold text-gray-400 md:text-sm">
              Waterproof Sport HD Monitor for MacBook
            </p>
            <p>$20</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
            <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">
              View Details
            </button>
            <button className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
          <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
              {/* love  */}
              <div className="flex items-center">
                <svg
                  width={30}
                  className="cursor-pointer fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                </svg>
              </div>
              <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                30% off
              </button>
            </div>
            <img
              width={260}
              height={260}
              className="h-full w-full rounded-lg bg-black/40"
              src="https://source.unsplash.com/260x260/?macbook"
              alt="card navigate ui"
            />
          </div>
          <div className="space-y-2 font-semibold">
            <h6 className="text-sm md:text-base lg:text-lg">Product Name</h6>
            <p className="text-xs font-semibold text-gray-400 md:text-sm">
              Waterproof Sport HD Monitor for MacBook
            </p>
            <p>$20</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
            <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">
              View Details
            </button>
            <button className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="w-full max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg dark:bg-[#18181B]">
          <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
              {/* love  */}
              <div className="flex items-center">
                <svg
                  width={30}
                  className="cursor-pointer fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
                </svg>
              </div>
              <button className="rounded-xl bg-[#0095FF] px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">
                30% off
              </button>
            </div>
            <img
              width={260}
              height={260}
              className="h-full w-full rounded-lg bg-black/40"
              src="https://source.unsplash.com/260x260/?macbook"
              alt="card navigate ui"
            />
          </div>
          <div className="space-y-2 font-semibold">
            <h6 className="text-sm md:text-base lg:text-lg">Product Name</h6>
            <p className="text-xs font-semibold text-gray-400 md:text-sm">
              Waterproof Sport HD Monitor for MacBook
            </p>
            <p>$20</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base">
            <button className="rounded-lg bg-[#49B2FF] px-4 py-2 font-semibold text-white duration-300 hover:scale-105 hover:bg-sky-600">
              View Details
            </button>
            <button className="rounded-lg bg-gray-400 px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:bg-gray-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
