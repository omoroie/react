import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from '../api/axiosInstance'
import { login } from '../features/auth/authSlice'
import '../css/SignupPage.css'


function SignupPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.auth.user)

  // 1) 폼 데이터, 에러 메시지 상태 관리
  const [form, setForm] = useState({
    userId: '',
    password: '',
    name: '',
    nationality: '한국',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState({})

  // 2) 이미 로그인 되어 있으면 /mypage 로 리다이렉트
  useEffect(() => {
    if (user) {
      navigate('/mypage')
    }
  }, [user, navigate])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (name === 'userId' && value.length >= 4) {
    setErrors(prev => ({ ...prev, userId: '' }))
  }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    let message = ''

    switch (name) {
      case 'userId':
        if (value !== '' && value.length < 4) message = '아이디는 4글자 이상이어야 합니다.'
        break
      case 'password':
        if (value.length < 4) message = '비밀번호는 4글자 이상이어야 합니다.'
        break
      case 'name':
        if (!value.trim()) message = '이름을 입력해주세요.'
        break
      case 'email':
        if (!/^\S+@\S+\.\S+$/.test(value)) message = '유효한 이메일 주소를 입력해주세요.'
        break
      case 'phone':
        if (!/^\d+$/.test(value)) message = '전화번호는 숫자만 입력해주세요.'
        break
      default:
        break
    }

    setErrors(prev => ({ ...prev, [name]: message }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (form.userId.length < 4) newErrors.userId = '아이디는 4글자 이상이어야 합니다.'
    if (form.password.length < 4) newErrors.password = '비밀번호는 4글자 이상이어야 합니다.'
    if (!form.name.trim()) newErrors.name = '이름을 입력해주세요.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = '유효한 이메일 주소를 입력해주세요.'
    if (!/^\d+$/.test(form.phone)) newErrors.phone = '전화번호는 숫자만 입력해주세요.'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    axios.post('/auth/signup', form)
      .then(res => {
        // (가정) res.data.user 안에 가입된 유저 정보, token 등이 들어온다고 하면
        const userData = res.data.user;
        const token = res.data.token;
        // 3) 로컬스토리지에 토큰 저장
        localStorage.setItem('token', token);
        // 4) 리덕스에 로그인 상태로 저장
        dispatch(login(userData));
        // 5) 가입 직후 마이페이지로 이동
        navigate('/mypage');
      })
      .catch(err => {
        console.error('회원가입 실패:', err);
        alert(err.response?.data?.message || '회원가입 중 오류가 발생했습니다.');
      });
  }

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input name="userId" placeholder="아이디" value={form.userId} onChange={handleChange} onBlur={handleBlur} />
        {errors.userId && <p className="error-message">{errors.userId}</p>}

        <input name="password" type="password" placeholder="비밀번호" value={form.password} onChange={handleChange} onBlur={handleBlur} />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <input name="name" placeholder="이름" value={form.name} onChange={handleChange} onBlur={handleBlur} />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <select name="nationality" value={form.nationality} onChange={handleChange}>
          <option value="한국">한국</option>
          <option value="일본">일본</option>
          <option value="미국">미국</option>
        </select>

        <input name="email" placeholder="이메일" value={form.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <input name="phone" placeholder="전화번호" value={form.phone} onChange={handleChange} onBlur={handleBlur} />
        {errors.phone && <p className="error-message">{errors.phone}</p>}

        <button type="submit">회원가입</button>
      </form>
    </div>
  )
}

export default SignupPage
