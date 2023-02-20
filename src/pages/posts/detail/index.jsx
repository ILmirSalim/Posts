import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../../components/container";
import { Link } from "../../../components/Link";
import { Typo } from "../../../components/Typo";
import { INITIAL_POSTS } from "../index";
import * as SC from './styled'

export const DetailPostPage = () => {
    const {id} = useParams()
    const currentPost = useMemo(() => INITIAL_POSTS.find((item) => item.id === Number(id)), [id]) 
    if (!currentPost) {
        <>Пост не найден</>
    }
    return <Container>
        <Typo>{currentPost.title}</Typo>
        <SC.Image src={currentPost.image} alt={currentPost.title} />
        <SC.Text>{currentPost.text}</SC.Text>
        <Link to='/posts/'>Вернуться к постам</Link>
    </Container>

}