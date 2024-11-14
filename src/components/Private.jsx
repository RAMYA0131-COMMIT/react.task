import React from "react";
const Footer=()=>{
    return(
      <footer className="bg-gray-900 text-white p-4 mt-0">
      <div className="flex justify-between items-center">
        <div className="text-sm">
          <p>&copy; 2024 Weekaway. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-500">
            Terms of Service
          </a>
          <a href="#" className="hover:text-blue-500">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;