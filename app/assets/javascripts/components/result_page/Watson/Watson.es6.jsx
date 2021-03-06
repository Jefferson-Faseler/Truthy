class Watson extends React.Component {
  render() {
    return (
      <div className="scroll-change">

        <section className="top_half">

          <div className="">
            <Keywords keywords={this.props.data.keywords} />
          </div>
          <div className="">
            <DocumentEmotion docEmotions={this.props.data.emotion} />
          </div>

        </section>

        <div className="just_a_line_on_top"></div>

        <section className="bottom_half">
          <div className="row">

            <div className="col-sm-6">
              <div className="">
                <Sentiment sentiment={this.props.data.sentiment} />
              </div>
            </div>

            <div className="col-sm-6 line_and_padding_left">

              <div className="">
                <Subjectivity subjectivity={this.props.data.subjectivity} />
              </div>

            </div>

            <div className="col-sm-12">
              <div className="">
                <Concepts concepts={this.props.data.concepts} />
              </div>
            </div>

          </div>
        </section>

      </div>
    )
  }

}
