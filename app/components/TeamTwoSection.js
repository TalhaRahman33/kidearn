"use client"
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';

const TeamTwoSection = () => {
    return (
        <section className="team-two team-two--about-page">
            <div className="team-two__shape-left kidearn-splax" data-para-options='{"orientation": "left", "scale" : 2.1, "overflow" : true}'>
                <ExportedImage src="/images/team-2-shape-1.png" alt="kidearn" width={200} height={200} />
            </div>
            <div className="team-two__shape-right kidearn-splax" data-para-options='{"orientation": "right", "scale" : 2.1, "overflow" : true}'>
                <ExportedImage src="/images/team-2-shape-2.png" alt="kidearn" width={200} height={200} />
            </div>
            <div className="container">
                <div className="sec-title text-center">
                    <h6 className="sec-title__tagline">Our Teacher</h6>
                    <h3 className="sec-title__title">Meet our expert &amp; smart<br /> superheroes!</h3>
                </div>
                <div className="team-grid">
                    {/* Team Member 1 */}
                    <div className="team-card-two" style={{ '--accent-color': '#F25334' }}>
                        <div className="team-card-two__image">
                            <ExportedImage src="/images/team-2-1.jpg" alt="Jane Cooper" width={300} height={300} />
                        </div>
                        <div className="team-card-two__content">
                            <h3 className="team-card-two__title">
                                <Link href="/team-details">Jane Cooper</Link>
                            </h3>
                            <p className="team-card-two__designation">Swimming Teacher</p>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="team-card-two" style={{ '--accent-color': '#75C137' }}>
                        <div className="team-card-two__image">
                            <ExportedImage src="/images/team-2-2.jpg" alt="Cody Fisher" width={300} height={300} />
                        </div>
                        <div className="team-card-two__content">
                            <h3 className="team-card-two__title">
                                <Link href="/team-details">Cody Fisher</Link>
                            </h3>
                            <p className="team-card-two__designation">Art Teacher</p>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="team-card-two" style={{ '--accent-color': '#FFC326' }}>
                        <div className="team-card-two__image">
                            <ExportedImage src="/images/team-2-3.jpg" alt="Esther Howard" width={300} height={300} />
                        </div>
                        <div className="team-card-two__content">
                            <h3 className="team-card-two__title">
                                <Link href="/team-details">Esther Howard</Link>
                            </h3>
                            <p className="team-card-two__designation">Music Teacher</p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .team-grid {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                }

                .team-card-two {
                    flex: 1;
                    max-width: 30%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .team-card-two__image {
                    margin-bottom: 15px;
                }

                .team-card-two__content {
                    background: white;
                    padding: 10px;
                    border-radius: 8px;
                }

                @media (max-width: 768px) {
                    .team-grid {
                        flex-direction: column;
                    }
                    .team-card-two {
                        max-width: 100%;
                    }
                }
            `}</style>
        </section>
    );
};

export default TeamTwoSection;
