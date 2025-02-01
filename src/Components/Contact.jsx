import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';

const contactMethods = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Phone Support",
    description: "Available Mon-Fri, 9AM-6PM EST",
    action: "Call Us",
    actionUrl: "tel:+1234567890",
    details: "+1 (234) 567-890"
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Us",
    description: "We'll respond within 24 hours",
    action: "Send Email",
    actionUrl: "mailto:support@nutritrack.com",
    details: "support@nutritrack.com"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Live Chat",
    description: "Get instant support from our team",
    action: "Start Chat",
    actionUrl: "#chat",
    details: "Available 24/7"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Visit Us",
    description: "Come see us in person",
    action: "Get Directions",
    actionUrl: "https://maps.google.com",
    details: "123 Health Street, CA 94105"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have questions? We're here to help you on your journey to better nutrition
          </motion.p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl p-5 flex items-center justify-center
                               transform transition-all duration-300 group-hover:scale-110">
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-center mb-2">
                  {method.description}
                </p>
                <p className="text-gray-800 font-medium text-center mb-6">
                  {method.details}
                </p>
                {method.action && (
                  <a
                    href={method.actionUrl}
                    className="mt-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-300"
                  >
                    {method.action}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;