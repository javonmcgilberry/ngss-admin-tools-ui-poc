/** @jsxImportSource @emotion/react */
import { SetStateAction, useState } from 'react';
import { PageSection, Title } from '../components/common';
import TabSelections from '../components/tabSelection/TabSelections';
import Dropdown from '../dropdown/Dropdown';
import InputBox from '../input/Input';

import tw from 'twin.macro';
import AccordionComponent from '../components/accordion/Accordion';
import { Checkbox } from '@mui/material';

const Label = tw.h3`font-condensed`;

const StyledCheckbox = tw(Checkbox)``;

const LabelBold = tw(Label)`font-bold`;

const Row = tw.div`flex`;
const ColumnFullWidth = tw.div`w-full gap-4 flex flex-col px-2`;
const Column = tw(ColumnFullWidth)`max-w-[50%]`;

const CouponsPage = () => {
    const [couponOfferingType, setCouponOfferingType] = useState('');
    const [discountPricingOption, setDiscountPricing] = useState('');
    return (
        <div className="flex w-full flex-col gap-4 py-8">
            <TabSelections />
            <PageSection title="Pricing Options">
                <Row>
                    <Column>
                        <Dropdown
                            label="Coupon Offering Type"
                            selectedOption={couponOfferingType}
                            setSelectedOption={setCouponOfferingType}
                            options={[
                                {
                                    value: 'test',
                                    label: 'Test 1'
                                },
                                {
                                    value: 'test',
                                    label: 'Test 2'
                                }
                            ]}
                        ></Dropdown>
                    </Column>
                    <Column>
                        <Dropdown
                            label="Discount Pricing Options"
                            selectedOption={discountPricingOption}
                            setSelectedOption={setDiscountPricing}
                            options={[
                                {
                                    value: 'test',
                                    label: 'Fixed Price Initial'
                                },
                                {
                                    value: 'test',
                                    label: 'Fixed Price Initial 2'
                                }
                            ]}
                        ></Dropdown>
                    </Column>
                </Row>
            </PageSection>
            <PageSection title="Component #1">
                <LabelBold>QUALIFYING AMOUNT FOR COMPONENT #1</LabelBold>
                <Row>
                    <Column>
                        <InputBox label={'Minimum Required'} value={''} />
                    </Column>
                </Row>
                <LabelBold>DISCOUNT BENEFIT FOR COMPONENT #1</LabelBold>
                <Row>
                    <Column>
                        <InputBox label={'Fixed Price Initial'} value={''} />
                    </Column>
                    <Column>
                        <InputBox label={'Maximum Allowed (Enter "0" for no Maximum)'} value={''} />
                    </Column>
                </Row>

                <LabelBold>SETTINGS FOR COMPONENT #1</LabelBold>
                <Row tw="gap-4">
                    <div className="flex items-center gap-4">
                        <StyledCheckbox tw="w-8 h-8" />
                        <Label>Ignore Surcharges</Label>
                    </div>
                    <div className="flex items-center gap-4">
                        <StyledCheckbox tw="w-8 h-8" />
                        <Label>Allow Floating Ingredients</Label>
                    </div>
                </Row>

                <div className="flex flex-col gap-4">
                    <LabelBold>PRODUCTS INCLUDED IN COMPONENT #1</LabelBold>
                    <div className="flex flex-col items-center gap-4">
                        <AccordionComponent />
                    </div>
                </div>
            </PageSection>
        </div>
    );
};

export default CouponsPage;
