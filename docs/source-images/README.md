# Source images — uncropped originals

These are the **pre-crop** captures of the eight screenshots that shipped with macOS
browser chrome (traffic lights, tab strip, address bar) visible. The versions used on
the site live in `public/images/` and have that chrome cropped off the top.

Kept for reference only. **Nothing in the app imports from this folder** — it sits
outside `public/`, so Next.js never serves it and it adds nothing to the bundle.

| Original here | Ships as | Cropped from top | Original → shipped |
|---|---|---|---|
| `gcc-matches-admin-original.jpeg` | `gcc/matches-admin.jpeg` | 132px | 2560×1600 → 2560×1468 |
| `gcc-registration-original.jpeg` | `gcc/registration.jpeg` | 118px | 2560×1600 → 2560×1482 |
| `gcc-bracket-original.jpeg` | `gcc/bracket.jpeg` | 132px | 2560×1600 → 2560×1468 |
| `nexapos-dashboard-original.jpeg` | `nexapos/dashboard.jpeg` | 68px | 2560×1539 → 2560×1471 |
| `nexapos-billing-original.jpeg` | `nexapos/billing.jpeg` | 68px | 2560×1543 → 2560×1475 |
| `nexapos-products-original.jpeg` | `nexapos/products.jpeg` | 68px | 2560×1539 → 2560×1471 |
| `nexapos-reports-original.jpeg` | `nexapos/reports.jpeg` | 68px | 2560×1537 → 2560×1469 |
| `nexapos-receipt-original.jpeg` | `nexapos/receipt.jpeg` | 68px | 2560×1536 → 2560×1468 |

To re-derive a shipped image, crop `(0, TOP, width, height)` from the original — full
width, everything below the offset, no resizing. Re-encode at quality 85 with default
subsampling, and update that image's `width`/`height` in `lib/content.ts` to match.

Always re-crop from these originals rather than re-saving an already-cropped file;
that keeps the result at a single generation of JPEG loss.
