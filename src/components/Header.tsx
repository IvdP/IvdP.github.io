import m from 'mithril';
import "../styles/main.scss"

const Header: m.Component = {
  view: () => (
    <header id='header'>
      <div class='video'>
        <video autoplay muted loop>
          <source src="src\media\header_bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div id='navigation'>
        <div>
          <h1>Ilse van de Peppel</h1>
        </div>
        <div class='pages'>
          {m(m.route.Link, { href: '/' }, 'Home')}
          {m(m.route.Link, { href: '/projects' }, 'Projects')}
          {m(m.route.Link, { href: '/about' }, 'About')}
          {m(m.route.Link, { href: '/contact' }, 'Contact')}
        </div>
      </div>
    </header>
  ),
};

export default Header;
