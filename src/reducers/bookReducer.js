export const bookReducer = (state, action) => {
    // state is the initial value, {} in this case
    // action is the value we set as "Pesho"
    // return {
    //     name: action
    // };
    switch (action.type) {
        case "BOOK_FETCH":
            return { ...action.payload };
        // returns a completely new references
        case "COMMENT_ADD":
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload, //this is action.comment
                        author: {
                            name: action.name
                        }
                    }
                ],
            };
        default: return state;
    }
};