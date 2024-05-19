
import { signup } from './actions'

export default function LoginPage() {
    return (
        <form>
            <label htmlFor="first_name">Name:</label>
            <input id="first_name" name="first_name" type="text" required />
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={signup}>Sign up</button>
        </form>
    )
}