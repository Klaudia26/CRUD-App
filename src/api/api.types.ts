export interface IPost {
  id: string;
  name: string;
  organizer: string;
  post: string;
  participants: {
    current: number;
    max: number;
  };
  startDate: string;
}
