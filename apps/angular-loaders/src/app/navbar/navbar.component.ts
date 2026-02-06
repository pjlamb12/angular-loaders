import { Component, signal } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

@Component({
    selector: 'al-navbar',
    imports: [NgIf],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	public menuOpen = signal(false);

	toggleMenu() {
		this.menuOpen.update((state) => !state);
	}
}
