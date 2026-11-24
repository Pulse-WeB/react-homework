import axios from "axios";
import { useState, useEffect } from "react";
import Post from "./Post";
function PostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const postsPerPage = 10;
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  async function fetchPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
    );
    setPosts(response.data);
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  if (posts.length < 1) {
    return <p>Постов Нет</p>;
  }

  function nextPage() {
    if (totalPages > page) {
      setPage((page) => page + 1);
    }
  }
  function prevPage() {
    if (page > 1) {
      setPage((page) => page - 1);
    }
  }
  return (
    <div>
      {currentPosts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
          />
        );
      })}
      <button onClick={prevPage}>Prev page</button>
      <div>
        <span>{page} /</span>
        <span>{totalPages}</span>
      </div>
      <button onClick={nextPage}>Next page</button>
    </div>
  );
}
export default PostList;
