interface BannerProps {
  videoUrl: string;
}

const Banner = ({ videoUrl }: BannerProps) => {
  return (
    <div className="relative h-[50vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoUrl}
        autoPlay
        loop
        muted
        preload="auto"
        poster=""
        style={{ filter: "blur(2px)" }} // 添加轻微模糊效果
      />
      {/* 去掉了 backdrop-blur-md 类，降低bg-opacity-30值，可以降低模糊度 */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h2 className="text-4xl text-white font-bold">
          Explore Latest Game Resources
        </h2>
      </div>
    </div>
  );
};

export default Banner;
