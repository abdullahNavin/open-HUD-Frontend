import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import VideoSource from '../assets/Untitled video.mp4';
import NewsFeed from '../components/NewsFeed';
import Feed from '../components/Feed/Feed';
import Signin from '../Authentication/Signin';
import { Toaster } from 'sonner';
import SettingDrawer from '../components/Navbar/SettingDrawer';
import BookMarkDrawer from '../components/Navbar/BookMarkDrawer';

const MainHome = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Local video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={VideoSource} type="video/mp4" />
        </video>
        <Navbar />
        <Feed />
        <Signin />
        <SettingDrawer/>
        <BookMarkDrawer/>
        <Toaster richColors position="top-center" />
      </div>
    </div>
  );
};

export default MainHome;
