
import { motion } from "framer-motion";
import ExampleButton from "./ebutton";


const FuzzyOverlayExample = () => {
  return (
    // NOTE: An overflow of hidden will be required on a wrapping
    // element to see expected results
    <div className="relative overflow-hidden">
      <ExampleContent />
      <FuzzyOverlay />
    </div>
  );
};

const FuzzyOverlay = () => {
  return (
    <motion.div
      initial={{ transform: "translateX(-10%) translateY(-10%)" }}
      animate={{
        transform: "translateX(10%) translateY(10%)",
      }}
      transition={{
        repeat: Infinity,
        duration: 0.2,
        ease: "linear",
        repeatType: "mirror",
      }}
      // You can download these PNGs here:
      // https://www.hover.dev/black-noise.png
      // https://www.hover.dev/noise.png
      style={{
        backgroundImage: 'url("https://www.hover.dev/black-noise.png")',
        // backgroundImage: 'url("/noise.png")',
      }}
      className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
    />
  );
};

const ExampleContent = () => {
  return (
    <div className="relative grid h-screen place-content-center space-y-6  p-8">
      <p className="text-center text-6xl font-black dark:text-white">
        Read the show
      </p>
      <p className="text-center dark:text-white">
        its might be fuzzy now but it makes sense later 📺
      </p>
      <div className="flex items-center justify-center gap-3">
         <ExampleButton >
        
        </ExampleButton>
        
      </div>
    </div>
  );
};

export default FuzzyOverlayExample;