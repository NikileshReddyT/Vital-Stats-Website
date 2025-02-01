import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Activity,
  X, 
  Check,
  ChevronRight,
  CheckCircle2,
  Utensils,
  ShoppingCart,
  Users,
  UserCheck
} from 'lucide-react';

const features = [
  {
    title: 'AI-Powered Nutrition Analysis',
    description: 'Advanced AI algorithms for personalized nutrition insights',
    longDescription: 'Our cutting-edge AI technology analyzes your dietary habits, preferences, and health goals to provide highly personalized nutrition recommendations.',
    icon: <Brain className="w-6 h-6" />,
    gradient: 'bg-black',
    benefits: [
      'Personalized macro and micronutrient recommendations',
      'Real-time meal analysis and suggestions',
      'Smart ingredient substitutions based on preferences',
      'Continuous learning from your feedback',
      'Integration with health tracking devices'
    ],
    technicalFeatures: [
      'Advanced machine learning algorithms',
      'Natural language processing for food recognition',
      'Real-time nutritional analysis',
      'Secure data encryption',
      'Cross-platform compatibility'
    ]
  },
  {
    title: 'Smart Meal Planning',
    description: 'Custom meal plans and recipe recommendations',
    longDescription: 'Access a vast library of nutritionist-approved recipes and get personalized meal plans tailored to your dietary needs.',
    icon: <Utensils className="w-6 h-6" />,
    gradient: 'bg-black',
    benefits: [
      'Personalized weekly meal plans',
      'Access to 10,000+ healthy recipes',
      'Automatic portion adjustment',
      'Dietary restriction consideration',
      'Easy meal prep scheduling'
    ],
    technicalFeatures: [
      'Smart recipe recommendation engine',
      'Automatic portion calculator',
      'Ingredient substitution system',
      'Meal prep optimization',
      'Shopping list generator'
    ]
  },
  {
    title: 'Health Tracking',
    description: 'Monitor your progress and health metrics',
    longDescription: 'Track your nutrition, weight, and health metrics over time with our comprehensive health monitoring system.',
    icon: <Activity className="w-6 h-6" />,
    gradient: 'bg-black',
    benefits: [
      'Real-time progress tracking',
      'Custom health goal setting',
      'Visual progress reports',
      'Integration with fitness apps',
      'Personalized health insights'
    ],
    technicalFeatures: [
      'Advanced data analytics',
      'Health metric visualization',
      'Progress prediction models',
      'API integrations with health devices',
      'Secure health data storage'
    ]
  },
  {
    title: 'Smart Shopping',
    description: 'Automated grocery lists and shopping assistance',
    longDescription: 'Get smart shopping lists based on your meal plans and local store availability.',
    icon: <ShoppingCart className="w-6 h-6" />,
    gradient: 'bg-black',
    benefits: [
      'Automated shopping lists',
      'Price comparison features',
      'Local store recommendations',
      'Ingredient alternatives',
      'Budget optimization'
    ],
    technicalFeatures: [
      'Store inventory integration',
      'Price tracking algorithms',
      'Location-based services',
      'Budget optimization engine',
      'Shopping route optimization'
    ]
  },
  {
    title: 'Community & Social',
    description: 'Connect with like-minded health enthusiasts',
    longDescription: 'Join a vibrant community of health-conscious individuals, share experiences, and get motivated together.',
    icon: <Users className="w-6 h-6" />,
    gradient: 'bg-black',
    benefits: [
      'Connect with health enthusiasts',
      'Share recipes and tips',
      'Join challenges and competitions',
      'Get community support',
      'Access expert advice'
    ],
    technicalFeatures: [
      'Real-time chat system',
      'Social feed algorithms',
      'Content moderation',
      'Gamification features',
      'Expert verification system'
    ]
  },
  {
    title: 'Expert Consultation',
    description: 'Connect with certified nutritionists',
    longDescription: 'Get personalized advice and guidance from certified nutritionists and health experts.',
    icon: <UserCheck className="w-6 h-6" />,
    gradient: 'bg-black',
    benefits: [
      'One-on-one consultations',
      'Personalized diet plans',
      'Expert nutritional advice',
      'Regular check-ins',
      'Progress monitoring'
    ],
    technicalFeatures: [
      'Video consultation platform',
      'Appointment scheduling system',
      'Expert matching algorithm',
      'Secure messaging',
      'Document sharing'
    ]
  }
];

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section className="relative py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Experience the future of nutrition management with our cutting-edge technology
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedFeature(feature)}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl p-5 flex items-center justify-center
                               transform transition-all duration-300 group-hover:scale-110">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>

                <div className="flex items-center justify-center text-red-600">
                  <span className="text-sm font-medium">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedFeature && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedFeature(null)}
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
                    onClick={() => setSelectedFeature(null)}
                    className="absolute right-4 top-4 text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      {selectedFeature.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        {selectedFeature.title}
                      </h3>
                      <p className="text-white/80 mt-1">
                        {selectedFeature.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                  <p className="text-gray-600">
                    {selectedFeature.longDescription}
                  </p>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedFeature.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Technical Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedFeature.technicalFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Features;