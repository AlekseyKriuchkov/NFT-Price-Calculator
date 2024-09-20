import * as React from "react";
import {ReactNode} from "react";
import style from "./styles.module.scss"
import cn from 'classnames'

type Props = {
    title?: string
    children: ReactNode
    className?: string
}

export const NftPriceCalculatorBlock: React.FC<Props> = ({title, children, className}) => {

    return (
        <div className={cn(style.wrapper, className)}>
            <span className={style.title}>{title}</span>
            {children}
        </div>
    );
};
