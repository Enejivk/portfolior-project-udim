import './Hero.css'
import heroImage from '../../assets/heroImage.jpg'
const Hero = () => {
    return (
        <section className='hero-section'>
            <div className="hero-section-text-content">
                <h1>Support Each Other, Reach Your Goals Faster!
                </h1>
                <p>Are you tired of complicated group fundraising and keeping track of shared expenses? We've got you covered Introducing UDIM, a platform to manage group donations, savings, and member debts.</p>
            </div>
            <div className="hero-section-image">
                <img src={heroImage} alt="" />
            </div>

        </section>
    )
}

export default Hero
