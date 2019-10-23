export function manageFriends(state={friends: []}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      state = {...state, friends: [...state.friends, action.friend]};
      return state;
    case 'REMOVE_FRIEND':
      const newFriends = state.friends.filter(friend => friend.id !== action.id)
      state = {...state, friends: newFriends};
      return state;
    default:
      return state;
  }
}
