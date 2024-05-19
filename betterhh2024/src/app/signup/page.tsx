import { signup } from './actions'

export default function LoginPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#141416]">
            <img src="Group 8.png" alt="Logo" className="max-w-[180px] max-h-[180px]" />
            <form className=" p-8 rounded-lg shadow-md w-full max-w-sm">
                <div className="mb-4">
                    <label htmlFor="first_name" className="block text-gray-700 font-bold mb-2">Name:</label>
                    <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        required
                    />
                </div>
                <div className="">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Wallet Address:</label>
                    <input
                        id="wallet_address"
                        name="wallet_address"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded text-black"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    formAction={signup}
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
