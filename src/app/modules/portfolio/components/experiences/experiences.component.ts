import { Component, signal } from '@angular/core';
import { IExperiencies } from '../../interface/IExperiencies.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiencies[]>([
    {
      summary: {
        strong: "Full-Stack PHP",
        p: "XYZ | Jun 2022 - Atual",
      },
      text: '<p>Desde junho de 2022, atuo como Full-Stack PHP na XYZ</p>',
    },
    {
      summary: {
        strong: "Full-Stack PHP",
        p: "XYZ | Jun 2022 - Atual",
      },
      text: '<p>Desde junho de 2022, atuo como Full-Stack PHP na XYZ</p>',
    },
    {
      summary: {
        strong: "Full-Stack PHP",
        p: "XYZ | Jun 2022 - Atual",
      },
      text: '<p>Desde junho de 2022, atuo como Full-Stack PHP na XYZ</p>',
    },
    {
      summary: {
        strong: "Full-Stack PHP",
        p: "XYZ | Jun 2022 - Atual",
      },
      text: '<p>Desde junho de 2022, atuo como Full-Stack PHP na XYZ</p>',
    },
    {
      summary: {
        strong: "Full-Stack PHP",
        p: "XYZ | Jun 2022 - Atual",
      },
      text: '<p>Desde junho de 2022, atuo como Full-Stack PHP na XYZ</p>',
    },
    {
      summary: {
        strong: "Full-Stack PHP",
        p: "XYZ | Jun 2022 - Atual",
      },
      text: '<p>Desde junho de 2022, atuo como Full-Stack PHP na XYZ</p>',
    }
  ]);
}
