import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class LiveDbService implements InMemoryDbService {
  createDb() {
    const myThoughtsList = [
      {
        title: 'Usseagnaklpjngm',
        subtitle: 'thought',
        content:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
      {
        title: 'Username1',
        subtitle: 'thought',
        content:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
      {
        title: 'Username2',
        subtitle: 'thought',
        content:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
      {
        title: 'Username1',
        subtitle: 'thought',
        content:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
      {
        title: 'Username2',
        subtitle: 'thought',
        content:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
    ];
    const latestThoughtsList = [
      {
        title: 'Username1',
        subtitle: 'thought',
        content:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
      {
        title: 'Username2',
        subtitle: 'thought',
        content:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
      {
        title: 'Username3',
        subtitle: 'thought',
        content:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
      {
        title: 'Username1',
        subtitle: 'thought',
        content:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
      {
        title: 'Username1',
        subtitle: 'thought',
        content:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      },
      {
        title: 'Username1',
        subtitle: 'thought',
        content:
          'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      }
    ];
    return { latestThoughtsList, myThoughtsList };
  }
}
