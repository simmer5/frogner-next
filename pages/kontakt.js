import React from 'react'
import styles from '../styles/Kontakt.module.css'

const kontakt = () => {
	return (
		<div className={styles.main}>
			<h1>Frogner bygg sevice AS</h1>
			<p className={styles.paragraf}>
				org.nr. 915 049 842 {<br />}Sundbyveien 111A, 3477 BÅTSTØ
			</p>

			<h2 className={styles.kontakt}>
				tel. 400 00 000 {<br />} frogner@frognerbyggas.no
			</h2>
		</div>
	)
}

export default kontakt
