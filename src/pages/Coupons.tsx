import { SetStateAction } from 'react';
import { PageSection, Title } from '../components/common';
import TabSelections from '../components/tabSelection/TabSelections';
import Dropdown from '../dropdown/Dropdown';
import InputBox from '../input/Input';

/** @jsxImportSource @emotion/react */

import tw from 'twin.macro';
import { Checkbox } from '@material-tailwind/react';

const Label = tw.h3`font-condensed`;

const LabelBold = tw(Label)`font-bold`;

const CouponsPage = () => {
    return (
        <div className="flex w-full flex-col gap-4 py-8">
            <TabSelections />
            <PageSection title="Pricing Options">
                <div className="flex gap-4">
                    <Dropdown
                        label="Coupon Offering Type"
                        selectedVal={{
                            value: '',
                            label: '',
                        }}
                        setSelectedVal={() => {}}
                        options={[]}
                    ></Dropdown>
                    <Dropdown
                        label="Discount Pricing Options"
                        selectedVal={{
                            value: '',
                            label: '',
                        }}
                        setSelectedVal={() => {}}
                        options={[]}
                    ></Dropdown>
                </div>
            </PageSection>
            <PageSection title="Component #1">
                <div className="flex flex-col gap-4">
                    <LabelBold>QUALIFYING AMOUNT FOR COMPONENT #1</LabelBold>
                    <div className="flex gap-4">
                        <InputBox label={'Minimum Required'} value={''} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <LabelBold>DISCOUNT BENEFIT FOR COMPONENT #1</LabelBold>
                    <div className="flex gap-4">
                        <InputBox label={'Fixed Price Initial'} value={''} />
                        <InputBox label={'Maximum Allowed (Enter "0" for no Maximum)'} value={''} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <LabelBold>SETTINGS FOR COMPONENT #1</LabelBold>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4">
                            <Checkbox tw="w-8 h-8" />
                            <Label>Ignore Surcharges</Label>
                        </div>
                        <div className="flex items-center gap-4">
                            <Checkbox tw="w-8 h-8" />
                            <Label>Allow Floating Ingredients</Label>
                        </div>
                    </div>
                </div>
            </PageSection>
        </div>
    );
};

export default CouponsPage;
