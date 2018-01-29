export default (state = { isPinging: false }, action) => {
  console.log(action);
  switch (action.type) {
    case 'PING': return { isPinging: true };
    case 'PONG': return { isPinging: false };
    default: return state;
  }
};
