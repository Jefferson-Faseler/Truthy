class ArticleStatus extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {articleStatus: ""}
  }

  handleClick(event) {
    event.preventDefault()
    $.ajax({
      url: '/results'
    })
    .done(response => {
      this.setState({articleStatus: this.props.blackList})
      $("input.reveal-results").hide()
      $(".result-container").append(this.state.articleStatus)
    })
  }

  render() {
    return(
      <div>
        <input type="button" className="reveal-results" onClick={this.handleClick} value="Article Status" />
        <p>{this.state.articleStatus}</p>
      </div>
    )
  }
}
