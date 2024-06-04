// components/avatar.js
import React from "react";

const Avatar = ({ src, alt }) => {
  return (
    <div className="avatar">
      <img src={src} alt={alt} className="w-10 h-10 rounded-full" />
    </div>
  );
};

export default Avatar;
