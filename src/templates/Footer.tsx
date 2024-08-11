const Footer = () => (
  <>
    <div className="grid gap-4 md:grid-cols-4 text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
      <ul className="space-y-1 text-gray-400">
        <li className="pb-4 font-serif text-gray-400">Social networks</li>
        <li>
          <a
            href="https://twitter.com/victormustar"
            className="hover:underline"
          >
            Twitter
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Linkedin
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Facebook
          </a>
        </li>
      </ul>
      <ul className="space-y-1 text-gray-400">
        <li className="pb-4 font-serif text-gray-400">Locations</li>
        <li>
          <a href="#" className="hover:underline">
            Paris
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            New York
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            London
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Singapour
          </a>
        </li>
      </ul>
      <ul className="space-y-1 text-gray-400">
        <li className="pb-4 font-serif text-gray-400">Company</li>
        <li>
          <a href="#" className="hover:underline">
            The team
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            About us
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Our vision
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Join us
          </a>
        </li>
      </ul>
      <ul className="space-y-1 text-gray-400">
        <li className="pb-4 font-serif text-gray-400">Join</li>
        <li>
          <a
            href="/"
            className="self-start px-3 py-2 leading-none text-black border border-gray-800 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-orange-600 from-orange-500 to-orange-400"
          >
            Coffee Shop
          </a>
        </li>
      </ul>
    </div>
    <div className="h-12"></div>
  </>
);

export { Footer };
