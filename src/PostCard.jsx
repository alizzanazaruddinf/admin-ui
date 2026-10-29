import React, { useState } from 'react';

function PostCard({ title, body }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleClick}
      className={`p-6 rounded-lg shadow cursor-pointer transition-colors duration-300 ${
        isClicked ? 'bg-blue-100' : 'bg-white'
      }`}
    >
      <h2 className="text-lg font-bold text-gray-800 mb-3 capitalize">
        {title}
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        {body}
      </p>
    </div>
  );
}

export default UserCard;