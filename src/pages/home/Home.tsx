import BannerSlider from "../../components/bannerSlider/BannerSlider";
import Featured from "../../components/featured/Featured";

const Home = () => {
  return (
    <>
      <div className="bg-[#989898] space-y-7 min-h-screen">
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
      </div>
    </>
  );
};

export default Home;
