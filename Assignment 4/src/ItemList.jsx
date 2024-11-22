import Item from './Item';

function ItemList ({ items, removeitem }) {
  return (
    <ul>
       {items.map((item, index) => (
        <Item key={index} item={item} removeitem={() => removeitem(index)} />
      ))}
    </ul>
     
   
  );
};

export default ItemList;