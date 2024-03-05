/* empty css                                */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead } from '../astro_CklWPTX4.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { REDIRECT_URI, CLIENT_ID } from './index_BtdpwwY0.mjs';

const $$Astro = createAstro();
const $$AfterLogin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AfterLogin;
  const CLIENT_SECRET = "05ebde7c789b911cac3264393d244ddc";
  let CODE;
  const now_url = Astro2.request.url;
  if (now_url) {
    const param = new URLSearchParams(now_url);
    CODE = param.get("code");
  } else {
    CODE = "";
  }
  const URL = `https://api.line.me/oauth2/v2.1/token`;
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: CODE,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET
    }).toString()
  };
  let id_token;
  await fetch(URL, options).then((response) => response.json()).then((json) => {
    json.access_token;
    id_token = json.id_token;
  });
  let USER_NAME;
  const check_url = "https://api.line.me/oauth2/v2.1/verify";
  const check_options = {
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      id_token,
      client_id: CLIENT_ID
    }).toString()
  };
  await fetch(check_url, check_options).then((res) => res.json()).then((data) => {
    USER_NAME = data.name;
  });
  return renderTemplate`<html lang="ja"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <h1>こんにちは、${USER_NAME}さんログインできました</h1> <a href="">LINE ログアウト</a> </body></html>`;
}, "/Users/koiketakuma/Documents/GitHub/line-login/src/pages/after-login.astro", void 0);
const $$file = "/Users/koiketakuma/Documents/GitHub/line-login/src/pages/after-login.astro";
const $$url = "/after-login";

export { $$AfterLogin as default, $$file as file, $$url as url };
