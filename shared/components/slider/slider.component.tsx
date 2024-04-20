"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export interface SliderProps<T> {
  items: Array<T>;
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}
export const Slider = <T extends object>({
  items,
  renderItem,
  keyExtractor,
}: SliderProps<T>) => {
  const [width, setWidth] = useState(0);

  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel && carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="mx-auto relative overflow-hidden p-0 w-full"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex w-full h-full relative"
      >
        {items.map((item) => (
          <motion.div key={keyExtractor(item)} className="p-4">
            {renderItem(item)}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
