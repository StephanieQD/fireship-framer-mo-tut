import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

import React from 'react'

const types = {
  dropIn : {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  },
  badSuspension : {
    hidden: {
      y: "-100vh",
      opacity: 0,
      transform: "scale(0) rotateX(-360deg)",
    },
    visible: {
      y: "0",
      opacity: 1,
      transform: "translateY(-25vh) translateZ(0px)",
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 15,
        stiffness: 500,
      },
    },
    exit: {
      y: "-100vh",
      opacity: 0,
    },
  },
  newspaper: {
    hidden: {
      transform: "scale(0) rotate(720deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: " scale(1) rotate(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transform: "scale(0) rotate(-720deg)",
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  },
  fadeIn: {
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  },
  flip: {
    hidden: {
      transform: "scale(0) rotateX(-360deg)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: " scale(1) rotateX(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transform: "scale(0) rotateX(360deg)",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
  roadRunner: {
    hidden: {
      transform: "translateX(-1500px) skewX(30deg) scaleX(1.3)",
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    visible: {
      transform: "translateX(0px) skewX(0deg) scaleX(1)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transform: "translateX(1500px) skewX(30deg) scaleX(1.3",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }
};

const Modal = ( {handleClose, text, type}) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={types[type]}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-text">
          <h3>{type}</h3>
          <h5>{text}</h5>
        </div>
        <motion.button 
          className="modal-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{scale: 0.9}} 
          onClick={handleClose}
        >
          Close
        </motion.button>
        
      </motion.div>
    </Backdrop>
  )
}

export default Modal