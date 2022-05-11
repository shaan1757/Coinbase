import React, {useState, useContext, useCallback, useEffect} from 'react'
import btc from "../../assets/btc.png";
import CBTableHeader from "./CBTableHeader";
import CBTableRow from "./CBTableRow";
import { CoinbaseContext } from '../../context/context';

const data = [
        {
          id: 1,
          name: 'Bitcoin',
          symbol: 'BTC',
          slug: 'bitcoin',
          num_market_pairs: 9423,
          date_added: '2013-04-28T00:00:00.000Z',
          tags: [
            'mineable',
            'pow',
            'sha-256',
            'store-of-value',
            'state-channel',
            'coinbase-ventures-portfolio',
            'three-arrows-capital-portfolio',
            'polychain-capital-portfolio',
            'binance-labs-portfolio',
            'blockchain-capital-portfolio',
            'boostvc-portfolio',
            'cms-holdings-portfolio',
            'dcg-portfolio',
            'dragonfly-capital-portfolio',
            'electric-capital-portfolio',
            'fabric-ventures-portfolio',
            'framework-ventures-portfolio',
            'galaxy-digital-portfolio',
            'huobi-capital-portfolio',
            'alameda-research-portfolio',
            'a16z-portfolio',
            '1confirmation-portfolio',
            'winklevoss-capital-portfolio',
            'usv-portfolio',
            'placeholder-ventures-portfolio',
            'pantera-capital-portfolio',
            'multicoin-capital-portfolio',
            'paradigm-portfolio',
          ],
          max_supply: 21000000,
          circulating_supply: 19037143,
          total_supply: 19037143,
          platform: null,
          cmc_rank: 1,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          last_updated: '2022-05-11T19:32:00.000Z',
          quote: {
            USD: {
              price: 29728.317427471477,
              volume_24h: 65132917497.7047,
              volume_change_24h: 2.9452,
              percent_change_1h: -1.15871697,
              percent_change_24h: -5.23964402,
              percent_change_7d: -25.35150551,
              percent_change_30d: -25.7880283,
              percent_change_60d: -23.85840895,
              percent_change_90d: -33.42356679,
              market_cap: 565942230016.1666,
              market_cap_dominance: 43.9131,
              fully_diluted_market_cap: 624294665976.9,
              last_updated: '2022-05-11T19:32:00.000Z',
            },
          },
        },
        {
          id: 1027,
          name: 'Ethereum',
          symbol: 'ETH',
          slug: 'ethereum',
          num_market_pairs: 5706,
          date_added: '2015-08-07T00:00:00.000Z',
          tags: [
            'mineable',
            'pow',
            'smart-contracts',
            'ethereum-ecosystem',
            'coinbase-ventures-portfolio',
            'three-arrows-capital-portfolio',
            'polychain-capital-portfolio',
            'binance-labs-portfolio',
            'blockchain-capital-portfolio',
            'boostvc-portfolio',
            'cms-holdings-portfolio',
            'dcg-portfolio',
            'dragonfly-capital-portfolio',
            'electric-capital-portfolio',
            'fabric-ventures-portfolio',
            'framework-ventures-portfolio',
            'hashkey-capital-portfolio',
            'kenetic-capital-portfolio',
            'huobi-capital-portfolio',
            'alameda-research-portfolio',
            'a16z-portfolio',
            '1confirmation-portfolio',
            'winklevoss-capital-portfolio',
            'usv-portfolio',
            'placeholder-ventures-portfolio',
            'pantera-capital-portfolio',
            'multicoin-capital-portfolio',
            'paradigm-portfolio',
            'injective-ecosystem',
            'bnb-chain',
          ],
          max_supply: null,
          circulating_supply: 120738012.1865,
          total_supply: 120738012.1865,
          platform: null,
          cmc_rank: 2,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          last_updated: '2022-05-11T19:32:00.000Z',
          quote: {
            USD: {
              price: 2161.2291330471708,
              volume_24h: 43324124431.94194,
              volume_change_24h: 8.1832,
              percent_change_1h: -1.58900902,
              percent_change_24h: -8.25699941,
              percent_change_7d: -26.71649254,
              percent_change_30d: -27.99322384,
              percent_change_60d: -16.30489285,
              percent_change_90d: -31.23531067,
              market_cap: 260942509403.66812,
              market_cap_dominance: 20.2473,
              fully_diluted_market_cap: 260942509403.67,
              last_updated: '2022-05-11T19:32:00.000Z',
            },
          },
        },
        {
          id: 825,
          name: 'Tether',
          symbol: 'USDT',
          slug: 'tether',
          num_market_pairs: 33248,
          date_added: '2015-02-25T00:00:00.000Z',
          tags: [
            'payments',
            'stablecoin',
            'asset-backed-stablecoin',
            'avalanche-ecosystem',
            'solana-ecosystem',
            'arbitrum-ecosytem',
            'moonriver-ecosystem',
            'injective-ecosystem',
            'bnb-chain',
            'usd-stablecoin',
          ],
          max_supply: null,
          circulating_supply: 83147694182.59315,
          total_supply: 86713951794.87468,
          platform: {
            id: 1,
            name: 'Ethereum',
            symbol: 'USDT',
            slug: 'tether',
            token_address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
          },
          cmc_rank: 3,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          last_updated: '2022-05-11T19:32:00.000Z',
          quote: {
            USD: {
              price: 0.997888065889776,
              volume_24h: 150022543438.48846,
              volume_change_24h: 11.4168,
              percent_change_1h: -0.04602724,
              percent_change_24h: -0.20284691,
              percent_change_7d: -0.2113909,
              percent_change_30d: -0.23245845,
              percent_change_60d: -0.23229694,
              percent_change_90d: -0.27958085,
              market_cap: 82972091731.06245,
              market_cap_dominance: 6.4335,
              fully_diluted_market_cap: 86530817642.25,
              last_updated: '2022-05-11T19:32:00.000Z',
            },
          },
        },
        {
          id: 3408,
          name: 'USD Coin',
          symbol: 'USDC',
          slug: 'usd-coin',
          num_market_pairs: 3945,
          date_added: '2018-10-08T00:00:00.000Z',
          tags: [
            'medium-of-exchange',
            'stablecoin',
            'asset-backed-stablecoin',
            'fantom-ecosystem',
            'arbitrum-ecosytem',
            'moonriver-ecosystem',
            'bnb-chain',
            'usd-stablecoin',
          ],
          max_supply: null,
          circulating_supply: 48784651352.58782,
          total_supply: 48784651352.58782,
          platform: {
            id: 1,
            name: 'Ethereum',
            symbol: 'USDC',
            slug: 'usd-coin',
            token_address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
          },
          cmc_rank: 4,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          last_updated: '2022-05-11T19:31:00.000Z',
          quote: {
            USD: {
              price: 1.0003860065481958,
              volume_24h: 13070208931.73817,
              volume_change_24h: 41.1626,
              percent_change_1h: 0.02874661,
              percent_change_24h: 0.02739755,
              percent_change_7d: 0.025673,
              percent_change_30d: 0.09634988,
              percent_change_60d: 0.04353035,
              percent_change_90d: 0.07404399,
              market_cap: 48803482547.461365,
              market_cap_dominance: 3.7904,
              fully_diluted_market_cap: 48803482547.46,
              last_updated: '2022-05-11T19:31:00.000Z',
            },
          },
        },
        {
          id: 1839,
          name: 'BNB',
          symbol: 'BNB',
          slug: 'bnb',
          num_market_pairs: 839,
          date_added: '2017-07-25T00:00:00.000Z',
          tags: [
            'marketplace',
            'centralized-exchange',
            'payments',
            'smart-contracts',
            'alameda-research-portfolio',
            'multicoin-capital-portfolio',
            'moonriver-ecosystem',
            'bnb-chain',
          ],
          max_supply: 165116760,
          circulating_supply: 163276974.63,
          total_supply: 163276974.63,
          platform: null,
          cmc_rank: 5,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          last_updated: '2022-05-11T19:31:00.000Z',
          quote: {
            USD: {
              price: 274.42837024284665,
              volume_24h: 3706533191.7552705,
              volume_change_24h: 8.4543,
              percent_change_1h: -2.02883318,
              percent_change_24h: -15.2055156,
              percent_change_7d: -31.65046058,
              percent_change_30d: -31.19211226,
              percent_change_60d: -27.21795879,
              percent_change_90d: -35.0473068,
              market_cap: 44807834045.89352,
              market_cap_dominance: 3.4799,
              fully_diluted_market_cap: 45312723346.58,
              last_updated: '2022-05-11T19:31:00.000Z',
            },
          },
        },
        {
          id: 52,
          name: 'XRP',
          symbol: 'XRP',
          slug: 'xrp',
          num_market_pairs: 721,
          date_added: '2013-08-04T00:00:00.000Z',
          tags: [
            'medium-of-exchange',
            'enterprise-solutions',
            'binance-chain',
            'arrington-xrp-capital-portfolio',
            'galaxy-digital-portfolio',
            'a16z-portfolio',
            'pantera-capital-portfolio',
          ],
          max_supply: 100000000000,
          circulating_supply: 48343101197,
          total_supply: 99989535142,
          platform: null,
          cmc_rank: 6,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          last_updated: '2022-05-11T19:32:00.000Z',
          quote: {
            USD: {
              price: 0.4183207543022546,
              volume_24h: 4690374536.493579,
              volume_change_24h: 28.3863,
              percent_change_1h: -2.58528817,
              percent_change_24h: -19.33974952,
              percent_change_7d: -34.9910557,
              percent_change_30d: -40.67635438,
              percent_change_60d: -47.16374115,
              percent_change_90d: -50.89128668,
              market_cap: 20222922558.03927,
              market_cap_dominance: 1.5681,
              fully_diluted_market_cap: 41832075430.23,
              last_updated: '2022-05-11T19:32:00.000Z',
            },
          },
        },
        {
          id: 2010,
          name: 'Cardano',
          symbol: 'ADA',
          slug: 'cardano',
          num_market_pairs: 438,
          date_added: '2017-10-01T00:00:00.000Z',
          tags: [
            'mineable',
            'dpos',
            'pos',
            'platform',
            'research',
            'smart-contracts',
            'staking',
            'cardano-ecosystem',
            'cardano',
            'bnb-chain',
          ],
          max_supply: 45000000000,
          circulating_supply: 33752565071.288,
          total_supply: 34277702081.605,
          platform: null,
          cmc_rank: 7,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          last_updated: '2022-05-11T19:31:00.000Z',
          quote: {
            USD: {
              price: 0.5385382393358189,
              volume_24h: 2434706282.1783853,
              volume_change_24h: -2.8519,
              percent_change_1h: -4.00882129,
              percent_change_24h: -17.67569194,
              percent_change_7d: -37.84249447,
              percent_change_30d: -43.22633294,
              percent_change_60d: -32.25250159,
              percent_change_90d: -54.14599259,
              market_cap: 18177046966.559097,
              market_cap_dominance: 1.4117,
              fully_diluted_market_cap: 24234220770.11,
              last_updated: '2022-05-11T19:31:00.000Z',
            },
          },
        },
        {
          id: 4687,
          name: 'Binance USD',
          symbol: 'BUSD',
          slug: 'binance-usd',
          num_market_pairs: 3672,
          date_added: '2019-09-20T00:00:00.000Z',
          tags: [
            'stablecoin',
            'asset-backed-stablecoin',
            'binance-chain',
            'harmony-ecosystem',
            'moonriver-ecosystem',
            'bnb-chain',
            'usd-stablecoin',
          ],
          max_supply: null,
          circulating_supply: 17021181281.559256,
          total_supply: 17021181281.559256,
          platform: {
            id: 15,
            name: 'BNB Beacon Chain (BEP2)',
            symbol: 'BUSD',
            slug: 'binance-usd',
            token_address: 'BUSD-BD1',
          },
          cmc_rank: 8,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          last_updated: '2022-05-11T19:32:00.000Z',
          quote: {
            USD: {
              price: 1.0032807764088538,
              volume_24h: 14351671807.181,
              volume_change_24h: 61.675,
              percent_change_1h: 0.21163347,
              percent_change_24h: 0.19379777,
              percent_change_7d: 0.20697882,
              percent_change_30d: 0.19452106,
              percent_change_60d: 0.41278227,
              percent_change_90d: 0.26949993,
              market_cap: 17077023971.55862,
              market_cap_dominance: 1.3251,
              fully_diluted_market_cap: 17077023971.56,
              last_updated: '2022-05-11T19:32:00.000Z',
            },
          },
        },
        {
          id: 5426,
          name: 'Solana',
          symbol: 'SOL',
          slug: 'solana',
          num_market_pairs: 308,
          date_added: '2020-04-10T00:00:00.000Z',
          tags: [
            'pos',
            'platform',
            'solana-ecosystem',
            'cms-holdings-portfolio',
            'kenetic-capital-portfolio',
            'alameda-research-portfolio',
            'multicoin-capital-portfolio',
            'okex-blockdream-ventures-portfolio',
          ],
          max_supply: null,
          circulating_supply: 336790397.21856374,
          total_supply: 511616946.142289,
          platform: null,
          cmc_rank: 9,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          last_updated: '2022-05-11T19:31:00.000Z',
          quote: {
            USD: {
              price: 49.30050469539828,
              volume_24h: 3909653489.1398673,
              volume_change_24h: 0.5109,
              percent_change_1h: -5.53617221,
              percent_change_24h: -28.01523147,
              percent_change_7d: -46.08439445,
              percent_change_30d: -51.52402066,
              percent_change_60d: -39.75694873,
              percent_change_90d: -54.69958219,
              market_cap: 16603936559.438854,
              market_cap_dominance: 1.2874,
              fully_diluted_market_cap: 25222973655.53,
              last_updated: '2022-05-11T19:31:00.000Z',
            },
          },
        },
        {
          id: 74,
          name: 'Dogecoin',
          symbol: 'DOGE',
          slug: 'dogecoin',
          num_market_pairs: 473,
          date_added: '2013-12-15T00:00:00.000Z',
          tags: [
            'mineable',
            'pow',
            'scrypt',
            'medium-of-exchange',
            'memes',
            'payments',
            'doggone-doggerel',
            'bnb-chain',
          ],
          max_supply: null,
          circulating_supply: 132670764299.89409,
          total_supply: 132670764299.89409,
          platform: null,
          cmc_rank: 10,
          self_reported_circulating_supply: null,
          self_reported_market_cap: null,
          last_updated: '2022-05-11T19:32:00.000Z',
          quote: {
            USD: {
              price: 0.08542794492200807,
              volume_24h: 2347994460.282947,
              volume_change_24h: 35.0112,
              percent_change_1h: -3.11429441,
              percent_change_24h: -23.27767664,
              percent_change_7d: -36.35440405,
              percent_change_30d: -38.75478556,
              percent_change_60d: -26.34581687,
              percent_change_90d: -44.52389879,
              market_cap: 11333790745.372066,
              market_cap_dominance: 0.8802,
              fully_diluted_market_cap: 11333790745.37,
              last_updated: '2022-05-11T19:32:00.000Z',
            },
          },
        },
      ]

