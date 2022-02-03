/* npm -global command,comes with node
npm --version

local dependency - use it only in this particularn project
npm i <package name>

global dependency - use it in any project
npm install -g <packagename>

package.json - manifest file (stores important into about project/package)
manual approach (create package.json in the root,create properties etc)
npm init (step by step, press enter to skip)
npm init -y(everything default)
*/

const _= require('lodash')
const item=[1,[2,[3,[4]]]]
const newitem=_.flattenDeep(item)
console.log(newitem);