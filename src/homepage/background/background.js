import "./background.css";
import Dot from "./dot";
import Dot2 from "./dottwo";
import Dot3 from "./dotthree";
// import Intro from "../intro";

export default function Background() {
  return (
    <div className="dots">
      <Dot />
      <Dot2 />
      <Dot3 />
    </div>
  );
}

// <motion.svg
//   width="60"
//   height="60"
//   viewBox="0 0 36 36"
//   fill="none"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <motion.circle
//     variants={circleVariants}
//     initial="hidden"
//     animate="visible"
//     className="circle"
//     cx="18"
//     cy="18"
//     r="18"
//     fill="#FAFF09"
//     fill-opacity="0.75"
//   />
// </motion.svg>
