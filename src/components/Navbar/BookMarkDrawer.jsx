import React from 'react';
import { Drawer, ConfigProvider } from 'antd';
import useAuthContext from '../../Hooks/useAuthContext';

const BookMarkDrawer = () => {
    const { bookMarkOpen, setBookMarkOpen } = useAuthContext();

    const onClose = () => {
        setBookMarkOpen(false);
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorIcon: '#028094',       // close icon color
                    colorIconHover: '#04b8d2',  // close icon hover
                    colorText: '#0ff',          // text color
                },
                components: {
                    Drawer: {
                        colorBgElevated: '#0e121c', // drawer background
                    },
                },
            }}
        >
            <Drawer
                title="Bookmarks"
                placement="left"
                width={330}
                onClose={onClose}
                open={bookMarkOpen}
                style={{
                    borderRight: '1px solid #028094',
                    boxShadow: '0px 0 15px #028094',
                }}
            >
                <div>

                </div>
            </Drawer>
        </ConfigProvider>
    );
};

export default BookMarkDrawer;