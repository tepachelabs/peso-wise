export interface Card {
  id: string;
  name: string;
}

export interface CardCreateResponse {
  id: string,
  name: string,
  userId: string;
}
