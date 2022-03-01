import React, { Component } from "react";
import { Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddBoxIcon from '@mui/icons-material/AddBox';
import "./TrelloActionButton.scss"

class TrelloActionButton extends Component {

    state = {
        formOpen: false
    }

    openForm = (e) => {
        e.preventDefault();
        this.setState({
            formOpen: true
        })
    }

    renderAddBatton = () => {
        const { list } = this.props
        const buttonText = list ? "Add a list" : "Add a card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "while" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div
                onClick={this.openForm}
                style={
                    {
                        ...styles.openForButtonGroup,
                        opacity: buttonTextOpacity,
                        color: buttonTextColor,
                        backgroundColor: buttonTextBackground
                    }}>
                <Grid container spacing={2} >
                    <Grid item xs={12} flex={1}
                        display='flex'
                        justifyContent="space-between"
                    >
                        <div className="buttonText">
                            <AddIcon />
                            <span className="buttonText__span">{buttonText}</span>
                        </div>
                        <AddBoxIcon />
                    </Grid>
                </Grid>
            </div>
        );
    };

    // renderForm = () => {
    //     return <p>Hello</p>
    // }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddBatton();
    }
}

const styles = {
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingleft: 10,
    }
}

export default TrelloActionButton;