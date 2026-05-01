export const attachTilt = (selector: string) => {
  const elements = document.querySelectorAll<HTMLElement>(selector);

  elements.forEach((el) => {
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -6;
      const rotateY = ((x / rect.width) - 0.5) * 6;

      el.style.transform = `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.01)
      `;
    };

    const reset = () => {
      el.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
  });
};