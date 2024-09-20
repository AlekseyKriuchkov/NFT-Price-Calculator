import style from "./styles.module.scss"
import {ButtonsType} from "../../nft-price-calculator.tsx";
import cn from 'classnames'
import * as React from "react";

type Props = {
    setActiveButton: (activeButtonType: ButtonsType) => void
    activeButton: ButtonsType
}

export const CurrencySwitchBlock: React.FC<Props> = ({activeButton, setActiveButton}) => {

    const chooseCoin = (coinType: ButtonsType) => {
        setActiveButton(coinType)
    }

    return (
            <div className={style.buttonsWrapper}>
                <button onClick={() => chooseCoin("ETH")} className={cn(style.defaultButton, {[style.activeButton]: activeButton === "ETH"})}>ETH</button>
                <button onClick={() => chooseCoin("USD")} className={cn(style.defaultButton, {[style.activeButton]: activeButton === "USD"})}>USD</button>
            </div>
    );
};
