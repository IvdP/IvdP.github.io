import m from 'mithril';

function scrollFunction() {
  if (m.route.get() === "/") {
    const navpages = document.getElementById("pages").getElementsByTagName("a");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header-color").style.backgroundColor = "#97c7c1";
      document.getElementById("navigation").style.backgroundColor = "white";
      document.getElementById("navigation").style.boxShadow = "0 8px 10px rgb(0, 0, 0, 0.1)";
      document.getElementById("title").style.display = "block";
      for (let i = 0; i < navpages.length; i++) {
        navpages[i].style.color = "black";
      }
      document.getElementById("nav-closed").style.color = "black";
    } else {
      document.getElementById("header-color").style.backgroundColor = "transparent";
      document.getElementById("navigation").style.backgroundColor = "transparent";
      document.getElementById("navigation").style.boxShadow = "unset";
      document.getElementById("title").style.display = "none";
      for (let i = 0; i < navpages.length; i++) {
        navpages[i].style.color = "white";
      }
      document.getElementById("nav-closed").style.color = "white";
    }
  }
}

export default scrollFunction;