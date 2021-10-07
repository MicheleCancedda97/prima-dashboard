import './App.css';
import { List, Separator, Header } from './components';
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

function App() {
  return (
    <div className="App">
      <Header />
      <List days={getDates(now, nextWeek)} />
      <Separator />
      <Cards items={mock} />
    </div>
  )
}

export default App;
