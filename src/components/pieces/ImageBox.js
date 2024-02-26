import React from 'react';
import { Box } from '@mui/material';

function ImageBox({ logoSrc, altText }) {
    return (
        <Box
            component="img"
            sx={{
                width: { xs: '43px', md: 'auto' }, // Ajuste do width para tela xs e md
                height: '50px',
                display: 'flex',
                marginRight: '2vw',
            }}
            alt={altText}
            src={logoSrc}
        />
    );
}

export default ImageBox;
