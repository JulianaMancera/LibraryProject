import React from 'react';
import { Box, Typography, Grid, Avatar, Divider } from '@mui/material';
import DefaultCover from "../../../images/DefaultCover.jpg";

const ShelfThesis: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '16px',
        margin: '50px',
      }}
    >
      <Grid container spacing={1} justifyContent="center">
        {Array.from({ length: 12 }).map((_, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
              }}
            >
              <Avatar
                alt="Research Title Cover"
                src={DefaultCover}
                sx={{
                  width: 144,
                  height: 215,
                  borderRadius: '6px',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              {/* Label */}
              <Box
                sx={{
                  maxWidth: '150px',
                  textAlign: 'left',
                  marginTop: '8px',
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Title of Thesis
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '2px',
                    fontWeight: 'normal',
                    fontSize: '0.6rem',
                  }}
                >
                  Author(s) Name(s)
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '2px',
                    fontWeight: 'normal',
                    fontSize: '0.6rem',
                  }}
                >
                  Published: 2023
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '2px',
                    fontWeight: 'normal',
                    fontSize: '0.6rem',
                  }}
                >
                  Field of Study: Computer Science
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: '2px',
                    fontWeight: 'normal',
                    fontSize: '0.6rem',
                  }}
                >
                  Abstract: "This research focuses on..."
                </Typography>
                {/* Divider line below the last text */}
                <Divider sx={{ marginTop: '8px', marginBottom: '18px', backgroundColor: '#000', height: '1px' }} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ShelfThesis;
