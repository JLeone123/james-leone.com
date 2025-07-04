import React from "react";
// import { motion } from "motion/react";
import Link from "next/link";

export const ContactButton = () => {
  return (
    <section
      className="contact-button__container"
      // initial={{ opacity: 0, y: 50 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{
      //   type: "tween",
      //   duration: 0.75,
      //   delay: 0.85,
      // }}
    >
      <Link
        href="https://linkedin.com/in/jamesleone1"
        className="contact-button__link"
      >
        Let's connect!
      </Link>
    </section>
  );
};
