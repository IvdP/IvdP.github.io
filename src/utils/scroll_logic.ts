import m from 'mithril';

function scrollFunction() {
  if (m.route.get() === "/" || m.route.get() === "") {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").classList.remove("transparentheader");
      document.getElementById("header").classList.add("whiteheader");
    } else {
      document.getElementById("header").classList.remove("whiteheader");
      document.getElementById("header").classList.add("transparentheader");

    }
  }
}

export default scrollFunction;