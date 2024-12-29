<script context="module">
	export const flexStyles = {
		startCenter: 'flex items-start justify-center gap-2',
		startStart: 'flex items-start justify-start gap-2',
		startEnd: 'flex items-start justify-end gap-2',
		startBetween: 'flex items-start justify-between gap-2',
		startEvenly: 'flex items-start justify-evenly gap-2',
		startAround: 'flex items-start justify-around gap-2',

		centerCenter: 'flex items-center justify-center gap-2',
		centerStart: 'flex items-center justify-start gap-2',
		centerEnd: 'flex items-center justify-end gap-2',
		centerBetween: 'flex items-center justify-between gap-2',
		centerEvenly: 'flex items-center justify-evenly gap-2',
		centerAround: 'flex items-center justify-around gap-2',

		endCenter: 'flex items-end justify-center gap-2',
		endStart: 'flex items-end justify-start gap-2',
		endEnd: 'flex items-end justify-end gap-2',
		endBetween: 'flex items-end justify-between gap-2',
		endEvenly: 'flex items-end justify-evenly gap-2',
		endAround: 'flex items-end justify-around gap-2',

		stretchCenter: 'flex items-stretch justify-center gap-2',
		stretchStart: 'flex items-stretch justify-start gap-2',
		stretchEnd: 'flex items-stretch justify-end gap-2',
		stretchBetween: 'flex items-stretch justify-between gap-2',
		stretchEvenly: 'flex items-stretch justify-evenly gap-2',
		stretchAround: 'flex items-stretch justify-around gap-2'
	};

	export const gradientStyles = {
		cyanLight: 'bg-gradient-to-br from-cyan-50 via-cyan-100 to-cyan-200',
		cyanNormal: 'bg-gradient-to-br from-cyan-300 via-cyan-400 to-cyan-500',
		cyanDark: 'bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800',
		cyanTransparent: 'bg-gradient-to-tl from-transparent via-cyan-100 to-transparent',
		cyanHover: 'hover:bg-gradient-to-tl hover:from-cyan-200 hover:via-cyan-300 hover:to-cyan-400',
		cyanToBlue: 'bg-gradient-to-tr from-cyan-200 via-blue-300 to-cyan-300',

		blueLight: 'bg-gradient-to-bl from-blue-50 via-blue-100 to-blue-200',
		blueNormal: 'bg-gradient-to-bl from-blue-300 via-blue-400 to-blue-500',
		blueDark: 'bg-gradient-to-bl from-blue-600 via-blue-700 to-blue-800',
		blueTransparent: 'bg-gradient-to-tl from-transparent via-blue-500 to-transparent',
		blueToCyan: 'bg-gradient-to-t from-blue-400 via-cyan-400 to-cyan-200',
		blueHover: 'hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-300',

		greenLight: 'bg-gradient-to-b from-green-100 via-green-200 to-green-300',
		greenNormal: 'bg-gradient-to-b from-green-400 via-green-500 to-green-600',
		greenDark: 'bg-gradient-to-b from-green-700 via-green-800 to-green-900',
		greenToCyan: 'bg-gradient-to-br from-green-400 via-cyan-400 to-blue-400',
		greenTransparent: 'bg-gradient-to-tl from-transparent via-green-400 to-transparent',

		purpleLight: 'bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300',
		purpleNormal: 'bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600',
		purpleDark: 'bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900',
		purpleToIndigo: 'bg-gradient-to-tl from-purple-500 via-indigo-500 to-blue-500',
		purpleToCyan: 'bg-gradient-to-tr from-purple-400 via-cyan-400 to-blue-400',

		redLight: 'bg-gradient-to-t from-red-100 via-red-200 to-red-300',
		redNormal: 'bg-gradient-to-t from-red-400 via-red-500 to-red-600',
		redDark: 'bg-gradient-to-t from-red-700 via-red-800 to-red-900',
		redToPink: 'bg-gradient-to-tr from-red-400 via-pink-400 to-pink-500',
		redToOrange: 'bg-gradient-to-bl from-red-500 via-orange-400 to-yellow-300',

		yellowLight: 'bg-gradient-to-tl from-yellow-100 via-yellow-200 to-yellow-300',
		yellowNormal: 'bg-gradient-to-tl from-yellow-400 via-yellow-500 to-yellow-600',
		yellowDark: 'bg-gradient-to-tl from-yellow-700 via-yellow-800 to-yellow-900',
		yellowToPink: 'bg-gradient-to-t from-yellow-400 via-pink-400 to-red-400',

		cyanBlueLightHover:
			'hover:bg-gradient-to-tl hover:from-cyan-200 hover:via-blue-100 hover:to-cyan-300',
		cyanTransparentLighter:
			'bg-gradient-to-tl from-transparent via-cyan-100 via-40% to-transparent to-60%',
		blueTransparentDark: 'bg-gradient-to-tl from-transparent via-blue-700 via-70% to-transparent',
		cyanNormalMid:
			'bg-gradient-to-br from-cyan-500 from-50% via-cyan-400 via-60% to-cyan-700 to-70%',

		sunset: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
		ocean: 'bg-gradient-to-b from-blue-500 via-teal-400 to-green-400',
		fire: 'bg-gradient-to-tl from-red-500 via-orange-500 to-yellow-500',
		aurora: 'bg-gradient-to-br from-green-400 via-cyan-400 to-purple-500',
		dawn: 'bg-gradient-to-tr from-yellow-300 via-pink-300 to-purple-400',
		ice: 'bg-gradient-to-bl from-white via-cyan-100 to-white'
	};

	export const transitionStyles = {
		allInOut300: 'transition-all duration-300 ease-in-out',
		allInOut500: 'transition-all duration-500 ease-in-out',
		allLinear200: 'transition-all duration-200 ease-linear',
		allEaseIn400: 'transition-all duration-400 ease-in',
		allEaseOut600: 'transition-all duration-600 ease-out',

		opacityInOut200: 'transition-opacity duration-200 ease-in-out',
		opacityInOut500: 'transition-opacity duration-500 ease-in-out',
		opacityEaseIn300: 'transition-opacity duration-300 ease-in',
		opacityEaseOut400: 'transition-opacity duration-400 ease-out',

		transformInOut300: 'transition-transform duration-300 ease-in-out',
		transformEaseIn200: 'transition-transform duration-200 ease-in',
		transformEaseOut500: 'transition-transform duration-500 ease-out',
		transformLinear400: 'transition-transform duration-400 ease-linear',

		colorsInOut300: 'transition-colors duration-300 ease-in-out',
		colorsInOut500: 'transition-colors duration-500 ease-in-out',
		colorsEaseIn400: 'transition-colors duration-400 ease-in',
		colorsEaseOut200: 'transition-colors duration-200 ease-out',

		allInOut150: 'transition-all duration-150 ease-in-out',
		allInOut700: 'transition-all duration-700 ease-in-out',
		allInOut1000: 'transition-all duration-1000 ease-in-out',

		scaleInOut300: 'transition-transform duration-300 ease-in-out scale-105',
		scaleHover250: 'transition-transform duration-250 ease-in-out hover:scale-110',
		scaleEaseIn400: 'transition-transform duration-400 ease-in scale-100',

		shadowInOut200: 'transition-shadow duration-200 ease-in-out',
		shadowHover300: 'transition-shadow duration-300 ease-in-out hover:shadow-lg',
		shadowEaseOut400: 'transition-shadow duration-400 ease-out',

		heightInOut300: 'transition-height duration-300 ease-in-out',
		widthInOut300: 'transition-width duration-300 ease-in-out',
		heightEaseIn400: 'transition-height duration-400 ease-in',
		widthEaseOut400: 'transition-width duration-400 ease-out',

		hoverBg300: 'transition-colors duration-300 ease-in-out hover:bg-opacity-75',
		hoverScale400: 'transition-transform duration-400 ease-in-out hover:scale-110',
		hoverOpacity500: 'transition-opacity duration-500 ease-in-out hover:opacity-80'
	};

	export const borderStyles = {
		generalThin: 'border border-gray-200 rounded-sm shadow shadow-gray-100',
		generalMedium: 'border border-gray-300 rounded-md shadow shadow-gray-200',
		generalThick: 'border-2 border-gray-400 rounded-lg shadow shadow-gray-300',
		generalHover: 'border border-gray-300 rounded-md hover:shadow-lg hover:shadow-gray-400',

		blueThin: 'border border-blue-300 rounded-sm shadow shadow-blue-200',
		blueMedium: 'border border-blue-500 rounded-md shadow shadow-blue-300',
		blueThick: 'border-2 border-blue-600 rounded-lg shadow shadow-blue-400',
		blueFull: 'border border-blue-600 rounded-full shadow shadow-blue-500',
		blueHover: 'border border-blue-500 rounded-md hover:shadow-lg hover:shadow-blue-600',

		cyanThin: 'border border-cyan-300 rounded-sm shadow shadow-cyan-200',
		cyanMedium: 'border border-cyan-500 rounded-md shadow shadow-cyan-300',
		cyanThick: 'border-2 border-cyan-600 rounded-lg shadow shadow-cyan-400',
		cyanFull: 'border border-cyan-600 rounded-full shadow shadow-cyan-500',
		cyanHover: 'border border-cyan-500 rounded-md hover:shadow-lg hover:shadow-cyan-600',

		greenThin: 'border border-green-300 rounded-sm shadow shadow-green-200',
		greenMedium: 'border border-green-500 rounded-md shadow shadow-green-300',
		greenThick: 'border-2 border-green-600 rounded-lg shadow shadow-green-400',
		greenFull: 'border border-green-600 rounded-full shadow shadow-green-500',
		greenHover: 'border border-green-500 rounded-md hover:shadow-lg hover:shadow-green-600',

		redThin: 'border border-red-300 rounded-sm shadow shadow-red-200',
		redMedium: 'border border-red-500 rounded-md shadow shadow-red-300',
		redThick: 'border-2 border-red-600 rounded-lg shadow shadow-red-400',
		redFull: 'border border-red-600 rounded-full shadow shadow-red-500',
		redHover: 'border border-red-500 rounded-md hover:shadow-lg hover:shadow-red-600',

		purpleThin: 'border border-purple-300 rounded-sm shadow shadow-purple-200',
		purpleMedium: 'border border-purple-500 rounded-md shadow shadow-purple-300',
		purpleThick: 'border-2 border-purple-600 rounded-lg shadow shadow-purple-400',
		purpleFull: 'border border-purple-600 rounded-full shadow shadow-purple-500',
		purpleHover: 'border border-purple-500 rounded-md hover:shadow-lg hover:shadow-purple-600',

		yellowThin: 'border border-yellow-300 rounded-sm shadow shadow-yellow-200',
		yellowMedium: 'border border-yellow-500 rounded-md shadow shadow-yellow-300',
		yellowThick: 'border-2 border-yellow-600 rounded-lg shadow shadow-yellow-400',
		yellowFull: 'border border-yellow-600 rounded-full shadow shadow-yellow-500',
		yellowHover: 'border border-yellow-500 rounded-md hover:shadow-lg hover:shadow-yellow-600',

		multiColorHover: 'border border-blue-500 rounded shadow shadow-blue-300 hover:shadow-green-300',
		gradientBorder:
			'border border-transparent rounded-lg bg-gradient-to-r from-cyan-400 via-blue-400 to-green-400 p-0.5',
		hoverGlow: 'border border-gray-300 rounded-md hover:shadow-lg hover:shadow-yellow-500/50',

		roundedNone: 'rounded-none shadow-none',
		roundedSm: 'rounded-sm shadow-sm',
		roundedMd: 'rounded-md shadow-md',
		roundedLg: 'rounded-lg shadow-lg',
		roundedFull: 'rounded-full shadow-xl'
	};

	export const textStyles = {
		blueHeading1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800',
		blueHeading2: 'text-3xl md:text-4xl lg:text-5xl font-semibold text-blue-700',
		blueHeading3: 'text-2xl md:text-3xl lg:text-4xl font-medium text-blue-600',
		blueSubtitle: 'text-xl md:text-2xl font-semibold text-blue-500',
		blueTitle: 'text-lg md:text-xl font-bold text-blue-400',
		blueParagraph: 'text-base text-blue-300',
		blueSmallText: 'text-sm text-blue-200',

		cyanHeading1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-800',
		cyanHeading2: 'text-3xl md:text-4xl lg:text-5xl font-semibold text-cyan-700',
		cyanHeading3: 'text-2xl md:text-3xl lg:text-4xl font-medium text-cyan-600',
		cyanSubtitle: 'text-xl md:text-2xl font-semibold text-cyan-500',
		cyanTitle: 'text-lg md:text-xl font-bold text-cyan-400',
		cyanParagraph: 'text-base text-cyan-300',
		cyanSmallText: 'text-sm text-cyan-200',

		greenHeading1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-green-800',
		greenHeading2: 'text-3xl md:text-4xl lg:text-5xl font-semibold text-green-700',
		greenHeading3: 'text-2xl md:text-3xl lg:text-4xl font-medium text-green-600',
		greenSubtitle: 'text-xl md:text-2xl font-semibold text-green-500',
		greenTitle: 'text-lg md:text-xl font-bold text-green-400',
		greenParagraph: 'text-base text-green-300',
		greenSmallText: 'text-sm text-green-200',

		yellowHeading1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-800',
		yellowHeading2: 'text-3xl md:text-4xl lg:text-5xl font-semibold text-yellow-700',
		yellowHeading3: 'text-2xl md:text-3xl lg:text-4xl font-medium text-yellow-600',
		yellowSubtitle: 'text-xl md:text-2xl font-semibold text-yellow-500',
		yellowTitle: 'text-lg md:text-xl font-bold text-yellow-400',
		yellowParagraph: 'text-base text-yellow-300',
		yellowSmallText: 'text-sm text-yellow-200',

		redHeading1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-red-800',
		redHeading2: 'text-3xl md:text-4xl lg:text-5xl font-semibold text-red-700',
		redHeading3: 'text-2xl md:text-3xl lg:text-4xl font-medium text-red-600',
		redSubtitle: 'text-xl md:text-2xl font-semibold text-red-500',
		redTitle: 'text-lg md:text-xl font-bold text-red-400',
		redParagraph: 'text-base text-red-300',
		redSmallText: 'text-sm text-red-200',

		purpleHeading1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-purple-800',
		purpleHeading2: 'text-3xl md:text-4xl lg:text-5xl font-semibold text-purple-700',
		purpleHeading3: 'text-2xl md:text-3xl lg:text-4xl font-medium text-purple-600',
		purpleSubtitle: 'text-xl md:text-2xl font-semibold text-purple-500',
		purpleTitle: 'text-lg md:text-xl font-bold text-purple-400',
		purpleParagraph: 'text-base text-purple-300',
		purpleSmallText: 'text-sm text-purple-200',

		grayHeading1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800',
		grayHeading2: 'text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700',
		grayHeading3: 'text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600',
		graySubtitle: 'text-xl md:text-2xl font-semibold text-gray-500',
		grayTitle: 'text-lg md:text-xl font-bold text-gray-400',
		grayParagraph: 'text-base text-gray-300',
		graySmallText: 'text-sm text-gray-200'
	};

	export const scrollbar = {
		thinGray: 'scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100',
		thinGrayTransparent: 'scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent',
		wideGray: 'scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200',
		roundedGray:
			'scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-rounded',

		thinBlue: 'scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-100',
		wideBlue: 'scrollbar scrollbar-thumb-blue-500 scrollbar-track-blue-200',
		roundedBlue:
			'scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-200 scrollbar-rounded',

		thinCyan: 'scrollbar-thin scrollbar-thumb-cyan-300 scrollbar-track-cyan-100',
		wideCyan: 'scrollbar scrollbar-thumb-cyan-500 scrollbar-track-cyan-200',
		roundedCyan:
			'scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-cyan-200 scrollbar-rounded',

		thinGreen: 'scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-100',
		wideGreen: 'scrollbar scrollbar-thumb-green-500 scrollbar-track-green-200',
		roundedGreen:
			'scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-green-200 scrollbar-rounded',

		thinPurple: 'scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-100',
		widePurple: 'scrollbar scrollbar-thumb-purple-500 scrollbar-track-purple-200',
		roundedPurple:
			'scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-200 scrollbar-rounded',

		thinYellow: 'scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-yellow-100',
		wideYellow: 'scrollbar scrollbar-thumb-yellow-500 scrollbar-track-yellow-200',
		roundedYellow:
			'scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-yellow-200 scrollbar-rounded',

		thinRed: 'scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-red-100',
		wideRed: 'scrollbar scrollbar-thumb-red-500 scrollbar-track-red-200',
		roundedRed: 'scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-red-200 scrollbar-rounded',

		thinTransparent: 'scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent',
		roundedTransparent:
			'scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent scrollbar-rounded'
	};

	export const lineStyles = {
		verticalLightXs: 'w-0.5 h-6 bg-gray-100 mx-4',
		verticalLightSm: 'hidden md:block w-1 h-16 bg-gray-100',
		verticalLightMd: 'hidden md:block w-1 h-80 bg-gray-100',
		verticalLightLg: 'hidden lg:block w-1 h-96 bg-gray-100',
		verticalLightXl: 'hidden xl:block w-1 h-120 bg-gray-100',

		verticalNormalXs: 'w-0.5 h-6 bg-gray-200 mx-4',
		verticalNormalSm: 'hidden md:block w-1 h-16 bg-gray-200',
		verticalNormalMd: 'hidden md:block w-1 h-80 bg-gray-200',
		verticalNormalLg: 'hidden lg:block w-1 h-96 bg-gray-200',
		verticalNormalXl: 'hidden xl:block w-1 h-120 bg-gray-200',

		verticalDarkXs: 'w-0.5 h-6 bg-gray-600 mx-4',
		verticalDarkSm: 'hidden md:block w-1 h-16 bg-gray-600',
		verticalDarkMd: 'hidden md:block w-1 h-80 bg-gray-600',
		verticalDarkLg: 'hidden lg:block w-1 h-96 bg-gray-600',
		verticalDarkXl: 'hidden xl:block w-1 h-120 bg-gray-600',

		horizontalLightXs: 'w-full h-0.5 bg-indigo-100 my-2',
		horizontalLightSm: 'w-full h-0.5 bg-gray-200 my-2',
		horizontalLightMd: 'hidden md:block w-2/3 h-0.5 bg-gray-200',
		horizontalLightLg: 'hidden lg:block w-3/4 h-0.5 bg-gray-200',
		horizontalLightXl: 'hidden xl:block w-full h-0.5 bg-gray-200',

		horizontalNormalXs: 'w-full h-0.5 bg-indigo-100 my-2',
		horizontalNormalSm: 'w-full h-0.5 bg-gray-300 my-2',
		horizontalNormalMd: 'hidden md:block w-2/3 h-0.5 bg-gray-300',
		horizontalNormalLg: 'hidden lg:block w-3/4 h-0.5 bg-gray-300',
		horizontalNormalXl: 'hidden xl:block w-full h-0.5 bg-gray-300',

		horizontalDarkXs: 'w-full h-0.5 bg-indigo-100 my-2',
		horizontalDarkSm: 'w-full h-0.5 bg-gray-700 my-2',
		horizontalDarkMd: 'hidden md:block w-2/3 h-0.5 bg-gray-700',
		horizontalDarkLg: 'hidden lg:block w-3/4 h-0.5 bg-gray-700',
		horizontalDarkXl: 'hidden xl:block w-full h-0.5 bg-gray-700'
	};

	export const containerStyles = {
		containerDefault: 'p-4 px-6 m-4 border border-gray-300 rounded-md shadow-md bg-white',
		containerFullWidth: 'w-full p-6 m-4 border border-gray-200 rounded-lg shadow-lg bg-gray-100',
		containerResponsive:
			'p-4 md:p-8 lg:p-12 mx-4 md:mx-8 lg:mx-12 border border-gray-300 rounded-md shadow-md',
		containerCentered:
			'flex items-center justify-center w-full h-screen p-6 border border-gray-300 rounded-lg shadow-xl bg-white',
		containerCard: 'w-80 p-6 m-6 border border-gray-300 rounded-lg shadow-lg bg-white',
		containerGradient:
			'p-6 m-6 border border-transparent rounded-lg shadow-xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600',
		containerFixedSize: 'w-64 h-80 p-4 border border-gray-300 rounded-md shadow-lg bg-white',
		containerFullHeight: 'h-screen p-6 m-4 border border-gray-200 rounded-lg shadow-md bg-gray-50',
		containerFullScreenCentered:
			'fixed inset-0 m-auto w-2/3 h-2/3 p-6 border border-gray-300 rounded-lg shadow-xl bg-white',
		containerRoundedShadow: 'p-6 m-4 border border-gray-300 rounded-xl shadow-2xl bg-white',
		containerTransparent: 'p-6 m-4 border border-gray-300 rounded-md shadow-sm bg-transparent',
		containerWithOpacity:
			'p-6 m-4 border border-gray-300 rounded-md shadow-md bg-gray-800 bg-opacity-70',
		containerLargeShadow: 'p-8 m-6 border border-gray-300 rounded-lg shadow-2xl bg-white',
		containerHoverEffect:
			'p-6 m-4 border border-gray-300 rounded-md shadow-md bg-white hover:bg-gray-100 hover:shadow-lg transition-all',
		containerMinimal: 'p-2 m-2 border border-gray-200 rounded-md shadow-sm bg-white',
		containerFullScreen:
			'w-screen h-screen p-8 m-0 border border-gray-300 rounded-lg shadow-lg bg-white',
		containerFixedTop:
			'fixed top-0 left-0 w-full p-4 m-0 border border-gray-300 rounded-md shadow-lg bg-white',
		containerSmallLargeRadius:
			'w-48 h-48 p-4 m-4 border border-gray-300 rounded-3xl shadow-xl bg-white',
		containerRoundedTop:
			'w-full h-auto p-6 m-4 border border-gray-300 rounded-t-lg shadow-md bg-white',
		containerRoundedBottom:
			'w-full h-auto p-6 m-4 border border-gray-300 rounded-b-lg shadow-md bg-white',
		containerMultipleShadows:
			'p-6 m-4 border border-gray-300 rounded-lg shadow-md shadow-lg bg-white',
		containerGradientWithBorder:
			'p-6 m-4 border-4 border-transparent rounded-lg shadow-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-600',
		containerResponsivePaddingMargin:
			'p-4 md:p-6 lg:p-8 m-4 md:m-6 lg:m-8 border border-gray-300 rounded-md shadow-md bg-white',
		containerMaxWidth:
			'w-full max-w-4xl mx-auto p-6 m-4 border border-gray-300 rounded-md shadow-md bg-white'
	};
</script>
