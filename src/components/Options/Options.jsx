import React, { useRef } from "react";
import "./Options.css";
import Cards from "../../Cards/Cards";

import { motion, useAnimation } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HourglassFullOutlinedIcon from '@mui/icons-material/HourglassFullOutlined';

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Pagefirst = ({ accname,totalVotee,mostVotee }) => {
  const ref = useRef(null);
  const handleclick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
    <div className="upperparent">

      <div className="heading">
        <HourglassFullOutlinedIcon className="hour" fontSize="large"/>
        <h1>WELCOME TO THE DECANTRALIZED VOTING APP</h1>
        <span>
          <LockOpenIcon fontSize="large"/>
          <h4> {accname}</h4>
          </span>
       
      </div>
      <div className="middle">
        <div className="middle-middle">
          <div className="middle-upper">
      <div className="muu1">

          <h1 color="white">
             
          Total Votes recorded Till now - {totalVotee}
          </h1>
      </div>
      <div className="muu2">

          <h1>Most Voted Candidate Till Now- C#{mostVotee}</h1>
          </div>
      </div>
         <div className="middle-lower">
          <h1>
             
          {/* Total Votes rercorder Till now */}
          </h1></div> 
          </div>
      <div className="rainbow">
      <a className="hello"href="#section1" class="btn-flip" data-back="Vote" data-front="BJP"></a>
        <span><h1>VS</h1></span>

        <a className="hello"href="#section1" class="btn-flip" data-back="Vote" data-front="Congress"></a>
        <span><h1>VS</h1></span>
        <a className="hello"href="#section1" class="btn-flip" data-back="Vote" data-front="AAP"></a>
        <span><h1>VS</h1></span>
       
        <a className="hello"href="#section1" class="btn-flip" data-back="Vote" data-front="TMC"></a>
       
       
      </div>
      </div>
    </div>
    </>
  );
};

const Box2 = ({ accname,totalVotee,mostVotee }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <Pagefirst accname={accname} totalVotee={totalVotee} mostVotee={mostVotee}/>
    </motion.div>
  );
};

const Box0 = ({ giveeVote0,numm }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
    var pic0= "/Videos/img1.jpg"
  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      
        <Cards giveeVotee={giveeVote0} pic={pic0} numm={numm} />
    
    </motion.div>
  );
};
const Box1 = ({ giveeVote1, numm }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  var pic1= "/Videos/img2.png"
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      
        <Cards giveeVotee={giveeVote1} pic={pic1} numm={numm}/>
      
    </motion.div>
  );
};
const Box3 = ({ giveeVote2,numm }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  var pic2= "/Videos/img3.jpg"
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
     
        <Cards giveeVotee={giveeVote2}  pic={pic2} numm={numm}/>
      
    </motion.div>
  );
};
const Box4 = ({ giveeVote3,numm }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  var pic4= "/Videos/img4.jpg"
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
    
       
        <Cards giveeVotee={giveeVote3} pic ={pic4} numm={numm}/>
      
    </motion.div>
  );
};

export default function Options({
  accname,
  giveeVote0,
  giveeVote1,
  giveeVote2,
  giveeVote3,
  totalVotee,
  mostVotee
  
}) {
  return (
    <>
      <video autoPlay loop muted id="myVideo">
        <source src="/Videos/code3.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <Box2 accname={accname} totalVotee={totalVotee} mostVotee={mostVotee} />
      <section id="section0">
        <Box0 giveeVote0={giveeVote0} numm="01"></Box0>
      </section>
      <section id="section1">
        <Box1 giveeVote1={giveeVote1} numm="02"></Box1>
      </section>
      <section id="section3">
        <Box3 giveeVote2={giveeVote2} numm="03"></Box3>
      </section>
      <section id="section4">
        <Box4 giveeVote3={giveeVote3} numm="04"></Box4>
      </section>
    </>
  );
}
