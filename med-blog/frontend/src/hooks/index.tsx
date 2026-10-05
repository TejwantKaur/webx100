import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Blog{
    "id": string,
      "title": string,
      "content": string,
      "author": {
        "id": string,
        "username": string,
        "email": string
      }
}

// single blog vste;
export const useBlog = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>(); // returns single blog;

    useEffect(()=> {
        const fetchBlog = async() => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, { 
                    headers: { 
                        Authorization: `Bearer ${token}`,
                    } 
                })
                setBlog(response.data.blog);
            }
            catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();   
    }, [id]) // whenever new id; reload;
    return {loading, blog}
};


export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(()=> {
        const token = localStorage.getItem("token");
        axios.get(`${BACKEND_URL}/api/v1/blog`, { 
            headers: { 
               Authorization: `Bearer ${token}`,
            }
        })
        .then(response => {
            setBlogs(response.data.allBlogs);
            setLoading(false);
        })
    }, [])
    return {loading, blogs}
}