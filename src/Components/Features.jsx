import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  LineChart, 
  UserCog, 
  Utensils, 
  Timer, 
  Database,
  X 
} from 'lucide-react';

const features = [
  {
    icon: <LineChart className="w-10 h-10 text-white" />,
    title: "Clinical Analytics",
    description: "AI-powered health recommendations based on medical data and clinical guidelines.",
    extendedInfo: {
      benefits: [
        "Evidence-based treatment suggestions",
        "Weekly clinical progress reports",
        "Medical-grade data visualization",
        "Multidisciplinary care integration"
      ],
      stats: {
        accuracy: "99.9%",
        compliance: "HIPAA/ISO Certified",
        metrics: "200+ clinical parameters"
      }
    }
  },
  {
    icon: <Activity className="w-10 h-10 text-white" />,
    title: "Real-Time Monitoring",
    description: "Medical alert system with critical value notifications and escalation protocols.",
    extendedInfo: {
      benefits: [
        "Continuous vital sign tracking",
        "Custom clinical thresholds",
        "Emergency response integration",
        "Audit-ready monitoring logs"
      ],
      stats: {
        responseTime: "< 30s",
        reliability: "99.99% SLA",
        coverage: "All critical metrics"
      }
    }
  },
  {
    icon: <UserCog className="w-10 h-10 text-white" />,
    title: "Patient Management",
    description: "Comprehensive EHR integration with advanced care coordination tools.",
    extendedInfo: {
      benefits: [
        "Integrated care plans",
        "Medication reconciliation",
        "Provider communication hub",
        "Treatment adherence tracking"
      ],
      stats: {
        integrations: "50+ EHR systems",
        security: "HIPAA Compliant",
        uptime: "99.999%"
      }
    }
  },
  {
    icon: <Utensils className="w-10 h-10 text-white" />,
    title: "Medical Nutrition",
    description: "Evidence-based dietary plans developed by certified nutrition specialists.",
    extendedInfo: {
      benefits: [
        "Condition-specific meal planning",
        "Nutrient interaction analysis",
        "Dietitian collaboration tools",
        "Progress monitoring"
      ],
      stats: {
        plans: "100+ clinical diets",
        successRate: "94%",
        guidelines: "AND/ESPEN aligned"
      }
    }
  },
  {
    icon: <Timer className="w-10 h-10 text-white" />,
    title: "Risk Assessment",
    description: "AI-driven predictive analytics for early intervention and prevention.",
    extendedInfo: {
      benefits: [
        "Comorbidity risk scoring",
        "Preventive care pathways",
        "Population health analytics",
        "Clinical decision support"
      ],
      stats: {
        accuracy: "98% AUC",
        factors: "300+ risk markers",
        validation: "Peer-reviewed"
      }
    }
  },
  {
    icon: <Database className="w-10 h-10 text-white" />,
    title: "Health Data Platform",
    description: "Secure health data infrastructure with enterprise-grade compliance.",
    extendedInfo: {
      benefits: [
        "HL7/FHIR interoperability",
        "Tier-IV data centers",
        "Disaster recovery",
        "Real-time auditing"
      ],
      stats: {
        encryption: "AES-256",
        compliance: "GDPR/HIPAA",
        availability: "99.999%"
      }
    }
  }
];

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 120 }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 200,
        damping: 25
      }
    },
    exit: { opacity: 0, scale: 0.98 }
  };

  return (
    <div className="relative py-20 bg-gradient-to-b from-white via-blue-50 to-indigo-50 min-h-screen">
      <section id='features' className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-4 py-2 mb-6 shadow-lg"
          >
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-white/80" />
            <span className="text-sm font-medium text-white">
              Platform Capabilities
            </span>
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Advanced Health Platform
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade healthcare solutions powered by clinical AI and IoT
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-16 mx-auto max-w-7xl"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
              }}
              className="group relative rounded-xl p-6 cursor-pointer transition-all
                bg-gradient-to-br from-white/90 to-blue-50/90
                border border-gray-200/60 hover:border-transparent
                shadow-sm hover:shadow-xl backdrop-blur-sm
                hover:bg-gradient-to-br hover:from-blue-50/60 hover:via-indigo-50/60 hover:to-teal-50/60
                transform-gpu"
              onClick={() => setSelectedFeature(feature)}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-3 rounded-xl w-max mb-4 shadow-lg">
                  {React.cloneElement(feature.icon, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-4 flex items-center text-blue-600 group-hover:text-teal-600 transition-colors"
                >
                  <span className="mr-2 text-sm font-medium">View Details</span>
                  <span className="text-lg">→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Modal */}
        <AnimatePresence>
          {selectedFeature && (
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedFeature(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                variants={modalVariants}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-blue-200 p-8 max-w-3xl w-full relative shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-teal-600 p-3 rounded-xl mr-4 shadow-lg">
                    {React.cloneElement(selectedFeature.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 pt-1">
                    {selectedFeature.title}
                  </h2>
                </div>

                <p className="text-gray-600 mb-6">
                  {selectedFeature.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-3 border-b border-blue-100 pb-2">
                      Key Features
                    </h3>
                    <ul className="space-y-3">
                      {selectedFeature.extendedInfo.benefits.map((benefit, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start text-gray-600"
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-2 h-2 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full mt-2 mr-3" />
                          <span className="flex-1 text-sm">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-teal-600 mb-3 border-b border-teal-100 pb-2">
                      Performance Standards
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(selectedFeature.extendedInfo.stats).map(([key, value], i) => (
                        <motion.div 
                          key={i} 
                          className="bg-gradient-to-br from-white to-blue-50 p-3 rounded-lg border border-blue-100 shadow-sm"
                          whileHover={{ y: -2 }}
                        >
                          <div className="text-blue-600 font-semibold text-lg mb-1">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                {/* <div className="mt-8 pt-6 border-t border-blue-100">
                  <div className="flex items-center justify-center gap-4 opacity-90">
                    {['hipaa', 'fda', 'iso'].map((cert, i) => (
                      <motion.div
                        key={cert}
                        className="bg-gradient-to-br from-blue-600 to-teal-600 p-2 rounded-lg shadow-md"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img 
                          src={`/${cert}-badge.svg`} 
                          alt={cert.toUpperCase()} 
                          className="h-8" 
                        />
                      </motion.div>
                    ))}
                  </div>
                </div> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>
    </div>
  );
};

export default Features;