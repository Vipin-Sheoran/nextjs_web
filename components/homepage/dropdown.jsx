import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from 'next/link'
import React from 'react'

export default function Dropdown(){
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <div>
      <Button style={{color:'white'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Services
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link passHref href='services/corporate-relocation'><MenuItem onClick={handleClose}>CORPORATE RELOCATION</MenuItem></Link>
        <Link passHref href='services/international-shifting'><MenuItem onClick={handleClose}>INTERNATIONAL SHIFTING</MenuItem></Link>
        <Link passHref href='services/household-relocation'><MenuItem onClick={handleClose}>HOUSE RELOCATION</MenuItem></Link>
        <Link passHref href='services/warehouse'><MenuItem onClick={handleClose}>WAREHOUSE/STORAGE</MenuItem></Link>
        <Link passHref href='services/vehicle-transportation'><MenuItem onClick={handleClose}>VEHICLE TRANSPORTATION</MenuItem></Link>
        <Link passHref href='services/loading-unloading'><MenuItem onClick={handleClose}>LOADING & UNLOADING</MenuItem></Link>
        <Link passHref href='services/commercial'><MenuItem onClick={handleClose}>COMMERCIAL</MenuItem></Link>
      </Menu>
    </div>
  )

}