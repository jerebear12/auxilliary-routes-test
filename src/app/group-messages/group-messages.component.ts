import { group } from '@angular/animations';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-group-messages',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './group-messages.component.html',
  styleUrl: './group-messages.component.css'
})
export class GroupMessagesComponent {
    constructor(private router: Router) { }

    changeRoute() {
        this.router.navigate([this.router.url, { outlets: { groupPopup: ['group-media'] },  }], { skipLocationChange: true })
    }
}
