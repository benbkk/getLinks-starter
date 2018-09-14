import React, { Component } from 'react';
import styled from 'react-emotion';
import ContentItem from './ContentItem';
import getContent from './api';

const Main = styled('section')`
    padding: 32px 0;
`;
class ContentGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: [],
        };
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
                        <div className="col-12 text-center my-5">
                            <h1 className="display-5 mb-4">Finibus Bonorum et Malorum</h1>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                        </div>
                    </div>
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
