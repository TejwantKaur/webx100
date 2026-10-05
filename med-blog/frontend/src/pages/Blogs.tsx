import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import TopBar from "../components/TopBar";
import { useBlogs } from "../hooks";

function Blogs() {
    const {loading, blogs} = useBlogs();
    if(loading) {
      return (
        <div>
          <TopBar/>
        <div className=""> 
          <BlogSkeleton/> 
          {/* <BlogSkeleton/> 
          <BlogSkeleton/>  */}
        </div>
       </div>
      )
    }
  return (
    <div>
      <TopBar/>
      <div className="flex justify-center">
        <div className="max-w-xl">
          {blogs.map(blog => 
            <BlogCard
              id={blog.id}
              authorName={blog.author.username}
              title={blog.title}
              content={blog.content}
              publishedDate={"2 Feb 2026"}
            />
          )} 
        </div>
      </div>
    </div>
  );
}

export default Blogs;
