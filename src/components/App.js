import React from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/Spike.png';
import Title from './Title';
import Jokes from './Jokes';

class App extends React.Component {
    state = {
        displayBio: false,
    }
    
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    };

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>もしもし！</h1>
                <p>trieungochaiと申します。</p>
                <Title />
                <p>有意義なプロジェクトに取り組むことを心から楽しみにしています。</p>
                {this.state.displayBio
                    ? (
                       <div>
                            <p>HCMに住んでいて、毎日コーディングしています。</p>
                            <p>好きなプログラミング言語はJSで、ReactJSは素晴らしいと思います。</p>
                            <p>こちらこそよろしくお願いします。</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                      )
                    : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More...</button>
                        </div>
                      )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles/>
                <hr />
                <Jokes />
            </div>
        );  
    };
};

export default App;