import { useState } from "react";

export function Password() {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white w-96 p-8 rounded-2xl shadow-lg">

                <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                    Login
                </h2>

                <p className="text-gray-500 text-center mb-6">
                    Enter your password
                </p>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                </label>

                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        className="flex-1 px-4 py-3 outline-none"
                    />

                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="px-4 text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>

                </div>

                <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                    Login
                </button>

            </div>

        </div>
    );
}