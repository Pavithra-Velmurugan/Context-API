import { createContext, useContext, useRef } from "react";
//import Total from './Total';

const products = [
  {
    id: 1,
    title: "The Magic Of The Lost Temple Book",
    description:
      "Are you a curious reader, ready to explore the depths of the magic hidden in the lost temple of Karnataka?",
    price: 175,
    discountPercentage: 10.5,
    rating: 4.6,
    stock: 50,
    brand: "Magic book",
    category: "Books",
    thumbnail: "https://m.media-amazon.com/images/I/81Y4Pte2a-L._SL1500_.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  },
  {
    id: 2,
    title: "Think and Grow Rich",
    description:
      "Both poverty and riches are the offspring of thought.? since its first publication in 1937, think and Grow Rich",
    price: 600,
    discountPercentage: 15.6,
    rating: 4.5,
    stock: 25,
    brand: "CENTURY EDITION",
    category: "Books",
    thumbnail: "https://m.media-amazon.com/images/I/711xMzVPIuL._SL1500_.jpg",
  },
  {
    id: 3,
    title: "How To Win Friends and Influence People",
    description:
      "If you have an intense desire and a keen determination to increase your ability to deal with people, this is the book for you",
    price: 1500,
    discountPercentage: 15.45,
    rating: 4.09,
    stock: 50,
    brand: "Rich books",
    category: "Books",
    thumbnail: "https://m.media-amazon.com/images/I/71wrQ0bR8+S._SL1500_.jpg",
  },
  {
    id: 4,
    title: "You Can",
    description:
      "Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life?",
    price: 590,
    discountPercentage: 16.91,
    rating: 4.5,
    stock: 75,
    brand: "Kindle Edition",
    category: "Books",
    thumbnail: "https://m.media-amazon.com/images/I/91HpCN8--FL._SL1500_.jpg",
  },
  {
    id: 5,
    title: "THE POWER OF YOUR SUBCONSCIOUS MIND",
    description:
      "As a man thinketh in his subconscious mind, so is he. Have you wondered why someone is joyous while another is miserable",
    price: 1055,
    discountPercentage: 10.9,
    rating: 4.81,
    stock: 60,
    brand: "Human Edition",
    category: "Books",
    thumbnail: "https://m.media-amazon.com/images/I/81bHacO1BQL._SL1500_.jpg",
  },
];

const TotalQuantityContext = createContext();
const TotalPriceContext = createContext();

export function PerProduct({
  product,
  setQuantity,
  setTotalQuantityContext,
  quantity,
  totalQuantity,
  totalPrice,
  setTotalPrice,
}) {
  const priceRef = useRef();

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
    setTotalQuantityContext(totalQuantity + Number(e.target.value));
    //  console.log("price value is ", priceRef.current.innerHTML.slice(1))
    setTotalPrice(totalPrice + Number(priceRef.current.innerHTML.slice(1)));
  };

  // console.log("quantity from cart page is ",quantity)
  // console.log("quantity context from cart page is ",totalQuantity)
  // console.log("Total price",totalPrice)
  return (
    <div className="cart-container">
      <div className="product-container">
        <div className="product-container-left">
          <div>
            <img src={product.thumbnail}></img>
          </div>
          <div>
            <h2>{product.title}</h2>
            <h3>{product.description}</h3>
            <h4>{product.brand}</h4>
            <h5>{product.category}</h5>
          </div>
        </div>
        <div className="product-container-right">
          <div>
            {/* onChange={(e)=>{quantityHandler(e)}} */}
            <select
              onChange={(e) => {
                quantityHandler(e);
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div>
            <span ref={priceRef}>${product.price * quantity} </span>
          </div>
        </div>
      </div>

      <hr></hr>
      <div className="subtotal-container">
        <div className="subtotal-container-left">
          <div style={{ color: "gray", fontSize: "10px" }}>SUBTOTAL:</div>
          <div style={{ color: "gray", fontSize: "10px" }}>SHIPPING:</div>
        </div>

        <div className="subtotal-container-right">
          <div>${product.price * quantity}</div>
          <div>FREE</div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

function CartComponent({
  quantity,
  setQuantity,
  totalQuantity,
  setTotalQuantityContext,
  totalPrice,
  setTotalPrice,
}) {
  return (
    <TotalQuantityContext.Provider value={totalQuantity}>
      <TotalPriceContext.Provider value={totalPrice}>
        <div>
          {products.map((pd, index) => (
            <PerProduct
              key={index}
              product={pd}
              setQuantity={setQuantity}
              setTotalQuantityContext={setTotalQuantityContext}
              quantity={quantity}
              totalQuantity={totalQuantity}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          ))}
          <Total />
        </div>
      </TotalPriceContext.Provider>
    </TotalQuantityContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(TotalQuantityContext);
};

export const useGlobalContextPrice = () => {
  return useContext(TotalPriceContext);
};

export function Total() {
  const totalQuantity = useGlobalContext();

  //  console.log("totalQuantity is ",totalQuantity)

  const totalPrice = useGlobalContextPrice();

  //  console.log("totalPrice is ",totalPrice)

  return (
    <div className="total-container">
      <div className="total-container-left">
        <div>TOTAL:</div>
        <div></div>
      </div>
      <div className="total-container-right">
        <div>Total Quantity:{totalQuantity}</div>
        <div>Total Price: ${totalPrice}</div>
      </div>
    </div>
  );
}

export default CartComponent;
