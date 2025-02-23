import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledgeinterface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: '../../../../../assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento do HTML5',
    },
    {
      src: '../../../../../assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento do CSS3',
    },
    {
      src: '../../../../../assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento do Javascript',
    },
    {
      src: '../../../../../assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento do Angular',
    },
    {
      src: '../../../../../assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento do NodeJS',
    },
    {
      src: '../../../../../assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento do SASS',
    },
  ]);

}
