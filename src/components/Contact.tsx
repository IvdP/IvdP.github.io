import m from 'mithril';
import "../styles/main.scss"

const Contact: m.Component = {
  view: () => (
    <div id='contact'>
      <div class='contact-section'>
        <div class='info'>
          <h1>Neem contact met me op</h1>
          <p>Mocht je vragen hebben, of wil je gewoon een praatje maken, dan kun je me altijd een berichtje sturen. Ik ben bereikbaar op de volgende netwerken:</p>
        </div>
        <div class='icons'>
          <a href='https://www.linkedin.com/in/ilsevdpeppel/' target='_blank'><i class="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href='mailto:ilsevdpeppel@outlook.com' target='_blank'><i class="fa fa-envelope" aria-hidden="true"></i></a>
          <a href='https://github.com/IvdP' target='_blank'><i class="fa fa-github-alt" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  ),
};

export default Contact;
