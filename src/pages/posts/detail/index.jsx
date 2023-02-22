import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../../components/container";
import { Link } from "../../../components/Link";
import { Typo } from "../../../components/Typo";
import { useSelector, useDispatch } from "react-redux";
import * as SC from './styled'
import { getPostById } from "../../../redux/slices/postsSlice";
import Loader from "../../../Loader/loader"

export const DetailPostPage = () => {

    const {id} = useParams()

    const postForView = useSelector((state) => state.posts.postForView)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getPostById(Number(id)))
    }, [id])
    
    if (postForView.loading) {
        return <Container><Loader/></Container>
    }

    if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
        return <>Пост не найден</>
    }
    
    const {post} = postForView
    const image = post.image || 'https://mir-s3-cdn-cf.behance.net/projects/404/e249b959879647.Y3JvcCwxNTM3LDEyMDMsMTk3LDA.png'
    return <Container>
        <Typo>{post.title}</Typo>
        <SC.Image src={image} alt={post.title} />
        <SC.Text>{post.body}</SC.Text>
        <Link to='/posts/'>Вернуться к постам</Link>
    </Container>

}