/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
	VMM.Language = {
		lang: "hu",
		api: {
			wikipedia: "hu"
		},
		date: {
			month: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
			month_abbr: ["Jan.", "Febr.", "Márc", "Ápr.", "Máj.", "Jún.", "Júl.", "Aug.", "Szept.", "Okt.", "Nov.", "Dec."],
			day: ["Vasárnap","Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
			day_abbr: ["Vas.","Hétfő", "Kedd", "Szer.", "Csüt.", "Pén.", "Szom."]
		}, 
		dateformats: {
			year: "yyyy",
			month_short: "mmm",
			month: "yyyy mmmm",
			full_short: "mmm d",
			full: "yyyy mmmm d",
			time_no_seconds_short: "HH:MM",
			time_no_seconds_small_date: "HH:MM '<br/><small>'yyyy mmmm d'</small>'",
			full_long: "yyyy mmm d',' HH:MM",
			full_long_small_date: "HH:MM '<br/><small>yyyy mmm d'</small>'"
		},
		messages: {
			loading_timeline: "Az idővonal betöltése... ",
			return_to_title: "Vissza a címhez",
			expand_timeline: "Nagyítás",
			contract_timeline: "Kicsinyítés",
			wikipedia: "A Wikipédiából, a szabad enciklopédiából",
			loading_content: "Tartalom betöltése",
			loading: "Betöltés"
		}
	}
}
