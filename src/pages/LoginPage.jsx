import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'
import '../css/LoginPage.css'

function LoginPage() {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.auth.user)

  const handleLogin = (e) => {
    e.preventDefault()
    if (!userId.trim() || !password.trim())
      return alert('아이디와 비밀번호를 입력해주세요')

    // **여기**에서 백엔드 호출 대신, 유저 정보를 바로 dispatch(login(…)) 해 줍니다.
    dispatch(login({ userId }))    
    navigate('/mypage')
  }

  const handleKakaoLogin = () => {
    const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY
    const REDIRECT_URI = `${window.location.origin}/oauth/kakao`
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
  
    window.location.href = kakaoAuthUrl
  }
  
  const handleGoogleLogin = () => {
    const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
    const REDIRECT_URI = `${window.location.origin}/oauth/google`
    const SCOPE = 'email profile openid'
  
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`
  
    window.location.href = googleAuthUrl
  }

  if (user) {
    navigate('/mypage')
    return null
  }

  return (
    <div className="login-container">
      <h2>로그인</h2>

      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="button-group">
          <button type="submit">로그인</button>
          <button type="button" onClick={() => navigate('/signup')}>회원가입</button>
        </div>
      </form>

      <div className="social-login">
        <button className="sns-button kakao" onClick={handleKakaoLogin}>카카오로 로그인</button>
        <button className="sns-button google" onClick={handleGoogleLogin}>구글로 로그인</button>
      </div>
    </div>
  )
}

export default LoginPage
