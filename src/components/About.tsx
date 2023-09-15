import m from 'mithril';
import "../styles/main.scss"

const About: m.Component = {
  view: () => (
    <div id='about'>
      <div class='about-section'>
        <div class='info'>
          <h1>Leuk om kennis te maken!</h1>
          <p>
            Ik ben Ilse van de Peppel, een web developer in opleiding met een passie voor frontend.
            Voordat ik aan de opleiding HBO-ICT webdevelopment begon, heb ik het eerste jaar van de opleiding Communication & Multimedia Design afgerond.
            Hier heb ik veel geleerd over het ontwerpen van websites en heb ik kennisgemaakt met de basis van programmeren.
            Ik heb voor de opleiding HBO-ICT en de richting webdevelopment gekozen, omdat ik graag meer wilde leren over het programmeren van websites, zodat ik mijn designs tot leven kan brengen.
            In de loop van de opleiding heb ik kennis opgedaan over verschillende programmeertalen en frameworks, zoals hieronder te zien is.
          </p>

          <div class='languages'>
            <i class="devicon-html5-plain"></i>
            <i class="devicon-css3-plain"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-react-original"></i>
            <i class="devicon-vuejs-plain"></i>
            <i class="devicon-java-plain"></i>
            <i class="devicon-csharp-plain"></i>
            <i class="devicon-dotnetcore-plain"></i>
            <i class="devicon-mysql-plain"></i>
            <i class="devicon-microsoftsqlserver-plain"></i>
          </div>

          <p>
            Als je geinteresseerd bent in mijn werk, kun je <a class='textlink' href='/'>mijn projecten bekijken</a>. Als je meer over mij wilt weten, kun je <a class='textlink' href='/'>contact met mij opnemen</a>.
          </p>
        </div>
        <div class='column profile'>
          <div class='profile-name'>
            <h1>Ilse van de Peppel</h1>
          </div>
          <div class='profile-pic'>
            <img src='src\media\ilse-image.jpg' alt='ilse' />
          </div>
          <div class='profile-text'>
            <p>Leeftijd: 21</p>
            <p>Woonplaats: Veenendaal</p>
            <p>Studie: HBO-ICT Webdevelopment</p>
            <p>Bijbaan: Vakkenvuller bij de Albert Heijn</p>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default About;
