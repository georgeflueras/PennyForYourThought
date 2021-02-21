import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thoughts',
  templateUrl: './thoughts.component.html',
  styleUrls: ['./thoughts.component.css'],
})
export class ThoughtsComponent implements OnInit {
  public thoughtsList: any[];
  constructor() {
    this.thoughtsList = [
      {
        title: 'Username1',
        subtitle: 'thought',
        paragraph:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
      {
        title: 'Username2',
        subtitle: 'thought',
        paragraph:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
      {
        title: 'Username3',
        subtitle: 'thought',
        paragraph:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
    ];
  }

  ngOnInit(): void {}
}
