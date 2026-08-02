import React, { useEffect, useRef, useState } from 'react';

export default function Home() {
  const imageRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullText = "Hi, I'm Lakshya Sharma, currently pursuing my Bachelor of Computer Applications (BCA). I'm passionate about web development and continuously improving my skills in the MERN stack, ";

  useEffect(() => {
    // Image animation
    const imageElement = imageRef.current;
    imageElement.style.opacity = '0';
    imageElement.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
      imageElement.style.transition = 'all 0.8s ease-out';
      imageElement.style.opacity = '1';
      imageElement.style.transform = 'scale(1)';
    }, 500);

    let currentIndex = fullText.length;
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (currentIndex >= 0) {
          setDisplayText(fullText.slice(currentIndex));
          currentIndex--;
        } else {
          clearInterval(typingInterval);
          // Blinking cursor effect
          setInterval(() => {
            setShowCursor(prev => !prev);
          }, 500);
        }
      }, 50);
    };

    setTimeout(startTyping, 1000);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black-300 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
          
          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
              
              <img 
                ref={imageRef}
                src="https://res.cloudinary.com/dzskwfinc/image/upload/v1785651957/pic_ml0vjx.png" 
                alt="Profile" 
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
              {/* Right to Left Typing Animation */}
              <div className="text-white text-xl leading-relaxed font-mono min-h-[120px]">
                <span className="typing-text">
                  {displayText}
                </span>
                <span className={`cursor ${showCursor ? 'opacity-100' : 'opacity-0'} ml-1`}>
                  |
                </span>
              </div>

              {/* Skills Tags */}
              <div className="mt-6 flex flex-wrap gap-3">
                {['Full Stack', 'Node.js', 'React.js', 'BCA Student'].map((skill, index) => (
                  <span 
                    key={skill}
                    className="bg-purple-500/20 text-purple-200 px-4 py-2 rounded-full text-sm font-semibold border border-purple-400/30 backdrop-blur-sm"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1 + 2}s forwards`,
                      opacity: 0
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
             
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

        .cursor {
          display: inline-block;
          background-color: white;
          margin-left: 2px;
          animation: blink 1s infinite;
          font-weight: bold;
        }

        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}