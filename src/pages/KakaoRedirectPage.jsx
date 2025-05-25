import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'

function KakaoRedirectPage() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await axios.get(`/api/auth/kakao-login?code=${code}`)
        dispatch(login(res.data.user))
        navigate('/mypage')
      } catch (err) {
        console.error('카카오 로그인 실패', err)
        alert('로그인에 실패했습니다.')
        navigate('/login')
      }
    }

    if (code) fetchToken()
  }, [code, dispatch, navigate])

  return <p>카카오 로그인 중입니다...</p>
}

export default KakaoRedirectPage
