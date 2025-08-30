import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      &copy; {new Date().getFullYear()} NewsApp. All rights reserved.
    </footer>
  );
}

export default Footer;
