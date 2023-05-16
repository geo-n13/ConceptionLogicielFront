//import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useState, useEffect } from "react";
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function TitlebarBelowImageList() {
    let [dataArray, setDataArray] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                "https://f637133e-4072-4a10-98b8-382e7d8f6bd9.mock.pstmn.io/sites"
            );
            let parsed = await response.json();
            console.log(parsed)

            setDataArray(parsed);
        })();
    }, []);

    return (
        <ImageList sx={{ width: 350, height: 400 }}>
            {dataArray.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`}
                        srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`}
                        alt={item.name}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.name}
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
