import React from 'react';


export const Skills = () => {
  const skills = [
    { name: 'HTML', level: 90, color: '#e44d26' },
    { name: 'CSS', level: 85, color: '#264de4' },
    { name: 'Bootstrap', level: 80, color: '#7952b3' },
    { name: 'JavaScript', level: 75, color: '#f0db4f' },
    { name: 'React', level: 70, color: '#61dafb' },
  ];

  return (
    <div id="Skillid" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <h5>{skill.name}</h5>
              <div className="progress skill-bar">
                <div
                  className="progress-bar skill-fill"
                  role="progressbar"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
