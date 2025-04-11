import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import BoardPage from './pages/BoardPage'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import PostDetail from './pages/PostDetail'
import './css/App.css'

function App() {

  return (
    <div>
      <Header />
      <Routes>
         {/* 게시판 목록 페이지 */}
        <Route path="/board/:boardType" element={<BoardPage />} />

        {/* ✅ 게시글 상세 페이지 */}
        <Route path="/board/:boardType/:postId" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App