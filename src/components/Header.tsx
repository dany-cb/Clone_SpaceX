import { BiMenu, BiX } from 'react-icons/bi'
import Logo from './Logo'

function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <a href="#">Falcon 9</a>
          </li>
          <li>
            <a href="#">Falcon Heavy</a>
          </li>
          <li>
            <a href="#">Dragon</a>
          </li>
          <li>
            <a href="#">Starship</a>
          </li>
          <li>
            <a href="#">Human Spaceflight</a>
          </li>
          <li>
            <a href="#">Rideshare</a>
          </li>
          <li>
            <a href="#">Starlink</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </nav>
      <button>
        <BiMenu color="#fff" />
      </button>
      <div>
        <button>
          <BiX color="#fff" />
        </button>
        <nav>
          <ul>
            <li>
              <a href="#">Falcon 9</a>
            </li>
            <li>
              <a href="#">Falcon Heavy</a>
            </li>
            <li>
              <a href="#">Dragon</a>
            </li>
            <li>
              <a href="#">Starship</a>
            </li>
            <li>
              <a href="#">Human Spaceflight</a>
            </li>
            <li>
              <a href="#">Rideshare</a>
            </li>
            <li>
              <a href="#">Starlink</a>
            </li>
            <li>
              <a href="#">Mission</a>
            </li>
            <li>
              <a href="#">Launches</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Updates</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
