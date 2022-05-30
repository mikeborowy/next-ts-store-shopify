import { ArrowButton } from "@components/ui/";
import cn from "classnames";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { Children, isValidElement, ReactNode, useState } from "react";
import styles from "./ProductSlider.module.css";

type ProductSliderProps = {
  children?: ReactNode;
};

export const ProductSlider = ({ children }: ProductSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className={styles.root}>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider  h-full transition-opacity">
          {Children.map(children, (child) => {
            if (isValidElement(child)) {
              return {
                ...child,
                props: {
                  ...child.props,
                  className: `${
                    child.props.className ? `${child.props.className}` : ""
                  } keen-slider__slide`,
                },
              };

              // return React.cloneElement(child, {
              //   className: `${
              //     child.props.className ? `${child.props.className}` : ""
              //   } keen-slider__slide`
              // })
            }
            return child;
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            <ArrowButton
              left
              onClick={() => instanceRef.current?.prev()}
              disabled={currentSlide === 0}
              className={cn(styles.leftControl, styles.control)}
            />

            <ArrowButton
              onClick={() => instanceRef.current?.next()}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
              className={cn(styles.rightControl, styles.control)}
            />
          </>
        )}
      </div>
    </div>
  );
};
