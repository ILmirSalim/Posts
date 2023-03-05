import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/ui-components/container";
import { Posts } from '../../components/Posts/';
import { Typo } from "../../components/ui-components/Typo";
import Loader from "../../components/ui-components/Loader/loader";
import { getPostsPagin } from "../../redux/slices/postsSlice";

export const MainPage = () => {

  const { post } = useSelector((state) => state.posts.postForView)

  const { list, loading } = useSelector((state) => state.posts.posts)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!list) {
      dispatch(getPostsPagin(1))
    }
  }, [dispatch, list])

  if (!list && loading) {
    return <Loader />
  }

  return <>
    <Container>
      <Typo>Свежие публикации</Typo>
      {list &&
        <Posts posts={list} />
      }

      {post && <>
        <Typo>Последний просмотренный пост</Typo>
        <Posts posts={[post]} />
      </>}
    </Container>
  </>
}



