import React from "react";
import { Container } from "../../components/container";
import { Posts } from '../../components/Posts/';
import { Typo } from "../../components/Typo";


export const INITIAL_POSTS = [
    {
      id: 1,
      title: 'Post 1',
      image: 'https://a.d-cd.net/_UAAAgDoneA-480.jpg',
      text: "this is first post "
    },
    {
      id: 2,
      title: 'Post 2',
      image: 'https://a.d-cd.net/_UAAAgDoneA-480.jpg',
      text: "this is second post "
    },
    {
      id: 3,
      title: 'Post 3',
      image: 'https://a.d-cd.net/_UAAAgDoneA-480.jpg',
      text: "this is third post "
    },
  ]

export const PostsPage = () => (<>
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={INITIAL_POSTS}/>
    </Container>
</>)