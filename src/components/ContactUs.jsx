import React from 'react'

const ContactUs = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#1F1E24] py-10">
    <div className="bg-black text-white rounded-lg shadow-lg p-8 max-w-3xl w-full">
      <h1 className="text-4xl font-bold text-center text-zinc-300 mb-6">Contact Us</h1>
      <p className="text-center text-zinc-400 mb-6">
        We'd love to hear from you! Reach out with any questions, comments, or feedback.
      </p>
      
      <form className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border bg-zinc-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6657CE] "
              placeholder="Your Name"
            />
          </div>
          <div className="flex-1 mt-4 sm:mt-0">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3  bg-zinc-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6657CE]"
              placeholder="Your Email"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            className="w-full p-3  bg-zinc-900 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6657CE]"
            placeholder="Your Message"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#6657CE] hover:bg-[#2e1f90] text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>

      <div className="text-center mt-8">
        <p className="text-gray-600">Or reach us at:</p>
        <p className="font-bold text-gray-900">contact@movieapp.com</p>
      </div>
    </div>
  </div>
);
}

export default ContactUs
