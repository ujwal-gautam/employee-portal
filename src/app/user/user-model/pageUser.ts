
import {UserModel} from "./userModel";

export class PageUser  {
  content: UserModel[] | undefined;
  totalPages: number | undefined;
  totalElements: number | undefined;
  last: boolean | undefined;
  size: number | undefined;
  first: boolean | undefined;
  sort: string | undefined;
  numberOfElements: number | undefined;

}
