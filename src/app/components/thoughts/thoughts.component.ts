import { Component,  OnInit } from '@angular/core';
import { Thought, User } from '../../models/thought';
import { ThoughtsService } from '../../services/thoughts.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { LocalDbService } from 'src/app/services/local-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css'],
})

export class ThoughtsComponent implements OnInit {
  public latestThoughtsList: Thought[];
  public myThoughtsList: Thought[];
  public user: User;

  constructor(private thoughtsService: ThoughtsService, public dialog: MatDialog, private localDbService: LocalDbService, private router: Router) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result =>{
      this.getMyThoughts();
      this.getLatestThoughts();
    })
  }

  ngOnInit(): void {
    this.user = this.getCurrentUser();
    this.getLatestThoughts();
    this.getMyThoughts();
  }

  getLatestThoughts() {
    let thoughts = this.thoughtsService.getLatestThoughts().filter(thought => {
      if(thought.username !== this.user.name){
        return thought;
      }
    });
    if(thoughts){
      this.latestThoughtsList = thoughts.sort((a,b) => {
        let date1 = new Date(b.date);
        let date2 = new Date(a.date);
        return date1.getTime() - date2.getTime();
      })
    }
  }

  getMyThoughts() {
    const sessionUser = sessionStorage.getItem('user');
    let cookieUser = document.cookie?.split('="')[1]?.split(';')[0];
    const userEmail = sessionUser || cookieUser;
    let thoughts = this.thoughtsService.getThoughtsByUserEmail(userEmail);
    if(thoughts){
      this.myThoughtsList = thoughts.sort((a,b) => {
        let date1 = new Date(b.date);
        let date2 = new Date(a.date);
        return date1.getTime() - date2.getTime();
      })
    }
  }
  
  getCurrentUser(): User{
    const sessionUser = sessionStorage.getItem('user');
    let cookieUser = document.cookie?.split('="')[1]?.split(';')[0];
    const userEmail = sessionUser || cookieUser;
    return this.localDbService.get<User>('users','email', userEmail);
  }

  likeThought(thought: Thought):void{
    thought.likedBy.push(this.user.email);
    this.thoughtsService.updateThought(thought.username, thought.content, thought.likedBy, thought.totalPennies+1);
  }

  isLiked(thought:Thought):boolean{
    return thought.likedBy.includes(this.user.email);
  }

  logout() {
    sessionStorage.removeItem('user');
    document.cookie = `user=";expires=Thu, 01 Jan 1970 00:00:00 GMT"`;
    this.router.navigateByUrl('/login');
  }

}

