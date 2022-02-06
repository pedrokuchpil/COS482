import { IUsuario } from '@/shared/model/usuario.model';

export interface IBook {
  id?: number;
  title?: string | null;
  author?: string | null;
  owner?: IUsuario | null;
}

export class Book implements IBook {
  constructor(public id?: number, public title?: string | null, public author?: string | null, public owner?: IUsuario | null) {}
}
