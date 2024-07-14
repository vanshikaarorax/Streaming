// Subscribe.tsx

import React from 'react';

const Subscribe: React.FC = () => {
  const handleSubscribe = () => {
    // Implement subscription logic here
    alert('Subscribed successfully!');
  };

  return (
    <div>
      <button className="subscribe-button" onClick={handleSubscribe}>
        Subscribe Now
      </button>
    </div>
  );
};

export default Subscribe;
