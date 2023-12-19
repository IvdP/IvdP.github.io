import m from 'mithril';
import { StickyHeader } from './components/Header';
import { Header } from './components/HeaderBig';
import { Introduction } from './components/Introduction';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Project } from './components/Project';
import { Footer } from './components/Footer';

m.route(document.body, '/', {
  '/': { view: () => m('div', m(Header), m('main', m(Introduction), m('div', m(About), m(Projects), m(Contact))), m(Footer)) },
  '/project/:id': { view: () => m('div', m(StickyHeader), m('main', m(Project)), m(Footer)) },
});