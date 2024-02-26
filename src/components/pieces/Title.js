import React from 'react';
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';

const Title = ({ children }) => {
    const theme = useTheme();
    const isMobile = theme.breakpoints.values.xs <= theme.breakpoints.width;

    return (
        <Typography
            variant={isMobile ? "h5" : "h6"}
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
                mr: 2,
                display: 'flex',
                flexGrow: { xs: 1, md: 'unset' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: { xs: '.3rem', md: '0.1vw' },
                color:  'inherit',
                textDecoration: 'none',
            }}
        >
            {children}
        </Typography>
    );
};

export default Title;
