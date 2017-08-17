const { h, app } = hyperapp

app({
  state: {
    title: "pecan.py - Windows Security Incident Prevention Software (repo currently empty, will be released when the program is not a disaster.)"
  },
  view: state => h("h1", {}, state.title)
})
