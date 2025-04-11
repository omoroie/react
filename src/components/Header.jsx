import { Link } from 'react-router-dom'
import { boardList } from '../data/boardList'
import '../css/Header.css'
import ReactLogo from '../img/logo.svg'

function Header() {
    return (
      <header className="header-container">
        <div className="header-top">
          <Link to="/" className="main-logo">
          <img src={ReactLogo} alt="logo" className="logo-icon" />
          Blog
          </Link>
          {/* 향후 유저 정보/로그인/알림 들어갈 수 있는 공간 */}
          <div className="user-menu">로그인 | 마이페이지</div>
        </div>
        <nav className="board-menu">
          {boardList.map(board => (
            <Link
              key={board.type}
              to={board.path}
              className="board-link"
            >
              {board.title}
            </Link>
          ))}
        </nav>
      </header>
    )
  }
  

export default Header