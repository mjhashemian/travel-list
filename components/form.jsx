import { useRef, useState } from "react";

const Form = ({ onAddItems , setDiscription , description }) => {
    
    const [quantity, setQuantity] = useState(1)
    function handleSubmit(e) {

        e.preventDefault();
        const newItem = {
            description, quantity, packed: false, id: Date.now()
        }
        onAddItems(newItem)
    }

    return (<>

        <form className="add-form" onSubmit={handleSubmit}>
            <h3>what do you need for your 😍 trip ? </h3>
            <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => <option value={num} key={num}>
                    {num}
                </option>)}
            </select>
            <input  type="text" placeholder="item ..." value={description}
                onChange={(e) => setDiscription(e.target.value)}
            />
            <button  >add</button>
        </form>
    </>
    );
}

export default Form;