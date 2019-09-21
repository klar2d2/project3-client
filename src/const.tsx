export const SERVER = "https://secret-dawn-38131.herokuapp.com";

export const GET__ALL_USERS = SERVER + "/v1/users/users";

export const GET_USER_FAVORITE_ARTISTS = (userId: string): string => {
 return SERVER + `/v1/users/${userId}/favoriteArtists`;
}
export const ADD_USER_FAVORITE_ARTISTS = (userId: string): string => {
  return SERVER + `/v1/users/${userId}/favoriteArtists/add`;
}
export const DELETE_USER_FAVORITE_ARTISTS = (userId: string): string => {
  return SERVER + `/v1/users/${userId}/favoriteArtists/remove`;
}

export const GET_USER_FAVORITE_WORKS = (userId: string): string => {
  return SERVER + `/v1/users/${userId}/favoriteWorks`;
}
export const ADD_USER_FAVORITE_WORKS = (userId: string): string => {
  return SERVER + `/v1/users/${userId}/favoriteWorks/add`;
}
export const DELETE_USER_FAVORITE_WORKS = (userId: string): string => {
  return SERVER + `/v1/users/${userId}/favoriteWorks/remove`;
}

export const GET_ARTIST_PINNED = (artistId: string): string => {
  return SERVER + `/v1/users/${artistId}/pinned`;
}
export const ADD_ARTIST_PINNED = (artistId: string): string => {
  return SERVER + `/v1/users/${artistId}/pinned/add`;
}
export const DELETE_ARTIST_PINNED = (artistId: string): string => {
  return SERVER + `/v1/users/${artistId}/pinned/remove`;
}

export const GET_ALL_ARTIST_POSTS = (artistId: string): string => {
  return SERVER + `/v1/instagram/user/${artistId}`;
};
export const GET_ONE_ARTIST_POST = (artistId: string, postId: string): string => {
  return SERVER + `/v1/instagram/user/${artistId}/${postId}`;
};
export const GET_FRONTPAGE_POSTS = SERVER + "/v1/instagram/user/frontpage";

export const LOGIN = SERVER + "/v1/auth/login";
export const SIGNUP = SERVER + "/v1/auth/signup";
export const CURRENT_USER = SERVER + "/v1/auth/current/user";