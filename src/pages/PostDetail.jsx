import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../features/posts/postsSlice';
import CommentSection from '../components/CommentSection';
import '../css/PostDetail.css';

function PostDetail() {
  const { boardType, postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.currentPost);
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    dispatch(fetchPost({ boardType, postId }));
  }, [dispatch, boardType, postId]);

  if (postStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <div className="meta">
        <span>작성자: {post.author}</span> | <span>조회수: {post.views}</span>
      </div>
      <div className="tags">
        {post.tags.map((tag) => <span key={tag} className="tag">#{tag}</span>)}
      </div>
      <hr />
      <p className="content">{post.content}</p>
      <hr />
      <CommentSection comments={post.comments} />
    </div>
  );
}

export default PostDetail;
