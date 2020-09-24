import React from 'react';
import SOCIAL_PROFILES from './data/socialProfiles';

class SocialProfile extends React.Component {
    render() {

        const { link, image } = this.props.socialProfile;

        return (
            <span>
                <a href={link}>
                    <img src={image} alt='social-profile' style={{width: 35, height: 35, margin: 10}}/>
                </a>
            </span>
        );
    };
};

class SocialProfiles extends React.Component {
    render() {
        return (
            <div>
                <h2>Connect with me!</h2>
                {SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                    return (
                        <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
                    )
                })}
            </div>
        );
    };
};

export default SocialProfiles;