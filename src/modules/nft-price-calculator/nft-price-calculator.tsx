import style from "./styles.module.scss"
import {CurrencySwitchBlock} from "./components/currency-switch-block/currency-switch-block.tsx";
import {NftPrice} from "./components/nft-price/nft-price.tsx";
import {NftQuantity} from "./components/nft-quantity/nft-quantity.tsx";
import {TotalPrice} from "./components/total-price/total-price.tsx";
import {useEffect} from "react";
import {ApproveMintButton} from "./components/approve-mint-button/approve-mint-button.tsx";
import {useGetEthPrice} from "../hoocks/use-get-eth-price.ts";
import {useNftPriceCalculator} from "../hoocks/use-nft-price-calculator.ts";
import {NftPriceCalculatorBlock} from "../../shared/nft-price-calculator-block/nft-price-calculator-block.tsx";
import {HorizontalLine} from "../../shared/horizontal-line/horizontal-line.tsx";
import {
    NftPriceCalculatorInformationText
} from "./components/nft-price-calculator-information-text/nft-price-calculator-information-text.tsx";

export type ButtonsType = "ETH" | "USD"

export const NftPriceCalculator = () => {
    const {getEthPrice, ethCoinPrice} = useGetEthPrice()
    const {totalNftPrice,
        totalPriceValue,
        activeButton,
        setActiveButton,
        currentPrice,
        quantityCount,
        setQuantityCount} = useNftPriceCalculator(ethCoinPrice)

    const urlForEthRequest = import.meta.env.VITE_GET_ETH_URL_REQUEST

    useEffect(() => {
        if (activeButton === "ETH") {
            getEthPrice(urlForEthRequest)
        }
    }, [activeButton])

    return (
        <div className={style.container}>
            <NftPriceCalculatorBlock title={"Currency:"}>
                <CurrencySwitchBlock activeButton={activeButton} setActiveButton={setActiveButton}/>
            </NftPriceCalculatorBlock>
            <NftPriceCalculatorBlock className={style.marginStyle30} title={"One NFT price:"}>
                <NftPrice price={currentPrice}/>
            </NftPriceCalculatorBlock>
            <NftPriceCalculatorBlock className={style.marginStyle20} title={"Quantity:"}>
                <NftQuantity quantityCount={quantityCount} setQuantityCount={setQuantityCount}/>
            </NftPriceCalculatorBlock>
            <NftPriceCalculatorBlock  className={style.marginStyle30}>
                <HorizontalLine/>
            </NftPriceCalculatorBlock>
            <NftPriceCalculatorBlock className={style.marginStyle20} title={"Total price:"}>
                <TotalPrice totalPriceValue={totalPriceValue}/>
            </NftPriceCalculatorBlock>
            <ApproveMintButton totalNftPrice={totalNftPrice}>MINT NOW</ApproveMintButton>
            <NftPriceCalculatorInformationText />
        </div>
    );
};
