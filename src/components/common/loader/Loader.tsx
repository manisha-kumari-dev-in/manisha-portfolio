import { useEffect, useRef } from "react";
import { animateLoader } from "../../../animations/loader";

type LoaderProps = {
  onComplete: () => void;
};

const Loader = ({ onComplete }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!loaderRef.current || !imageRef.current || !textRef.current) return;

    const tl = animateLoader({
      loader: loaderRef.current,
      image: imageRef.current,
      text: textRef.current,
      onComplete,
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
    >
      <div className="-translate-y-6">
        <img
          ref={imageRef}
          src="/preview-image.png"
          alt="Loading Portfolio"
          className="w-52 rounded-3xl shadow-2xl select-none md:w-64"
        />

        <p
          ref={textRef}
          className="mt-6 text-center text-sm uppercase tracking-[0.25em] text-white/55"
        >
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
};

export default Loader;