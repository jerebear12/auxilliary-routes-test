import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-folder-popup',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './folder-popup.component.html',
  styleUrl: './folder-popup.component.css'
})
export class FolderPopupComponent {
    constructor(private router: Router) { }

    public closePopup(): void {
        // Navigate to clear the 'popup' outlet
        this.router.navigate([this.router.url.slice(1, this.router.url.lastIndexOf('/'))], { skipLocationChange: true });
    }
}
