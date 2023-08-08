 const increment = () => {
    return {
        type: 'INC_COUNT'
     }
}
 const loading = () => {
    return {
        type: 'LOADING'
     }
}


export const incCount = () => {
    return dispatch => {
        dispatch(loading())

        setTimeout(() => {
          dispatch(increment())
        }, 1000)
      }
}