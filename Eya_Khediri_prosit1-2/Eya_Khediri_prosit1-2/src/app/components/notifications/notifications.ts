import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrls: ['./notifications.css']
})
export class Notifications {
  notifications = ['Une nouvelle conférence est disponible.', 'Sami vous a envoyé une invitation.'];
  afficher = false;

  basculer() {
    this.afficher = !this.afficher;
  }
}
