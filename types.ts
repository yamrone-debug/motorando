
export type ActivityType = 'MOTO' | 'HIKE' | 'BOTH';

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  type: ActivityType;
  bio: string;
  location: string;
  avatar: string;
  bike?: string;
  hikeLevel?: 'Débutant' | 'Intermédiaire' | 'Expert';
  tags: string[];
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
}

export interface Adventure {
  id: string;
  title: string;
  type: ActivityType;
  date: string;
  location: string;
  description: string;
  creatorId: string;
  participants: number;
}
