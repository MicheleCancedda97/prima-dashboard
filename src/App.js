import logo from './logo.svg';
import './App.css';
import { Text, Title, Card, List } from './components';
import { Avatar } from './components';
import dayjs from 'dayjs';
import Cards from './components/Cards';



function App() {
  return (
    <div className="App">
      <div>
        <div><Title color='oppositewhite' size='title1'>TITOLO</Title></div>
        <div><Avatar /></div>
      </div>
      <Text>default</Text>

      <List days={[dayjs().format(), dayjs().add(1, 'day').format()]} />
      <Cards items={[{ name: 'Andrea', caption: 'dddd', color:'sehhcondhfhf'}, { name: 'Piero',caption:'provaaa', color:'first' }, { name: 'Michele' }]} />
    </div> 
  )
}

export default App;
