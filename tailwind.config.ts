
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for our platform
				brand: {
					blue: {
						DEFAULT: '#1E3A8A',
						50: '#EBF0FF',
						100: '#D1E0FF',
						200: '#A3C1FF',
						300: '#75A2FF',
						400: '#4783FF',
						500: '#3B82F6',
						600: '#1E64D0',
						700: '#1E4CAA',
						800: '#1E3A8A',
						900: '#162C6A',
					},
					orange: {
						DEFAULT: '#F97316',
						50: '#FFF8EB',
						100: '#FFEBC7',
						200: '#FFD69A',
						300: '#FFC06D',
						400: '#FFAA40',
						500: '#F97316',
						600: '#DD6112',
						700: '#C1500F',
						800: '#A5400C',
						900: '#893009',
					},
					// New Scale-like colors
					purple: {
						DEFAULT: '#A855F7',
						50: '#FAF5FF',
						100: '#F3E8FF',
						200: '#E9D5FF',
						300: '#D8B4FE',
						400: '#C084FC',
						500: '#A855F7',
						600: '#9333EA',
						700: '#7E22CE',
						800: '#6B21A8',
						900: '#581C87',
					},
					dark: {
						DEFAULT: '#151515',
						50: '#2D2D2D',
						100: '#262626',
						200: '#222222',
						300: '#1F1F1F',
						400: '#1A1A1A',
						500: '#151515',
						600: '#111111',
						700: '#0D0D0D',
						800: '#090909',
						900: '#050505',
					}
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-in-up': {
					from: { 
						opacity: '0',
						transform: 'translateY(10px)'
					},
					to: { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow': {
					'0%, 100%': { 
						boxShadow: '0 0 10px rgba(168, 85, 247, 0.7), 0 0 20px rgba(168, 85, 247, 0.5)' 
					},
					'50%': { 
						boxShadow: '0 0 20px rgba(168, 85, 247, 0.9), 0 0 30px rgba(168, 85, 247, 0.7)' 
					}
				},
				'float': {
					'0%, 100%': { 
						transform: 'translateY(0)' 
					},
					'50%': { 
						transform: 'translateY(-10px)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'glow': 'glow 3s infinite ease-in-out',
				'float': 'float 6s infinite ease-in-out'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(45deg, rgba(21, 21, 21, 0.95), rgba(21, 21, 21, 0.8))',
				'card-gradient': 'linear-gradient(135deg, rgba(168, 85, 247, 0.15) 0%, rgba(76, 29, 149, 0.15) 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
