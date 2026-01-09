import React from 'react';
import AnimatedSection from './AnimatedSection';

const AnimationDemo = () => {
  return (
    <div className="py-20 space-y-20">
      {/* Demo section showing different animation types */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">Animation Demo</h2>
        <p className="text-lg text-gray-300 mb-12">Scroll down to see different animation effects</p>
      </div>

      {/* Fade Up Animation */}
      <AnimatedSection animationType="fadeUp" delay={0.2} duration={1}>
        <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Fade Up Animation</h3>
          <p>This section fades in from bottom with a smooth upward motion</p>
        </div>
      </AnimatedSection>

      {/* Slide In Left */}
      <AnimatedSection animationType="slideInLeft" delay={0.3} duration={1.2}>
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Slide In Left</h3>
          <p>This section slides in from the left side</p>
        </div>
      </AnimatedSection>

      {/* Slide In Right */}
      <AnimatedSection animationType="slideInRight" delay={0.2} duration={1.1}>
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Slide In Right</h3>
          <p>This section slides in from the right side</p>
        </div>
      </AnimatedSection>

      {/* Fade In */}
      <AnimatedSection animationType="fadeIn" delay={0.4} duration={0.8}>
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Fade In</h3>
          <p>This section simply fades in with opacity transition</p>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AnimationDemo;
