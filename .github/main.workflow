workflow "New workflow" {
  on = "push"
  resolves = ["Deploy"]
}

action "install" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  args = "install"
}

action "build" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  needs = ["install"]
  args = "run build"
}

action "Deploy" {
  uses = "w9jds/firebase-action@7d6b2b058813e1224cdd4db255b2f163ae4084d3"
  needs = ["build"]
  args = "deploy"
  secrets = ["FIREBASE_TOKEN"]
}
