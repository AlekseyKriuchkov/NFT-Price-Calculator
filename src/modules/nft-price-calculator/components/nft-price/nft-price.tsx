import style from "./styles.module.scss"
import * as React from "react";

type Props = {
    price: string
}

export const NftPrice: React.FC<Props> = ({price}) => {

    return (
        <div className={style.nftPriceWrapper}>
            <span className={style.priceValue}>{price}</span>
        </div>
    );
};
