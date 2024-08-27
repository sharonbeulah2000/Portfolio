import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
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
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>

        {/* <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 h-[260px] w-full "
                src="assets/banner.jpg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/banner.jpg" />
          )}
        </div> */}
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* Data Management */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Data Management
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="mt-5 flex gap-5 justify-between">
            <div className="w-[80px] h-[200px]  flex justify-center items-center"><img className="h-full w-full object-contain " src="/assets/python-logo.png" alt="python-logo"  /></div>
            <div className="w-[80px] h-[200px]  flex justify-center items-center"><img className="h-full w-full object-contain " src="/assets/Rlogo.png" alt="R-logo" /></div>
            <div className="w-[80px] h-[200px]  flex justify-center items-center"><img className="h-full w-full object-contain " src="/assets/excel.png" alt="excel-logo" /></div>
            
          </div>
        </motion.div>

        {/* Data Visualization */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Data Visualization
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <div className="mt-5 flex gap-5 justify-between">
          <div className=" flex items-center justify-center h-[200px] w-[80px]"><img className="object-contain   h-full w-full" src="/assets/tableau.png" alt="tableau-logo"  /></div>    
            <div className=" flex items-center justify-center h-[200px] w-[80px] "><img className="object-contain  h-full w-full" src="/assets/powerBI.png" alt="powerBI"  /></div>
            <div className=" flex justify-center h-[200px] w-[80px] "><img className="object-contain  h-full w-full" src="/assets/sas-logo.png" alt="sas-logo"  /></div>
          </div>
        </motion.div>
        {/* Database*/}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              Database
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32  bg-yellow absolute right-0 top-0 z-[-1]" />
            
          </div>
          <div className="mt-5 flex gap-5 justify-evenly  ">
            <div className=" w-[80px] h-[200px]  flex justify-center items-center"><img className="  h-full w-full object-contain" src="/assets/sql-logo.png" alt="sql-logo"  /></div>
            <div className="w-[80px]  h-[200px]  flex justify-center items-center "><img className="  h-full w-full object-contain" src="/assets/oracle.png" alt="oracle-logo" /></div>
            
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
