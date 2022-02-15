'use strict'


const e = React.createElement

class CounterButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false}
        this.click_amount = 0
    }

    render() {
        if (this.state.clicked) {
            this.click_amount += 1
            if (this.click_amount > 10) {
                return "Game over"
            }
            return e(
                "button",
                { onClick: () => this.setState({ clicked: true})},
                "You clicked: " + this.click_amount + " times."
            )
        }

        return e(
            "button",
            { onClick: () => this.setState({ clicked: true})},
            "Like"
        )
    }
}

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false}
    }

    render() {
        if (this.state.liked) {
            return "You liked comment number " + this.props.commentId
        }

        return e(
            "button",
            { onClick: () => this.setState({ liked: true})},
            "Like"
        )
    }
}



const domContainer = document.querySelector("#counter_button_container")
const likeContainer_1 = document.querySelector("#like_button_container_1")
const likeContainer_2 = document.querySelector("#like_button_container_2")

ReactDOM.render(e(CounterButton), domContainer)
ReactDOM.render(e(LikeButton), likeContainer_1)
ReactDOM.render(e(LikeButton), likeContainer_2)


document.querySelectorAll(".button_3, .button_2")
    .forEach(domContainer => {
        const commentId = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
            e(LikeButton, { commentId: commentId}),
            domContainer
        )
    })
