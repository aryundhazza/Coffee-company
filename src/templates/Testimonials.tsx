interface Testimonials {
  name: string;
  description: string;
  image: string;
}
export default function Testi({
  testimonials,
}: {
  testimonials: Testimonials[];
}) {
  return (
    <>
      {testimonials?.map((testi, index) => {
        return (
          <div
            key={index}
            className="w-full max-w-sm bg-gray-900 rounded-lg shadow-sm shadow-orange-400  mx-3 mb-4"
          >
            <div className="flex justify-end px-4 pt-4"></div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-20 h-20 mb-3 rounded-full shadow-lg"
                src={testi.image}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-white dark:text-white">
                {testi.name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {testi.description}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}
