import React, { Component } from 'react';
import ContentItem from './ContentItem';
import getContent from './api';
import styled from 'react-emotion';

const Main = styled('section')`
    padding: 32px 0;
`;
class ContentGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [],
        }
    }

    async componentDidMount() {
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
        return (
            <Main className="content">
                <div className="container">
                    <div className="row">
                        {contents.map((content, i) => (
                            <ContentItem
                                key={i}
                                content={content}
                            />
                        ))}
                    </div>
                </div>
            </Main>
        );
    }
}

export default ContentGrid;
