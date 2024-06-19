export const borderVariants = {
    initial: { x: 0 },
    animate: (index: number) => ({
      x: index * 100,  // Adjust 100 to match button width or spacing
      transition: { duration: 0.3, ease: "easeOut" }, 
    }),
  };
  