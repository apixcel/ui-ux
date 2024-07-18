const Title = ({
  subtitle,
  title,
  isCenter,
  different,
}: {
  subtitle: string;
  title: string;
  isCenter?: boolean;
  different?: string;
}) => {
  return (
    <div className={`${isCenter ? "text-center" : ""}`}>
      <span className="uppercase font-bold bg-gradient-to-r from-transparent via-violet-600 to-transparent px-5">
        <span
          className={`${
            different ? different : "bg-slate-900"
          } mx-3 px-3 text-violet-600`}
        >
          {subtitle}
        </span>
      </span>
      <h2 className="mt-5 text-2xl md:text-5xl font-bold">{title}</h2>
    </div>
  );
};

export default Title;
