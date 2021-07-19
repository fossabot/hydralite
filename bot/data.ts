export interface User {
  createdAt: Date;
  hydra: number;

  ownedProjects: number;
  allProjects: number;

  likedProjects: number;
  followedProjects: number;

  followers: number;
  following: number;

  posts: number;
  likedPosts: number;
}

export function getData(username: string): User {
  return {
    createdAt: new Date(),
    hydra: 150,

    ownedProjects: 3,
    allProjects: 9,

    likedProjects: 22,
    followedProjects: 13,

    followers: 35,
    following: 77,

    posts: 52,
    likedPosts: 237,
  };
}
