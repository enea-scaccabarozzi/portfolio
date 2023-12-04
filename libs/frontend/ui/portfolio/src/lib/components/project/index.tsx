import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';
import {
  IconBrandGit,
  IconBrandGooglePlay,
  IconGlobe,
} from '@tabler/icons-react';

import { type IProject } from '@Portfolio/types';

import { PortfolioBackground } from '../background';
import './project.scss';

interface IProps {
  project: IProject;
}

export const PortfolioProjectComponent = ({ project }: IProps) => {
  return (
    <main id="project--page">
      <PortfolioBackground>
        <div>
          <div className="landing">
            <div className="landing--title">{project.title}</div>
            <div className="thumbnail--wrapper">
              <Image
                src={project.thumbnail}
                alt={project.title}
                className="thumbnail"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className="timeperiod">
              <span>{moment(project.period[0]).format('MMMM yyyy')}</span>
              <span>{moment(project.period[1]).format('MMMM yyyy')}</span>
            </div>
          </div>

          <div className="intro--container">
            <div className="column">
              <div className="row">
                <span className="label">Ruolo</span>
                <span className="value">{project.role}</span>
              </div>
              <div className="row">
                <span className="label">Commissore</span>
                <span className="value">{project.commissioner}</span>
              </div>
              <div className="links">
                {project.links.website && (
                  <Link href={project.links.website} target="new">
                    <div className="icon">
                      <IconGlobe size={30} />
                    </div>
                  </Link>
                )}
                {project.links.github && (
                  <Link href={project.links.github} target="new">
                    <div className="icon">
                      <IconBrandGit size={30} />
                    </div>
                  </Link>
                )}
                {project.links.googlePlay && (
                  <Link href={project.links.googlePlay} target="new">
                    <div className="icon">
                      <IconBrandGooglePlay size={30} />
                    </div>
                  </Link>
                )}
              </div>
            </div>
            <div className="vertical--separator" />
            <div className="column">
              <div className="section">
                <span className="title">Categorie</span>
                <div className="tags">
                  {project.categories.map((tag, i) => (
                    <span className="tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="section">
                <span className="title">Stack</span>
                <div className="tags">
                  {project.stack.map((tag, i) => (
                    <span className="tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="description--container">
            <p className="description">{project.description}</p>
          </div>

          <div className="images--container">
            {project.images.map((image, i) => (
              <div className="image--wrapper" key={i}>
                <Image
                  src={image}
                  alt={project.title}
                  className="image"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </PortfolioBackground>
      <div className="close--link">
        <Link href="/portfolio">Close</Link>
      </div>
    </main>
  );
};
