import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(5, { message: 'Please enter your full name' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phoneNumber: z.string().min(10, { message: 'Please enter a valid phone number' }),
  company: z.string().min(2, { message: 'Please enter your company name' }),
  message: z.string().min(20, { message: 'Message must be at least 20 characters' }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulated API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message received! We\'ll respond within 24 hours.');
      reset();
    } catch (error) {
      toast.error('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className="relative py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 mb-6">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-600" />
            <span className="text-sm font-medium text-blue-600">
              Contact Us
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Start Your Health Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with us to transform healthcare through AI-driven solutions
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                {...register('name')}
                type="text"
                className={`w-full bg-gray-50 border ${
                  errors.name ? 'border-red-500' : 'border-gray-200'
                } rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-2">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                {...register('email')}
                type="email"
                className={`w-full bg-gray-50 border ${
                  errors.email ? 'border-red-500' : 'border-gray-200'
                } rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-2">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                {...register('phoneNumber')}
                type="tel"
                className={`w-full bg-gray-50 border ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-200'
                } rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.phoneNumber && (
                <p className="text-red-600 text-sm mt-2">{errors.phoneNumber.message}</p>
              )}
            </div>

            {/* Company Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization
              </label>
              <input
                {...register('company')}
                type="text"
                className={`w-full bg-gray-50 border ${
                  errors.company ? 'border-red-500' : 'border-gray-200'
                } rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {errors.company && (
                <p className="text-red-600 text-sm mt-2">{errors.company.message}</p>
              )}
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              {...register('message')}
              rows="5"
              className={`w-full bg-gray-50 border ${
                errors.message ? 'border-red-500' : 'border-gray-200'
              } rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            />
            {errors.message && (
              <p className="text-red-600 text-sm mt-2">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold px-8 py-4 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Request Consultation
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl animate-pulse-slow delay-1000" />
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        theme="light"
        toastClassName="border border-gray-200 shadow-lg rounded-xl"
      />
    </div>
  );
};

export default Contact;