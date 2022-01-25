import { Component, Input, OnInit } from '@angular/core';

/**
* Presents variations of the PrimeFaces avatar component
*/
@Component({
  selector: 'gux-avatar',
  templateUrl: './gux-avatar.component.html',
  styleUrls: ['./gux-avatar.component.scss']
})
export class GuxAvatarComponent implements OnInit {
  /**
  * When present, it specifies the size of the avatar
  */
  @Input() size;
  /**
 * Specifies the shape of the avatar
 */
  @Input() shape = 'circle';
  /**
  * When present, it specifies the image to be displayed in the avatar
  */
  @Input() image;
  /**
  * When present, it specifies the text to be displayed in the avatar
  */
  @Input() label;
  /**
  * When present, it specifies the icon to be displayed in the avatar
  */
  @Input() icon;
  /**
  * Style of the avatar color
  */
  @Input() mode = 'primary';

  /**
  * Style class built from mode
  */
  styleClass: string = 'gux-avatar-';

  constructor() { }

  ngOnInit(): void {
    this.buildStyleClass();
  }

  buildStyleClass() {
    switch (this.mode) {
      case 'secondary':
        this.styleClass += this.mode;
        break;
      case 'success':
        this.styleClass += this.mode;
        break;
      case 'info':
        this.styleClass += this.mode;
        break;
      case 'warning':
        this.styleClass += this.mode;
        break;
      case 'danger':
        this.styleClass += this.mode;
        break;
      case 'light':
        this.styleClass += this.mode;
        break;
      case 'dark':
        this.styleClass += this.mode;
        break;
      default:
        this.styleClass += 'primary';
    }
  }

}
