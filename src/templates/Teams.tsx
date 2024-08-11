type Props = {
  key: number;
  name: string;
  img: string;
  timezone: string;
};

export default function Teams({ key, name, img, timezone }: Props) {
  return (
    <>
      <div
        key={key}
        className="flex-col p-5 py-13 rounded-lg shadow-2xl md:p-9 bg-gradient-to-br from-gray-900 to-black mb-3 mx-auto w-[300px]"
      >
        <p className="flex items-center justify-center text-4xl font-semibold text-green-400 bg-green-800 rounded-full shadow-lg w-14 h-14">
          <img src={img} alt="" className="rounded-full" />
        </p>
        <div className="h-6">{name}</div>
        <p className="font-serif text-sm">{timezone}</p>
      </div>
    </>
  );
}
