import { Resource } from 'angular4-hal';
import * as moment from 'moment';

/**
 * Notice resouce
 * @author Gisomar Jr.
 */
export class Notice extends Resource {

  id: number;
  title: string;
  description: string;
  publication: any = moment().format('DD/MM/YYYY');;
  visualization: any;

}