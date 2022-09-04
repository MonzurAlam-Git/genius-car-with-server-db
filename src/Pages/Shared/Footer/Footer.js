import React from "react";

const Footer = () => {
  const today = new Date();
  const fullYear = today.getFullYear();
  return (
    <footer>
      <p className="text-center">
        <b>Copyright &copy; Monzur Alam {fullYear} </b>
      </p>
    </footer>
  );
};

export default Footer;
