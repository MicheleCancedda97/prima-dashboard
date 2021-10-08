import '../App.css';
import { List, Separator, Header } from '../components';
import Cards from '../components/Cards';
import BackButton from './HomeButton';
import { React, useState } from 'react';

const now = new Date();
const ieri = now.getTime() - (1 * 24 * 3600 * 1000);
const nextWeek = now * 1 + 7 * 24 * 3600 * 1000;

function getDates(d1, d2) {
  var oneDay = 24 * 3600 * 1000;
  for (var d = [], ms = d1 * 1, last = d2 * 1; ms < last; ms += oneDay) {
    d.push(new Date(ms));
  }

  return d;
}

const mock = [
  { name: 'Andrea', caption: 'dddd', color: 'secondary',data:[
    {
        name: 'Page A',
        uv: 400,
        pv: 200,
        amt: 6000,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
]},
  { name: 'Piero', caption: 'provaaa', color: 'primary',
  data : [
    {
        name: 'Page A',
        uv: 600,
        pv: 700,
        amt: 6000,
    },
    {
        name: 'Page B',
        uv: 4000,
        pv: 4398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
]},
  { name: 'Michele', caption: 'weee', color: 'thertiary',
  data:[
    {
        name: 'Page A',
        uv: 300,
        pv: 500,
        amt: 6000,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 7680,
        pv: 3408,
        amt: 4200,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2590,
        pv: 3400,
        amt: 5600,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
]}
]



/**
 * 1 aggiungere uno stato a questo componente useState 
 * 2 cliccando sul giorno del calendario, cambia il titolo nella card con il giorno cliccato
 * 3 selezionare in rosso il giorno cliccato
 */

function Home() {
  const [selected, setSelected] = useState(now);

  return (
    <div className="App">
      <Header />
      <List
        days={getDates(ieri, nextWeek)}
        selected={selected}
        onSelectWeek={setSelected}
      />
      <Separator />
      <Cards selected={selected} items={mock}/>
    </div>
  )
}

export default Home;