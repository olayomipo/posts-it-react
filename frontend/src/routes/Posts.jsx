import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import PostsList from '../components/PostsList';

function Posts() {

  return (
    <>
      <Outlet />
      <main>
        < PostsList/>
      </main>
    </>

  )
}

export default Posts;

const url = 'http://localhost:8080/posts';

export async function loader(){

  const response = await fetch(url);
  const resData = await response.json();

  return resData.posts;

}