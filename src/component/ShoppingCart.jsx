import { useState } from "react";

export function ShoppingCart() {
    const [quantity, setQuantity] = useState(1);

    const price = 5000;

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const totalPrice = price * quantity;

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">

            <div className="bg-white w-96 p-6 rounded-2xl shadow-lg">

                <h2 className="text-2xl font-bold mb-5">
                    Shopping Cart
                </h2>

                <div className="flex items-center gap-4 mb-5">

                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                        🎧
                    </div>

                    <div>
                        <h3 className="font-bold text-lg">
                            Wireless Headphones
                        </h3>

                        <p className="text-gray-500">
                            Rs. {price}
                        </p>
                    </div>

                </div>

                <div className="flex items-center justify-between">

                    <span className="font-semibold">
                        Quantity
                    </span>

                    <div className="flex items-center gap-4">

                        <button
                            onClick={decreaseQuantity}
                            className="w-9 h-9 bg-gray-200 rounded-lg text-xl font-bold hover:bg-gray-300"
                        >
                            -
                        </button>

                        <span className="text-xl font-bold">
                            {quantity}
                        </span>

                        <button
                            onClick={increaseQuantity}
                            className="w-9 h-9 bg-black text-white rounded-lg text-xl font-bold hover:bg-gray-800"
                        >
                            +
                        </button>

                    </div>

                </div>

                <div className="border-t mt-6 pt-4 flex justify-between">

                    <span className="font-semibold">
                        Total
                    </span>

                    <span className="font-bold text-xl">
                        Rs. {totalPrice}
                    </span>

                </div>

            </div>

        </div>
    );
}