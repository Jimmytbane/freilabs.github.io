const { h, app } = hyperapp

app({
  state: {
    title: "Up and coming software..."
    "pecan.py - Windows Security Incident Prevention Software</a> (repo currently empty, will be released when the program is not a disaster.)"
  },
  view: state => h("h1", {}, state.title)
})
