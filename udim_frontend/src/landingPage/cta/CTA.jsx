import { Link } from 'react-router-dom'
import './CTA.css'


const CTA = () => {
    return (
        <section className="call-to-action-section">
            <h2>Register today & start exploring the endless possibilities.</h2>
            <Link to='/singUp'><button>Get Started</button></Link>
        </section>
    )
}

export default CTA
