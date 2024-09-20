import style from "./styles.module.scss"
import * as React from "react";

type Props = {
    setQuantityCount: (quantity: number) => void
    quantityCount: number
}

export const NftQuantity: React.FC<Props> = ({setQuantityCount, quantityCount}) => {

    const decreaseQuantity = () => {
        if(quantityCount > 0) {
            setQuantityCount(quantityCount - 1)
        }
    }

    const increaseQuantity = () => {
        setQuantityCount(quantityCount + 1)
    }

    return (
        <>
            <div className={style.quantityButtonsWrapper}>
                <button onClick={decreaseQuantity} className={style.button}>-</button>
                <span className={style.quantityCount}>{quantityCount}</span>
                <button onClick={increaseQuantity} className={style.button}>+</button>
            </div>

        </>
    );
};