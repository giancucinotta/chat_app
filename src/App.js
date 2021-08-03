import { ChatEngine } from 'react-chat-engine';

import MyComponent from './components/Vanta';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <MyComponent />

    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <div className='logged-container'>
            <div>
            <button className='logout-btn' onClick={handleClick}>LogOut</button>
            </div>
            <ChatEngine
                height="100vh"
                projectID="aa5a6a06-fb21-4251-a348-8f4fe461449a"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            />
        </div>
    );
}

export default App;