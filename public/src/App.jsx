import React, { useState } from 'react';
import { Users, UserCheck, Shield, FileCheck, Calendar, Star, Database, Lock, Mail, CheckCircle, Search, Bell, CreditCard, MapPin, Clock, Award, Phone, AlertTriangle } from 'lucide-react';

const CareNestWorkflow = () => {
  const [selectedFlow, setSelectedFlow] = useState('overview');

  const overviewCards = [
    { 
      title: 'Problem Statement', 
      icon: AlertTriangle,
      color: 'from-rose-600 to-pink-600',
      points: [
        'Finding trustworthy caregivers is difficult for families',
        'Seniors need reliable, verified care support',
        'No centralized platform for caregiver verification',
        'Safety and security concerns with unknown caregivers'
      ]
    },
    { 
      title: 'Our Solution', 
      icon: CheckCircle,
      color: 'from-emerald-600 to-teal-600',
      points: [
        'Verified caregiver marketplace with mandatory KYC',
        'Aadhaar & PAN card verification for all caregivers',
        'Easy search and booking system',
        'Ratings and reviews for quality assurance'
      ]
    },
    { 
      title: 'Key Benefits', 
      icon: Award,
      color: 'from-amber-600 to-orange-600',
      points: [
        'Trust & Safety: Government ID verification',
        'Convenience: Book care sessions online',
        'Transparency: View profiles, reviews & ratings',
        'Support: 24/7 platform assistance'
      ]
    }
  ];

  const caregiverFlow = [
    { 
      id: 1, 
      title: 'Sign Up', 
      icon: Users, 
      desc: 'Basic registration with email, phone, name',
      details: ['Email verification', 'Phone OTP', 'Create password'],
      color: 'bg-blue-600' 
    },
    { 
      id: 2, 
      title: 'KYC Verification', 
      icon: FileCheck, 
      desc: 'Upload Aadhaar & PAN for identity proof',
      details: ['Aadhaar card upload', 'PAN card upload', 'Document validation'],
      color: 'bg-purple-600' 
    },
    { 
      id: 3, 
      title: 'Verification Process', 
      icon: Shield, 
      desc: 'Automated verification & admin review',
      details: ['AI document check', 'Format validation', 'Admin manual review'],
      color: 'bg-rose-600' 
    },
    { 
      id: 4, 
      title: 'Profile Setup', 
      icon: UserCheck, 
      desc: 'Complete professional profile',
      details: ['Experience & skills', 'Service rates', 'Availability schedule'],
      color: 'bg-teal-600' 
    },
    { 
      id: 5, 
      title: 'Approval', 
      icon: CheckCircle, 
      desc: 'Background check & final approval',
      details: ['Criminal record check', 'Reference verification', 'Admin approval'],
      color: 'bg-green-600' 
    },
    { 
      id: 6, 
      title: 'Go Live', 
      icon: Award, 
      desc: 'Profile live, ready for bookings',
      details: ['Public visibility', 'Accept bookings', 'Start earning'],
      color: 'bg-amber-600' 
    }
  ];

  const familyFlow = [
    { 
      id: 1, 
      title: 'Register', 
      icon: Users, 
      desc: 'Family/Guardian account creation',
      details: ['Guardian details', 'Senior care needs', 'Location info'],
      color: 'bg-blue-600' 
    },
    { 
      id: 2, 
      title: 'Search', 
      icon: Search, 
      desc: 'Find caregivers by location & needs',
      details: ['Location filter', 'Specialization filter', 'Availability check'],
      color: 'bg-indigo-600' 
    },
    { 
      id: 3, 
      title: 'View Profiles', 
      icon: FileCheck, 
      desc: 'Review verified caregiver profiles',
      details: ['Check credentials', 'Read reviews', 'View ratings'],
      color: 'bg-purple-600' 
    },
    { 
      id: 4, 
      title: 'Book Service', 
      icon: Calendar, 
      desc: 'Schedule care sessions',
      details: ['Select date/time', 'Choose duration', 'Confirm booking'],
      color: 'bg-teal-600' 
    },
    { 
      id: 5, 
      title: 'Payment', 
      icon: CreditCard, 
      desc: 'Secure online payment',
      details: ['Payment gateway', 'Transaction receipt', 'Invoice generation'],
      color: 'bg-green-600' 
    },
    { 
      id: 6, 
      title: 'Review', 
      icon: Star, 
      desc: 'Rate & review the service',
      details: ['Rate experience', 'Write review', 'Upload photos'],
      color: 'bg-amber-600' 
    }
  ];

  const securityFlow = [
    { 
      id: 1, 
      title: 'Data Input', 
      icon: Users, 
      desc: 'User submits Aadhaar & PAN',
      details: ['Form validation', 'Format checking', 'Required fields'],
      color: 'bg-blue-600' 
    },
    { 
      id: 2, 
      title: 'Document Upload', 
      icon: FileCheck, 
      desc: 'Secure file handling with Multer',
      details: ['File type check', 'Size validation', 'Virus scanning'],
      color: 'bg-purple-600' 
    },
    { 
      id: 3, 
      title: 'Encryption', 
      icon: Lock, 
      desc: 'Data encrypted using bcrypt',
      details: ['Sensitive data hashing', 'SSL/TLS encryption', 'Secure transmission'],
      color: 'bg-rose-600' 
    },
    { 
      id: 4, 
      title: 'API Verification', 
      icon: Shield, 
      desc: 'Validate documents via API',
      details: ['Aadhaar validation', 'PAN verification', 'Cross-reference check'],
      color: 'bg-orange-600' 
    },
    { 
      id: 5, 
      title: 'Secure Storage', 
      icon: Database, 
      desc: 'MongoDB with encryption',
      details: ['Encrypted storage', 'Access control', 'Audit logging'],
      color: 'bg-teal-600' 
    },
    { 
      id: 6, 
      title: 'Authentication', 
      icon: Lock, 
      desc: 'JWT token-based auth',
      details: ['Token generation', 'Session management', 'Auto logout'],
      color: 'bg-green-600' 
    }
  ];

  const techStack = [
    { name: 'React + Vite', icon: Users, color: 'from-cyan-500 to-blue-500', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: Star, color: 'from-blue-500 to-indigo-500', category: 'Styling' },
    { name: 'Node.js', icon: Database, color: 'from-green-500 to-emerald-500', category: 'Backend' },
    { name: 'Express.js', icon: Shield, color: 'from-gray-600 to-gray-700', category: 'API' },
    { name: 'MongoDB', icon: Database, color: 'from-green-600 to-teal-600', category: 'Database' },
    { name: 'JWT & bcrypt', icon: Lock, color: 'from-rose-600 to-pink-600', category: 'Security' },
    { name: 'Multer', icon: FileCheck, color: 'from-amber-600 to-orange-600', category: 'File Upload' },
    { name: 'Nodemailer', icon: Mail, color: 'from-purple-600 to-violet-600', category: 'Email' }
  ];

  const flows = {
    overview: null,
    caregiver: caregiverFlow,
    family: familyFlow,
    security: securityFlow
  };

  const currentFlow = flows[selectedFlow];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
            <span className="text-blue-300 text-sm font-semibold">Senior Care Platform</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            CareNest
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Connecting Seniors with Verified, Trusted Caregivers Through Secure KYC Verification
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {[
            { id: 'overview', label: 'Overview', icon: Shield },
            { id: 'caregiver', label: 'Caregiver Journey', icon: UserCheck },
            { id: 'family', label: 'Family Journey', icon: Users },
            { id: 'security', label: 'Security & KYC', icon: Lock }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFlow(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
                  selectedFlow === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800 hover:text-white border border-slate-700'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Overview Section */}
        {selectedFlow === 'overview' && (
          <div className="space-y-8 sm:space-y-12">
            {/* Problem, Solution, Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {overviewCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all"
                    style={{ animation: `fadeIn 0.6s ease-out ${idx * 0.2}s both` }}
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                    <ul className="space-y-2">
                      {card.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Why Aadhaar & PAN Verification */}
            <div className="bg-gradient-to-br from-rose-900/30 to-pink-900/30 rounded-2xl p-6 sm:p-8 border border-rose-600/30">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-rose-600/30 p-3 rounded-xl">
                  <Shield className="w-8 h-8 text-rose-400" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Why KYC Verification is Mandatory</h2>
                  <p className="text-rose-200">Security is our top priority for families and seniors</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-xl p-4 border border-rose-600/20">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-rose-400" />
                    The Risk Without Verification
                  </h4>
                  <p className="text-gray-300 text-sm">Without proper ID verification, families don't know who they're trusting with their loved ones. This creates serious safety risks.</p>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-4 border border-green-600/20">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Our Protection
                  </h4>
                  <p className="text-gray-300 text-sm">Aadhaar & PAN verification ensures every caregiver is a real person with verified government IDs, creating accountability and trust.</p>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-slate-700">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Technology Stack</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {techStack.map((tech, idx) => {
                  const Icon = tech.icon;
                  return (
                    <div 
                      key={idx}
                      className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-all text-center"
                      style={{ animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both` }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">{tech.name}</h4>
                      <p className="text-gray-400 text-xs">{tech.category}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Workflow Visualization */}
        {currentFlow && (
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentFlow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.id}
                    className="group relative"
                    style={{ animation: `fadeIn 0.6s ease-out ${index * 0.15}s both` }}
                  >
                    <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-1 h-full">
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-2 border-slate-900">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <div className={`${step.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-bold text-white text-center mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-center text-sm mb-4">
                        {step.desc}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 pt-4 border-t border-slate-700">
                        {step.details.map((detail, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-300 text-xs">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      {/* Connection Arrow (except last item) */}
                      {index < currentFlow.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-slate-600">
                          <svg fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Platform Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Shield, title: 'Verified IDs', desc: 'Mandatory Aadhaar & PAN verification', color: 'from-rose-600 to-pink-600' },
            { icon: Search, title: 'Smart Search', desc: 'Filter by location, skills & ratings', color: 'from-blue-600 to-indigo-600' },
            { icon: Calendar, title: 'Easy Booking', desc: 'Schedule & manage appointments', color: 'from-teal-600 to-green-600' },
            { icon: Star, title: 'Reviews', desc: 'Authentic feedback from families', color: 'from-amber-600 to-orange-600' },
            { icon: Bell, title: 'Notifications', desc: 'Real-time email & SMS alerts', color: 'from-purple-600 to-violet-600' },
            { icon: Lock, title: 'Secure', desc: 'Encrypted data & JWT authentication', color: 'from-cyan-600 to-blue-600' }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 hover:border-slate-600 transition-all flex items-center gap-4"
                style={{ animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both` }}
              >
                <div className={`bg-gradient-to-br ${feature.color} rounded-lg p-3 flex-shrink-0 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-xs">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Developer Section */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 to-blue-900/30 rounded-2xl p-8 border border-slate-700">
          <div className="flex flex-col items-center text-center gap-6">
            <div>
              <p className="text-gray-400 text-sm mb-2">Developed by</p>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                Swathi Machireddy
              </h3>
              <p className="text-gray-400 text-sm">Full Stack Developer</p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://carenest-frontend-nu.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600 rounded-xl border border-slate-700 hover:border-blue-500 transition-all flex items-center justify-center group shadow-lg"
                title="Visit Live Website"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </a>
              <a 
                href="https://github.com/Machireddyswathi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 hover:bg-gray-700 rounded-xl border border-slate-700 hover:border-gray-600 transition-all flex items-center justify-center group shadow-lg"
                title="GitHub Profile"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/swathi5854" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600/40 rounded-xl border border-blue-600/40 hover:border-blue-500 transition-all flex items-center justify-center group shadow-lg"
                title="LinkedIn Profile"
              >
                <svg className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            <div className="w-full mt-4 pt-6 border-t border-slate-700">
              <p className="text-gray-400 text-xs">
                Built with React, Node.js, Express, MongoDB, Tailwind CSS | Deployed on Vercel
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CareNestWorkflow;