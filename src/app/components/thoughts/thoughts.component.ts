import {Component, OnDestroy, OnInit} from '@angular/core';
import {Thought} from '../../models/thought';
import {ThoughtsService} from '../../services/thoughts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css'],
})
export class ThoughtsComponent implements OnInit, OnDestroy {
  public latestThoughtsList: Thought[];
  public myThoughtsList: Thought[];
  private subscriptions: Subscription;
  private latestThoughtsUrl = 'api/latestThoughtsList';
  private myThoughtsUrl = 'api/myThoughtsList';

  constructor(private thoughtsService: ThoughtsService) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.getLatestThoughts(this.latestThoughtsUrl);
    this.getMyThoughts(this.myThoughtsUrl);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getLatestThoughts(latestThoughtsUrl) {
    this.subscriptions.add(
      this.thoughtsService.getThoughts(latestThoughtsUrl)
        .subscribe((data) => {
          this.latestThoughtsList = data;
        })
      );
  }

  getMyThoughts(latestThoughtsUrl) {
    this.subscriptions.add(
      this.thoughtsService.getThoughts(latestThoughtsUrl)
        .subscribe((data) => {
          this.myThoughtsList = data;
        })
    );
  }
}
