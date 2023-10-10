import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px]"
      >
        Are you searching for a versatile and skilled full Stack Developer to bring your web projects to life? <br/>
        I am here to make that happen for you! I am a seasoned professional with an experience of 8+ years in Full-Stack Web Development. <br/>
        I have spent time building a diverse portfolio and implementing cutting-edge technological practices. <br/>
        From React, Angular, HTML, and CSS to Vue.js, Node.js, PHP, and SQL, I am well-versed in both frontend and backend realms, ensuring seamless integration and flawless functionality.<br/>
        <br/>

        Why Choose Me?<br/>

        ✅ Scalability Redefined: As a Full Stack Developer, I possess the versatility and technical prowess to seamlessly adapt my skills to <br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
          projects of varying magnitudes. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Whether you are a budding startup with ambitious growth plans or an established industry leader seeking to expand your digital<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          footprint, my expertise ensures your application scales effortlessly.<br/>

        ✅ Advanced Technological Practices: My passion for technology drives me to remain at the cutting edge of industry advancements. <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          From harnessing the power of React, Angular, Vue.js, Next.js, Svelte.js and HTML/CSS to leveraging the robustness of Node.js,<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Python, PHP, SQL, and Mongo DB, I harness a dynamic tech stack to craft solutions that stand head and shoulders above the <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          competition which also include, MEAN, MERN, LAMP stacks.<br/>

        ✅ Elevating User Experiences: User-centric design is at the core of my development philosophy.<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          By fusing intuitive user interfaces with seamless navigation, I create digital experiences that leave a lasting impact on your <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          audience, driving engagement and fostering brand loyalty.<br/>

        ✅ End-to-End Project Management: From conceptualization to deployment, I offer comprehensive project management that <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          streamlines every phase of development. This collaborative approach ensures transparent communication, timely milestones, and <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          a seamless execution of your vision.<br/>
        <br/>

        Expertise in Focus:<br/>

        With React, Angular, Next, Svelte, and Vue.js, I build dynamic and interactive frontend experiences that captivate users at every touchpoint.<br/>
        My Node.js expertise empowers me to construct robust and scalable backend architectures that cater to the most demanding performance requirements.<br/>
        Leveraging PHP and SQL, I implement data-driven solutions that form the backbone of your web applications.

        Moreover, I harness the power of Mongo DB to craft high-performance databases, ensuring rapid data retrieval and seamless scalability.<br/>
        I can also perform as DBRE / Azure DevOps and build CI/CD for your databases.<br/>
        <br/>

        Looking for a remote/full-time/part-time/after-hour or different time zone job or 24/7 support.<br/>
        <br/>

        Let's Scale Your Business Together!<br/>
        <br/>

        Reach out to me today, and let's collaborate on creating transformative solutions that propel your business to new heights of success.<br/>
        I am excited to hear about your ambitions and discuss how my expertise can translate them into reality.<br/> 
        Let's make your digital dreams a powerful reality!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
