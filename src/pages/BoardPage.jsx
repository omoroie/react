import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';
import { Link } from 'react-router-dom';
import '../css/BoardPage.css';

function BoardPage() {
  const { boardType } = useParams();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    dispatch(fetchPosts({ boardType, page: 1 }));
  }, [dispatch, boardType]);

  const handleWriteClick = () => {
    //... navigation code
  };

  return (
    <div>
      <h2>{boardType}</h2>
      {postStatus === 'loading' && <div>Loading...</div>}
      {postStatus === 'succeeded' && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/board/${boardType}/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
      <button className="write-button" onClick={handleWriteClick}>✍️ 글쓰기</button>
    </div>
  );
}

export default BoardPage;
