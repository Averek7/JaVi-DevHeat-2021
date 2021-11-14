import React from "react";
import Caro from "./Caro";
import { motion } from "framer-motion";

const pageTransition = {
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -100,
    scale: 0.5,
  },
};

const Home = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <Caro />
      <div className="scroll-page">
        <div className="block-1 block">
          <div className="block-description">
            <h4>
              <u>Health Tracking</u>
            </h4>
            <br />
            <ol>
              <li>All goodtracking tools right in your very own devices.</li>
              <li>All your health data in encrypted form.</li>
              <li>Just sign-up and see the majic</li>
            </ol>
          </div>
          <div className="block-photo odd-photo">
            <img
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="block-2 block">
          <div className="block-photo even-photo">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
              alt=""
            />
          </div>
          <div className="block-description">
            <h4>
              <u>24*7 Online Support</u>
            </h4>
            <br />
            <ol>
              <li>
                We have our individual support for Android OS, IOS, Watch OS and
                Web-based users.
              </li>
              <li>
                We have team of masters of each catageory you name (Gymnasium
                experts, Yoga gurus, Diet experts and what not).
              </li>
              <li>
                Name it and we have it round the clock for any fitness related
                requirement you will ever need.
              </li>
            </ol>
          </div>
        </div>
        <div className="block-3 block">
          <div className="block-description">
            <h4>
              <u>Customized Training Plans</u>
            </h4>
            <br />
            <ol>
              <li>
                We understand that every individual is diffrent and so using our
                powerfull analytics tools we proivide you with personalized and
                eay to follow day routine.
              </li>
              <li>
                Specialized dashboard so that you can not just stare into your
                healt data but can understand what you do and what you need to
                do throught the day.
              </li>
              <li>All your data is just 1 click away.</li>
            </ol>
          </div>
          <div className="block-photo odd-photo">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt=""
            />
          </div>
        </div>
        {/* <div className="block-4 block">
        <div className="block-photo even-photo">Photo-4</div>
        <div className="block-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quod
          saepe, atque voluptatibus aliquid delectus porro? Saepe earum, nulla
          ipsam doloribus nobis placeat eos error dolores labore iste. Deserunt
          expedita asperiores illum beatae voluptatem?
        </div>
      </div> */}
      </div>
    </motion.div>
  );
};

export default Home;
