import { Link } from 'react-router-dom'
import { boardList } from '../data/boardList'
import '../css/Header.css'
import ReactLogo from '../img/logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'

function Header() {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className="header-container">
      <div className="header-top">
        <Link to="/" className="main-logo">
          <img src={ReactLogo} alt="logo" className="logo-icon" />
          Blog
        </Link>

        <div className="user-menu">
          {user ? (
            <>
              <Link to="/mypage" className="mypage-link">마이페이지</Link>
              <button onClick={handleLogout} className="logout-button">로그아웃</button>
            </>
          ) : (
            <Link to="/login" className="login-link">로그인</Link>
          )}
        </div>
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