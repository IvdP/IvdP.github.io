import m from 'mithril';
import "../styles/main.scss"
import StickyHeader from './Header';
import scrollFunction from '../utils/scroll_logic';

window.onscroll = function () { scrollFunction() }

const Header: m.Component = {
  view: () => (
    <header id='headerbig'>
      <div class='video'>
        <video autoplay muted loop>
          <source src="src\media\header_bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div class='sticktotop'>
        {m(StickyHeader)}
      </div>
    </header>
  ),
};

export default Header;
