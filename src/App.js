import logo from './logo.svg';
import './App.css';
import { Text, Title, Card, List } from './components';
import { Avatar } from './components';
import dayjs from 'dayjs';
import Cards from './components/Cards';

const mock = [
  { name: 'Andrea', caption: 'dddd', color: 'secondary', image: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { name: 'Piero', caption: 'provaaa', color: 'primary', image: 'https://randomuser.me/api/portraits/men/47.jpg' },
  { name: 'Michele', color: 'thertiary',image: 'https://randomuser.me/api/portraits/men/48.jpg' }
]


function App() {
  return (
    <div className="App">
      <div>
        <div><Title color='oppositewhite' size='title1'>TITOLO</Title></div>
        <div><Avatar src="https://randomuser.me/api/portraits/men/46.jpg" /></div>
      </div>
      <Text>default</Text>

      <List days={[dayjs().format(), dayjs().add(1, 'day').format()]} />
      <Cards items={mock} />
    </div>
  )
}

export default App;
