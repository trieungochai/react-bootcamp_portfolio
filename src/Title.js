import React from 'react';

const TITLES = [
    'ソフトウェアエンジニア',
    'メカニカルエンジニア',
    '音楽愛好家',
    '熱心な学習者',
    '冒険者',
];

class Title extends React.Component {
    state = {
        titleIndex: 0,
    };

    componentDidMount = () => {
        // console.log('Title component has mounted');
        this.animateTitles();
    };

    componentWillUnmount = () => {
        // console.log('Title component has unmounted');
        clearInterval(this.titleInterval);
    };

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex: titleIndex});
        }, 3000);
    };

    render() {
        const title = TITLES[this.state.titleIndex]
        return (
            <p>{title}</p>
        );
    };
};

export default Title;