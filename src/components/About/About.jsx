import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile_photo-m.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-5"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
        {/* Left Side - unchanged */}
        <div className="md:w-1/2 text-center md:text-left mt-1 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-0 leading-none">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 mt-2 leading-none">
            Sambal Singh
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 mt-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "UI/UX Designer",
                2000,
                "AWS DevOps Engineer",
                2000,
                "Coder",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-[#8245ec]"
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a Frontend Developer with 6 months of trainee experience in
            building responsive and user-friendly web applications. Previously,
            I worked as a Cloud Success Engineer for 1 year, gaining hands-on
            experience with AWS and DevOps practices. I am passionate about
            creating efficient, scalable, and modern digital solutions.
          </p>
          <a
            href="https://drive.google.com/file/d/1mIF5SIIEVnVCdGwHYsWUDA8t9u8ULRr3/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side - Image with added animations */}
        <div className="md:w-[45%] flex justify-center md:justify-end">
          {/* Animated container with floating effect */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] animate-float">
            {/* Rotating ring 1 - outer dashed ring */}
            <div className="absolute inset-0 rounded-full border-4 border-dashed border-purple-400/30 animate-spin-slow"></div>
            {/* Rotating ring 2 - inner dotted ring (reverse) */}
            <div className="absolute inset-0 rounded-full border-4 border-dotted border-purple-300/20 animate-spin-slower"></div>

            {/* The Tilt component with pulsing glow */}
            <div className="relative w-full h-full animate-glow">
              <Tilt
                className="w-full h-full border-4 border-purple-700 rounded-full overflow-hidden"
                tiltMaxAngleX={20}
                tiltMaxAngleY={20}
                perspective={1000}
                scale={1.05}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <img
                  src={profileImage}
                  alt="Sambal Singh"
                  className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                />
              </Tilt>
            </div>

            {/* Floating small blurs for extra charm */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        /* Floating the entire image container */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        /* Pulsing glow on the image border */
        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(130, 69, 236, 0.2), 0 0 40px rgba(130, 69, 236, 0.1); }
          50% { box-shadow: 0 0 30px rgba(130, 69, 236, 0.5), 0 0 60px rgba(130, 69, 236, 0.2); }
          100% { box-shadow: 0 0 20px rgba(130, 69, 236, 0.2), 0 0 40px rgba(130, 69, 236, 0.1); }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        /* Rotating rings */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 20s linear infinite;
        }

        /* Pulse delay for small blurs */
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

export default About;
