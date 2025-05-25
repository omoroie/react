import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../features/auth/authSlice'
import axiosInstance from '../api/axiosInstance'
import '../css/MyPage.css'

function MyPage() {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!user) {
    alert('로그인이 필요합니다.')
    navigate('/login')
    return null
  }

  const handleDelete = async () => {
    const confirmed = window.confirm('정말로 탈퇴하시겠습니까?')
    if (!confirmed) return

    try {
      await axiosInstance.delete('/users/me')
      alert('회원 탈퇴가 완료되었습니다.')
      dispatch(logout())
      localStorage.clear()
      navigate('/')
    } catch (err) {
      console.error('회원 탈퇴 실패:', err)
      alert('회원 탈퇴에 실패했습니다.')
    }
  }

  const handleEdit = () => {
    navigate('/edit')
  }

  return (
    <div className="mypage-container">
      <h2>마이페이지</h2>
      <div className="mypage-info">
        <p><strong>아이디:</strong> {user.userId}</p>
        <p><strong>이름:</strong> {user.name}</p>
        <p><strong>이메일:</strong> {user.email || '-'}</p>
        <p><strong>국적:</strong> {user.nationality || '-'}</p>
        <p><strong>전화번호:</strong> {user.phone || '-'}</p>
      </div>
      <div className="button-group">
        <button className="edit-button" onClick={handleEdit}>회원정보 수정</button>
        <button className="delete-button" onClick={handleDelete}>회원 탈퇴</button>
      </div>
    </div>
  )
}

export default MyPage