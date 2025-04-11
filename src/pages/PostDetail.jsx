import { useParams } from 'react-router-dom'
import { mockPosts } from '../data/mockPosts'

function PostDetail() {
  const { boardType, postId } = useParams()
  const post = mockPosts.find(p => p.id === Number(postId) && p.boardType === boardType)

  if (!post) {
    return <div style={{ padding: '24px' }}>존재하지 않는 게시글입니다.</div>
  }

  return (
    <div style={{ padding: '24px' }}>
      <h2>{post.title}</h2>
      <p style={{ color: '#888', marginBottom: '12px' }}>
        작성자: {post.author} | 날짜: {post.date}
      </p>
      <hr />
      <p style={{ marginTop: '20px' }}>이곳에 게시글 본문이 표시됩니다 ✍️</p>
    </div>
  )
}

export default PostDetail
