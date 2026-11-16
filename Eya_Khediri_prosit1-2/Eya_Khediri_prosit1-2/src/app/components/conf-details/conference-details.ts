import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrls: ['./conference-details.css'],
})
export class ConferenceDetails {
  // Parent -> enfant : conférence sélectionnée dans la liste
  @Input() conference: Conference | null = null;

  // Enfant -> parent : demande d'inscription
  @Output() inscrit = new EventEmitter<Conference>();

  get placesDisponibles(): number {
    return this.conference ? this.conference.maxParticipants - this.conference.nbParticipants : 0;
  }

  inscrire() {
    if (this.conference && this.placesDisponibles > 0) {
      this.inscrit.emit(this.conference);
    }
  }
}
