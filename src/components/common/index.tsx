import React from 'react';
import tw from 'twin.macro';

export const Title = tw.h1`text-3xl font-condensed`;

export const PageSection = ({ title, children }: { children: React.ReactNode; title: string }) => (
    <div className="py-6">
        <Title>{title.toUpperCase()}</Title>
        <div className="pt-2 pb-8">
            <div className="border-gray-300 w-full border-t"></div>
        </div>
        {children}
    </div>
);

export const Subtitle = () => <div></div>;