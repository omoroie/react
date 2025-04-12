import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/SignupPage.css'

function SignupPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    userId: '',
    password: '',
    name: '',
    nationality: '한국',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    let message = ''

    switch (name) {
      case 'userId':
        if (value.length < 4) message = '아이디는 4글자 이상이어야 합니다.'
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

    alert('회원가입 완료!')
    navigate('/login')
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
