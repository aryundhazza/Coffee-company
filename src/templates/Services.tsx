import { StaticImageData } from "next/image";
import Image from "next/image";
interface Products {
  name: string;
  description: string;
  image: StaticImageData;
}
export default function Services({ products }: { products: Products[] }) {
  return (
    <>
      {products?.map((product, index) => {
        return (
          <div
            key={index}
            className="max-w-xs  bg-gray-900 rounded-lg shadow-sm shadow-orange-400  mx-3 mb-4"
          >
            <a href="#">
              <Image
                className="rounded-t-lg w-xs h-[20rem]"
                src={product.image}
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500">
                  {product.name}
                </h5>
              </a>
              <p
                className="mb-3 font-normal text-white
              "
              >
                {product.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
}
