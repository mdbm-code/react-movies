import Post from './Post';

function Posts(props) {
  return (
    <div className='posts'>
      {props.posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.name}
          deletePost={props.deletePost}
        />
      ))}
    </div>
  );
}

export default Posts;
