import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Check from '@mui/icons-material/Check';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { AiOutlineHeart } from 'react-icons/ai';

export default function LabCard() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        className: "m-auto",
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: 2,

      }}
    >
      <Card size="lg" variant="outlined" className="mt-5">
        <div className='d-flex justify-content-between align-items-center'>
          <Chip size="sm" variant="outlined" color="neutral">
            BASIC DIAGNOSTIC
          </Chip>
          <AiOutlineHeart className='wishlist-icon' />
        </div>
        <Typography level="h2" fontSize="xl3">
          Basic
        </Typography>
        <Typography level="h2" fontSize="lg">
          Initial medical examination, free consultation, recommendations
        </Typography>
        <Divider inset="none" />
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Surface inspection
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            pediatric examination
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Blood test
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="h5" sx={{ mr: 'auto' }}>
          ₹399.00{' '}
            <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography>
          </Typography>
          <Button
            variant="soft"
            color="success"
            endDecorator={<KeyboardArrowRight />}
          >
            Start now
          </Button>
        </CardActions>
      </Card>



      <Card size="lg" variant="outlined" className="mt-5">
        <div className='d-flex justify-content-between align-items-center'>
          <Chip size="sm" variant="outlined" color="neutral">
            ADVANCE DIAGNOSTIC
          </Chip>
          <AiOutlineHeart className='wishlist-icon' />
        </div>
        <Typography level="h2" fontSize="xl3">
          Professional
        </Typography>
        <Typography level="h2" fontSize="lg">
          Advanced medical examination, consultations, diagnosis and treatment
        </Typography>
        <Divider inset="none" />
        <List size="sm" sx={{ mx: 'calc(-1 * var(--ListItem-paddingX))' }}>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            5 doctors examination
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            MRI scaner testing
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            blood test
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="h5" sx={{ mr: 'auto' }}>
          ₹599.00{' '}
            <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography>
          </Typography>
          <Button
            variant="soft"
            color="success"
            endDecorator={<KeyboardArrowRight />}
          >
            Start now
          </Button>
        </CardActions>
      </Card>



      <Card
        size="lg"
        variant="solid"
        color="neutral"
        className="mt-5 all-bg-green"
        invertedColors
        sx={{ bgcolor: 'neutral.900' }}
       
      >
        <div className='d-flex justify-content-between align-items-center'>
          <Chip size="sm" variant="outlined" >
            FULL BODY DIAGNOSTIC
          </Chip>
          <AiOutlineHeart className='wishlist-icon' />
        </div>

        <Typography level="h2" fontSize="xl3">
          Unlimited
        </Typography>
        <Typography level="h2" fontSize="lg">
          Full body diagnostics, examination of all doctors, full medical complex
        </Typography>
        <Divider inset="none" />
        <List
          size="sm"
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            mx: 'calc(-1 * var(--ListItem-paddingX))',
          }}
        >
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            all doctors examination
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            MRI scaner testing
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            full laboratory testing
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            blood test
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Check />
            </ListItemDecorator>
            Cancel Anytime
          </ListItem>
        </List>
        <Divider inset="none" />
        <CardActions>
          <Typography level="h5" sx={{ mr: 'auto' }}>
          ₹799.00{' '}
            <Typography fontSize="sm" textColor="text.tertiary">
              / month
            </Typography>
          </Typography>
          <Button color="warning" endDecorator={<KeyboardArrowRight />}>Start now</Button>
        </CardActions>
      </Card>
    </Box>
  );
}