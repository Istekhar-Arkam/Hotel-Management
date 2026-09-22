import { HeroScrollDemo } from "../Components/HeroScrollDemo";
import { ThreeDMarqueeDemoSecond } from "../Components/ThreeDMarqueeDemoSecond";

function Blog() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden bg-[#09091a] text-white">
        <ThreeDMarqueeDemoSecond />
        <HeroScrollDemo />
      </div>
    </>
  );
}

export default Blog;
