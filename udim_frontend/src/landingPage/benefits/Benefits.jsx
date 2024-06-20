import './Benefits.css'
import { benefitData } from "../data"


const BenefitsItems = ({ id, heading, paragraph, image }) => {
    return <div className={`benefits-item ${id}`}>
        <div className="benefit-image">
            <img src={image} alt="" className='imag'/>
        </div>
        <div className="benefit-section-text">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    </div>
}

const Benefits = () => {
    return (
        <section className="benefit-section" id='benefit-section'>
            <h1>why chose us</h1>

            <div className="benefit-item-container">
                {benefitData.map((benefitDataItem) => {
                    const { id, heading, paragraph, image } = benefitDataItem
                    return <BenefitsItems 
                    key={id}
                    id={id}
                    heading={heading}
                    paragraph={paragraph}
                    image={image}
                    />
                })}                
            </div>
        </section>
    )
}

export default Benefits
