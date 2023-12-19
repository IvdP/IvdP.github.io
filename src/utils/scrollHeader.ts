import m from 'mithril';

export function scrollFunction() {
  const route: string = m.route.get();
  
  if (route === "/" || route === "") {
    const header: HTMLElement = document.getElementById("header");
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.remove("transparentheader");
      header.classList.add("whiteheader");
    } else {
      header.classList.remove("whiteheader");
      header.classList.add("transparentheader");
    }
  }
}