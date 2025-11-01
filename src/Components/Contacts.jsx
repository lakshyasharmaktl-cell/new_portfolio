import React, { useState } from 'react';
import { User, Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Personal Details
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                    focusedField === 'name' ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Father's Name Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Father's Name
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                    focusedField === 'fatherName' ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('fatherName')}
                    onBlur={() => setFocusedField('')}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter father's name"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                    focusedField === 'email' ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                    focusedField === 'phone' ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField('')}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Address Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <div className="relative">
                  <MapPin className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${
                    focusedField === 'address' ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('address')}
                    onBlur={() => setFocusedField('')}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your address"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className={`absolute left-3 top-4 w-5 h-5 transition-colors ${
                    focusedField === 'message' ? 'text-blue-500' : 'text-gray-400'
                  }`} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Enter your message..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Personal Details Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Personal Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <User className="w-6 h-6 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">Full Name</p>
                    <p className="font-semibold text-gray-800">Your Name Here</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <User className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-600">Father's Name</p>
                    <p className="font-semibold text-gray-800">Father's Name Here</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <Mail className="w-6 h-6 text-purple-500" />
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-800">your.email@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="font-semibold text-gray-800">+1 234 567 8900</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-semibold text-gray-800">Your City, Country</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Note */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-2">Quick Response</h4>
              <p className="text-blue-100">
                I typically respond to messages within 24 hours. Looking forward to connecting with you!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}