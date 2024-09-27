"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Music, Footprints, Anchor, Brain, Heart, Users, Lightbulb, TrendingUp, ChevronRight } from 'lucide-react';
import imageSrc from "../assets/image.png";
import costaneraImage from "../assets/Costanera.jpg";
import kayakImage from "../assets/kayak.png";

const MotionImage = motion(Image);

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const strategies = [
    { title: "During Work", description: "Listening to relaxing music while coding", color: "teal", image: imageSrc, icon: Music },
    { title: "After Work", description: "Taking walks or bike rides along the coastline", color: "purple", image: costaneraImage, icon: Footprints },
    { title: "Weekends", description: "Kayaking and fishing with friends", color: "orange", image: kayakImage, icon: Anchor },
  ];

  const benefits = [
    { text: "Improved focus and productivity", icon: Brain, color: "blue", impact: 90 },
    { text: "Better physical health and fitness", icon: Heart, color: "red", impact: 85 },
    { text: "Enhanced mental well-being", icon: TrendingUp, color: "green", impact: 95 },
    { text: "Stronger social connections", icon: Users, color: "yellow", impact: 80 },
    { text: "Increased creativity and problem-solving skills", icon: Lightbulb, color: "purple", impact: 88 },
  ];

  const getColorClass = (color) => {
    const colorMap = {
      teal: 'text-teal-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      blue: 'text-blue-600',
      red: 'text-red-600',
      green: 'text-green-600',
      yellow: 'text-yellow-600',
    };
    return colorMap[color] || 'text-gray-600';
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-teal-50 to-purple-50">
      <header className="py-12 text-center bg-gradient-to-r from-teal-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Code className="absolute top-5 left-5 w-16 h-16" />
          <Code className="absolute bottom-5 right-5 w-16 h-16" />
          <Code className="absolute top-1/2 left-1/4 w-12 h-12 transform -translate-y-1/2" />
          <Code className="absolute top-1/3 right-1/4 w-10 h-10" />
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-6xl font-bold mb-4 relative z-10"
        >
          Coping with Stress as a Web Developer
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="text-2xl font-light relative z-10"
        >
          Balancing work and well-being for a harmonious life
        </motion.p>
      </header>

      <main className="flex-grow container mx-auto px-4 py-16">
        <section className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-teal-800 mb-10 text-center"
          >
            My Stress-Relief Strategies
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {strategies.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl relative`}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <MotionImage 
                  src={item.image} 
                  alt={item.title} 
                  width={400} 
                  height={250} 
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6">
                  <h3 className={`text-2xl font-semibold mb-3 ${getColorClass(item.color)} flex items-center`}>
                    <item.icon className="w-6 h-6 mr-2" />
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                  animate={{ opacity: hoveredCard === index ? 1 : 0 }}
                >
                  <p className="text-white text-center px-4">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-lg p-10 mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-purple-800 mb-8 text-center"
          >
            Benefits of My Stress-Relief Activities
          </motion.h2>
          <ul className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center bg-gradient-to-r from-teal-100 to-purple-100 rounded-lg p-4 shadow-md relative overflow-hidden"
                onHoverStart={() => setHoveredBenefit(index)}
                onHoverEnd={() => setHoveredBenefit(null)}
              >
                <div className={`bg-white rounded-full p-3 mr-4 shadow-inner ${getColorClass(benefit.color)}`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <div className="flex-grow">
                  <p className="text-lg text-gray-800 font-medium">{benefit.text}</p>
                  <motion.div 
                    className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div 
                      className={`h-full ${getColorClass(benefit.color).replace('text-', 'bg-')}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${benefit.impact}%` }}
                      transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
                    />
                  </motion.div>
                </div>
                <ChevronRight className={`w-6 h-6 ml-4 transition-transform duration-300 ${hoveredBenefit === index ? 'transform translate-x-2' : ''}`} />
                <motion.div 
                  className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center opacity-0 transition-opacity duration-300"
                  animate={{ opacity: hoveredBenefit === index ? 1 : 0 }}
                >
                  <p className="text-gray-800 text-center px-4 font-medium">Impact: {benefit.impact}%</p>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-teal-800 mb-8"
          >
            Ready to start your stress-relief journey?
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-teal-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            Get Started Now
          </motion.button>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-teal-800 to-purple-800 text-white py-10 text-center">
        <p className="text-xl mb-2">These activities help me recharge, clear my mind, and return to work feeling refreshed and motivated.</p>
        <p className="text-sm opacity-75">© 2024 Jose Llanos - English Lab - Silicon Misiones. All rights reserved.</p>
      </footer>
    </div>
  );
}