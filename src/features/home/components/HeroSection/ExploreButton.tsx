import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const ExploreButton = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once on scroll
    });
  }, []);

  return (
    <button
      data-aos="fade-up" // AOS animation type
      style={{
        background: 'linear-gradient(90deg,rgba(0, 196, 180, 0.28),rgba(2, 137, 209, 0.3))', // Gradient background
        border: '2px solid #3FFFF8', // Cyan border
        borderRadius: '50px', // Rounded edges
        padding: '15px 30px', // Padding for size
        color: '#fff', // White text
        fontSize: '18px', // Font size
        fontWeight: 'bold', // Bold text
        textTransform: 'uppercase', // Uppercase text
        cursor: 'pointer', // Pointer on hover
        outline: 'none', // Remove default outline
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Subtle shadow
        transition: 'transform 0.3s ease', // Smooth hover effect
      }}
      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')} // Scale up on hover
      onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')} // Scale back on leave
    >
      Explore the bottle
    </button>
  );
};

export default ExploreButton;