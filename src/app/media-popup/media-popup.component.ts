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
        this.router.navigate([{ outlets: { popup: null } }], { skipLocationChange: true });
    }
}
