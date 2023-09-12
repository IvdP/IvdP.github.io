import m from 'mithril';
import "../styles/main.scss"
import StickyHeader from './Header';

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navigation").style.backgroundColor = "white";
  } else {
    document.getElementById("navigation").style.backgroundColor = "transparent";
  }
}

window.onscroll = function () { scrollFunction() }

const Header: m.Component = {
  view: () => (
    <header id='headerbig'>
      <div class='background-video'>
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
