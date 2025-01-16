import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-direct-messages',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './direct-messages.component.html',
  styleUrl: './direct-messages.component.css'
})
export class DirectMessagesComponent {
    constructor(public router: Router) { }

    changeRoute() {
        this.router.navigate([this.router.url, { outlets: { directPopup: ['direct-media'] },  }], { skipLocationChange: true })
    }

}
