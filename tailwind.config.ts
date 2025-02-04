import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
screens: {
        'xs': '475px',  // Extra small devices
        'sm': '640px',  // Small devices
        'md': '728px',  // Medium devices
        'lg': '1024px', // Large devices
        'xl': '1280px', // Extra-large devices
        '2xl': '1536px', // Extra-extra-large devices
      },
  		colors: {
  			primary: {
  				DEFAULT: 'rgba(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			background: 'rgba(var(--background))',
  			lightbg: 'rgba(var(--lightbg))',
  			secbackground: 'hsl(var(--secbackground))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
			strip:'rgba(var(--strip))',
			lightstrip:'rgba(var(--lightstrip))',
			secondaryfont:'rgba(var(--secondaryfont))',
			newbutton:'rgba(var(--newbutton))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			lato: [
  				'var(--font-lato)'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
,
 backgroundImage: {
        'gradient': 'linear-gradient(180deg, #3369d6 0%, #04c .01%, #0036a3 100%)',
      },
boxShadow: {
        'custshadow': '0 1px #14141214, 0 -1px #0003 inset',
        'custshadow2': '0 1px 0 0 #ccdaf5',
      },
 fontSize: {
        // Custom font sizes
        'xxs': '0.625rem', // 10px
        'xxxl': '2.5rem',  // 40px
      },
      spacing: {
        // Custom padding/margin sizes
        '72': '18rem', // 288px
        '84': '21rem', // 336px
        '96': '24rem', // 384px
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
 