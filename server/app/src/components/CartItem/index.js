import REACT from "react";
import { useCartContext } from "../../utils/CartState";


function CartItem(props) {
const { item, handleRemove } = props;
return (
    //display image here
    <tr>
        <td>
            <div className="image-container">
                <div className="img" style={{backgroundImage: `url(${item.image})`}}>

                </div>
            </div>
        </td>
        <td>
            <h5>{/*item name*/}</h5>
            <p>{/*description*/}</p>
        </td>
        <td>
            <input /> {/*Number of items*/}
            <p><button>Remove</button></p>
        </td>
    </tr>
);
};
export default CartItem;

