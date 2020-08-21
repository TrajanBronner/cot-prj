import React, {useState} from 'react';
import './App.css';
import PostView from './Views/PostView';
import UserView from './Views/UserView';

enum allView {
    Users = 'users',
    Posts = 'posts',
}


const App = () => {

    const [displayedView, setDisplayedView] = useState(allView.Users);

    const selectView = (view: allView) => {
        setDisplayedView(view);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div>
                    <span className={`m ${displayedView === allView.Posts ? 'bold' : ''} `}
                          onClick={() => selectView(allView.Posts)}>Posts</span>

                    <span className={`m ${displayedView === allView.Users ? 'bold' : ''} `}
                          onClick={() => selectView(allView.Users)}>Users</span>
                </div>
            </header>

            {displayedView === allView.Posts && <PostView/>}

            {displayedView === allView.Users && <UserView/>}

        </div>
    );
};

export default App;
