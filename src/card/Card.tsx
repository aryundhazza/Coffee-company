type Props = {
  key: number;
  name: string;
  img: string;
  timezone: string;
};

export default function Card({ key, name, img, timezone }: Props) {
  return (
    <>
      <div className="h-full p-4 lg:w-1/3">
        <div className=" bg-gray-100 p-3">
          <img
            className="rounded-lg w-40 lg:rounded-s-lg mx-auto mb-3"
            src={img}
            alt=""
          />
          <h1 className="title-font sm:text-2xl text-xl text-center mb-1">
            {name}
          </h1>
          <p className="mb-3 text-center">{timezone}</p>
        </div>
      </div>
    </>
  );
}
