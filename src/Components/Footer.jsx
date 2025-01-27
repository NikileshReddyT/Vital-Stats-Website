import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-br mt-10 from-[#f6f9fc] to-[#b7d0ea] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className='flex items-center justify-center mb-6'>
              <img src="/favicon.ico" alt="Vitalstats Logo" className="mb-4 w-12 h-12" /> 
              <h2 className='text-3xl font-semibold font-serif text-gray-800 ml-4'>Vitalstats</h2>
            </div>
            <p className="text-gray-700">
              Revolutionizing healthcare with cutting-edge patient data management for a healthier tomorrow.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Company</h3>
            <ul className="text-gray-600 space-y-3">
              <li><a href="/features" className="hover:text-blue-600 transition duration-200">Features</a></li>
              <li><a href="/team" className="hover:text-blue-600 transition duration-200">Our Team</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition duration-200">Contact Us</a></li>
              <li><a href="/join-team" className="hover:text-blue-600 transition duration-200">Careers</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Support</h3>
            <ul className="text-gray-600 space-y-3">
              <li><a href="#" className="hover:text-blue-600 transition duration-200">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition duration-200">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact Us</h3>
            <ul className="text-gray-600 space-y-3">
              <li>Email: <a href="mailto:hello@vitalstats.com" className="hover:text-blue-600">support@vitalstats.com</a></li>
              <li>Phone: <a href="tel:+15551234567" className="hover:text-blue-600">+91 7202782023</a></li>
              <li>Location: Hyderabad, Telangana</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-500">
            <p className="text-center text-lg md:text-base text-gray-700">© 2024 Vital Health Solutions Pvt Ltd. All rights reserved.</p>
            
            {/* Social Media Icons */}
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="https://www.facebook.com/profile.php?id=61556502329631&mibextid=ZbWKwL" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-600 transition transform hover:-translate-y-1">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://x.com/Vitalstats2023?t=ISd8bI71gqFGIULL4_tDsw&s=08" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-500 transition transform hover:-translate-y-1">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/vital-stats2023/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-700 transition transform hover:-translate-y-1">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/vitalstats2023?igsh=MTNyNHZudzBidXE1Nw==" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-pink-500 transition transform hover:-translate-y-1">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
