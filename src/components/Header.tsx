import m from 'mithril';
import "../styles/main.scss"
import backToTop from '../utils/backToTop';

function openNavigation() {
  document.getElementById("nav-closed").style.display = "none";
  document.getElementById("nav-open").style.display = "flex";
}

function closeNavigation() {
  document.getElementById("nav-closed").style.display = "inline";
  document.getElementById("nav-open").style.display = "none";
}

interface Attrs {
  color?: string;
}

const Header: m.Component<Attrs> = {
  view: (vnode) => (
    <div id='header' class={vnode.attrs.color ? vnode.attrs.color : 'whiteheader'}>
      <div id='header-color'>
      </div>
      <div id='navigation'>
        <div id='title'>
          <h1>Ilse van de Peppel</h1>
        </div>
        <div id='pages'>
          <a href='/' onclick={() => { backToTop() }}>Home</a>
          <a href='#anchor_about'>Over mij</a>
          <a href='/'>Projecten</a>
          <a href='/'>Contact</a>
        </div>
        <div id='pages-mobile'>
          <button id="nav-closed" onclick={() => { openNavigation() }}>
            <i class="fa fa-bars" />
          </button>

          <div id="nav-open">
            <button onclick={() => { closeNavigation() }}>
              <i class="fa fa-times" />
            </button>

            {m(m.route.Link, { href: '/' }, 'Home')}
            {m(m.route.Link, { href: '/about' }, 'Over mij')}
            {m(m.route.Link, { href: '/projects' }, 'Projecten')}
            {m(m.route.Link, { href: '/contact' }, 'Contact')}
          </div>
        </div>
      </div>
    </div>
  ),
};

export default Header;
