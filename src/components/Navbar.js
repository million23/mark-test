const Navbar = ({ activeLink, setActiveLink }) => {
  return (
    <nav className="bg-yellow-500 fixed w-full py-5 gap-5 font-bold flex justify-center text-2xl">
      <p onClick={() => setActiveLink("foods")}>Food</p>
      <p onClick={() => setActiveLink("places")}>Place</p>
      <p>Home</p>
      <p onClick={() => setActiveLink("hobbies")}>Hobbies</p>
      <p>Job</p>
    </nav>
  );
};

export default Navbar;
