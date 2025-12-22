"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const factoryImages = [
    {
        id: 1,
        title: "Advanced Machinery",
        description: "High-speed automated production for bulk orders",
        src: "/factory/factory-enhanced-1.1.jpeg",
    },
    {
        id: 2,
        title: "Quality Control",
        description: "Rigorous testing at every stage of production",
        src: "/factory/factory-enhanced-2.png",
    },
    {
        id: 3,
        title: "Premium Materials",
        description: "Sustainably sourced, high-grade paper stock",
        src: "/factory/factory-enhanced-3.png",
    },
    {
        id: 4,
        title: "Large Scale Production",
        description: "Capacity to handle massive requirements efficiently",
        src: "/factory/factory-enhanced-4.png",
    },
];

export default function FactoryShowcase() {
    const [activeId, setActiveId] = useState<number | null>(1);

    return (
        <div className="w-full h-[500px] flex flex-col md:flex-row gap-4">
            {factoryImages.map((item) => (
                <motion.div
                    key={item.id}
                    layout
                    onClick={() => setActiveId(item.id)}
                    onHoverStart={() => setActiveId(item.id)}
                    className={cn(
                        "relative h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out",
                        activeId === item.id ? "md:flex-[3] flex-[3]" : "md:flex-[1] flex-[1]"
                    )}
                >
                    <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                    <div
                        className={cn(
                            "absolute inset-0 bg-black/40 transition-opacity duration-300",
                            activeId === item.id ? "opacity-0" : "opacity-40 hover:opacity-0"
                        )}
                    />

                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                        <motion.h3
                            layout="position"
                            className={cn(
                                "text-white font-bold transition-all duration-300",
                                activeId === item.id ? "text-2xl md:text-3xl mb-2" : "text-lg md:text-xl"
                            )}
                        >
                            {item.title}
                        </motion.h3>
                        {activeId === item.id && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="text-gray-200 text-sm md:text-base"
                            >
                                {item.description}
                            </motion.p>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
