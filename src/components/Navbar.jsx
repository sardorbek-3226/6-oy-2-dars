const Navbar =
  () => {
    return (
      <nav className="flex container gap-20 items-center justify-between py-7">
        <a className="flex-shrink-0" href="/">
          <img src="/logo.svg" />
        </a>
        <div className="flex w-full justify-between items-center">
          <ul className="flex items-center max-lg:gap-5  gap-10 max-[770px]:hidden">
            <li>
            </li>
            <li>
              <a
                href=""
                className="transition-all hover:border-black border-b border-transparent"
              >Pricing</a>
            </li>
            <li>
              <a
                href=""
                className="transition-all hover:border-black border-b border-transparent"
              >Find a course</a>
            </li>
            <li>
              <a
                href=""
                className="transition-all hover:border-black border-b border-transparent"
              >For Creators</a>
            </li>
          </ul>
            <div className="md:hidden ">
<i className="fa fa-bars text-2xl ml-[70px] "></i>
            </div>
          <ul className="flex max-[580px]:hidden items-center gap-10 max-lg:gap-5">
            <li>
              <a
                href=""
                className="transition-all hover:border-black border-b border-transparent"
              >Sign In</a>
            </li>
            <li>
              <a
                href=""
                className="transition-all hover:border-black border-b border-transparent"
              >Create a course</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar;
