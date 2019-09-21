export const SERVER = "https://secret-dawn-38131.herokuapp.com";

export const GET__ALL_USERS = "/v1/users";

export const GET_USER_FAVORITE_ARTISTS = (userId: string): string => {
 return  `/v1/${userId}/favortieArtists`;
}
export const ADD_USER_FAVORITE_ARTISTS = (userId: string): string => {
  return  `/v1/${userId}/favortieArtists/add`;
}
export const DELETE_USER_FAVORITE_ARTISTS = (userId: string): string => {
  return  `/v1/${userId}/favortieArtists/remove`;
}

export const GET_USER_FAVORITE_WORKS = (userId: string): string => {
  return  `/v1/${userId}/favortieWorks`;
}
export const ADD_USER_FAVORITE_WORKS = (userId: string): string => {
  return  `/v1/${userId}/favortieWorks/add`;
}
export const DELETE_USER_FAVORITE_WORKS = (userId: string): string => {
  return  `/v1/${userId}/favortieWorks/remove`;
}

export const GET_ARTIST_PINNED = (artistId: string): string => {
  return  `/v1/${artistId}/pinned`;
}
export const ADD_ARTIST_PINNED = (artistId: string): string => {
  return  `/v1/${artistId}/pinned/add`;
}
export const DELETE_ARTIST_PINNED = (artistId: string): string => {
  return  `/v1/${artistId}/pinned/remove`;
}

export const GET_ALL_ARTIST_POSTS = (artistId: string): string => {
  return `/v1/instram/user/${artistId}`;
};
export const GET_ONE_ARTIST_POST = (artistId: string, postId: string): string => {
  return `/v1/instram/user/${artistId}/${postId}`;
};
export const GET_FRONTPAGE_POSTS = "/v1/instram/user/frontpage";

export const LOGIN = "/v1/auth/login";
export const SIGNUP = "/v1/auth/signup";
export const CURRENT_USER = "/v1/auth/currrent/user";