import React from 'react'
import Image from 'next/image'
import styles from './KompetanseCard.module.scss'

const KompetanseBtn = ({ title, img, alt }) => {
	return (
		<div className={styles.container}>
			<Image
				src={img}
				alt={alt}
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>
			<div className={styles.titleContainer}>
				<div className={styles.title}>{title}</div>
			</div>
		</div>
	)
}

export default KompetanseBtn
