export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
    initial: { opacity: 0, y: 18, filter: "blur(6px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.7, ease: easeOut },
};

export const stagger = {
    whileInView: { opacity: 1 },
    initial: { opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
};

export const hoverLift = {
    whileHover: { y: -4, scale: 1.01 },
    transition: { duration: 0.25, ease: easeOut },
};