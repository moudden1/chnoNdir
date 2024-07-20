import React, { useEffect, useRef, useState } from 'react';
import './ScrollBar.css';  // Assuming you have a CSS file for styles

const ScrollingBar = () => {
  const [notifications, setNotifications] = useState([
    'Plateforme marocaine d\'orientation scolaire',
    'Par des étudiants, aux étudiants !',
    'Conseils avisés',
    'Prenez votre rdv avec l\'expert de votre choix',
  ]);

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollElement) {
        scrollAmount += 1;
        scrollElement.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollElement.scrollWidth - scrollElement.clientWidth) {
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="scrolling-bar-container">
      <div className="scrolling-bar" ref={scrollRef}>
        {notifications.map((notification, index) => (
          <div className="notification" key={index}>
            {notification}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBar;
