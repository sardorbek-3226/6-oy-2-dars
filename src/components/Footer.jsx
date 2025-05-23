const Footer = () => {
  return (
    <div className="bg-black py-20">
      <div className="container gap-52 md:gap-7 max-[860px]:gap-6 max-[670px]:text-[15px] max-[670px]:gap-3 flex max-w-[1200px] justify-between">
        <a className="flex-shrink max-md:hidden" href="/">
          <img src="/logo2.svg" alt="logo" />
        </a>
        <div className="text-white  max-w-full  flex justify-between">
          <div>
            <h3 className="uppercase text-lg mb-10">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="transition-all hover:text-primary"
                  href="/"
                >
                  Create a course
                </a>
              </li>
              <li>
                <a
                  className="transition-all hover:text-primary"
                  href="/"
                >
                  Find a course
                </a>
              </li>
              <li>
                <a
                  className="transition-all hover:text-primary"
                  href="/"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="transition-all hover:text-primary"
                  href="/"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-lg mb-10">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="transition-all hover:text-primary"
                  href="/"
                >
                  For Creators
                </a>
              </li>
              <li>
                <a
                  className="transition-all hover:text-primary"
                  href="/"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="transition-all hover:text-primary"
                  href="/"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase text-lg mb-10">
              Resource
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  className="transition-all hover:text-primary"
                  href="/"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="transition-all hover:text-primary"
                  href="/"
                >
                  Terms of service
                </a>
              </li>
              <li>
                <a
                  className="transition-all hover:text-primary"
                  href="/"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  className="transition-all hover:text-primary"
                  href="/"
                >
                  Impressum
                </a>
              </li>
            </ul>
          </div>
          <ul className="text-3xl max-md:hidden flex gap-5">
            <li>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
