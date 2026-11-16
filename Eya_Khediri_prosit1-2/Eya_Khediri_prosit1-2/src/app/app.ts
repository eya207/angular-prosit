import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { UserProfile } from './components/user-profile/user-profile';
import { FriendsList } from './components/friends-list/friends-list';
import { Notifications } from './components/notifications/notifications';
import { ConferenceList } from './components/conference-list/conference-list';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Navbar, UserProfile, FriendsList, Notifications, ConferenceList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
