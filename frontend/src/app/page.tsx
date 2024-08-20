import Banner from "./components/Banner";
import ResourceList from "./components/ResourceList";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Banner videoUrl="/path/to/game-video.mp4" />
      <div className="p-8">
        <ResourceList />
      </div>
    </div>
  );
}
