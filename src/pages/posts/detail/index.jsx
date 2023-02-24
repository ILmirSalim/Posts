import React, { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "../../../components/UI components/container";
import { Link } from "../../../components/UI components/Link/index";
import { Typo } from "../../../components/UI components/Typo/index";
import { useSelector, useDispatch } from "react-redux";
import * as SC from './styled'
import { deletePost, getPostById, showPost } from "../../../redux/slices/postsSlice";
import Loader from "../../../components/UI components/Loader/loader"


export const DetailPostPage = () => {

    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {list} = useSelector((state) => state.posts.posts)
    const postForView = useSelector((state) => state.posts.postForView)

    const [postForDelete, setPostForDelete] = useState(null)

    const intId = Number(id)
    const findedPosts = list ? list.find((item) => item.id ===intId) : undefined
    useEffect(()=> {
        if (findedPosts) {
            dispatch(showPost(findedPosts))
        } else {
            dispatch(getPostById(intId))
        }
        
    }, [id, list, dispatch])
    
    if (postForView.loading) {
        return  <Container>
                    <Loader/>
                </Container>
    }

    if (!postForView.post || !postForView.post.hasOwnProperty('id')) {
        return <>Пост не найден</>
    }
    
    const onDeletePost = () => {
        dispatch(deletePost(postForDelete))
        setPostForDelete(null)
        navigate('/posts')

    }

    const {post} = postForView
    const image = post.image || 'https://mir-s3-cdn-cf.behance.net/projects/404/e249b959879647.Y3JvcCwxNTM3LDEyMDMsMTk3LDA.png'
    return <Container>
        {postForDelete && <SC.ModalWrapper>
            <SC.Modal>
                <SC.Modaltext>Вы точно уверены, что хотите удалить публикацию с ID - {postForDelete.id}?</SC.Modaltext>
                <SC.ModalContent>
                    <SC.DeleteButton onClick={onDeletePost} >Да</SC.DeleteButton>
                    <button onClick={() => setPostForDelete(null)}>Нет</button>
                </SC.ModalContent>
            </SC.Modal>
        </SC.ModalWrapper>}
        
        <Typo>{post.title}</Typo>
        <SC.Image src={image} alt={post.title} />
        <SC.Text>{post.body}</SC.Text>

        <SC.LinkWrapper>
            <Link to='/posts/'>Вернуться к постам</Link>
            {list && <Link to={`/posts/${post.id}/edit`}>Редактировать пост</Link>}
            {list && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить пост</SC.DeleteButton>}
        </SC.LinkWrapper>
        
    </Container>

}