var zodiac = [
	{
		sign: "aquarius",
		fortune: "knowledge, humanitarian, serious, insightful, duplicitous",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/aquarius-xxl.png"
	},
	{
		sign: "aries",
		fortune: "active, demanding, determined, effective, ambitious",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/aries-xxl.png"
	},
	{
		sign: "cancer",
		fortune: "emotion, diplomatic, intensity, impulsive, selective",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/cancer-2-xxl.png"
	},
	{
		sign: "capricorn",
		fortune: "determination, dominance, perservering, practical, willful",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/capricorn-xxl.png"
	},
	{
		sign: "gemini",
		fortune: "communication, indecision, inquisitive, intelligent, changeable",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/gemini-2-xxl.png"
	},
	{
		sign: "leo",
		fortune: "ruling, warmth, generosity, faithful, initiative",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/leo-2-xxl.png"
	},
	{
		sign: "libra",
		fortune: "balance, justice, truth, beauty, perfection",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/libra-2-xxl.png"
	},
	{
		sign: "pisces",
		fortune: "Fluctuation, Depth, Imagination, Reactive, Indecisive",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/pisces-2-xxl.png"
	},
	{
		sign: "sagittarius",
		fortune: "Philosophical, Motion, Experimentation, Optimism",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/sagittarius-2-xxl.png"
	},
	{
		sign: "scorpio",
		fortune: "Transient, Self-Willed, Purposeful, Unyielding",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/scorpio-2-xxl.png"
	},
	{
		sign: "taurus",
		fortune: "Security, Subtle strength, Appreciation, Instruction, Patience",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/taurus-2-xxl.png"
	},
	{
		sign: "virgo",
		fortune: "Analyzing, Practical, Reflective, Observation, Thoughtful",
		image: "http://www.iconsdb.com/icons/preview/icon-sets/web-2-deep-pink/virgo-2-xxl.png"
	}
]

// button for horoscope
function horoscope() {
	var userdata = document.getElementById("userdata")
	// confirm the element exists
	console.log(userdata)
	console.log("users value is: " + userdata.value)

	// loop through zodiac array
	for(i = 0; i < zodiac.length; i = i + 1) {
		// check what the users value is
		console.log("users value lowercase is: " + userdata.value.toLowerCase())
		// check the current item's sign in the zodiac array
		console.log("current zodiac sign in loop is: " + zodiac[i].sign)

		// if the value the user typed in and is equal to one of our signs then we move on to
		if(userdata.value.toLowerCase() === zodiac[i].sign) {
			// confirm the if statement ran
			console.log("if statement ran")
			// check values in the console before updating HTML
			console.log("users typed in: " + userdata.value)
			console.log("current image value is: " + zodiac[i].image)
			console.log("current fortune value is: " + zodiac[i].fortune)

			// Once through console display on screen and then return
			document.getElementById("yourSign").textContent = userdata.value
			document.getElementById("icon").src = zodiac[i].image
			document.getElementById("yourHoroscope").textContent = "best attributes: " + zodiac[i].fortune
			return
		}
		// if no matches are found
		console.log("no matches were found, user failed to type in a correct zodiac sign")
		document.getElementById("yourSign").textContent = "Not one of the signs. Try again!"
		document.getElementById("yourHoroscope").textContent = ""
		document.getElementById("icon").src = ""
	}
}
