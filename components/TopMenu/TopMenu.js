import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './TopMenu.module.css'
import TopNav from '../TopNav/TopNav'

import Logo from '../../assets/FrognerByggLogo.svg'

const TopMenu = () => {
	return (
		// <header className={styles.header}>
		<>
			<TopNav />
			{/* <div className={styles.container}>
				<Link href='/'>
					<a>
						<Image src={Logo} alt='Frogner Bygg Service' width={150} />
					</a>
				</Link>

				<nav className={styles.nav}>
					<ul>
						{/* <li className={styles.item}>
							<Link href='/'>
								<a>Hjem</a>
							</Link>
						</li> */}
			{/* <li className={styles.item}>
							<Link href='/kompetanser'>
								<a>Tjenester</a>
							</Link>
						</li>
						<li className={styles.item}>
							<Link href='/kontakt'>
								<a>Kontakt oss</a>
							</Link>
						</li>
					</ul> */}
			{/* </nav> */}
			{/* </div> */}
			{/* </header> */}
		</>
	)
}

export default TopMenu
