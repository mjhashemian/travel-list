
import Logo from './components/logo';
import Form from './components/form';
import PackingList from './components/packingList';
import Stats from './components/stats';
import { useState } from 'react';

function App() {
  const [description, setDiscription] = useState("")
  const [items, setItems] = useState([])

  function handleDescription(description) {
    setDiscription(description)
  }

  function handleItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    console.log(id)
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  function handleClearList() {
    const confirm = window.confirm(
      "are you sure you want to delete all items"
    )
   if(confirm) setItems([])
  }
  return (<>
    <Logo />
    <Form description={description} setDiscription={handleDescription} onAddItems={handleItems} />
    <PackingList onClear={handleClearList} onToggleItem={handleToggleItem} items={items} onDeleteItem={handleDeleteItem} />
    <Stats items={items} />
  </>
  );
}

export default App;
