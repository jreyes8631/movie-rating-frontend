import {SUCCESSFULLY_CREATED_REVIEW} from '.'

export const createReview = (formData) => {
    return (dispatch) => {
        return fetch(`http://localhost:3001/reviews`, {
            method: 'POST',
            body: formData
        })

        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                return res.json().then(errors => Promise.reject(errors))
            }
        })
            
        .then(reviewJson => {
          dispatch({
              type: SUCCESSFULLY_CREATED_REVIEW,
              payload: reviewJson,
            })
        })
    }
}