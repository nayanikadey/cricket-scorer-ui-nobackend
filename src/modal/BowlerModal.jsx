import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { toggleBowlerModal, chooseBowler } from '../innings/inningsReducer'

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
  const bowlingTeam = Object.keys(state.gameInformation)
    .filter(element => element !== 'numberOfOvers'
      && element !== 'currentTeam'
      && element !== 'previousTeam'
      && element !== state.gameInformation.currentTeam
    );
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
  updateCurrentBowler: (bowler) => dispatch(chooseBowler(bowler))
});

export default connect(mapStatesAsProps, mapDispatcherAsProps)(BowlerModal);