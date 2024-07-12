import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ProductList = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  return (
    <div>
      <div className="overflow-x-auto ">
        <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6">
          <thead>
            <tr className="bg-[#333333] text-white">
              <th className="py-3 px-6 text-left border-b">Product Name</th>
              <th className="py-3 px-6 text-left border-b">Product Brand</th>
              <th className="py-3 px-6 text-left border-b">Price</th>
              <th className="py-3 px-6  border-b text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-50 transition duration-300">
              <td className="py-4 px-6 border-b">Micro Keyboard </td>
              <td className="py-4 px-6 border-b">Walton</td>
              <td className="py-4 px-6 border-b">1500</td>
              <td className="py-4 px-6 border-b text-end">
                <button
                  onClick={() => setOpenModal2(true)}
                  className="bg-blue-600 p-2 rounded-lg ml-5 text-white"
                >
                  <FaRegEdit className="text-3xl " />
                </button>
                <button
                  onClick={() => setOpenModal1(true)}
                  className="bg-red-600 p-2 rounded-lg ml-5 text-white"
                >
                  <MdOutlineDeleteOutline className="text-3xl " />
                </button>
              </td>
            </tr>
            {/* Delete Modal */}
            <div
              onClick={() => setOpenModal1(false)}
              className={`fixed z-[100] flex items-center justify-center ${
                openModal1 ? "opacity-1 visible" : "invisible opacity-0"
              } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
            >
              <div
                onClick={(e_) => e_.stopPropagation()}
                className={`absolute w-80 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
                  openModal1
                    ? "opacity-1 translate-y-0 duration-300"
                    : "translate-y-20 opacity-0 duration-150"
                }`}
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  <svg
                    className="w-16 stroke-rose-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      <path
                        opacity="0.4"
                        d="M12 7.75V13"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        opacity="0.4"
                        d="M12 16.2002V16.3002"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                  <h6 className="text-center text-sm font-medium opacity-70">
                    Do you want to delete it?
                  </h6>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setOpenModal1(false)}
                      className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setOpenModal1(false)}
                      className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white"
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Update Modal */}
            <div
              onClick={() => setOpenModal2(false)}
              className={`fixed z-[100] flex items-center justify-center ${
                openModal2 ? "opacity-1 visible" : "invisible opacity-0"
              } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
            >
              <div
                onClick={(e_) => e_.stopPropagation()}
                className={`absolute w-80 rounded-lg bg-white p-6 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
                  openModal2
                    ? "opacity-1 translate-y-0 duration-300"
                    : "translate-y-20 opacity-0 duration-150"
                }`}
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  <p className="text-xl font-semibold">Update the Keyboard</p>
                  {/* update from */}
                  <form className="w-full space-y-6">
                    {/* name */}
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                      <label
                        className="block font-medium text-start"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight  focus:ring-[#434141] dark:border-zinc-700"
                        id="name"
                        placeholder="Product Name"
                        name="name"
                        type="text"
                      />
                    </div>
                    {/* brand */}
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                      <label
                        className="block font-medium text-start"
                        htmlFor="brand"
                      >
                        Brand
                      </label>
                      <input
                        className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight  focus:ring-[#434141] dark:border-zinc-700"
                        id="brand"
                        placeholder="Product Brand"
                        name="brand"
                        type="text"
                      />
                    </div>
                    {/* quantity and Price */}
                    <div className="flex gap-5 justify-between">
                      <div className="flex-1 space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label
                          className="block font-medium text-start"
                          htmlFor="brand"
                        >
                          Quantity
                        </label>
                        <input
                          className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight  focus:ring-[#434141] dark:border-zinc-700"
                          id="quantity"
                          placeholder="Enter Quantity"
                          name="quantity"
                          type="number"
                        />
                      </div>
                      <div className="flex-1 space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                        <label
                          className="block font-medium text-start"
                          htmlFor="brand"
                        >
                          Price
                        </label>
                        <input
                          className="h-10 w-full rounded border px-3 py-2 text-sm leading-tight  focus:ring-[#434141] dark:border-zinc-700"
                          id="price"
                          placeholder="Product Brand"
                          name="price"
                          type="text"
                        />
                      </div>
                    </div>
                    {/* description */}
                    <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-400">
                      <label
                        className="block font-medium text-start"
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <textarea
                        className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:ring-[#434141] dark:border-zinc-700"
                        id="description"
                        placeholder="Write About the product"
                        name="description"
                      />
                    </div>
                  </form>
                  {/* button */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setOpenModal2(false)}
                      className="rounded-md bg-indigo-600 px-6 py-2 text-sm text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setOpenModal2(false)}
                      className="rounded-md border border-rose-600 px-6 py-2 text-sm text-rose-600 hover:bg-rose-600 hover:text-white"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
