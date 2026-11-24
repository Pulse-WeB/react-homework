function Post({ title, body, userId }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <p>{userId}</p>
    </div>
  );
}
export default Post;
