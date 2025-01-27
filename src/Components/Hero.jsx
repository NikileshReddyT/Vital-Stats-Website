import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BeakerIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

const HealthTechLanding = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#f8fcff]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-8 rounded-full bg-blue-50 px-4 py-2 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-blue-600">
                🚀 Emerging from KL University Innovation Labs
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl"
            >
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text">
                Next-Gen Nutritional
              </span>
              <motion.span 
                className="block mt-4 text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Intelligence Platform
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mx-auto mt-8 max-w-2xl text-xl text-gray-600"
            >
              Synergizing IoT hardware with AI analytics to transform dietary management
              through precision measurement and personalized insights
            </motion.p>

            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="mt-12 inline-block"
            >
              <a
                href="#demo"
                className="flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white transition-all rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 shadow-lg hover:shadow-xl"
              >
                <motion.svg 
                  className="w-6 h-6"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </motion.svg>
                Explore Platform Demo
              </a>
            </motion.div>
          </div>

          {/* Feature Visualization */}
          <motion.div 
            className="mt-24 grid gap-12 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {/* Smart Measurement Card */}
            <motion.div 
              variants={featureVariants}
              className="p-8 space-y-8 bg-white rounded-2xl shadow-surface"
            >
              <div className="space-y-4 flex flex-col items-center justify-center">
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <BeakerIcon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">Smart Measurement</h3>
                <p className="text-gray-600">
                  IoT-enabled precision analysis with lab-grade accuracy
                </p>
              </div>
              <div className="aspect-video bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl flex items-center justify-center">
                {/* <motion.div 
                  className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-2xl">⚖️</span>
                </motion.div> */}
              </div>
            </motion.div>

            {/* AI Prescription Analyzer Card */}
            <motion.div 
              variants={featureVariants}
              className="p-8 space-y-8 bg-white rounded-2xl shadow-surface"
            >
              <div className="space-y-4 flex flex-col items-center justify-center ">
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-teal-500 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <DocumentMagnifyingGlassIcon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900">NutriScan AI</h3>
                <p className="text-gray-600">
                  Prescription analysis and adaptive nutrition planning
                </p>
              </div>
              <div className="aspect-video bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl flex items-center justify-center">
                {/* <motion.div 
                  className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                  animate={{ rotate: [0, 180, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <span className="text-2xl">🧠</span>
                </motion.div> */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Technology */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="grid gap-12 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div 
              className="space-y-8"
              variants={featureVariants}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text">
                  Technology Ecosystem
                </span>
              </h2>
              <p className="text-gray-600">
                Integrated platform combining hardware innovation with advanced analytics
              </p>
              <motion.div 
                className="p-8 bg-white rounded-2xl shadow-surface"
                whileHover={{ y: -5 }}
              >
                <dl className="space-y-8">
                  {[
                    ['IoT Device', 'Nutritional composition analysis in real-time'],
                    ['Mobile Platform', 'Interactive tracking & health integration'],
                    ['AI Engine', 'Adaptive dietary recommendations'],
                    ['Cloud System', 'Secure health data management']
                  ].map(([title, desc]) => (
                    <motion.div 
                      key={title} 
                      className="pb-8 border-b border-gray-200 last:border-0"
                      whileHover={{ x: 5 }}
                    >
                      <dt className="text-lg font-semibold text-gray-900">{title}</dt>
                      <dd className="mt-2 text-gray-600">{desc}</dd>
                    </motion.div>
                  ))}
                </dl>
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              variants={featureVariants}
            >
              <motion.div 
                className="overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-r from-blue-50 to-teal-50"
                style={{ scale }}
              />
              <div className="grid grid-cols-2 gap-8">
                {['Precision Sensors', 'ML Models', 'Health API', 'Security'].map((item) => (
                  <motion.div 
                    key={item} 
                    className="p-6 bg-white rounded-xl shadow-surface"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="font-semibold text-gray-900">{item}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div 
            className="p-12 text-center text-white bg-gray-900 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">
              Transforming Nutritional Health
            </h2>
            <p className="mt-4 text-blue-200">
              Bridging technology and wellness through innovative dietary management solutions
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block"
            >
              <a
                href="#vision"
                className="px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-xl shadow-lg"
              >
                Discover Our Approach
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Scientific Foundation */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="grid gap-12 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div 
              className="space-y-8"
              variants={featureVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900">
                Clinical-Grade Architecture
              </h3>
              <div className="p-8 bg-white rounded-2xl shadow-surface">
                <div className="space-y-8">
                  {[
                    'Real-time biometric integration',
                    'Medical guideline compliance',
                    'Predictive analytics engine',
                    'End-to-end encryption'
                  ].map((item) => (
                    <motion.div 
                      key={item} 
                      className="flex items-center gap-4"
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex-shrink-0 w-3 h-3 bg-blue-600 rounded-full" />
                      <span className="text-gray-900">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              variants={featureVariants}
            >
              <h3 className="text-2xl font-bold text-gray-900">
                Development Roadmap
              </h3>
              <div className="p-8 bg-white rounded-2xl shadow-surface">
                <div className="space-y-8">
                  {[
                    'Hardware prototyping',
                    'ML model training',
                    'Clinical validation',
                    'Platform launch'
                  ].map((item, index) => (
                    <motion.div 
                      key={item} 
                      className="flex items-center gap-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="flex-shrink-0 text-blue-600">0{index + 1}</div>
                      <span className="text-gray-900">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HealthTechLanding;