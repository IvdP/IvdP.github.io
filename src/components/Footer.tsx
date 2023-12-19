import m from 'mithril';
import "../styles/main.scss"
import { MithrilTsxComponent } from '../../node_modules/mithril-tsx-component/index';

export class Footer extends MithrilTsxComponent<{}> {
  view() {
    return <footer>
      <p>Gemaakt door Ilse van de Peppel</p>
    </footer>
  }
}