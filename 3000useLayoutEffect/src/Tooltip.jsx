import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import TooltipContainer from "./TooltipContainer.jsx";

export default function Tooltip({ children, targetRect }) {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0);

  // TODO: uncomment to slow down rendering
  // This artificially slows down rendering
  // let now = performance.now();
  // while (performance.now() - now < 1000) {
  //   // Do nothing for a bit...
  // }

  // TODO: change to useLayoutEffect
  useEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height);
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;

    console.log(
      "Сontainer top:",
      targetRect.top,
      "Tooltip height",
      tooltipHeight,
      "Do we have enough space?",
      tooltipY < 0 ? "No!" : "Yes!",
    );

    if (tooltipY < 0) {
      // It doesn't fit above, so place below.
      tooltipY = targetRect.bottom;
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,
    document.body,
  );
}
