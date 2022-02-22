import { useRef, useEffect } from "react";

const scrollables = {};

export const useMakeScrollable = (id) => {
  const ref = useRef(null);
  useEffect(() => {
    scrollables[id] = ref;
  }, []);
  return ref;
};

export const scrollTo = (id) => {
  scrollables[id]?.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
