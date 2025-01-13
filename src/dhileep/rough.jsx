import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2C2C2C",
        color: "#F1F1F1",
        textAlign: "center",
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
        borderTop: "2px solid #D4AF37",
      }}
    >
      {/* Logo */}
      <div>
        <img
          src="/path/to/logooff.webp"
          alt="Dhileep's Sayato Logo"
          style={{ height: "60px", marginBottom: "10px" }}
        />
      </div>

      {/* Contact Info */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        <div>
          <FaMapMarkerAlt style={{ color: "#D4AF37", marginRight: "8px" }} />
          123 Food Street, Culinary City, FL 12345
        </div>
        <div>
          <FaPhone style={{ color: "#D4AF37", marginRight: "8px" }} />
          +1 234-567-890
        </div>
        <div>
          <FaEnvelope style={{ color: "#D4AF37", marginRight: "8px" }} />
          contact@dhileepssayato.com
        </div>
      </div>

      {/* Links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "14px" }}>
        <a href="#" style={{ color: "#D4AF37", textDecoration: "none" }}>
          Privacy Policy
        </a>
        <a href="#" style={{ color: "#D4AF37", textDecoration: "none" }}>
          Terms of Service
        </a>
        <a href="#" style={{ color: "#D4AF37", textDecoration: "none" }}>
          Contact Us
        </a>
      </div>

      {/* Social Media Icons */}
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "15px" }}>
        <a href="#" style={{ color: "#D4AF37", fontSize: "20px" }}>
          <FaFacebook />
        </a>
        <a href="#" style={{ color: "#D4AF37", fontSize: "20px" }}>
          <FaInstagram />
        </a>
        <a href="#" style={{ color: "#D4AF37", fontSize: "20px" }}>
          <FaTwitter />
        </a>
      </div>

      {/* Copyright */}
      <p style={{ fontSize: "14px", marginTop: "15px" }}>
        © 2025 Dhileep's Sayato. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
