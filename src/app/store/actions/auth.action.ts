import {Auth} from '../../models/Auth'


export class AddAuth{
  static readonly type = '[Auth] Add';

  constructor(public payload:Auth){}
}

export class GetAuth{
  static readonly type = '[Auth] Get';
}
