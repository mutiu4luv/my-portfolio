import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        Madu Chibueze is a Nigerian full-stack developer and educator from
        Umuchima, Ideato South LGA. I currently serve as a Fullstack Development
        Facilitator at the Whoba Ogo Foundation, where I empower individuals
        with the knowledge and skills needed to thrive in the tech industry. The
        Whoba Ogo Foundation is a social impact organization dedicated to
        providing educational and health support to underprivileged communities
        across Nigeria. In my role at the Foundation, I not only develop
        software but also mentor and train aspiring developers, fostering
        innovation and contributing to community growth through technology.
        Additionally, I run a YouTube channel where I share content related to
        my interests and expertise. Prior to my current position, I worked with
        Midra Solutions Ltd., a service delivery company that provides a
        combination of technology and media services. The company is led by
        certified professionals with expertise in research, design, development,
        and delivery of high-end technology solutions. My commitment to
        technology education and community development is evident through my
        active involvement in initiatives like the Whoba Ogo Foundation's ICT
        Innovation Hub, which aims to empower IT enthusiasts across Nigeria.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
