import { useState } from "react";
import Item from "./item";


const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
];



const PackingList = ({ items, onDeleteItem, onToggleItem ,onClear }) => {
    const [sort, setSort] = useState("input")

    let sortedItems;

    if (sort === "input") sortedItems = items

    if (sort === "desciption") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description))

    if (sort === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))

    return (<>
        <div className="list">
            <ul>
                {
                    sortedItems.map((item) => <Item item={item} onToggleItem={onToggleItem} onDeleteItem={onDeleteItem} key={item.id} />)
                }

            </ul>
            <div className="action">
                <select value={sort} onChange={(e) => setSort(e.target.value)} >
                    <option value="input">SORT BY INPUT ORDER</option>
                    <option value="desciption">SORT BY DESCRIPTION ORDER</option>
                    <option value="packed">SORT BY PACKED ORDER</option>
                </select>
                <button onClick={onClear} >clear list</button>
            </div>
        </div>
    </>
    );
}

export default PackingList;


