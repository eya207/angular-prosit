import { Component } from '@angular/core';
import { NgClass, DatePipe, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
import { ConferenceDetails } from '../conf-details/conference-details';

@Component({
  selector: 'app-conference-list',
  imports: [NgClass, UpperCasePipe, DatePipe, FormsModule, ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  // Données (liste des conférences)
  conferences: Conference[] = [
    { id: 1, title: 'Angular 21 Conference', description: "Découvrir les nouveautés d'Angular 21.",
      date: '2027-11-15', place: 'Tunis', maxParticipants: 50, nbParticipants: 25 },
    { id: 2, title: 'Signals Workshop', description: 'Atelier pratique sur les Signals Angular.',
      date: '2027-11-30', place: 'Ariana', maxParticipants: 20, nbParticipants: 14 },
    { id: 3, title: 'Web Conference', description: 'Conférence sur le développement web moderne.',
      date: '2027-11-20', place: 'Sousse', maxParticipants: 30, nbParticipants: 30 },
    { id: 4, title: 'Ancienne Conference', description: 'Conférence passée : ne doit pas être affichée.',
      date: '2026-08-15', place: 'Tunis', maxParticipants: 40, nbParticipants: 20 },
  ];

  today = new Date().toISOString().split('T')[0];
  recherche = '';

  // PROSIT 2 : conférence transmise au composant enfant via @Input
  conferenceSelectionnee: Conference | null = null;

  /** Conférences à venir dont le titre contient le texte saisi. */
  get conferencesFiltrees(): Conference[] {
    const t = this.recherche.trim().toLowerCase();
    return this.conferences.filter(
      (c) => c.date >= this.today && c.title.toLowerCase().includes(t)
    );
  }

  placesRestantes(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  couleurBouton(c: Conference): string {
    const p = this.placesRestantes(c);
    if (p === 0) return 'rouge';
    if (p < 10) return 'orange';
    return 'vert';
  }

  choisirConference(c: Conference) {
    this.conferenceSelectionnee = c;
  }

  reserve(c: Conference) {
    if (this.placesRestantes(c) > 0) {
      c.nbParticipants++;
    }
  }
}
