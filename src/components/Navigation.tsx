import m from 'mithril';
import "../styles/main.scss"

function openNavigation() {
  document.getElementById("nav-closed").style.display = "none";
  document.getElementById("nav-open").style.display = "flex";
}

function closeNavigation() {
  document.getElementById("nav-closed").style.display = "block";
  document.getElementById("nav-open").style.display = "none";
}

const Navigation: m.Component = {
  view: () => (
    <div id="navigation">
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
  ),
};

export default Navigation;
