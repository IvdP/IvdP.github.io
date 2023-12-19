import m from 'mithril';
import "../styles/main.scss"
import { backToTop } from '../utils/backToTop';
import { scrollToAnchor } from '../utils/toAnchor';
import { MithrilTsxComponent } from '../../node_modules/mithril-tsx-component/index';

interface Attrs {
  color?: string;
}

export class StickyHeader extends MithrilTsxComponent<Attrs> {
  oncreate() {
    scrollToAnchor();
  }

  view(v: m.Vnode<Attrs>) {
    return <div id='header' class={v.attrs.color ? v.attrs.color : 'whiteheader'}>
      <div id='header-color'>
      </div>
      <div id='navigation'>
        <div id='title'>
          <h1>{m(m.route.Link, { href: '/', onclick: () => { backToTop() } }, 'Ilse van de Peppel')}</h1>
        </div>
        <div id='pages'>
          {m(m.route.Link, { href: '/', onclick: () => { backToTop() } }, 'Home')}
          {m.route.get() == '/' || m.route.get() == '' ? (<a href='#about'>Over mij</a>) : (m(m.route.Link, { href: '/#about' }, 'Over mij'))}
          {m.route.get() == '/' || m.route.get() == '' ? (<a href='#projects'>Projecten</a>) : (m(m.route.Link, { href: '/#projects' }, 'Projecten'))}
          {m.route.get() == '/' || m.route.get() == '' ? (<a href='#contact'>Contact</a>) : (m(m.route.Link, { href: '/#contact' }, 'Contact'))}
        </div>
      </div>
    </div >
  }
}