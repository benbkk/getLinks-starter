import React, { Component } from 'react';
import getContent from './api';

class ContentGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [],
        }
    }

    async ComponentDidMount() {
        try {
            const response = await getContent();
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            
            this.setState({
                contents: json,
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { contents } = this.state;
        console.log(contents);
        return (
            <section className="content">
                <div className="container">
                    {contents.map((content, i) => (
                        <li
                            key={i}
                            >
                                {content}
                            </li>
                            
                    ))}
                </div>
            </section>

        )
    }
};

export default ContentGrid;