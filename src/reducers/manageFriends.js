export function manageFriends(state={friends: []}, action){
  // let {name, hometown, id} = action.friend
// const added = () => {
//   state.friends.push(action.payload
//   return state.friends)
// }

  //
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter(f => f.id !== action.id)}
    default:
      return state
  }

}
