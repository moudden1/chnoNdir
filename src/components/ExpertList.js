import React from 'react';
import './ExpertList.css';
import imagewalid from './photo_Moudden.jpg'
const ExpertList = () => {
    const experts = [
        {
            name: 'Moudden Walid',
            title: 'Software Engineer',
            rating: 0,
            price: 450,
            currency: 'MAD',
            time: 30,
            description: 'Experienced software engineer with a background in developing scalable web applications.',
            img: imagewalid,
        },
        {
            name: 'Kerdad Brahim',
            title: 'Data Scientist',
            rating: 5,
            price: 250,
            currency: 'MAD',
            time: 90,
            description: 'Data scientist with expertise in machine learning, data analysis, and statistical modeling.',
            img: imagewalid,
        },
    ];

    return (
        <div className="expert-list">
            {experts.map((expert, index) => (
                <div className="expert-card" key={index}>
                    <img src={expert.img} alt={expert.name} className="expert-img" />
                    <div className="expert-info">
                        <h3 className="expert-name">{expert.name}</h3>
                        <p className="expert-title">{expert.title}</p>
                        <div className="expert-rating">
                            <span>{'⭐'.repeat(expert.rating)}</span>
                            <span>{` (${expert.rating} Commentaire)`}</span>
                        </div>
                        <div className="expert-price">
                            <span>{`${expert.price},00 ${expert.currency}`}</span>
                            <span>{` /${expert.time} minutes`}</span>
                        </div>
                        <p className="expert-description">
                            {expert.description.slice(0, 100)}... <a href="#">En savoir plus</a>
                        </p>
                    </div>
                    <div className="expert-actions">
                        <button className="consult-btn">Consulter maintenant</button>
                        <button className="profile-btn">Voir profile</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExpertList;
