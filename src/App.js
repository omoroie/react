// src/App.js
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import BoardPage from './pages/BoardPage'
import PostDetail from './pages/PostDetail'
import NotFound from './pages/NotFound'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import MyPage from './pages/MyPage'
import KakaoRedirectPage from './pages/KakaoRedirectPage'
import GoogleRedirectPage from './pages/GoogleRedirectPage'
import WritePage from './pages/WritePage'
import './css/App.css'

function App() {
  return (
    <Routes>
      {/* Layout이 공통 레이아웃으로 감싸는 구조 */}
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="/oauth/kakao" element={<KakaoRedirectPage />} />
        <Route path="/oauth/google" element={<GoogleRedirectPage />} />
        <Route path="board/:boardType" element={<BoardPage />} />
        <Route path="board/:boardType/:postId" element={<PostDetail />} />
        <Route path="write/:boardType" element={<WritePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
