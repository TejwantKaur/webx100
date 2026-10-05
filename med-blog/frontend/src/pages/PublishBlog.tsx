import { useState, type ChangeEvent } from "react";
import TopBar from "../components/TopBar";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PublishBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <TopBar />
      <div className="flex justify-center w-full mt-8">
        <div className="max-w-screen-lg w-full">
          <div>
            <input
              onChange={(e)=> {
                setTitle(e.target.value)
              }}
              type="text"
              className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              placeholder="Title"
            />
          </div>

          <div className="mt-4">
            <TextEditor onChange={(e)=> {
              setDescription(e.target.value)}
              }/>

            <button
              onClick={async()=> {
                const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                  title, 
                  content: description
                }, { headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                } })
                console.log(response.data);
                navigate(`/blog/${response.data.blog.id}`);
              }}
              type="submit"
              className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
            >
              Publish post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextEditor({onChange}: {onChange: (e: ChangeEvent<HTMLTextAreaElement>)=> void }) {
  return (
    <div>
        <div className="w-full mb-4">
            <label htmlFor="editor" className="sr-only">
              Publish Blog
            </label>

            <textarea
              onChange={ onChange }
              id="editor"
              rows={8}
              className="block w-full px-4  py-3 text-sm text-heading bg-neutral-secondary-medium border border-default-medium rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              placeholder="Write an article..."
              required
            ></textarea>
        </div>
      
    </div>
  );
}

