import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { login } from '../features/auth/authSlice'

function GoogleRedirectPage() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await axios.get(`/api/auth/google-login?code=${code}`)
        dispatch(login(res.data.user))
        navigate('/mypage')
      } catch (err) {
        console.error('구글 로그인 실패', err)
        alert('로그인에 실패했습니다.')
        navigate('/login')
      }
    }

    if (code) fetchToken()
  }, [code, dispatch, navigate])

  return <p>구글 로그인 처리 중입니다...</p>
}

export default GoogleRedirectPage
