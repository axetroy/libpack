/**
 * Created by axetroy on 2017/7/2.
 */

const PRESET = {
  eatable: true
};

export default class Person {
  constructor() {
    this.name = 'axetroy';
    this.age = 0;
    this.props = { ...PRESET, ...{ walkable: true } };
  }
  fly() {}
}
