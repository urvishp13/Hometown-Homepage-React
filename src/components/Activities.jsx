import Activity from "./Activity"

export default function Activities() {
    return (
        <section className="activities-section">
            <h3 className="activities-section__title">Top three activities to do at Torshov</h3>
            <div className="activities">
                <Activity 
                    img="/images/theatre.jpg"
                    alt="a theatre with columns"
                    title="Attend a show or a concert"
                    desc="The Torshov Theatre is a great place to spend your night out."
                />

                <Activity 
                    img="/images/park.jpg"
                    alt="a park"
                    title="Go for a picnic in the local park"
                    desc="The Torshov Park is perfect for picnic, getting some tan, or just chilling out."
                />
                
                <Activity 
                    img="/images/sports.jpg"
                    alt="volleyball sitting in the sand of a volleyball court"
                    title="Play sports at the Lilleborg field"
                    desc="Play volleyball, football, basket ball or lift some weights."
                />
            </div>
        </section>
    )
}