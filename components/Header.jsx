import React from 'react'
import Image from 'next/image'
import Search from "../assets/svg/search"
import { ConnectButton } from 'web3uikit';

const styles = {
    header: `bg-[#171718] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4 `,
    nav:`flex justify-center items-center gap-[20px]`,
    navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-0 ring-4`,
    inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
    input: `bg-transparent outline-none text-white w-70 ml-3`
};

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        src={
          'https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg'
        }
        alt="Logo"
        width={220}
        height={220}
      />
      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptocurrency</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Exchanges</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>NFT</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptotown</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Portfolio</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Watchlist</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Products</div>
            <div className={styles.badge} />
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Learn</div>
          </div>
        </nav>
        <div className="flex items-center">
          {/* <ConnectButton /> */}
          <ConnectButton />
          <div className={styles.inputContainer}>
              {/* <Search /> */}
              <Search />
              <input type="text" className={styles.input} placeholder="Search..." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header