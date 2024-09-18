import { useState } from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Experience = () => {
  const [selectCompany, setSelectCompany] = useState("lid-viz");
  const selectedStyles =
    "bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500";
  
  return (
    <section id="experience" className="pt-20 pb-16 md:pt-32 lg:pt-40  ">
      {/* HEADING */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold md:text-4xl text-2xl  mb-5 text-left  ">
          Where I've <span className="text-red">Worked</span>
        </p>
        <LineGradient width=" lg:w-1/6 md:w-1/5 w-1/2" />
      </motion.div>
      {/* experience */}
      <div className="flex flex-col lg:flex-row pt-10 lg:pt-32 lg:pl-40 gap-10 md:gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="experience-list flex flex-wrap md:flex-col md:gap-12  md:border-l border-blue">
            <div
              id="lid-vis"
              className={`rounded-sm rounded-l-none md:border-none  border-l border-blue cursor-pointer py-3 px-5 md:px-7 font-semibold whitespace-nowrap ${
                selectCompany == "lid-viz" ? selectedStyles : ""
              }`}
              onClick={(e) => {
                setSelectCompany(e.target.id);
              }}
            >
              Lid Vision
            </div>
            <div
              id="fiu"
              className={`rounded-sm md:border-none border-l border-blue py-3 rounded-l-none cursor-pointer px-5 md:px-7 font-semibold whitespace-nowrap  ${
                selectCompany == "fiu" ? selectedStyles : ""
              }`}
              onClick={(e) => {
                setSelectCompany(e.target.id);
              }}
            >
              FIU
            </div>
            <div
              id="dxc"
              className={`rounded-sm py-3 md:border-none border-l border-blue  rounded-l-none cursor-pointer px-5 md:px-7 font-semibold whitespace-nowrap  ${
                selectCompany == "dxc" ? selectedStyles : ""
              } `}
              onClick={(e) => {
                setSelectCompany(e.target.id);
              }}
            >
            DXC
            </div>
          </div>
        </motion.div>
        <motion.div
          // className="md:w-1/3 lg:w-full text-center md:text-justify"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {selectCompany == "lid-viz" && (
            <motion.div
              className="experience-details-Lid-Vizion text-justify"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div>
                <h1 className="text-2xl font-semibold">
                  Business Data Analyst Intern{" "}
                  <span className="text-blue cursor-pointer hover:underline">
                    <a
                      href="https://www.lidvizion.com/about-us/"
                      target="blank"
                    >
                      @Lid Vizion
                    </a>
                  </span>
                </h1>
                <span className="text-sm font-semibold block py-2">
                  Miami, Florida | July 2024 - Present
                </span>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ul className="lg:w-3/4 flex flex-col gap-4 pt-4 pl-8">
                  <li className=" list-disc">
                    Provided business and technical deliverables for client and
                    internal software development and implementation projects.
                  </li>
                  <li className="list-disc">
                    Responsible for deliverables such as the Requirements
                    Specifications Document, Configuration Specifications
                    Document, and Test Scripts.
                  </li>
                  <li className="list-disc">
                    Worked closely with cross-functional teams to ensure
                    cohesive and effective data management and analysis
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
          {selectCompany == "fiu" && (
            <motion.div
              className="experience-details-FIU text-justify"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h1 className="text-2xl font-semibold">
                Student Teaching Assistant{" "}
                <span className="text-blue cursor-pointer hover:underline">
                  <a href="https://www.fiu.edu/" target="new">
                    @FIU
                  </a>
                </span>
              </h1>
              <span className="text-sm font-semibold block py-2">
                Miami, Florida | Oct 2022 - Apr 2024
              </span>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ul className="lg:w-3/4 flex flex-col gap-4 pt-4 pl-8">
                  <li className="list-disc">
                    Developed technical training materials and tools for data
                    analysis courses in collaboration with faculty.
                  </li>
                  <li className="list-disc">
                    Assisting students with data collecting, cleaning, and
                    analysis, as well as teaching statistical approaches and
                    software resources.
                  </li>
                  <li className="list-disc">
                    Conducted data visualization exercises to improve students'
                    comprehension of data analysis principles using programs
                    like Tableau and Matplotlib.
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
          {selectCompany == "dxc" && (
            <motion.div
              className="experience-details-DXC text-justify"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div>
                <h1 className="text-2xl font-semibold">
                  Data Analyst{" "}
                  <span className="text-blue cursor-pointer hover:underline">
                    <a href="https://dxc.com/in/en" target="new">
                      @DXC Technology
                    </a>
                  </span>
                </h1>
                <span className="text-sm font-semibold block py-2">
                  Chennai, India | Mar 2021 - Jul 2022
                </span>
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ul className="lg:w-3/4 flex flex-col gap-4 pt-4 pl-8">
                  <div>
                    <li className="list-disc">
                      Created dashboards with diverse data, resulting in a 50%
                      increase in operational efficiency through streamlined
                      processes.
                    </li>
                  </div>
                  <li className="list-disc">
                    Spearheaded governance procedures for key operational
                    metrics, ensuring adherence to standards and protocols,
                    leading to a 30% reduction in data discrepancies and errors.
                  </li>
                  <li className="list-disc">
                    Performed data collection enhancing data accuracy through
                    proactive validation measures and timely error resolution.
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
        </motion.div> */}

        {/* <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Aliquam aliquet integer ut fames odio in at. At magna ornare dictum
            lectus.
          </p>
        </motion.div> */}

        {/* <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Fames odio in at. At magna ornare dictum lectus.
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Experience;
