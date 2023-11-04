// type PostProps = {
//   posts: {
//     id: number;
//     title: string;
//     description: string;
//   };
// };

// const getPostById = async (postId: string) => {
//   const response = await fetch(`http://localhost:3000/api/posts/${postId}`);
//   if (!response.ok) throw Error('something went wrong');

//   const posts: PostProps = await response.json();

//   return posts;
// };

// export default async function PostId({ params }: any) {
//   const { posts } = await getPostById(params.id);

//   console.log(posts);
//   return (
//     <div>
//       <h1>{posts.title}</h1>
//       <p>{posts.description}</p>
//     </div>
//   );
// }

'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

type Post = {
  id: number;
  title: string;
  description: string;
};

export default function PostId() {
  const params = useParams();
  const [posts, setPosts] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async function load() {
    //   await getPostById();
    // }
    // load();
    async function getPostById() {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/api/posts/${params.id}`,
          {
            method: 'GET',
            next: {
              revalidate: 500000,
            },
          }
        );

        const { posts } = await response.json();

        if (!posts) {
          return (
            <div className='flex w-full items-center justify-center text-xl'>
              <p>No Post were found!</p>
            </div>
          );
        }
        setPosts(posts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getPostById();
  }, [params.id]);

  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      {loading && <div className='flex'>Loading...</div>}
      {posts ? (
        <div>
          <h1>{posts.title}</h1>
          <p>{posts.description}</p>
        </div>
      ) : (
        <div>
          <p>Content was not found!</p>
        </div>
      )}
    </div>
  );
}
