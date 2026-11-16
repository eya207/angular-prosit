import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  items = ['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin'];
  active = 'Accueil';

  select(item: string) {
    this.active = item;
  }
}
