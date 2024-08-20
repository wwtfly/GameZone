import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ResourceList from "./components/ResourceList";

const Home = () => {
  const categories = ["PC Games", "Console Games", "Mobile Games"];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Banner videoUrl="\videos\20240321_33e77bfa078704c2_454616011107_101598041022608_published_mp4_264_hd_taobao.mp4" />
      <div className="flex flex-col items-center">
        <ResourceList categories={categories} />
      </div>
    </div>
  );
};

export default Home;
