import React, { useContext, useEffect } from 'react' ;
import Box from '@mui/material/Box' ;
import BottomNavigation from '@mui/material/BottomNavigation' ;
import BottomNavigationAction from '@mui/material/BottomNavigationAction' ;
import RestoreIcon from '@mui/icons-material/Restore' ;
import FavoriteIcon from '@mui/icons-material/Favorite' ;
import LocationOnIcon from '@mui/icons-material/LocationOn' ;
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone' ;
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone' ;
import { useNavigate } from 'react-router-dom' ;
import Tabs from '@mui/material/Tabs' ;
import Tab from '@mui/material/Tab' ;
import Context from './Context';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0) ;
  let navigate = useNavigate() ;
  let {logged} = useContext(Context);
  console.log("logged->",logged);
  const handleChange = (event,newValue) => {
    // setValue(newValue) ;
    let page = event.currentTarget.innerText ;
    // console.log(value,page) ;
    navigate('/'+page) ;
  } ;
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs id='tab' value={value}  centered>
      {logged ?
        <>
        <Tab label="Home" onClick={handleChange}/>
        <Tab label="Orders" onClick={handleChange}/>
        </>
        :
        <>
        <Tab label="Home" onClick={handleChange}/>
        <Tab label="Orders" onClick={handleChange}/>
        <Tab label="Login" onClick={handleChange}/>
        </>
      }
      </Tabs>
    </Box>
  ) ;
}
