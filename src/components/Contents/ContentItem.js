import React from 'react';
import styled from 'react-emotion';

export default (props) => {
    const { content } = props;

    const Article = styled('article')`
        margin-bottom: 36px;
        transform: scale(1) translateY(0px);
        transition: transform 0.1s linear;

        &:hover {
            transform: scale(1.05) translateY(-9px);
        }
    `;

    const P = styled('p')`
        font-size: 14px;
        line-height: 1.25;
    `;

    const H3 = styled('h3')`
        font-size: 20px;
        line-height: 1.2;
        font-weight: 700;
        text-transform: capitalize;
    `;

    const ImageCaption = styled('figcaption')`
        height: 100px;
        padding: 9px 18px;
    `;

    const InnerWrapper = styled('div')`
        background-color: white;
        box-shadow: 0 6px 15px rgba(36,37,38,0.08);
        cursor: pointer;
        border-radius: 16px;
        overflow: hidden;
        &:after {
            box-shadow: 0 6px 15px rgba(36,37,38,0.08);
            opacity: 0;
            transition: opacity 0.25s ease, transform 0.25s ease;
        } 
        &:hover {
            &:after {
                opacity: 1;
            }
               
        }
    `;

    const Img = styled('img')`
        border-radius: 16px 16px 0 0;
        -webkit-filter: grayscale(90%); /* Safari 6.0 - 9.0 */
        filter: grayscale(90%);
        transition: filter 0.2s ease-in-out;

        &:hover {
            -webkit-filter: grayscale(0%);
            filter: grayscale(0%);
        }
    `;

    const titleText = content.title
        .split(' ')
        .slice(0, 2)
        .join(' ');

    return (
        <Article className="col-lg-3 col-md-4 col-6">
            <InnerWrapper className="inner-wrapper">
                <figure className="article-thumbnail">
                    <Img src={content.url} className="img-fluid" />
                    <ImageCaption>
                        <H3 className="h4">{titleText}</H3>
                        <P>{content.title}</P>
                    </ImageCaption>
                </figure>
            </InnerWrapper>

        </Article>
    );
};
