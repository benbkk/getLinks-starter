import React from 'react';
import styled from 'react-emotion';
import { position, size } from 'polished';
import { mediaQueries } from 'css/variables';

export default (props) => {
    const { content } = props;

    const Article = styled('article')`
        margin-bottom: 27px;
        margin-left: auto;
        margin-right: auto;
        max-width: 280px;
        transform: scale(1);
        -webkit-filter: grayscale(90%);
        filter: grayscale(90%);
        transition: filter 0.1s, tranform 0.1s ease;

        ${mediaQueries.sm} {
            &:hover {
                transform: scale(1.1);
                -webkit-filter: grayscale(0%);
                filter: grayscale(0%);
            }
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
        backface-visibility: hidden;
        cursor: pointer;
        border-radius: 16px;
        position: relative;
        
        &:after {
            ${position('absolute', 0)};
            ${size('100%')};

            border-radius: 16px;
            content: '';
            display: block;
            opacity: 0;
            box-shadow: 0 0 20px rgba(36,37,38,0.1);
            transition: opacity 0.1s ease;
        }

        &:hover {
            -webkit-filter: grayscale(0);
            filter: grayscale(0);
            &:after {
                opacity: 1;
            }
        }
    `;

    const Img = styled('img')`
        border-radius: 16px 16px 0 0;
    `;

    const titleText = content.title
        .split(' ')
        .slice(0, 2)
        .join(' ');

    return (
        <Article className="col-lg-3 col-md-4 col-sm-6 col-xs-6 col-10">
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
