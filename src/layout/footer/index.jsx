import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';

import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Videocam from '@mui/icons-material/Videocam';
import Image from '@mui/icons-material/Image';

import Avatar from '@mui/joy/Avatar';
import ListItemContent from '@mui/joy/ListItemContent';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box bgcolor={"#f4f5f7"} sx={{ width: '100%' }}>
      <Divider />
      <Grid 
         
        container 
        mt={2} 
        rowSpacing={2} 
        
        justifyContent="center"
        columnSpacing={{ xs: 3, sm: 4, md: 5 } }
        p={2}
      >
        <Grid item xs={3}>
          <Item>GAMES WORKSHOP
            <List>
                <ListItem>
                    <ListItemButton>Subitem 1</ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>Subitem 2</ListItemButton>
                </ListItem>
            </List>
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item >FORGE WORLD
            <ListItemButton>
                <ListItemDecorator>
                    <Image />
                </ListItemDecorator>
                Add another image
            </ListItemButton>
            <ListItemButton>
                <ListItemDecorator>
                    <Videocam />
                </ListItemDecorator>
                Add another video
            </ListItemButton>
          </Item>
        </Grid>

        <Grid item xs={3}>
          <Item>BLACK LIBRARY
            <List>
                <ListItem>
                    <ListItemDecorator>
                        <Avatar src="https://img.freepik.com/premium-photo/humanized-animals-photo-realistic-professional-avatar-profile-realistic-natural-fox-skater_997345-861.jpg?w=360" />
                    </ListItemDecorator>
                    <ListItemContent>
                        <Typography level="title-sm">Brunch this weekend?</Typography>
                        <Typography level="body-sm" noWrap>
                            I&apos;ll be in your neighborhood doing errands this Tuesday.
                        </Typography>
                    </ListItemContent>
                </ListItem>
                <ListItem>
                    <ListItemDecorator>
                        <Avatar src="https://img.freepik.com/premium-photo/humanized-animals-photo-realistic-professional-avatar-profile-realistic-natural-fox-skater_997345-861.jpg?w=360" />
                    </ListItemDecorator>
                    <ListItemContent>
                        <Typography level="title-sm">Summer BBQ</Typography>
                        <Typography level="body-sm" noWrap>
                        Wish I could come, but I&apos;m out of town this Friday.
                        </Typography>
                    </ListItemContent>
                </ListItem>
            </List>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>COOKIE NOTICE
            <List>
                <ListItem>
                    <ListItemButton>Subitem 1</ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>Subitem 2</ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>Subitem 3</ListItemButton>
                </ListItem>
            </List>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>PRIVACY NOTICE
            <List>
                <ListItem>
                    <ListItemButton>Subitem 1</ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>Subitem 2</ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>Subitem 3</ListItemButton>
                </ListItem>
            </List>
          </Item>
        </Grid>
      </Grid>
      
      <Paper
        variant="outlined"
        sx={{ p: 2 }}
      >
        <Typography
            component="p"
            textAlign="center"
            variant="subtitle1"
        >
            Copyright © 2023 Material UI SAS, trading as MUI.
        </Typography>
      </Paper>
       
    </Box>
  );
}