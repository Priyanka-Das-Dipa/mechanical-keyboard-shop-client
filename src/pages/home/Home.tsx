import BannerSlider from "../../components/bannerSlider/BannerSlider";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <div
        className="min-h-screen"
        style={{
          backgroundImage:
            "linear-gradient(315deg, rgba(240, 240, 240, 1), rgba(0, 0, 0, 1) 100%)",
        }}
      >
        <div className="container mx-auto">
          {/* <Navbar /> */}
          <BannerSlider />
        </div>
      </div>
    </>
  );
};

export default Home;
