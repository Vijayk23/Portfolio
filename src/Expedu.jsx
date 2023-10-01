import { Personal } from "./Personal";

export function Expedu() {
  const experience = [
    {
      year: "2021 - PRESENT",
      companyName: "CORRO HEALTHCARE - ",
      role: "EXECUTIVE RCM CYCLE",
      description:
        "As a AR Executive Worked On Behalf of Clarkson eyecare Checking Eligibility & Billing patient appointments",
    },
    {
      year: "2020 - 2021",
      companyName: "OVANTICA - ",
      role: "DIGITAL MARKETING LEAD",
      description:
        "As a Lead  I worked  With Google Ads & Facebook Ads & Email-Marketing,  Maintaining Sale Team And Lead Generator",
    },
  ];
  const education = [
    {
      year: "2015 - 2019",
      institution: "SKP  COLLEGE - ",
      field: "MECHANICAL ENGINNERING ",
      description:
        "Mechanical engineering: design, analyze, and optimize machines & for various industries, solving complex problems.",
    },
    {
      year: "2014 - 2015",
      institution: "Dr. VGN SCHOOL  - ",
      field: "MATHS BIOLOGY ",
      description:
        "Mathematics is essential in biology for modeling, statistics, genetics, and ecological studies, aiding scientific understanding.",
    },
  ];
  return (
    <>
      <div className="exp-edu">
        <div>
          <h3 className="expedu">EXPERIENCE & EDUCATION</h3>
        </div>
        <div className="exp1">
          {experience.map((exp) => (
            <Experien exper={exp} />
          ))}
        </div>

        <div className="exp1">
          {education.map((edu) => (
            <Exduca educ={edu} />
          ))}
        </div>
      </div>
      <br></br>
      <Personal />
    </>
  );
}

function Experien({ exper }) {
  return (
    <div>
      <div className="exp-card">
        <div className="exp">
          <img src="./images/work.png" className="workpng" />
          <p className="exp-year">{exper.year} </p>
        </div>
        <p className="exp-company">
          {exper.companyName} <span className="exp-role">{exper.role}</span>
        </p>
        <p className="exp-description">{exper.description}</p>
      </div>
    </div>
  );
}
function Exduca({ educ }) {
  return (
    <div>
      <div className="edu-card">
        <div className="edu1">
          <img src="./images/education.png" className="workpng" />
          <p className="edu1-year">{educ.year}</p>
        </div>
        <p className="exp-company">
          {educ.institution} <span className="exp-role">{educ.field}</span>
        </p>
        <p className="edu-description">{educ.description}</p>
      </div>
    </div>
  );
}
