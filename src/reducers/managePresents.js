export function managePresents(state={numberOfPresents: 0}, action){
  switch (action.type) {
    case 'INCREASE':
      state = {...state, numberOfPresents: state.numberOfPresents + 1}
      return state;
    default:
      return state;
  }
}
