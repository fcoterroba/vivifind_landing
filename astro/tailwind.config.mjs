/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#3A86FF',
					50: '#f0f6ff',
					100: '#e0edff',
					200: '#bae0ff',
					300: '#7cc7ff',
					400: '#38b2ff',
					500: '#3A86FF', 
					600: '#2a6ee6',
					700: '#2156cc',
					800: '#1d48a6',
					900: '#1e3e85',
					950: '#142552',
				},
				surface: {
					DEFAULT: '#F9FAFB',
					dark: '#0F172A',
				}
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.8s ease-out',
			},
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                }
            }
		},
	},
	plugins: [],
}
