import { images } from "../assets/images"; // You'll need to import your images

const PortfolioGrid = ({ openModal }) => {
  const portfolioItems = [
    { img: images.natureBoy, alt: "A boy surrounded by beautiful nature" },
    { img: images.girlMountain, alt: "What a beautiful scenery this sunset" },
    { img: images.girl, alt: "The Beach. Me. Alone. Beautiful" },
    { img: images.boy, alt: "Quiet day at the beach. Cold, but beautiful" },
    { img: images.manBench, alt: "Waiting for the bus in the desert" },
    { img: images.natureBoy, alt: "Nature again.. At its finest!" },
    { img: images.girl, alt: "Canoeing again" },
    { img: images.girlTrain, alt: "A girl, and a train passing" },
    { img: images.closeGirl, alt: "What a beautiful day!" },
  ];

  return (
    <section id="portfolio" className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-3xl font-bold mb-8">Portfolio</h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              onClick={() => {
                openModal(item.img, item.alt);
              }}
            >
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-100 opacity-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav className="inline-flex rounded-md shadow">
            <button className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              «
            </button>
            <button className="px-4 py-2 border-t border-b border-gray-300 bg-gray-100 text-gray-700">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              4
            </button>
            <button className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              »
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
