function Box({ children }) {
  return (
    <div className="w-[400px] max-w-[420px] rounded-md bg-[#343a40] overflow-auto max-h-[500px] p-4">{children}</div>
  );
}

export default Box;
