import { motion } from "framer-motion";
import LoginCard from "../components/LoginCard";
import CalendarCard from "../components/CalendarCard";
import ReferenceCard from "../components/ReferenceCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function LandingPage() {
  return (
    <motion.div
      className="scene"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <div className="mountain" />

      <motion.div
        className="layout"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item}>
          <LoginCard />
        </motion.div>

        <motion.div variants={item}>
          <CalendarCard />
        </motion.div>

        <motion.div variants={item}>
          <ReferenceCard />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}