import m from 'mithril';
import "../styles/main.scss"
import { StickyHeader } from './Header';
import { scrollFunction } from '../utils/scrollHeader';
import { MithrilTsxComponent } from '../../node_modules/mithril-tsx-component/index';

window.onscroll = function () { scrollFunction() }

export class Header extends MithrilTsxComponent<{}> {
  view() {
    return <header id='headerbig'>
      <div class='video'>
        <video autoplay muted loop>
          <source src="src\media\header_bg.mp4" type="video/mp4" />
        </video>
      </div>

      <div class='sticktotop'>
        <StickyHeader color='transparentheader' />
      </div>
    </header>
  }
}