const CmcTable = () => {
    const [ coinData,setCoinData ] = useState(data);
    // const { getTopTenCoins } = useContext(CoinbaseContext);
    
    // useEffect(() => {
    //   setData();
    // }, [])
    
    // const setData = useCallback(async () => {
    //     try {
    //         let apiResponse = await getTopTenCoins()
    //         let filteredResponse = []
    //         for (let i = 0; i < apiResponse?.length; i++) {
    //             const element = apiResponse[i]
    //             if (element.cmc_rank <= 10) filteredResponse?.push(element)
    //         }
    //         setCoinData(filteredResponse);
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }, [getTopTenCoins])
    
  return (
    <div className='text-white font-bold' >
      <div className='mx-auto max-w-screen-2xl ' >
        <table className="w-full">
          {/* <CBTableHeader /> */}
          <CBTableHeader />
          { coinData && coinData ? (
            coinData?.map((coin,index) => {
              return (
                <CBTableRow 
                  key={coin.id}
                  starNum = {coin.cmc_rank}
                  coinName = {coin.name}
                  coinSymbol = {coin.symbol}
                  coinIcon = {btc}
                  showBuy = {true}
                  hRate={coin.quote.USD.percent_change_24h}
                  dRate = {coin.quote.USD.percent_change_7d}
                  hRateIsIncrement = {true}
                  dRateIsIncrement = {false}
                  price={coin.quote.USD.price}
                  marketCapValue = {coin.quote.USD.market_cap}
                  volumeCryptoValue = {coin.quote.USD.volume_24h}
                  volumeValue = {coin.total_supply}
                  circulatingSupply = {coin.circulating_supply}
                />
              )
            })
          ) : (
            <></>
          ) }
        </table>
      </div>
    </div>
  )
}

export default CmcTable