import {
    Component,
    ViewEncapsulation,
    Input,
    Output,
    EventEmitter
  } from '@angular/core';
  
  @Component({
    selector: 'app-ng-card-element',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    encapsulation: ViewEncapsulation.ShadowDom
  })
  export class AuthComponent {
    @Input() title: string;
    @Input() name: string;
    @Input() time = new Date();
    @Input() caption: string;
    @Input() avtar: string;
    @Input() image: string;
  
    @Output() likeNotify = new EventEmitter<boolean>();
    @Output() shareNotify = new EventEmitter<boolean>();
    @Output() commentNotify = new EventEmitter<boolean>();
  
    likeEvent() {
      this.likeNotify.emit(true);
    }
    shareEvent() {
      this.shareNotify.emit(true);
    }
    commentEvent() {
      this.commentNotify.emit(true);
    }
  }
  