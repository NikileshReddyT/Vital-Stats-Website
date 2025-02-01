import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Rocket, 
  Heart,
  Code,
  Lightbulb,
  Target,
  X,
  ChevronRight,
  Upload,
  Send,
  Check
} from 'lucide-react';

const benefits = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Collaborative Environment",
    description: "Work with a passionate team dedicated to transforming healthcare through technology."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Innovation First",
    description: "Be at the forefront of healthcare technology, working with cutting-edge AI and IoT solutions."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Impact Lives",
    description: "Make a real difference in people's lives by improving their health outcomes."
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Technical Growth",
    description: "Develop your skills working with modern technologies and best practices."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Creative Freedom",
    description: "Bring your ideas to life in an environment that encourages innovation and creativity."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Clear Growth Path",
    description: "Well-defined career progression with opportunities for advancement and skill development."
  }
];

const jobListings = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Mobile App Developer",
    shortDescription: "Craft revolutionary healthcare mobile experiences",
    requirements: [
      "Expertise in React Native/Flutter",
      "Experience with FHIR/HL7 integrations",
      "Strong TypeScript knowledge",
      "3+ years of mobile development experience",
      "Understanding of healthcare data standards",
      "Experience with state management (Redux/MobX)",
      "Knowledge of mobile security best practices"
    ],
    responsibilities: [
      "Develop and maintain mobile applications",
      "Implement secure data handling",
      "Optimize app performance",
      "Collaborate with UI/UX team",
      "Write clean, maintainable code",
      "Participate in code reviews"
    ]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Backend Engineer",
    shortDescription: "Build secure healthcare infrastructure",
    requirements: [
      "Spring Boot expertise",
      "Microservices architecture",
      "PostgreSQL/Redis experience",
      "3+ years of backend development",
      "Experience with cloud platforms",
      "Knowledge of security protocols",
      "Understanding of HIPAA compliance"
    ],
    responsibilities: [
      "Design and implement APIs",
      "Manage database architecture",
      "Ensure system scalability",
      "Implement security measures",
      "Monitor system performance",
      "Write technical documentation"
    ]
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "UI/UX Designer",
    shortDescription: "Shape patient-centric digital experiences",
    requirements: [
      "Figma/Adobe XD mastery",
      "Healthcare UX patterns",
      "Design system experience",
      "3+ years of UI/UX design",
      "Strong portfolio",
      "User research experience",
      "Accessibility knowledge"
    ],
    responsibilities: [
      "Create user-centered designs",
      "Develop design systems",
      "Conduct user research",
      "Create wireframes and prototypes",
      "Collaborate with developers",
      "Ensure design consistency"
    ]
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Medical Video Producer",
    shortDescription: "Create engaging medical education content",
    requirements: [
      "Premiere Pro expertise",
      "Medical animation skills",
      "Script writing",
      "3+ years of video production",
      "Healthcare content experience",
      "Strong storytelling ability",
      "Knowledge of medical terminology"
    ],
    responsibilities: [
      "Produce educational videos",
      "Create medical animations",
      "Write compelling scripts",
      "Edit and post-produce content",
      "Collaborate with medical experts",
      "Ensure content accuracy"
    ]
  }
];

const JobListingModal = ({ isOpen, onClose }) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  });

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setShowApplicationForm(false);
  };

  const handleApply = () => {
    setShowApplicationForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowApplicationForm(false);
    setSelectedJob(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => {
              if (!showApplicationForm) {
                setSelectedJob(null);
                onClose();
              }
            }}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-auto rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                if (showApplicationForm) {
                  setShowApplicationForm(false);
                } else if (selectedJob) {
                  setSelectedJob(null);
                } else {
                  onClose();
                }
              }}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100/50 hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="p-8">
              {!selectedJob ? (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Open Positions</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {jobListings.map((job, index) => (
                      <motion.div
                        key={job.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleJobClick(job)}
                        className="group cursor-pointer"
                      >
                        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                          <div className="mb-6 flex justify-center">
                            <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl p-5 flex items-center justify-center
                                         transform transition-all duration-300 group-hover:scale-110">
                              <div className="text-white">
                                {job.icon}
                              </div>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                            {job.title}
                          </h3>
                          <p className="text-gray-600 text-center">
                            {job.shortDescription}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              ) : showApplicationForm ? (
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Apply for {selectedJob.title}</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300"
                        value={applicationData.name}
                        onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300"
                        value={applicationData.email}
                        onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300"
                        value={applicationData.phone}
                        onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
                      <div className="relative">
                        <input
                          type="file"
                          required
                          className="hidden"
                          id="resume"
                          onChange={(e) => setApplicationData({...applicationData, resume: e.target.files[0]})}
                        />
                        <label
                          htmlFor="resume"
                          className="flex items-center justify-center w-full px-4 py-2 rounded-lg border-2 border-dashed border-gray-300
                                   bg-white/50 cursor-pointer hover:border-red-500 transition-colors duration-300"
                        >
                          <Upload className="w-5 h-5 text-gray-400 mr-2" />
                          <span className="text-gray-600">Upload Resume (PDF, DOC, DOCX)</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-300"
                        value={applicationData.coverLetter}
                        onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg
                               bg-gradient-to-r from-red-600 to-red-400 text-white font-medium
                               hover:from-red-700 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                               disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Application
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl p-5 flex items-center justify-center">
                      <div className="text-white">
                        {selectedJob.icon}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">{selectedJob.title}</h3>
                  <p className="text-xl text-gray-600 mb-8 text-center">{selectedJob.shortDescription}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h4>
                      <ul className="space-y-3">
                        {selectedJob.requirements.map((req, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{req}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h4>
                      <ul className="space-y-3">
                        {selectedJob.responsibilities.map((resp, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600">{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      onClick={handleApply}
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl
                               bg-gradient-to-r from-red-600 to-red-400 text-white font-medium
                               hover:from-red-700 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                               transition-all duration-300"
                    >
                      Apply Now
                      <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const JoinTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            Join Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Be part of a team that's revolutionizing healthcare through technology
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-red-600 rounded-2xl p-5 flex items-center justify-center
                               transform transition-all duration-300 group-hover:scale-110">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
          >
            View Open Positions
            <ChevronRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>

        <JobListingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default JoinTeam;