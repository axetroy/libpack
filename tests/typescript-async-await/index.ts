/**
 * Created by axetroy on 2017/7/2.
 */

function sleep(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, ms);
  });
}

export default async function(name: string) {
  await sleep(1000);
  console.log(name);
}
