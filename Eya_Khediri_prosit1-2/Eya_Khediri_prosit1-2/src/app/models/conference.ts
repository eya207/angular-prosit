export interface Conference {
  id: number;
  title: string;
  description: string;
  date: string; // format ISO : yyyy-MM-dd
  place: string;
  maxParticipants: number;
  nbParticipants: number;
}
