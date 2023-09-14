import m from 'mithril';
import Header from './components/Header';
import HeaderBig from './components/HeaderBig';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';

const content ={
  view: () => m('div', m(About), m(Projects), m(Contact)),
}

const homepage = {
  view: () => m('main', m(Introduction), m(content)),
}

const projectpage = {
  view: () => m('main', m(Project)),
}

m.route(document.body, '/', {
  '/': { view: () => m('div', m(HeaderBig), m(homepage), m(Footer)) },
  '/project/:id': { view: () => m('div', m(Header), m(projectpage), m(Footer)) },
});