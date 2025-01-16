import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-media-popup',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './media-popup.component.html',
  styleUrl: './media-popup.component.css'
})
export class MediaPopupComponent {
    constructor(private router: Router) { }

    closePopup(): void {
        this.router.navigate([this.router.url.slice(1, this.router.url.lastIndexOf('/'))], { skipLocationChange: true });
    }
}
