import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Container } from "../../components/UI components/container";
import { Posts } from '../../components/Posts/';
import { Typo } from "../../components/UI components/Typo";
import Loader from "../../components/UI components/Loader/loader";
import { getFreshPosts, getPostsPagin} from "../../redux/slices/postsSlice";

export const MainPage = () => {
  
  const {post} = useSelector((state) => state.posts.postForView)

  const {list, loading} = useSelector((state) => state.posts.posts)
  // const {posts,loading} = useSelector((state) => state.posts.freshPosts) // 
  
  const dispatch = useDispatch()

  useEffect(()=>{
        if (!list) {
          dispatch(getPostsPagin(1))
        }
  }, [dispatch])
  console.log(list)

  
  if (!list && loading) {
    return <Loader/>
  }
  
  return <>
      <Container>
      <Typo>Свежие публикации</Typo>
      
          {list &&
            <Posts posts={list}/>} 
          
          {post && <>
            <Typo>Последний просмотренный пост</Typo>
            <Posts posts={[post]}/>
          </>
          }
      </Container>
    </>
}
  


