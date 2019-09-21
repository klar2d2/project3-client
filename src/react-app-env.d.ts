/// <reference types="react-scripts" />

export interface ImageTiles {
  image: string,
  artist: string
}

export interface ContentInt {
  refreshArtworks():void,
  refreshUser(),
  user?: (string | null),
  artworks?: any[],
  current?: ({} | null),
}

export interface AppProps {
  user?: (string | null),
  artworks?: any[],
  current?: ({} | null),
  getArtworks?(): void,
  getUser?(): string
}

interface IPost {
  id: string;
  media_type: string;
  media_url: string;
  timestamp: string;
 }
export interface ITest {
  albumId: number,

}

export interface IArtistProps {
  id: string;
  user?: (string | null);
  refreshUser();
}

export interface IArtistState {
  current?: (string | null);
  address: {};
  businessName: string;
  contactInfo: {
    email: string;
    instagramIdPage: string;
    name: string;
    phoneNumber: string;
    website: string;
  };
  id: string;
  pinned: [];
}
