const Section = ({ children, className }) => {
  return (
    <section className={`p-4 bg-slate-50 ${className}`}>{children}</section>
  );
};

export { Section };
