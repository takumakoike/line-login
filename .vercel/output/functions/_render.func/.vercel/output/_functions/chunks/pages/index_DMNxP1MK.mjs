/* empty css                                */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead } from '../astro_CA1iCKcR.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const CLIENT_ID = "2003800736";
const REDIRECT_URI = "https://line-login-zeta.vercel.app/after-login";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const LOGIN_URL = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&state=12345abcde&scope=profile%20openid&nonce=09876xyz`;
  return renderTemplate`<html lang="ja"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <h1>LINE Login</h1> <a${addAttribute(LOGIN_URL, "href")} target="_blank">LINEでログインする</a> </body></html>`;
}, "/Users/koiketakuma/Documents/GitHub/line-login/src/pages/index.astro", void 0);
const $$file = "/Users/koiketakuma/Documents/GitHub/line-login/src/pages/index.astro";
const $$url = "";

export { CLIENT_ID, REDIRECT_URI, $$Index as default, $$file as file, $$url as url };
