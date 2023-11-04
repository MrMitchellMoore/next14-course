'use server';
import { revalidatePath } from 'next/cache';
export default async function savePost(data: FormData) {
  const title = data.get('title');
  const description = data.get('description');

  try {
    const response = await fetch('http://localhost:3000/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      cache: 'no-cache',
    });

    if (response.ok) {
      const posts = await response.json();
      console.log(posts);
    }
  } catch (error) {
    console.log(error);
  } finally {
    revalidatePath('/postActions');
  }
}
