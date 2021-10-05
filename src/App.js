import logo from './logo.svg';
import './App.css';
import { Text, Title, Card, List } from './components';
import { Avatar } from './components';



function App() {
  return (
    <div className="App">
      <Card backgroundColor='first'>
        <Title color='oppositewhite' size='title1'>TITOLO</Title>
      </Card>
      <Text>default</Text>
      <List days={['1', '2', '3']} />
      <Card backgroundColor='first'>
        <Avatar />
        <Text color='primary' size='title'>title1</Text>
        <Text color='secondary' size='caption'>caption2</Text>
      </Card>
      <Card backgroundColor='first'>
        <Avatar />
        <Text color='primary' size='title'>title1</Text>
        <Text color='secondary' size='caption'>caption2</Text>
      </Card>
    </div>
  );
}

export default App;
