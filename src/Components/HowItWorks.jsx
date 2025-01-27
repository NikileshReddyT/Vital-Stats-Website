import { motion } from 'framer-motion';
import { Scale, Activity, Leaf, BrainCircuit } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Scale className="w-8 h-8 text-white" />,
      title: "Smart Food Analysis",
      description: "Our IoT-enabled scale measures 15+ nutritional parameters including calories, proteins, and micronutrients with 99% lab-grade accuracy"
    },
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "Health Integration",
      description: "AI cross-references your medical history, blood reports, and fitness goals to create personalized diet plans"
    },
    {
      icon: <Leaf className="w-8 h-8 text-white" />,
      title: "Adaptive Nutrition",
      description: "Machine learning adjusts recommendations based on daily progress and evolving health metrics"
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 mb-6">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            <span className="text-sm font-medium text-blue-600">
              KL University Innovation
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              AI-Powered Nutrition Ecosystem
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Developed by B.Tech innovators to transform preventive healthcare through intelligent dietary management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gray-200" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -150px 0px" }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="absolute top-0 left-0 -translate-y-12 w-full flex justify-center md:hidden">
                <BrainCircuit className="w-8 h-8 text-gray-400 rotate-90" />
              </div>

              <div className="flex flex-col items-center text-center bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all h-full">
                <div className="mb-6 bg-gradient-to-br from-blue-600 to-teal-600 p-4 rounded-2xl shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full mr-2">{index+1}</span>
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-6 bg-white rounded-xl border border-blue-100"
          >
            <h3 className="text-lg font-semibold mb-2">🚀 For Individuals</h3>
            <p className="text-gray-600 text-sm">
              Manage diabetes, hypertension, or post-illness recovery through AI-curated meal plans
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-white rounded-xl border border-teal-100"
          >
            <h3 className="text-lg font-semibold mb-2">🏆 For Healthcare</h3>
            <p className="text-gray-600 text-sm">
              Integrated provider portal for continuous patient monitoring and dietary intervention
            </p>
          </motion.div>
        </div>

        {/* Innovation Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {['Preventive Healthcare Focus', 'Medical-Grade Accuracy', 'University-Backed Technology'].map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
            >
              {badge}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;