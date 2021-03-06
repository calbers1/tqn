import React, { Component } from 'react';
import { Button, Container, Grid, GridColumn } from 'semantic-ui-react';
import BackButton from '../components/BackButton';
import { connect } from 'react-redux';
import { launchMultiplayer } from '../actions';

class LocalSetupScreen extends Component {

    handleClick = () => this.props.launchMultiplayer();
    handleExit = () => {};

    render () {
        return(
            <Grid stretched className="screen" padded centered columns={3}>
                    <GridColumn verticalAlign="middle"
                    mobile={16} tablet={8} computer={10}>
                        <Container className="screen__box">
                            <h2>Who goes first?</h2>
                            <Button size="massive" color="red" onClick={() => this.handleClick('game')}>Player 1</Button>
                            <Button.Or />
                            <Button size="massive" color="blue" onClick={() => this.handleClick('game')}>Player 2</Button>
                        </Container>
                       <BackButton />
                    </GridColumn>
            </Grid>
        );
    }
}

export default connect (null, {
    launchMultiplayer
})(LocalSetupScreen);