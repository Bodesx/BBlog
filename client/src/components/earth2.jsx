
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export default function Earth2() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 100 * 2,
      height: 100 * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 30000,
      mapBrightness: 6,
      baseColor: [1, 0.5, 3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 2],
      opacity: 1,
      offset: [-300, 0],
      markers: [],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div className="App flex items-center justify-center z-[10]">
      <canvas
        ref={canvasRef}
        style={{  }}
      />
    </div>
  );
}
