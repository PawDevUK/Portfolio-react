import React, { useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { articles } from './articles';
import JumboSectionHeader from '../common/JumboSectionHeader';
import Header from 'components/common/Header';
import { P } from '../common/typography';

const TimelineSection = () => {
  const theme = useTheme();
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    if (!slider) return;

    slider.style.cursor = 'grabbing';
    slider.style.userSelect = 'none';

    let startY = e.pageY - slider.offsetTop;
    let scrollTop = slider.scrollTop;

    const handleMouseMove = (e) => {
      e.preventDefault();
      const y = e.pageY - slider.offsetTop;
      const walk = (y - startY) * 2;
      slider.scrollTop = scrollTop - walk;
    };

    const handleMouseUp = () => {
      slider.style.cursor = 'grab';
      slider.style.userSelect = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <Box
      component='section'
      sx={{
        backgroundColor: theme.palette.background.default,
        py: { xs: 2, md: 4 },
      }}
    >
      <JumboSectionHeader>Time Line</JumboSectionHeader>
      <Container maxWidth='md'>
        <Box
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          sx={{
            ml: { sm: 2 },
            pl: 1,
            maxHeight: '500px',
            overflowY: 'auto',
            overflowX: 'hidden',
            cursor: 'grab',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#f1f1f1',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#888',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#555',
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: '8px',
                top: 0,
                height: '100%',
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
                  mb: index !== articles.length - 1 ? '15px' : 0,
                }}
              >
                {/* Marker */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: '3px',
                    top: '14px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    bgcolor: theme.palette.primary.main,
                    border: `2px solid ${theme.palette.background.default}`,
                  }}
                />

                {/* Text */}
                <Header>{item.title}</Header>
                <Typography
                  variant='subtitle2'
                  sx={{
                    color: theme.palette.text.secondary,
                    mb: 1,
                  }}
                >
                  {item.date}
                </Typography>
                <P>{item.description}</P>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TimelineSection;
