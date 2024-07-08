import React from 'react'
import make from './Images/team_make.png';
import jinny from './Images/team_jinny_owen.png';
import mia_lobey from './Images/team_mia_lobey.png';
import john from './Images/team_john.png';
import henry from './Images/team_henry.png';
import lobey from './Images/team_lobey.png';
import Subscribe from './Subscribe';
import Footer from './Footer';

export default function Team() {
    return (
        <>
            <div className="team_top">
                <h2>Meet Our Team</h2>
                <p>We write various things related to furniture, from tips and what things <br></br>
                    I need to pay attention to when choosing furniture</p>
            </div>

            <div className="team_cards">
                <div className="team_cards_wrapper">
                    <div class="new_card_group card-group">
                        <div class="card">
                            <img src={make} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h2 class="team-card-title">Make Jhane</h2>
                                <p class="card-text"><small class="text-muted">Finance Manager</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={jinny} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h2 class="team-card-title">Jinny Owen</h2>
                                <p class="card-text"><small class="text-muted">Marketing Manager</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={mia_lobey} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h2 class="team-card-title">Mia Lobey</h2>
                                <p class="card-text"><small class="text-muted">Accountant</small></p>
                            </div>
                        </div>
                    </div>

                    <div class="new_card_group card-group">
                        <div class="card">
                            <img src={john} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h2 class="team-card-title">Make Jhane</h2>
                                <p class="card-text"><small class="text-muted">Finance Manager</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={henry} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h2 class="team-card-title">Jinny Owen</h2>
                                <p class="card-text"><small class="text-muted">Marketing Manager</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <img src={lobey} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h2 class="team-card-title">Mia Lobey</h2>
                                <p class="card-text"><small class="text-muted">Accountant</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Subscribe/>
            <Footer/>
        </>
    )
}
