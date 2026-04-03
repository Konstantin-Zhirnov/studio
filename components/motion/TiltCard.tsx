"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
    maxTilt?: number; // degrees
};

export default function TiltCard({ children, className, maxTilt = 10 }: Props) {
    const ref = useRef<HTMLDivElement | null>(null);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);

    const rx = useSpring(useTransform(my, [-0.5, 0.5], [maxTilt, -maxTilt]), {
        stiffness: 220,
        damping: 22,
    });
    const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-maxTilt, maxTilt]), {
        stiffness: 220,
        damping: 22,
    });

    const onMove = (e: MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;  // -0.5..0.5
        const y = (e.clientY - r.top) / r.height - 0.5;  // -0.5..0.5
        mx.set(x);
        my.set(y);
    };

    const onLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
        >
            {/* inner layer for depth */}
            <div style={{ transform: "translateZ(0px)" }}>{children}</div>
        </motion.div>
    );
}