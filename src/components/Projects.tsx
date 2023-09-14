import m from 'mithril';
import "../styles/main.scss"

const Projects: m.Component = {
  view: () => (
    <div id='projects'>
      <div class='projects-section'>
        <h1>Mijn projecten</h1>
        <div class='row'>
          <div class='column'>
            <h2>Project 1</h2>
            <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
          </div>
          <div class='column'>
            <h2>Project 2</h2>
            <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
          </div>
          <div class='column'>
            <h2>Project 3</h2>
            <p>Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla </p>
          </div>
        </div>
      </div>
    </div >
  ),
};

export default Projects;
