import m from 'mithril';
import "../styles/main.scss"
import { IProject, projects } from '../data/projects';
import { backToTop } from '../utils/backToTop';
import { MithrilTsxComponent } from '../../node_modules/mithril-tsx-component/index';

let project: IProject;

export class Project extends MithrilTsxComponent<{}> {
  oninit() {
    project = projects.find((project) => project.id == m.route.param("id"));
    backToTop();
  }

  view() {
    return <div id='project'>
      <div class='project-section'>
        <h1>{project.name}</h1>
        <div class='info'>
          <div>
            {project.fulldescription.map((paragraph) => (<p>{paragraph}</p>))}
            {project.github ? (<a href={project.github} target='_blank' class='text-button'>Bekijk de code op GitHub</a>) : null}
          </div>
          <div>
            <img src={project.img} alt={project.alt} />
            {project.media ? project.media.map((media) => (<img src={media.img} alt={media.alt} />)) : null}
          </div>
        </div>
      </div>
    </div>
  }
}