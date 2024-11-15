import { Component, inject } from '@angular/core';
import { IonicModule, PopoverController } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { UserMenuComponent } from "../user-menu/user-menu.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonicModule,
  ],
})
export class HomePage {

  router: Router = inject(Router);
  popoverController: PopoverController = inject(PopoverController);
  numberCount: number = 5;
  displayTime: number = 2;
  digitLength: number = 2;

  constructor() {}

  startGame() {
    this.router.navigate(['/display'], {
      queryParams: {
        numberCount: this.numberCount,
        displayTime: this.displayTime,
        digitLength: this.digitLength,
      },
    });
  }

  async openUserMenu($event: MouseEvent) {
    const popover = await this.popoverController.create({
      component: UserMenuComponent,
      event: $event,
      translucent: true,
    });
    await popover.present();
  }
}
