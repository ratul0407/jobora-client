const SectionHeading = ({ gray, black }: { gray: string; black: string }) => {
  return (
    <h3 className="text-black/60 font-semibold text-3xl sm:text-4xl md:text-6xl">
      {gray}
      <span className="text-black"> {black}</span>
    </h3>
  );
};

export default SectionHeading;
