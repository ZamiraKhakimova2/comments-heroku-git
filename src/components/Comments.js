import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Comment from "./Comment";
import { loadingComments} from "../redux/actions";


function Comments() {

    const comments = useSelector(state => state.comments);

    const loading = useSelector(state => state.loading)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadingComments())

    }, [])

    return (
        (loading ? 'Идет загрузка...' :
            (comments.map(comment => {
                return (
                    <Comment key={comment.id} comment={comment}/>
                )
            }))
      )
    )
};

export default Comments;