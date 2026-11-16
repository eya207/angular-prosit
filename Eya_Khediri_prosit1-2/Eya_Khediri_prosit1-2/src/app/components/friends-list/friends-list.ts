import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrls: ['./friends-list.css']
})
export class FriendsList {
  nom = 'Ahmed';
  amis = ['Sami', 'Sarra', 'Amine'];

  // Event binding
  changerNom(event: Event) {
    this.nom = (event.target as HTMLInputElement).value;
  }
}
