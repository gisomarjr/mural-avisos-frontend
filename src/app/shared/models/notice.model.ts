import { Resource } from 'angular4-hal';

/**
 * Notice resouce
 * @author Gisomar Jr.
 */
export class Notice extends Resource {

  id: number;
  title: string;
  description: string;
  publication: Date;
  visualization: Date;

}