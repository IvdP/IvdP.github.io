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
                {project.img ? (<img src={project.img} alt={project.alt} />) : null}
                {project.description ? (<p>{project.description}</p>) : null}
              </div>
              {project.fulldescription ? (
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
