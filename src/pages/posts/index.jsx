import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/container";
import { Posts } from '../../components/Posts/';
import { Typo } from "../../components/Typo";
import Loader from "../../Loader/loader";
import { getPosts } from "../../redux/slices/postsSlice";

export const PostsPage = () => {
  const {list, loading} = useSelector((state) => state.posts.posts)
  const dispatch = useDispatch()
  
  useEffect(()=> {
    dispatch(getPosts())
  }, []);

  if (!list && loading) {
    return <Loader/>
  }

  if (!list) {
    return <>404</>
  }
  return <Container>
    <Typo>Публикации</Typo>
    <Posts posts={list}/>
  </Container>
}

