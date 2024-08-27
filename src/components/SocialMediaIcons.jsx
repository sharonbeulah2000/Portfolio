const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/sharon-beulah-perumandla"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/sharonbeulah2000"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github.png" className=" h-[30px] w-[30px]"/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="mailto: sharonbeulahp@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="gmail-link" src="../assets/gmail.png"  className=" h-[30px] w-[30px]"/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
