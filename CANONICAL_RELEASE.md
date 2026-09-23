# Canonical production map lock — 2026-09-23

This repository is the only canonical GitHub source for The Structure of Life.

- GitHub: `Joenasriani/structure-of-life-book`
- Branch: `main`
- Vercel project: `the-structure-of-life`
- Vercel project ID: `prj_tnA6mm9ivIayBSUAfLRxIiTxtYzb`
- Public URL: https://the-structure-of-life.vercel.app/
- Store: https://reasoning-library.vercel.app/

Any preview deployment, copied project or alternate URL is noncanonical unless a later confirmed release change explicitly replaces this mapping.

# Canonical source and buyer files — 2026-09-19

**The Structure of Life — The Structure of Reasoning**, by J. Nasr.

| Destination | Canonical URL |
|---|---|
| Book | https://the-structure-of-life.vercel.app/ |
| Store | https://reasoning-library.vercel.app/ |
| Sample | https://the-structure-of-life.vercel.app/sample |
| Methodology | https://the-structure-of-life.vercel.app/methodology |
| Terms | https://the-structure-of-life.vercel.app/terms |
| Checkout, after deployment | https://the-structure-of-life.vercel.app/api/buy |
| Delivery information, after deployment | https://the-structure-of-life.vercel.app/delivery |

The intended offer is USD 23.33 for the 160-page Study Edition, EPUB, 20-page workbook, 74-page Research Atlas, 52 source records, 51 structured entries, one AI Reasoning Framework, 153 application directions and 24 concepts. The application materials are proposals, not validated products.

## Buyer files

The 21-file Buyer Edition archive is assembled and integrity-checked. Main PDF, EPUB and workbook bytes are preserved from the source Study Package. Exact file identity and the archive SHA-256 are recorded in `PUBLISHING_RELEASE_MANIFEST.md` and `releases/2026-09/buyer-packages.json`. Container, resource and spine checks passed for the EPUB; full EPUBCheck was not run.

Deliver the PDF and EPUB individually as well as the complete ZIP and buyer guide. Paid files remain outside this public repository.

## Deployment and payment status

**SOURCE REPAIRS PREPARED; DEPLOYMENT AND END-TO-END PAYMENT/RECEIPT REMAIN PENDING.**

The last inspected production deployment is `dpl_FSGUfFuFi2CwCkrqDqKssobn8pgF`, created September 18. Root, sample, methodology, terms, robots and sitemap were reachable. That does not prove checkout or delivery.

Source purchase links now use one fixed `/api/buy` route with product ID `STRUCTURE-2026-09`, the existing merchant recipient and USD 23.33. The `/delivery` return page explains manual fulfilment and never confirms payment based on a page visit. The existing live checkout encountered PayPal verification; a successful payment was not tested.

The shared manual deployment workflow is in `Joenasriani/test-things`. Its last inspected run lacked `VERCEL_TOKEN`, and the deployment connector was unavailable. After deployment, run its production verification step, then complete an authorized payment-to-receipt test.

Delivery remains manual after verification in the merchant account. There is no automated delivery integration. Do not describe the commercial journey as fully verified until deployment, payment and private buyer receipt have passed.

Keep the original book design, single-framework identity, ordinary HTML navigation and return-to-library control.
