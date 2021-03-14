import React, { useEffect, useState } from 'react';
import Card from './Card';
import { GetNews } from '../../api/News';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;

export default function News() {
    const [news, setNews] = useState([]);
    useEffect(() => {
        (async function storeInState() {
            const fetchedData = await GetNews;
            setNews(fetchedData);
        })();
    }, []);

    return <Wrapper></Wrapper>;
}
