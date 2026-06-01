import DomeGallery from "@/components/heroplex";


 

export default function Gallery() {
  return (

<div style={{ width: '100vw', height: '100vh' }}>
      <DomeGallery
  fit={0.8}
  minRadius={600}
  maxVerticalRotationDeg={0}
  segments={34}
  dragDampening={2}
  grayscale
/>
    </div>


 




  
  );
}


 