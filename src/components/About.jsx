import React from 'react'

export const About = () => {
    const skills = [
        { name: "HTML", percentage: 70, color: "#4caf50" },
        { name: "CSS", percentage: 80, color: "#2196f3" },
        { name: "JavaScript", percentage: 50, color: "#ff9800" },
        { name: "React", percentage: 60, color: "#673ab7" },
        { name: "Tailwind CSS", percentage: 75, color: "#3eaf4d" },
      ];
  return (
    <section className="about w-full  md:px-[20px] flex flex-col gap-[20px] shadow-xxl">
    <div className="detais-wrap flex flex-col md:gap-[10px]  rounded-lg shadow-lg p-[10px] md:p-[20px]">
      <div className="education-skillwrap flex flex-wrap pl-[10px]justify-between">
        <div className="education shadow-lg p-[10px] rounded-lg w-full md:w-1/2">
          <h1 className="text-[20px] font-bold mb-[20px]">My Education</h1>
          <ul className="myedu flex flex-col gap-[20px] w-full relative after:absolute after:h-full after:w-[3px] after:top-0 after:bg-[aqua]  rounded-lg p-[10px] after:left-[-10px] md:after:left-[-20px]">
            <li className="border-[1px] border-[aqua] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[aqua] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
              SSC: St. Antony's E.M High School, Kadapa
            </li>
            <li className="border-[1px] border-[aqua] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[aqua] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
              Intermediate: RGUKT Nuzvid
            </li>{" "}
            <li className="border-[1px] border-[aqua] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[aqua] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
              BTech: RGUKT Nuzvid
            </li>
            <li className="border-[1px] border-[aqua] p-[10px] rounded-lg relative after:absolute after:h-[20px] after:w-[20px] after:bg-[aqua] after:rounded-full after:left-[-30px] md:after:left-[-40px]">
              Currently Studying: BTech 2nd year, CSE
            </li>
          </ul>
        </div>
        <div className="skills shadow-lg p-[10px] rounded-lg flex flex-col items-center  md:w-1/2">
          <h1 className="text-[20px] font-bold mb-[20px]">My Skills</h1>
          <div className="skills-wrap flex flex-wrap gap-[30px] justify-center md:justify-end md:w-[400px]">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="relative h-[100px] w-[100px] flex justify-center items-center"
              >
                <div
                  className="relative rounded-full w-full h-full animate-fill"
                  style={{
                    background: `conic-gradient(${skill.color} ${skill.percentage * 3.6}deg, #e5e7eb ${skill.percentage * 3.6}deg)`,
                  }}
                ></div>

                <div className="absolute inset-2 bg-[#081b29] rounded-full flex flex-col justify-center items-center">
                  <h1 className="text-white text-sm">{skill.name}</h1>
                  <span className="text-white text-sm">
                    {skill.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
