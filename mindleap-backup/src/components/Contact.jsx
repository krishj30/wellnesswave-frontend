import React from "react";

const Contact = () => {
  return (
    <div className="bg-purple-50 py-16 px-6" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
       {/* Left Section */}
<div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
  <h2 className="text-2xl font-bold">Get Help Now</h2>
  <p>
    We have multiple ways for you to get help, whether you need immediate 
    assistance or just someone to talk to. Our services are available for 
    free, 24/7.
  </p>
  <div className="bg-gray-100 p-4 rounded-md text-l">
    This support is available within India. If you or someone you know needs 
    help, you can call the Tele-MANAS helpline for free mental health 
    support:
    <br />
    📞 Dial 14416 (Available 24/7 in multiple languages)
    <br />
    If you are outside India, please seek help from your local health provider 
    or emergency services.
  </div>
</div>


        {/* Right Section (Emergency Help) */}
        <div className="w-[700px] h-[500px] bg-[#A058A6] text-white shadow-lg rounded-lg p-6 flex flex-col items-start justify-center">
  <h3 className="text-xl font-bold">If this is an emergency</h3>
  <p className="mt-4">
    Call <strong>112</strong> (India’s national emergency number) or visit the nearest hospital for urgent medical care.
  </p>
  <p className="mt-2">
    For mental health support, call <strong>Tele-MANAS</strong> at <strong>14416</strong> (available 24/7).
  </p>
  <a href="tel:112">
    <button className="bg-black text-white px-6 py-2 rounded-md mt-4">
      CALL 112 NOW  
    </button>
  </a>
  <a href="tel:14416">
    <button className="bg-black text-white px-6 py-2 rounded-md mt-4">
      CALL Tele-MANAS (14416)
    </button>
  </a>
</div>


      {/* Support & Email Section (Side by Side) */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row justify-center items-start gap-8">
       

       
      </div>
    </div>
    </div>
  );
};

export default Contact;
