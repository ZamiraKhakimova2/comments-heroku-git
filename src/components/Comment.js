import React from 'react';
import {checkComment, removeComment} from "../redux/actions";
import {useDispatch} from "react-redux";


function Comment({comment}) {

    const dispatch = useDispatch();


    const handleDelete = (id) => {
        dispatch(removeComment(id))
    }
    const handleCheck = (id, completed) => {
        dispatch(checkComment(id, completed))
    }

    return (
        <div className='comment'>
            <div className='check-email'>
              <input className='check'
                type='checkbox'
                checked={comment.completed}
                onChange={() => handleCheck(comment.id, comment.completed)}/>

              <div className='email'>
                {comment.email}
              </div>
            </div>
            <div className='body-btn'>
                <div className='body'>
                {comment.body}
                </div>
                <div className='btn'>
                    <button onClick={() => handleDelete(comment.id)}
                            disabled={comment.deleting}>
                        Удалить
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Comment;