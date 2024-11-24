import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Machine Learning & Data Analytics Researcher',
      company: 'University of Wisconsin – Madison',
      date: 'September 2024 - Present',
      description: `
        Collaborated with a team to develop machine learning models, leveraging gradient-boosted trees 
        to analyze donation campaigns for The River Food Pantry, the largest food pantry in Wisconsin. 
        Applied SHAP analysis for feature importance and improved donor engagement strategies.`,
    },
    {
      title: 'Information Technology Intern',
      company: 'DTCC – McLean, Virginia',
      date: 'June 2024 - August 2024',
      description: `
        Designed a high-performance Splunk dashboard to process 10 million daily logs, achieving 
        a 20% boost in system reliability. Architected Power BI dashboards for treasury project oversight, 
        improving operational agility.`,
    },
    {
      title: 'Cybersecurity Research Assistant',
      company: 'UMBC Department of Information Systems',
      date: 'January 2024 - June 2024',
      description: `
        Researched deception-based attacks in IoT for autonomous vehicles and drones under Dr. Zhiyuan Chen. 
        Authored an IEEE literature review on cybersecurity advancements.`,
    },
  ];

  const sortedExperiences = experiences.sort((a, b) => {
  const dateA = new Date(a.duration.split(" – ")[1] || new Date()); // Handle 'Present'
  const dateB = new Date(b.duration.split(" – ")[1] || new Date());
  return dateB - dateA; // Sort descending
});


  return (
    <div className="container mx-auto py-20">
      <h2 className="text-4xl font-bold mb-6">Professional Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded-md shadow-md">
            <h3 className="text-2xl font-bold">{exp.title}</h3>
            <h4 className="text-xl text-gray-400">{exp.company}</h4>
            <p className="text-sm text-gray-500">{exp.date}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
