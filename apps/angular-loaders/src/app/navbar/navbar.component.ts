import { Component, signal } from '@angular/core';


@Component({
    selector: 'al-navbar',
    imports: [],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
	public menuOpen = signal(false);

	toggleMenu() {
		this.menuOpen.update((state) => !state);
	}
}
