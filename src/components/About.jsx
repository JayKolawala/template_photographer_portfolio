import React from "react";
import avatar from "../assets/avatar_hat.jpg";
const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 md:px-8 bg-gray-800 text-gray-100"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About You</h2>

        <div className="flex flex-col items-center gap-8">
          <div className="md:w-1/2">
            <img
              src={avatar}
              alt="Me"
              className="w-full max-w-md mx-auto rounded-lg shadow-xl"
            />
          </div>

          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-bold mb-4">Your Name</h3>
            <p className="mb-4">
              Some text about me. I love taking photos of PEOPLE. I am lorem
              ipsum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="mb-2">mail: example@example.com</p>
            <p className="mb-6">tel: 5353 35531</p>

            <hr className="border-gray-600 my-6" />

            <h4 className="text-xl font-bold mb-4">Technical Skills</h4>

            <div className="space-y-4">
              <div>
                <p className="mb-1">Photography</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gray-400 h-2.5 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="mb-1">Videography</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gray-400 h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div>
                <p className="mb-1">Photoshop</p>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gray-400 h-2.5 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>

            <a
              href="/dummy.pdf"
              download="resume.pdf"
              className="mt-6 inline-block px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded transition-colors"
            >
              Download Resume
            </a>

            <hr className="border-gray-600 my-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
