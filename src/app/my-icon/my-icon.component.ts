import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-icon',
  template: `
  <svg
    [attr.width]="width"
    [attr.height]="height"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    >
    <path
      [attr.d]="d"
      [attr.fill]="color"
    />
  </svg>
  `
})
export class MyIconComponent implements OnInit {
  @Input() shape: 'search' | 'close';
  @Input() width: string | number = 32;
  @Input() height: string | number = 32;
  @Input() color: string = 'black';

  get d(): string {
    switch (this.shape) {
      case 'close':
        return 'M15.0606602,14.3535534 L21.8535534,21.1464466 C22.0488155,21.3417088 22.0488155,21.6582912 21.8535534,21.8535534 C21.6582912,22.0488155 21.3417088,22.0488155 21.1464466,21.8535534 L14.3535534,15.0606602 C14.1582912,14.865398 14.1582912,14.5488155 14.3535534,14.3535534 C14.5488155,14.1582912 14.865398,14.1582912 15.0606602,14.3535534 Z M3.06066017,2.35355339 L11.8901068,11.1831068 L20.7196699,2.35355339 C20.9149321,2.15829124 21.2315145,2.15829124 21.4267767,2.35355339 C21.6220388,2.54881554 21.6220388,2.86539803 21.4267767,3.06066017 L3.06066017,21.4267767 C2.86539803,21.6220388 2.54881554,21.6220388 2.35355339,21.4267767 C2.15829124,21.2315145 2.15829124,20.9149321 2.35355339,20.7196699 L11.1831068,11.8901068 L2.35355339,3.06066017 C2.15829124,2.86539803 2.15829124,2.54881554 2.35355339,2.35355339 C2.54881554,2.15829124 2.86539803,2.15829124 3.06066017,2.35355339 Z'
      case 'search':
        return 'M10,1 C14.9705627,1 19,5.02943725 19,10 C19,12.3326336 18.1125859,14.4580005 16.6569438,16.0569146 L22.6123202,22.0118051 C22.6869945,22.0994711 22.732675,22.2135438 22.732675,22.3382857 C22.732675,22.6144281 22.5088174,22.8382857 22.232675,22.8382857 C22.1084109,22.8382857 21.9947345,22.7929545 21.9072803,22.7179268 L21.9052134,22.7189118 L15.5412523,16.3549508 C15.4939153,16.2674758 15.4621305,16.1708459 15.4621305,16.0667923 C15.4621305,15.9297438 15.5172689,15.8055737 15.6065721,15.7152553 C15.6060941,15.7137543 15.6041697,15.7117693 15.6022414,15.7097881 C17.0821794,14.2588076 18,12.236588 18,10 C18,5.581722 14.418278,2 10,2 C5.581722,2 2,5.581722 2,10 C2,14.418278 5.581722,18 10,18 C10.5835462,18 11.1524995,17.9375207 11.7005353,17.8188867 L11.8234468,17.7903152 C11.8783452,17.7695914 11.9378483,17.7582515 12,17.7582515 C12.1380712,17.7582515 12.2630712,17.8142159 12.3535534,17.9046981 C12.4440356,17.9951803 12.5,18.1201803 12.5,18.2582515 C12.5,18.5343938 12.2761424,18.7582515 12,18.7582515 L12.0778145,18.7519292 C12.0777537,18.7542434 12.0776957,18.7565555 12.0776406,18.7588656 C11.4107429,18.9165972 10.7151113,19 10,19 C5.02943725,19 1,14.9705627 1,10 C1,5.02943725 5.02943725,1 10,1 Z'
      default: // close
        return 'M15.0606602,14.3535534 L21.8535534,21.1464466 C22.0488155,21.3417088 22.0488155,21.6582912 21.8535534,21.8535534 C21.6582912,22.0488155 21.3417088,22.0488155 21.1464466,21.8535534 L14.3535534,15.0606602 C14.1582912,14.865398 14.1582912,14.5488155 14.3535534,14.3535534 C14.5488155,14.1582912 14.865398,14.1582912 15.0606602,14.3535534 Z M3.06066017,2.35355339 L11.8901068,11.1831068 L20.7196699,2.35355339 C20.9149321,2.15829124 21.2315145,2.15829124 21.4267767,2.35355339 C21.6220388,2.54881554 21.6220388,2.86539803 21.4267767,3.06066017 L3.06066017,21.4267767 C2.86539803,21.6220388 2.54881554,21.6220388 2.35355339,21.4267767 C2.15829124,21.2315145 2.15829124,20.9149321 2.35355339,20.7196699 L11.1831068,11.8901068 L2.35355339,3.06066017 C2.15829124,2.86539803 2.15829124,2.54881554 2.35355339,2.35355339 C2.54881554,2.15829124 2.86539803,2.15829124 3.06066017,2.35355339 Z'
    }
 }

  constructor() { }

  ngOnInit() {
  }

}
