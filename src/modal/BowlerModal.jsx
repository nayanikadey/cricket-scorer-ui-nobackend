import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { toggleBowlerModal, chooseBowler } from '../innings/inningsReducer'
import CricketUtility from '../Utility/cricketUtility';
import { setBowlerStatus } from '../newGame/reducer';

const BowlerModal = (props) => (
  <div>
    <Modal isOpen={props.modal} toggle={props.toggleModal}>
      <ModalHeader>Select Bowler</ModalHeader>
      <ModalBody className='text-center'>
        {props.bowlers.map(bowler =>
          <Button
            outline
            value={bowler.id}
            onClick={(event) => props.updateCurrentBowler(event.target.value)}
            size="lg" block >
            {bowler.name}
          </Button>
        )}
      </ModalBody>
    </Modal>
  </div>
);

const mapStatesAsProps = (state) => {
  const currentBowler = state.inningsInformation.bowler;
  const bowlingTeam = CricketUtility.getBowlingTeam(state.gameInformation);
  const players = Object.keys(state.gameInformation[bowlingTeam].players)
    .reverse()
    .filter(element => element !== currentBowler)
    .map(key => ({
      id: key,
      name: state.gameInformation[bowlingTeam].players[key].name,
    }));

  return ({
    modal: state.inningsInformation.displayPopup,
    bowlers: players,
  })
};

const mapDispatcherAsProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleBowlerModal()),
  updateCurrentBowler: (bowler) => {
    dispatch(chooseBowler(bowler));
    dispatch(setBowlerStatus(bowler));
  }
});

export default connect(mapStatesAsProps, mapDispatcherAsProps)(BowlerModal);