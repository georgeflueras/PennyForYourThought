import { Component, OnInit } from '@angular/core';
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
  constructor(private localDbService: LocalDbService) {}

  ngOnInit(): void {}

  submitThought(){
    const sessionUser = sessionStorage.getItem('user');
    let cookieUser = document.cookie?.split('="')[1]?.split(';')[0];
    const userEmail = sessionUser || cookieUser;
    let currentTime = new Date();
    this.thought = {
      username: this.localDbService.get<User>('users','email', userEmail).name,
      date: currentTime.toString(),
      content: this.thoughtContent,
      likedBy: [],
      totalPennies: 0
    }
    this.localDbService.add<Thought>('thoughts',this.thought);
    
  }
}
