import moment from 'moment';

const seconds = 108000;

const duration = moment.duration(seconds, 'seconds');

const output = {
  h: Math.floor(duration.asHours()),
  m: duration.minutes(),
  s: duration.seconds()
};

console.log(output); // { h: 30, m: 0, s: 0 }