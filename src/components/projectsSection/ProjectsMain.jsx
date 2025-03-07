import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import projectImg1 from "../../assets/website-img-1.jpg";
import projectImg2 from "../../assets/website-img-2.webp";
import projectImg3 from "../../assets/website-img-3.jpg";
import projectImg4 from "../../assets/website-img-4.jpg";

const projects = [
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: projectImg1,
    link: "#",
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: projectImg2,
    link: "#",
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: projectImg3,
    link: "#",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: projectImg4,
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
