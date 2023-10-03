import m from 'mithril';

export function scrollToAnchor() {
  const route: string = m.route.get();

  if (route == '/#about' || route == '/#projects' || route == '/#contact') {
    m.route.set('/');
    const targetElement = document.getElementById(route.substring(2));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
}