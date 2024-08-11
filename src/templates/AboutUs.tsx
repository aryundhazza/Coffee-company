const AboutUs = () => {
  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-orange-500">About Us</h2>
          <div className="h-6"></div>
          <p className="font-serif text-xl text-gray-400 md:pr-10">
            Janji Suci Coffee is a coffee shop dedicated to serving high quality
            coffee and an unforgettable relaxing experience. We select the
            finest coffee beans from around the world, which are then carefully
            roasted to produce a rich and complex taste.
          </p>
          <div className="h-8"></div>
          <div className="grid grid-cols-2 gap-4 pt-8 border-t border-gray-800">
            <div>
              <p className="font-semibold text-gray-400">Made with love</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">
                Coffee is not just a drink. It is art, tradition and love packed
                into every cup. The process of making quality coffee involves
                many aspects that must be considered carefully, from the
                selection of coffee beans to the brewing method.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-400">It is easy to build</p>
              <div className="h-4"></div>
              <p className="font-serif text-gray-400">
                Coffee brewing is a process that allows magic to happen. Each
                brewing method, from espresso to pour-over, brings uniqueness
                and character to the coffee. This is where the expertise of the
                barista comes into play, combining technique with a personal
                touch to create coffee that will delight both the taste buds and
                the soul.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="-mr-24 ">
            <img
              src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="rounded-lg md:rounded-l-full h-auto w-full max-w-md"
            />
          </div>
        </div>
      </div>

      <div className="h-32 md:h-40"></div>

      <p className="font-serif text-4xl">
        <span className="text-gray-400">If we work all together</span>

        <span className="text-gray-600">
          consectetur adipisicing elit. Consectetur atque molestiae omnis
          excepturi enim!
        </span>
      </p>

      <div className="h-32 md:h-40"></div>
    </>
  );
};

export { AboutUs };
