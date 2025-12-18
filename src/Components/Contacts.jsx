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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Personal Details
          </h1>
          <p className="text-lg text-gray-600">
            Fill in your details below
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <div className="relative">
                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  focusedField === 'name' ? 'text-blue-500' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  className="w-full pl-14 py-4 text-base border border-gray-300 rounded-xl
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            {/* Father's Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Father's Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  className="w-full pl-14 py-4 text-base border border-gray-300 rounded-xl
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-all duration-300"
                  placeholder="Enter father's name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-14 py-4 text-base border border-gray-300 rounded-xl
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full pl-14 py-4 text-base border border-gray-300 rounded-xl
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full pl-14 py-4 text-base border border-gray-300 rounded-xl
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-all duration-300"
                  placeholder="Enter your address"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full pl-14 py-4 text-base border border-gray-300 rounded-xl
                             focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                             transition-all duration-300 resize-none"
                  placeholder="Enter your message"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600
                         text-white py-4 rounded-xl font-semibold text-lg
                         flex items-center justify-center gap-2
                         hover:from-blue-600 hover:to-purple-700
                         transform hover:scale-105 transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
