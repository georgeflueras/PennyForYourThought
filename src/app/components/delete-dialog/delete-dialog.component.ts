import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Thought } from 'src/app/models/thought';
import { LocalDbService } from 'src/app/services/local-db.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  public thought: Thought;
  public thoughtContent: string="";

  constructor(private localDbService: LocalDbService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }
  erasePost(thought: Thought){
    this.localDbService.delete<Thought>('thoughts', this.data.thought);
  }
}
