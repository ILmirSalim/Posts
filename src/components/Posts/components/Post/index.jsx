import React from "react";
import * as SC from './styles'

export const Post = ({post}) => (<SC.Post>
    <SC.Image src={post.image} alt={post.title}/>
        
    <SC.Title>{post.title}</SC.Title>
    <SC.DatailLink to={`/posts/${post.id}`}>Читать далее...</SC.DatailLink>
</SC.Post>)