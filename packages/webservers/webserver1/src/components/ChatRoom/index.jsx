import Loadable from '../Loadable';
// import Users from './Users';
const ChatRoom = Loadable({
    loader: () => import(/* webpackChunkName: "chatroom" */ './chatroom'),
    // modules: ['./Users'],
    // webpack: () => [require.resolveWeak('./Users')]
});

export default ChatRoom;
