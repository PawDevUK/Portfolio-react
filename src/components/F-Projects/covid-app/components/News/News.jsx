import React, { useEffect, useState } from 'react';
// import { GetNews } from '../API';
import styled from 'styled-components';
import Card from './Card';

const Wrapper = styled.div`
    width: 100%;
    margin-bottom: 20px;
`;

export default function News() {
    const [news, setNews] = useState([]);
    // useEffect(() => {
    //     (async function storeInState() {
    //         const fetchedData = await GetNews;
    //         setNews(fetchedData.data);
    //     })();
    // }, []);

    return (
        <Wrapper>
            {news.map((article) => {
                return <Card src={article.media} country={article.country} title={article.title} summary={article.summary} author={article.author} link={article.link}></Card>;
            })}
        </Wrapper>
    );
}
