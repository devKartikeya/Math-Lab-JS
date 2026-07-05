/* WAP to print the Tribonacci series */

function tribonacci(m, n, o, count, limit) {
  if (count >= limit) return; 
  console.log(m);
  tribonacci(n, o, m + n + o, count + 1, limit);
}

tribonacci(0, 1, 1, 0, 10);