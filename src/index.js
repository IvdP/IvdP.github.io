import m from 'mithril';
import Header from './components/Header';
import HeaderBig from './components/HeaderBig';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const content ={
  view: () => m('div', {class: 'margin10'}, m(About), m(Projects)),
}

const homepage = {
  view: () => m('main', m(Introduction), m(content)),
}

m.route(document.body, '/', {
  '/': { view: () => m('div', m(HeaderBig), m(homepage), m(Footer)) },
});