import { chromium } from 'playwright';
import { writeFileSync } from 'fs';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

try {
  // Wait for server to be ready
  let attempts = 0;
  while (attempts < 20) {
    try {
      await page.goto('http://localhost:3000/', { timeout: 5000 });
      break;
    } catch (e) {
      attempts++;
      if (attempts >= 20) throw e;
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  // Take screenshot of full page
  await page.waitForLoadState('networkidle');
  
  // Screenshot hero section
  const heroSection = await page.locator('section').first();
  await heroSection.screenshot({ path: 'd:\PROJETOS\lp atelie pro v 06\v0-atelie-pro-landing-page\screenshot-hero.png' });
  console.log('✓ Hero screenshot taken');

  // Scroll down and screenshot video player
  const videoPlayer = await page.locator('[aria-label*="demonstração"]').first();
  if (videoPlayer) {
    await videoPlayer.scrollIntoViewIfNeeded();
    await new Promise(r => setTimeout(r, 500));
  }

  // Scroll to FAQ and check if items are open
  await page.locator('#faq').scrollIntoViewIfNeeded();
  await new Promise(r => setTimeout(r, 500));
  
  // Check open FAQ items
  const openItems = await page.locator('[role="region"]:visible').count();
  console.log(`✓ Open FAQ items: ${openItems}`);

  // Scroll to pricing
  await page.locator('#precos').scrollIntoViewIfNeeded();
  await new Promise(r => setTimeout(r, 500));
  
  const pricingScreenshot = await page.screenshot({ path: 'd:\PROJETOS\lp atelie pro v 06\v0-atelie-pro-landing-page\screenshot-pricing.png' });
  console.log('✓ Pricing screenshot taken');

  // Check if trial card has the new info text
  const trialInfo = await page.locator('text=Como funciona o trial').count();
  console.log(`✓ Trial info section found: ${trialInfo > 0 ? 'YES' : 'NO'}`);

  // Check video player button in hero
  const playButton = await page.locator('[aria-label*="demonstração"][aria-label*="minuto"]').first();
  const playButtonExists = await playButton.isVisible({ timeout: 2000 }).catch(() => false);
  console.log(`✓ Hero video player play button visible: ${playButtonExists}`);

} catch (error) {
  console.error('Error:', error.message);
} finally {
  await browser.close();
}
