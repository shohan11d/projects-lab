function Box({ children }) {
  return (
    <div className="h-[500px] w-[400px] max-w-[420px] overflow-auto rounded-md bg-[#343a40] p-4">
      {children}
    </div>
  );
}

export default Box;
