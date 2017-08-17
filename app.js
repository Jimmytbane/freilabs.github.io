const { h, app } = hyperapp

app({
  state: {
    title: "pecan.py"
  },
  view: state => h("h1", {}, state.title)
})
