import { useParams, useNavigate } from 'react-router-dom'
import { mockPosts } from '../data/mockPosts'

function WritePage() {
  const { boardType } = useParams()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const title = e.target.title.value.trim()
    const content = e.target.content.value.trim()
    if (!title || !content) return alert('제목과 본문을 입력해주세요!')

    const newPost = {
      id: mockPosts.length + 1,
      boardType,
      title,
      author: "익명사용자",
      content,
      date: new Date().toISOString().slice(0, 10)
    }

    mockPosts.push(newPost) // ✍️ 실제 DB 연동 전이니까 push로 추가!

    // 게시판 페이지로 이동
    navigate(`/board/${boardType}`)
  }

  return (
    <div style={{ padding: '24px' }}>
      <h2>✍️ 새 글 작성 ({boardType})</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="제목을 입력하세요" style={{ width: '100%', fontSize: '18px', padding: '8px' }} /><br /><br />
        <textarea name="content" placeholder="본문을 입력하세요" rows="10" style={{ width: '100%', fontSize: '16px', padding: '8px' }}></textarea><br /><br />
        <button type="submit">등록하기</button>
      </form>
    </div>
  )
}

export default WritePage
