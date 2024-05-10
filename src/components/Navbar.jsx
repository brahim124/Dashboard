import React,{ useEffect} from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import { Login, SignUp, Chat, Notification,UserProfile } from '.';
import {AppContext} from '../contexts/contextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      ></span>
      {icon}
    </button>
  </TooltipComponent>
);


const Navbar = () => {
  const { activeMenu, setActiveMenu,  isClicked, handleClick, screenSize, setScreenSize, currentColor  } = AppContext();


  
    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
      if (screenSize <= 900) {
        setActiveMenu(false);
      } else {
        setActiveMenu(true);
      }
    }, [screenSize]);

  return (
    <div className='flex  justify-between p-4 md:mx-6 relative'>
        <NavButton title="Menu" customFunc={()=> setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />} />

        <div className="flex ">
        <NavButton title="Chat" dotColor="#0398fc" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="#0398fc" customFunc={() => handleClick('notification')} color={currentColor}  icon={<RiNotification3Line />} />
        <NavButton title="login" dotColor="#0398fc" customFunc={() => handleClick('login')} color={currentColor}  icon={<RiNotification3Line />} />
        <NavButton title="SingUp" dotColor="#0398fc" customFunc={() => handleClick('SingUp')} color={currentColor}  icon={<RiNotification3Line />} />

        <TooltipComponent content="Profile" position="BottomCenter">
          
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={avatar}
              alt="user-profile"
            />
            <p>  
              <span className="text-gray-400 font-bold ml-1 text-14">
                Brahim
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
        {isClicked.login && <Login/>}
        {isClicked.singUp && <SignUp/>}

        </div>

    </div>
  );
} ;

export default Navbar