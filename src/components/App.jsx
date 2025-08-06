import './App.css';
import Profile from './Profile/Profile';
import userData from '../userData.json';
import friends from "../friends.json";
import FriendList from './FriendList/FriendList';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
