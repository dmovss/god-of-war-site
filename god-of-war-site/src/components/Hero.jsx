import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import useParallax from '../hooks/useParallax';
import { FaShoppingCart } from 'react-icons/fa';

export default function Hero() {
  const offset = useParallax(0.35);
  const videoRef = useRef(null);

  function toggleSound() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
  }

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/src/assets/hero-trailer.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      <motion.div
        style={{ translateY: -offset }}
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/src/assets/logo-godofwar.png" alt="God of War" className="mx-auto w-72 md:w-96" />
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-3 bg-gold text-black font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition">
            <FaShoppingCart />
            Buy Now
          </a>
          <button onClick={toggleSound} className="px-4 py-2 border border-white/20 rounded">Toggle Sound</button>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
