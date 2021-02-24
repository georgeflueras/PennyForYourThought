import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { Thought } from '../models/thought';
import { LocalDbService } from './local-db.service';

@Injectable({
  providedIn: 'root'
})
export class ThoughtsService {

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
     private localDbservice: LocalDbService
  ) { }

  getLatestThoughts(): Thought[]{
    return this.localDbservice.getAll<Thought>('thoughts', null, null);
  }

  getThoughtsByUserEmail(userEmail: string): Thought[]{
    var user = this.localDbservice.get('users','email', userEmail);
    return this.localDbservice.getAll<Thought[]>('thoughts', 'username', user.name)
  }

  updateThought(userName: string, content: any, likedBy: any, newTotalPennies: number): void{
    this.localDbservice.update<Thought>('thoughts','username', userName, 'content', content,'likedBy', likedBy, newTotalPennies)
  }

}
