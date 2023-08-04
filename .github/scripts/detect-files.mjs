#!/usr/bin/env node
import _ from 'lodash';

export default async function (arg, options) {
  const commitMessag = arg;

  const pattern = /DEPLOYMENT=(\w+)/;

  const patternMatch = commitMessag.match(pattern);

  if (patternMatch === null) {
    console.log('no');
    return;
  }

  const result = patternMatch[1];

  switch (result) {
    case 'no':
      console.log('no');
      break;
    case 'yes':
      console.log('yes');
      break;
    case 'auto':
      console.log('auto');
      break;
    default:
      console.log('no');
      break;
  }
}
