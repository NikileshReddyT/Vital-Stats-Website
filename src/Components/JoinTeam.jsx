import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UploadCloud, X, Loader2, CheckCircle, Code, Paintbrush, Video, Server, ArrowRight, Sparkles } from "lucide-react";

// Zod schema for form validation
const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  resume: z.instanceof(File, { message: "Resume is required" })
    .refine(file => file.size <= 5 * 1024 * 1024, "File size must be less than 5MB")
    .refine(file => file.type === "application/pdf", "Only PDF files are allowed"),
  role: z.string().min(1, "Please select a role"),
});

const rolesData = [
  {
    id: "mobile-app-dev",
    title: "Mobile App Developer",
    icon: <Code className="w-8 h-8 text-white" />,
    description: "Craft revolutionary healthcare mobile experiences",
    requirements: [
      "Expertise in React Native/Flutter",
      "Experience with FHIR/HL7 integrations",
      "Strong TypeScript knowledge",
    ],
    gradient: "from-blue-500 to-blue-400",
    accent: "bg-blue-500",
  },
  {
    id: "backend-dev",
    title: "Backend Engineer",
    icon: <Server className="w-8 h-8 text-white" />,
    description: "Build secure healthcare infrastructure",
    requirements: [
      "Spring Boot expertise",
      "Microservices architecture",
      "PostgreSQL/Redis experience",
    ],
    gradient: "from-teal-500 to-teal-400",
    accent: "bg-teal-500",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    icon: <Paintbrush className="w-8 h-8 text-white" />,
    description: "Shape patient-centric digital experiences",
    requirements: [
      "Figma/Adobe XD mastery",
      "Healthcare UX patterns",
      "Design system experience",
    ],
    gradient: "from-purple-500 to-purple-400",
    accent: "bg-purple-500",
  },
  {
    id: "video-producer",
    title: "Medical Video Producer",
    icon: <Video className="w-8 h-8 text-white" />,
    description: "Create engaging medical education content",
    requirements: [
      "Premiere Pro expertise",
      "Medical animation skills",
      "Script writing",
    ],
    gradient: "from-rose-500 to-rose-400",
    accent: "bg-rose-500",
  },
];

const JoinTeam = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors }, setValue, watch } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Application submitted successfully!");
      reset();
      setIsModalOpen(false);
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setValue("role", role.title);
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setValue("resume", file);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-2 rounded-full mb-8 space-x-2">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Now Hiring Innovators</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Shape the Future of
            <span className="bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent">
              {" "}Healthcare Tech
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our mission-driven team creating transformative digital health solutions
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {rolesData.map((role) => (
            <motion.div
              key={role.id}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer h-full flex flex-col border border-gray-100"
              onClick={() => handleRoleSelect(role)}
            >
              <div className="p-8 flex flex-col h-full">
                <div className={`${role.accent} w-max p-4 rounded-xl mb-6 shadow-sm`}>
                  {role.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {role.title}
                </h3>
                <p className="text-gray-600 mb-6">{role.description}</p>
                <div className="space-y-2 mb-6 flex-grow">
                  {role.requirements.map((req, i) => (
                    <div key={i} className="flex items-start text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">{req}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <button className={`w-full ${role.accent} text-white font-medium px-4 py-3 rounded-lg flex items-center justify-center group-hover:opacity-90 transition-all`}>
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Application Modal */}
        <AnimatePresence>
          {isModalOpen && selectedRole && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-2xl shadow-lg w-full max-w-2xl relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className={`${selectedRole.accent} p-3 rounded-lg shadow-sm`}>
                        {selectedRole.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {selectedRole.title}
                      </h2>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            {...register("fullName")}
                            type="text"
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.fullName ? "border-red-500" : "border-gray-200"
                            } focus:ring-2 focus:ring-blue-500`}
                            placeholder="John Doe"
                          />
                          {errors.fullName && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.fullName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            {...register("email")}
                            type="email"
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.email ? "border-red-500" : "border-gray-200"
                            } focus:ring-2 focus:ring-blue-500`}
                            placeholder="john@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input
                            {...register("phone")}
                            type="tel"
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.phone ? "border-red-500" : "border-gray-200"
                            } focus:ring-2 focus:ring-blue-500`}
                            placeholder="+1 (555) 000-0000"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Upload Resume (PDF only, max 5MB)
                          </label>
                          <div className="flex items-center justify-center w-full border-2 border-dashed border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors">
                            <label className="cursor-pointer">
                              <input
                                type="file"
                                {...register("resume")}
                                onChange={handleFileChange}
                                className="hidden"
                                accept="application/pdf"
                              />
                              <div className="flex flex-col items-center gap-2">
                                <UploadCloud className="w-8 h-8 text-gray-400" />
                                <span className="text-gray-600 text-sm">
                                  {watch("resume")?.name || "Drag & drop or click to upload"}
                                </span>
                              </div>
                            </label>
                          </div>
                          {errors.resume && (
                            <p className="text-red-500 text-sm mt-2">
                              {errors.resume.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full ${selectedRole.accent} text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default JoinTeam;