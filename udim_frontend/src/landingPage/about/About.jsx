
import { aboutData } from '../data'
import './About.css'

const AboutItems = ({ number, heading, paragraph }) => {
return <div className={`about-items`}>
        <h1>{number}</h1>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
    </div>
}

const About = () => {
    return (
        <section className="about-section" id='about-section'>
            <h1>About us</h1>
            <div className='about-items-container'>
                {aboutData.map((dataItem) => {
                    const { heading, number, paragraph } = dataItem
                    return < AboutItems
                        heading={heading}
                        number={number}
                        paragraph={paragraph}
                        key={heading} />
                })}
            </div>
            

        </section>
    )
}

export default About
