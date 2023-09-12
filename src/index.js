import m from 'mithril';
import Header from './components/Header';
import HeaderBig from './components/HeaderBig';
import MainBox from './components/MainBox';
import Footer from './components/Footer';

const homepage = {
  view: () => m('main', m(MainBox)),
}

m.route(document.body, '/', {
  '/': { view: () => m('div', m(HeaderBig), m(homepage), m(Footer)) },
  '/projects': { view: () => m('div', m(Header), m(homepage), m(Footer)) }
});