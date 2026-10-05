import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
  authorName: string,
  title: string,
  content: string,
  publishedDate: string,
  id: string
}

function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate
}: BlogCardProps) {
  // to: full link likhna
  return (
    <Link to={`/blog/${id}`}>
    <div className="pt-5 border-b border-slate-200 pb-4">
      <div className="flex items-center">
            <Avatar name={authorName} />
            <div className="font-extralight pl-2 text-sm"> 
              {authorName.charAt(0).toUpperCase() + authorName.slice(1)} </div>
            <div className="text-slate-400 pl-2 font-thin text-sm">
              {publishedDate}
            </div>
      </div>
      <div className="text-xl font-semibold pt-2"> {title.charAt(0).toUpperCase() + title.slice(1)} </div>
      <div className="text-md font-thin text-slate-500">{content.slice(0, 200) + "..."} 
        </div> 

      <div className="text-slate-400 pt-4">
        {`${Math.ceil(content.length / 100)} minute(s) read`}
      </div>
    </div>
    </Link>
  );
}

export default BlogCard;



// content.slice(0, 100) 100 characters