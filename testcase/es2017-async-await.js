/**
 * Created by axetroy on 2017/7/2.
 */

export default class Person {
  constructor() {
    this.name = 'axetroy';
    this.age = 0;
  }
  fly() {}
  sleep(time) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, time);
    });
  }
  async code() {
    await this.sleep(2000);
    console.log('sleep first then I will...');
  }
}
