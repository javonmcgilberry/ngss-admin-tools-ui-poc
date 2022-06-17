import { Fragment, useState } from 'react';
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';

const DropdownIcon = () => {
    return (
        <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.86852 0C1.06982 0 0.59343 0.890145 1.03647 1.5547L7.16795 10.7519C7.56377 11.3457 8.43623 11.3457 8.83205 10.7519L14.9635 1.5547C15.4066 0.890144 14.9302 0 14.1315 0H1.86852Z"
                fill="#161717"
            />
        </svg>
    );
};

export default function AccordionComponent() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            <Accordion
                className="rounded-md bg-white"
                open={open === 1}
                onClick={() => handleOpen(1)}
                icon={<DropdownIcon />}
            >
                <AccordionHeader className="px-4">Build Your Own Pizza</AccordionHeader>
                <AccordionBody className="px-4">
                    We&apos;re not always in the position that we want to be at. We&apos;re
                    constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly
                    trying to express ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion
                className="rounded-md bg-white"
                open={open === 2}
                onClick={() => handleOpen(2)}
                icon={<DropdownIcon />}
            >
                <AccordionHeader className="px-4">Specialty Pizzas</AccordionHeader>
                <AccordionBody className=" px-4">
                    We&apos;re not always in the position that we want to be at. We&apos;re
                    constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly
                    trying to express ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion
                className="rounded-md bg-white"
                open={open === 3}
                onClick={() => handleOpen(3)}
                icon={<DropdownIcon />}
            >
                <AccordionHeader className="px-4">Chicken Wings</AccordionHeader>
                <AccordionBody className=" px-4">
                    We&apos;re not always in the position that we want to be at. We&apos;re
                    constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly
                    trying to express ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
        </Fragment>
    );
}
