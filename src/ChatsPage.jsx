import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage= (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="ecda0856-0a32-4aeb-b6d8-6dd54f68e958"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage