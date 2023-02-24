import React, { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Container } from "../../components/UI components/container";
import { Posts } from '../../components/Posts/';
import { Typo } from "../../components/UI components/Typo";
import Loader from "../../components/UI components/Loader/loader";
import { getFreshPosts } from "../../redux/slices/postsSlice";

export const MainPage = () => {

  const {post} = useSelector((state) => state.posts.postForView)
  const {posts, loading} = useSelector((state) => state.posts.freshPosts)
  
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getFreshPosts())
  }, [])

   return <>
        {loading && <Loader/>}
        <Container>
            {posts &&
            <>
              <Typo>Свежие публикации</Typo>
              <Posts posts={posts}/>
            </>
            }
            {post && <>
              <Typo>Последний просмотренный пост</Typo>
              <Posts posts={[post]}/>
            </>
            }
        </Container>
    </>
}
  


