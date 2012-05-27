/* LANGUAGE 
================================================== */
if(typeof VMM != 'undefined') {
    VMM.debug = false;
    VMM.Language = {
        lang: "pl",
        api: {
            wikipedia: "pl"
        },

        date: {
            month: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            month_abbr: ["Sty.", "Lut.", "Mar.", "Kwi.", "Maj.", "Cze.", "Lip.", "Sie.", "Wrz.", "Paź.", "Lis.", "Gru."],
            day: ["Niedziela","Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            day_abbr: ["Nie.", "Pon.","Wto.", "Śro.", "Czw.", "Pią.", "Sob."],
        }, 
        dateformats: {
            year: "yyyy",
            month_short: "mmm",
            month: "mmmm yyyy",
            full_short: "d mmm",
            full: "d mmmm yyyy",
            time_no_seconds_short: "HH:MM",
            time_no_seconds_small_date: "HH:MM'<br/><small>'d mmmm yyyy'</small>'",
            full_long: "dddd',' d mmm yyyy 'um' HH:MM",
            full_long_small_date: "HH:MM'<br/><small>'dddd',' d mmm yyyy'</small>'",
        },
        messages: {
            loading_timeline: "Ładowanie Timeline... ",
            return_to_title: "Wróć do tutułu",
            expand_timeline: "Rozszerz Timeline",
            contract_timeline: "Umowa Timeline",
            wikipedia: "Z Wikipedii, wolnej encyklopedii",
            loading_content: "Ładowanie zawartości"
        }
    }
}
