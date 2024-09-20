import {useState} from "react";

export const useGetEthPrice = () => {
    const [ethCoinPrice, setEthCoinPrice] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const getEthPrice = async (url: string) => {
        setIsLoading(true)
        try {
            const response = await fetch(url, {
                method: "GET"
            })
            const responseJson = await response.json()
            setEthCoinPrice(responseJson.data.values.USD.price)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }

    return {ethCoinPrice, getEthPrice, isLoading}
}