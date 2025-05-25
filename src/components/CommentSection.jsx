import { useState } from 'react'
import { useSelector } from 'react-redux'
import '../css/CommentSection.css'

function CommentSection({ comments, setComments }) {
    const [newComment, setNewComment] = useState('')
    const user = useSelector(state => state.auth.user)
  
    const handleSubmit = () => {
      if (!newComment.trim()) return
  
      const newObj = {
        id: Date.now(),
        content: newComment,
        author: user?.username || '익명'
      }
  
      setComments(prev => [...prev, newObj])
      setNewComment('')
    }
  
    return (
      <div>
        <h3>💬 댓글 ({comments.length})</h3>
        <ul>
          {comments.map(c => (
            <li key={c.id}>
              <strong>{c.author}</strong>: {c.content}
            </li>
          ))}
        </ul>
  
        {user ? (
          <>
            <textarea
              value={newComment}
              onChange={e => setNewComment(e.target.value)}
              placeholder="댓글을 입력하세요..."
            />
            <button onClick={handleSubmit}>댓글 작성</button>
          </>
        ) : (
          <p>※ 댓글을 작성하려면 로그인하세요.</p>
        )}
      </div>
    )
  }

export default CommentSection
