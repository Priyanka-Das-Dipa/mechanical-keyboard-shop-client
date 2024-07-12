import img1 from "../../../public/images/feature-1.webp";
import img2 from "../../../public/images/feature-2.webp";
import img3 from "../../../public/images/feature-3.webp";

const FeaturedBrands = () => {
  return (
    <div className="container mx-auto pt-24">
      <h1 className="text-5xl font-bold">Featured Brands</h1>
      <p className="text-lg font-medium pt-2">Some brands that we work with</p>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="bg-[#d9d9d9] pt-28 space-y-5 px-20 rounded-tl-2xl">
          <h1 className="text-5xl font-extrabold">kfaPBT Keycaps</h1>
          <p className="text-base font-medium">
            If you're looking for a unique and exclusive keycap set to style
            your keyboard to your own preferences, we encourage you to explore
            our collection of custom, one-of-a-kind keycaps.
          </p>
          <button className="rounded-full px-10 py-4 bg-slate-800 text-white text-base font-medium">
            Explore
          </button>
        </div>
        <div className="overflow-hidden">
          <img
            src={img1}
            alt=""
            className="transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={img2}
            alt=""
            className="transform transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="bg-[#d9d9d9] pt-28 space-y-5 px-20 ">
          <h1 className="text-5xl font-extrabold">KFA Switches</h1>
          <p className="text-base font-medium">
            If you're looking for a unique and exclusive keycap set to style
            your keyboard to your own preferences, we encourage you to explore
            our collection of custom, one-of-a-kind keycaps.
          </p>
          <button className="rounded-full px-10 py-4 bg-slate-800 text-white text-base font-medium">
            Explore
          </button>
        </div>
        <div className="bg-[#d9d9d9] pt-28 space-y-5 px-20 rounded-bl-2xl">
          <h1 className="text-5xl font-extrabold">KFA Deskmats</h1>
          <p className="text-base font-medium">
            If you're looking for a unique and exclusive keycap set to style
            your keyboard to your own preferences, we encourage you to explore
            our collection of custom, one-of-a-kind keycaps.
          </p>
          <button className="rounded-full px-10 py-4 bg-slate-800 text-white text-base font-medium">
            Explore
          </button>
        </div>
        <div className="overflow-hidden">
          <img
            src={img3}
            alt=""
            className="transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedBrands;
