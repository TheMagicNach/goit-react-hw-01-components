import { Profile } from './Profile/profile'
import { Statistics } from './Statistic/Statistics';
import { Friends } from './Friends/Friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import friends from './json/friends.json';
import user from './json/user.json';
import data from './json/data.json';
import transactions from './json/transactions.json';

export const App = () => {
  return (
    <div>   
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
  
};
