export const increaseVote = (id) => {
  console.log('in action creator')
  return {
    type: 'INCREASE_VOTE',
    payload: {
      id
    }
  }
}

export const decreaseVote = (id) => {
  return {
    type: 'DECREASE_VOTE',
    payload: {
      id
    }
  }
}
