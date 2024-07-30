// "use client";

// import React, { useState, useEffect } from 'react';
// import anime from 'animejs';

// const DotGrid: React.FC = () => {
//   const [gridDimensions, setGridDimensions] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const updateGridSize = () => {
//       const dotSize = 50; // Updated dot size
//       const width = window.innerWidth;
//       const height = window.innerHeight;

//       const newGridWidth = Math.floor(width / dotSize);
//       const newGridHeight = Math.floor(height / dotSize);

//       setGridDimensions({ width: newGridWidth, height: newGridHeight });
//     };

//     updateGridSize(); // Initial setup
//     window.addEventListener('resize', updateGridSize);

//     return () => {
//       window.removeEventListener('resize', updateGridSize);
//     };
//   }, []);

//   const handleDotHover = (e: React.MouseEvent<HTMLDivElement>) => {
//     const index = Number(e.currentTarget.dataset.index);
//     anime({
//       targets: ".dot-point",
//       scale: [
//         { value: 1.35, easing: "easeOutSine", duration: 250 },
//         { value: 1, easing: "easeInOutQuad", duration: 500 },
//       ],
//       translateY: [
//         { value: -15, easing: "easeOutSine", duration: 250 },
//         { value: 0, easing: "easeInOutQuad", duration: 500 },
//       ],
//       opacity: [
//         { value: 1, easing: "easeOutSine", duration: 250 },
//         { value: 0.5, easing: "easeInOutQuad", duration: 500 },
//       ],
//       delay: anime.stagger(100, {
//         grid: [gridDimensions.width, gridDimensions.height],
//         from: index,
//       }),
//     });
//   };

//   const dots = [];
//   let index = 0;

//   for (let i = 0; i < gridDimensions.width; i++) {
//     for (let j = 0; j < gridDimensions.height; j++) {
//       dots.push(
//         <div
//           onMouseEnter={handleDotHover}
//           className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
//           data-index={index}
//           key={`${i}-${j}`}
//         >
//           <div className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"></div>
//         </div>
//       );
//       index++;
//     }
//   }

//   return (
//     <div
//       style={{ gridTemplateColumns: `repeat(${gridDimensions.width}, 1fr)` }}
//       className="grid w-fit gap-2"
//     >
//       {dots}
//     </div>
//   );
// };

// const WaterGridDrop: React.FC = () => {
//   return (
//     <div className="relative grid h-screen place-content-center px-8">
//       <DotGrid />
//     </div>
//   );
// };

// export default WaterGridDrop;
