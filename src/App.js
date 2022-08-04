import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './index.css';

export default function App() {

  const [value, setValue] = React.useState(new Date());
  const [hours, setHours] = React.useState('');

  const handleHours = (event) => {
    setHours(event.target.value);
  };

  function calculateCost(num, hours) {
    if (num === 6 || num === 0) {
      return (150*hours);
    }
    else {
      return (100*hours);
    }
  }

  return (
    //FRAGMENT TO RETURN MULTIPLE ELEMENTS
    <>
    <div className='App'>
      <div className='header'>
        <p></p>
      </div>
      <div className='Text'>
        <h1>
          <u>
            Booking App
          </u>
        </h1>
      </div>
      <div className='Text'>
        <p>
          Please select the date and time of your move
        </p>
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MobileDateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="Date and Time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
      <div className='Text'>
        <p>
          Please select how many hours you would will need for your move (100$ per hour for weekdays, 150$ per hour for weekends)
        </p>
      </div>
      
      <Box sx={{ minWidth: 400 }}>
        <FormControl style = {{width: 220}}>
          <InputLabel id="hoursSelect">Time Needed</InputLabel>
          <Select
            labelId="hoursSelect"
            id="hoursSelectt"
            value={hours}
            label="Time Needed"
            onChange={handleHours}
          >
            <MenuItem value={1}>1 Hour</MenuItem>
            <MenuItem value={2}>2 Hours</MenuItem>
            <MenuItem value={3}>3 Hours</MenuItem>
            <MenuItem value={4}>4 Hours</MenuItem>
            <MenuItem value={5}>5 Hours</MenuItem>
            <MenuItem value={6}>6 Hours</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div className='Text'>
        <strong>
          Your booking is set for: {value.toDateString()}, at {value.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit'})}
        </strong>
        <br>
        </br>
        <strong>
          The price of your moving appointment is ${calculateCost(value.getDay(), hours)}
        </strong>
      </div>
      
    </div>
      
    </>
  )
  
}