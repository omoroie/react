import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from '../api/axiosInstance';
import CommentSection from '../components/CommentSection'
import '../css/PostDetail.css'

function PostDetail() {
  const { boardType, postId } = useParams()
  const foundPost = mockPosts.find(p => p.id === Number(postId) && p.boardType === boardType)

  const [post, setPost] = useState(null)

  useEffect(() => {
    if (foundPost) {
      setPost({ ...foundPost, views: foundPost.views + 1 })
    }
  }, [foundPost])

  const handleLike = () => setPost(prev => ({ ...prev, likes: prev.likes + 1 }))
  const handleDislike = () => setPost(prev => ({ ...prev, dislikes: prev.dislikes + 1 }))
  const setComments = (updatedComments) => {
    setPost(prev => ({ ...prev, comments: updatedComments }))
  }

  if (!post) {
    return <div className="post-detail">존재하지 않는 게시글입니다.</div>
  }

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p className="meta">작성자: {post.author} | 날짜: {post.date}</p>

      <div className="post-meta-info">
        <span onClick={handleLike}>👍 {post.likes}</span>
        <span onClick={handleDislike}>👎 {post.dislikes}</span>
        <span>💬 {post.comments.length}</span>
        <span>👁 {post.views}</span>
      </div>

      <div className="tags">
        {post.tags.map(tag => <span key={tag} className="tag">#{tag}</span>)}
      </div>

      <hr />
      <p className="content">{post.content}</p>

      <hr />
      <CommentSection comments={post.comments} setComments={setComments} />
    </div>
  )
}

export default PostDetail
