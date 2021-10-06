import logo from './logo.svg';
import './App.css';
import { Text, Title, Card, List, Badge } from './components';
import { Avatar } from './components';
import dayjs from 'dayjs';
import Cards from './components/Cards';


const now = new Date();
const nextWeek = now * 1 + 7 * 24 * 3600 * 1000;

function getDates(d1, d2) {
  var oneDay = 24 * 3600 * 1000;
  for (var d = [], ms = d1 * 1, last = d2 * 1; ms < last; ms += oneDay) {
    d.push(new Date(ms));
  }

  return d;
}

const mock = [
  { name: 'Andrea', caption: 'dddd', color: 'secondary', image: 'https://randomuser.me/api/portraits/men/46.jpg' },
  { name: 'Piero', caption: 'provaaa', color: 'primary', image: 'https://randomuser.me/api/portraits/men/47.jpg' },
  { name: 'Michele', caption: 'weee', color: 'thertiary', image: 'https://randomuser.me/api/portraits/men/48.jpg' }
]

//style={{position: 'relative', }}
function App() {
  return (
    <div className="App">

      <div><Title color='oppositewhite' size='title1'>TITOLO</Title></div>

      
        <div >
          <Badge value={10}>
            <Avatar src='https://randomuser.me/api/portraits/men/46.jpg'></Avatar>
          </Badge>
        </div>
        
        
      

      <Text>default</Text>


      <List days={getDates(now, nextWeek)} />

      <Cards items={mock} />


    </div>
  )
}

export default App;
