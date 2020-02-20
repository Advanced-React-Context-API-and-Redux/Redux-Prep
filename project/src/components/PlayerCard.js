import React from "react";

import { connect } from "react-redux";

const PlayerCard = props => {
    console.log(`Card props`, props)
    return(
        <div>
            <h2>{props.player.name}</h2>
            <h3>{props.player.rank}</h3>
            <h3>{props.player.nickname}</h3>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

export default connect (
    mapStateToProps,
    {}
)(PlayerCard)