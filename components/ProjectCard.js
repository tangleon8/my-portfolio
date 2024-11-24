import React from 'react';

const ProjectCard = ({ title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-md shadow-md">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  );
};

export default ProjectCard;
