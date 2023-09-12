import m from 'mithril';
import Header from './components/Header';
import HeaderBig from './components/HeaderBig';
import Navigation from './components/Navigation';
import MainBox from './components/MainBox';
import Footer from './components/Footer';

const homepage = {
  view: () => m('main', m(MainBox)),
}

m.route(document.body, '/', {
  '/': { view: () => m('div', m(HeaderBig), m(homepage), m(Footer)) },
  '/projects': { view: () => m('div', m(Header), m(homepage), m(Footer)) }
});

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navigation").style.backgroundColor = "white";
  } else {
    if (m.route.get() === "/") {
      document.getElementById("navigation").style.backgroundColor = "transparent";
    }
  }
}

window.onscroll = function () { scrollFunction() }