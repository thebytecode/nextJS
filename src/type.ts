export interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  export interface BlogProps {
    posts: Post[];
    userId: number;
  }
  