import style from "./styles.module.css"
import {useState} from "react";

export const CurrencySwitchBlock = () => {
    const [usdActiveButton, setUsdActiveButton] = useState(true)
    const [ethActiveButton, setEthActiveButton] = useState(false)

    const chooseEth = () => {
        setEthActiveButton(true)
        setUsdActiveButton(false)
    }
    const chooseUsd = () => {
        setEthActiveButton(false)
        setUsdActiveButton(true)
    }

    return (
        <div className={style.currencyWrapper}>
            <span className={style.currency}>Currency:</span>
            <span className={style.buttonsWrapper}>
                <button onClick={chooseEth} className={ethActiveButton ? style.activeButton : style.defaultButton}>ETH</button>
                <button onClick={chooseUsd} className={usdActiveButton ? style.activeButton : style.defaultButton}>USD</button>
            </span>

        </div>
    );
};
