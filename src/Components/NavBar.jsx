import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import * as z from "zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Menu } from "lucide-react";

// Zod schema for form validation
const schema = z.object({
  name: z.string().min(5, { message: "Please enter your full name." }),
  phoneNumber: z
    .string()
    .regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(20, { message: "Your message must be at least 20 characters long." }),
});

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const links = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Features", path: "/features" },
    { name: "Contact", path: "/contact" },
    { name: "Join Team", path: "/join-team" },
  ];

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  // Form submission
  const onSubmit = async (data) => {
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);
    try {
      const response = await axios.post("https://sheetdb.io/api/v1/qvfqwmj4aojv8", {
        data: [
          {
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            message: data.message,
          },
        ],
      });

      if (response.status === 201 || response.status === 200) {
        toast.success("Demo request submitted successfully!");
        setIsModalOpen(false); // Close the modal upon successful submission
      } else {
        toast.error("Failed to submit the demo request. Please try again.", { closeOnClick: true });
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, { closeOnClick: true });
    } finally {
      setIsSubmitting(false);
      reset();
    }
  };

  // Effect to update active link based on route
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4 fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <Helmet>
          <title>Vital Health Solutions</title>
          <meta
            name="description"
            content="Vital Health Solutions is a leading healthcare solutions company specializing in personalized healthcare services."
          />
        </Helmet>

        <div>
          <Link to="/">
            <img src="/navbar.png" className="w-32 md:w-40" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-sm">
          {links.map((link) => (
            <Link
              to={link.path}
              key={link.name}
              className={`relative cursor-pointer hover:text-blue-600 transition-colors duration-300 ${
                activeLink === link.path ? "text-blue-600 font-bold" : "text-gray-700"
              }`}
            >
              {link.name}
              {activeLink === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                  transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Request Demo button and Menu for Mobile */}
        <div className="flex items-center space-x-4">
          <button
            className="hidden md:flex items-center text-sm justify-center py-1.5 px-4 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            onClick={toggleModal}
          >
            Request Demo
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-0 left-0 w-full bg-white/95 backdrop-blur-lg rounded-b-3xl z-50 flex flex-col justify-between p-6 shadow-lg"
          >
            <div className="flex justify-between items-center mb-6">
              <Link to="/">
                <img src="/navbar.png" className="w-32" alt="Logo" />
              </Link>
              <button
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-6">
              {links.map((link) => (
                <Link
                  to={link.path}
                  key={link.name}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm ${
                    activeLink === link.path
                      ? "text-blue-600 font-bold"
                      : "text-gray-700"
                  } hover:text-blue-600 transition-colors duration-300`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                className="flex items-center justify-center py-1.5 px-4 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
                onClick={toggleModal}
              >
                Request Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Request Demo */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center px-5 bg-gray-800/50 backdrop-blur-lg z-50"
            onClick={toggleModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl relative border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-700 hover:text-blue-600 transition-colors"
                onClick={toggleModal}
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-center text-2xl font-bold text-blue-600 mb-4">
                Schedule a Demo
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Full Name"
                      className={`w-full p-3 border ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      } rounded-md bg-gray-50 text-gray-700 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="w-1/2">
                    <input
                      {...register("phoneNumber")}
                      type="text"
                      placeholder="Phone number"
                      className={`w-full p-3 border ${
                        errors.phoneNumber ? "border-red-500" : "border-gray-300"
                      } rounded-md bg-gray-50 text-gray-700 focus:ring-blue-500 focus:border-blue-500`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className={`w-full p-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md bg-gray-50 text-gray-700 focus:ring-blue-500 focus:border-blue-500`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <textarea
                    {...register("message")}
                    placeholder="Your message"
                    className={`w-full p-3 border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } rounded-md bg-gray-50 text-gray-700 focus:ring-blue-500 focus:border-blue-500`}
                    rows="4"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;