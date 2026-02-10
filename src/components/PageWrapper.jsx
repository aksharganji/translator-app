export default function PageWrapper({ children, direction = "left" }) {
  return (
    <div
      className={
        (direction === "left" ? "animate-slideLeft" : "animate-slideRight") +
        " w-full h-full pointer-events-auto"
      }
      style={{ position: "relative", zIndex: 1 }}
    >
      {children}
    </div>
  );
}
