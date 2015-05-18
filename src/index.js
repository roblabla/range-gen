export default function *xrange(start, stop, step = 1) {
  if (arguments.length === 1)
  {
    stop = start;
    start = 0;
  }
  var i = start;
  if (step < 0)
  {
    while (i > stop)
    {
      yield i;
      i += step;
    }
  }
  else
  {
    while (i < stop)
    {
      yield i;
      i += step;
    }
  }
}
