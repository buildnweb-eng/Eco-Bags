"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
    {
        src: "/factory/factory-enhanced-2.png",
        alt: "Quality Control",
        className: "h-[300px]",
    },
    {
        src: "/factory/factory-enhanced-3.png",
        alt: "Premium Materials",
        className: "h-[300px]",
    },
    {
        src: "/factory/factory-enhanced-4.png",
        alt: "Large Scale Production",
        className: "h-[300px]",
    },
];

export default function AboutGallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {images.map((image, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={cn(
                        "relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300",
                        image.className
                    )}
                >
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                    {/* Optional: Add text overlay on hover for more context */}
                    <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-white font-semibold text-lg">{image.alt}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
