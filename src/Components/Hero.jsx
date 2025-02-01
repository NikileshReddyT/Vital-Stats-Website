import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { BeakerIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const HealthTechLanding = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50 to-white">
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-red-600 rounded-full border border-red-100 bg-red-50/50 backdrop-blur-xl shadow-sm mb-6"
            >
              <BeakerIcon className="w-4 h-4 mr-2 text-red-600 " />
              <span>Pioneering Health Tech</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl"
            >
              <span className="block text-transparent bg-gradient-to-r from-red-600 to-red-400 bg-clip-text">
                Smart Nutrition
              </span>
              <span className="block mt-3 text-gray-900 text-3xl md:text-5xl lg:text-6xl">
                Reimagined
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-8 max-w-2xl text-lg text-gray-600"
            >
              Revolutionizing dietary management through AI-powered analysis
              and IoT precision measurement technology
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 space-x-4"
            >
              <a
                href="#demo"
                className="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-red-600 to-red-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Started
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center px-8 py-3 text-base font-medium text-red-600 bg-white border border-red-200 rounded-lg hover:bg-red-50 transition-all duration-300"
              >
                Learn More
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="mt-24 grid gap-8 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div 
              variants={fadeInUp}
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-red-100"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-red-400 flex items-center justify-center">
                  <BeakerIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Precision Analysis</h3>
                <p className="text-gray-600">
                  Advanced IoT sensors delivering laboratory-grade measurement accuracy
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-red-100"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-600 to-red-400 flex items-center justify-center">
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">AI-Powered Insights</h3>
                <p className="text-gray-600">
                  Smart nutrition recommendations backed by advanced machine learning
                </p>
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
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-transparent bg-gradient-to-r from-red-600 to-red-400 bg-clip-text">
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
              variants={fadeInUp}
            >
              <motion.div 
                className="overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-r from-red-50 to-red-100"
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
      <section className="py-24 bg-gradient-to-b from-red-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div 
            className="p-12 text-center text-white bg-red-900 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">
              Transforming Nutritional Health
            </h2>
            <p className="mt-4 text-red-200">
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
              variants={fadeInUp}
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
                      <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full" />
                      <span className="text-gray-900">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-8"
              variants={fadeInUp}
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
                      <div className="flex-shrink-0 text-red-600">0{index + 1}</div>
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