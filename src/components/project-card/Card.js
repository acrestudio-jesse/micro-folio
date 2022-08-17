import styles from "./Card.module.css";
import { useRef } from "react";
import { useInView} from "framer-motion";



const Card = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{
        backgroundImage: `url('${props.bgImage}')`,
        transform: isInView ? "translateY(0)" : "translateY(-50px)",
        opacity: isInView ? 1 : 0,
        transition: `${(props.delay + 1) * 0.7}s`,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
