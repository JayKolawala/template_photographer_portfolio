import React from "react";
import workshop from "../assets/workshop.jpg";
import gondol from "../assets/gondol.jpg";  

const Footer = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 md:px-8 bg-gray-800 text-gray-100 lg:ml-[300px]"
    >
      <footer className=" py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* INFO */}
          <div>
            <h3 className="text-xl font-bold mb-4">INFO</h3>
            <p>
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
          </div>

          {/* BLOG POSTS */}
          <div>
            <h3 className="text-xl font-bold mb-4">BLOG POSTS</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 hover:bg-gray-300 p-2 rounded transition-colors cursor-pointer">
                <img
                  src={workshop}
                  alt="Workshop"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <h4 className="font-bold">Lorem</h4>
                  <p className="text-sm">Sed mattis nunc</p>
                </div>
              </li>
              <li className="flex items-start gap-4 hover:bg-gray-300 p-2 rounded transition-colors cursor-pointer">
                <img
                  src={gondol}
                  alt="Gondol"
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <h4 className="font-bold">Ipsum</h4>
                  <p className="text-sm">Praes tinci sed</p>
                </div>
              </li>
            </ul>
          </div>

          {/* POPULAR TAGS */}
          <div>
            <h3 className="text-xl font-bold mb-4">POPULAR TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Travel",
                "New York",
                "London",
                "IKEA",
                "NORWAY",
                "DIY",
                "Ideas",
                "Baby",
                "Family",
                "News",
                "Clothing",
                "Shopping",
                "Sports",
                "Games",
              ].map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    index === 0
                      ? "bg-black text-white"
                      : "bg-gray-400 text-gray-800"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-400 text-center">
          <p>
            Powered by{" "}
            <a
              href="https://jaykolawala.netlify.app/"
              className="text-blue-600 hover:underline"
            >
              Jay Kolawala
            </a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
