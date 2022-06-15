import { SetStateAction } from 'react';
import { PageSection, Title } from '../components/common';
import TabSelections from '../components/tabSelection/TabSelections';
import Dropdown from '../dropdown/Dropdown';

const CouponsPage = () => {
    return (
        <div className="flex w-full flex-col gap-4 py-8">
            <TabSelections />
            <PageSection title="Pricing Options">
                <div>
                    <Dropdown
                        label="Coupon Offering Type"
                        selectedVal={{
                            value: '',
                            label: '',
                        }}
                        setSelectedVal={() => {}}
                        options={[]}
                    ></Dropdown>
                </div>
            </PageSection>
        </div>
    );
};

export default CouponsPage;
