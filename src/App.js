import React from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

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
                <h1>Hello!</h1>
                <p>I'm trieungochai - a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {this.state.displayBio
                    ? (
                        <div>
                            <p>I live in HCM, and code everyday.</p>
                            <p>My favorite language is JS, anh I think ReactJS is awesome.</p>
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
            </div>
        );
    };
};

export default App;