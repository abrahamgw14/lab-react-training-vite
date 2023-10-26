import React from "react";
import {useState} from "react"


function Greetings (props) {
    const [language, setLanguage] = useState("en")
    return(
        <div>
<select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
</select>

{language === "en" && <p>Hello! </p>}
{language === "de" && <p>Hallo!</p>}
{language === "es" && <p>Hola! </p>}
{language === "fr" && <p>Bonjour! </p>}
        </div>
    )
}

export default Greetings