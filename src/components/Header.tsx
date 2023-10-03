import m from 'mithril';
import "../styles/main.scss"
import { backToTop } from '../utils/backToTop';
import { scrollToAnchor } from '../utils/toAnchor';

interface Attrs {
  color?: string;
}

const Header: m.Component<Attrs> = {
  oncreate: () => {
    scrollToAnchor();
  },
  view: (vnode) => (
    <div id='header' class={vnode.attrs.color ? vnode.attrs.color : 'whiteheader'}>
      <div id='header-color'>
      </div>
      <div id='navigation'>
        <div id='title'>
          <h1>Ilse van de Peppel</h1>
        </div>
        <div id='pages'>
          {m(m.route.Link, { href: '/', onclick: () => { backToTop() } }, 'Home')}
          {m.route.get() == '/' || m.route.get() == '' ? (<a href='#about'>Over mij</a>) : (m(m.route.Link, { href: '/#about' }, 'Over mij'))}
          {m.route.get() == '/' || m.route.get() == '' ? (<a href='#projects'>Projecten</a>) : (m(m.route.Link, { href: '/#projects' }, 'Projecten'))}
          {m.route.get() == '/' || m.route.get() == '' ? (<a href='#contact'>Contact</a>) : (m(m.route.Link, { href: '/#contact' }, 'Contact'))}
        </div>
      </div>
    </div >
  ),
};

export default Header;
