// import React, { useState, useEffect } from 'react'
// // import bg from '../assets/slider-sl.png'
// import videoBg from '../assets/Travel-Intro.mp4'

// const TopIntro = () => {
//   const [showBg, setShowBg] = useState(false)
//   const [animateText, setAnimateText] = useState(false)
//   const [startFlow, setStartFlow] = useState(false)

//   useEffect(() => {
//     setAnimateText(true)
//     const flowTimer = setTimeout(() => {
//       setStartFlow(true)
//     }, 900) // Border first, then flowing fill
//     const bgTimer = setTimeout(() => {
//       setShowBg(true)
//     }, 1800)
//     return () => {
//       clearTimeout(flowTimer)
//       clearTimeout(bgTimer)
//     }
//   }, [])

//   return (
//     <section
//       id="home"
//       className="relative text-white min-h-[640px] sm:min-h-[700px] md:min-h-[760px] overflow-hidden"
//       // style={{
//       //   background: showBg ? `url(${bg}) center/cover` : '#000',
//       //   transition: 'background-image 1.2s ease, background 1.2s ease',
//       // }}
//     >
//       {/* Video background, animated fade-in */}
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src={videoBg}
//         autoPlay
//         loop
//         muted
//         playsInline
//         style={{
//           opacity: showBg ? 1 : 0,
//           transform: showBg ? 'translateX(0)' : 'translateX(100%)',
//           transition: 'opacity 1.2s ease, transform 1.2s cubic-bezier(.77,0,.18,1)',
//           zIndex: 0,
//         }}
//       />
//       {/* Black overlay for fade effect */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: showBg ? 'rgba(0,0,0,0.3)' : '#000',
//           transition: 'background 1.2s ease',
//           zIndex: 1,
//         }}
//       />
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col justify-end h-full" style={{ zIndex: 2 }}>
//         <div className="flex flex-col gap-4 max-w-xl mb-8">
//           <div
//             className="mb-2"
//             style={{
//               transform: animateText ? (showBg ? 'translateY(-60px)' : 'translateY(0)') : 'translateY(80px)',
//               opacity: animateText ? 1 : 0,
//               transition: 'transform 1.2s cubic-bezier(.77,0,.18,1), opacity 0.8s',
//             }}
//           >
//             <h1
//               className={`flowing-headline${startFlow ? ' flowing' : ''}`}
//               style={{
//                 fontFamily: 'serif',
//                 fontWeight: 500,
//                 fontSize: '5.5rem',
//                 lineHeight: 1.1,
//                 letterSpacing: '-2px',
//                 marginBottom: '0.5rem',
//                 WebkitTextStroke: '1px white',
//                 color: 'transparent',
//                 background: startFlow
//                   ? 'linear-gradient(90deg, white 60%, transparent 100%)'
//                   : 'none',
//                 backgroundClip: startFlow ? 'text' : 'initial',
//                 WebkitBackgroundClip: startFlow ? 'text' : 'initial',
//                 WebkitTextFillColor: startFlow ? 'white' : 'transparent',
//                 textShadow: startFlow ? '2px 2px 8px #000' : 'none',
//                 transition: 'background 1.2s, WebkitTextFillColor 1.2s',
//                 animation: startFlow ? 'flowFill 1.2s forwards' : 'none',
//               }}
//             >
//               <p className="uppercase tracking-widest text-sm text-white/80 mb-2 pt-55">Mountains | Plains | Beaches</p>
//             {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow"> */}
//               Spend your vacation
//               <br className="hidden sm:block" /> with our activities
//             {/* </h2> */}
//             </h1>
//             {/* Add keyframes for flowing effect */}
//             <style>{`
//               @keyframes flowFill {
//                 0% {
//                   background-position: -100% 0;
//                   WebkitTextFillColor: transparent;
//                 }
//                 100% {
//                   background-position: 0 0;
//                   WebkitTextFillColor: white;
//                 }
//               }
//               .flowing-headline.flowing {
//                 background-size: 200% 100%;
//                 background-position: -100% 0;
//                 animation: flowFill 1.2s forwards;
//               }
//             `}</style>
            
//             {/* <p className="uppercase tracking-widest text-sm text-white/80 mb-2 pt-55">Mountains | Plains | Beaches</p>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow">
//               Spend your vacation
//               <br className="hidden sm:block" /> with our activities
//             </h2> */}
//           </div>


//           {/* <div>
//             <p className="text-white/90 font-medium mb-3">Most Popular</p>
//             <div className="flex items-stretch gap-4">
//               {topPackages.map((pkg, idx) => (
//                 <div
//                   key={idx}
//                   className="w-40 sm:w-44 bg-white/10 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-[2px] hover:bg-white/15 transition-colors shadow-lg"
//                 >
//                   <div className="aspect-[4/3] overflow-hidden">
//                     <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
//                   </div>
//                   <div className="p-2.5">
//                     <h3 className="text-sm font-semibold leading-tight">{pkg.title}</h3>
//                     <p className="text-[10px] text-white/80">Featured destination</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div> */}

//         </div>
//       </div>
//     </section>
//   )
// }

// export default TopIntro


import React, { useState, useEffect } from 'react'
import bg1 from '../assets/bg1.webp'
import bg2 from '../assets/bg2.webp'
import bg3 from '../assets/bg3.webp'
import bg4 from '../assets/bg4.webp'
import bg5 from '../assets/bg5.webp'
import bg6 from '../assets/bg6.webp'
import bg7 from '../assets/bg7.webp'
import bg8 from '../assets/bg8.webp'
import bg9 from '../assets/bg9.webp'
import bg10 from '../assets/bg10.webp'
import bg11 from '../assets/bg11.webp'

const TopIntro = ({ packages = [] }) => {
    // const topPackages = packages.slice(0, 3)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [ bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11]


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      // className="relative text-white min-h-[640px] sm:min-h-[700px] md:min-h-[760px]"
      className="relative text-white min-h-[340px] sm:min-h-[400px] md:min-h-[580px]"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col justify-end h-full">
        <div className="flex flex-col gap-4 max-w-xl mb-8">
          <div className="mb-2">
            <p className="uppercase tracking-widest text-sm text-white/80 mb-2 pt-55">Mountains | Beaches | Skyscrapers</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight drop-shadow">
              From God’s Own Country to Tropical Wonders
              <br className="hidden sm:block" /> Your Journey Begins Here
            </h2>
          </div>

          {/* <div>
            <p className="text-white/90 font-medium mb-3">Most Popular</p>
            <div className="flex items-stretch gap-4">
              {topPackages.map((pkg, idx) => (
                <div
                  key={idx}
                  className="w-40 sm:w-44 bg-white/10 border border-white/20 rounded-2xl overflow-hidden backdrop-blur-[2px] hover:bg-white/15 transition-colors shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-2.5">
                    <h3 className="text-sm font-semibold leading-tight">{pkg.title}</h3>
                    <p className="text-[10px] text-white/80">Featured destination</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default TopIntro


