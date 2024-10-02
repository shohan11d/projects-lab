function Header({ children }) {
  return (
    <div className="flex items-center bg-purple-500 justify-between px-4 py-6 ">
      {children}
    </div>
  );
}

export default Header;
