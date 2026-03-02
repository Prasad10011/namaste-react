import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  
  const dispatch = useDispatch();
  const handleAddItem = (item)=>{
    dispatch(addItem(item));
  }

  return (
    <>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <span className="py-2">{item.card.info.name} - </span>
            <span>{item.card.info.price / 100}</span>
            <p>{item.card.info.description}</p>
          </div>
          <div className="w-3-12">
            <button className="m-2 p-2 bg-white shadow-lg" type="button" onClick={()=>handleAddItem(item)}>Add+</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
