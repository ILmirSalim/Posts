import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../container";
import * as SC from "./styles";

export const Root = () => <>
    <Container>
        <SC.Menu>
            <SC.MenuItem to="/">Главная страница</SC.MenuItem>
            <SC.MenuItem to="posts">Список постов</SC.MenuItem>
            <SC.MenuItem to="/posts/add">Добавление поста</SC.MenuItem>
            <SC.MenuItem to="auth">Авторизация</SC.MenuItem>
            <SC.MenuItem to="registration">Регистрация</SC.MenuItem>
        </SC.Menu>
        <Outlet/>
    </Container>
</>