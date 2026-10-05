import { Link } from "react-router-dom";
import Avatar from "./Avatar";

export default function TopBar() {
  return (
    <div className="flex justify-between px-13 py-3 border-b border-slate-200 items-center">
      <Link to={"/blogs"}>
        <div className="flex justify-center cursor-pointer">Medium</div>
      </Link>

      <div className="flex items-center">
        <div className="pr-2">
            <Link to={'/blog/publish'}> 
            <button
            type="button"
            className="text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none"
            >
            Publish
            </button>
            </Link>
        </div>
        <div>
            <Avatar name="Tejwant" size={10} />
        </div>
      </div>

    </div>
  );
}
