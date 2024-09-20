import style from "./styles.module.scss"
import * as React from "react";

type Props = {
    children: string
    totalNftPrice: number
}

export const ApproveMintButton: React.FC<Props> = ({children, totalNftPrice}) => {
    return (
        <button className={style.mintButton} onClick={() => alert(`С тебя $${totalNftPrice} сука!!!`)}>
            {children}
        </button>
    );
};