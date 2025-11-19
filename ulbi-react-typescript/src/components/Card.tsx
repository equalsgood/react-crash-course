import React, {useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width: string;
    height: string;
    children: React.ReactNode;
    variant: CardVariant;
    onClick: (num: number) => void
}

const Card = ({width, height, children, variant, onClick}: CardProps) => {
    const [state, setState] = useState(0);
    return (
        <div onClick={() => onClick(state)} style={{
            width,
            border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
            height,
            background: variant === CardVariant.primary ? 'lightgrey' : ''
        }}>
            {children}
        </div>
    );
};

export default Card;