export async function removeAds(page) {
  await page.evaluate(() => {
    document.querySelectorAll("ins.adsbygoogle").forEach((ad) => ad.remove());
  });
}

export async function acceptDialogs(page) {
  page.on("dialog", (dialog) => dialog.accept());
}