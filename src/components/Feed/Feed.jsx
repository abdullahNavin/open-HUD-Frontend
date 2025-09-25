import React from 'react';
import NewsFeed from '../NewsFeed';
import Containar from '../../Helper/Containar';

const Feed = () => {
    return (
        <Containar className={'mx-auto my-8'}>
            <div className='flex gap-4'>
                {/* preference section*/}
                <div className='w-[20%] p-2 border bg-[#0000005d] shadow-2xl shadow-[#028094]/50 rounded-lg'>
                    <h2 className='text-[#0ff] text-2xl font-bold text-center'>Preferences</h2>
                    <div className='h-full mt-[30%]'>
                        <div className='text-[#00ffffc1] text-center'>
                            <h1 className='text-xl mb-2'>No preferences yet.</h1>
                            <p>Use the input field at the top to customize your preferences.</p>
                        </div>
                    </div>
                </div>

                {/* News feed section */}
                <div className='flex-1 p-4 bg-[#00000083] rounded-lg shadow-2xl shadow-[#028094]/50 h-[82vh] overflow-y-auto'>
                    <NewsFeed />
                </div>
            </div>
        </Containar>
    );
};

export default Feed;