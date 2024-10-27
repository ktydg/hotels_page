import React from 'react'
import { Image, Overlay } from '@mantine/core'
import classes from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<Image
				height={292}
				src='https://s3-alpha-sig.figma.com/img/0c15/c653/9b286527e4d792ffe78dd619bf4da112?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n3Xe2fPmonQBqL1i~ANQX2-2SyVI0H~z1fmyTVOGEXvPoPBv11r2Jj2KLSROcX-jpfssFRECRAaUhr-4YX0KdpsT8DVwKhwXaknWWspjcAL6suqdvpip7jgZlU8ohUC3LN7g85CidLxnPO04L6YlogNEtGTP~eeGfFkeCa~DKbOrFtq79RVRcG4IWfjlEcumXV8Siv8WikHD8FFF6prCknybdAuEZS5p7PAPjcZglC5TqHKFP77ruLAEbmwy3P9HXjhDnuPAyO5eyPEhrRAm2z393X5DVwv9JS3IjPmXKlM7qUTn5YaawLzvrA9pkxZLfI6wQoju2RA~7rE-iHvPJg__'
			/>
			<Overlay color='#000' backgroundOpacity={0.4} />
		</footer>
	)
}

export default React.memo(Footer)
