import React,{ useEffect, useState } from 'react'
import Header from "../../components/Header";
import CBPriceConverter from '../../components/CBPriceConverter';
import Graph from '../../components/Graph';
import Chat from "../../components/Chat"
import solana from "../../assets/solana.png"
import Usd from '../../assets/svg/usd'

const styles = {
  activeTab: `p-2 px-2 mr-2 rounded-lg bg-[#171924]`,
  tabItem: `px-2`,
  tabContainer: `flex items-center p-2 rounded-xl bg-[#222531] border border-gray-500/10 text-sm`,
  info: `min-h-screen`,
  main: `text-white mx-auto max-w-screen-2xl`,
  flexStart: ` flex items-start`,
  flexBetween: `flex justify-between`,
  flexBetweenCenter: `flex justify-between items-center`,
  tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
  flexCenter: `flex items-center`,
}

const Currencies = () => {
    const [coinName, setCoinName] = useState('');
    const [coinSymbol, setCoinSymbol] = useState('');
    const [price, setPrice] = useState('');

    useEffect(() => {
        getUrlData();
    },[])
    
    const getUrlData = async () => {
        const queryString = window.location.search
        const urlParams = new URLSearchParams(queryString);
        setCoinName(urlParams.get('coin'))
        setPrice(urlParams.get('price').toLocaleString())
        setCoinSymbol(urlParams.get('symbol'))
    }

  return (
    <>
      <Header />
      <div className={styles.info}>
        <main className={styles.main}>
          <div className={styles.flexStart}>
            <div className={styles.tabContainerWrapper}>
              <div className={styles.flexBetween}>
                <div className={styles.tabContainer}>
                  <p className={styles.activeTab}>Price</p>
                  <p className={styles.tabItem}>Market Cap</p>
                  <p className={styles.tabItem}>Trading View</p>
                  <p className={styles.tabItem}>History</p>
                </div>
                <div className={styles.tabContainer}>
                  <p className={styles.activeTab}>1D</p>
                  <p className={styles.tabItem}>2D</p>
                  <p className={styles.tabItem}>1M</p>
                  <p className={styles.tabItem}>3M</p>
                  <p className={styles.tabItem}>1Y</p>
                  <p className={styles.tabItem}>YTD</p>
                  <p className={styles.tabItem}>ALL</p>
                  <p className={styles.tabItem}>LOG</p>
                </div>
              </div>
              <br />
              {/* <Graph /> */}
              <Graph />
              <br />
              <div className={styles.flexBetweenCenter}>
                <div className="flex">
                  <div className={styles.flexCenter}>
                    <input className="outline-none" type="checkbox" /> &nbsp;
                    USD
                  </div>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className={styles.flexCenter}>
                    <input type="checkbox" /> &nbsp; BTC
                  </div>
                </div>
                  <p>
                    Want more data?
                    <span className="text-[#6188FF]">Check out our API</span>
                  </p>
              </div>
                <br />
                <br />
                {/* <CBPriceConvertor 
                        from={coinName}
                        fromSymbol={coinSymbol}
                        fromLogo={solana}
                        toLogo={<Usd />}
                        price={price}
                        to='United States Dollars'
                        toSymbol='USD'
                      /> 
                  */}
                <CBPriceConverter
                  from={coinName}
                  fromSymbol={coinSymbol}
                  fromLogo={solana}
                  toLogo={<Usd />}
                  price={price}
                  to="United States Dollars"
                  toSymbol="USD"
                />
            </div>
              <div className="ml-5 pt-10">
                  {/* <Chat /> */}
                  <Chat />
              </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Currencies;