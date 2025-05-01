import ExperienceEducation from "../components/experienceEducation/ExperienceEducation";
import SkillSection from "../components/SkillSection/SkillSection";
import "./stylesPages.css";

const About = () => {
  return (
    <div>
      <h2 className="title-1">About Me</h2>
      <div className="aboutMe">
        <div className="personalDetails">
          <p>
            <strong>First Name:</strong> Sevada
          </p>
          <p>
            <strong>Last Name:</strong> Poghosyan
          </p>
          <p>
            <strong>Age:</strong> 27 Years
          </p>
          <p>
            <strong>Nationality:</strong> Armenian
          </p>
          <p>
            <strong>Freelance:</strong> Available
          </p>
          <p>
            <strong>Address:</strong> Yerevan, Armenia
          </p>
          <p>
            <strong>Phone 1: </strong> +374 93 934945
          </p>
          <p>
            <strong>Phone 2: </strong> +374 33 100204
          </p>
          <p>
            <strong>Email:</strong> poxosyansevada@gmail.com
          </p>
        </div>
        <div className="professionalSnapshot">
          <strong>Professional Snapshot</strong>
          <p>
            With 2+ years of dedicated work experience and a commitment to
            continuous learning and growth, I am eager to contribute my skills
            and expertise to diverse projects.
          </p>
        </div>
        <div className="certifications">
          <strong>Certifications</strong>
          <p> 2</p>
        </div>
        <div className="languageProficiency">
          <strong>Language Proficiency</strong>
          <p>English (A2): Basic Proficiency</p>
          <p>Russian (B2): Intermediate Proficiency</p>
          <p>Armenian (C2): Fluent</p>
        </div>
      </div>
      <SkillSection />
      <ExperienceEducation />
    </div>
  );
};

export default About;
