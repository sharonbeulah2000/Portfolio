import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const About = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="about" className="pt-10 pb-24">
      <div className="mt-32">
        {/* {TITLE} */}
        <motion.div
          className="md:w-[35%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            ABOUT <span className="text-red">ME</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
        <div className="md:flex md:justify-between md:gap-16">
          {/* IMAGE */}
          <motion.div
            className="md:order-2 mt-16 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {isAboveLarge ? (
              <div
                className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-16 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
              >
                <img
                  alt="profile"
                  className=" saturate-150 hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] rounded-t-full md:max-w-[600px]"
                  src="assets/psb-profile-pic.jpg"
                />
              </div>
            ) : (
              <img
                alt="profile"
                className="saturate-150 z-10 w-full max-w-[400px] mx-auto md:max-w-[600px]  rounded-t-full"
                src="assets/psb-profile-pic.jpg"
              />
            )}
          </motion.div>
          {/* PARAGRAPH */}
          <motion.div
            className="mt-16 md:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className=" text-justify">
              Hi, I am{" "}
              <span className="font-semibold text-red ">
                Sharon Beulah Perumandla
              </span>{" "}
              , a data enthusiast with a flair for turning raw numbers into
              compelling stories. Armed with a Master's in Data Science from{" "}
              <span className="font-semibold text-red ">
                Florida International University
              </span>{" "}
              and hands-on experience ranging from optimizing supply chains to
              taming the complexities of BERT models, I thrive on solving
              puzzles that others might not even see. Whether it's diving deep
              into data lakes or crafting dashboards that make insights pop, I'm
              all about making data not just digestible, but delightful. When
              I'm not wrangling data, you'll find me perfecting the art of
              balancing innovation with precision, one algorithm at a time.
              Ready to bring a dash of creativity to your next big project!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
