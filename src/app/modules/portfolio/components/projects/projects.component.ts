import { Component, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProject[]>([
    {
      src: '../../../../../assets/img/projects/vfull.png',
      alt: '',
      title: 'Vida FullStack',
      width: '100px',
      heigth: '51px',
      description: '<p>Explore o fascinante mundo do desenvolvimento web</p>',
      links: [
        {
          name: 'Conheça o Blog',
          href: 'https://vidafullstack.com.br',
        }
      ],
    }
  ]);
}
