/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],  
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'

		},
		colors: {
			// Brand colors
			background: "#0C1A2F",              // Twilight Navy
			"gradient-highlight": "#1A273F",    // Deep Space Blue
			"primary-accent": "#C7CCD6",        // Lunar Silver
			cta: "#A5F3FC",                     // Celestial Mist
			"text-main": "#F5F5F7",             // Stardust White
			"hover-glow": "#7B93D4",            // Moonbeam Indigo
		  },
		  textColor: {
			base: "#F5F5F7",                    // Default text
			accent: "#C7CCD6",                  // Accent text
			cta: "#A5F3FC",                     // CTA text
		  },
		  backgroundColor: {
			base: "#0C1A2F",                    // Base background
			highlight: "#1A273F",               // Section highlight
			cta: "#A5F3FC",                     // CTA button
			glow: "#7B93D4",                    // Hover glow
		  },
		  borderColor: {
			accent: "#C7CCD6",                  // For outlines or cards
			glow: "#7B93D4",
		  },
		  gradientColorStops: {
			twilight: "#0C1A2F",
			deep: "#1A273F",
		  },
		  backgroundImage:{
			"hero":"url('img/backgroundHero')"
		  }
		
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

