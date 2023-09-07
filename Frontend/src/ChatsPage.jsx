
// React-chat-engine-advanced
// import { MultiChatSocket , MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic(
//         '7df2ccc7-6a57-42a3-970a-94f5dcdb6232',
//         props.user.username,
//         props.user.secret);

//     return (<div style={{ height: '100vh' }}>
//         <MultiChatWindow {...chatProps} style={{height: '100%'}} />
//         <MultiChatSocket {...chatProps} />

//     </div>)
// }

// export default ChatsPage;


import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

 const ChatsPage=(props) => {
     return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId='7df2ccc7-6a57-42a3-970a-94f5dcdb6232'
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />
    </div>
  );
 }
export default ChatsPage;