const Section = ({ children, className }) => {
  return (
    <section className={`p-4 bg-slate-900 ${className}`}>{children}</section>
  );
};

export { Section };
