import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Thought, User } from 'src/app/models/thought';
import { LocalDbService } from 'src/app/services/local-db.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {
  public thought: Thought;
  public thoughtContent: string="";
  public mode: string;
  constructor(private localDbService: LocalDbService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.thoughtContent = this.data?.thought?.content;
    this.mode = this.data.mode; 
  }

  submitThought(){
    const sessionUser = sessionStorage.getItem('user');
    let cookieUser = document.cookie?.split('="')[1]?.split(';')[0];
    const userEmail = sessionUser || cookieUser;
    let currentTime = new Date();
    this.thought = {
      username: this.localDbService.get<User>('users','email', userEmail).name,
      email: this.localDbService.get<User>('users','email', userEmail).email,
      date: currentTime.toString(),
      edited: false,
      content: this.thoughtContent,
      likedBy: [],
      totalPennies: 0
    }
    this.localDbService.add<Thought>('thoughts',this.thought);
  }

  editThought(){
    this.data.thought.content = this.thoughtContent;
    this.data.thought.edited = true;
    this.localDbService.update<Thought>('thoughts', this.data.thought, 'content', this.data.thought.totalPennies);
  }
}
