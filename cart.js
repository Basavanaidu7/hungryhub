export default function Cart({ cart }) {
    return (
        <div>
            <h2>Your Cart</h2>
            {cart.map((item, i) => (
                <p key={i}>{item.name} - ₹{item.price}</p>
            ))}
        </div>
    );
}