const MyApp = () => {
    return(
        <div className = "container">
            <h1>Robert Downey Jr.</h1>

            <div className = "paraDivs">
            <p>Robert John Downey Jr. (born April 4, 1965) is an American actor. His films as a leading actor have grossed over $14 billion worldwide, making him one of the highest-grossing actors of all time. Downey's career has been characterized by some early success, a period of drug-related problems and run-ins with the law, and a surge in popular and commercial success since the late 2000s. In 2008, Downey was named by Time magazine as one of the 100 most influential people in the world. From 2013 to 2015, he was listed by Forbes as Hollywood's highest-paid actor.
            </p>
            </div>

            <div className = "paraDivs">
                <p>
                Downey made his acting comeback in the 2003 film The Singing Detective, after Mel Gibson paid his insurance bond because completion bond companies would not insure him.He went on to star in the black comedy Kiss Kiss Bang Bang (2005), the thriller Zodiac (2007), and the action comedy Tropic Thunder (2008), the latter which earned him an Academy Award nomination for Best Supporting Actor. Downey gained global recognition for starring as Iron Man in ten <a href = "https://en.wikipedia.org/wiki/Marvel_Cinematic_Universe" target="_blank">Marvel Cinematic Universe</a> (MCU) films, from Iron Man (2008) to Avengers: Endgame (2019). He has also played Sherlock Holmes in Guy Ritchie's Sherlock Holmes (2009), which earned him his second Golden Globe, and in its sequel, Sherlock Holmes: A Game of Shadows (2011).
                </p>
            </div>

            <div className = "paraDivs">
                <p>
                Downey has also taken on dramatic parts in The Judge (2014) and Oppenheimer (2023), winning an Academy Award, a Golden Globe, and a BAFTA Award for Best Supporting Actor for his portrayal of Lewis Strauss in the latter. For playing multiple characters in the black comedy miniseries The Sympathizer (2024), he received a nomination for a Primetime Emmy Award. He made his Broadway debut playing the title role in the play McNeal (2024).
                </p>
            </div>
        </div>
    )
}

const rootDiv = document.querySelector(".root");
const root = ReactDOM.createRoot(rootDiv);
root.render(
    <MyApp></MyApp> );