import experienceImage from "../../assets/experience-image.png";
// console.log(experienceImage);
const ExperienceTopMiddle = () => {
  return (
    <div className="lg:w-[35%] md:w-[50%] sm:w-[80%]">
      <img src={experienceImage} alt="my experience" />
    </div>
  );
};

export default ExperienceTopMiddle;
