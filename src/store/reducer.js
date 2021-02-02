import watchList from '../watchList';
const initialState = {
    watchList: watchList,
}


export const reducer = (state=initialState, action) => {
    switch (action.type) {
     
        default:
            return state;
    }
   
}

export default reducer;