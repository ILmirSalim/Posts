import React from "react";
import { Container } from "../../components/container";
import { Posts } from '../../components/Posts/';
import { Typo } from "../../components/Typo";


const INITIAL_POSTS = [
    {
      id: 1,
      title: 'Post 1',
      image: 'https://a.d-cd.net/_UAAAgDoneA-480.jpg'
    },
    {
      id: 2,
      title: 'Post 2',
      image: 'https://a.d-cd.net/_UAAAgDoneA-480.jpg'
    },
    {
      id: 3,
      title: 'Post 3',
      image: 'https://a.d-cd.net/_UAAAgDoneA-480.jpg'
    },
  ]

export const PostsPage = () => (<>
    <Container>
      <Typo>Публикации</Typo>
      <Posts posts={INITIAL_POSTS}/>
    </Container>
</>)