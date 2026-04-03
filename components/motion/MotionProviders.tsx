"use client";

import {ReactNode} from "react";
import { MotionConfig } from "framer-motion";

import { easeOut } from "./motionPresets";


export default function MotionProviders({ children }: { children: ReactNode }) {
    return (
        <MotionConfig reducedMotion="user" transition={{ ease: easeOut }}>
            {children}
        </MotionConfig>
    );
}