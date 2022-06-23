import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75'
};

const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: black;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    padding: 12px 16px;
    // margin: 6px 6px;
    border: none;
    border-radius: 25px;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: #006491;
        color: white;
    }

    &:focus {
        color: #fff;
        border-radius: 25px;
        // outline: 2px solid ${blue[200]};
        outline-offset: 2px;
    }

    &.${tabUnstyledClasses.selected} {
        background-color: #006491;
        color: white;
    }

    &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    background-color: white;
    border-radius: 25px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: inset 0px 1px 5px rgba(0, 0, 0, 0.273711);
`;

const TabSelections = () => {
    return (
        <TabsUnstyled selectionFollowsFocus defaultValue={0} className="w-1/2">
            <TabsList>
                <Tab>COUPON INFO</Tab>
                <Tab>COMPONENTS & PRICING</Tab>
            </TabsList>
            {/* <TabPanel value={0}>First page</TabPanel>
            <TabPanel value={1}>Second page</TabPanel>
            <TabPanel value={2}>Third page</TabPanel> */}
        </TabsUnstyled>
    );
};

export default TabSelections;
