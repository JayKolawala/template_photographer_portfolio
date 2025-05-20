const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

        <p className="mb-8 text-center">
          Do you want me to photograph you? Fill out the form and fill me in
          with the details :) I love meeting new people!
        </p>

        <form className="space-y-4">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
