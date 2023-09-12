import m from 'mithril';
import "../styles/main.scss"

const Header: m.Component = {
  view: () => (
    <div id='header'>
      <div id='header-color'>
      </div>
      <div id='navigation'>
        <div class='title'>
          <h1>Ilse van de Peppel</h1>
        </div>
        <div class='pages'>
          {m(m.route.Link, { href: '/' }, 'Home')}
          {m(m.route.Link, { href: '/projects' }, 'Projects')}
          {m(m.route.Link, { href: '/about' }, 'About')}
          {m(m.route.Link, { href: '/contact' }, 'Contact')}
        </div>
      </div>
    </div>
  ),
};

export default Header;
