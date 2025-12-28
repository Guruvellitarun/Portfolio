const RightSidebar = () => {
  return (
    <div className="fixed right-10 bottom-0 hidden lg:flex flex-col items-center gap-6 z-10">
      <a
        href="mailto:guruvelli.tarun2022@vitstudent.ac.in"
        className="font-mono text-xs text-slate-light hover:text-accent hover:-translate-y-1 transition-all duration-300"
        style={{ writingMode: "vertical-rl" }}
      >
        guruvelli.tarun2022@vitstudent.ac.in
      </a>
      <div className="vertical-line h-24" />
    </div>
  );
};

export default RightSidebar;
