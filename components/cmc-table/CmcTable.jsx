import React, {useState, useContext, useCallback, useEffect} from 'react'
import btc from "../../assets/btc.png";
import { CoinbaseContext } from '../../context/context';




const CmcTable = () => {
    let [ coinData,setCoinData ] = useState();
    let { getTopTenCoins } = useContext(CoinbaseContext);
    
    const setData = useCallback(async () => {
        try {
            let apiResponse = await getTopTenCoins()
            let filteredResponse = []
            for (let i = 0; i < apiResponse?.length; i++) {
                const element = apiResponse[i]
                if (element.cmc_rank <= 10) filteredResponse?.push(element)
            }
        } catch (error) {
            console.log(error.message)
        }
    }, [getTopTenCoins])
    useEffect(() => {
      setData();
    }, [])
    
  return (
    <div>CmcTable</div>
  )
}

export default CmcTable