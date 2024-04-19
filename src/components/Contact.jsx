import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/paqgexwa"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-5">
            Submit the form below or send me a direct email
            <span className="font-bold">@</span>
            <br />
            <a
              href="mailto:Andrew.H.Zerdelian@gmail.com"
              className="text-blue-500"
            >
              Andrew.H.Zerdelian@gmail.com
            </a>
            <br />
            <a href="tel:+01012108792" className="text-blue-500">
              +01012108792
            </a>
            <br />
            <a
              href="https://wa.me/201012108792"
              className="text-green-500 font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on WhatsApp
            </a>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-xl"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] rounded-xl"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-xl"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 rounded-xl hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
