import {useState, FC, ReactNode, MouseEvent, ReactElement} from 'react';

// ** MUI
import {Menu, IconButton, Button, MenuItem} from '@mui/material';

// ** Icons
import {Edit, MoreVert} from '@mui/icons-material';

interface Props {
  options: {
    title: string;
    onClick: () => void;
  }[];
}

const ThreeDotMenu: FC<Props> = ({options}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              handleClose();
              option.onClick();
            }}
          >
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ThreeDotMenu;
