import m from 'mithril';
import "../styles/main.scss"
import { projects } from '../data/projects';

const Projects: m.Component = {
  view: () => (
    <div id='projects'>
      <div class='projects-section'>
        <h1>Mijn projecten</h1>
        <div class='row'>
          {projects.map((project) => (
            <div class='column'>
              <div>
                <h2>{project.name}</h2>
                <img src={project.img} alt={project.alt} />
                <p>{project.description}</p>
              </div>
              {project.description ? (
                m(m.route.Link, { href: '/project/' + project.id, class: 'text-button' }, 'Lees meer')
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div >
  ),
};

export default Projects;
