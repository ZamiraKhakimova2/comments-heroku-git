export const loadingComments = () => {
    return function (dispatch) {
        dispatch({type: 'comments/load/start'});

        fetch('http://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'comments/load/success',
                    payload: json
                });
            });
    };
};
export const removeComment = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'comments/remove/start',
            payload: id
        })
        fetch('http://jsonplaceholder.typicode.com/comments', {
            method: 'delete'
        })
            .then((response) => response.json())
            .then((json) => {
                dispatch({
                    type: 'comments/remove/success',
                    payload: id })
            })
    }
};
export const checkComment = (id, completed) => {
    return function (dispatch) {
        dispatch({
            type: 'comments/check/start',
            payload: id
        })
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({completed: !completed}),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then(() => {
                dispatch({
                    type: 'comments/check/success',
                    payload: id
                })
            })
    }
}
