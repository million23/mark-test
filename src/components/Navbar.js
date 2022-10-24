const Navbar = ({ activeLink, setActiveLink }) => {
  return (
    <nav className="bg-yellow-500 fixed w-full py-5 gap-5 font-bold flex justify-center text-2xl">
      <p
        className={activeLink === "foods" && "text-red-500"}
        onClick={() => setActiveLink("foods")}
      >
        Food
      </p>
      <p
        className={activeLink === "places" && "text-red-500"}
        onClick={() => setActiveLink("places")}
      >
        Place
      </p>
      <p>Home</p>
      <p
        className={activeLink === "hobbies" && "text-red-500"}
        onClick={() => setActiveLink("hobbies")}
      >
        Hobbies
      </p>
      <p>Job</p>
    </nav>
  );
};

export default Navbar;
