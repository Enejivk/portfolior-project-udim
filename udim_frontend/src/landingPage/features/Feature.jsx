import { featureData } from '../data'
import './Features.css'

const FeatureItem = ({ Icon, heading, paragraph }) => (
    <div className="feature-item">
        <Icon fontSize='100' />
        <h2>{heading}</h2>
        <p>{paragraph}</p>
    </div>
)

const Feature = () => {
    return (
        <section className="feature-section">
            <h1>What we Offer</h1>
            <div className="feature-item-container">
                {featureData.map((item) => {
                    const { id, heading, paragraph, icon } = item
                    return <FeatureItem
                        id={id}
                        key={id}
                        heading={heading}
                        paragraph={paragraph}
                        Icon={icon}
                    />
                })}
            </div>
        </section>
    )
}
export default Feature