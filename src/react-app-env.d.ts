/// <reference types="react-scripts" />

export interface IUser {
  email: string;
  favoriteArtists: string[];
  favoriteWorks: [{postId: string, artistId: string}];
  firstname: string;
  id: string,
  isLoggedIn?: boolean;
  isVendor?: boolean;
  lastname: string;
  password: string;
}

export interface IVendor {
  businessName: string;
  instagramAccessToken: string;
  instagramIdPage: string;
  phoneNumber: string;
  pinned: string[];
  website: string;
}

export interface IAddress {
  city: string;
  country: string;
  state: string;
  street: string;
  streetNumber: string;
  streetSuffix: string;
  zipcode: string;
}

export interface IPost {
  id: string;
  mediaType: string;
  mediaUrl: string;
  timestamp: string;
  userId: string;
}





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
  favoriteWorks: [{postId: string, artistId: string }];
  favoriteArtists: [];
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
