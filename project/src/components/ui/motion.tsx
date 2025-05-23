import { useEffect, useRef, useState } from "react";

type MotionProps = {
  children: React.ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  whileInView?: Record<string, any>;
  transition?: {
    duration?: number;
    delay?: number;
    type?: string;
    stiffness?: number;
    damping?: number;
  };
  viewport?: {
    once?: boolean;
    margin?: string;
  };
  className?: string;
};

export function motion(Component: React.ComponentType<any>) {
  return function MotionComponent({
    children,
    initial,
    animate,
    whileInView,
    transition,
    viewport,
    className,
    ...props
  }: MotionProps & any) {
    const [isInView, setIsInView] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setIsMounted(true);

      if (!whileInView) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              if (viewport?.once) {
                observer.disconnect();
              }
            } else if (!viewport?.once) {
              setIsInView(false);
            }
          });
        },
        {
          rootMargin: viewport?.margin || "0px",
          threshold: 0.1,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [whileInView, viewport?.once, viewport?.margin]);

    const getStyles = () => {
      if (!isMounted) return initial || {};
      if (whileInView) return isInView ? whileInView : initial || {};
      return animate || {};
    };

    const styles = getStyles();
    const transitionStyles = transition
      ? {
          transitionProperty: Object.keys(styles).map((key) => camelToKebab(key)).join(", "),
          transitionDuration: `${transition.duration || 0.3}s`,
          transitionDelay: transition.delay ? `${transition.delay}s` : undefined,
          transitionTimingFunction:
            transition.type === "spring"
              ? `cubic-bezier(0.34, 1.56, 0.64, 1)`
              : "ease",
        }
      : {};

    return (
      <Component
        ref={ref}
        style={{
          ...styles,
          ...transitionStyles,
        }}
        className={className}
        {...props}
      >
        {children}
      </Component>
    );
  };
}

// Helper to convert camelCase to kebab-case for CSS properties
function camelToKebab(string: string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

// Create motion components for common HTML elements
const createMotionComponent = (tag: keyof JSX.IntrinsicElements) => {
  const Component = tag as any;
  return motion(Component);
};

motion.div = createMotionComponent("div");
motion.span = createMotionComponent("span");
motion.h1 = createMotionComponent("h1");
motion.h2 = createMotionComponent("h2");
motion.h3 = createMotionComponent("h3");
motion.p = createMotionComponent("p");
motion.button = createMotionComponent("button");
motion.a = createMotionComponent("a");
motion.ul = createMotionComponent("ul");
motion.li = createMotionComponent("li");
motion.section = createMotionComponent("section");
motion.article = createMotionComponent("article");
motion.img = createMotionComponent("img");