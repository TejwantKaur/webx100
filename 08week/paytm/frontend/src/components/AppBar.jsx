function AppBar() {
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">Paytm App</div>

      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">Hello</div>
        <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-2 mr-2">
          <div className="flex flex-col justify-center h-full text-l">Me</div>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
