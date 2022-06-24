import React from 'react';
import tw from 'twin.macro';

export const Title = tw.h1`text-3xl font-condensed`;
const PageSectionWrapper = tw.div`flex flex-col gap-6 py-6`;

export const PageSection = ({ title, children }: { children: React.ReactNode; title: string }) => (
    <PageSectionWrapper>
        <div className="flex flex-col">
            <Title>{title.toUpperCase()}</Title>
            <div className="pt-2 pb-8">
                <div className="w-full border-t border-gray-300"></div>
            </div>
        </div>
        <div className="flex w-full flex-col gap-4 px-2">{children}</div>
    </PageSectionWrapper>
);

export const Subtitle = () => <div></div>;
