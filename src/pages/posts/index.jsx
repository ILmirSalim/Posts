import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/UI components/container";
import { Posts } from '../../components/Posts/';
import { Typo } from "../../components/UI components/Typo";
import Loader from "../../components/UI components/Loader/loader";
import {  getPostsPagin, sortByInputPost, sortPostBySelect} from "../../redux/slices/postsSlice";
import { Pagination } from "../../components/Pagination";
// import { Filter } from "../../components/Filter";
// import {Input} from '../../components/UI components/Input/index'
// import * as SC from './styles'

export const PostsPage = () => {

  const {list, loading, } = useSelector((state) => state.posts.posts)
  
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  
  const paginNumbersPage = [1,2,3,4,5,6,7,8,9,10]

  const changeCurrentPage = (page) => {
      setCurrentPage(page)
      dispatch(getPostsPagin(currentPage))
  }
  
  useEffect(()=>{
    if (!list) {
          dispatch(getPostsPagin(currentPage))
        }
    
  }, [currentPage, list, dispatch])

  if (!list && loading) {
    return <Loader/>
  }
  
  if (!list) {
    return <>404</>
  }

  // const selectByFilterName = (event) => {
    
  //   if (event.target.value==="0") {
  //     dispatch(getPostsPagin(currentPage))
    
  //   } else if (event.target.value==="1") {
  //       dispatch(sortPostBySelect())
  //   }
  // }

  //   const filterByInputValue = (value) => {
  //     dispatch(sortByInputPost(value))
  //   }
    
  return <Container>
    <Typo>Публикации</Typo>
    {/* <Filter selectByFilterName={selectByFilterName}/>
    <SC.Wrapper><Input  onChange={(event) => filterByInputValue(event.target.value)}/></SC.Wrapper> */}
    <Posts posts={list}/>
    <Pagination changeCurrentPage={changeCurrentPage}
    currentPage={currentPage}
    paginNumbersPage={paginNumbersPage}/>
  </Container>
}

