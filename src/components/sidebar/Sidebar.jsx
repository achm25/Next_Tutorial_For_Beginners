'use client'
import { Sidebar as ReactSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { BsPerson, BsPeople,BsTrophy, BsStar,BsSuitDiamond,BsCalendar2,BsChatSquareText  ,BsBasket } from "react-icons/bs";

const Sidebar = () => {


    const rootStyles = {
        position: 'absolute',
        top: '4rem',
        height: '100%',
        span: {
            fontSize: '1rem',
        }
    };


    const menuItemStyles = {
        root: {},
        button: {
            '&:hover': {
                backgroundColor: '#00d1e0',
                color: 'white',
            },
            'border-radius': '0.5rem'
        },
    };


    return (
        ///todo should add bottom navigation in mobile size
        <ReactSidebar
            width='80px'
            rootStyles={rootStyles}
        >
            <Menu iconShape="square" menuItemStyles={menuItemStyles}>
                <MenuItem icon={<BsPerson />} />
                <MenuItem icon={<BsPeople />} />
                <MenuItem icon={<BsTrophy />} />
                <MenuItem icon={<BsStar />} />
                <MenuItem icon={<BsSuitDiamond />} />
                <MenuItem icon={<BsCalendar2 />} />
                <MenuItem icon={<BsChatSquareText />} />
                <MenuItem icon={<BsBasket />} />
            </Menu>
        </ReactSidebar>
    );
};

export default Sidebar;