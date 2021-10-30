import React from 'react'
import { useState } from 'react'

import styles from './TopNav.module.scss'

const TopNav = () => {
	const [checked, setChecked] = useState(false)
	return (
		<header className={styles.header}>
			<h1 className={styles.logo}>Logo</h1>
			<input
				type='checkbox'
				id='nav-toggle'
				className={styles.navToggle}
				checked={checked}
			/>

			<nav className={styles.nav}>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Blog</a>
					</li>
					<li>
						<a href='#'>Contact</a>
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
