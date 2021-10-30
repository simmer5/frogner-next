import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../assets/FrognerByggLogo.svg'
import styles from './TopNav.module.scss'

const TopNav = () => {
	const [checked, setChecked] = useState(false)
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>
				<Link href='/'>
					<a>
						<Image src={Logo} alt='Frogner Bygg Service' width={150} />
					</a>
				</Link>
			</h1>
			<input
				type='checkbox'
				id='nav-toggle'
				className={styles.navToggle}
				checked={checked}
			/>

			<nav className={styles.nav}>
				<ul>
					<li onClick={() => setChecked(false)}>
						<Link href='/'>
							<a>Hjem</a>
						</Link>
					</li>
					<li onClick={() => setChecked(false)}>
						<Link href='/kompetanser'>
							<a>Tjenester</a>
						</Link>
					</li>
					<li onClick={() => setChecked(false)}>
						<Link href='/kontakt'>
							<a>Kontakt oss</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div
				className={styles.labelContainer}
				onClick={() => setChecked(!checked)}
			>
				<label htmlFor='navToggle' className={styles.navToggleLabel}>
					<span></span>
				</label>
			</div>
		</header>
	)
}

export default TopNav
