import m from 'mithril';
import "../styles/main.scss"
import StickyHeader from './Header';

function scrollFunction() {
  if (m.route.get() === "/") {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header-color").style.backgroundColor = "#97c7c1";
      document.getElementById("navigation").style.backgroundColor = "white";
      document.getElementById("navigation").style.boxShadow = "0 8px 10px rgb(0, 0, 0, 0.1)";
    } else {
      document.getElementById("header-color").style.backgroundColor = "transparent";
      document.getElementById("navigation").style.backgroundColor = "transparent";
      document.getElementById("navigation").style.boxShadow = "unset";
    }
  }
}

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
