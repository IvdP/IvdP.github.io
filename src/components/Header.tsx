import m from 'mithril';
import "../styles/main.scss"

function openNavigation() {
  document.getElementById("nav-closed").style.display = "none";
  document.getElementById("nav-open").style.display = "flex";
}

function closeNavigation() {
  document.getElementById("nav-closed").style.display = "inline";
  document.getElementById("nav-open").style.display = "none";
}

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
        <div class='pages-mobile'>
          <button id="nav-closed" onclick={() => { openNavigation() }}>
            <i class="fa fa-bars" />
          </button>

          <div id="nav-open">
            <button onclick={() => { closeNavigation() }}>
              <i class="fa fa-times" />
            </button>

            {m(m.route.Link, { href: '/' }, 'Home')}
            {m(m.route.Link, { href: '/projects' }, 'Projects')}
            {m(m.route.Link, { href: '/about' }, 'About')}
            {m(m.route.Link, { href: '/contact' }, 'Contact')}
          </div>
        </div>
      </div>
    </div>
  ),
};

export default Header;
