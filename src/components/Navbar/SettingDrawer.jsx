import React from 'react';
import { Drawer, ConfigProvider } from 'antd';
import useAuthContext from '../../Hooks/useAuthContext';

const SettingDrawer = () => {
    const { settingOpen, setSettingOpen } = useAuthContext();

    const onClose = () => {
        setSettingOpen(false);
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
                title="Settings"
                placement="right"
                width={330}
                onClose={onClose}
                open={settingOpen}
                style={{
                    borderLeft: '1px solid #028094',
                    boxShadow: '0px 0 15px #028094', 
                }}
            >
                <div>
                    
                </div>
            </Drawer>
        </ConfigProvider>
    );
};

export default SettingDrawer;
