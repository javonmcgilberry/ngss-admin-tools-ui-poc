import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Typography } from '@material-tailwind/react';
import { useState } from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const TabSelections = () => {
    const data = [
        {
            label: 'Coupon Info',
            value: 'html',
            desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
        },
        {
            label: 'Components & Pricing',
            value: 'react',
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
    ];

    const [active, setActive] = useState(data[0].label);

    return (
        <Tabs value="html" tw="w-1/2" style={{ borderRadius: `20rem` }}>
            <TabsHeader
                tw="p-0"
                style={{
                    borderRadius: `20rem`,
                    boxShadow: 'inset 0px 1px 5px rgba(0, 0, 0, 0.273711)',
                }}
            >
                {data.map(({ label, value }) => (
                    <Tab key={value} value={value} onClick={() => setActive(label)} tw="p-4">
                        <div
                            role="button"
                            css={[active === label && tw`text-white transition-all`]}
                        >
                            <Typography variant="h6">{label.toUpperCase()}</Typography>
                        </div>
                    </Tab>
                ))}
            </TabsHeader>
            {/* <TabsBody>
                {data.map(({ value, desc }) => (
                    <TabPanel key={value} value={value}>
                        {desc}
                    </TabPanel>
                ))}
            </TabsBody> */}
        </Tabs>
    );
};

export default TabSelections;
