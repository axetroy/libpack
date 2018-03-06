// @flow
class PersonFlow {
  say(word: string) {
    console.log("hello " + word);
  }
}

new PersonFlow().say("world");
