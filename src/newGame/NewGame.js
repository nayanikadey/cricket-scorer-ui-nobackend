import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { gameInitialization } from './reducer';
import { HashLink as Link } from 'react-router-hash-link';


class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bowlingTeam: '',
      battingTeam: '',
      numberOfOvers: 1,
    };
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 6, offset: 3 }} className="background-app-color view-height-100">
            <br />
            <h2 className="text-center">Create Game</h2>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Batting Team Name</InputGroupText>
              </InputGroupAddon>
              <Input
                value={this.state.battingTeam}
                onChange={event =>
                  this.setState({
                    battingTeam: event.target.value,
                  })
                }
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Bowling Team Name</InputGroupText>
              </InputGroupAddon>
              <Input
                value={this.state.bowlingTeam}
                onChange={event =>
                  this.setState({
                    bowlingTeam: event.target.value,
                  })
                }
              />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Number of Overs</InputGroupText>
              </InputGroupAddon>
              <Input
                value={this.state.numberOfOvers}
                onChange={event =>
                  this.setState({
                    numberOfOvers: event.target.value,
                  })
                }
              />
            </InputGroup>
            <br />
            <div className="text-center">
              <Link to="/scorer">
                <Button
                  color="primary"
                  onClick={() => this.props.createGame(this.state)}
                >Create Game
                </Button>
              </Link>

            </div>
          </Col>
        </Row>
      </Container>);
  }
}

const mapDispatcherAsProps = dispatch => ({
  createGame: gameData => dispatch(gameInitialization(gameData)),
});

export default connect(undefined, mapDispatcherAsProps)(NewGame);
