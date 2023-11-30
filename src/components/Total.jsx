import {useGlobalContext} from './CartComponent'

function Total(){

    const totalQuantity = useGlobalContext();

    console.log("totalQuantity is ",totalQuantity)

    return(

        <div className="total-container">
        <div className="total-container-left">

        <div>TOTAL:</div>
        <div></div>
        </div>
        <div  className="total-container-right">
       
        <div>Total Quantity:{totalQuantity}</div>
        <div>$234</div>
        </div>
    </div>
    );
}

export default Total