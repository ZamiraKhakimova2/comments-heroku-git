const initialState = {
    comments: [],
    loading: false,

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'comments/load/start' :
            return {
                ...state,
                loading: true
            }

        case 'comments/load/success' :
            return {
                ...state,
                comments: action.payload,
                loading: false
            }

        case 'comments/check/start' :
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment.id === action.payload) {
                        return {
                            ...comment,
                            checking: true
                        }
                    }
                    return comment;
                })
            }

        case 'comments/check/success' :
            return {
                ...state,
                comments: state.comments.map((comment) => {
                    if (comment.id === action.payload) {
                        return {
                            ...comment,
                            completed: !comment.completed,
                            checking: false
                        }
                    }
                    return comment;
                })
            }

        case 'comments/remove/start' :
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment.id === action.payload) {
                        return {
                            ...comment,
                            deleting: true
                        }
                    }
                    return comment;
                })
            }

        case 'comments/remove/success' :
            return {
                ...state,
                comments: state.comments.filter((comment) => comment.id !== action.payload)
            }
        default:
            return state;
    }
}

export default reducer;