import BannerSlider from "../../components/bannerSlider/BannerSlider";
import FAQ from "../../components/faq/FAQ";
import FeaturedBrands from "../../components/featured/FeaturedBrands";
import Featured from "../../components/featured/FeaturedItems";

const Home = () => {
  return (
    <>
      <div className="bg-[#f0f0f0] space-y-7 min-h-screen pb-24">
        <div
          className="pb-28"
          style={{
            backgroundImage:
              "linear-gradient(315deg, rgba(240, 240, 240, 1), rgba(0, 0, 0, 1) 100%)",
          }}
        >
          <BannerSlider />
        </div>
        <Featured />
        <FeaturedBrands />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
