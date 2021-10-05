import logo from './logo.svg';
import './App.css';
import { Text, Title, Card, List } from './components';
import { Avatar } from './components';

import dayjs from 'dayjs'



function App() {
  return (
    <div className="App">
      <div>
        <div><Title color='oppositewhite' size='title1'>TITOLO</Title></div>
        <div><Avatar /></div>
      </div>
      <Text>default</Text>
      <div>
        <List days={[dayjs().format(), dayjs().add(1, 'day').format()]} />
      </div>

      <Card backgroundColor='first'>
        <Avatar />
        <Text color='primary' size='title'>title1</Text>
        <Text color='secondary' size='caption'>caption2</Text>
      </Card>

      
    </div>
  );
}

export default App;
