import React, {useState, useEffect} from 'react';
import {PostList} from './components/Posts';
import {CommentList} from './components/Comments';
import {AlbumList} from './components/Albums';
import {PhotoList} from './components/Photos';
import {TodoList} from './components/Todos';
import {UserList} from './components/Users';
import {Tabs} from './components/Tab';


const urlBuilder = (resource) => `https://jsonplaceholder.typicode.com/${resource}`

function App() {
    const onTabChangeHandler = (tab) => {
        if (tab !== selectedTab) {
            setSelectedTab(tab);
            setList([])
        }
    }

    const tabs = [
            {title: 'posts', clickHandler: () => onTabChangeHandler ('posts')},
            {title: 'comments', clickHandler: () => onTabChangeHandler ('comments') },
            {title: 'albums', clickHandler: () => onTabChangeHandler ('albums')},
            {title: 'photos',clickHandler: () => onTabChangeHandler ('photos')},
            {title: 'todos', clickHandler: () => onTabChangeHandler ('todos') },
            {title: 'users', clickHandler: () => onTabChangeHandler ('users') },
    ];

    const [selectedTab, setSelectedTab] = useState(tabs[0].title)
    const [list, setList] = useState([]);

    const fetchData = async () => {
        const response = await  fetch (urlBuilder(selectedTab));
        const data = await response.json();
        console.log(selectedTab, data)
        setList(data);
    }

    useEffect( () => {
        fetchData();
    }, [selectedTab])


    return (
        <>

            <Tabs tabs ={tabs} selectedTab={selectedTab}/>


            {selectedTab === 'posts' && <PostList posts={list}/>}
            {selectedTab === 'comments' && <CommentList comments={list}/>}
            {selectedTab === 'albums' && <AlbumList albums={list} />}
            {selectedTab === 'photos' && <PhotoList photos={list} />}
            {selectedTab === 'todos' && <TodoList todos={list} />}
            {selectedTab === 'users' && <UserList users={list} />}

        </>
  );
}

export default App;
