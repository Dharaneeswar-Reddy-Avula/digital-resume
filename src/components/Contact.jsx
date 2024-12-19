import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const SubmitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rhkv4w8",  
        "template_pndyc75", 
        form.current,
        "z_fUEzqXhNFfZoxK-"  
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="contact w-full md:p-[20px]">
      <div className="contact-page flex justify-center w-full shadow-xx">
        <form
          ref={form}
          className="contact-form grid grid-cols-1 md:grid-cols-2 gap-[20px] p-[10px]"
          onSubmit={SubmitHandler}
        >
          <input
            type="text"
            placeholder="Enter your Name"
            name="Name"
            className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
            required
          />
          <input
            type="text"
            placeholder="Enter your Mobile Number"
            name="MobileNumber"
            className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
            required
          />
          <input
            type="text"
            name="Subject"
            placeholder="Subject"
            className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
          />
          <textarea
            name="Message"
            placeholder="Enter Your Message"
            className="p-[10px] rounded-lg md:col-span-2 border-[2px] border-[aqua] bg-transparent h-[250px] w-full text-white"
            required
          />
          <input
            type="submit"
            className="bg-[aqua] text-[black] font-semibold md:col-span-2 h-[40px] w-[200px] rounded-lg mx-auto cursor-pointer"
            value="Send Message"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactForm;




    {/* <section className="contact w-full  md:p-[20px]">
        <div className="contact-page flex justify-center w-full shadow-xx ">
          <form className="contact-form grid grid-cols-1 md:grid-cols-2 gap-[20px] p-[10px]" onSubmit={SubmitHandler}  >
            <input
              type="text"
              placeholder="Enter your Name" name='Name'
              className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
            />
            <input
              type="email" name="email"
              placeholder="Enter your Email"
              className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
            />
            <input
              type="text"
              placeholder="Enter your Mobile Number" name="MobileNumber"
              className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
            />
            <input
              type="text" name='Subject'
              placeholder="Subject"
              className="border-[2px] border-[aqua] bg-transparent p-[10px] w-[300px] rounded-md text-white"
            />
            <textarea
              placeholder="Enter Your Message"
              className="p-[10px] rounded-lg md:col-span-2 border-[2px] border-[aqua] bg-transparent h-[250px] w-full "
            />
            <input
              type="submit"
              className="bg-[aqua] text-[black] font-semibold md:col-span-2 h-[40px] w-[200px] rounded-lg mx-auto"
            />
          </form>
        </div>
      </section> */}
     