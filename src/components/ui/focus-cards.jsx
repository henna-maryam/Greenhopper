import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/about-2.jpg";
import banner3 from "../../assets/blog-1.png";
import banner4 from "../../assets/blog-3.png";
import banner5 from "../../assets/pkg-1.png";
import banner6 from "../../assets/sl.png";

const FocusCards = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={() => handleCardClick(card)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative h-64 w-full">
              <img
                src={card.src}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg font-semibold">{card.title}</h3>
                {card.description && (
                  <p className="text-white/80 text-sm mt-1 line-clamp-2">
                    {card.description}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={handleClose}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.button
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                onClick={handleClose}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>
              
              <div className="relative">
                <img
                  src={selectedCard.src}
                  alt={selectedCard.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-6"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {selectedCard.title}
                </h2>
                {selectedCard.description && (
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {selectedCard.description}
                  </p>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FocusCards;
