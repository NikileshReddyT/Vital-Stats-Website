import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scale, Brain, Activity, X } from 'lucide-react';

const steps = [
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Smart Scale Integration",
    description: "Our IoT-enabled smart scale provides precise measurements and real-time data synchronization.",
    details: "Experience the future of nutrition tracking with our advanced smart scale technology. Get instant, accurate measurements of your portions and nutritional content.",
    gradient: "bg-gradient-to-r from-red-600 to-red-400",
    iconBg: "bg-gradient-to-r from-red-600 to-red-400",
    iconColor: "text-white"
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Analysis",
    description: "Advanced AI algorithms analyze your data to provide personalized nutrition insights.",
    details: "Our sophisticated AI system processes your nutritional data, preferences, and goals to deliver tailored recommendations for optimal health.",
    gradient: "bg-gradient-to-r from-red-600 to-red-400",
    iconBg: "bg-gradient-to-r from-red-600 to-red-400",
    iconColor: "text-white"
  },
  {
    icon: <Activity className="w-8 h-8" />,
    title: "Health Optimization",
    description: "Continuous monitoring and adaptation of your nutrition plan for optimal results.",
    details: "Get real-time adjustments to your nutrition plan based on your progress, ensuring you stay on track to achieve your health goals.",
    gradient: "bg-gradient-to-r from-red-600 to-red-400",
    iconBg: "bg-gradient-to-r from-red-600 to-red-400",
    iconColor: "text-white"
  }
];

const IconWrapper = ({ children, gradient }) => (
  <div className={`w-20 h-20 ${gradient} rounded-2xl p-5 flex items-center justify-center
                   transform transition-all duration-300 group-hover:scale-110`}>
    <div className="flex items-center justify-center">
      {children}
    </div>
  </div>
);

const ModalIconWrapper = ({ children }) => (
  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm p-3 flex items-center justify-center">
    <div className="flex items-center justify-center">
      {children}
    </div>
  </div>
);

const HowItWorks = () => {
  const [selectedStep, setSelectedStep] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Experience our seamless nutrition management process
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedStep(step)}
              className="cursor-pointer group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <IconWrapper gradient={step.gradient}>
                    <div className={step.iconColor}>
                      {step.icon}
                    </div>
                  </IconWrapper>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedStep && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedStep(null)}
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-[90%] max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden z-50"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-400 p-6 text-white">
                  <button
                    onClick={() => setSelectedStep(null)}
                    className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="flex items-center space-x-4">
                    <ModalIconWrapper>
                      <div className={selectedStep.iconColor}>
                        {selectedStep.icon}
                      </div>
                    </ModalIconWrapper>
                    <div>
                      <h3 className="text-2xl font-bold">
                        {selectedStep.title}
                      </h3>
                      <p className="text-white/80 mt-1">
                        {selectedStep.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600">
                    {selectedStep.details}
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HowItWorks;