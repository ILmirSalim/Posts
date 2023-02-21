import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../../components/container";
import { Link } from "../../../components/Link";
import { Typo } from "../../../components/Typo";
import { useSelector, useDispatch } from "react-redux";
import * as SC from './styled'
import { getPost } from "../../../redux/slices/postsSlice";

export const DetailPostPage = () => {

    const {id} = useParams()
    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getPost(Number(id)))
    }, [id])

    if (!postForView) {
        return <>Пост не найден</>
    }
    return <Container>
        <Typo>{postForView.title}</Typo>
        <SC.Image src={postForView.image} alt={postForView.title} />
        <SC.Text>{postForView.text}</SC.Text>
        <Link to='/posts/'>Вернуться к постам</Link>
    </Container>

}