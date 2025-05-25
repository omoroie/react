import { useParams } from 'react-router-dom'
import { boardList } from '../data/boardList'
import { Link } from 'react-router-dom'
import '../css/BoardPage.css'
import { useEffect, useState } from 'react'
import axios from '../api/axiosInstance';

function BoardPage() {
  const { boardType } = useParams()
  const board = boardList.find(b => b.type === boardType)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(`/posts/${boardType}`)
      .then(res => setPosts(res.data))
      .catch(err => console.error('게시글 불러오기 실패:', err))
  }, [boardType])

  const isLoggedIn = Boolean(localStorage.getItem('accessToken'))

  const handleWriteClick = () => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: `/board/${boardType}` } })
    } else {
      navigate(`/write/${boardType}`)
    }
  }


  if (!board) return <div className="board-page">존재하지 않는 게시판입니다.</div>

  return (
    <div className="board-page">
      <h2 className="board-title">{board.title}</h2>
      <p className="board-desc">{board.description}</p>
      <hr />

      {posts.length === 0 ? (
        <p className="post-empty">게시글이 없습니다 📝</p>
      ) : (
        <ul className="post-list">
        {posts.map(post => (
            <li key={post.id} className="post-item">
            <div className="thumbnail-wrapper">
                {post.thumbnailUrl ? (
                <img src={post.thumbnailUrl} alt="대표 이미지" className="post-thumbnail" />
                ) : (
                <div className="post-thumbnail placeholder" />
                )}
            </div>

            <div className="post-content">
                <Link to={`/board/${boardType}/${post.id}`} className="post-title">
                {post.title}
                </Link>
                <div className="post-meta">
                작성자: {post.author} | 날짜: {post.date}
                </div>
                <div className="post-stats">
                👍 {post.likes} / 👎 {post.dislikes} / 💬 {post.comments?.length ?? 0} / 👁️ {post.views}
                </div>
                <div className="post-tags">
                {post.tags && post.tags.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                ))}
                </div>
            </div>
            </li>
        ))}
        </ul>
      )}
      <button
        className="write-button" onClick={handleWriteClick}>✍️ 글쓰기</button>
    </div>
  )
}

export default BoardPage