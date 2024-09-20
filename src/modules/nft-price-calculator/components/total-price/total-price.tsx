import style from "./styles.module.scss"
import * as React from "react";

type Props = {
    totalPriceValue: string
}

export const TotalPrice: React.FC<Props> = ({totalPriceValue}) => {

    return (
        <div className={style.totalPriceWrapper}>
            <span className={style.totalPriceValue}>{totalPriceValue}</span>
        </div>
    );
};