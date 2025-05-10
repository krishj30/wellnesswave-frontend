export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      opacity: 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        // Fixed typo here ✅
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.42, 0, 0.58, 1], // Smoother ease curve ✅
      },
    },
  };
}
