import { Profile } from "./Profile/Profile";
import user from 'user';
import { Statistic } from "./Statistic/Statistic";
import data from 'data'


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
  <Statistic title="Upload stats" stats={data} />

      
    </div>
    
  );
};
