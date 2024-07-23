export interface IProject{
  src: string;
  alt: string;
  title: string;
  width: string;
  heigth: string;
  description: string;
  links: [
    {
      name: string,
      href: string
    }
  ]
}
