import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github, Facebook, Twitter } from 'lucide-react';

// Team members data array
const teamMembers = [
  {
    name: "Harsha Vardhan Sarla",
    title: "CO-FOUNDER",
    imgSrc: "https://res.cloudinary.com/dv13ixezd/image/upload/v1716624561/qt5fruba5kik8hiviagk",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/harsha-vardhan-sarla-437a8b249/",
      instagram: "https://www.instagram.com/harshasarla/"
    }
  },
  {
    name: "VAMSI P",
    title: "CO-FOUNDER",
    imgSrc: "https://res.cloudinary.com/dv13ixezd/image/upload/v1716624561/elms4sqodrn54q0o9nup",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/ponnuri-vamsi-840a37284/",
      instagram: "https://www.instagram.com/vamsoooooo/"
    }
  },
  {
    name: "LALITESH M",
    title: "DEVELOPER",
    imgSrc: "https://res.cloudinary.com/dv13ixezd/image/upload/v1716624561/zvfh04h7fgjpinzshacs",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/lalitesh-mupparaju-a52350251/",
      instagram: "https://www.instagram.com/laliteshmupparaju/"
    }
  },
  {
    name: "PRANAV M",
    title: "MARKETING",
    imgSrc: "https://res.cloudinary.com/dv13ixezd/image/upload/v1716624561/iclworuvmw6esp9lm9ll",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/m-pranav-64997724b",
      instagram: "https://www.instagram.com/pranav.mvv"
    }
  },
  {
    name: "SUBRAMANYAM",
    title: "ADMINISTRATOR",
    imgSrc: "https://res.cloudinary.com/dv13ixezd/image/upload/v1716624561/mr6h4tnqp85laghxbb8t",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/g-subrahmanyam/",
      instagram: "https://www.instagram.com/mr.sid_28/"
    }
  },
  {
    name: "A Raghu",
    title: "DESIGNER",
    imgSrc: "https://res.cloudinary.com/dv13ixezd/image/upload/v1716624561/myzjl33fojxatxojhkru",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/anarajula-rsn/",
      instagram: "https://www.instagram.com/raghxyy?igsh=MXNtZGZ5bDRqZHg2MQ=="
    }
  }
];

const Teams = () => {
  return (
    <div id='team' className="relative py-24 bg-gradient-to-b from-slate-900 to-blue-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center rounded-full bg-slate-800 px-4 py-2 mb-6">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              Dream Team
            </span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Visionary Leadership
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            The brilliant minds revolutionizing healthcare through technology and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700 group-hover:border-emerald-400 transition-all h-full">
                <div className="flex flex-col items-center">
                  <div className="relative mb-8 -mt-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full blur-xl opacity-30" />
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="relative z-10 w-40 h-40 rounded-full object-cover border-4 border-slate-800"
                    />
                  </div>

                  <h2 className="text-2xl font-bold text-white text-center mb-2">
                    {member.name}
                  </h2>
                  <p className="text-emerald-400 text-sm font-medium mb-6">
                    {member.title}
                  </p>

                  <div className="flex gap-4">
                    {Object.entries(member.socialLinks).map(([platform, url]) => (
                      url !== '#' && (
                        <motion.a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="text-slate-400 hover:text-emerald-400 transition-colors"
                        >
                          {platform === 'linkedin' && <Linkedin className="w-6 h-6" />}
                          {platform === 'instagram' && <Instagram className="w-6 h-6" />}
                          {platform === 'github' && <Github className="w-6 h-6" />}
                          {platform === 'facebook' && <Facebook className="w-6 h-6" />}
                          {platform === 'twitter' && <Twitter className="w-6 h-6" />}
                        </motion.a>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Teams;