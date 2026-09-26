import { useState } from "react";
import "./App.css";

function Navbar() {
    return (
        <nav>
            <h2>IPL Booking</h2>

            <div>
                <a href="#home">Home</a>
                <a href="#matches">Matches</a>
                <a href="#booking">Book Ticket</a>
            </div>
        </nav>
    );
}

function Hero() {
    return (
        <section id="home" className="hero">
            <h1>Experience The Stadium Energy Live!</h1>
            <p>Book your IPL tickets and enjoy live cricket.</p>
            <button>Book Now</button>
        </section>
    );
}

function MatchCard({ match, onBook }) {
    return (
        <div className="match-card">
            <h3>{match.teams}</h3>
            <p><strong>Date:</strong> {match.date}</p>
            <p><strong>Venue:</strong> {match.venue}</p>
            <p><strong>Price:</strong> ₹{match.price}</p>

            <button onClick={() => onBook(match)}>
                Book Ticket
            </button>
        </div>
    );
}

function App() {
    const [selectedMatch, setSelectedMatch] = useState(null);

    const matches = [
        {
            teams: "CSK vs MI",
            date: "03-09-2026",
            venue: "Chepauk Stadium",
            price: 1200
        },
        {
            teams: "RCB vs SRH",
            date: "04-09-2026",
            venue: "Chinnaswamy Stadium",
            price: 1500
        },
        {
            teams: "PBKS vs CSK",
            date: "05-09-2026",
            venue: "Punjab Cricket Association Stadium",
            price: 1000
        }
    ];

    function handleBooking(match) {
        setSelectedMatch(match);
    }

    return (
        <>
            <Navbar />

            <Hero />

            <main>
                <section id="matches">
                    <h2>IPL Matches</h2>

                    <div className="matches">
                        {matches.map((match, index) => (
                            <MatchCard
                                key={index}
                                match={match}
                                onBook={handleBooking}
                            />
                        ))}
                    </div>
                </section>

                <section id="booking">
                    <h2>Booking</h2>

                    {selectedMatch ? (
                        <p>
                            Selected Match: {selectedMatch.teams}
                        </p>
                    ) : (
                        <p>Select a match to book your ticket.</p>
                    )}
                </section>
            </main>
        </>
    );
}

export default App;