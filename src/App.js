import Item from './components/Item';

const App = () => {
  return(
    <>
      <h1>Aplicaçõa com React</h1>
      <ul>
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>
      </ul>
    </>
  )
}

export default App;