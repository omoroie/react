import { useParams, useNavigate } from 'react-router-dom'
import axios from '../api/axiosInstance'

function WritePage() {
  const { boardType } = useParams()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const title = e.target.title.value.trim()
    const content = e.target.content.value.trim()
    if (!title || !content) {
      return alert('제목과 본문을 입력해주세요!')
    }

    // 서버에서 id, date 등을 생성해주면 이 두 필드만 보내도 됩니다.
    const payload = {
      boardType,
      title,
      author: '익명사용자',
      content,
    }

    try {
      // POST /api/posts
      await axios.post('/posts', payload)
      // 성공하면 게시판 리스트로 이동
      navigate(`/board/${boardType}`)
    } catch (err) {
      console.error('글 등록 중 오류:', err)
      alert('글 등록에 실패했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <div style={{ padding: '24px' }}>
      <h2>✍️ 새 글 작성 ({boardType})</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="제목을 입력하세요"
          style={{ width: '100%', fontSize: '18px', padding: '8px' }}
        /><br/><br/>
        <textarea
          name="content"
          placeholder="본문을 입력하세요"
          rows="10"
          style={{ width: '100%', fontSize: '16px', padding: '8px' }}
        ></textarea><br/><br/>
        <button type="submit">등록하기</button>
      </form>
    </div>
  )
}

export default WritePage
