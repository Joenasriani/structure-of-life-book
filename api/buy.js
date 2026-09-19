// Fixed product mapping for manual fulfilment. Query parameters cannot alter it.
const CHECKOUT = new URL('https://www.paypal.com/cgi-bin/webscr');
CHECKOUT.search = new URLSearchParams({
  cmd: '_xclick',
  business: 'joenasr@gmail.com',
  item_name: 'The Structure of Life | Buyer Edition',
  item_number: 'STRUCTURE-2026-09',
  amount: '23.33',
  currency_code: 'USD',
  no_shipping: '1',
  return: 'https://the-structure-of-life.vercel.app/delivery',
  cancel_return: 'https://the-structure-of-life.vercel.app/'
}).toString();

export default function handler(req, res) {
  if (!['GET', 'HEAD'].includes(req.method || 'GET')) {
    res.setHeader('Allow', 'GET, HEAD');
    return res.status(405).end();
  }
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  return res.redirect(302, CHECKOUT.toString());
}
