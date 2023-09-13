import m from 'mithril';
import Header from './components/Header';
import HeaderBig from './components/HeaderBig';
import Introduction from './components/Introduction';
import About from './components/About';
import Footer from './components/Footer';

const homepage = {
  view: () => m('main', m(Introduction), m(About)),
}

m.route(document.body, '/', {
  '/': { view: () => m('div', m(HeaderBig), m(homepage), m(Footer)) },
});