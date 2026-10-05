import type { Blog } from "../hooks";
import Avatar from "./Avatar";
import TopBar from "./TopBar";

export default function FullBlog({ blog }: { blog: Blog }) {
  return (
    <div>
      <TopBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-10 max-w-screen-xl">
          <div className="col-span-8">
            <div className="text-6xl font-extrabold"> 
                {blog.title.charAt(0).toUpperCase() + blog.title.slice(1)} 
            </div>
            <div className="text-slate-500 pt-3">
                Posted on 2 December
            </div>
            <div className="pt-6 pr-15"> 
                {blog.content} 
            </div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-500 text-lg">
                 Author
            </div>
           
            <div className="flex">
                <div className="flex items-center pr-3">
                    <Avatar name={blog.author.username} size={9}></Avatar>
                </div>

                <div className="">
                    <div className="text-2xl font-bold pt-2">
                        { blog.author.username.charAt(0).toUpperCase() + blog.author.username.slice(1) }
                    </div>
                    <div className="pt-3 text-slate-500">
                        Random catch phrase about author's ability to grab user's attention
                    </div>
                </div>

            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
