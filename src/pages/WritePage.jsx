import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../features/posts/postsSlice';

function WritePage() {
  const { boardType } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createPost({ boardType, postData: { title, content } }));
    navigate(`/board/${boardType}`);
  };

  return (
    <div>
      <h2>Write Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        /><br/><br/>
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="본문을 입력하세요"
          rows="10"
          style={{ width: '100%', fontSize: '16px', padding: '8px' }}
        ></textarea><br/><br/>
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
}

export default WritePage;
