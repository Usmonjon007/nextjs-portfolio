import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
    useEffect(() => {
        setTimeout(() => {
            setIsLoading();
        }, 1900);
    }, [setIsLoading]);
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="loader"
                    exit={{ scale: 0 }}
                    key="motiondivleave"
                    transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                    }}
                >
                    <motion.svg
                        id="logo"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                    >
                        <title>Logo</title>
                        <g>
                            <g
                                id="U"
                                transform="translate(35.000000, 35.000000)"
                            >
                                <motion.path
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        transform:
                                            "translateY(-142.5px) translateX(-75px) scale(1.5)",
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 1,
                                    }}
                                    exit={{
                                        scale: 2,
                                    }}
                                    fill="currentColor"
                                    d="M68.2,106.524c0,5.768-2.716,8.932-8.176,8.932c-5.908,0-8.064-3.248-8.064-8.988l0-10.052c0-0.476,0.28-0.672,0.728-0.672l2.212,0c0.476,0,0.672,0.196,0.672,0.672l0,9.744c0,4.116,1.064,6.244,4.592,6.244c3.388,0,4.452-2.24,4.452-6.244l0-9.744c0-0.476,0.252-0.672,0.7-0.672l2.212,0c0.476,0,0.672,0.196,0.672,0.672l0,10.108z"
                                />
                            </g>
                            <motion.path
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                                exit={{
                                    scale: 2,
                                }}
                                stroke="currentColor"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
                            />
                        </g>
                    </motion.svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Loader;
