import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "../../components/ui-components/container/index";
import { logout } from "../../redux/slices/authSlice";
import { getPostsPagin, sortByInputPost, sortPostBySelect } from "../../redux/slices/postsSlice";
import { Filter } from "../Filter";
import { Button } from "../ui-components/Button";
import * as SC from "./styles";

export const Root = () => {

  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClickExitBtn = () => {
    dispatch(logout())
    navigate('/auth')
  }

  const selectByFilterName = (event, currentPage) => {

    if (event.target.value === "0") {
      dispatch(getPostsPagin(currentPage))
      return
    }

    dispatch(sortPostBySelect())
  }

  const filterByInputValue = (event) => {
    dispatch(sortByInputPost(event.target.value))
  }

  return (<>
    <Container>
      <SC.Menu>
        <SC.MenuItem to="/">Главная страница</SC.MenuItem>
        <SC.MenuItem to="posts">Список постов</SC.MenuItem>
        {user && <SC.MenuItem to="/posts/add">Добавление поста</SC.MenuItem>}
        {!user && <SC.MenuItem to="auth">Авторизация</SC.MenuItem>}
        {!user && <SC.MenuItem to="registration">Регистрация</SC.MenuItem>}
        {user && <Button onClick={onClickExitBtn}>Выход</Button>}
      </SC.Menu>

      <Filter selectByFilterName={selectByFilterName} filterByInputValue={filterByInputValue} />

      <Outlet />
    </Container>
  </>)
}