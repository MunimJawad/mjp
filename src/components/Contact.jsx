import React from "react";

function Contact() {
  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 mt-24">
        <h1 className="text-3xl font-bold mb-6 text-center">Get in Touch</h1>
        <p className="text-center mt-8 text-gray-600">
          Feel free to contact me through the form above.
        </p>

        <div className="flex flex-col items-center justify-center mt-10">
          <form className="bg-slate-200 w-96 px-8 py-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-center">Send Your Message</h2>
            
            {/* Name Field */}
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter Your Name"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                className="shadow rounded-lg appearance-none border py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Write Your Message Here"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <button className="bg-black text-white rounded-xl px-6 py-3 hover:bg-slate-700 duration-300 w-full">
              Send
            </button>
          </form>
        </div>

        
      </div>
    </>
  );
}

export default Contact;
