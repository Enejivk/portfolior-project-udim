import { debtors } from '../allIcon'; // Assuming 'debtors' is imported correctly
import './DebtorList.css';
import React, { useState } from 'react';

            <h1></h1>
const ViewDetails = ({ details, onTouch }) => {
    return (
        <div className='debtor-details'>
            <h1 onClick={onTouch} className='debtor-view-more-close'>X</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((detail, index) => (
                        <tr key={index}>
                            <td>{detail.date}</td>
                            <td>{"$" + detail.amount}</td>
                            <td>{detail.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const DebtorList = () => {
    const [showDetails, setShowDetails] = useState(null);

    const toggleDetails = (index) => {
        setShowDetails(showDetails === index ? null : index);
    };

    return (
        <table className='finance'>
            <thead>
                <tr>
                    <th>Member</th>
                    <th colSpan="6">Total Amount</th>
                </tr>
            </thead>
            <tbody>
                {debtors.map((member, index) => (
                    <tr key={index}>
                        <td className='tableNameImage'>
                            <img src={member.profile_picture} alt={member.name} />
                            {member.name}
                        </td>
                        <td>
                            {'$'+ member.details.reduce((total, detail) => total + detail.amount, 0)}
                            <br />
                            <button onClick={() => toggleDetails(index)}>View Details</button>
                        </td>
                        <td colSpan="5">
                            {showDetails === index && <ViewDetails details={member.details} onTouch={toggleDetails} />}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DebtorList;
