import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { articles } from './articles';
import Header from 'components/common/Header';

const TimelineSection = () => {
  const theme = useTheme();

  return (
    <Box
      component='section'
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth='md'>
        <Typography
          variant='h4'
          component='h2'
          align='center'
          sx={{
            fontWeight: 600,
            color: theme.palette.text.primary,
            mb: { xs: 6, md: 8 },
          }}
        >
          Project Timeline
        </Typography>

        <Box
          sx={{
            position: 'relative',
            ml: { xs: 2, sm: 4 },
            '&::before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '2px',
              bgcolor: theme.palette.divider,
            },
          }}
        >
          {articles.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                pl: { xs: 3, sm: 5 },
                mb: index !== articles.length - 1 ? 6 : 0,
              }}
            >
              {/* Marker */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '-6px',
                  top: '4px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  bgcolor: theme.palette.primary.main,
                  border: `2px solid ${theme.palette.background.default}`,
                }}
              />

                <Header>{item.title}</Header>
        </Box>
      </Container>
    </Box>
  );
};

export default TimelineSection;
