function Post({ name, id, deletePost }) {
  return (
    <h4>
      {name} <button onClick={() => deletePost(id)}>{`del ${id}`}</button>
    </h4>
  );
}

export default Post;
