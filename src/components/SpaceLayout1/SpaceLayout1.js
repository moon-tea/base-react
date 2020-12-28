import React from 'react';
import PropTypes from 'prop-types';
import './SpaceLayout1.scss';

const SpaceLayout1 = () => (
    <div className="SpaceLayout1">
        <div className="Header">
            <div> School Sports Eduction Board </div>
            <div> Thursday, September 3, 2018 </div>
            <div> Welcome, Teacher Zhang </div>
            <nav> Menu (hamburger icon) </nav>
        </div>
        <div>
            <div className="faction-panel">
                <div className="faction-header">
                    <img className="faction-art" />
                    <h2 className="faction-name">The Conclave of Granite</h2>
                    <h4 classNAme="faction-rule"> Faction Rules: </h4>
                    <ol>
                        <li>
                            <h5>Defensive By Default</h5>
                            <p>Defend 3 in every land where you have 2 influence</p>
                        </li>
                    </ol>
                </div>
                <div className="industry">
                    <h3 className="industry__header"> Industry: (Pick One) </h3>
                    <div className="industry__options">
                        <div className="industry__option">
                            <div className="industry__action__recharge-all">
                                <div className="icon">
                                    <div>(Recharge Icon)</div>
                                </div>
                                <span className="industry__action__text"> Recharge Chips </span>
                            </div>
                            <div className="industry__action__add-influence">
                                <div className="icon">
                                    <div>(Influence Icon)</div>
                                </div>
                                <span className="industry__action__text">
                                    Add Influence up to 2 away
                                </span>
                            </div>
                        </div>
                        <div className="industry__option">
                            <div className="industry__action__gain-chip">
                                <div className="icon">
                                    <div>(Gain Chip Icon)</div>
                                </div>
                                <span className="industry__action__text">Gain 1 Chip</span>
                            </div>
                            <div className="industry__action__add-influence">
                                <div className="icon">
                                    <div>(Influence Icon)</div>
                                </div>
                                <span className="industry__action__text">
                                    Add Influence up to 0 away
                                </span>
                            </div>
                        </div>
                        <div className="industry__option">
                            <div className="industry__action__add-influence">
                                <div className="icon">
                                    <div>(Influence Icon)</div>
                                </div>
                                <span className="industry__action__text">
                                    Add Influence up to 1 away
                                </span>
                            </div>
                            <div className="industry__action__get-resource">
                                <div className="icon">
                                    <div>(resource Icon)</div>
                                </div>
                                <span className="industry__action__text">Gain 2 resource</span>
                            </div>
                        </div>
                    </div>
                    <div className="influence">
                        <div> Resource / Turn </div>
                        <ol className="resource">
                            <li className="resource__amount">2</li>
                            <li className="resource__amount--covered">3</li>
                            <li className="resource__amount--covered">4</li>
                            <li className="resource__amount--covered">6</li>
                            <li className="resource__amount--covered">7</li>
                            <li className="resource__amount--covered">8</li>
                        </ol>
                        <div> Chips / Turn </div>
                        <ol className="chip">
                            <li className="chip__amount">1</li>
                            <li className="chip__amount--covered">1</li>
                            <li className="chip__amount--covered">2</li>
                            <li className="chip__amount--covered">2</li>
                            <li className="chip__amount--covered">3</li>
                            <li className="chip__amount--covered">4</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="map">Stuff</div>
            <div className="rightpanel">Stuff</div>
        </div>
        <div className="footer">
            <div className="left">
                <div>Phase: Setup</div>
                <div>Undo</div>
                <div>Corruption [x][ ][ ][ ]</div>
                <div>Corruption LeveL: [ ][ ][ ] </div>
                <div>Infested: [ ][ ]-[ ][ ]</div>
            </div>
            <div className="Enemy-Action">
                <div className="Attack">Industrial</div>
                <div className="Build">Economic</div>
                <div className="Warp">Political</div>
            </div>
        </div>
    </div>
);

SpaceLayout1.propTypes = {};

SpaceLayout1.defaultProps = {};

export default SpaceLayout1;
