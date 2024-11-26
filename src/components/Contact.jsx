import React from "react";

function Contact() {
  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Feel this from to contact with me.</span>
        <div className="flex flex-col items-center justify-center mt-5 ">
        <form action="" className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
                <label className="block text-gray-700 ">Name</label>
                <input className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Your Name"></input>
            </div>
            <div className="flex flex-col mb-4">
                <label className="block text-gray-700 ">Email</label>
                <input className="shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Your Email"></input>
            </div>
            <div className="flex flex-col mb-4">
                <label className="block text-gray-700 ">Message</label>
                <input className="shadow rounded-lg appearance-none border py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Write Your Message Here"></input>
            </div>
            <button className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-500">Send</button>
           
        </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
