import {useState} from "react";
import {ButtonsType} from "../nft-price-calculator/nft-price-calculator.tsx";
import {nftPriceInUSD} from "../constants/constants.ts";


export const useNftPriceCalculator = (ethCoinPrice: number) => {
    const [activeButton, setActiveButton] = useState<ButtonsType>("USD")
    const [quantityCount, setQuantityCount] = useState(1)

    const nftPriceInETH = Number((nftPriceInUSD / ethCoinPrice).toFixed(4))

    const nftPriceUSD = Number(nftPriceInUSD.toFixed(2))

    const finalPrice = activeButton === "USD" ? nftPriceUSD : activeButton === "ETH" ? nftPriceInETH : 0

    const totalNftPrice = finalPrice * quantityCount

    const currentPrice = activeButton === "USD" ?
        `$${finalPrice.toFixed(2)}`
        :
        activeButton === "ETH" ?
            `${finalPrice.toFixed(4)}`
            :
            ""

    const totalPriceValue =
        activeButton === "USD" ?
            `$${totalNftPrice.toFixed(2)}`
            :
            activeButton === "ETH" ?
                `${Number(totalNftPrice.toString().split('').slice(0, 6).join('')).toFixed(4)}`
                :
                "0"


    return {totalPriceValue, activeButton, setActiveButton, currentPrice, quantityCount, setQuantityCount, totalNftPrice}
}