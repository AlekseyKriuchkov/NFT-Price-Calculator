import style from "./styles.module.css"
import {CurrencySwitchBlock} from "../currency-switch-buttons/currency-switch-block.tsx";

export const NftPriceCalculator = () => {
    return (
        <div className={style.container}>
            <CurrencySwitchBlock/>
        </div>
    );
};
