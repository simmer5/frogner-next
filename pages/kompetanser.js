import React from 'react'
import styles from '../styles/Kompetanser.module.scss'
import KompetanseCard from '../components/KompetanseCard/KompetanseCard'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.jpg'

const kompetanser = () => {
	return (
		<div className={styles.main}>
			<KompetanseCard
				title='Nybygg '
				img={img1}
				alt='nybygg frogner bygg service'
			/>
			<KompetanseCard
				title='Renovering '
				img={img2}
				alt='renovering frogner bygg service'
			/>
			<KompetanseCard
				title='Tilbygg '
				img={img3}
				alt='tilbygg frogner bygg service'
			/>
			<KompetanseCard
				title='Rehabilitering '
				img={img4}
				alt='rehabilitering frogner bygg service'
			/>
		</div>
	)
}

export default kompetanser
