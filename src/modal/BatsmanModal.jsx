import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { toggleBatsmanModal, addBatsmanWhenOut } from '../innings/inningsReducer'

const BatsmanModal = (props) => (
  <div>
    <Modal isOpen={props.modal} toggle={props.toggleBatsmanModal}>
      <ModalHeader>Select Batsman</ModalHeader>
      <ModalBody className='text-center'>
        {props.batsmen.map(batsman =>
          <Button
            outline
            value={batsman.id}
            onClick={(event) => props.updateCurrentBatsman(event.target.value)}
            size="lg" block >
            {batsman.name}
          </Button>
        )}
      </ModalBody>
    </Modal>
  </div>
);

const mapStatesAsProps = (state) => {
  const battingTeam = state.gameInformation.currentTeam;
  const players = Object.keys(state.gameInformation[battingTeam].players)
    .filter(element => !state.inningsInformation.batsmans.includes(element)
      && !state.gameInformation[battingTeam].players[element].battingStats.hasPlayed
    )
    .map(key => ({
      id: key,
      name: state.gameInformation[battingTeam].players[key].name,
    }));

  return ({
    modal: state.inningsInformation.displayBatsmanPopup,
    batsmen: players,
  })
};

const mapDispatcherAsProps = (dispatch) => ({
  toggleBatsmanModal: () => dispatch(toggleBatsmanModal()),

  updateCurrentBatsman: (batsman) => {
    dispatch(toggleBatsmanModal());
    dispatch(addBatsmanWhenOut(batsman));
   // dispatch(setBowlerStatus(bowler));
  }
});

export default connect(mapStatesAsProps, mapDispatcherAsProps)(BatsmanModal);