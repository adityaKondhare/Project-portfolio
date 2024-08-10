import React from "react";

function Footer() {
  return (
    <div className="py-10">
      <div className="h-[1px] w-full bg-white"></div>

      <div className="flex items-center justify-center flex-col mt-10 opacity-70">
        <div className="flex flex-row gap-5 somo">
            <a href="/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a href="/" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="/" target="_blank"><i class="fa-regular fa-envelope"></i></a>
            <a href="/" target="_blank"><i class="fa-brands fa-github"></i></a>
        </div>
        <h1 className="text-white mt-4">Designed and Developed By</h1>
        <h className="text-white mt-2">
          <span className="text-white">Aditya Kondhare</span>
        </h>
      </div>
    </div>
  );
}

export default Footer;
