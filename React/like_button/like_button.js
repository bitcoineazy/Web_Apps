'use strict'

const e = React.createElement

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false}
        this.click_amount = 0
    }

    render() {
        if (this.state.liked) {
            this.click_amount += 1
            if (this.click_amount > 10) {
                return "Game over"
            }
            return e(
                "button",
                { onClick: () => this.setState({ liked: true})},
                "You clicked: " + this.click_amount + " times."
            )
            //return "You liked comment number " + this.props.commentId
        }

        return e(
            "button",
            { onClick: () => this.setState({ liked: true})},
            "Like"
        )
    }
}

const domContainer = document.querySelector("#like_button_container")
ReactDOM.render(e(LikeButton), domContainer)

document.querySelectorAll(".like_button_container")
    .forEach(domContainer => {
        const commentId = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
            e(LikeButton, { commentId: commentId}),
            domContainer
        )
    })
