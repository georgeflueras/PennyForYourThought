import { Component, OnInit } from '@angular/core';
import { Thought, User } from '../../models/thought';
import { ThoughtsService } from '../../services/thoughts.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { LocalDbService } from 'src/app/services/local-db.service';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css'],
})
export class ThoughtsComponent implements OnInit {
  public latestThoughtsList: Thought[];
  public myThoughtsList: Thought[];
  public user: User;

  constructor(
    private thoughtsService: ThoughtsService,
    public dialog: MatDialog,
    private localDbService: LocalDbService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = this.getCurrentUser();
    this.getLatestThoughts();
    this.getMyThoughts();
  }

  getLatestThoughts() {
    let thoughts = this.thoughtsService.getLatestThoughts().filter((thought) => {
        if (thought.username !== this.user.name) {
          return thought;
        }
      });
    if (thoughts) {
      this.latestThoughtsList = thoughts.sort((a, b) => {
        let date1 = new Date(b.date);
        let date2 = new Date(a.date);
        return date1.getTime() - date2.getTime();
      });
    }
  }

  getMyThoughts() {
    const sessionUser = sessionStorage.getItem('user');
    let cookieUser = document.cookie?.split('="')[1]?.split(';')[0];
    const userEmail = sessionUser || cookieUser;
    let thoughts = this.thoughtsService.getThoughtsByUserEmail(userEmail);
    if (thoughts) {
      this.myThoughtsList = thoughts.sort((a, b) => {
        let date1 = new Date(b.date);
        let date2 = new Date(a.date);
        return date1.getTime() - date2.getTime();
      });
    }
  }

  getCurrentUser(): User {
    const sessionUser = sessionStorage.getItem('user');
    let cookieUser = document.cookie?.split('="')[1]?.split(';')[0];
    const userEmail = sessionUser || cookieUser;
    return this.localDbService.get<User>('users', 'email', userEmail);
  }

  likeThought(thought: Thought): void {
    thought.likedBy.push(this.user.email);
    this.thoughtsService.updateThought(thought, thought.totalPennies + 1);
  }

  isLiked(thought: Thought): boolean {
    return thought.likedBy.includes(this.user.email);
  }

  logout() {
    sessionStorage.removeItem('user');
    document.cookie = `user=";expires=Thu, 01 Jan 1970 00:00:00 GMT"`;
    this.router.navigateByUrl('/login');
  }

  showEmail(thought: Thought) {
    let user = this.localDbService.get<User>('users', 'name', thought.username);
    return user.email;
  }

  addThought() {
    const dialogRef = this.dialog.open(DialogComponent, { data: {mode: 'add new'} });
    dialogRef.afterClosed().subscribe((result) => {
      this.getMyThoughts();
      this.getLatestThoughts();
    });
  }

  editPost(thought: Thought) {
    const dialogRef = this.dialog.open(DialogComponent, { data: {thought, mode: 'edit'} });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  deletePost(thought: Thought) {
    const dialogRef = this.dialog.open(DeleteDialogComponent,{ data: {thought}});
    dialogRef.afterClosed().subscribe(() => {
      this.getMyThoughts();
      this.getLatestThoughts();
    });
  }
}

