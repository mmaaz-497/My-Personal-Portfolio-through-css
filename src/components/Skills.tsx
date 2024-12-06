import React from 'react'
import "../app/styles/skills.css"
const Skills = () => {
  return (
    <div className="skills-container">
    <div className="skills-header">
      <h1 className="skills-title">My Skills</h1>
    </div>
    <div className="skills-content">
      <ul className="skills-list">
        <li>
          <strong>Front-End Development:</strong> Proficient in <strong>HTML,</strong>
          <strong>CSS,</strong> and <strong>JavaScript</strong> with expertise in
          modern frameworks like <strong>React.js</strong> and <strong>Next.js</strong>
          to create responsive and user-friendly interfaces.
        </li>
        <li>
          <strong>Back-End Development:</strong> Skilled in building robust server-side
          applications using Node.js, Express.js, and working with APIs and databases
          like MongoDB and MySQL.
        </li>
        <li>
          <strong>Responsive Design:</strong> Strong understanding of creating
          mobile-first, cross-browser compatible websites using tools like Bootstrap and
          Tailwind CSS.
        </li>
        <li>
          <strong>Version Control:</strong> Experienced with Git and GitHub for
          collaborative development and efficient code management.
        </li>
        <li>
          <strong>Problem Solving:</strong> Adept at troubleshooting, debugging, and
          optimizing code for better performance and usability.
        </li>
        <li>
          <strong>Continuous Learning:</strong> Enthusiastic about staying updated with
          the latest web technologies and best practices to enhance development skills.
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Skills
