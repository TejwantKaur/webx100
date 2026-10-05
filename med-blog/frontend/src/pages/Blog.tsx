
// will use atom family here!... 
// coz; whenever we open a blog; it fetches data for 1st time only;
// for 2nd time lit stores blog somewhere; donot re-load it;

import BlogSkeleton from "../components/BlogSkeleton";
import FullBlog from "../components/FullBlog";
import TopBar from "../components/TopBar";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

// will create new hook for this; useBlog()
function Blog() {
    // react-router-dom get dynamic route parameter;
    const {id} = useParams();
    const {loading, blog} = useBlog({id: id || ""});
    
    if(loading || !blog) {
        return <div>
            <TopBar/>
            <div className="">
                <BlogSkeleton/>
                {/* <BlogSkeleton/>
                <BlogSkeleton/> */}
            </div>
        </div>
    }
    
    return ( 
        <div>
        <FullBlog blog={blog} />
        </div>
     );
}

export default Blog;