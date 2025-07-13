export const CardSubExperience = ({
  placeExperience,
  descExperience,
  dateExperience,
}) => {
  return (
    <div
      className="flex flex-row justify-start min-h-auto text-md
    md:justify-center"
    >
      <div
        className="flex flex-col  pe-5 justify-center min-h-auto
      sm:px-5
      md:hidden"
      >
        <div className="flex-1 border-s-2 border-[#1A1A1A] self-center" />
        <div className="size-5 bg-[#1A1A1A] rounded-full self-center" />
        <div className="flex-1 border-s-2 border-[#1A1A1A] self-center" />
      </div>
      <div
        className="flex flex-col w-full justify-center py-5 gap-3
      md:w-[46%] 
      max-[320px]:text-xs 
      max-[430px]:text-sm"
      >
        <p
          className="self-start text-start rounded bg-[#1A1A1A] text-white p-2 font-bold
        md:self-end
        md:text-center"
        >
          {placeExperience}
        </p>
        <p
          className="self-start text-start rounded border-2 border-[#1A1A1A] p-2 font-bold
        md:self-end
        md:text-center"
        >
          {descExperience}
        </p>
        <p
          className="self-start flex text-start font-bold
        md:self-end md:hidden md:text-center"
        >
          {dateExperience}
        </p>
      </div>
      <div
        className="hidden flex-col px-5 min-h-auto
      md:flex"
      >
        <div className="flex-1 border-s-2 border-[#1A1A1A] self-center" />
        <div className="size-5 bg-[#1A1A1A] rounded-full self-center" />
        <div className="flex-1 border-s-2 border-[#1A1A1A] self-center" />
      </div>
      <div
        className="hidden flex-col w-[46%] bg-transparent justify-center
      md:flex"
      >
        <p className="self-start text-center p-2 font-bold">{dateExperience}</p>
      </div>
    </div>
  );
};
