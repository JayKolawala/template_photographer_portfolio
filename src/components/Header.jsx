const Header = ({ toggleSidebar }) => {
  return (
    <header className="lg:hidden bg-white shadow-md py-4 px-6 sticky top-0 z-20">
      <div className="flex justify-between items-center">
        <span className="font-bold">YOUR NAME</span>
        <button onClick={toggleSidebar} className="text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
