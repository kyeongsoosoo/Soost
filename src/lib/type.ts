export interface IUser {
  uid: string;
  email: string;
  displayName: string;
  nickname: string;
  website: string;
  introduction: string;
  phoneNumber: string;
  gender: string;
  photoURL: string;
}

export interface IFeed {
  image: string[];
  text: string;
  writerNick: string;
  writerPhote: string;
}
