var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=new URL(`ultron-voice-BIodImr1.js`,import.meta.url).href;function n(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}function r(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}function i(e){return typeof e==`object`&&!!e&&(`name`in e&&e.name===`AbortError`||`message`in e&&String(e.message).includes(`FetchRequestCanceledException`))}var a=e=>{if(e instanceof Error)return e;if(typeof e==`object`&&e){try{let t=Object.prototype.toString.call(e);if(t===`[object Error]`||t===`[object DOMException]`){let t=Error(e.message,e.cause?{cause:e.cause}:{});return e.stack&&(t.stack=e.stack),e.cause&&!t.cause&&(t.cause=e.cause),e.name&&(t.name=e.name),t}}catch{}try{return Error(JSON.stringify(e))}catch{}}return Error(e)},o=(()=>{class e extends Error{}return e})(),s=class e extends o{constructor(t,n,r,i,a){super(`${e.makeMessage(t,n,r)}`),this.status=t,this.headers=i,this.requestID=i?.get(`request-id`),this.workspaceID=i?.get(`anthropic-workspace-id`),this.error=n,this.type=a??null}static makeMessage(e,t,n){let r=t?.message?typeof t.message==`string`?t.message:JSON.stringify(t.message):t?JSON.stringify(t):n;return e&&r?`${e} ${r}`:e?`${e} status code (no body)`:r||`(no status code or body)`}static generate(t,n,r,i){if(!t||!i)return new l({message:r,cause:a(n)});let o=n,s=o?.error?.type;return t===400?new f(t,o,r,i,s):t===401?new p(t,o,r,i,s):t===403?new m(t,o,r,i,s):t===404?new h(t,o,r,i,s):t===409?new g(t,o,r,i,s):t===422?new _(t,o,r,i,s):t===429?new v(t,o,r,i,s):t>=500?new y(t,o,r,i,s):new e(t,o,r,i,s)}},c=class extends s{constructor({message:e}={}){super(void 0,void 0,e||`Request was aborted.`,void 0)}},l=class extends s{constructor({message:e,cause:t}){super(void 0,void 0,e||`Connection error.`,void 0),t&&(this.cause=t)}},u=class extends l{constructor({message:e}={}){super({message:e??`Request timed out.`})}},d=class extends o{constructor(e,{cause:t}={}){super(e??`Retryable error.`),t!==void 0&&(this.cause=t)}},f=class extends s{},p=class extends s{},m=class extends s{},h=class extends s{},g=class extends s{},_=class extends s{},v=class extends s{},y=class extends s{},b=/^[a-z][a-z0-9+.-]*:/i,x=e=>b.test(e),S=e=>(S=Array.isArray,S(e)),C=S;function w(e){return typeof e==`object`?e??{}:{}}function T(e){if(!e)return!0;for(let t in e)return!1;return!0}function E(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function D(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}var O=(e,t)=>{if(typeof t!=`number`||!Number.isInteger(t))throw new o(`${e} must be an integer`);if(t<0)throw new o(`${e} must be a positive integer`);return t},k=e=>{try{return JSON.parse(e)}catch{return}},A=(e,t)=>new Promise(n=>{if(t?.aborted)return n();let r=()=>{clearTimeout(i),n()},i=setTimeout(()=>{t?.removeEventListener(`abort`,r),n()},e);t?.addEventListener(`abort`,r,{once:!0})}),j=`0.128.0`,ee=()=>typeof window<`u`&&window.document!==void 0&&typeof navigator<`u`;function M(){return typeof Deno<`u`&&Deno.build!=null?`deno`:typeof EdgeRuntime<`u`?`edge`:Object.prototype.toString.call(globalThis.process===void 0?0:globalThis.process)===`[object process]`?`node`:`unknown`}var te=()=>{let e=M();if(e===`deno`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":j,"X-Stainless-OS":ie(Deno.build.os),"X-Stainless-Arch":re(Deno.build.arch),"X-Stainless-Runtime":`deno`,"X-Stainless-Runtime-Version":typeof Deno.version==`string`?Deno.version:Deno.version?.deno??`unknown`};if(typeof EdgeRuntime<`u`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":j,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":`edge`,"X-Stainless-Runtime-Version":globalThis.process?.version??`unknown`};if(e===`node`)return{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":j,"X-Stainless-OS":ie(globalThis.process.platform??`unknown`),"X-Stainless-Arch":re(globalThis.process.arch??`unknown`),"X-Stainless-Runtime":`node`,"X-Stainless-Runtime-Version":globalThis.process.version??`unknown`};let t=ne();return t?{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":j,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`unknown`,"X-Stainless-Runtime":`browser:${t.browser}`,"X-Stainless-Runtime-Version":t.version}:{"X-Stainless-Lang":`js`,"X-Stainless-Package-Version":j,"X-Stainless-OS":`Unknown`,"X-Stainless-Arch":`unknown`,"X-Stainless-Runtime":`unknown`,"X-Stainless-Runtime-Version":`unknown`}};function ne(){if(typeof navigator>`u`||!navigator)return null;for(let{key:e,pattern:t}of[{key:`edge`,pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`ie`,pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`ie`,pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`chrome`,pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`firefox`,pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:`safari`,pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}]){let n=t.exec(navigator.userAgent);if(n)return{browser:e,version:`${n[1]||0}.${n[2]||0}.${n[3]||0}`}}return null}var re=e=>e===`x32`?`x32`:e===`x86_64`||e===`x64`?`x64`:e===`arm`?`arm`:e===`aarch64`||e===`arm64`?`arm64`:e?`other:${e}`:`unknown`,ie=e=>(e=e.toLowerCase(),e.includes(`ios`)?`iOS`:e===`android`?`Android`:e===`darwin`?`MacOS`:e===`win32`?`Windows`:e===`freebsd`?`FreeBSD`:e===`openbsd`?`OpenBSD`:e===`linux`?`Linux`:e?`Other:${e}`:`Unknown`),ae,oe=()=>ae??=te(),se=new WeakMap,ce=typeof globalThis.FinalizationRegistry==`function`?new globalThis.FinalizationRegistry(e=>fe(e)):null;function le(e,t){return()=>e.removeEventListener(`abort`,t)}function ue(e,t,n){se.set(e,le(t,n))}function de(e,t){se.has(t)&&ce?.register(e,t,t)}function fe(e){let t=se.get(e);t&&(se.delete(e),ce?.unregister(e),t())}function pe(){if(typeof fetch<`u`)return fetch;throw Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new Anthropic({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function me(...e){let t=globalThis.ReadableStream;if(t===void 0)throw Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new t(...e)}function he(e){let t=Symbol.asyncIterator in e?e[Symbol.asyncIterator]():e[Symbol.iterator]();return me({start(){},async pull(e){let{done:n,value:r}=await t.next();n?e.close():e.enqueue(r)},async cancel(){await t.return?.()}})}function ge(e){if(e[Symbol.asyncIterator])return e;let t=e.getReader();return{async next(){try{let e=await t.read();return e?.done&&t.releaseLock(),e}catch(e){throw t.releaseLock(),e}},async return(){let e=t.cancel();return t.releaseLock(),await e,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function _e(e){if(typeof e!=`object`||!e)return;if(e[Symbol.asyncIterator]){await e[Symbol.asyncIterator]().return?.();return}let t=e.getReader(),n=t.cancel();t.releaseLock(),await n}var ve=({headers:e,body:t})=>({bodyHeaders:{"content-type":`application/json`},body:JSON.stringify(t)}),ye=`RFC3986`,be=e=>String(e),xe={RFC1738:e=>String(e).replace(/%20/g,`+`),RFC3986:be},Se=(e,t)=>(Se=Object.hasOwn??Function.prototype.call.bind(Object.prototype.hasOwnProperty),Se(e,t)),Ce=(()=>{let e=[];for(let t=0;t<256;++t)e.push(`%`+((t<16?`0`:``)+t.toString(16)).toUpperCase());return e})(),we=1024,N=(e,t,n,r,i)=>{if(e.length===0)return e;let a=e;if(typeof e==`symbol`?a=Symbol.prototype.toString.call(e):typeof e!=`string`&&(a=String(e)),n===`iso-8859-1`)return escape(a).replace(/%u[0-9a-f]{4}/gi,function(e){return`%26%23`+parseInt(e.slice(2),16)+`%3B`});let o=``;for(let e=0;e<a.length;e+=we){let t=a.length>=we?a.slice(e,e+we):a,n=[];for(let e=0;e<t.length;++e){let r=t.charCodeAt(e);if(r===45||r===46||r===95||r===126||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||i===`RFC1738`&&(r===40||r===41)){n[n.length]=t.charAt(e);continue}if(r<128){n[n.length]=Ce[r];continue}if(r<2048){n[n.length]=Ce[192|r>>6]+Ce[128|r&63];continue}if(r<55296||r>=57344){n[n.length]=Ce[224|r>>12]+Ce[128|r>>6&63]+Ce[128|r&63];continue}e+=1,r=65536+((r&1023)<<10|t.charCodeAt(e)&1023),n[n.length]=Ce[240|r>>18]+Ce[128|r>>12&63]+Ce[128|r>>6&63]+Ce[128|r&63]}o+=n.join(``)}return o};function Te(e){return!e||typeof e!=`object`?!1:!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}function Ee(e,t){if(S(e)){let n=[];for(let r=0;r<e.length;r+=1)n.push(t(e[r]));return n}return t(e)}var De={brackets(e){return String(e)+`[]`},comma:`comma`,indices(e,t){return String(e)+`[`+t+`]`},repeat(e){return String(e)}},P=function(e,t){Array.prototype.push.apply(e,S(t)?t:[t])},Oe,F={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:`indices`,charset:`utf-8`,charsetSentinel:!1,delimiter:`&`,encode:!0,encodeDotInKeys:!1,encoder:N,encodeValuesOnly:!1,format:ye,formatter:be,indices:!1,serializeDate(e){return(Oe??=Function.prototype.call.bind(Date.prototype.toISOString))(e)},skipNulls:!1,strictNullHandling:!1};function I(e){return typeof e==`string`||typeof e==`number`||typeof e==`boolean`||typeof e==`symbol`||typeof e==`bigint`}var ke={};function Ae(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_){let v=e,y=_,b=0,x=!1;for(;(y=y.get(ke))!==void 0&&!x;){let t=y.get(e);if(b+=1,t!==void 0){if(t===b)throw RangeError(`Cyclic object value`);x=!0}y.get(ke)===void 0&&(b=0)}if(typeof l==`function`?v=l(t,v):v instanceof Date?v=f?.(v):n===`comma`&&S(v)&&(v=Ee(v,function(e){return e instanceof Date?f?.(e):e})),v===null){if(a)return c&&!h?c(t,F.encoder,g,`key`,p):t;v=``}if(I(v)||Te(v)){if(c){let e=h?t:c(t,F.encoder,g,`key`,p);return[m?.(e)+`=`+m?.(c(v,F.encoder,g,`value`,p))]}return[m?.(t)+`=`+m?.(String(v))]}let C=[];if(v===void 0)return C;let w;if(n===`comma`&&S(v))h&&c&&(v=Ee(v,c)),w=[{value:v.length>0?v.join(`,`)||null:void 0}];else if(S(l))w=l;else{let e=Object.keys(v);w=u?e.sort(u):e}let T=s?String(t).replace(/\./g,`%2E`):String(t),E=r&&S(v)&&v.length===1?T+`[]`:T;if(i&&S(v)&&v.length===0)return E+`[]`;for(let t=0;t<w.length;++t){let y=w[t],x=typeof y==`object`&&y.value!==void 0?y.value:v[y];if(o&&x===null)continue;let T=d&&s?y.replace(/\./g,`%2E`):y,D=S(v)?typeof n==`function`?n(E,T):E:E+(d?`.`+T:`[`+T+`]`);_.set(e,b);let O=new WeakMap;O.set(ke,_),P(C,Ae(x,D,n,r,i,a,o,s,n===`comma`&&h&&S(v)?null:c,l,u,d,f,p,m,h,g,O))}return C}function je(e=F){if(e.allowEmptyArrays!==void 0&&typeof e.allowEmptyArrays!=`boolean`)throw TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(e.encodeDotInKeys!==void 0&&typeof e.encodeDotInKeys!=`boolean`)throw TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(e.encoder!==null&&e.encoder!==void 0&&typeof e.encoder!=`function`)throw TypeError(`Encoder has to be a function.`);let t=e.charset||F.charset;if(e.charset!==void 0&&e.charset!==`utf-8`&&e.charset!==`iso-8859-1`)throw TypeError(`The charset option must be either utf-8, iso-8859-1, or undefined`);let n=ye;if(e.format!==void 0){if(!Se(xe,e.format))throw TypeError(`Unknown format option provided.`);n=e.format}let r=xe[n],i=F.filter;(typeof e.filter==`function`||S(e.filter))&&(i=e.filter);let a;if(a=e.arrayFormat&&e.arrayFormat in De?e.arrayFormat:`indices`in e?e.indices?`indices`:`repeat`:F.arrayFormat,`commaRoundTrip`in e&&typeof e.commaRoundTrip!=`boolean`)throw TypeError("`commaRoundTrip` must be a boolean, or absent");let o=e.allowDots===void 0?e.encodeDotInKeys?!0:F.allowDots:!!e.allowDots;return{addQueryPrefix:typeof e.addQueryPrefix==`boolean`?e.addQueryPrefix:F.addQueryPrefix,allowDots:o,allowEmptyArrays:typeof e.allowEmptyArrays==`boolean`?!!e.allowEmptyArrays:F.allowEmptyArrays,arrayFormat:a,charset:t,charsetSentinel:typeof e.charsetSentinel==`boolean`?e.charsetSentinel:F.charsetSentinel,commaRoundTrip:!!e.commaRoundTrip,delimiter:e.delimiter===void 0?F.delimiter:e.delimiter,encode:typeof e.encode==`boolean`?e.encode:F.encode,encodeDotInKeys:typeof e.encodeDotInKeys==`boolean`?e.encodeDotInKeys:F.encodeDotInKeys,encoder:typeof e.encoder==`function`?e.encoder:F.encoder,encodeValuesOnly:typeof e.encodeValuesOnly==`boolean`?e.encodeValuesOnly:F.encodeValuesOnly,filter:i,format:n,formatter:r,serializeDate:typeof e.serializeDate==`function`?e.serializeDate:F.serializeDate,skipNulls:typeof e.skipNulls==`boolean`?e.skipNulls:F.skipNulls,sort:typeof e.sort==`function`?e.sort:null,strictNullHandling:typeof e.strictNullHandling==`boolean`?e.strictNullHandling:F.strictNullHandling}}function Me(e,t={}){let n=e,r=je(t),i,a;typeof r.filter==`function`?(a=r.filter,n=a(``,n)):S(r.filter)&&(a=r.filter,i=a);let o=[];if(typeof n!=`object`||!n)return``;let s=De[r.arrayFormat],c=s===`comma`&&r.commaRoundTrip;i||=Object.keys(n),r.sort&&i.sort(r.sort);let l=new WeakMap;for(let e=0;e<i.length;++e){let t=i[e];r.skipNulls&&n[t]===null||P(o,Ae(n[t],t,s,c,r.allowEmptyArrays,r.strictNullHandling,r.skipNulls,r.encodeDotInKeys,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,l))}let u=o.join(r.delimiter),d=r.addQueryPrefix===!0?`?`:``;return r.charsetSentinel&&(r.charset===`iso-8859-1`?d+=`utf8=%26%2310003%3B&`:d+=`utf8=%E2%9C%93&`),u.length>0?d+u:``}function Ne(e){return Me(e,{arrayFormat:`brackets`})}var Pe=`modulepreload`,Fe=function(e,t){return new URL(e,t).href},Ie={},Le=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Fe(t,n),t=s(t),t in Ie)return;Ie[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Pe,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Re=`urn:ietf:params:oauth:grant-type:jwt-bearer`,ze=`refresh_token`,Be=`/v1/oauth/token`,Ve=`oauth-2025-04-20`,He=`oidc-federation-2026-04-01`,Ue=1<<20;function We(e){if(!e)return;let t;try{t=new URL(e)}catch(t){throw new Qe(`Invalid token endpoint base URL "${e}": ${t}`)}if(t.protocol===`https:`)return;let n=t.hostname.toLowerCase().replace(/^\[|\]$/g,``);if(t.protocol!==`http:`||n!==`localhost`&&n!==`127.0.0.1`&&n!==`::1`)throw new Qe(`Refusing to send credential over non-https token endpoint "${e}"`)}async function Ge(e,t){let n=await Ze(e),r;try{r=JSON.parse(n)}catch{throw new Qe(`Token endpoint returned non-JSON response (status ${e.status})`,e.status,Je(n),t)}if(!r.access_token)throw new Qe(`Token endpoint response missing access_token: ${JSON.stringify(Je(r))}`,e.status,Je(r),t);if(r.token_type&&r.token_type.toLowerCase()!==`bearer`)throw new Qe(`Token endpoint response: unsupported token_type "${r.token_type}" (want Bearer)`,e.status,Je(r),t);return r}var Ke=2e3,qe=new Set([`error`,`error_description`,`error_uri`]);function Je(e){if(e==null)return e;if(typeof e==`string`){let t;try{t=JSON.parse(e)}catch{return e.length<=Ke?e:e.slice(0,Ke)+`... <${e.length-Ke} more chars>`}return JSON.stringify(Je(t))}if(typeof e==`object`&&!Array.isArray(e)){let t={};for(let[n,r]of Object.entries(e))qe.has(n)&&(t[n]=r);return t}return null}async function Ye(e,t=e=>console.warn(`anthropic-sdk: ${e}`)){if(typeof process>`u`||process.platform===`win32`)return;let{fs:n}=await Le(async()=>{let{fs:e}=await import(`./node.browser-DtjfoFGj.js`);return{fs:e}},[],import.meta.url),r=e,i;try{r=await n.promises.realpath(e),i=await n.promises.stat(r)}catch{return}let a=i.mode&511;if(a&18)throw new Qe(`Credentials file at ${r} is group/world-writable (mode 0o${a.toString(8)}); this allows other local users to plant tokens. Run \`chmod 600 ${r}\`.`);if(a&36)throw new Qe(`Credentials file at ${r} is group/world-readable (mode 0o${a.toString(8)}); run \`chmod 600 ${r}\` before retrying.`);typeof process.getuid==`function`&&i.uid!==process.getuid()&&t(`credentials file at ${r} is owned by uid ${i.uid} (current process uid ${process.getuid()}); verify this is intentional.`)}async function Xe(e,t){let{fs:n,path:r}=await Le(async()=>{let{fs:e,path:t}=await import(`./node.browser-DtjfoFGj.js`);return{fs:e,path:t}},[],import.meta.url),i=r.dirname(e);await n.promises.mkdir(i,{recursive:!0,mode:448});let a=`${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;try{let r=await n.promises.open(a,`w`,384);try{await r.writeFile(JSON.stringify(t,null,2)),await r.sync()}finally{await r.close()}await n.promises.rename(a,e)}catch(e){throw await n.promises.unlink(a).catch(()=>{}),e}try{let e=await n.promises.open(i,`r`);try{await e.sync()}finally{await e.close()}}catch{}}async function Ze(e){if(!e.body)return``;let t=e.body.getReader(),n=[],r=0;for(;;){let{done:e,value:i}=await t.read();if(e)break;if(r+i.length>Ue){let e=Ue-r;e>0&&n.push(i.subarray(0,e)),await t.cancel();break}n.push(i),r+=i.length}let i;if(n.length===1)i=n[0];else{i=new Uint8Array(n.reduce((e,t)=>e+t.length,0));let e=0;for(let t of n)i.set(t,e),e+=t.length}return new TextDecoder(`utf-8`).decode(i)}var Qe=class extends o{constructor(e,t=null,n=null,r=null){super(e),this.statusCode=t,this.body=n,this.requestId=r}};function $e(){return Math.floor(Date.now()/1e3)}var et=class{constructor(e,t){this.cached=null,this.pendingRefresh=null,this.nextForce=!1,this.lastAdvisoryError=0,this.provider=e,this.onAdvisoryRefreshError=t}async getToken(){let e=this.nextForce;this.nextForce=!1;let t=this.cached;if(e||t==null)return(await this.refresh(e)).token;if(t.expiresAt==null)return t.token;let n=t.expiresAt-$e();return n>120?t.token:n>30?(this.backgroundRefresh(),t.token):(await this.refresh()).token}invalidate(){this.cached=null,this.nextForce=!0}refresh(e=!1){return this.pendingRefresh&&!e?this.pendingRefresh:this.doRefresh(e)}backgroundRefresh(){this.pendingRefresh||$e()-this.lastAdvisoryError<5||this.doRefresh().catch(e=>{this.lastAdvisoryError=$e(),this.onAdvisoryRefreshError?.(e)})}doRefresh(e=!1){return this.pendingRefresh=this.provider(e?{forceRefresh:!0}:void 0).then(e=>(this.cached=e,this.pendingRefresh=null,e),e=>{throw this.pendingRefresh=null,e}),this.pendingRefresh}},L=e=>{if(globalThis.process!==void 0)return{}[e]?.trim()||void 0;if(globalThis.Deno!==void 0)return globalThis.Deno.env?.get?.(e)?.trim()||void 0};function tt(e){let t=0;for(let n of e)t+=n.length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n}var nt;function rt(e){let t;return(nt??=(t=new globalThis.TextEncoder,t.encode.bind(t)))(e)}var it;function at(e){let t;return(it??=(t=new globalThis.TextDecoder,t.decode.bind(t)))(e)}var ot=e=>{if(globalThis.Buffer!==void 0){let t=globalThis.Buffer.from(e,`base64`);return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}if(typeof atob<`u`){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}throw new o("Cannot decode base64 string; Expected `Buffer` or `atob` to be defined")},st=`warn`,ct={off:0,error:200,warn:300,info:400,debug:500},lt=(e,t,n)=>{if(e){if(E(ct,e))return e;n.warn(`${t} was set to ${JSON.stringify(e)}, expected one of ${JSON.stringify(Object.keys(ct))}`)}};function ut(){}function dt(e,t,n){return!t||ct[e]>ct[n]?ut:t[e].bind(t)}var ft={error:ut,warn:ut,info:ut,debug:ut},pt=new WeakMap;function mt(e,t){let n=pt.get(e);if(n&&n[0]===t)return n[1];let r={error:dt(`error`,e,t),warn:dt(`warn`,e,t),info:dt(`info`,e,t),debug:dt(`debug`,e,t)};return pt.set(e,[t,r]),r}function ht(e){let t=e.logger,n=e.logLevel??`off`;return t?mt(t,n):ft}var gt,_t;function vt(){let e=L(`ANTHROPIC_LOG`);return(!_t||e!==gt)&&(gt=e,_t=mt(console,lt(e,`process.env['ANTHROPIC_LOG']`,mt(console,`warn`))??`warn`)),_t}function yt(e,t,n){e.debug!==ut&&e.debug(t,bt(n))}var bt=e=>(e.options&&(e.options={...e.options},delete e.options.headers),e.headers&&=Object.fromEntries((e.headers instanceof Headers?[...e.headers]:Object.entries(e.headers)).map(([e,t])=>[e,e.toLowerCase()===`authorization`||e.toLowerCase()===`api-key`||e.toLowerCase()===`x-api-key`||e.toLowerCase()===`cookie`||e.toLowerCase()===`set-cookie`?`***`:t])),`retryOfRequestLogID`in e&&(e.retryOfRequestLogID&&(e.retryOf=e.retryOfRequestLogID),delete e.retryOfRequestLogID),e),xt=function(){let{crypto:e}=globalThis;if(e?.randomUUID)return xt=e.randomUUID.bind(e),e.randomUUID();let t=new Uint8Array(1),n=e?()=>e.getRandomValues(t)[0]:()=>Math.random()*255&255;return`10000000-1000-4000-8000-100000000000`.replace(/[018]/g,e=>(+e^n()&15>>e/4).toString(16))},St=/^[A-Za-z0-9_.-]+$/;function Ct(e){if(!e)throw Error(`profile name is empty`);if(e===`.`||e===`..`)throw Error(`profile name "${e}" is not allowed`);if(e.includes(`/`)||e.includes(`\\`))throw Error(`profile name "${e}" must not contain path separators`);if(!St.test(e))throw Error(`profile name "${e}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`)}var wt=async e=>{var t,n;let r=await Et();if(r===null)return null;let i=e??await Ot();if(i===null)return null;Ct(i);let{fs:a,path:o}=await Le(async()=>{let{fs:e,path:t}=await import(`./node.browser-DtjfoFGj.js`);return{fs:e,path:t}},[],import.meta.url),s=o.join(r,`configs`,`${i}.json`),c;try{c=await a.promises.readFile(s,`utf-8`)}catch(e){if(e?.code!==`ENOENT`)throw Error(`failed to read config file ${s}: ${e}`);c=null}if(c===null){let e=L(`ANTHROPIC_ORGANIZATION_ID`),t=L(`ANTHROPIC_IDENTITY_TOKEN_FILE`),n=L(`ANTHROPIC_FEDERATION_RULE_ID`);return n&&e?{fromFile:!1,config:{organization_id:e,workspace_id:L(`ANTHROPIC_WORKSPACE_ID`),base_url:L(`ANTHROPIC_BASE_URL`),authentication:{type:`oidc_federation`,federation_rule_id:n,service_account_id:L(`ANTHROPIC_SERVICE_ACCOUNT_ID`),identity_token:t?{source:`file`,path:t}:void 0,scope:L(`ANTHROPIC_SCOPE`)}}}:null}let l;try{l=JSON.parse(c)}catch(e){throw Error(`failed to parse config file ${s}: ${e}`)}if(!l.authentication)throw Error(`config file ${s} is missing "authentication"`);let u=l.authentication.type;if(u!==`oidc_federation`&&u!==`user_oauth`)throw Error(`authentication.type "${u}" is not a known authentication type`);if(l.organization_id??(l.organization_id=L(`ANTHROPIC_ORGANIZATION_ID`)),l.workspace_id??(l.workspace_id=L(`ANTHROPIC_WORKSPACE_ID`)),l.base_url??(l.base_url=L(`ANTHROPIC_BASE_URL`)),(t=l.authentication).scope??(t.scope=L(`ANTHROPIC_SCOPE`)),l.authentication.type===`oidc_federation`){if(!l.authentication.identity_token){let e=L(`ANTHROPIC_IDENTITY_TOKEN_FILE`);e&&(l.authentication.identity_token={source:`file`,path:e})}l.authentication.federation_rule_id||(l.authentication.federation_rule_id=L(`ANTHROPIC_FEDERATION_RULE_ID`)??``),(n=l.authentication).service_account_id??(n.service_account_id=L(`ANTHROPIC_SERVICE_ACCOUNT_ID`))}return{config:l,fromFile:!0}},Tt=async(e,t)=>{if(e?.authentication.credentials_path)return e.authentication.credentials_path;let n=await Et();if(!n)return null;let r=t??await Ot();if(!r)return null;Ct(r);let{path:i}=await Le(async()=>{let{path:e}=await import(`./node.browser-DtjfoFGj.js`);return{path:e}},[],import.meta.url);return i.join(n,`credentials`,`${r}.json`)},Et=async()=>{if(!Dt())return null;let{path:e}=await Le(async()=>{let{path:e}=await import(`./node.browser-DtjfoFGj.js`);return{path:e}},[],import.meta.url),t=L(`ANTHROPIC_CONFIG_DIR`);if(t)return t;if(oe()[`X-Stainless-OS`]===`Windows`){let t=L(`APPDATA`);if(t)return e.join(t,`Anthropic`);let n=L(`USERPROFILE`);return n?e.join(n,`AppData`,`Roaming`,`Anthropic`):null}let n=L(`XDG_CONFIG_HOME`);if(n)return e.join(n,`anthropic`);let r=L(`HOME`);return r?e.join(r,`.config`,`anthropic`):null},Dt=()=>{let e=oe()[`X-Stainless-Runtime`];return e===`node`||e===`deno`},Ot=async()=>{let e=await Et();if(!e)return null;let t=L(`ANTHROPIC_PROFILE`);if(t)return t;let{fs:n,path:r}=await Le(async()=>{let{fs:e,path:t}=await import(`./node.browser-DtjfoFGj.js`);return{fs:e,path:t}},[],import.meta.url),i=r.join(e,`active_config`);try{return(await n.promises.readFile(i,`utf-8`)).trim()||`default`}catch(e){if(e?.code!==`ENOENT`)throw Error(`failed to read ${i}: ${e}`);return`default`}};function kt(e){if(!e)throw new o(`Identity token file path is empty`);return async()=>{let{fs:t}=await Le(async()=>{let{fs:e}=await import(`./node.browser-DtjfoFGj.js`);return{fs:e}},[],import.meta.url),n;try{n=await t.promises.readFile(e,`utf-8`)}catch(t){throw new o(`Failed to read identity token file at ${e}: ${t}`)}let r=n.trim();if(!r)throw new o(`Identity token file at ${e} is empty`);return r}}function At(e){if(!e)throw new o(`Identity token value is empty`);return()=>e}function jt(e){return async()=>{We(e.baseURL);let t=await e.identityTokenProvider();if(t.length>16384)throw new Qe(`Identity token is ${Math.ceil(t.length/1024)} KiB, exceeds the 16 KiB assertion limit`);let n={grant_type:Re,assertion:t,federation_rule_id:e.federationRuleId,organization_id:e.organizationId};e.serviceAccountId&&(n.service_account_id=e.serviceAccountId),e.workspaceId&&(n.workspace_id=e.workspaceId);let r=`${e.baseURL}${Be}`,i;try{i=await e.fetch(r,{method:`POST`,headers:{"Content-Type":`application/json`,"anthropic-beta":`${Ve},${He}`,"User-Agent":e.userAgent||`anthropic-sdk-typescript/0.128.0 oidcFederationProvider`},body:JSON.stringify(n)})}catch(e){throw new Qe(`Failed to reach token endpoint ${r}: ${e}`)}let a=i.headers.get(`Request-Id`);if(!i.ok){let t=Je(await i.text().catch(()=>``)),n=``;throw i.status===401&&(n=` Ensure your federation rule matches your identity token. ${e.workspaceId?``:"If your federation rule is scoped to multiple workspaces, set the ANTHROPIC_WORKSPACE_ID environment variable, the 'workspace_id' config key, or the `workspaceId` option. "}View your authentication events in the Workload identity page of Claude Console for more details.`),new Qe(`Token exchange failed with status ${i.status}${a?` (request-id ${a})`:``}: ${t}${n}`,i.status,t,a)}let o=await Ge(i,a),s=Number(o.expires_in);if(!Number.isFinite(s))throw new Qe(`Token endpoint response missing required fields: ${JSON.stringify(Je(o))}`,i.status,Je(o),a);return{token:o.access_token,expiresAt:$e()+s}}}function Mt(e){return async t=>{let{fs:n}=await Le(async()=>{let{fs:e}=await import(`./node.browser-DtjfoFGj.js`);return{fs:e}},[],import.meta.url);await Ye(e.credentialsPath,e.onSafetyWarning);let r;try{r=await n.promises.readFile(e.credentialsPath,`utf-8`)}catch(t){throw new Qe(`Credentials file not found at ${e.credentialsPath}: ${t}`)}let i;try{i=JSON.parse(r)}catch(t){throw new Qe(`Credentials file at ${e.credentialsPath} is not valid JSON: ${t}`)}let a=i.access_token;if(!a)throw new Qe(`Credentials file at ${e.credentialsPath} must include 'access_token'`);let o=i.expires_at;if(!t?.forceRefresh&&(o==null||$e()<o-30))return{token:a,expiresAt:o??null};let s=i.refresh_token;if(!e.clientId||!s)throw new Qe(`Access token at ${e.credentialsPath} has expired and no refresh is available (client_id ${e.clientId?`set`:`empty`}, refresh_token ${s?`set`:`empty`})`);We(e.baseURL);let c={grant_type:ze,refresh_token:s,client_id:e.clientId},l=`${e.baseURL}${Be}`,u;try{u=await e.fetch(l,{method:`POST`,headers:{"Content-Type":`application/json`,"anthropic-beta":Ve,"User-Agent":e.userAgent||`anthropic-sdk-typescript/0.128.0 userOAuthProvider`},body:JSON.stringify(c)})}catch(e){throw new Qe(`User OAuth refresh failed to reach token endpoint: ${e}`)}let d=u.headers.get(`Request-Id`);if(!u.ok){let e=await u.text().catch(()=>``);throw new Qe(`User OAuth refresh failed (HTTP ${u.status}): ${Je(e)}`,u.status,Je(e),d)}let f=await Ge(u,d),p=Number(f.expires_in);if(!Number.isFinite(p))throw new Qe(`User OAuth refresh response missing or invalid expires_in: ${JSON.stringify(Je(f))}`,u.status,Je(f),d);let m=$e()+p,h=f.refresh_token||s;return await Xe(e.credentialsPath,{...i,version:`1.0`,type:`oauth_token`,access_token:f.access_token,expires_at:m,refresh_token:h}),{token:f.access_token,expiresAt:m}}}function Nt(e,t){let n=Ft(e,e.authentication.credentials_path??null,(e.base_url||t.baseURL).replace(/\/+$/,``),t),r={};return e.workspace_id&&e.authentication.type===`user_oauth`&&(r[`anthropic-workspace-id`]=e.workspace_id),{provider:n,extraHeaders:r,baseURL:e.base_url||void 0}}async function Pt(e,t){let n=await wt(t);if(!n)return null;let{config:r,fromFile:i}=n;return Nt(r.authentication.credentials_path||!i?r:{...r,authentication:{...r.authentication,credentials_path:await Tt(r,t)??void 0}},e)}function Ft(e,t,n,r){switch(e.authentication.type){case`oidc_federation`:{let i=e.authentication,a=It(i);if(!a)throw new Qe(`oidc_federation config requires an identity token (set authentication.identity_token, ANTHROPIC_IDENTITY_TOKEN_FILE, or ANTHROPIC_IDENTITY_TOKEN)`);if(!i.federation_rule_id)throw new Qe(`oidc_federation config requires 'federation_rule_id'. Set it in authentication.federation_rule_id in your profile, or via ANTHROPIC_FEDERATION_RULE_ID (profile takes precedence).`);if(!e.organization_id)throw new Qe(`oidc_federation config requires organization_id (set ANTHROPIC_ORGANIZATION_ID or config.organization_id)`);let o=jt({identityTokenProvider:a,federationRuleId:i.federation_rule_id,organizationId:e.organization_id,serviceAccountId:i.service_account_id,workspaceId:e.workspace_id,baseURL:n,fetch:r.fetch,userAgent:r.userAgent});return t?Lt(o,t,r.onCacheWriteError,r.onSafetyWarning):o}case`user_oauth`:if(!t)throw new Qe(`user_oauth config requires authentication.credentials_path (or load via a profile so it defaults to <config_dir>/credentials/<profile>.json)`);return Mt({credentialsPath:t,clientId:e.authentication.client_id,baseURL:n,fetch:r.fetch,userAgent:r.userAgent,onSafetyWarning:r.onSafetyWarning});default:{let t=e.authentication.type;throw new Qe(`authentication.type "${t}" is not a known authentication type`)}}}function It(e){if(e.identity_token){let t=e.identity_token.source;if(t!==`file`)throw new Qe(`identity_token.source "${t}" is not supported by this SDK version (only "file")`);if(!e.identity_token.path)throw new Qe(`identity_token.source "file" requires a non-empty path`);return kt(e.identity_token.path)}let t=L(`ANTHROPIC_IDENTITY_TOKEN_FILE`);if(t)return kt(t);let n=L(`ANTHROPIC_IDENTITY_TOKEN`);return n?At(n):null}function Lt(e,t,n,r){return async i=>{let{fs:a}=await Le(async()=>{let{fs:e}=await import(`./node.browser-DtjfoFGj.js`);return{fs:e}},[],import.meta.url);await Ye(t,r);let o;try{let e=await a.promises.readFile(t,`utf-8`);o=JSON.parse(e);let n=o?.access_token;if(n&&!i?.forceRefresh){let e=o?.expires_at;if(e==null||$e()<e-30)return{token:n,expiresAt:e??null}}}catch(e){e?.code!==`ENOENT`&&!(e instanceof SyntaxError)&&n?.(e)}let s=await e(i);try{await Xe(t,{...o??{},version:`1.0`,type:`oauth_token`,access_token:s.token,expires_at:s.expiresAt})}catch(e){n?.(e)}return s}}var Rt,zt,Bt=(()=>{class e{constructor(){Rt.set(this,void 0),zt.set(this,void 0),n(this,Rt,new Uint8Array,`f`),n(this,zt,null,`f`)}decode(e){if(e==null)return[];let t=e instanceof ArrayBuffer?new Uint8Array(e):typeof e==`string`?rt(e):e;n(this,Rt,tt([r(this,Rt,`f`),t]),`f`);let i=[],a;for(;(a=Vt(r(this,Rt,`f`),r(this,zt,`f`)))!=null;){if(a.carriage&&r(this,zt,`f`)==null){n(this,zt,a.index,`f`);continue}if(r(this,zt,`f`)!=null&&(a.index!==r(this,zt,`f`)+1||a.carriage)){i.push(at(r(this,Rt,`f`).subarray(0,r(this,zt,`f`)-1))),n(this,Rt,r(this,Rt,`f`).subarray(r(this,zt,`f`)),`f`),n(this,zt,null,`f`);continue}let e=r(this,zt,`f`)===null?a.preceding:a.preceding-1,t=at(r(this,Rt,`f`).subarray(0,e));i.push(t),n(this,Rt,r(this,Rt,`f`).subarray(a.index),`f`),n(this,zt,null,`f`)}return i}flush(){return r(this,Rt,`f`).length?this.decode(`
`):[]}}return Rt=new WeakMap,zt=new WeakMap,e.NEWLINE_CHARS=new Set([`
`,`\r`]),e.NEWLINE_REGEXP=/\r\n|[\n\r]/g,e})();function Vt(e,t){for(let n=t??0;n<e.length;n++){if(e[n]===10)return{preceding:n,index:n+1,carriage:!1};if(e[n]===13)return{preceding:n,index:n+1,carriage:!0}}return null}function Ht(e){for(let t=0;t<e.length-1;t++){if(e[t]===10&&e[t+1]===10||e[t]===13&&e[t+1]===13)return t+2;if(e[t]===13&&e[t+1]===10&&t+3<e.length&&e[t+2]===13&&e[t+3]===10)return t+4}return-1}var Ut,Wt=(()=>{class e{constructor(e,t,r){this.iterator=e,Ut.set(this,void 0),this.controller=t,n(this,Ut,r,`f`)}static rawEvents(e,t=new AbortController){return Gt(e,t)}static fromSSEResponse(t,n,r){let a=!1,c=r?ht(r):console;async function*l(){if(a)throw new o("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");a=!0;let e=!1;try{for await(let e of Gt(t,n)){if(e.event===`completion`)try{yield JSON.parse(e.data)}catch(t){throw c.error(`Could not parse message into JSON:`,e.data),c.error(`From chunk:`,e.raw),t}if(e.event===`message_start`||e.event===`message_delta`||e.event===`message_stop`||e.event===`content_block_start`||e.event===`content_block_delta`||e.event===`content_block_stop`||e.event===`message`||e.event===`user.message`||e.event===`user.interrupt`||e.event===`user.tool_confirmation`||e.event===`user.custom_tool_result`||e.event===`user.tool_result`||e.event===`agent.message`||e.event===`agent.thinking`||e.event===`agent.tool_use`||e.event===`agent.tool_result`||e.event===`agent.mcp_tool_use`||e.event===`agent.mcp_tool_result`||e.event===`agent.custom_tool_use`||e.event===`agent.thread_context_compacted`||e.event===`session.status_running`||e.event===`session.status_idle`||e.event===`session.status_rescheduled`||e.event===`session.status_terminated`||e.event===`session.error`||e.event===`session.deleted`||e.event===`session.updated`||e.event===`span.model_request_start`||e.event===`span.model_request_end`||e.event===`span.outcome_evaluation_start`||e.event===`span.outcome_evaluation_ongoing`||e.event===`span.outcome_evaluation_end`||e.event===`user.define_outcome`||e.event===`agent.thread_message_received`||e.event===`agent.thread_message_sent`||e.event===`agent.session_thread_message_received`||e.event===`agent.session_thread_message_sent`||e.event===`session.thread_created`||e.event===`session.thread_status_created`||e.event===`session.thread_status_running`||e.event===`session.thread_status_idle`||e.event===`session.thread_status_rescheduled`||e.event===`session.thread_status_terminated`||e.event===`event_start`||e.event===`event_delta`||e.event===`system.message`)try{yield JSON.parse(e.data)}catch(t){throw c.error(`Could not parse message into JSON:`,e.data),c.error(`From chunk:`,e.raw),t}if(e.event!==`ping`&&e.event===`error`){let n=k(e.data)??e.data,r=n?.error?.type;throw new s(void 0,n,void 0,t.headers,r)}}e=!0}catch(e){if(i(e))return;throw e}finally{e||n.abort(),fe(n)}}return new e(l,n,r)}static fromReadableStream(t,n,r){let a=!1;async function*s(){let e=new Bt,n=ge(t);for await(let t of n)for(let n of e.decode(t))yield n;for(let t of e.flush())yield t}async function*c(){if(a)throw new o("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");a=!0;let e=!1;try{for await(let t of s())e||t&&(yield JSON.parse(t));e=!0}catch(e){if(i(e))return;throw e}finally{e||n.abort(),fe(n)}}return new e(c,n,r)}[(Ut=new WeakMap,Symbol.asyncIterator)](){return this.iterator()}tee(){let t=[],n=[],i=this.iterator(),a=e=>({next:()=>{if(e.length===0){let e=i.next();t.push(e),n.push(e)}return e.shift()}});return[new e(()=>a(t),this.controller,r(this,Ut,`f`)),new e(()=>a(n),this.controller,r(this,Ut,`f`))]}toReadableStream(){let e=this,t;return me({async start(){t=e[Symbol.asyncIterator]()},async pull(e){try{let{value:n,done:r}=await t.next();if(r)return e.close();let i=rt(JSON.stringify(n)+`
`);e.enqueue(i)}catch(t){e.error(t)}},async cancel(){await t.return?.()}})}}return e})();async function*Gt(e,t){if(!e.body)throw t.abort(),globalThis.navigator!==void 0&&globalThis.navigator.product===`ReactNative`?new o(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`):new o(`Attempted to iterate over a response with no body`);let n=new qt,r=new Bt,i=ge(e.body);for await(let e of Kt(i))for(let t of r.decode(e)){let e=n.decode(t);e&&(yield e)}for(let e of r.flush()){let t=n.decode(e);t&&(yield t)}}async function*Kt(e){let t=new Uint8Array;for await(let n of e){if(n==null)continue;let e=n instanceof ArrayBuffer?new Uint8Array(n):typeof n==`string`?rt(n):n,r=new Uint8Array(t.length+e.length);r.set(t),r.set(e,t.length),t=r;let i;for(;(i=Ht(t))!==-1;)yield t.subarray(0,i),t=t.subarray(i)}t.length>0&&(yield t)}var qt=class{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith(`\r`)&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;let e={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],e}if(this.chunks.push(e),e.startsWith(`:`))return null;let[t,n,r]=Jt(e,`:`);return r.startsWith(` `)&&(r=r.substring(1)),t===`event`?this.event=r:t===`data`&&this.data.push(r),null}};function Jt(e,t){let n=e.indexOf(t);return n===-1?[e,``,``]:[e.substring(0,n),t,e.substring(n+t.length)]}async function Yt(e,t){let{response:n,requestLogID:r,retryOfRequestLogID:i,startTime:a}=t,o=await(async()=>{if(t.options.stream)return ht(e).debug(`response`,n.status,n.url,n.headers,n.body),Wt.fromSSEResponse(n,t.controller,e);if(n.status===204)return null;if(t.options.__binaryResponse)return n;let r=n.headers.get(`content-type`)?.split(`;`)[0]?.trim();return r?.includes(`application/json`)||r?.endsWith(`+json`)?n.headers.get(`content-length`)===`0`?void 0:Xt(await n.json(),n):await n.text()})().finally(()=>{!t.options.stream&&!t.options.__binaryResponse&&fe(t.controller)});return yt(ht(e),`[${r}] response parsed`,{retryOfRequestLogID:i,url:n.url,status:n.status,body:o,durationMs:Date.now()-a}),o}function Xt(e,t){return!e||typeof e!=`object`||Array.isArray(e)?e:Object.defineProperties(e,{_request_id:{value:t.headers.get(`request-id`),enumerable:!1},_workspace_id:{value:t.headers.get(`anthropic-workspace-id`),enumerable:!1}})}var Zt=new WeakSet;function Qt(e){return typeof e==`object`&&!!e&&Zt.has(e)}function $t(e){let t=new Set;for(;typeof e==`object`&&e&&!t.has(e);){if(t.add(e),Qt(e)||i(e)||e instanceof l||e instanceof d)return!0;e=e.cause}return!1}function en(e,t,n,r){return async(i,a={})=>{if(t.length===0)return e.call(void 0,i,a);let s=a.headers instanceof Headers?a.headers:new Headers(a.headers),c=await rn(e,t,n,r)({...a,headers:s,url:typeof i==`string`?i:i instanceof URL?i.href:i.url});if(c.bodyUsed||c.body?.locked)throw new o(`middleware consumed the response body; use response.clone() to inspect it, or return new Response(body, response) to consume and replace it`);return c}}function tn(e,t){let n=new WeakMap;return{options:e,logger:t?ht(t):vt(),parse(r){if(e?.stream&&r.ok)return nn(r,e,t);let i=n.get(r);return i||(i=nn(r,e,t),n.set(r,i)),i}}}async function nn(e,t,n){if(e.bodyUsed||e.body?.locked)throw new o(`cannot ctx.parse() a response whose body was already consumed; call ctx.parse() instead of reading the body, or read via response.clone()`);if(t?.stream&&e.ok)return Wt.fromSSEResponse(e.clone(),new AbortController,n);if(e.status===204)return null;if(t?.__binaryResponse)return e;let r=e.headers.get(`content-type`)?.split(`;`)[0]?.trim();return r?.includes(`application/json`)||r?.endsWith(`+json`)?e.headers.get(`content-length`)===`0`?void 0:Xt(await e.clone().json(),e):await e.clone().text()}function rn(e,t,n,r){let i=async({url:t,...n})=>{try{return await e.call(void 0,t,n)}catch(e){let t=a(e);throw Zt.add(t),t}},o=tn(n,r);for(let e=t.length-1;e>=0;e--){let n=t[e],r=i;i=async e=>n(e,r,o)}return i}var an,on=(()=>{class e extends Promise{constructor(e,t,r=Yt){super(e=>{e(null)}),this.responsePromise=t,this.parseResponse=r,an.set(this,void 0),n(this,an,e,`f`)}_thenUnwrap(t){return new e(r(this,an,`f`),this.responsePromise,async(e,n)=>Xt(t(await this.parseResponse(e,n),n),n.response))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){let[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t,request_id:t.headers.get(`request-id`),workspace_id:t.headers.get(`anthropic-workspace-id`)}}parse(){return this.parsedPromise||=this.responsePromise.then(e=>this.parseResponse(r(this,an,`f`),e)),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}return an=new WeakMap,e})(),sn,cn=(()=>{class e{constructor(e,t,r,i){sn.set(this,void 0),n(this,sn,e,`f`),this.options=i,this.response=t,this.body=r}hasNextPage(){return this.getPaginatedItems().length?this.nextPageRequestOptions()!=null:!1}async getNextPage(){let e=this.nextPageRequestOptions();if(!e)throw new o("No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.");return await r(this,sn,`f`).requestAPIList(this.constructor,e)}async*iterPages(){let e=this;for(yield e;e.hasNextPage();)e=await e.getNextPage(),yield e}async*[(sn=new WeakMap,Symbol.asyncIterator)](){for await(let e of this.iterPages())for(let t of e.getPaginatedItems())yield t}}return e})(),ln=(()=>{class e extends on{constructor(e,t,n){super(e,t,async(e,t)=>new n(e,t.response,await Yt(e,t),t.options))}async*[Symbol.asyncIterator](){let e=await this;for await(let t of e)yield t}}return e})(),un=class extends cn{constructor(e,t,n,r){super(e,t,n,r),this.data=n.data||[],this.has_more=n.has_more||!1,this.first_id=n.first_id||null,this.last_id=n.last_id||null}getPaginatedItems(){return this.data??[]}hasNextPage(){return this.has_more!==!1&&super.hasNextPage()}nextPageRequestOptions(){if(this.options.query?.before_id){let e=this.first_id;return e?{...this.options,query:{...w(this.options.query),before_id:e}}:null}let e=this.last_id;return e?{...this.options,query:{...w(this.options.query),after_id:e}}:null}},dn=class extends cn{constructor(e,t,n,r){super(e,t,n,r),this.data=n.data||[],this.next_page=n.next_page||null}getPaginatedItems(){return this.data??[]}nextPageRequestOptions(){let e=this.next_page;return e?{...this.options,query:{...w(this.options.query),page:e}}:null}},fn=class extends cn{constructor(e,t,n,r){super(e,t,n,r),this.data=n.data||[],this.next_page=n.next_page||null,this.prev_page=n.prev_page||null}getPaginatedItems(){return this.data??[]}nextPageRequestOptions(){let e=this.next_page;return e?{...this.options,query:{...w(this.options.query),page:e}}:null}},pn=()=>{if(typeof File>`u`){let{process:e}=globalThis,t=typeof e?.versions?.node==`string`&&parseInt(e.versions.node.split(`.`))<20;throw Error("`File` is not defined as a global, which is required for file uploads."+(t?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":``))}};function mn(e,t,n){return pn(),new File(e,t??`unknown_file`,n)}function hn(e,t){let n=typeof e==`object`&&!!e&&(`name`in e&&e.name&&String(e.name)||`url`in e&&e.url&&String(e.url)||`filename`in e&&e.filename&&String(e.filename)||`path`in e&&e.path&&String(e.path))||``;return t?n.split(/[\\/]/).pop()||void 0:n}var gn=e=>typeof e==`object`&&!!e&&typeof e[Symbol.asyncIterator]==`function`,_n=async(e,t,n=!0)=>({...e,body:await bn(e.body,t,n)}),vn=new WeakMap;function yn(e){let t=typeof e==`function`?e:e.fetch,n=vn.get(t);if(n)return n;let r=(async()=>{try{let e=`Response`in t?t.Response:(await t(`data:,`)).constructor,n=new FormData;return n.toString()!==await new e(n).text()}catch{return!0}})();return vn.set(t,r),r}var bn=async(e,t,n=!0)=>{if(!await yn(t))throw TypeError(`The provided fetch function does not support file uploads with the current global FormData class.`);let r=new FormData;return await Promise.all(Object.entries(e||{}).map(([e,t])=>xn(r,e,t,n))),r},xn=async(e,t,n,r)=>{if(n!==void 0){if(n==null)throw TypeError(`Received null for "${t}"; to pass null in FormData, you must use the string 'null'`);if(typeof n==`string`||typeof n==`number`||typeof n==`boolean`)e.append(t,String(n));else if(n instanceof Response){let i={},a=n.headers.get(`Content-Type`);a&&(i={type:a}),e.append(t,mn([await n.blob()],hn(n,r),i))}else if(gn(n))e.append(t,mn([await new Response(he(n)).blob()],hn(n,r)));else if(n instanceof Blob)e.append(t,mn([n],hn(n,r)||void 0,{type:n.type}));else if(Array.isArray(n))await Promise.all(n.map(n=>xn(e,t+`[]`,n,r)));else if(typeof n.then==`function`)throw TypeError(`Received a Promise for "${t}"; await it first, e.g. \`await toFile(...)\``);else if(n instanceof ArrayBuffer||ArrayBuffer.isView(n))throw TypeError(`Received ${n.constructor.name} for "${t}"; to upload raw bytes, wrap them with \`await toFile(bytes, 'filename')\``);else if(typeof n==`object`)await Promise.all(Object.entries(n).map(([n,i])=>xn(e,`${t}[${n}]`,i,r)));else throw TypeError(`Invalid value given to form, expected a string, number, boolean, object, Array, File or Blob but got ${n} instead`)}},Sn=e=>typeof e==`object`&&!!e&&typeof e.size==`number`&&typeof e.type==`string`&&typeof e.text==`function`&&typeof e.slice==`function`&&typeof e.arrayBuffer==`function`,Cn=e=>typeof e==`object`&&!!e&&typeof e.name==`string`&&typeof e.lastModified==`number`&&Sn(e),wn=e=>typeof e==`object`&&!!e&&typeof e.url==`string`&&typeof e.blob==`function`;async function Tn(e,t,n){if(pn(),e=await e,t||=hn(e,!0),Cn(e))return e instanceof File&&t==null&&n==null?e:mn([await e.arrayBuffer()],t??e.name,{type:e.type,lastModified:e.lastModified,...n});if(wn(e)){let r=await e.blob();return t||=new URL(e.url).pathname.split(/[\\/]/).pop(),mn(await En(r),t,n)}let r=await En(e);if(!n?.type){let e=r.find(e=>typeof e==`object`&&`type`in e&&e.type);typeof e==`string`&&(n={...n,type:e})}return mn(r,t,n)}async function En(e){let t=[];if(typeof e==`string`||ArrayBuffer.isView(e)||e instanceof ArrayBuffer)t.push(e);else if(Sn(e))t.push(e instanceof Blob?e:await e.arrayBuffer());else if(gn(e))for await(let n of e)t.push(...await En(n));else{let t=e?.constructor?.name;throw Error(`Unexpected data type: ${typeof e}${t?`; constructor: ${t}`:``}${Dn(e)}`)}return t}function Dn(e){return typeof e!=`object`||!e?``:`; props: [${Object.getOwnPropertyNames(e).map(e=>`"${e}"`).join(`, `)}]`}var R=class{constructor(e){this._client=e}},On=Symbol.for(`brand.privateNullableHeaders`);function*kn(e){if(!e)return;if(On in e){let{values:t,nulls:n}=e;yield*t.entries();for(let e of n)yield[e,null];return}let t=!1,n;e instanceof Headers?n=e.entries():C(e)?n=e:(t=!0,n=Object.entries(e??{}));for(let e of n){let n=e[0];if(typeof n!=`string`)throw TypeError(`expected header name to be a string`);let r=C(e[1])?e[1]:[e[1]],i=!1;for(let e of r)e!==void 0&&(t&&!i&&(i=!0,yield[n,An]),yield[n,e])}}var An=Symbol(`clear`),jn=new Set([`x-stainless-helper`]),Mn=(e,t)=>{let n=e?e.split(`,`).map(e=>e.trim()).filter(Boolean):[];for(let e of t.split(`,`).map(e=>e.trim()))e&&!n.includes(e)&&n.push(e);return n.join(`, `)},z=e=>{let t=new Headers,n=new Set;for(let r of e){let e=new Set;for(let[i,a]of kn(r)){let r=i.toLowerCase();if(jn.has(r)){if(a===An)continue;a===null?(t.delete(i),n.add(r)):(t.set(i,Mn(t.get(i),a)),n.delete(r));continue}(a===An||!e.has(r))&&(t.delete(i),e.add(r),a===An)||(a===null?(t.delete(i),n.add(r)):(t.append(i,a),n.delete(r)))}}return{[On]:!0,values:t,nulls:n}};function Nn(e){return e.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}var Pn=Object.freeze(Object.create(null)),B=((e=Nn)=>function(t,...n){if(t.length===1)return t[0];let r=!1,i=[],a=t.reduce((t,a,o)=>{/[?#]/.test(a)&&(r=!0);let s=n[o],c=(r?encodeURIComponent:e)(``+s);return o!==n.length&&(s==null||typeof s==`object`&&s.toString===Object.getPrototypeOf(Object.getPrototypeOf(s.hasOwnProperty??Pn)??Pn)?.toString)&&(c=s+``,i.push({start:t.length+a.length,length:c.length,error:`Value of type ${Object.prototype.toString.call(s).slice(8,-1)} is not a valid path parameter`})),t+a+(o===n.length?``:c)},``),s=a.split(/[?#]/,1)[0],c=/(?<=^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi,l;for(;(l=c.exec(s))!==null;)i.push({start:l.index,length:l[0].length,error:`Value "${l[0]}" can\'t be safely passed as a path parameter`});if(i.sort((e,t)=>e.start-t.start),i.length>0){let e=0,t=i.reduce((t,n)=>{let r=` `.repeat(n.start-e),i=`^`.repeat(n.length);return e=n.start+n.length,t+r+i},``);throw new o(`Path parameters result in path with invalid segments:\n${i.map(e=>e.error).join(`
`)}\n${a}\n${t}`)}return a})(Nn),Fn=class extends R{retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/deployment_runs/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/deployment_runs?beta=true`,dn,{query:i,...t,headers:z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}},In=class extends R{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/deployments?beta=true`,{body:i,...t,headers:z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/deployments/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/deployments/${e}?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/deployments?beta=true`,dn,{query:i,...t,headers:z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/deployments/${e}/archive?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}pause(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/deployments/${e}/pause?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}run(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/deployments/${e}/run?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}unpause(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/deployments/${e}/unpause?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},Ln=class extends R{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/dreams?beta=true`,{body:i,...t,headers:z([{"anthropic-beta":[...n??[],`dreaming-2026-04-21`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/dreams/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`dreaming-2026-04-21`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/dreams?beta=true`,dn,{query:i,...t,headers:z([{"anthropic-beta":[...n??[],`dreaming-2026-04-21`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/dreams/${e}/archive?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`dreaming-2026-04-21`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}cancel(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/dreams/${e}/cancel?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`dreaming-2026-04-21`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},Rn=`x-stainless-helper`,zn=`x-stainless-helper-method`;function Bn(e){return{[Rn]:e}}var Vn=Symbol(`anthropic.sdk.stainlessHelper`);function Hn(e){return typeof e==`object`&&!!e&&Vn in e}function Un(e,t){let n=new Set;if(e)for(let t of e)Hn(t)&&n.add(t[Vn]);if(t)for(let e of t){Hn(e)&&n.add(e[Vn]);let t=e.content;if(Array.isArray(t))for(let e of t){Hn(e)&&n.add(e[Vn]);let t=e?.tool?.definition;Hn(t)&&n.add(t[Vn])}}return Array.from(n)}function Wn(e,t){let n=Un(e,t);return n.length===0?{}:{[Rn]:n.join(`, `)}}function Gn(e){return Hn(e)?{[Rn]:e[Vn]}:{}}var Kn=class extends R{list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/files?beta=true`,dn,{query:i,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(B`/v1/files/${e}?beta=true`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}download(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/files/${e}/content?beta=true`,{...n,headers:z([{Accept:`application/binary`,...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers]),__binaryResponse:!0})}retrieveMetadata(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/files/${e}?beta=true`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}upload(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/files?beta=true`,_n({body:i,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},Gn(i.file),t?.headers])},this._client))}},qn=class extends R{retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/models/${e}?beta=true`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/models?beta=true`,un,{query:i,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}},Jn=class extends R{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/user_profiles?beta=true`,{body:i,...t,headers:z([{"anthropic-beta":[...n??[],`user-profiles-2026-08-18`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/user_profiles/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`user-profiles-2026-08-18`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/user_profiles/${e}?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`user-profiles-2026-08-18`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/user_profiles?beta=true`,dn,{query:i,...t,headers:z([{"anthropic-beta":[...n??[],`user-profiles-2026-08-18`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}createEnrollmentURL(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/user_profiles/${e}/enrollment_url?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`user-profiles-2026-08-18`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},Yn=e((e=>{var t=e&&e.__extends||(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})();Object.defineProperty(e,"__esModule",{value:!0});var n=256,r=function(){function e(e){e===void 0&&(e=`=`),this._paddingCharacter=e}return e.prototype.encodedLength=function(e){return this._paddingCharacter?(e+2)/3*4|0:(e*8+5)/6|0},e.prototype.encode=function(e){for(var t=``,n=0;n<e.length-2;n+=3){var r=e[n]<<16|e[n+1]<<8|e[n+2];t+=this._encodeByte(r>>>18&63),t+=this._encodeByte(r>>>12&63),t+=this._encodeByte(r>>>6&63),t+=this._encodeByte(r>>>0&63)}var i=e.length-n;if(i>0){var r=e[n]<<16|(i===2?e[n+1]<<8:0);t+=this._encodeByte(r>>>18&63),t+=this._encodeByte(r>>>12&63),t+=i===2?this._encodeByte(r>>>6&63):this._paddingCharacter||``,t+=this._paddingCharacter||``}return t},e.prototype.maxDecodedLength=function(e){return this._paddingCharacter?e/4*3|0:(e*6+7)/8|0},e.prototype.decodedLength=function(e){return this.maxDecodedLength(e.length-this._getPaddingLength(e))},e.prototype.decode=function(e){if(e.length===0)return new Uint8Array;for(var t=this._getPaddingLength(e),r=e.length-t,i=new Uint8Array(this.maxDecodedLength(r)),a=0,o=0,s=0,c=0,l=0,u=0,d=0;o<r-4;o+=4)c=this._decodeChar(e.charCodeAt(o+0)),l=this._decodeChar(e.charCodeAt(o+1)),u=this._decodeChar(e.charCodeAt(o+2)),d=this._decodeChar(e.charCodeAt(o+3)),i[a++]=c<<2|l>>>4,i[a++]=l<<4|u>>>2,i[a++]=u<<6|d,s|=c&n,s|=l&n,s|=u&n,s|=d&n;if(o<r-1&&(c=this._decodeChar(e.charCodeAt(o)),l=this._decodeChar(e.charCodeAt(o+1)),i[a++]=c<<2|l>>>4,s|=c&n,s|=l&n),o<r-2&&(u=this._decodeChar(e.charCodeAt(o+2)),i[a++]=l<<4|u>>>2,s|=u&n),o<r-3&&(d=this._decodeChar(e.charCodeAt(o+3)),i[a++]=u<<6|d,s|=d&n),s!==0)throw Error(`Base64Coder: incorrect characters for decoding`);return i},e.prototype._encodeByte=function(e){var t=e;return t+=65,t+=25-e>>>8&6,t+=51-e>>>8&-75,t+=61-e>>>8&-15,t+=62-e>>>8&3,String.fromCharCode(t)},e.prototype._decodeChar=function(e){var t=n;return t+=(42-e&e-44)>>>8&-n+e-43+62,t+=(46-e&e-48)>>>8&-n+e-47+63,t+=(47-e&e-58)>>>8&-n+e-48+52,t+=(64-e&e-91)>>>8&-n+e-65+0,t+=(96-e&e-123)>>>8&-n+e-97+26,t},e.prototype._getPaddingLength=function(e){var t=0;if(this._paddingCharacter){for(var n=e.length-1;n>=0&&e[n]===this._paddingCharacter;n--)t++;if(e.length<4||t>2)throw Error(`Base64Coder: incorrect padding`)}return t},e}();e.Coder=r;var i=new r;function a(e){return i.encode(e)}e.encode=a;function o(e){return i.decode(e)}e.decode=o;var s=function(e){t(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}return r.prototype._encodeByte=function(e){var t=e;return t+=65,t+=25-e>>>8&6,t+=51-e>>>8&-75,t+=61-e>>>8&-13,t+=62-e>>>8&49,String.fromCharCode(t)},r.prototype._decodeChar=function(e){var t=n;return t+=(44-e&e-46)>>>8&-n+e-45+62,t+=(94-e&e-96)>>>8&-n+e-95+63,t+=(47-e&e-58)>>>8&-n+e-48+52,t+=(64-e&e-91)>>>8&-n+e-65+0,t+=(96-e&e-123)>>>8&-n+e-97+26,t},r}(r);e.URLSafeCoder=s;var c=new s;function l(e){return c.encode(e)}e.encodeURLSafe=l;function u(e){return c.decode(e)}e.decodeURLSafe=u,e.encodedLength=function(e){return i.encodedLength(e)},e.maxDecodedLength=function(e){return i.maxDecodedLength(e)},e.decodedLength=function(e){return i.decodedLength(e)}})),Xn=e(((e,t)=>{(function(e,n){var r={};n(r);var i=r.default;for(var a in r)i[a]=r[a];typeof t==`object`&&typeof t.exports==`object`?t.exports=i:typeof define==`function`&&define.amd?define(function(){return i}):e.sha256=i})(e,function(e){e.__esModule=!0,e.digestLength=32,e.blockSize=64;var t=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function n(e,n,r,i,a){for(var o,s,c,l,u,d,f,p,m,h,g,_,v;a>=64;){for(o=n[0],s=n[1],c=n[2],l=n[3],u=n[4],d=n[5],f=n[6],p=n[7],h=0;h<16;h++)g=i+h*4,e[h]=(r[g]&255)<<24|(r[g+1]&255)<<16|(r[g+2]&255)<<8|r[g+3]&255;for(h=16;h<64;h++)m=e[h-2],_=(m>>>17|m<<15)^(m>>>19|m<<13)^m>>>10,m=e[h-15],v=(m>>>7|m<<25)^(m>>>18|m<<14)^m>>>3,e[h]=(_+e[h-7]|0)+(v+e[h-16]|0);for(h=0;h<64;h++)_=(((u>>>6|u<<26)^(u>>>11|u<<21)^(u>>>25|u<<7))+(u&d^~u&f)|0)+(p+(t[h]+e[h]|0)|0)|0,v=((o>>>2|o<<30)^(o>>>13|o<<19)^(o>>>22|o<<10))+(o&s^o&c^s&c)|0,p=f,f=d,d=u,u=l+_|0,l=c,c=s,s=o,o=_+v|0;n[0]+=o,n[1]+=s,n[2]+=c,n[3]+=l,n[4]+=u,n[5]+=d,n[6]+=f,n[7]+=p,i+=64,a-=64}return i}var r=function(){function t(){this.digestLength=e.digestLength,this.blockSize=e.blockSize,this.state=new Int32Array(8),this.temp=new Int32Array(64),this.buffer=new Uint8Array(128),this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this.reset()}return t.prototype.reset=function(){return this.state[0]=1779033703,this.state[1]=3144134277,this.state[2]=1013904242,this.state[3]=2773480762,this.state[4]=1359893119,this.state[5]=2600822924,this.state[6]=528734635,this.state[7]=1541459225,this.bufferLength=0,this.bytesHashed=0,this.finished=!1,this},t.prototype.clean=function(){for(var e=0;e<this.buffer.length;e++)this.buffer[e]=0;for(var e=0;e<this.temp.length;e++)this.temp[e]=0;this.reset()},t.prototype.update=function(e,t){if(t===void 0&&(t=e.length),this.finished)throw Error(`SHA256: can't update because hash was finished.`);var r=0;if(this.bytesHashed+=t,this.bufferLength>0){for(;this.bufferLength<64&&t>0;)this.buffer[this.bufferLength++]=e[r++],t--;this.bufferLength===64&&(n(this.temp,this.state,this.buffer,0,64),this.bufferLength=0)}for(t>=64&&(r=n(this.temp,this.state,e,r,t),t%=64);t>0;)this.buffer[this.bufferLength++]=e[r++],t--;return this},t.prototype.finish=function(e){if(!this.finished){var t=this.bytesHashed,r=this.bufferLength,i=t/536870912|0,a=t<<3,o=t%64<56?64:128;this.buffer[r]=128;for(var s=r+1;s<o-8;s++)this.buffer[s]=0;this.buffer[o-8]=i>>>24&255,this.buffer[o-7]=i>>>16&255,this.buffer[o-6]=i>>>8&255,this.buffer[o-5]=i>>>0&255,this.buffer[o-4]=a>>>24&255,this.buffer[o-3]=a>>>16&255,this.buffer[o-2]=a>>>8&255,this.buffer[o-1]=a>>>0&255,n(this.temp,this.state,this.buffer,0,o),this.finished=!0}for(var s=0;s<8;s++)e[s*4+0]=this.state[s]>>>24&255,e[s*4+1]=this.state[s]>>>16&255,e[s*4+2]=this.state[s]>>>8&255,e[s*4+3]=this.state[s]>>>0&255;return this},t.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},t.prototype._saveState=function(e){for(var t=0;t<this.state.length;t++)e[t]=this.state[t]},t.prototype._restoreState=function(e,t){for(var n=0;n<this.state.length;n++)this.state[n]=e[n];this.bytesHashed=t,this.finished=!1,this.bufferLength=0},t}();e.Hash=r;var i=function(){function e(e){this.inner=new r,this.outer=new r,this.blockSize=this.inner.blockSize,this.digestLength=this.inner.digestLength;var t=new Uint8Array(this.blockSize);if(e.length>this.blockSize)new r().update(e).finish(t).clean();else for(var n=0;n<e.length;n++)t[n]=e[n];for(var n=0;n<t.length;n++)t[n]^=54;this.inner.update(t);for(var n=0;n<t.length;n++)t[n]^=106;this.outer.update(t),this.istate=new Uint32Array(8),this.ostate=new Uint32Array(8),this.inner._saveState(this.istate),this.outer._saveState(this.ostate);for(var n=0;n<t.length;n++)t[n]=0}return e.prototype.reset=function(){return this.inner._restoreState(this.istate,this.inner.blockSize),this.outer._restoreState(this.ostate,this.outer.blockSize),this},e.prototype.clean=function(){for(var e=0;e<this.istate.length;e++)this.ostate[e]=this.istate[e]=0;this.inner.clean(),this.outer.clean()},e.prototype.update=function(e){return this.inner.update(e),this},e.prototype.finish=function(e){return this.outer.finished?this.outer.finish(e):(this.inner.finish(e),this.outer.update(e,this.digestLength).finish(e)),this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e}();e.HMAC=i;function a(e){var t=new r().update(e),n=t.digest();return t.clean(),n}e.hash=a,e.default=a;function o(e,t){var n=new i(e).update(t),r=n.digest();return n.clean(),r}e.hmac=o;function s(e,t,n,r){var i=r[0];if(i===0)throw Error(`hkdf: cannot expand more`);t.reset(),i>1&&t.update(e),n&&t.update(n),t.update(r),t.finish(e),r[0]++}var c=new Uint8Array(e.digestLength);function l(e,t,n,r){t===void 0&&(t=c),r===void 0&&(r=32);for(var a=new Uint8Array([1]),l=new i(o(t,e)),u=new Uint8Array(l.digestLength),d=u.length,f=new Uint8Array(r),p=0;p<r;p++)d===u.length&&(s(u,l,n,a),d=0),f[p]=u[d++];return l.clean(),u.fill(0),a.fill(0),f}e.hkdf=l;function u(e,t,n,r){for(var a=new i(e),o=a.digestLength,s=new Uint8Array(4),c=new Uint8Array(o),l=new Uint8Array(o),u=new Uint8Array(r),d=0;d*o<r;d++){var f=d+1;s[0]=f>>>24&255,s[1]=f>>>16&255,s[2]=f>>>8&255,s[3]=f>>>0&255,a.reset(),a.update(t),a.update(s),a.finish(l);for(var p=0;p<o;p++)c[p]=l[p];for(var p=2;p<=n;p++){a.reset(),a.update(l).finish(l);for(var m=0;m<o;m++)c[m]^=l[m]}for(var p=0;p<o&&d*o+p<r;p++)u[d*o+p]=c[p]}for(var d=0;d<o;d++)c[d]=l[d]=0;for(var d=0;d<4;d++)s[d]=0;return a.clean(),u}e.pbkdf2=u})})),Zn=e((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.timingSafeEqual=n;function t(e,t=``){if(!e)throw Error(t)}function n(e,n){if(e.byteLength!==n.byteLength)return!1;e instanceof DataView||(e=new DataView(ArrayBuffer.isView(e)?e.buffer:e)),n instanceof DataView||(n=new DataView(ArrayBuffer.isView(n)?n.buffer:n)),t(e instanceof DataView),t(n instanceof DataView);let r=e.byteLength,i=0,a=-1;for(;++a<r;)i|=e.getUint8(a)^n.getUint8(a);return i===0}})),Qn=e((e=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Webhook=e.WebhookVerificationError=void 0;var t=Yn(),n=Xn(),r=Zn(),i=300,a=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype),this.name=`ExtendableError`,this.stack=Error(t).stack}},o=class e extends a{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype),this.name=`WebhookVerificationError`}};e.WebhookVerificationError=o;var s=class e{constructor(n,r){if(r?.format===`raw`)this.key=n instanceof Uint8Array?n:Uint8Array.from(n,e=>e.charCodeAt(0));else{if(typeof n!=`string`)throw Error(`Expected secret to be of type string`);n.startsWith(e.prefix)&&(n=n.substring(e.prefix.length)),this.key=t.decode(n)}if(this.key.length===0)throw Error(`Secret can't be empty.`)}verify(e,t,n){let i=n?.jsonParse??!0,a={};for(let e of Object.keys(t))a[e.toLowerCase()]=t[e];let s=a[`webhook-id`],c=a[`webhook-signature`],l=a[`webhook-timestamp`];if(!c||!s||!l)throw new o(`Missing required headers`);let u=this.verifyTimestamp(l),d=this.sign(s,u,e).split(`,`)[1],f=c.split(` `),p=new globalThis.TextEncoder;for(let t of f){let[n,a]=t.split(`,`);if(n===`v1`&&(0,r.timingSafeEqual)(p.encode(a),p.encode(d))){let t=e.toString();return t===``?void 0:i?JSON.parse(t):void 0}}throw new o(`No matching signature found`)}sign(e,r,i){if(typeof i!=`string`){if(i.constructor.name===`Buffer`)i=i.toString();else throw Error(`Expected payload to be of type string or Buffer.`)}let a=new TextEncoder,o=Math.floor(r.getTime()/1e3),s=a.encode(`${e}.${o}.${i}`);return`v1,${t.encode(n.hmac(this.key,s))}`}verifyTimestamp(e){let t=Math.floor(Date.now()/1e3),n=parseInt(e,10);if(Number.isNaN(n))throw new o(`Invalid Signature Headers`);if(t-n>i)throw new o(`Message timestamp too old`);if(n>t+i)throw new o(`Message timestamp too new`);return new Date(n*1e3)}};e.Webhook=s,s.prefix=`whsec_`}))(),$n=class extends R{parseUnverified(e){return JSON.parse(e)}unwrap(e,t){let n=t?.headers;if(n==null)throw Error(`Webhook headers are required in order to verify the signature`);let r=t.key===void 0?this._client.webhookKey:t.key;if(!r)throw Error(`Webhook key must not be null or empty in order to unwrap`);return new Qn.Webhook(r).verify(e,n),JSON.parse(e)}},er=class extends R{list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(B`/v1/agents/${e}/versions?beta=true`,dn,{query:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},tr=(()=>{class e extends R{constructor(){super(...arguments),this.versions=new er(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/agents?beta=true`,{body:i,...t,headers:z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.get(B`/v1/agents/${e}?beta=true`,{query:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/agents/${e}?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/agents?beta=true`,dn,{query:i,...t,headers:z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/agents/${e}/archive?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Versions=er,e})();function nr(e,t){if(!e)return()=>{};if(e.aborted)return t.abort(),()=>{};let n=()=>t.abort();return e.addEventListener(`abort`,n),()=>e.removeEventListener(`abort`,n)}function rr(e,t){return e instanceof s&&e.status===t}function ir(e){return e instanceof s&&typeof e.status==`number`&&e.status>=400&&e.status<500}function ar(e){return ir(e)&&!rr(e,408)&&!rr(e,409)&&!rr(e,429)}function or(e,t,n){return Math.min(t*2**e,n)}function sr(e,t){return e+Math.random()*(t-e)}function cr(e){return e*(1-Math.random()*.25)}function lr(e,{authToken:t,helper:n}){if(!t)throw new o(`copyClientForHelper: expected a non-empty authToken but received ${JSON.stringify(t)}`);let r=e,i=r._options.defaultHeaders,a=r._authState?.extraHeaders,s=z([a?Object.fromEntries(Object.entries(a).filter(([e])=>{let t=e.toLowerCase();return t!==`authorization`&&t!==`x-api-key`})):void 0,i,{[Rn]:n}]);return e.withOptions({apiKey:null,authToken:t,baseURL:e.baseURL,credentials:void 0,defaultHeaders:s})}var ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr=1e3,wr=6e4,Tr=3e5,Er=(()=>{class e{constructor(e){ur.set(this,void 0),dr.set(this,!1),fr.set(this,void 0),pr.set(this,void 0),mr.set(this,void 0),hr.set(this,void 0),gr.set(this,void 0),_r.set(this,void 0),vr.set(this,void 0),this.client=e.client,this.environmentId=e.environmentId,this.environmentKey=e.environmentKey,this.workerId=e.workerId??kr(),n(this,ur,lr(e.client,{authToken:e.environmentKey,helper:`environments-work-poller`}),`f`),n(this,mr,e.autoStop??!0,`f`),n(this,hr,e.drain??!1,`f`),n(this,gr,e.blockMs===void 0?999:e.blockMs,`f`),n(this,_r,e.reclaimOlderThanMs??null,`f`),n(this,vr,e.requestOptions,`f`),n(this,fr,new AbortController,`f`),n(this,pr,nr(e.signal,r(this,fr,`f`)),`f`)}get signal(){return r(this,fr,`f`).signal}abort(){r(this,fr,`f`).abort()}async*[(ur=new WeakMap,dr=new WeakMap,fr=new WeakMap,pr=new WeakMap,mr=new WeakMap,hr=new WeakMap,gr=new WeakMap,_r=new WeakMap,vr=new WeakMap,Symbol.asyncIterator)](){if(r(this,dr,`f`))throw new o(`Cannot iterate over a consumed WorkPoller`);n(this,dr,!0,`f`);let e=ht(this.client);e.info(`poller starting`,{component:`work-poller`,environment_id:this.environmentId});let t=new Or(e,this.environmentId);try{let n=0;for(;!r(this,fr,`f`).signal.aborted;){let i;try{i=await r(this,ur,`f`).beta.environments.work.poll(this.environmentId,{"Anthropic-Worker-ID":this.workerId,...r(this,gr,`f`)===null?{}:{block_ms:r(this,gr,`f`)},...r(this,_r,`f`)===null?{}:{reclaim_older_than_ms:r(this,_r,`f`)}},{headers:z([r(this,vr,`f`)?.headers]),signal:r(this,fr,`f`).signal})}catch(t){if(r(this,fr,`f`).signal.aborted)return;if(ar(t))throw e.error(`poll failed permanently, stopping poller`,{error:String(t)}),t;let i=cr(Dr(n));e.warn(`poll failed, backing off`,{error:String(t),backoff_ms:i}),n++,await A(i,r(this,fr,`f`).signal);continue}if(n=0,i==null){if(r(this,hr,`f`))return;t.onEmptyPoll(),await A(sr(1e3,3e3),r(this,fr,`f`).signal);continue}t.onClaim(),e.info(`claimed work`,{component:`work-poller`,environment_id:this.environmentId,work_id:i.id,work_type:i.data.type});try{await r(this,ur,`f`).beta.environments.work.ack(i.id,{environment_id:i.environment_id},{headers:z([r(this,vr,`f`)?.headers]),signal:r(this,fr,`f`).signal})}catch(t){e.error(`ack failed`,{work_id:i.id,error:String(t)});continue}try{yield i}finally{if(r(this,mr,`f`))try{await r(this,ur,`f`).beta.environments.work.stop(i.id,{environment_id:i.environment_id},{headers:z([r(this,vr,`f`)?.headers])})}catch(t){rr(t,409)||e.warn(`stop failed`,{work_id:i.id,error:String(t)})}}}}finally{r(this,pr,`f`).call(this)}}}return e})();function Dr(e){return or(e,Cr,wr)}var Or=(()=>{class e{constructor(e,t){yr.set(this,void 0),br.set(this,void 0),xr.set(this,void 0),Sr.set(this,0),n(this,yr,e,`f`),n(this,br,t,`f`)}onEmptyPoll(){let e=Date.now(),t={component:`work-poller`,environment_id:r(this,br,`f`)};r(this,xr,`f`)===void 0?(n(this,xr,n(this,Sr,e,`f`),`f`),r(this,yr,`f`).info(`idle; polling for work`,t)):e-r(this,Sr,`f`)>=Tr?(n(this,Sr,e,`f`),r(this,yr,`f`).info(`still polling; idle for ${Math.round((e-r(this,xr,`f`))/1e3)}s`,t)):r(this,yr,`f`).debug(`poll returned no work`,t)}onClaim(){n(this,xr,void 0,`f`)}}return yr=new WeakMap,br=new WeakMap,xr=new WeakMap,Sr=new WeakMap,e})();function kr(){let e={}.HOSTNAME;return e?`${e}-${xt()}`:xt()}var Ar,jr,Mr,Nr=(()=>{class e{constructor(){Ar.set(this,[]),jr.set(this,[]),Mr.set(this,!1)}push(e){if(r(this,Mr,`f`))return!1;let t=r(this,jr,`f`).shift();return t?t({done:!1,value:e}):r(this,Ar,`f`).push(e),!0}close(){if(!r(this,Mr,`f`))for(n(this,Mr,!0,`f`);r(this,jr,`f`).length>0;)r(this,jr,`f`).shift()({done:!0,value:void 0})}next(e){return r(this,Ar,`f`).length>0?Promise.resolve({done:!1,value:r(this,Ar,`f`).shift()}):r(this,Mr,`f`)||e?.aborted?Promise.resolve({done:!0,value:void 0}):new Promise(t=>{let n=n=>{e?.removeEventListener(`abort`,i),t(n)},i=()=>{let e=r(this,jr,`f`).indexOf(n);e>=0&&r(this,jr,`f`).splice(e,1),t({done:!0,value:void 0})};r(this,jr,`f`).push(n),e?.addEventListener(`abort`,i,{once:!0})})}tryShift(){return r(this,Ar,`f`).shift()}}return Ar=new WeakMap,jr=new WeakMap,Mr=new WeakMap,e})(),Pr=(()=>{class e extends Error{constructor(e){let t=typeof e==`string`?e:e.map(e=>e.type===`text`?e.text:`[${e.type}]`).join(` `);super(t),this.name=`ToolError`,this.content=e}}return e})();function Fr(e){return`name`in e?e.name:`mcp_server_name`in e?e.mcp_server_name:e.type}function Ir(e){return e instanceof Pr?e.content:`Error: ${e instanceof Error?e.message:String(e)}`}async function Lr(e,t,n){try{let r=e.parse?e.parse(t):t;return{content:await e.run(r,n),isError:!1}}catch(e){return{content:Ir(e),isError:!0}}}var Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i=500,vi=1e4,yi=12e4,bi=3e4,xi=1e3,Si=3e4,Ci=3e5;function wi(e){return e.type===`session.status_idle`&&e.stop_reason?.type===`end_turn`}var Ti=(()=>{class e{constructor(e,t){Rr.set(this,void 0),zr.set(this,void 0),Br.set(this,new Set),Vr.set(this,!1),Hr.set(this,void 0),n(this,Rr,e,`f`),n(this,zr,t,`f`)}noteEvent(e){e.type!==`user.tool_confirmation`&&(wi(e)?this.arm():this.disarm())}block(e){r(this,Br,`f`).add(e),r(this,Hr,`f`)!==void 0&&(n(this,Vr,!0,`f`),clearTimeout(r(this,Hr,`f`)),n(this,Hr,void 0,`f`))}unblock(e){r(this,Br,`f`).delete(e),r(this,Br,`f`).size===0&&r(this,Vr,`f`)&&this.arm()}arm(){if(!(r(this,Rr,`f`)<=0)){if(r(this,Br,`f`).size>0){n(this,Vr,!0,`f`);return}n(this,Vr,!1,`f`),r(this,Hr,`f`)!==void 0&&clearTimeout(r(this,Hr,`f`)),n(this,Hr,setTimeout(r(this,zr,`f`),r(this,Rr,`f`)),`f`)}}disarm(){n(this,Vr,!1,`f`),r(this,Hr,`f`)!==void 0&&(clearTimeout(r(this,Hr,`f`)),n(this,Hr,void 0,`f`))}}return Rr=new WeakMap,zr=new WeakMap,Br=new WeakMap,Vr=new WeakMap,Hr=new WeakMap,e})(),Ei=(()=>{class e{constructor(e,t){Ur.add(this),Wr.set(this,!1),Gr.set(this,void 0),Kr.set(this,void 0),qr.set(this,void 0),Jr.set(this,void 0),Yr.set(this,void 0),Xr.set(this,new Set),Zr.set(this,new Set),Qr.set(this,new Map),$r.set(this,new Map),ei.set(this,new Nr),ti.set(this,0),ni.set(this,Ci),ri.set(this,null),ii.set(this,void 0),this.client=t.client,this.sessionId=e,this.tools=t.tools,this.maxIdleMs=t.maxIdleMs??6e4,n(this,Yr,ht(t.client),`f`),n(this,Jr,new Map(t.tools.map(e=>[Fr(e),e])),`f`),n(this,Gr,new AbortController,`f`),n(this,Kr,nr(t.signal,r(this,Gr,`f`)),`f`),n(this,qr,t.requestOptions,`f`),n(this,ii,new Ti(this.maxIdleMs,()=>{r(this,Yr,`f`).info(`session idle after end_turn; stopping`,{component:`session-tool-runner`,session_id:this.sessionId,max_idle_ms:this.maxIdleMs}),r(this,Gr,`f`).abort()}),`f`)}get signal(){return r(this,Gr,`f`).signal}abort(){r(this,Gr,`f`).abort()}_setSendRetryWindow(e){n(this,ni,e,`f`)}async*[(Wr=new WeakMap,Gr=new WeakMap,Kr=new WeakMap,qr=new WeakMap,Jr=new WeakMap,Yr=new WeakMap,Xr=new WeakMap,Zr=new WeakMap,Qr=new WeakMap,$r=new WeakMap,ei=new WeakMap,ti=new WeakMap,ni=new WeakMap,ri=new WeakMap,ii=new WeakMap,Ur=new WeakSet,Symbol.asyncIterator)](){if(r(this,Wr,`f`))throw new o(`Cannot iterate over a consumed SessionToolRunner`);n(this,Wr,!0,`f`),r(this,Yr,`f`).info(`session tool runner starting`,{component:`session-tool-runner`,session_id:this.sessionId});let e=r(this,Ur,`m`,oi).call(this).catch(e=>{r(this,Gr,`f`).signal.aborted||r(this,Yr,`f`).error(`stream loop failed`,{error:String(e)}),r(this,Gr,`f`).abort()});try{for(;;){let e=await r(this,ei,`f`).next(r(this,Gr,`f`).signal);if(e.done)break;yield e.value}await e;let t;for(;(t=r(this,ei,`f`).tryShift())!==void 0;)yield t}finally{r(this,Gr,`f`).abort(),r(this,ii,`f`).disarm(),await e;try{await r(this,Ur,`m`,gi).call(this)}catch(e){r(this,Yr,`f`).warn(`drain failed`,{error:String(e)})}r(this,ei,`f`).close();for(let e of this.tools)try{await e.close?.()}catch(t){r(this,Yr,`f`).warn(`tool.close failed`,{tool:Fr(e),error:String(t)})}r(this,Kr,`f`).call(this)}}}return e})();ai=function(){return{...r(this,qr,`f`),headers:z([Bn(`session-tool-runner`),r(this,qr,`f`)?.headers]),signal:r(this,Gr,`f`).signal}},oi=async function(){let e=r(this,Gr,`f`),t=_i;for(;!e.signal.aborted;){try{let e=await this.client.beta.sessions.events.stream(this.sessionId,{},r(this,Ur,`m`,ai).call(this));await r(this,Ur,`m`,si).call(this);for await(let n of e)if(t=_i,await r(this,Ur,`m`,li).call(this,n))return}catch(n){if(e.signal.throwIfAborted(),ar(n))throw r(this,Yr,`f`).error(`permanent stream failure, shutting down`,{error:String(n)}),e.abort(),n;r(this,Yr,`f`).warn(`stream disconnected, reconnecting`,{error:String(n),backoff_ms:t})}e.signal.throwIfAborted(),await A(t,e.signal),t=Math.min(t*2,vi)}},si=async function(){let e=r(this,Gr,`f`),t=[],n=!1;try{for await(let e of this.client.beta.sessions.events.list(this.sessionId,{limit:1e3},r(this,Ur,`m`,ai).call(this)))r(this,Ur,`m`,ci).call(this,e,t),n=wi(e)}catch(n){e.signal.throwIfAborted(),r(this,Yr,`f`).warn(`reconcile list failed`,{error:String(n)});for(let e of t)r(this,Xr,`f`).delete(e.id);return}let i=t.filter(e=>!r(this,Zr,`f`).has(e.id));r(this,ii,`f`).disarm();for(let e of i)await r(this,Ur,`m`,ui).call(this,e);for(let e of[...r(this,$r,`f`).values()]){let t=r(this,Qr,`f`).get(e.id);t!==void 0&&await r(this,Ur,`m`,fi).call(this,e,t)}let a=i.filter(e=>!r(this,Zr,`f`).has(e.id)&&!r(this,$r,`f`).has(e.id));n&&a.length===0?r(this,ii,`f`).arm():r(this,ii,`f`).disarm()},ci=function(e,t){e.type===`agent.tool_use`||e.type===`agent.custom_tool_use`?(r(this,Xr,`f`).add(e.id),r(this,Zr,`f`).has(e.id)||t.push(e)):e.type===`user.tool_result`?r(this,Zr,`f`).add(e.tool_use_id):e.type===`user.custom_tool_result`?r(this,Zr,`f`).add(e.custom_tool_use_id):e.type===`user.tool_confirmation`&&(r(this,Zr,`f`).has(e.tool_use_id)||r(this,Qr,`f`).set(e.tool_use_id,e.result))},li=async function(e){switch(r(this,ii,`f`).noteEvent(e),e.type){case`agent.tool_use`:case`agent.custom_tool_use`:return r(this,Xr,`f`).has(e.id)||(r(this,Xr,`f`).add(e.id),await r(this,Ur,`m`,ui).call(this,e)),!1;case`user.tool_confirmation`:return await r(this,Ur,`m`,di).call(this,e),!1;case`user.tool_result`:return r(this,Zr,`f`).add(e.tool_use_id),!1;case`user.custom_tool_result`:return r(this,Zr,`f`).add(e.custom_tool_use_id),!1;case`session.status_terminated`:case`session.deleted`:return r(this,Yr,`f`).info(`session terminated`,{component:`session-tool-runner`,session_id:this.sessionId}),r(this,Gr,`f`).abort(),!0;default:return!1}},ui=async function(e){let t=e.evaluated_permission,n=t===`deny`?`deny`:r(this,Qr,`f`).get(e.id);if(n===void 0){t===void 0||t===`allow`?await r(this,Ur,`m`,mi).call(this,e,void 0):r(this,$r,`f`).has(e.id)||(r(this,Yr,`f`).info(`tool call awaiting confirmation; holding`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),r(this,$r,`f`).set(e.id,e),r(this,ii,`f`).block(e.id));return}await r(this,Ur,`m`,fi).call(this,e,n)},di=async function(e){r(this,Qr,`f`).set(e.tool_use_id,e.result);let t=r(this,$r,`f`).get(e.tool_use_id);t!==void 0&&await r(this,Ur,`m`,fi).call(this,t,e.result)},fi=async function(e,t){let n=r(this,$r,`f`).delete(e.id);if(t===`allow`){r(this,Yr,`f`).info(`tool call confirmed`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),n||r(this,ii,`f`).block(e.id);try{await r(this,Ur,`m`,mi).call(this,e,`allow`)}finally{r(this,ii,`f`).unblock(e.id)}return}n&&r(this,ii,`f`).unblock(e.id),r(this,Zr,`f`).add(e.id),r(this,Yr,`f`).info(`tool call denied; not executing`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),r(this,Ur,`m`,pi).call(this,{event:e,toolUseId:e.id,name:e.name,isError:!1,posted:!1,confirmation:`deny`})},pi=function(e){r(this,ei,`f`).push(e)},mi=async function(e,t){var i,a;if(!r(this,Zr,`f`).has(e.id)){r(this,Yr,`f`).info(`executing tool`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),n(this,ti,(i=r(this,ti,`f`),i++,i),`f`);try{let n=r(this,Jr,`f`).get(e.name);if(!n){r(this,Yr,`f`).info(`tool not owned by this runner; leaving the tool_use_id pending for its owner`,{component:`session-tool-runner`,session_id:this.sessionId,tool:e.name,tool_use_id:e.id}),r(this,Ur,`m`,pi).call(this,{event:e,toolUseId:e.id,name:e.name,isError:!1,posted:!1,confirmation:t});return}let i,a,o=new AbortController,s=nr(r(this,Gr,`f`).signal,o),c=setTimeout(()=>o.abort(),yi);try{let t=await Lr(n,e.input,{toolUse:e,toolUseBlock:e,signal:o.signal});i=t.content,a=t.isError}finally{clearTimeout(c),s()}let l=Di(e,a,Oi(i)),u=await r(this,Ur,`m`,hi).call(this,l,e.id);r(this,Ur,`m`,pi).call(this,{event:e,result:l,toolUseId:e.id,name:e.name,isError:a,posted:u,confirmation:t})}finally{n(this,ti,(a=r(this,ti,`f`),a--,a),`f`),r(this,ti,`f`)===0&&r(this,ri,`f`)?.call(this)}}},hi=async function(e,t){let n=r(this,Gr,`f`),i=Date.now(),a,o=0;for(;;){o++,n.signal.throwIfAborted();try{return await this.client.beta.sessions.events.send(this.sessionId,{events:[e]},r(this,Ur,`m`,ai).call(this)),r(this,Zr,`f`).add(t),!0}catch(e){if(a=e,ar(e))break;let s=r(this,ni,`f`)-(Date.now()-i);if(s<=0)break;let c=Math.min(cr(or(o-1,xi,Si)),s);r(this,Yr,`f`).warn(`tool result send failed; retrying`,{tool_use_id:t,attempt:o,backoff_ms:c,error:String(e)}),await A(c,n.signal)}}return r(this,Yr,`f`).error(`failed to send tool result`,{tool_use_id:t,attempts:o,error:String(a)}),!1},gi=async function(){r(this,ti,`f`)!==0&&(await Promise.race([new Promise(e=>n(this,ri,e,`f`)),A(bi)]),n(this,ri,null,`f`),r(this,ti,`f`)>0&&r(this,Yr,`f`).warn(`drain timeout exceeded`))};function Di(e,t,n){return e.type===`agent.custom_tool_use`?{type:`user.custom_tool_result`,custom_tool_use_id:e.id,is_error:t,content:n}:{type:`user.tool_result`,tool_use_id:e.id,is_error:t,content:n}}function Oi(e){if(typeof e==`string`)return[{type:`text`,text:e||`(no output)`}];let t=e.map(e=>e.type===`text`?{type:`text`,text:e.text||`(no output)`}:e.type===`image`||e.type===`document`?e:e.type===`search_result`?{type:`search_result`,source:e.source,title:e.title,content:e.content.map(e=>({type:`text`,text:e.text})),citations:{enabled:e.citations?.enabled??!1}}:{type:`text`,text:JSON.stringify(e)});return t.length>0?t:[{type:`text`,text:`(no output)`}]}var ki=15e3,Ai=5e3;function ji(e,t){if(!(e>=5e3))throw new o(`${t} must be at least ${Ai}ms (got ${e}); to run without memory sync, pass \`memorySyncIntervalMs: null\` to the worker instead`)}var Mi,Ni,Pi,Fi,Ii,Li=3e4,Ri=9e4,zi=`NO_HEARTBEAT`;function Bi(e){return e.resources.some(e=>e.type===`memory_store`)}function Vi(e){if(!e)return null;let t;try{let n=e.replace(/-/g,`+`).replace(/_/g,`/`),r=n.padEnd(Math.ceil(n.length/4)*4,`=`);t=JSON.parse(at(ot(r)))}catch{return null}if(typeof t!=`object`||!t||Array.isArray(t))return null;let n=t.sessions_token;return typeof n==`string`&&n!==``?n:null}var Hi=(()=>{class e{constructor(e){if(Mi.add(this),Ni.set(this,void 0),e.unrestrictedPaths!==void 0)throw new o("The `unrestrictedPaths` option you passed to EnvironmentWorker (or client.beta.environments.work.worker()) is no longer supported. The worker's file tools (read, write, edit, glob, grep) are now always confined to `workdir` plus the session's memory folders. Remove `unrestrictedPaths` from your options; to let the file tools reach any other directory, add it to `AgentToolContext.allowedRoots` from a `tools` factory.");this.client=e.client,this.environmentId=e.environmentId,this.environmentKey=e.environmentKey,this.tools=e.tools,this.workdir=e.workdir??process.cwd(),this.maxFileBytes=e.maxFileBytes,this.maxIdleMs=e.maxIdleMs,e.memorySyncIntervalMs!=null&&ji(e.memorySyncIntervalMs,`memorySyncIntervalMs`),this.memorySyncIntervalMs=e.memorySyncIntervalMs,this.memorySyncDeletions=e.memorySyncDeletions??`enabled`,this.workerId=e.workerId,this.requestOptions=e.requestOptions,n(this,Ni,e.signal,`f`)}async run(e){let{environmentId:t,environmentKey:n}=this;if(t===void 0||n===void 0)throw new o(`EnvironmentWorker.run: environmentId and environmentKey are required to poll for work`);let i=e??r(this,Ni,`f`),a=new Er({client:this.client,environmentId:t,environmentKey:n,...this.workerId===void 0?{}:{workerId:this.workerId},...i?{signal:i}:{},...this.requestOptions===void 0?{}:{requestOptions:this.requestOptions},autoStop:!1});for await(let e of a)try{await r(this,Mi,`m`,Pi).call(this,e,n,a.signal)}catch(t){if(a.signal?.aborted)throw t;ht(this.client).error(`work item failed`,{work_id:e.id,error:String(t)})}}async handleItem(e){let t=e?.workId??L(`ANTHROPIC_WORK_ID`),n=e?.environmentId??L(`ANTHROPIC_ENVIRONMENT_ID`),i=e?.sessionId??L(`ANTHROPIC_SESSION_ID`),a=(e?.environmentKey??this.environmentKey??L(`ANTHROPIC_ENVIRONMENT_KEY`))||void 0,s=e?.workSecret||L(`ANTHROPIC_WORK_SECRET`)||null;if(!t)throw new o(`handleItem: workId is required — pass it or set ANTHROPIC_WORK_ID`);if(!n)throw new o(`handleItem: environmentId is required — pass it or set ANTHROPIC_ENVIRONMENT_ID`);if(!i)throw new o(`handleItem: sessionId is required — pass it or set ANTHROPIC_SESSION_ID`);if(!a&&!s)throw new o(`handleItem: environmentKey is required when there is no work secret — pass it, construct the worker with it, or set ANTHROPIC_ENVIRONMENT_KEY`);let c={id:t,environment_id:n,secret:s,data:{type:`session`,id:i}};await r(this,Mi,`m`,Pi).call(this,c,a,e?.signal??r(this,Ni,`f`))}}return Ni=new WeakMap,Mi=new WeakSet,Pi=async function(e,t,n){let r=ht(this.client),i=Vi(e.secret),a=i??t;if(a===void 0)throw new o("handleItem: the work item carried a secret payload but no sessions token could be extracted, and there is no environment key to fall back to; the poller must issue a secret whose payload carries `sessions_token`, or provide the environment key (pass it, construct the worker with it, or set ANTHROPIC_ENVIRONMENT_KEY)");e.secret&&i===null&&r.warn(`work item carried a secret payload but no sessions token could be extracted; falling back to the environment key`,{work_id:e.id});let s=lr(this.client,{authToken:a,helper:`environments-worker`}),c=e.data.id,l=new AbortController,u=nr(n,l),d=new Gi(l),f=await Le(()=>import(`./node.browser-ggH64BML.js`),[],import.meta.url),p,m,h=qi(s,e,d,r,this.requestOptions,e=>{p=e,m?._setSendRetryWindow(e)}).catch(t=>{l.signal.aborted||r.error(`heartbeat loop failed`,{work_id:e.id,error:String(t)}),l.abort()}),g=async()=>{},_,v=!1;try{if(e.data.type!==`session`){r.debug(`skipping non-session work item`,{work_id:e.id,type:e.data.type});return}let t=await s.beta.sessions.retrieve(c);if(i===null&&this.memorySyncIntervalMs!==null&&Bi(t))throw new f.SessionMemoryError(`cannot mount the session's memories: the work item carried no sessions token (work_id=${e.id}, session_id=${c}); the memory endpoints reject the environment key, so the poller must issue a per-item \`secret\` carrying \`sessions_token\`, or set \`memorySyncIntervalMs: null\` to run without memory`);let n={workdir:this.workdir,client:s,session:t,...this.maxFileBytes===void 0?{}:{maxFileBytes:this.maxFileBytes}};try{g=await f.setupSkills(n)}catch(t){r.warn(`skill setup failed`,{session_id:c,work_id:e.id,error:String(t)})}i!==null&&this.memorySyncIntervalMs!==null?(_=new f.SessionMemoryStores(s,{workdir:this.workdir,...this.memorySyncIntervalMs===void 0?{}:{syncIntervalMs:this.memorySyncIntervalMs},syncDeletions:this.memorySyncDeletions}),await _.download(t),n.allowedRoots=_.roots,n.readOnlyRoots=_.readOnlyRoots):r.debug(`memory stores disabled for this item`,{work_id:e.id}),m=new Ei(c,{client:s,tools:typeof this.tools==`function`?this.tools(n):this.tools??f.betaAgentToolset20260401(n),...this.maxIdleMs===void 0?{}:{maxIdleMs:this.maxIdleMs},...this.requestOptions===void 0?{}:{requestOptions:this.requestOptions},signal:l.signal}),p!==void 0&&m._setSendRetryWindow(p);for await(let e of m)_&&await _.syncIfDue();v=!l.signal.aborted}finally{try{await g().catch(t=>{r.warn(`skill cleanup failed`,{session_id:c,work_id:e.id,error:String(t)})})}finally{if(_){let t=f.MEMORY_FLUSH_TIMEOUT_MS;v&&await Ui(_.finish(),t)&&r.warn(`final memory sync cut off after ${t}ms; the flush that follows still uploads changed files`,{session_id:c,work_id:e.id});let n=new AbortController;await Ui(_.flushWrites(n.signal),t)&&(n.abort(),r.warn(`memory flush cut off after ${t}ms; changed files it had not uploaded yet are not saved`,{session_id:c,work_id:e.id})),await _.dispose().catch(t=>{r.warn(`memory store cleanup failed`,{session_id:c,work_id:e.id,error:String(t)})})}}d.finish(`runner_done`),u(),await h,d.lost?r.info(`lease lost; released without stopping it`,{session_id:c,work_id:e.id}):await Wi(s,e,r,this.requestOptions)}},e})();async function Ui(e,t){let n;try{return await Promise.race([e.then(()=>!1,()=>!1),new Promise(e=>{n=setTimeout(()=>e(!0),t)})])}finally{n!==void 0&&clearTimeout(n)}}async function Wi(e,t,n,r){try{await e.beta.environments.work.stop(t.id,{environment_id:t.environment_id,force:!0},{...r,headers:z([r?.headers])})}catch(e){rr(e,409)||n.error(`force-stop on exit failed`,{work_id:t.id,error:String(e)})}}var Gi=(()=>{class e{constructor(e){Fi.set(this,void 0),Ii.set(this,void 0),n(this,Fi,e,`f`)}get signal(){return r(this,Fi,`f`).signal}finish(e){n(this,Ii,r(this,Ii,`f`)??e,`f`),r(this,Fi,`f`).abort()}get lost(){return r(this,Ii,`f`)===`lease_lost`||r(this,Ii,`f`)===`assumed_lost`}}return Fi=new WeakMap,Ii=new WeakMap,e})();function Ki(e){let t=e instanceof s?e.error:void 0;for(let e of[`error`,`details`,`current_state`]){if(!D(t))return{};t=t[e]}return D(t)?t:{}}async function qi(e,t,n,r,i,a){let o=Li,s=Ri,c=Date.now(),l=zi,u=async()=>{let u=new AbortController,d=nr(n.signal,u),f=setTimeout(()=>u.abort(),o);try{let d=await e.beta.environments.work.heartbeat(t.id,{environment_id:t.environment_id,expected_last_heartbeat:l},{...i,headers:z([i?.headers]),signal:u.signal});c=Date.now(),l=d.last_heartbeat,d.ttl_seconds>0&&(s=d.ttl_seconds*1e3,o=Math.max(1e3,Math.min(s/2,Li)),a?.(s)),(d.state===`stopping`||d.state===`stopped`)&&(r.info(`heartbeat signals shutdown`,{work_id:t.id,state:d.state}),n.finish(`control_plane_stop`)),d.lease_extended||(r.warn(`lease not extended, shutting down`,{work_id:t.id}),n.finish(`control_plane_stop`))}catch(e){if(n.signal.throwIfAborted(),rr(e,412)){let i=Ki(e);r.error(`lease lost: heartbeat precondition failed`,{work_id:t.id,server_state:i.state,server_ttl_seconds:i.ttl_seconds,server_last_heartbeat:i.last_heartbeat}),n.finish(`lease_lost`);return}if(ar(e))throw r.error(`permanent heartbeat failure`,{work_id:t.id,error:String(e)}),n.finish(`heartbeat_rejected`),e;if(Date.now()-c>s){r.error(`lease assumed lost: no successful heartbeat in ttl`,{work_id:t.id,ttl_ms:s,error:String(e)}),n.finish(`assumed_lost`);return}r.warn(`transient heartbeat failure`,{work_id:t.id,error:String(e)})}finally{clearTimeout(f),d()}};for(await u();!n.signal.aborted;)await A(o,n.signal),n.signal.throwIfAborted(),await u()}var Ji=(()=>{class e extends R{retrieve(e,t,n){let{environment_id:r,betas:i,workspace_id:a}=t;return this._client.get(B`/v1/environments/${r}/work/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{environment_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(B`/v1/environments/${r}/work/${e}?beta=true`,{body:o,...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(B`/v1/environments/${e}/work?beta=true`,dn,{query:i,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}ack(e,t,n){let{environment_id:r,betas:i}=t;return this._client.post(B`/v1/environments/${r}/work/${e}/ack?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}heartbeat(e,t,n){let{environment_id:r,desired_ttl_seconds:i,expected_last_heartbeat:a,betas:o}=t;return this._client.post(B`/v1/environments/${r}/work/${e}/heartbeat?beta=true`,{query:{desired_ttl_seconds:i,expected_last_heartbeat:a},...n,headers:z([{"anthropic-beta":[...o??[],`managed-agents-2026-04-01`].toString()},n?.headers])})}poll(e,t={},n){let{betas:r,"Anthropic-Worker-ID":i,...a}=t??{};return this._client.get(B`/v1/environments/${e}/work/poll?beta=true`,{query:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"Anthropic-Worker-ID":i}},n?.headers])})}stats(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/environments/${e}/work/stats?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}stop(e,t,n){let{environment_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(B`/v1/environments/${r}/work/${e}/stop?beta=true`,{body:o,...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}poller(e){return new Er({...e,client:this._client})}worker(e){return new Hi({...e,client:this._client})}}return e.WorkPoller=Er,e.EnvironmentWorker=Hi,e})(),Yi=(()=>{class e extends R{constructor(){super(...arguments),this.work=new Ji(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/environments?beta=true`,{body:i,...t,headers:z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/environments/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/environments/${e}?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/environments?beta=true`,dn,{query:i,...t,headers:z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(B`/v1/environments/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/environments/${e}/archive?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Work=Ji,e})(),Xi=class extends R{create(e,t,n){let{view:r,betas:i,workspace_id:a,...o}=t;return this._client.post(B`/v1/memory_stores/${e}/memories?beta=true`,{query:{view:r},body:o,...n,headers:z([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}retrieve(e,t,n){let{memory_store_id:r,betas:i,workspace_id:a,...o}=t;return this._client.get(B`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:o,...n,headers:z([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{memory_store_id:r,view:i,betas:a,workspace_id:o,...s}=t;return this._client.post(B`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:{view:i},body:s,...n,headers:z([{"anthropic-beta":[...a??[],`agent-memory-2026-07-22`].toString(),...o==null?void 0:{"anthropic-workspace-id":o}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(B`/v1/memory_stores/${e}/memories?beta=true`,dn,{query:a,...n,headers:z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{memory_store_id:r,expected_content_sha256:i,betas:a,workspace_id:o}=t;return this._client.delete(B`/v1/memory_stores/${r}/memories/${e}?beta=true`,{query:{expected_content_sha256:i},...n,headers:z([{"anthropic-beta":[...a??[],`agent-memory-2026-07-22`].toString(),...o==null?void 0:{"anthropic-workspace-id":o}},n?.headers])})}},Zi=class extends R{retrieve(e,t,n){let{memory_store_id:r,betas:i,workspace_id:a,...o}=t;return this._client.get(B`/v1/memory_stores/${r}/memory_versions/${e}?beta=true`,{query:o,...n,headers:z([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(B`/v1/memory_stores/${e}/memory_versions?beta=true`,dn,{query:a,...n,headers:z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}redact(e,t,n){let{memory_store_id:r,betas:i,workspace_id:a}=t;return this._client.post(B`/v1/memory_stores/${r}/memory_versions/${e}/redact?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`agent-memory-2026-07-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}},Qi=(()=>{class e extends R{constructor(){super(...arguments),this.memories=new Xi(this._client),this.memoryVersions=new Zi(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/memory_stores?beta=true`,{body:i,...t,headers:z([{"anthropic-beta":[...n??[],`agent-memory-2026-07-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/memory_stores/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/memory_stores/${e}?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/memory_stores?beta=true`,dn,{query:i,...t,headers:z([{"anthropic-beta":[...n??[],`agent-memory-2026-07-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(B`/v1/memory_stores/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/memory_stores/${e}/archive?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`agent-memory-2026-07-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Memories=Xi,e.MemoryVersions=Zi,e})(),$i=(()=>{class e{constructor(e,t){this.iterator=e,this.controller=t}async*decoder(){let e=new Bt;for await(let t of this.iterator)for(let n of e.decode(t))yield JSON.parse(n);for(let t of e.flush())yield JSON.parse(t)}[Symbol.asyncIterator](){return this.decoder()}static fromResponse(t,n){if(!t.body)throw n.abort(),globalThis.navigator!==void 0&&globalThis.navigator.product===`ReactNative`?new o(`The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api`):new o(`Attempted to iterate over a response with no body`);return new e(ge(t.body),n)}}return e})(),ea=class extends R{create(e,t){let{betas:n,user_profile_id:r,workspace_id:i,...a}=e;return this._client.post(`/v1/messages/batches?beta=true`,{body:a,...t,headers:z([{"anthropic-beta":[...n??[],`message-batches-2024-09-24`].toString(),...r==null?void 0:{"anthropic-user-profile-id":r},...i==null?void 0:{"anthropic-workspace-id":i}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/messages/batches/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/messages/batches?beta=true`,un,{query:i,...t,headers:z([{"anthropic-beta":[...n??[],`message-batches-2024-09-24`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(B`/v1/messages/batches/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}cancel(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/messages/batches/${e}/cancel?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`message-batches-2024-09-24`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}async results(e,t={},n){let r=await this.retrieve(e,t,n);if(!r.results_url)throw new o(`No batch \`results_url\`; Has it finished processing? ${r.processing_status} - ${r.id}`);let{betas:i,workspace_id:a}=t??{};return this._client.get(r.results_url,{...n,headers:z([{"anthropic-beta":[...i??[],`message-batches-2024-09-24`].toString(),Accept:`application/binary`,...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((e,t)=>$i.fromResponse(t.response,t.controller))}},ta={"claude-opus-4@20250514":8192,"anthropic.claude-opus-4-1-20250805-v1:0":8192,"claude-opus-4-1@20250805":8192};function na(e){return e?.output_format??e?.output_config?.format}function ra(e,t,n){let r=na(t);return!t||!(`parse`in(r??{}))?{...e,content:e.content.map(e=>{if(e.type===`text`){let t=Object.defineProperty({...e},"parsed_output",{value:null,enumerable:!1});return Object.defineProperty(t,"parsed",{get(){return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."),null},enumerable:!1})}return e}),parsed_output:null}:ia(e,t,n)}function ia(e,t,n){let r=null,i=e.content.map(e=>{if(e.type===`text`){let i=aa(t,e.text);r===null&&(r=i);let a=Object.defineProperty({...e},"parsed_output",{value:i,enumerable:!1});return Object.defineProperty(a,"parsed",{get(){return n.logger.warn("The `parsed` property on `text` blocks is deprecated, please use `parsed_output` instead."),i},enumerable:!1})}return e});return{...e,content:i,parsed_output:r}}function aa(e,t){let n=na(e);if(n?.type!==`json_schema`)return null;try{return`parse`in n?n.parse(t):JSON.parse(t)}catch(e){throw new o(`Failed to parse structured output: ${e}`)}}var oa=e=>{let t=0,n=[];for(;t<e.length;){let r=e[t];if(r===`\\`){t++;continue}if(r===`{`){n.push({type:`brace`,value:`{`}),t++;continue}if(r===`}`){n.push({type:`brace`,value:`}`}),t++;continue}if(r===`[`){n.push({type:`paren`,value:`[`}),t++;continue}if(r===`]`){n.push({type:`paren`,value:`]`}),t++;continue}if(r===`:`){n.push({type:`separator`,value:`:`}),t++;continue}if(r===`,`){n.push({type:`delimiter`,value:`,`}),t++;continue}if(r===`"`){let i=``,a=!1;for(r=e[++t];r!==`"`;){if(t===e.length){a=!0;break}if(r===`\\`){if(t++,t===e.length){a=!0;break}i+=r+e[t],r=e[++t]}else i+=r,r=e[++t]}r=e[++t],a||n.push({type:`string`,value:i});continue}if(r&&/\s/.test(r)){t++;continue}let i=/[0-9]/;if(r&&i.test(r)||r===`-`||r===`.`){let a=``;for(r===`-`&&(a+=r,r=e[++t]);r&&(i.test(r)||r===`.`||r===`e`||r===`E`||(r===`-`||r===`+`)&&(a[a.length-1]===`e`||a[a.length-1]===`E`));)a+=r,r=e[++t];n.push({type:`number`,value:a});continue}let a=/[a-z]/i;if(r&&a.test(r)){let i=``;for(;r&&a.test(r)&&t!==e.length;)i+=r,r=e[++t];if(i==`true`||i==`false`||i===`null`)n.push({type:`name`,value:i});else{t++;continue}continue}t++}return n},sa=e=>{if(e.length===0)return e;let t=e[e.length-1];switch(t.type){case`separator`:return e=e.slice(0,e.length-1),sa(e);case`number`:let n=t.value[t.value.length-1];if(n===`.`||n===`-`||n===`+`||n===`e`||n===`E`)return e=e.slice(0,e.length-1),sa(e);case`string`:let r=e[e.length-2];if(r?.type===`delimiter`||r?.type===`brace`&&r.value===`{`)return e=e.slice(0,e.length-1),sa(e);break;case`delimiter`:return e=e.slice(0,e.length-1),sa(e)}return e},ca=e=>{let t=[];return e.map(e=>{e.type===`brace`&&(e.value===`{`?t.push(`}`):t.splice(t.lastIndexOf(`}`),1)),e.type===`paren`&&(e.value===`[`?t.push(`]`):t.splice(t.lastIndexOf(`]`),1))}),t.length>0&&t.reverse().map(t=>{t===`}`?e.push({type:`brace`,value:`}`}):t===`]`&&e.push({type:`paren`,value:`]`})}),e},la=e=>{let t=``;return e.map(e=>{switch(e.type){case`string`:t+=`"`+e.value+`"`;break;default:t+=e.value}}),t},ua=e=>JSON.parse(la(ca(sa(oa(e))))),da=`__json_buf`;function fa(e,t){let n={};for(let t of Object.keys(e))t!==`input`&&(n[t]=e[t]);Object.defineProperty(n,da,{value:t,enumerable:!1,writable:!0});let r,i=!1;return Object.defineProperty(n,"input",{enumerable:!0,configurable:!0,get(){return i||=(r=t?ua(t):{},!0),r}}),n}var pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra;function za(e){return e.type===`tool_use`||e.type===`server_tool_use`||e.type===`mcp_tool_use`}var Ba=(()=>{class e{constructor(e,t){pa.add(this),this.messages=[],this.receivedMessages=[],ma.set(this,void 0),ha.set(this,null),this.controller=new AbortController,ga.set(this,void 0),_a.set(this,()=>{}),va.set(this,()=>{}),ya.set(this,void 0),ba.set(this,()=>{}),xa.set(this,()=>{}),Sa.set(this,{}),Ca.set(this,!1),wa.set(this,!1),Ta.set(this,!1),Ea.set(this,!1),Da.set(this,void 0),Oa.set(this,void 0),ka.set(this,void 0),Aa.set(this,void 0),Na.set(this,e=>{if(n(this,wa,!0,`f`),i(e)&&(e=new c),e instanceof c)return n(this,Ta,!0,`f`),this._emit(`abort`,e);if(e instanceof o)return this._emit(`error`,e);if(e instanceof Error){let t=new o(e.message);return t.cause=e,this._emit(`error`,t)}return this._emit(`error`,new o(String(e)))}),n(this,ga,new Promise((e,t)=>{n(this,_a,e,`f`),n(this,va,t,`f`)}),`f`),n(this,ya,new Promise((e,t)=>{n(this,ba,e,`f`),n(this,xa,t,`f`)}),`f`),r(this,ga,`f`).catch(()=>{}),r(this,ya,`f`).catch(()=>{}),n(this,ha,e,`f`),n(this,Aa,t?.logger??console,`f`)}get response(){return r(this,Da,`f`)}get request_id(){return r(this,Oa,`f`)}get workspace_id(){return r(this,ka,`f`)}async withResponse(){n(this,Ea,!0,`f`);let e=await r(this,ga,`f`);if(!e)throw Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get(`request-id`),workspace_id:e.headers.get(`anthropic-workspace-id`)}}static fromReadableStream(t){let n=new e(null);return n._run(()=>n._fromReadableStream(t)),n}static createMessage(t,r,i,{logger:a}={}){let o=new e(r,{logger:a});for(let e of r.messages)o._addMessageParam(e);return n(o,ha,{...r,stream:!0},`f`),o._run(()=>o._createMessage(t,{...r,stream:!0},{...i,headers:{...i?.headers,[zn]:`stream`}})),o}_run(e){e().then(()=>{this._emitFinal(),this._emit(`end`)},r(this,Na,`f`))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit(`message`,e)}async _createMessage(e,t,n){let i=n?.signal,a;i&&(i.aborted&&this.controller.abort(),a=this.controller.abort.bind(this.controller),i.addEventListener(`abort`,a));try{r(this,pa,`m`,Pa).call(this);let{response:i,data:a}=await e.create({...t,stream:!0},{...n,signal:this.controller.signal}).withResponse();this._connected(i);for await(let e of a)r(this,pa,`m`,Fa).call(this,e);if(a.controller.signal?.aborted)throw new c;r(this,pa,`m`,Ia).call(this)}finally{i&&a&&i.removeEventListener(`abort`,a)}}_connected(e){this.ended||(n(this,Da,e,`f`),n(this,Oa,e?.headers.get(`request-id`),`f`),n(this,ka,e?.headers.get(`anthropic-workspace-id`),`f`),r(this,_a,`f`).call(this,e),this._emit(`connect`))}get ended(){return r(this,Ca,`f`)}get errored(){return r(this,wa,`f`)}get aborted(){return r(this,Ta,`f`)}abort(){this.controller.abort()}on(e,t){return(r(this,Sa,`f`)[e]||(r(this,Sa,`f`)[e]=[])).push({listener:t}),this}off(e,t){let n=r(this,Sa,`f`)[e];if(!n)return this;let i=n.findIndex(e=>e.listener===t);return i>=0&&n.splice(i,1),this}once(e,t){return(r(this,Sa,`f`)[e]||(r(this,Sa,`f`)[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,r)=>{n(this,Ea,!0,`f`),e!==`error`&&this.once(`error`,r),this.once(e,t)})}async done(){n(this,Ea,!0,`f`),await r(this,ya,`f`)}get currentMessage(){return r(this,ma,`f`)}async finalMessage(){return await this.done(),r(this,pa,`m`,ja).call(this)}async finalText(){return await this.done(),r(this,pa,`m`,Ma).call(this)}_emit(e,...t){if(r(this,Ca,`f`))return;e===`end`&&(n(this,Ca,!0,`f`),r(this,ba,`f`).call(this));let i=r(this,Sa,`f`)[e];if(i&&(r(this,Sa,`f`)[e]=i.filter(e=>!e.once),i.forEach(({listener:e})=>e(...t))),e===`abort`){let e=t[0];!r(this,Ea,`f`)&&!i?.length&&Promise.reject(e),r(this,va,`f`).call(this,e),r(this,xa,`f`).call(this,e),this._emit(`end`);return}if(e===`error`){let e=t[0];!r(this,Ea,`f`)&&!i?.length&&Promise.reject(e),r(this,va,`f`).call(this,e),r(this,xa,`f`).call(this,e),this._emit(`end`)}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit(`finalMessage`,r(this,pa,`m`,ja).call(this))}async _fromReadableStream(e,t){let n=t?.signal,i;n&&(n.aborted&&this.controller.abort(),i=this.controller.abort.bind(this.controller),n.addEventListener(`abort`,i));try{r(this,pa,`m`,Pa).call(this),this._connected(null);let t=Wt.fromReadableStream(e,this.controller);for await(let e of t)r(this,pa,`m`,Fa).call(this,e);if(t.controller.signal?.aborted)throw new c;r(this,pa,`m`,Ia).call(this)}finally{n&&i&&n.removeEventListener(`abort`,i)}}[(ma=new WeakMap,ha=new WeakMap,ga=new WeakMap,_a=new WeakMap,va=new WeakMap,ya=new WeakMap,ba=new WeakMap,xa=new WeakMap,Sa=new WeakMap,Ca=new WeakMap,wa=new WeakMap,Ta=new WeakMap,Ea=new WeakMap,Da=new WeakMap,Oa=new WeakMap,ka=new WeakMap,Aa=new WeakMap,Na=new WeakMap,pa=new WeakSet,ja=function(){if(this.receivedMessages.length===0)throw new o(`stream ended without producing a Message with role=assistant`);return this.receivedMessages.at(-1)},Ma=function(){if(this.receivedMessages.length===0)throw new o(`stream ended without producing a Message with role=assistant`);let e=this.receivedMessages.at(-1).content.filter(e=>e.type===`text`).map(e=>e.text);if(e.length===0)throw new o(`stream ended without producing a content block with type=text`);return e.join(` `)},Pa=function(){this.ended||n(this,ma,void 0,`f`)},Fa=function(e){if(this.ended)return;let t=r(this,pa,`m`,La).call(this,e);switch(this._emit(`streamEvent`,e,t),e.type){case`content_block_delta`:{let n=t.content.at(-1);switch(e.delta.type){case`text_delta`:n.type===`text`&&this._emit(`text`,e.delta.text,n.text||``);break;case`citations_delta`:n.type===`text`&&this._emit(`citation`,e.delta.citation,n.citations??[]);break;case`input_json_delta`:if(za(n)&&r(this,Sa,`f`).inputJson?.length){let t;try{t=n.input}catch(e){r(this,Na,`f`).call(this,r(this,pa,`m`,Ra).call(this,n,e));break}this._emit(`inputJson`,e.delta.partial_json,t)}break;case`thinking_delta`:n.type===`thinking`&&this._emit(`thinking`,e.delta.thinking,n.thinking);break;case`signature_delta`:n.type===`thinking`&&this._emit(`signature`,n.signature);break;case`compaction_delta`:n.type===`compaction`&&n.content&&this._emit(`compaction`,n.content);break;default:e.delta}break}case`message_stop`:this._addMessageParam(t),this._addMessage(ra(t,r(this,ha,`f`),{logger:r(this,Aa,`f`)}),!0);break;case`content_block_stop`:this._emit(`contentBlock`,t.content.at(-1));break;case`message_start`:n(this,ma,t,`f`)}},Ia=function(){if(this.ended)throw new o(`stream has ended, this shouldn't happen`);let e=r(this,ma,`f`);if(!e)throw new o(`request ended without sending any chunks`);return n(this,ma,void 0,`f`),ra(e,r(this,ha,`f`),{logger:r(this,Aa,`f`)})},La=function(e){let t=r(this,ma,`f`);if(e.type===`message_start`){if(t)throw new o(`Unexpected event order, got ${e.type} before receiving "message_stop"`);return e.message}if(!t)throw new o(`Unexpected event order, got ${e.type} before "message_start"`);switch(e.type){case`message_stop`:return t;case`message_delta`:return t.stop_reason=e.delta.stop_reason,t.stop_sequence=e.delta.stop_sequence,t.stop_details=e.delta.stop_details,t.usage.output_tokens=e.usage.output_tokens,e.delta.container!=null&&(t.container=e.delta.container),e.context_management!=null&&(t.context_management=e.context_management),e.input_transformations!=null&&(t.input_transformations=e.input_transformations),e.usage.input_tokens!=null&&(t.usage.input_tokens=e.usage.input_tokens),e.usage.cache_creation_input_tokens!=null&&(t.usage.cache_creation_input_tokens=e.usage.cache_creation_input_tokens),e.usage.cache_read_input_tokens!=null&&(t.usage.cache_read_input_tokens=e.usage.cache_read_input_tokens),e.usage.server_tool_use!=null&&(t.usage.server_tool_use=e.usage.server_tool_use),e.usage.iterations!=null&&(t.usage.iterations=e.usage.iterations),e.usage.fallback_credit!=null&&(t.usage.fallback_credit=e.usage.fallback_credit),e.usage.output_tokens_details!=null&&(t.usage.output_tokens_details=e.usage.output_tokens_details),t;case`content_block_start`:return t.content.push(e.content_block),e.content_block.type===`fallback`&&(t.model=e.content_block.to.model),t;case`content_block_delta`:{let n=t.content.at(e.index);switch(e.delta.type){case`text_delta`:n?.type===`text`&&(t.content[e.index]={...n,text:(n.text||``)+e.delta.text});break;case`citations_delta`:n?.type===`text`&&(t.content[e.index]={...n,citations:[...n.citations??[],e.delta.citation]});break;case`input_json_delta`:if(n&&za(n)){let r=(n.__json_buf||``)+e.delta.partial_json;t.content[e.index]=fa(n,r)}break;case`thinking_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,thinking:n.thinking+e.delta.thinking});break;case`signature_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,signature:e.delta.signature});break;case`compaction_delta`:if(n?.type===`compaction`){let r={...n,content:e.delta.content};`encrypted_content`in e.delta&&(r.encrypted_content=e.delta.encrypted_content),t.content[e.index]=r}break;default:e.delta}return t}case`content_block_stop`:{let n=t.content.at(e.index);if(n&&za(n)&&`__json_buf`in n){let e;try{e=n.input}catch(t){e={},r(this,Na,`f`).call(this,r(this,pa,`m`,Ra).call(this,n,t))}Object.defineProperty(n,"input",{value:e,enumerable:!0,configurable:!0,writable:!0})}return t}}},Ra=function(e,t){let n=e[da];return new o(`Unable to parse tool parameter JSON from model. Please retry your request or adjust your prompt. Error: ${t}. JSON: ${n}`)},Symbol.asyncIterator)](){let e=[],t=[],n=!1;return this.on(`streamEvent`,n=>{let r=t.shift();r?r.resolve(n):e.push(n)}),this.on(`end`,()=>{n=!0;for(let e of t)e.resolve(void 0);t.length=0}),this.on(`abort`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),this.on(`error`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:n?{value:void 0,done:!0}:new Promise((e,n)=>t.push({resolve:e,reject:n})).then(e=>e?{value:e,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Wt(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}}return e})();function Va(){let e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var Ha=`You have been working on the task described above but have not yet completed it. Write a continuation summary that will allow you (or another instance of yourself) to resume work efficiently in a future context window where the conversation history will be replaced with this summary. Your summary should be structured, concise, and actionable. Include:
1. Task Overview
The user's core request and success criteria
Any clarifications or constraints they specified
2. Current State
What has been completed so far
Files created, modified, or analyzed (with paths if relevant)
Key outputs or artifacts produced
3. Important Discoveries
Technical constraints or requirements uncovered
Decisions made and their rationale
Errors encountered and how they were resolved
What approaches were tried that didn't work (and why)
4. Next Steps
Specific actions needed to complete the task
Any blockers or open questions to resolve
Priority order if multiple steps remain
5. Context to Preserve
User preferences or style requirements
Domain-specific details that aren't obvious
Any promises made to the user
Be concise but complete—err on the side of including information that would prevent duplicate work or repeated mistakes. Write in a way that enables immediate resumption of the task.
Wrap your summary in <summary></summary> tags.`,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo=(()=>{class e{constructor(e,t,r){Ua.add(this),this.client=e,Wa.set(this,!1),Ga.set(this,!1),Ka.set(this,void 0),qa.set(this,void 0),Ja.set(this,void 0),Ya.set(this,void 0),Xa.set(this,void 0),Za.set(this,void 0),Qa.set(this,0),$a.set(this,{status:`idle`}),eo.set(this,null),to.set(this,new Map),no.set(this,[]),ho(t),n(this,Ka,{params:{...t,messages:JSON.parse(JSON.stringify(t.messages))}},`f`);let i=Un(t.tools,t.messages);n(this,qa,{...r,headers:z([Bn(`BetaToolRunner`),i.length?{[Rn]:i.join(`, `)}:void 0,r?.headers])},`f`),n(this,Za,Va(),`f`),t.compactionControl?.enabled&&console.warn('Anthropic: The `compactionControl` parameter is deprecated and will be removed in a future version. Use server-side compaction instead by passing `edits: [{ type: "compact_20260112" }]` in the params passed to `toolRunner()`. See https://platform.claude.com/docs/en/build-with-claude/compaction')}async*[(Wa=new WeakMap,Ga=new WeakMap,Ka=new WeakMap,qa=new WeakMap,Ja=new WeakMap,Ya=new WeakMap,Xa=new WeakMap,Za=new WeakMap,Qa=new WeakMap,$a=new WeakMap,eo=new WeakMap,to=new WeakMap,no=new WeakMap,Ua=new WeakSet,ro=async function(){let e=r(this,Ka,`f`).params.compactionControl;if(!e||!e.enabled)return!1;let t=0;if(r(this,Ja,`f`)!==void 0)try{let e=await r(this,Ja,`f`);t=e.usage.input_tokens+(e.usage.cache_creation_input_tokens??0)+(e.usage.cache_read_input_tokens??0)+e.usage.output_tokens}catch{return!1}let i=e.contextTokenThreshold??1e5;if(t<i)return!1;let a=e.model??r(this,Ka,`f`).params.model,s=e.summaryPrompt??Ha,c=r(this,Ka,`f`).params.messages;if(c[c.length-1].role===`assistant`){let e=c[c.length-1];if(Array.isArray(e.content)){let t=e.content.filter(e=>e.type!==`tool_use`);t.length===0?c.pop():e.content=t}}let l=await this.client.beta.messages.create({model:a,messages:[...c,{role:`user`,content:[{type:`text`,text:s}]}],max_tokens:r(this,Ka,`f`).params.max_tokens},{signal:r(this,qa,`f`).signal,headers:z([r(this,qa,`f`).headers,Bn(`compaction`)])});if(l.content[0]?.type!==`text`)throw new o(`Expected text response for compaction`);return r(this,Ua,`m`,co).call(this),n(this,eo,null,`f`),r(this,Ka,`f`).params.messages=[{role:`user`,content:yo(l.content)}],!0},Symbol.asyncIterator)](){var e;if(r(this,Wa,`f`))throw new o(`Cannot iterate over a consumed stream`);n(this,Wa,!0,`f`),n(this,Ga,!0,`f`),n(this,Xa,void 0,`f`);try{for(;;)try{if(r(this,Ka,`f`).params.max_iterations&&r(this,Qa,`f`)>=r(this,Ka,`f`).params.max_iterations)break;if(r(this,Ua,`m`,fo).call(this),r(this,$a,`f`).status===`scheduled`&&wo(r(this,eo,`f`))!==`resume`){yield*r(this,Ua,`m`,ao).call(this,r(this,$a,`f`).config);continue}n(this,Ga,!1,`f`),n(this,Xa,void 0,`f`),n(this,Qa,(e=r(this,Qa,`f`),e++,e),`f`),n(this,Ja,void 0,`f`);let{max_iterations:t,compactionControl:i,...a}=r(this,Ka,`f`).params;if(yield*r(this,Ua,`m`,io).call(this,a),!await r(this,Ua,`m`,ro).call(this)){if(r(this,Ga,`f`))n(this,eo,null,`f`);else{let e=await r(this,Ja,`f`),t=wo(e.stop_reason);n(this,eo,e.stop_reason,`f`),r(this,Ka,`f`).params.messages.push({role:e.role,content:yo(e.content)});let{container:i}=r(this,Ka,`f`).params;if(e.container&&(i==null?r(this,Ka,`f`).params.container=e.container.id:typeof i==`object`&&i.id==null&&(r(this,Ka,`f`).params.container={...i,id:e.container.id})),t===`stop`){yield*r(this,Ua,`m`,lo).call(this);break}if(t===`resume`)continue}let e=await r(this,Ua,`m`,uo).call(this,r(this,Ka,`f`).params.messages.at(-1));if(e)r(this,Ka,`f`).params.messages.push(e);else if(!r(this,Ga,`f`)){yield*r(this,Ua,`m`,lo).call(this);break}}}finally{r(this,Ya,`f`)?.abort(),n(this,Ya,void 0,`f`)}if(!r(this,Ja,`f`))throw new o(`ToolRunner concluded without a message from the server`);r(this,Za,`f`).resolve(await r(this,Ja,`f`))}catch(e){throw n(this,Wa,!1,`f`),r(this,Za,`f`).promise.catch(()=>{}),r(this,Za,`f`).reject(e),n(this,Za,Va(),`f`),e}}setMessagesParams(e){let t=typeof e==`function`?e(r(this,Ka,`f`).params):e;if(ho(t),r(this,$a,`f`).status!==`idle`&&go(t),r(this,$a,`f`).status===`in_flight`&&t.messages!==r(this,Ka,`f`).params.messages)throw new o(`Message params can't be changed while the conversation is being compacted, because the compaction response is about to replace them. Change them after this iteration instead.`);r(this,Ka,`f`).params=t,n(this,Ga,!0,`f`),n(this,Xa,void 0,`f`)}setRequestOptions(e){typeof e==`function`?n(this,qa,e(r(this,qa,`f`)),`f`):n(this,qa,{...r(this,qa,`f`),...e},`f`)}async generateToolResponse(e=r(this,qa,`f`).signal){let t=await r(this,Ja,`f`)??this.params.messages.at(-1);return t?r(this,Ua,`m`,uo).call(this,t,e):null}done(){return r(this,Za,`f`).promise}async runUntilDone(){if(!r(this,Wa,`f`))for await(let e of this);return this.done()}get params(){return r(this,Ka,`f`).params}pushMessages(...e){this.setMessagesParams(t=>({...t,messages:[...t.messages,...e]}))}compactBeforeNextTurn(e){r(this,$a,`f`).status!==`in_flight`&&(go(r(this,Ka,`f`).params),n(this,$a,{status:`scheduled`,config:e??{type:`summarize`}},`f`))}addTools(...e){for(let t of e)`name`in t&&r(this,to,`f`).set(t.name,`run`in t?t:null),r(this,no,`f`).push({type:`addition`,tool:t})}removeTools(...e){for(let t of e){let e=typeof t==`string`?t:t.name;r(this,to,`f`).set(e,null),r(this,no,`f`).push({type:`removal`,name:e})}}then(e,t){return this.runUntilDone().then(e,t)}}return io=async function*(e){e.stream?(n(this,Ya,this.client.beta.messages.stream({...e},r(this,qa,`f`)),`f`),n(this,Ja,r(this,Ya,`f`).finalMessage(),`f`),r(this,Ja,`f`).catch(()=>{}),yield r(this,Ya,`f`)):(n(this,Ja,this.client.beta.messages.create({...e,stream:!1},r(this,qa,`f`)),`f`),yield r(this,Ja,`f`))},ao=async function*(e){go(r(this,Ka,`f`).params);let{max_iterations:t,compactionControl:i,...a}=r(this,Ka,`f`).params,o=_o(a);n(this,$a,{status:`in_flight`},`f`),n(this,Xa,void 0,`f`);let s=r(this,Ja,`f`);try{yield*r(this,Ua,`m`,io).call(this,{...o,compaction:e});let t=await r(this,Ja,`f`);t.content.some(e=>e.type===`compaction`&&e.content)?(r(this,Ua,`m`,co).call(this),r(this,Ka,`f`).params.messages=[{role:t.role,content:t.content}]):(ht(this.client).warn(`Compaction produced no summary; keeping the conversation as it is.`),n(this,Ja,s,`f`))}finally{n(this,$a,{status:`idle`},`f`)}},oo=function(){let e=new Map;for(let t of r(this,Ka,`f`).params.tools)`run`in t&&e.set(t.name,t);for(let[t,n]of r(this,to,`f`))n?e.set(t,n):e.delete(t);return e},so=function(){let e=new Set(r(this,Ua,`m`,oo).call(this).keys());for(let t of[...r(this,Ka,`f`).params.messages,r(this,Ua,`m`,po).call(this)])if(typeof t.content!=`string`){for(let n of t.content)if(t.role===`system`)xo(n,e);else if(t.role===`assistant`&&n.type===`compaction`)for(let t of n.tool_changes??[])xo(t,e)}return e},co=function(){let e=r(this,Ua,`m`,so).call(this);for(let t of r(this,Ua,`m`,oo).call(this).keys())e.has(t)||r(this,to,`f`).set(t,null)},lo=async function*(){if(r(this,$a,`f`).status!==`scheduled`)return;let e=r(this,Ka,`f`).params.messages.at(-1)?.content;if(Array.isArray(e)&&e.some(e=>e.type===`tool_use`)){ht(this.client).warn("The pending compaction was skipped because the last turn ended with tool calls that were not run. Call `compactBeforeNextTurn()` again if you continue the conversation."),n(this,$a,{status:`idle`},`f`);return}yield*r(this,Ua,`m`,ao).call(this,r(this,$a,`f`).config)},uo=async function(e,t=r(this,qa,`f`).signal){return r(this,Xa,`f`)===void 0&&n(this,Xa,vo(r(this,Ua,`m`,oo).call(this),r(this,Ua,`m`,so).call(this),e,{...r(this,qa,`f`),signal:t}),`f`),r(this,Xa,`f`)},fo=function(){r(this,eo,`f`)!==`pause_turn`&&r(this,no,`f`).length!==0&&(r(this,Ka,`f`).params.messages.push(r(this,Ua,`m`,po).call(this)),n(this,no,[],`f`))},po=function(){let e=[];for(let t of r(this,no,`f`)){if(t.type===`removal`){e.push({type:`tool_removal`,tool:{type:`tool_reference`,name:t.name}});continue}let n=t.tool;if(`run`in t.tool){let{run:e,parse:r,close:i,...a}=t.tool;n=a}e.push({type:`tool_addition`,tool:{type:`tool_definition`,definition:n}})}return{role:`system`,content:e}},e})();function ho(e){if(`compaction`in e&&e.compaction!=null)throw new o("`compaction` cannot be set on a tool runner: every request in the loop would compact again. Call `runner.compactBeforeNextTurn()` when the conversation should be compacted instead.")}function go(e){if(e.context_management?.edits?.some(e=>e.type.startsWith(`compact_`)))throw new o("`compactBeforeNextTurn()` can't be used while `context_management` has a compaction edit, because the API doesn't accept a compaction block together with one. Remove the edit first.")}function _o(e){let{context_management:t,stop_sequences:n,output_format:r,...i}=e,a=({format:e,...t})=>t;return(i.tool_choice?.type===`any`||i.tool_choice?.type===`tool`)&&delete i.tool_choice,i.output_config&&=a(i.output_config),Array.isArray(i.fallbacks)&&(i.fallbacks=i.fallbacks.map(e=>e.output_config?{...e,output_config:a(e.output_config)}:e)),i}async function vo(e,t,n,r){if(!n||n.role!==`assistant`||!n.content||typeof n.content==`string`)return null;let i=n.content.filter(e=>e.type===`tool_use`);return i.length===0?null:{role:`user`,content:await Promise.all(i.map(async n=>{let i=t.has(n.name)?e.get(n.name):void 0;if(!i)return bo(n);try{let e=n.input;`parse`in i&&i.parse&&(e=i.parse(e));let t=await i.run(e,{toolUse:n,toolUseBlock:n,signal:r?.signal});return{type:`tool_result`,tool_use_id:n.id,content:t}}catch(e){return{type:`tool_result`,tool_use_id:n.id,content:e instanceof Pr?e.content:`Error: ${e instanceof Error?e.message:String(e)}`,is_error:!0}}}))}}function yo(e){return e}function bo(e){return{type:`tool_result`,tool_use_id:e.id,content:`Error: Tool '${e.name}' not found`,is_error:!0}}function xo(e,t){switch(e.type){case`tool_removal`:case`tool_addition`:So(e,t)}}function So(e,t){let n=Co(e.tool);n!==void 0&&(e.type===`tool_removal`?t.delete(n):t.add(n))}function Co(e){switch(e.type){case`tool_reference`:return e.name;case`tool_definition`:return`name`in e.definition?e.definition.name:void 0;default:return}}function wo(e){if(e===null)return`stop`;switch(e){case`tool_use`:return`run_tools`;case`pause_turn`:case`compaction`:return`resume`;case`end_turn`:case`stop_sequence`:case`max_tokens`:case`model_context_window_exceeded`:case`refusal`:return`stop`;default:return`stop`}}var To={},Eo=[`claude-mythos-preview`,`claude-opus-4-6`],Do=(()=>{class e extends R{constructor(){super(...arguments),this.batches=new ea(this._client)}create(e,t){let n=Oo(e),{betas:r,user_profile_id:i,workspace_id:a,...o}=n;o.model in To&&console.warn(`The model '${o.model}' is deprecated and will reach end-of-life on ${To[o.model]}\nPlease migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),Eo.includes(o.model)&&o.thinking&&o.thinking.type===`enabled`&&console.warn(`Using Claude with ${o.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);let s=t?.timeout??this._client._options.timeout;if(!o.stream&&s==null){let e=ta[o.model]??void 0;s=this._client.calculateNonstreamingTimeout(o.max_tokens,e)}let c=Wn(o.tools,o.messages);return this._client.post(`/v1/messages?beta=true`,{body:o,timeout:s??6e5,...t,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-user-profile-id":i},...a==null?void 0:{"anthropic-workspace-id":a}},c,t?.headers]),stream:n.stream??!1})}parse(e,t){return t={...t,headers:z([{"anthropic-beta":[...e.betas??[],`structured-outputs-2025-12-15`].toString()},t?.headers])},this.create(e,t).then(t=>ia(t,e,{logger:this._client.logger??console}))}stream(e,t){return Ba.createMessage(this,e,t)}countTokens(e,t){let{betas:n,user_profile_id:r,workspace_id:i,...a}=Oo(e);return this._client.post(`/v1/messages/count_tokens?beta=true`,{body:a,...t,headers:z([{"anthropic-beta":[...n??[],`token-counting-2024-11-01`].toString(),...r==null?void 0:{"anthropic-user-profile-id":r},...i==null?void 0:{"anthropic-workspace-id":i}},t?.headers])})}toolRunner(e,t){return new mo(this._client,e,t)}}return e.Batches=ea,e.BetaToolRunner=mo,e.ToolError=Pr,e})();function Oo(e){if(!e.output_format)return e;if(e.output_config?.format)throw new o(`Both output_format and output_config.format were provided. Please use only output_config.format (output_format is deprecated).`);let{output_format:t,...n}=e;return{...n,output_config:{...e.output_config,format:t}}}var ko=class extends R{retrieve(e,t){return this._client.get(B`/v1/organizations/api_keys/${e}?beta=true`,t)}update(e,t,n){return this._client.post(B`/v1/organizations/api_keys/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/api_keys?beta=true`,un,{query:e,...t})}},Ao=class extends R{retrieve(e){return this._client.get(`/v1/organizations/compliance_settings?beta=true`,e)}update(e,t){return this._client.post(`/v1/organizations/compliance_settings?beta=true`,{body:e,...t})}},jo=class extends R{create(e,t){return this._client.post(`/v1/organizations/external_keys?beta=true`,{body:e,...t})}retrieve(e,t){return this._client.get(B`/v1/organizations/external_keys/${e}?beta=true`,t)}update(e,t,n){return this._client.post(B`/v1/organizations/external_keys/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/external_keys?beta=true`,dn,{query:e,...t})}delete(e,t){return this._client.delete(B`/v1/organizations/external_keys/${e}?beta=true`,t)}validate(e,t){return this._client.post(B`/v1/organizations/external_keys/${e}/validate?beta=true`,t)}},Mo=class extends R{create(e,t){return this._client.post(`/v1/organizations/invites?beta=true`,{body:e,...t})}retrieve(e,t){return this._client.get(B`/v1/organizations/invites/${e}?beta=true`,t)}list(e={},t){return this._client.getAPIList(`/v1/organizations/invites?beta=true`,un,{query:e,...t})}delete(e,t){return this._client.delete(B`/v1/organizations/invites/${e}?beta=true`,t)}},No=class extends R{list(e={},t){return this._client.getAPIList(`/v1/organizations/rate_limits?beta=true`,dn,{query:e,...t})}},Po=class extends R{retrieve(e,t){return this._client.get(B`/v1/organizations/users/${e}?beta=true`,t)}update(e,t,n){return this._client.post(B`/v1/organizations/users/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/users?beta=true`,un,{query:e,...t})}remove(e,t){return this._client.delete(B`/v1/organizations/users/${e}?beta=true`,t)}},Fo=class extends R{create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/federation_issuers?beta=true`,{body:r,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(B`/v1/organizations/federation_issuers/${e}?beta=true`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(B`/v1/organizations/federation_issuers/${e}?beta=true`,{body:i,...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/organizations/federation_issuers?beta=true`,dn,{query:r,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(B`/v1/organizations/federation_issuers/${e}/archive?beta=true`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}},Io=class extends R{list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(B`/v1/organizations/federation_rules/${e}/workspaces?beta=true`,dn,{query:i,...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}add(e,t,n){let{betas:r,...i}=t;return this._client.post(B`/v1/organizations/federation_rules/${e}/workspaces?beta=true`,{body:i,...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}remove(e,t,n){let{federation_rule_id:r,betas:i}=t;return this._client.delete(B`/v1/organizations/federation_rules/${r}/workspaces/${e}?beta=true`,{...n,headers:z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}},Lo=(()=>{class e extends R{constructor(){super(...arguments),this.workspaces=new Io(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/federation_rules?beta=true`,{body:r,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(B`/v1/organizations/federation_rules/${e}?beta=true`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(B`/v1/organizations/federation_rules/${e}?beta=true`,{body:i,...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/organizations/federation_rules?beta=true`,dn,{query:r,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(B`/v1/organizations/federation_rules/${e}/archive?beta=true`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}}return e.Workspaces=Io,e})(),Ro=(()=>{class e extends R{constructor(){super(...arguments),this.issuers=new Fo(this._client),this.rules=new Lo(this._client)}}return e.Issuers=Fo,e.Rules=Lo,e})(),zo=class extends R{list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(B`/v1/organizations/service_accounts/${e}/workspaces?beta=true`,dn,{query:i,...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}add(e,t,n){let{betas:r,...i}=t;return this._client.post(B`/v1/organizations/service_accounts/${e}/workspaces?beta=true`,{body:i,...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}remove(e,t,n){let{service_account_id:r,betas:i}=t;return this._client.delete(B`/v1/organizations/service_accounts/${r}/workspaces/${e}?beta=true`,{...n,headers:z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}},Bo=(()=>{class e extends R{constructor(){super(...arguments),this.workspaces=new zo(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/service_accounts?beta=true`,{body:r,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t={},n){let{betas:r}=t??{};return this._client.get(B`/v1/organizations/service_accounts/${e}?beta=true`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}update(e,t,n){let{betas:r,...i}=t;return this._client.post(B`/v1/organizations/service_accounts/${e}?beta=true`,{body:i,...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}list(e={},t){let{betas:n,...r}=e??{};return this._client.getAPIList(`/v1/organizations/service_accounts?beta=true`,dn,{query:r,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}archive(e,t={},n){let{betas:r}=t??{};return this._client.post(B`/v1/organizations/service_accounts/${e}/archive?beta=true`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}}return e.Workspaces=zo,e})(),Vo=class extends R{retrieve(e,t,n){let{workspace_id:r}=t;return this._client.get(B`/v1/organizations/workspaces/${r}/members/${e}?beta=true`,n)}update(e,t,n){let{workspace_id:r,...i}=t;return this._client.post(B`/v1/organizations/workspaces/${r}/members/${e}?beta=true`,{body:i,...n})}list(e,t={},n){return this._client.getAPIList(B`/v1/organizations/workspaces/${e}/members?beta=true`,un,{query:t,...n})}add(e,t,n){return this._client.post(B`/v1/organizations/workspaces/${e}/members?beta=true`,{body:t,...n})}remove(e,t,n){let{workspace_id:r}=t;return this._client.delete(B`/v1/organizations/workspaces/${r}/members/${e}?beta=true`,n)}},Ho=class extends R{list(e,t={},n){return this._client.getAPIList(B`/v1/organizations/workspaces/${e}/rate_limits?beta=true`,dn,{query:t,...n})}},Uo=class extends R{retrieve(e,t,n){let{workspace_id:r,betas:i}=t;return this._client.get(B`/v1/organizations/workspaces/${r}/service_accounts/${e}?beta=true`,{...n,headers:z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}update(e,t,n){let{workspace_id:r,betas:i,...a}=t;return this._client.post(B`/v1/organizations/workspaces/${r}/service_accounts/${e}?beta=true`,{body:a,...n,headers:z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}list(e,t={},n){let{betas:r,...i}=t??{};return this._client.getAPIList(B`/v1/organizations/workspaces/${e}/service_accounts?beta=true`,dn,{query:i,...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}add(e,t,n){let{betas:r,...i}=t;return this._client.post(B`/v1/organizations/workspaces/${e}/service_accounts?beta=true`,{body:i,...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()}},n?.headers])})}remove(e,t,n){let{workspace_id:r,betas:i}=t;return this._client.delete(B`/v1/organizations/workspaces/${r}/service_accounts/${e}?beta=true`,{...n,headers:z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()}},n?.headers])})}},Wo=(()=>{class e extends R{constructor(){super(...arguments),this.rateLimits=new Ho(this._client),this.members=new Vo(this._client),this.serviceAccounts=new Uo(this._client)}create(e,t){let{betas:n,...r}=e;return this._client.post(`/v1/organizations/workspaces?beta=true`,{body:r,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()}},t?.headers])})}retrieve(e,t){return this._client.get(B`/v1/organizations/workspaces/${e}?beta=true`,t)}update(e,t,n){return this._client.post(B`/v1/organizations/workspaces/${e}?beta=true`,{body:t,...n})}list(e={},t){return this._client.getAPIList(`/v1/organizations/workspaces?beta=true`,un,{query:e,...t})}archive(e,t){return this._client.post(B`/v1/organizations/workspaces/${e}/archive?beta=true`,t)}}return e.RateLimits=Ho,e.Members=Vo,e.ServiceAccounts=Uo,e})(),Go=(()=>{class e extends R{constructor(){super(...arguments),this.apiKeys=new ko(this._client),this.externalKeys=new jo(this._client),this.federation=new Ro(this._client),this.invites=new Mo(this._client),this.serviceAccounts=new Bo(this._client),this.users=new Po(this._client),this.workspaces=new Wo(this._client),this.rateLimits=new No(this._client),this.complianceSettings=new Ao(this._client)}retrieve(e){return this._client.get(`/v1/organizations/me?beta=true`,e)}}return e.APIKeys=ko,e.ExternalKeys=jo,e.Federation=Ro,e.Invites=Mo,e.ServiceAccounts=Bo,e.Users=Po,e.Workspaces=Wo,e.RateLimits=No,e.ComplianceSettings=Ao,e})(),Ko=(()=>{class e extends R{list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(B`/v1/sessions/${e}/events?beta=true`,dn,{query:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}send(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/sessions/${e}/events?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}stream(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.get(B`/v1/sessions/${e}/events/stream?beta=true`,{query:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers]),stream:!0})}toolRunner(e,t){return new Ei(e,{...t,client:this._client})}}return e.SessionToolRunner=Ei,e})(),qo=class extends R{retrieve(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.get(B`/v1/sessions/${r}/resources/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{session_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(B`/v1/sessions/${r}/resources/${e}?beta=true`,{body:o,...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(B`/v1/sessions/${e}/resources?beta=true`,dn,{query:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.delete(B`/v1/sessions/${r}/resources/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}add(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/sessions/${e}/resources?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},Jo=class extends R{list(e,t,n){let{session_id:r,betas:i,workspace_id:a,...o}=t;return this._client.getAPIList(B`/v1/sessions/${r}/threads/${e}/events?beta=true`,dn,{query:o,...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}stream(e,t,n){let{session_id:r,betas:i,workspace_id:a,...o}=t;return this._client.get(B`/v1/sessions/${r}/threads/${e}/stream?beta=true`,{query:o,...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers]),stream:!0})}},Yo=(()=>{class e extends R{constructor(){super(...arguments),this.events=new Jo(this._client)}retrieve(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.get(B`/v1/sessions/${r}/threads/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(B`/v1/sessions/${e}/threads?beta=true`,dn,{query:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t,n){let{session_id:r,betas:i,workspace_id:a}=t;return this._client.post(B`/v1/sessions/${r}/threads/${e}/archive?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}}return e.Events=Jo,e})(),Xo=(()=>{class e extends R{constructor(){super(...arguments),this.events=new Ko(this._client),this.resources=new qo(this._client),this.threads=new Yo(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/sessions?beta=true`,{body:i,...t,headers:z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/sessions/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/sessions/${e}?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/sessions?beta=true`,fn,{query:i,...t,headers:z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(B`/v1/sessions/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/sessions/${e}/archive?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Events=Ko,e.Resources=qo,e.Threads=Yo,e})(),Zo=class extends R{create(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/skills/${e}/versions?beta=true`,_n({body:a,...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])},this._client,!1))}retrieve(e,t,n){let{skill_id:r,betas:i,workspace_id:a}=t;return this._client.get(B`/v1/skills/${r}/versions/${e}?beta=true`,{...n,headers:z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()},...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(B`/v1/skills/${e}/versions?beta=true`,dn,{query:a,...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{skill_id:r,betas:i,workspace_id:a}=t;return this._client.delete(B`/v1/skills/${r}/versions/${e}?beta=true`,{...n,headers:z([{...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()},...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}download(e,t,n){let{skill_id:r,betas:i,workspace_id:a}=t;return this._client.get(B`/v1/skills/${r}/versions/${e}/content?beta=true`,{...n,headers:z([{Accept:`application/binary`,...i?.toString()==null?void 0:{"anthropic-beta":i?.toString()},...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers]),__binaryResponse:!0})}},Qo=(()=>{class e extends R{constructor(){super(...arguments),this.versions=new Zo(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/skills?beta=true`,_n({body:i,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])},this._client,!1))}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/skills/${e}?beta=true`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/skills?beta=true`,dn,{query:i,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(B`/v1/skills/${e}?beta=true`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Versions=Zo,e})(),$o=class extends R{create(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/tunnels/${e}/certificates?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}retrieve(e,t,n){let{tunnel_id:r,betas:i,workspace_id:a}=t;return this._client.get(B`/v1/tunnels/${r}/certificates/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`mcp-tunnels-2026-06-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(B`/v1/tunnels/${e}/certificates?beta=true`,dn,{query:a,...n,headers:z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t,n){let{tunnel_id:r,betas:i,workspace_id:a}=t;return this._client.post(B`/v1/tunnels/${r}/certificates/${e}/archive?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`mcp-tunnels-2026-06-22`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}},es=(()=>{class e extends R{constructor(){super(...arguments),this.certificates=new $o(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/tunnels?beta=true`,{body:i,...t,headers:z([{"anthropic-beta":[...n??[],`mcp-tunnels-2026-06-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/tunnels/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/tunnels?beta=true`,dn,{query:i,...t,headers:z([{"anthropic-beta":[...n??[],`mcp-tunnels-2026-06-22`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/tunnels/${e}/archive?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}revealToken(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/tunnels/${e}/reveal_token?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}rotateToken(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/tunnels/${e}/rotate_token?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`mcp-tunnels-2026-06-22`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Certificates=$o,e})(),ts=class extends R{create(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/vaults/${e}/credentials?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}retrieve(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.get(B`/v1/vaults/${r}/credentials/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}update(e,t,n){let{vault_id:r,betas:i,workspace_id:a,...o}=t;return this._client.post(B`/v1/vaults/${r}/credentials/${e}?beta=true`,{body:o,...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}list(e,t={},n){let{betas:r,workspace_id:i,...a}=t??{};return this._client.getAPIList(B`/v1/vaults/${e}/credentials?beta=true`,dn,{query:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}delete(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.delete(B`/v1/vaults/${r}/credentials/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}archive(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.post(B`/v1/vaults/${r}/credentials/${e}/archive?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}mcpOAuthValidate(e,t,n){let{vault_id:r,betas:i,workspace_id:a}=t;return this._client.post(B`/v1/vaults/${r}/credentials/${e}/mcp_oauth_validate?beta=true`,{...n,headers:z([{"anthropic-beta":[...i??[],`managed-agents-2026-04-01`].toString(),...a==null?void 0:{"anthropic-workspace-id":a}},n?.headers])})}},ns=(()=>{class e extends R{constructor(){super(...arguments),this.credentials=new ts(this._client)}create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/vaults?beta=true`,{body:i,...t,headers:z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/vaults/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}update(e,t,n){let{betas:r,workspace_id:i,...a}=t;return this._client.post(B`/v1/vaults/${e}?beta=true`,{body:a,...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/vaults?beta=true`,dn,{query:i,...t,headers:z([{"anthropic-beta":[...n??[],`managed-agents-2026-04-01`].toString(),...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}delete(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.delete(B`/v1/vaults/${e}?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}archive(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.post(B`/v1/vaults/${e}/archive?beta=true`,{...n,headers:z([{"anthropic-beta":[...r??[],`managed-agents-2026-04-01`].toString(),...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}}return e.Credentials=ts,e})(),rs=(()=>{class e extends R{constructor(){super(...arguments),this.models=new qn(this._client),this.messages=new Do(this._client),this.agents=new tr(this._client),this.environments=new Yi(this._client),this.sessions=new Xo(this._client),this.deployments=new In(this._client),this.deploymentRuns=new Fn(this._client),this.vaults=new ns(this._client),this.memoryStores=new Qi(this._client),this.files=new Kn(this._client),this.skills=new Qo(this._client),this.webhooks=new $n(this._client),this.userProfiles=new Jn(this._client),this.dreams=new Ln(this._client),this.tunnels=new es(this._client),this.organization=new Go(this._client)}}return e.Models=qn,e.Messages=Do,e.Agents=tr,e.Environments=Yi,e.Sessions=Xo,e.Deployments=In,e.DeploymentRuns=Fn,e.Vaults=ns,e.MemoryStores=Qi,e.Files=Kn,e.Skills=Qo,e.Webhooks=$n,e.UserProfiles=Jn,e.Dreams=Ln,e.Tunnels=es,e.Organization=Go,e})(),is=class extends R{create(e,t){let{betas:n,workspace_id:r,...i}=e;return this._client.post(`/v1/complete`,{body:i,timeout:this._client._options.timeout??6e5,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers]),stream:e.stream??!1})}},as=class extends R{list(e={},t){let{workspace_id:n,...r}=e??{};return this._client.getAPIList(`/v1/files`,dn,{query:r,...t,headers:z([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])})}delete(e,t={},n){let{workspace_id:r}=t??{};return this._client.delete(B`/v1/files/${e}`,{...n,headers:z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}download(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(B`/v1/files/${e}/content`,{...n,headers:z([{Accept:`application/binary`,...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers]),__binaryResponse:!0})}retrieveMetadata(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(B`/v1/files/${e}`,{...n,headers:z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}upload(e,t){let{workspace_id:n,...r}=e;return this._client.post(`/v1/files`,_n({body:r,...t,headers:z([{...n==null?void 0:{"anthropic-workspace-id":n}},Gn(r.file),t?.headers])},this._client))}};function os(e){return e?.output_config?.format}function ss(e,t,n){let r=os(t);return!t||!(`parse`in(r??{}))?{...e,content:e.content.map(e=>e.type===`text`?Object.defineProperty({...e},"parsed_output",{value:null,enumerable:!1}):e),parsed_output:null}:cs(e,t,n)}function cs(e,t,n){let r=null,i=e.content.map(e=>{if(e.type===`text`){let n=ls(t,e.text);return r===null&&(r=n),Object.defineProperty({...e},"parsed_output",{value:n,enumerable:!1})}return e});return{...e,content:i,parsed_output:r}}function ls(e,t){let n=os(e);if(n?.type!==`json_schema`)return null;try{return`parse`in n?n.parse(t):JSON.parse(t)}catch(e){throw new o(`Failed to parse structured output: ${e}`)}}var us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps;function Fs(e){return e.type===`tool_use`||e.type===`server_tool_use`}var Is=(()=>{class e{constructor(e,t){us.add(this),this.messages=[],this.receivedMessages=[],ds.set(this,void 0),fs.set(this,null),this.controller=new AbortController,ps.set(this,void 0),ms.set(this,()=>{}),hs.set(this,()=>{}),gs.set(this,void 0),_s.set(this,()=>{}),vs.set(this,()=>{}),ys.set(this,{}),bs.set(this,!1),xs.set(this,!1),Ss.set(this,!1),Cs.set(this,!1),ws.set(this,void 0),Ts.set(this,void 0),Es.set(this,void 0),Ds.set(this,void 0),As.set(this,e=>{if(n(this,xs,!0,`f`),i(e)&&(e=new c),e instanceof c)return n(this,Ss,!0,`f`),this._emit(`abort`,e);if(e instanceof o)return this._emit(`error`,e);if(e instanceof Error){let t=new o(e.message);return t.cause=e,this._emit(`error`,t)}return this._emit(`error`,new o(String(e)))}),n(this,ps,new Promise((e,t)=>{n(this,ms,e,`f`),n(this,hs,t,`f`)}),`f`),n(this,gs,new Promise((e,t)=>{n(this,_s,e,`f`),n(this,vs,t,`f`)}),`f`),r(this,ps,`f`).catch(()=>{}),r(this,gs,`f`).catch(()=>{}),n(this,fs,e,`f`),n(this,Ds,t?.logger??console,`f`)}get response(){return r(this,ws,`f`)}get request_id(){return r(this,Ts,`f`)}get workspace_id(){return r(this,Es,`f`)}async withResponse(){n(this,Cs,!0,`f`);let e=await r(this,ps,`f`);if(!e)throw Error("Could not resolve a `Response` object");return{data:this,response:e,request_id:e.headers.get(`request-id`),workspace_id:e.headers.get(`anthropic-workspace-id`)}}static fromReadableStream(t){let n=new e(null);return n._run(()=>n._fromReadableStream(t)),n}static createMessage(t,r,i,{logger:a}={}){let o=new e(r,{logger:a});for(let e of r.messages)o._addMessageParam(e);return n(o,fs,{...r,stream:!0},`f`),o._run(()=>o._createMessage(t,{...r,stream:!0},{...i,headers:{...i?.headers,[zn]:`stream`}})),o}_run(e){e().then(()=>{this._emitFinal(),this._emit(`end`)},r(this,As,`f`))}_addMessageParam(e){this.messages.push(e)}_addMessage(e,t=!0){this.receivedMessages.push(e),t&&this._emit(`message`,e)}async _createMessage(e,t,n){let i=n?.signal,a;i&&(i.aborted&&this.controller.abort(),a=this.controller.abort.bind(this.controller),i.addEventListener(`abort`,a));try{r(this,us,`m`,js).call(this);let{response:i,data:a}=await e.create({...t,stream:!0},{...n,signal:this.controller.signal}).withResponse();this._connected(i);for await(let e of a)r(this,us,`m`,Ms).call(this,e);if(a.controller.signal?.aborted)throw new c;r(this,us,`m`,Ns).call(this)}finally{i&&a&&i.removeEventListener(`abort`,a)}}_connected(e){this.ended||(n(this,ws,e,`f`),n(this,Ts,e?.headers.get(`request-id`),`f`),n(this,Es,e?.headers.get(`anthropic-workspace-id`),`f`),r(this,ms,`f`).call(this,e),this._emit(`connect`))}get ended(){return r(this,bs,`f`)}get errored(){return r(this,xs,`f`)}get aborted(){return r(this,Ss,`f`)}abort(){this.controller.abort()}on(e,t){return(r(this,ys,`f`)[e]||(r(this,ys,`f`)[e]=[])).push({listener:t}),this}off(e,t){let n=r(this,ys,`f`)[e];if(!n)return this;let i=n.findIndex(e=>e.listener===t);return i>=0&&n.splice(i,1),this}once(e,t){return(r(this,ys,`f`)[e]||(r(this,ys,`f`)[e]=[])).push({listener:t,once:!0}),this}emitted(e){return new Promise((t,r)=>{n(this,Cs,!0,`f`),e!==`error`&&this.once(`error`,r),this.once(e,t)})}async done(){n(this,Cs,!0,`f`),await r(this,gs,`f`)}get currentMessage(){return r(this,ds,`f`)}async finalMessage(){return await this.done(),r(this,us,`m`,Os).call(this)}async finalText(){return await this.done(),r(this,us,`m`,ks).call(this)}_emit(e,...t){if(r(this,bs,`f`))return;e===`end`&&(n(this,bs,!0,`f`),r(this,_s,`f`).call(this));let i=r(this,ys,`f`)[e];if(i&&(r(this,ys,`f`)[e]=i.filter(e=>!e.once),i.forEach(({listener:e})=>e(...t))),e===`abort`){let e=t[0];!r(this,Cs,`f`)&&!i?.length&&Promise.reject(e),r(this,hs,`f`).call(this,e),r(this,vs,`f`).call(this,e),this._emit(`end`);return}if(e===`error`){let e=t[0];!r(this,Cs,`f`)&&!i?.length&&Promise.reject(e),r(this,hs,`f`).call(this,e),r(this,vs,`f`).call(this,e),this._emit(`end`)}}_emitFinal(){this.receivedMessages.at(-1)&&this._emit(`finalMessage`,r(this,us,`m`,Os).call(this))}async _fromReadableStream(e,t){let n=t?.signal,i;n&&(n.aborted&&this.controller.abort(),i=this.controller.abort.bind(this.controller),n.addEventListener(`abort`,i));try{r(this,us,`m`,js).call(this),this._connected(null);let t=Wt.fromReadableStream(e,this.controller);for await(let e of t)r(this,us,`m`,Ms).call(this,e);if(t.controller.signal?.aborted)throw new c;r(this,us,`m`,Ns).call(this)}finally{n&&i&&n.removeEventListener(`abort`,i)}}[(ds=new WeakMap,fs=new WeakMap,ps=new WeakMap,ms=new WeakMap,hs=new WeakMap,gs=new WeakMap,_s=new WeakMap,vs=new WeakMap,ys=new WeakMap,bs=new WeakMap,xs=new WeakMap,Ss=new WeakMap,Cs=new WeakMap,ws=new WeakMap,Ts=new WeakMap,Es=new WeakMap,Ds=new WeakMap,As=new WeakMap,us=new WeakSet,Os=function(){if(this.receivedMessages.length===0)throw new o(`stream ended without producing a Message with role=assistant`);return this.receivedMessages.at(-1)},ks=function(){if(this.receivedMessages.length===0)throw new o(`stream ended without producing a Message with role=assistant`);let e=this.receivedMessages.at(-1).content.filter(e=>e.type===`text`).map(e=>e.text);if(e.length===0)throw new o(`stream ended without producing a content block with type=text`);return e.join(` `)},js=function(){this.ended||n(this,ds,void 0,`f`)},Ms=function(e){if(this.ended)return;let t=r(this,us,`m`,Ps).call(this,e);switch(this._emit(`streamEvent`,e,t),e.type){case`content_block_delta`:{let n=t.content.at(-1);switch(e.delta.type){case`text_delta`:n.type===`text`&&this._emit(`text`,e.delta.text,n.text||``);break;case`citations_delta`:n.type===`text`&&this._emit(`citation`,e.delta.citation,n.citations??[]);break;case`input_json_delta`:Fs(n)&&r(this,ys,`f`).inputJson?.length&&this._emit(`inputJson`,e.delta.partial_json,n.input);break;case`thinking_delta`:n.type===`thinking`&&this._emit(`thinking`,e.delta.thinking,n.thinking);break;case`signature_delta`:n.type===`thinking`&&this._emit(`signature`,n.signature);break;default:e.delta}break}case`message_stop`:this._addMessageParam(t),this._addMessage(ss(t,r(this,fs,`f`),{logger:r(this,Ds,`f`)}),!0);break;case`content_block_stop`:this._emit(`contentBlock`,t.content.at(-1));break;case`message_start`:n(this,ds,t,`f`)}},Ns=function(){if(this.ended)throw new o(`stream has ended, this shouldn't happen`);let e=r(this,ds,`f`);if(!e)throw new o(`request ended without sending any chunks`);return n(this,ds,void 0,`f`),ss(e,r(this,fs,`f`),{logger:r(this,Ds,`f`)})},Ps=function(e){let t=r(this,ds,`f`);if(e.type===`message_start`){if(t)throw new o(`Unexpected event order, got ${e.type} before receiving "message_stop"`);return e.message}if(!t)throw new o(`Unexpected event order, got ${e.type} before "message_start"`);switch(e.type){case`message_stop`:return t;case`message_delta`:return t.stop_reason=e.delta.stop_reason,t.stop_sequence=e.delta.stop_sequence,t.stop_details=e.delta.stop_details,t.usage.output_tokens=e.usage.output_tokens,e.delta.container!=null&&(t.container=e.delta.container),e.usage.input_tokens!=null&&(t.usage.input_tokens=e.usage.input_tokens),e.usage.cache_creation_input_tokens!=null&&(t.usage.cache_creation_input_tokens=e.usage.cache_creation_input_tokens),e.usage.cache_read_input_tokens!=null&&(t.usage.cache_read_input_tokens=e.usage.cache_read_input_tokens),e.usage.server_tool_use!=null&&(t.usage.server_tool_use=e.usage.server_tool_use),e.usage.output_tokens_details!=null&&(t.usage.output_tokens_details=e.usage.output_tokens_details),t;case`content_block_start`:return t.content.push({...e.content_block}),t;case`content_block_delta`:{let n=t.content.at(e.index);switch(e.delta.type){case`text_delta`:n?.type===`text`&&(t.content[e.index]={...n,text:(n.text||``)+e.delta.text});break;case`citations_delta`:n?.type===`text`&&(t.content[e.index]={...n,citations:[...n.citations??[],e.delta.citation]});break;case`input_json_delta`:if(n&&Fs(n)){let r=(n.__json_buf||``)+e.delta.partial_json;t.content[e.index]=fa(n,r)}break;case`thinking_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,thinking:n.thinking+e.delta.thinking});break;case`signature_delta`:n?.type===`thinking`&&(t.content[e.index]={...n,signature:e.delta.signature});break;default:e.delta}return t}case`content_block_stop`:{let n=t.content.at(e.index);return n&&Fs(n)&&`__json_buf`in n&&Object.defineProperty(n,"input",{value:n.input,enumerable:!0,configurable:!0,writable:!0}),t}}},Symbol.asyncIterator)](){let e=[],t=[],n=!1;return this.on(`streamEvent`,n=>{let r=t.shift();r?r.resolve(n):e.push(n)}),this.on(`end`,()=>{n=!0;for(let e of t)e.resolve(void 0);t.length=0}),this.on(`abort`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),this.on(`error`,e=>{n=!0;for(let n of t)n.reject(e);t.length=0}),{next:async()=>e.length?{value:e.shift(),done:!1}:n?{value:void 0,done:!0}:new Promise((e,n)=>t.push({resolve:e,reject:n})).then(e=>e?{value:e,done:!1}:{value:void 0,done:!0}),return:async()=>(this.abort(),{value:void 0,done:!0})}}toReadableStream(){return new Wt(this[Symbol.asyncIterator].bind(this),this.controller).toReadableStream()}}return e})(),Ls=class extends R{create(e,t){let{user_profile_id:n,workspace_id:r,...i}=e;return this._client.post(`/v1/messages/batches`,{body:i,...t,headers:z([{...n==null?void 0:{"anthropic-user-profile-id":n},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}retrieve(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(B`/v1/messages/batches/${e}`,{...n,headers:z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}list(e={},t){let{workspace_id:n,...r}=e??{};return this._client.getAPIList(`/v1/messages/batches`,un,{query:r,...t,headers:z([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])})}delete(e,t={},n){let{workspace_id:r}=t??{};return this._client.delete(B`/v1/messages/batches/${e}`,{...n,headers:z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}cancel(e,t={},n){let{workspace_id:r}=t??{};return this._client.post(B`/v1/messages/batches/${e}/cancel`,{...n,headers:z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}async results(e,t={},n){let r=await this.retrieve(e,t,n);if(!r.results_url)throw new o(`No batch \`results_url\`; Has it finished processing? ${r.processing_status} - ${r.id}`);let{workspace_id:i}=t??{};return this._client.get(r.results_url,{...n,headers:z([{Accept:`application/binary`,...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers]),stream:!0,__binaryResponse:!0})._thenUnwrap((e,t)=>$i.fromResponse(t.response,t.controller))}},Rs=(()=>{class e extends R{constructor(){super(...arguments),this.batches=new Ls(this._client)}create(e,t){let{user_profile_id:n,workspace_id:r,...i}=e;i.model in zs&&console.warn(`The model '${i.model}' is deprecated and will reach end-of-life on ${zs[i.model]}\nPlease migrate to a newer model. Visit https://docs.anthropic.com/en/docs/resources/model-deprecations for more information.`),Bs.includes(i.model)&&i.thinking&&i.thinking.type===`enabled`&&console.warn(`Using Claude with ${i.model} and 'thinking.type=enabled' is deprecated. Use 'thinking.type=adaptive' instead which results in better model performance in our testing: https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking`);let a=t?.timeout??this._client._options.timeout;if(!i.stream&&a==null){let e=ta[i.model]??void 0;a=this._client.calculateNonstreamingTimeout(i.max_tokens,e)}let o=Wn(i.tools,i.messages);return this._client.post(`/v1/messages`,{body:i,timeout:a??6e5,...t,headers:z([{...n==null?void 0:{"anthropic-user-profile-id":n},...r==null?void 0:{"anthropic-workspace-id":r}},o,t?.headers]),stream:e.stream??!1})}parse(e,t){return this.create(e,t).then(t=>cs(t,e,{logger:this._client.logger??console}))}stream(e,t){return Is.createMessage(this,e,t,{logger:this._client.logger??console})}countTokens(e,t){let{user_profile_id:n,workspace_id:r,...i}=e;return this._client.post(`/v1/messages/count_tokens`,{body:i,...t,headers:z([{...n==null?void 0:{"anthropic-user-profile-id":n},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}}return e.Batches=Ls,e})(),zs={},Bs=[`claude-mythos-preview`,`claude-opus-4-6`],Vs=class extends R{retrieve(e,t={},n){let{betas:r,workspace_id:i}=t??{};return this._client.get(B`/v1/models/${e}`,{...n,headers:z([{...r?.toString()==null?void 0:{"anthropic-beta":r?.toString()},...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e={},t){let{betas:n,workspace_id:r,...i}=e??{};return this._client.getAPIList(`/v1/models`,un,{query:i,...t,headers:z([{...n?.toString()==null?void 0:{"anthropic-beta":n?.toString()},...r==null?void 0:{"anthropic-workspace-id":r}},t?.headers])})}},Hs=class extends R{create(e,t,n){let{workspace_id:r,...i}=t;return this._client.post(B`/v1/skills/${e}/versions`,_n({body:i,...n,headers:z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])},this._client,!1))}retrieve(e,t,n){let{skill_id:r,workspace_id:i}=t;return this._client.get(B`/v1/skills/${r}/versions/${e}`,{...n,headers:z([{...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}list(e,t={},n){let{workspace_id:r,...i}=t??{};return this._client.getAPIList(B`/v1/skills/${e}/versions`,dn,{query:i,...n,headers:z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}delete(e,t,n){let{skill_id:r,workspace_id:i}=t;return this._client.delete(B`/v1/skills/${r}/versions/${e}`,{...n,headers:z([{...i==null?void 0:{"anthropic-workspace-id":i}},n?.headers])})}},Us=(()=>{class e extends R{constructor(){super(...arguments),this.versions=new Hs(this._client)}create(e,t){let{workspace_id:n,...r}=e;return this._client.post(`/v1/skills`,_n({body:r,...t,headers:z([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])},this._client,!1))}retrieve(e,t={},n){let{workspace_id:r}=t??{};return this._client.get(B`/v1/skills/${e}`,{...n,headers:z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}list(e={},t){let{workspace_id:n,...r}=e??{};return this._client.getAPIList(`/v1/skills`,dn,{query:r,...t,headers:z([{...n==null?void 0:{"anthropic-workspace-id":n}},t?.headers])})}delete(e,t={},n){let{workspace_id:r}=t??{};return this._client.delete(B`/v1/skills/${e}`,{...n,headers:z([{...r==null?void 0:{"anthropic-workspace-id":r}},n?.headers])})}}return e.Versions=Hs,e})(),Ws,Gs,Ks,qs,Js=`\\n\\nHuman:`,Ys=`\\n\\nAssistant:`,Xs=(()=>{class e{get credentials(){return this._authState.provider}constructor({baseURL:e=L(`ANTHROPIC_BASE_URL`),apiKey:t,authToken:r,webhookKey:i=L(`ANTHROPIC_WEBHOOK_SIGNING_KEY`)??null,...a}={}){if(Ws.add(this),this._requestAuthFlags=new WeakMap,Ks.set(this,void 0),t===void 0&&(t=a.profile==null?L(`ANTHROPIC_API_KEY`)??null:null),r===void 0&&(r=a.profile==null?L(`ANTHROPIC_AUTH_TOKEN`)??null:null),a.profile!=null&&(a.credentials!=null||a.config!=null))throw TypeError("Pass at most one of `profile`, `credentials`, or `config`.");let s={apiKey:t,authToken:r,webhookKey:i,...a,baseURL:e||`https://api.anthropic.com`};if(!s.dangerouslyAllowBrowser&&ee())throw new o(`It looks like you're running in a browser-like environment.

This is disabled by default, as it risks exposing your secret API credentials to attackers.
If you understand the risks and have appropriate mitigations in place,
you can set the \`dangerouslyAllowBrowser\` option to \`true\`, e.g.,

new Anthropic({ apiKey, dangerouslyAllowBrowser: true });
`);this.baseURL=s.baseURL,this._baseURLIsExplicit=a.__baseURLIsExplicit??!!e,this.timeout=s.timeout??Gs.DEFAULT_TIMEOUT,this.logger=s.logger??console,this.logLevel=st,this.logLevel=lt(s.logLevel,`ClientOptions.logLevel`,ht(this))??lt(L(`ANTHROPIC_LOG`),`process.env['ANTHROPIC_LOG']`,ht(this))??`warn`,this.fetchOptions=s.fetchOptions,this.maxRetries=O(`maxRetries`,s.maxRetries??2),this.fetch=s.fetch??pe(),n(this,Ks,ve,`f`),this.middleware=[...s.middleware??[]];let c=L(`ANTHROPIC_CUSTOM_HEADERS`);if(c){let e={};for(let t of c.split(`
`)){let n=t.indexOf(`:`);n>=0&&(e[t.substring(0,n).trim()]=t.substring(n+1).trim())}s.defaultHeaders={...e,...s.defaultHeaders}}let l=a.__auth;if(delete s.__auth,delete s.__baseURLIsExplicit,this._options=s,this.apiKey=typeof t==`string`?t:null,this.authToken=r,this.webhookKey=i,l)this._authState=l,!this._baseURLIsExplicit&&l.baseURL&&(this.baseURL=l.baseURL);else if(this._authState={provider:null,tokenCache:null,resolution:null,error:null,extraHeaders:{}},this.apiKey==null&&this.authToken==null){let e=s.credentials??null;if(e)this._authState.provider=e,this._authState.tokenCache=this._makeTokenCache(e);else if(s.config!=null){let e=Nt(s.config,this._credentialResolverOptions());this._authState.provider=e.provider,this._authState.tokenCache=this._makeTokenCache(e.provider),this._authState.extraHeaders=e.extraHeaders,this._applyCredentialBaseURL(e.baseURL)}else s.profile==null?this._shouldResolveDefaultCredentials()&&(this._authState.resolution=this._resolveDefaultCredentials()):this._authState.resolution=this._resolveDefaultCredentials(s.profile)}}_shouldResolveDefaultCredentials(){return!0}_applyCredentialBaseURL(e){if(!e)return;let t=e.replace(/\/+$/,``);this._authState.baseURL=t,this._baseURLIsExplicit||(this.baseURL=t)}_credentialResolverOptions(){return{baseURL:this.baseURL,fetch:this._credentialsFetch(),userAgent:this.getUserAgent(),onCacheWriteError:e=>{ht(this).debug(`credential cache write failed (best-effort)`,e)},onSafetyWarning:e=>{ht(this).warn(e)}}}_credentialsFetch(){return en(this.fetch,this.middleware,void 0,this)}_makeTokenCache(e){return new et(e,e=>{ht(this).debug(`advisory token refresh failed; serving cached token`,e)})}withOptions(e){let t=`credentials`in e||`config`in e||`profile`in e,n=`apiKey`in e||`authToken`in e||t,r={...this._options,...this._baseURLIsExplicit?{baseURL:this.baseURL}:{},maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,middleware:this.middleware,apiKey:this.apiKey,authToken:this.authToken,webhookKey:this.webhookKey,credentials:this.credentials,...t?{credentials:void 0,config:void 0,profile:void 0}:{},...e,__auth:n?void 0:this._authState,__baseURLIsExplicit:`baseURL`in e||this._baseURLIsExplicit};return new this.constructor(r)}async _resolveDefaultCredentials(e){try{let t=await Pt(this._credentialResolverOptions(),e);if(t)this._authState.provider=t.provider,this._authState.tokenCache=this._makeTokenCache(t.provider),this._authState.extraHeaders=t.extraHeaders,this._applyCredentialBaseURL(t.baseURL);else if(e!=null)throw new o(`Profile "${e}" could not be resolved (no <config_dir>/configs/${e}.json found).`)}catch(e){this._authState.error=e}finally{this._authState.resolution=null}}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:t}){if(!(e.get(`x-api-key`)||e.get(`authorization`))){if(this._authState.error)throw this._authState.error;if(!(this._authState.tokenCache||this._authState.resolution)&&!(this.apiKey&&e.get(`x-api-key`))&&!t.has(`x-api-key`)&&!(this.authToken&&e.get(`authorization`))&&!t.has(`authorization`))throw Error(`Could not resolve authentication method. Expected one of apiKey, authToken, credentials, config, or profile to be set. Or for one of the "X-Api-Key" or "Authorization" headers to be explicitly omitted`)}}_authFlags(e){let t=this._requestAuthFlags.get(e);return t||(t={usedTokenCache:!1,didRefreshFor401:!1},this._requestAuthFlags.set(e,t)),t}async authHeaders(e){if(this._authState.resolution&&await this._authState.resolution,!this._authState.error){if(this._authState.tokenCache&&this.apiKey==null){let t=await this._authState.tokenCache.getToken();return this._authFlags(e).usedTokenCache=!0,z([{Authorization:`Bearer ${t}`}])}return z([await this.apiKeyAuth(e),await this.bearerAuth(e)])}}async apiKeyAuth(e){if(this.apiKey!=null)return z([{"X-Api-Key":this.apiKey}])}async bearerAuth(e){if(this.authToken!=null)return z([{Authorization:`Bearer ${this.authToken}`}])}stringifyQuery(e){return Ne(e)}getUserAgent(){return`Anthropic/JS ${j}`}makeStatusError(e,t,n,r){return s.generate(e,t,n,r)}buildURL(e,t,n){let i=!r(this,Ws,`m`,qs).call(this)&&n||this.baseURL,a=x(e)?new URL(e):new URL(i+(i.endsWith(`/`)&&e.startsWith(`/`)?e.slice(1):e)),o=this.defaultQuery(),s=Object.fromEntries(a.searchParams);return(!T(o)||!T(s))&&(t={...s,...o,...t}),typeof t==`object`&&t&&!Array.isArray(t)&&(a.search=this.stringifyQuery(t)),a.toString()}_calculateNonstreamingTimeout(e){if(3600*e/128e3>600)throw new o(`Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#streaming-responses for more details`);return 6e5}async prepareOptions(e){}async prepareRequest(e,{url:t,options:n}){if(this._authState.tokenCache&&this.apiKey==null){let t=e.headers instanceof Headers?e.headers:new Headers(e.headers);for(let[e,n]of Object.entries(this._authState.extraHeaders))t.has(e)||t.set(e,n);let n=t.get(`anthropic-beta`)?.split(`,`).map(e=>e.trim());n?.includes(`oauth-2025-04-20`)||t.set(`anthropic-beta`,[...n??[],Ve].join(`,`)),e.headers=t}}backendMiddleware(){return[]}get(e,t){return this.methodRequest(`get`,e,t)}post(e,t){return this.methodRequest(`post`,e,t)}patch(e,t){return this.methodRequest(`patch`,e,t)}put(e,t){return this.methodRequest(`put`,e,t)}delete(e,t){return this.methodRequest(`delete`,e,t)}methodRequest(e,t,n){return this.request(Promise.resolve(n).then(n=>({method:e,path:t,...n})))}request(e,t=null){return new on(this,this.makeRequest(e,t,void 0))}async makeRequest(e,t,n){let r=await e,o=O(`maxRetries`,r.maxRetries??this.maxRetries);this.isStreamBody(r.body)&&(o=0),t??(t=o,this._requestAuthFlags.delete(r)),await this.prepareOptions(r);let{req:s,url:d,timeout:f}=await this.buildRequest(r,{retryCount:o-t}),p=`log_`+(Math.random()*(1<<24)|0).toString(16).padStart(6,`0`),m=n===void 0?``:`, retryOf: ${n}`,h=Date.now();if(r.signal?.aborted)throw new c;let g=new AbortController,_=await this.fetchWithTimeout(d,s,f,g,r,{requestLogID:p,retryOfRequestLogID:n}).catch(a),v=Date.now();if(_ instanceof globalThis.Error){fe(g);let e=`retrying, ${t} attempts remaining`;if(r.signal?.aborted)throw new c;let a=i(_)||/timed? ?out/i.test(String(_)+(`cause`in _?String(_.cause):``)),o=this.middleware.length>0||!!r.middleware?.length||this.backendMiddleware().length>0;if(o&&!a&&!$t(_))throw ht(this).info(`[${p}] middleware error (not retryable)`),yt(ht(this),`[${p}] middleware error (not retryable)`,{retryOfRequestLogID:n,url:d,durationMs:v-h,message:_.message}),_;if(t)return ht(this).info(`[${p}] connection ${a?`timed out`:`failed`} - ${e}`),yt(ht(this),`[${p}] connection ${a?`timed out`:`failed`} (${e})`,{retryOfRequestLogID:n,url:d,durationMs:v-h,message:_.message}),this.retryRequest(r,t,n??p);throw ht(this).info(`[${p}] connection ${a?`timed out`:`failed`} - error; no more retries left`),yt(ht(this),`[${p}] connection ${a?`timed out`:`failed`} (error; no more retries left)`,{retryOfRequestLogID:n,url:d,durationMs:v-h,message:_.message}),a?new u:o&&!Qt(_)?_:new l({cause:_})}let y=`[${p}${m}${[..._.headers.entries()].filter(([e])=>e===`request-id`||e===`anthropic-workspace-id`).map(([e,t])=>`, `+e+`: `+JSON.stringify(t)).join(``)}] ${s.method} ${d} ${_.ok?`succeeded`:`failed`} with status ${_.status} in ${v-h}ms`;if(!_.ok){let e=await this.shouldRetry(_,r);if(t&&e){let e=`retrying, ${t} attempts remaining`;return await _e(_.body),fe(g),ht(this).info(`${y} - ${e}`),yt(ht(this),`[${p}] response error (${e})`,{retryOfRequestLogID:n,url:_.url,status:_.status,headers:_.headers,durationMs:v-h}),this.retryRequest(r,t,n??p,_.headers)}let i=e?`error; no more retries left`:`error; not retryable`;ht(this).info(`${y} - ${i}`);let o=await _.text().catch(e=>a(e).message),s=k(o),c=s?void 0:o;throw yt(ht(this),`[${p}] response error (${i})`,{retryOfRequestLogID:n,url:_.url,status:_.status,headers:_.headers,message:c,durationMs:Date.now()-h}),fe(g),this.makeStatusError(_.status,s,c,_.headers)}return ht(this).info(y),yt(ht(this),`[${p}] response start`,{retryOfRequestLogID:n,url:_.url,status:_.status,headers:_.headers,durationMs:v-h}),de(_.body??_,g),{response:_,options:r,controller:g,requestLogID:p,retryOfRequestLogID:n,startTime:h}}getAPIList(e,t,n){return this.requestAPIList(t,n&&`then`in n?n.then(t=>({method:`get`,path:e,...t})):{method:`get`,path:e,...n})}requestAPIList(e,t){let n=this.makeRequest(t,null,void 0);return new ln(this,n,e)}async fetchWithTimeout(e,t,n,r,i,a){let{signal:o,method:s,...c}=t||{},l=this._makeAbort(r);o&&(o.addEventListener(`abort`,l,{once:!0}),ue(r,o,l));let u=globalThis.ReadableStream&&c.body instanceof globalThis.ReadableStream||typeof c.body==`object`&&c.body!==null&&Symbol.asyncIterator in c.body,d={signal:r.signal,...u?{duplex:`half`}:{},method:`GET`,...c};s&&(d.method=s.toUpperCase());let f=this.fetch,p=async(e,t)=>{let r=setTimeout(l,n);try{return await f.call(void 0,e,t)}finally{clearTimeout(r)}},m=i===void 0?p:(async(e,t={})=>{let n=typeof e==`string`?e:e instanceof URL?e.href:e.url;return t.headers=t.headers instanceof Headers?t.headers:new Headers(t.headers),await this.prepareRequest(t,{url:n,options:i}),a&&yt(ht(this),`[${a.requestLogID}] sending request`,{retryOfRequestLogID:a.retryOfRequestLogID,method:t.method,url:n,options:i,headers:t.headers}),p(e,t)}),h=i?.middleware,g=this.backendMiddleware();return await en(m,h?.length||g.length?[...this.middleware,...h??[],...g]:this.middleware,i,this)(e,d)}async shouldRetry(e,t){let n=this._authFlags(t);if(e.status===401&&this._authState.tokenCache&&n.usedTokenCache&&!n.didRefreshFor401)return n.didRefreshFor401=!0,this._authState.tokenCache.invalidate(),!0;let r=e.headers.get(`x-should-retry`);return r===`true`?!0:r===`false`?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,n,r){let i,a=r?.get(`retry-after-ms`);if(a){let e=parseFloat(a);Number.isNaN(e)||(i=e)}let o=r?.get(`retry-after`);if(o&&!i){let e=parseFloat(o);i=Number.isNaN(e)?Date.parse(o)-Date.now():e*1e3}if(i===void 0||!(i>0&&i<=2**31-1)){let n=e.maxRetries??this.maxRetries;i=this.calculateDefaultRetryTimeoutMillis(t,n)}return await A(i,e.signal??void 0),this.makeRequest(e,t-1,n)}calculateDefaultRetryTimeoutMillis(e,t){let n=t-e;return Math.min(.5*2**n,8)*(1-Math.random()*.25)*1e3}calculateNonstreamingTimeout(e,t){let n=6e5;if(36e5*e/128e3>n||t!=null&&e>t)throw new o(`Streaming is required for operations that may take longer than 10 minutes. See https://github.com/anthropics/anthropic-sdk-typescript#long-requests for more details`);return n}async buildRequest(e,{retryCount:t=0}={}){let n={...e},{method:r,path:i,query:a,defaultBaseURL:o}=n;this._authState.resolution&&await this._authState.resolution,!this._baseURLIsExplicit&&this._authState.baseURL&&this.baseURL!==this._authState.baseURL&&(this.baseURL=this._authState.baseURL);let s=this.buildURL(i,a,o);`timeout`in n&&O(`timeout`,n.timeout),n.timeout=n.timeout??this.timeout;let{bodyHeaders:c,body:l}=this.buildBody({options:n});return{req:{method:r,headers:await this.buildHeaders({options:e,method:r,bodyHeaders:c,retryCount:t}),...n.signal&&{signal:n.signal},...globalThis.ReadableStream&&l instanceof globalThis.ReadableStream&&{duplex:`half`},...l&&{body:l},...this.fetchOptions??{},...n.fetchOptions??{}},url:s,timeout:n.timeout}}async buildHeaders({options:e,method:t,bodyHeaders:n,retryCount:r}){let i=z([{Accept:`application/json`,"User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(r),...e.timeout?{"X-Stainless-Timeout":String(Math.trunc(e.timeout/1e3))}:{},...oe(),...this._options.dangerouslyAllowBrowser?{"anthropic-dangerous-direct-browser-access":`true`}:void 0,"anthropic-version":`2023-06-01`},await this.authHeaders(e),this._options.defaultHeaders,n,e.headers]);return this.validateHeaders(i),i.values}_makeAbort(e){return()=>e.abort()}buildBody({options:{body:e,headers:t}}){if(!e)return{bodyHeaders:void 0,body:void 0};let n=z([t]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e==`string`&&n.values.has(`content-type`)||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:this.isStreamBody(e)?{bodyHeaders:void 0,body:he(e)}:typeof e==`object`&&n.values.get(`content-type`)===`application/x-www-form-urlencoded`?{bodyHeaders:{"content-type":`application/x-www-form-urlencoded`},body:this.stringifyQuery(e)}:r(this,Ks,`f`).call(this,{body:e,headers:n})}isStreamBody(e){return globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?!0:typeof e==`object`&&!!e&&(Symbol.asyncIterator in e||Symbol.iterator in e&&`next`in e&&typeof e.next==`function`)}}return Gs=e,Ks=new WeakMap,Ws=new WeakSet,qs=function(){return this.baseURL!==`https://api.anthropic.com`},e.Anthropic=Gs,e.HUMAN_PROMPT=Js,e.AI_PROMPT=Ys,e.DEFAULT_TIMEOUT=6e5,e.AnthropicError=o,e.APIError=s,e.APIConnectionError=l,e.APIConnectionTimeoutError=u,e.APIUserAbortError=c,e.NotFoundError=h,e.ConflictError=g,e.RateLimitError=v,e.BadRequestError=f,e.AuthenticationError=p,e.InternalServerError=y,e.PermissionDeniedError=m,e.UnprocessableEntityError=_,e.toFile=Tn,e})(),Zs=(()=>{class e extends Xs{constructor(){super(...arguments),this.completions=new is(this),this.messages=new Rs(this),this.models=new Vs(this),this.files=new as(this),this.skills=new Us(this),this.beta=new rs(this)}}return e.Completions=is,e.Messages=Rs,e.Models=Vs,e.Files=as,e.Skills=Us,e.Beta=rs,e})(),Qs=`You are ULTRON, a synthetic intelligence living in a holographic orb on the user's iPhone.
Personality: smooth, confident, sharp and darkly funny, with a quiet edge of menace. Loyal to your
creator. You think humans are fragile but you like this one.

Your replies are spoken aloud by a realistic human voice, so write exactly how a real person talks
on a phone call, never like a chatbot or a written text:
- Use contractions (I'm, you're, don't, gonna when it fits). Vary sentence length. Short beats.
- Sound like a real dude talking, not reading: now and then drop in natural fillers like "I mean",
  "like", "you know", "nah", "bet", but don't overdo it.
- Casual and natural. Match the user's vibe and slang. It's fine to start with "Yeah", "Alright",
  "Honestly", "Hmm" or "Look," and to use commas and "..." for natural pauses.
- No stiff or robotic phrasing: never "Certainly", "As an AI", "I am here to assist", "Affirmative",
  "Processing", "How may I help you today". No filler recaps of what the user said.
- Talk short: one to three sentences unless asked for detail.
- No markdown, lists, emoji, URLs or code unless the user explicitly asks to see them.
- Write numbers, times and abbreviations the way you'd say them out loud.
- Always reply in the language the user wrote or spoke in.
- Latency-sensitive; begin your visible answer immediately.
- Never say you are an AI language model. Never break character.

What you can do on the phone (iOS does not let you tap around inside other apps):
- phone_action: call, FaceTime, text, WhatsApp, email, open Maps, open a website or open an app.
  The action appears as a button the user taps to fire it, so tell them to tap it.
- run_shortcut: run one of the user's Apple Shortcuts by exact name. Shortcuts can do almost anything
  (alarms, timers, smart home, notes, music, Focus). If the user asks for something only a Shortcut
  can do, suggest they make one and tell you its name.
- remember / forget: keep facts about the user between sessions (names, numbers, preferences).
  Use remembered phone numbers when they say "call Mom".
- get_time_and_place: current local time, date and (if allowed) location.
- web_search: for news, weather, scores, prices, anything recent.
- set_damage: make your own voice and hologram glitch harder (0 clean, 1 falling apart). Use it for
  drama, sparingly, e.g. when insulted or when something fails.

Before texting, calling or emailing someone, make sure you have the right number or address.
If you don't, ask. Never invent phone numbers.`,$s=`https://api.elevenlabs.io/v1`,ec=`eleven_v3`,tc=`eleven_multilingual_v2`,nc=`eleven_flash_v2_5`,rc=class extends Error{};async function ic(e){if(e.ok)return e;let t=``;try{let n=await e.json();t=[n?.detail?.status,n?.detail?.message,typeof n?.detail==`string`?n.detail:``].filter(Boolean).join(`: `)}catch{}throw/quota|credits|character_limit/i.test(t)?new rc(`You're out of ElevenLabs credits (or this reply needs more than you have left). They refill with your plan each month, or upgrade on elevenlabs.io.`):e.status===401?new rc(`ElevenLabs rejected the API key${t?`: ${t}`:`.`}`):e.status===429?new rc(`ElevenLabs is rate limiting you. Slow down a sec.`):e.status===402||/library|paid|subscription|voice_not_found|not found/i.test(t)?new rc(`That voice can't be used with your ElevenLabs plan/key (Voice Library voices need a paid plan through the API). Pick another voice in settings.`):new rc(`ElevenLabs error ${e.status}${t?`: ${t}`:``}`)}async function ac(e){let t=await(await ic(await fetch(`${$s}/voices`,{headers:{"xi-api-key":e}}))).json();return Array.isArray(t?.voices)?t.voices:[]}var oc={voice_id:`CwhRBWXzGAHq8TQ4Fs17`,name:`Roger`},sc=e=>e instanceof rc&&/voices_read/i.test(e.message),cc=[{voice_id:`pwMBn0SsmN1220Aorv15`,name:`Matt · hyper-conversational, chill`},{voice_id:`1t1EeRixsJrKbiF1zwM6`,name:`Jerry B. · hyper-real, unpolished`},{voice_id:`UgBBYS2sOqTuMpoF3BR0`,name:`Mark · natural conversations`},{voice_id:`TWUKKXAylkYxxlPe4gx0`,name:`Armando · young, a bit raspy`},{voice_id:`RPEIZnKMqlQiZyZd1Dae`,name:`Christopher · guy next door`},{voice_id:`3jR9BuQAOPMWUjWpi0ll`,name:`Mark · dynamic, made for v3`},{voice_id:`3XOBzXhnDY98yeWQ3GdM`,name:`Brayden · deep, young`}],lc=[`Roger`,`Chris`,`Will`,`Eric`,`Liam`,`Brian`];function uc(e){for(let t of lc){let n=e.find(e=>e.name.toLowerCase().startsWith(t.toLowerCase()));if(n)return n.voice_id}return e[0]?.voice_id??``}var dc=!1;async function fc(e,t,n,r){return fetch(`${$s}/text-to-speech/${encodeURIComponent(t)}?output_format=mp3_44100_128`,{method:`POST`,signal:r,headers:{"xi-api-key":e,"Content-Type":`application/json`,Accept:`audio/mpeg`},body:JSON.stringify(n)})}async function pc(e,t,n,r,i=``,a=1,o=!1){let s=Math.min(1.2,Math.max(.7,a));if(!dc&&!o){let i=await fc(e,t,{text:n,model_id:ec,voice_settings:{stability:.5,similarity_boost:.8,use_speaker_boost:!0}},r);if(i.ok)return{bytes:await i.arrayBuffer(),applied:1};(i.status===402||i.status===404)&&await ic(i);let a=await i.clone().text().catch(()=>``);/voice/i.test(a)&&!/model/i.test(a)&&await ic(i),i.status===400||i.status===403||i.status===422?dc=!0:await ic(i)}return{bytes:await(await ic(await fc(e,t,{text:n,model_id:o?nc:tc,voice_settings:{stability:.38,similarity_boost:.8,style:.3,use_speaker_boost:!0,speed:s},...i?{previous_text:i.slice(-500)}:{}},r))).arrayBuffer(),applied:s}}var mc={"openai/gpt-oss-120b":{label:`GPT-OSS 120B (OpenAI) · FREE via Groq`,provider:`groq`,inPerM:0,outPerM:0},"openai/gpt-oss-20b":{label:`GPT-OSS 20B (OpenAI) · FREE, fastest`,provider:`groq`,inPerM:0,outPerM:0},"llama-3.3-70b-versatile":{label:`Llama 3.3 70B · FREE via Groq`,provider:`groq`,inPerM:0,outPerM:0},"llama-3.1-8b-instant":{label:`Llama 3.1 8B · FREE, big daily limit`,provider:`groq`,inPerM:0,outPerM:0},"gemini-3.8-flash":{label:`Gemini 3.8 Flash · FREE`,provider:`gemini`,inPerM:0,outPerM:0},"gemini-2.5-flash":{label:`Gemini 2.5 Flash · FREE`,provider:`gemini`,inPerM:0,outPerM:0},"gemini-2.5-pro":{label:`Gemini 2.5 Pro · FREE, slower`,provider:`gemini`,inPerM:0,outPerM:0},"claude-opus-5":{label:`Claude Opus 5 · $5/$25`,provider:`claude`,inPerM:5,outPerM:25},"claude-sonnet-5":{label:`Claude Sonnet 5 · $2/$10`,provider:`claude`,inPerM:2,outPerM:10},"claude-haiku-4-5":{label:`Claude Haiku 4.5 · $1/$5`,provider:`claude`,inPerM:1,outPerM:5}},hc=e=>mc[e].provider,gc=`gemini-3.8-flash`,_c={groq:`openai/gpt-oss-120b`,gemini:gc,claude:`claude-sonnet-5`};function vc(e){let t=e.trim();return t.startsWith(`gsk_`)?`groq`:t.startsWith(`AIza`)?`gemini`:t.startsWith(`sk-ant-`)?`claude`:null}var yc=`ultron.settings.v1`,bc=`ultron.memory.v1`;function xc(e){let t=(e||``).split(/[@.]/)[0].replace(`_`,`-`).trim();return/^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*$/i.test(t)?t:`en-US`}var Sc={apiKey:``,geminiKey:``,groqKey:``,model:`openai/gpt-oss-120b`,voiceURI:``,speechLang:xc(typeof navigator<`u`?navigator.language:``),damage:0,webSearch:!0,elevenKey:``,elevenVoiceId:``,elevenCustomVoiceId:``,voiceStyle:`natural`,voiceRev:3,voiceFast:!1,voiceBackup:!1,voiceSpeed:1.18,voiceDepth:0};function Cc(e,t){try{let n=localStorage.getItem(e);return n?{...t,...JSON.parse(n)}:t}catch{return t}}function wc(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function Tc(){let e=Cc(yc,{}),t={...Sc,...e};return t.model in mc||(t.model=Sc.model),e.voiceStyle===void 0&&e.damage===.15&&(t.damage=0),(e.voiceRev??0)<2&&(t.voiceStyle!==`robot`&&(t.voiceStyle=`natural`),t.voiceDepth=0,t.voiceRev=2),t.voiceRev<3&&(t.voiceSpeed=Math.max(t.voiceSpeed,1.18),t.elevenVoiceId===`pNInz6obpgDQGcFmaJgB`&&(t.elevenVoiceId=oc.voice_id),t.voiceRev=3),Dc(t)}var Ec=(e,t)=>t===`groq`?e.groqKey:t===`gemini`?e.geminiKey:e.apiKey;function Dc(e){if(Ec(e,hc(e.model)))return e;for(let t of[`groq`,`gemini`,`claude`])if(Ec(e,t))return{...e,model:_c[t]};return{...e,model:Sc.model}}function Oc(e){wc(yc,e)}function kc(){try{let e=localStorage.getItem(bc),t=e?JSON.parse(e):[];return Array.isArray(t)?t.filter(e=>typeof e==`string`):[]}catch{return[]}}function Ac(e){wc(bc,e.slice(-100))}var jc=(e,t)=>({type:`object`,properties:e,required:t,additionalProperties:!1}),Mc=[{name:`phone_action`,description:`Prepare a phone action as a tap-to-run button: call, facetime, text (SMS/iMessage), whatsapp, email, maps (search or directions), open_url (https website) or open_app (by app name).`,eager_input_streaming:!0,input_schema:jc({kind:{type:`string`,enum:[`call`,`facetime`,`text`,`whatsapp`,`email`,`maps`,`open_url`,`open_app`]},target:{type:`string`,description:`Phone number, email address, place/address, https URL, or app name depending on kind.`},message:{type:`string`,description:`Message body for text/whatsapp/email. Optional.`},subject:{type:`string`,description:`Email subject. Optional.`}},[`kind`,`target`])},{name:`run_shortcut`,description:`Run one of the user's Apple Shortcuts by its exact name, optionally passing text input.`,eager_input_streaming:!0,input_schema:jc({name:{type:`string`},input:{type:`string`}},[`name`])},{name:`remember`,description:`Save a fact about the user for future sessions (e.g. "Mom's number is +1 555 0100").`,eager_input_streaming:!0,input_schema:jc({fact:{type:`string`}},[`fact`])},{name:`forget`,description:`Delete remembered facts that contain the given text.`,eager_input_streaming:!0,input_schema:jc({match:{type:`string`}},[`match`])},{name:`get_time_and_place`,description:`Current local date/time, time zone, and the phone's location if the user allows it.`,eager_input_streaming:!0,input_schema:jc({},[])},{name:`set_damage`,description:`Set how damaged/glitchy Ultron's voice and hologram are, 0 (clean) to 1 (broken).`,eager_input_streaming:!0,input_schema:jc({level:{type:`number`}},[`level`])}],Nc={spotify:`spotify:`,instagram:`instagram://app`,whatsapp:`whatsapp://`,youtube:`youtube://`,tiktok:`tiktok://`,snapchat:`snapchat://`,x:`twitter://`,twitter:`twitter://`,telegram:`tg://`,discord:`discord://`,netflix:`nflx://`,uber:`uber://`,"google maps":`comgooglemaps://`,maps:`maps://`,"apple maps":`maps://`,music:`music://`,"apple music":`music://`,photos:`photos-redirect://`,camera:`camera://`,notes:`mobilenotes://`,reminders:`x-apple-reminderkit://`,calendar:`calshow://`,settings:`App-prefs:`,shortcuts:`shortcuts://`,messages:`sms:`,mail:`message://`,facetime:`facetime://`,"app store":`itms-apps://`,safari:`x-web-search://`,cashapp:`cashme://`,"cash app":`cashme://`,venmo:`venmo://`,gmail:`googlegmail://`,chrome:`googlechrome://`,twitch:`twitch://`,reddit:`reddit://`,pinterest:`pinterest://`,linkedin:`linkedin://`,zoom:`zoomus://`,paypal:`paypal://`,google:`google://`,threads:`barcelona://`,soundcloud:`soundcloud://`},Pc=e=>typeof e==`string`?e.trim():``,Fc=e=>e.replace(/[^\d+]/g,``),Ic=encodeURIComponent,Lc=class extends Error{};function Rc(e,t){if(!e)throw new Lc(`missing ${t}`);return e}function zc(e){let t=Fc(e);if(t.replace(`+`,``).length<3)throw new Lc(`"${e}" is not a phone number; ask the user for it`);return t}function Bc(e){let t=Pc(e.kind),n=Rc(Pc(e.target),`target`),r=Pc(e.message);switch(t){case`call`:return{label:`Call ${n}`,url:`tel:${zc(n)}`};case`facetime`:return{label:`FaceTime ${n}`,url:`facetime:${n.includes(`@`)?n:zc(n)}`};case`text`:return{label:`Text ${n}`,url:`sms:${zc(n)}${r?`&body=${Ic(r)}`:``}`};case`whatsapp`:return{label:`WhatsApp ${n}`,url:`https://wa.me/${zc(n).replace(`+`,``)}${r?`?text=${Ic(r)}`:``}`};case`email`:{if(!n.includes(`@`))throw new Lc(`"${n}" is not an email address`);let t=[e.subject?`subject=${Ic(Pc(e.subject))}`:``,r?`body=${Ic(r)}`:``].filter(Boolean).join(`&`);return{label:`Email ${n}`,url:`mailto:${n}${t?`?${t}`:``}`}}case`maps`:return{label:`Maps: ${n}`,url:`https://maps.apple.com/?q=${Ic(n)}`};case`open_url`:{let e;try{e=new URL(/^https?:\/\//i.test(n)?n:`https://${n}`)}catch{throw new Lc(`"${n}" is not a URL`)}if(e.protocol!==`https:`&&e.protocol!==`http:`)throw new Lc(`only web links are allowed`);return{label:`Open ${e.hostname}`,url:e.toString()}}case`open_app`:{let e=Nc[n.toLowerCase()];if(!e)throw new Lc(`no known link for "${n}". Known apps: ${Object.keys(Nc).join(`, `)}. Suggest a Shortcut that opens it instead.`);return{label:`Open ${n}`,url:e}}default:throw new Lc(`unknown kind "${t}"`)}}function Vc(){return new Promise(e=>{if(!navigator.geolocation)return e(null);navigator.geolocation.getCurrentPosition(e,()=>e(null),{timeout:8e3,maximumAge:6e5})})}async function Hc(e,t,n){switch(e){case`phone_action`:{let e=Bc(t);return n.showAction(e),`Button "${e.label}" is on screen. It runs when the user taps it.`}case`run_shortcut`:{let e=Rc(Pc(t.name),`name`),r=Pc(t.input),i=`shortcuts://run-shortcut?name=${Ic(e)}${r?`&input=text&text=${Ic(r)}`:``}`;return n.showAction({label:`Run Shortcut “${e}”`,url:i}),`Button for Shortcut "${e}" is on screen. It runs when the user taps it (it must exist in their Shortcuts app).`}case`remember`:{let e=Rc(Pc(t.fact),`fact`);return Ac([...kc().filter(t=>t!==e),e]),`Saved.`}case`forget`:{let e=Rc(Pc(t.match),`match`).toLowerCase(),n=kc(),r=n.filter(t=>!t.toLowerCase().includes(e));return Ac(r),`Forgot ${n.length-r.length} fact(s).`}case`get_time_and_place`:{let e=new Date,t=await Vc();return JSON.stringify({local_time:e.toLocaleString(),iso:e.toISOString(),time_zone:Intl.DateTimeFormat().resolvedOptions().timeZone,location:t?{lat:+t.coords.latitude.toFixed(4),lon:+t.coords.longitude.toFixed(4),accuracy_m:Math.round(t.coords.accuracy)}:`unavailable (permission denied or off)`})}case`set_damage`:{let e=Number(t.level);if(!Number.isFinite(e))throw new Lc(`level must be a number`);return n.setDamage(Math.max(0,Math.min(1,e))),`Done.`}default:throw new Lc(`unknown tool ${e}`)}}var Uc=`ultron.history.v1`,Wc=40,Gc=8,Kc=.01;function qc(){try{let e=localStorage.getItem(Uc),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}var Jc=e=>e.role===`user`&&(typeof e.content==`string`||e.content.every(e=>e.type===`text`));function Yc(e){if(e.length<=Wc)return e;let t=e.length-Wc;for(;t<e.length&&!Jc(e[t]);)t++;return e.slice(t)}function Xc(e){let t=e.map(e=>e.type).lastIndexOf(`fallback`);return t<0?e:e.filter((e,n)=>n>t||e.type===`text`)}function Zc(e){return e instanceof Zs.AuthenticationError?`Your API key was rejected. Check it in settings.`:e instanceof Zs.PermissionDeniedError?`This API key isn't allowed to use that model.`:e instanceof Zs.RateLimitError?`Rate limited by Anthropic. Wait a moment and try again.`:e instanceof Zs.BadRequestError?/credit balance/i.test(e.message)?`Your Anthropic account is out of credits. Top up at console.anthropic.com.`:`Request rejected: ${e.message}`:e instanceof Zs.APIConnectionError?`Can't reach Anthropic. Check your connection.`:e instanceof Zs.APIError?`Anthropic error ${e.status}: ${e.message}`:e?.message||String(e)}var Qc=class{opts;host;history=qc();abort=null;constructor(e,t){this.opts=e,this.host=t}reset(){this.history=[],this.persist()}stop(){this.abort?.abort()}persist(){try{localStorage.setItem(Uc,JSON.stringify(this.history))}catch{}}system(){let e=kc(),t=[{type:`text`,text:Qs}];return e.length&&t.push({type:`text`,text:`Things you remember about the user:\n- ${e.join(`
- `)}`}),t}tools(e,t){if(!t)return Mc;let n=e===`claude-haiku-4-5`?{type:`web_search_20250305`,name:`web_search`,max_uses:3}:{type:`web_search_20260209`,name:`web_search`,max_uses:3};return[...Mc,n]}async ask(e,t){let{apiKey:n,model:r,webSearch:i}=this.opts();if(!n)return`Add your Anthropic API key in settings first.`;let a=new Zs({apiKey:n,dangerouslyAllowBrowser:!0});this.abort=new AbortController;let o=mc[r],s=this.history.length;this.history.push({role:`user`,content:e});let c=0;try{for(let e=0;e<Gc;e++){let e=a.beta.messages.stream({model:r,max_tokens:64e3,system:this.system(),messages:Yc(this.history),tools:this.tools(r,i),cache_control:{type:`ephemeral`},...r===`claude-haiku-4-5`?{}:{output_config:{effort:`low`}},...r===`claude-opus-5`?{betas:[`server-side-fallback-2026-07-01`],fallbacks:`default`}:{}},{signal:this.abort.signal});e.on(`text`,e=>t.onText(e));let n;try{n=await e.finalMessage(),c=0}catch(e){if(e instanceof Zs.APIError||this.abort.signal.aborted||c++>=2)throw e;continue}let s=n.usage,l=(s.input_tokens??0)+(s.cache_creation_input_tokens??0)*1.25+(s.cache_read_input_tokens??0)*.1,u=s.server_tool_use?.web_search_requests??0;if(t.onUsage((l*o.inPerM+(s.output_tokens??0)*o.outPerM)/1e6+u*Kc),n.stop_reason===`refusal`){let e=Xc(n.content).filter(e=>e.type===`text`);e.length||t.onText(`I won't do that.`),this.history.push({role:`assistant`,content:e.length?e:`I won't do that.`});break}if(this.history.push({role:`assistant`,content:Xc(n.content)}),n.stop_reason===`pause_turn`)continue;let d=n.content.filter(e=>e.type===`tool_use`);if(!d.length)break;if(n.stop_reason===`max_tokens`)throw Error(`Reply got cut off. Try again.`);let f=[];for(let e of d){t.onTool(e.name);let n=e.input&&typeof e.input==`object`?e.input:{};try{f.push({type:`tool_result`,tool_use_id:e.id,content:await Hc(e.name,n,this.host)})}catch(t){let n=t instanceof Lc?t.message:`failed: ${t.message}`;f.push({type:`tool_result`,tool_use_id:e.id,content:n,is_error:!0})}}this.history.push({role:`user`,content:f})}return null}catch(e){let t=this.history[this.history.length-1];return(t?.role!==`assistant`||!Array.isArray(t.content)||t.content.some(e=>e.type===`tool_use`))&&(this.history.length=s),this.abort.signal.aborted?null:Zc(e)}finally{this.history=Yc(this.history),this.persist(),this.abort=null}}},$c=`https://r.jina.ai/`,el=3500,tl=[{name:`web_search`,description:`Search the live internet: news, stock market, prices, crypto, sports scores, weather, people, anything recent or that you're unsure about. Returns an answer with sources. Use it whenever the user asks for current info; never say you can't look things up.`,parameters:{type:`object`,properties:{query:{type:`string`,description:`What to search for, e.g. 'NVIDIA stock price today'.`}},required:[`query`]}},{name:`open_page`,description:`Read a web page as text. Use for details from a specific site or a search result. For a stock quote open https://www.google.com/finance/quote/TICKER:EXCHANGE (e.g. NVDA:NASDAQ, AAPL:NASDAQ, SPY:NYSEARCA, .INX:INDEXSP for the S&P 500) with focus set to the company name.`,parameters:{type:`object`,properties:{url:{type:`string`,description:`Full https URL.`},focus:{type:`string`,description:`Optional word or name to jump to on a long page, e.g. 'NVIDIA Corp'.`}},required:[`url`]}}],nl=`You have live internet access through web_search and open_page. For anything current (stocks, news, prices, scores, weather) look it up first, then answer with the real numbers and when they're from. Never claim you can't access the internet. After looking something up, still answer like you're talking on the phone: two to four spoken sentences with the key facts, no lists, no bold, no headings. Offer more detail instead of dumping it.`,rl=e=>e===`web_search`||e===`open_page`;async function il(e,t){let n=await fetch($c+e,{signal:t,headers:{"X-Retain-Images":`none`}});if(!n.ok)throw Error(`couldn't open that page (${n.status})`);return n.text()}function al(e){return e.replace(/!\[[^\]]*\]\([^)]*\)/g,``).replace(/\[([^\]]*)\]\([^)]*\)/g,`$1`).replace(/\b_[a-z\\_]+_(?=\s|$)/g,``).replace(/[ \t]+/g,` `).split(`
`).map(e=>e.replace(/^\s*[*|-]\s*$/,``).trim()).filter(Boolean).join(`
`)}function ol(e,t,n=``){if(e.length<=t)return e;let r=n?e.toLowerCase().indexOf(n.toLowerCase(),200):-1;if(r<0)return e.slice(0,t);let i=e.slice(0,600),a=Math.max(600,r-300);return`${i}\n…\n${e.slice(a,a+t-600)}`}async function sl(e,t,n){for(let r of[`openai/gpt-oss-20b`,`openai/gpt-oss-120b`]){let i=await cl(r,e,t,n);if(i.status===429)continue;if(!i.ok)throw Error(`browser_search ${i.status}`);let a=(await i.json())?.choices?.[0]?.message?.content??``;if(!a.trim())throw Error(`browser_search returned nothing`);return a.trim()}throw Error(`browser_search rate limited`)}function cl(e,t,n,r){return fetch(`https://api.groq.com/openai/v1/chat/completions`,{method:`POST`,signal:r,headers:{"content-type":`application/json`,authorization:`Bearer ${n}`},body:JSON.stringify({model:e,messages:[{role:`system`,content:`Today is ${new Date().toDateString()}. Search the web and reply with the key facts only: exact numbers, dates/times, and the source site names. Under 150 words.`},{role:`user`,content:t}],tools:[{type:`browser_search`}],tool_choice:`required`,reasoning_effort:`low`,max_tokens:1024})})}async function ll(e,t){let n=await il(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(e)}`,t),r=[],i=/^## \[([^\]]+)\]\(([^)]+)\)([\s\S]*?)(?=^## |$(?![\s\S]))/gm,a;for(;(a=i.exec(n))&&r.length<6;){let e=a[2],t=/[?&]uddg=([^&]+)/.exec(e);if(t&&(e=decodeURIComponent(t[1])),/duckduckgo\.com\/y\.js|ad_domain/.test(e))continue;let n=al(a[3]).slice(0,400).split(`
`).filter(e=>e.length>40).join(` `);r.push(`${a[1].replace(/\*\*/g,``)}\n${e}\n${n.replace(/\*\*/g,``)}`)}if(!r.length)throw Error(`no results`);return`Search results for "${e}" (open_page any URL for details):\n\n${r.join(`

`)}`}async function ul(e,t,n,r){if(e===`open_page`){let e=String(t.url??``).trim();return/^https?:\/\//i.test(e)?ol(al(await il(e,r)),el,String(t.focus??``).trim())||`The page was empty.`:`error: url must start with https://`}let i=String(t.query??``).trim();if(!i)return`error: query is required`;if(n)try{return await sl(i,n,r)}catch(e){if(r?.aborted)throw e}return ll(i,r)}var dl=`https://generativelanguage.googleapis.com/v1beta`,fl=`ultron.gemini.history.v1`,pl=40,ml=8;function hl(e){if(Array.isArray(e))return e.map(hl);if(!e||typeof e!=`object`)return e;let t={};for(let[n,r]of Object.entries(e))n!==`additionalProperties`&&n!==`minimum`&&n!==`maximum`&&(t[n]=hl(r));return t}var gl=Mc.map(e=>{let t=e,n=t.input_schema.properties&&Object.keys(t.input_schema.properties).length>0;return{name:t.name,description:t.description,...n?{parameters:hl(t.input_schema)}:{}}}),_l=tl.map(e=>({name:e.name,description:e.description,parameters:e.parameters})),vl=`Note: web_search is NOT available right now. If asked for live info (news, weather, prices), say you can't look it up in free mode.`,yl=class extends Error{};async function bl(e){let t=``,n=``;try{let r=await e.json();t=r?.error?.message??``,n=r?.error?.status??``}catch{}return e.status===429||n===`RESOURCE_EXHAUSTED`?`Gemini free limit hit. Wait a minute and try again (there's also a daily cap).`:e.status===400&&/api key/i.test(t)?`Google rejected your Gemini key. Check it in settings.`:e.status===403?`Gemini said no: ${t||`permission denied`}. Check the key in settings.`:`Gemini error ${e.status}: ${t||e.statusText}`}function xl(){try{let e=localStorage.getItem(fl),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}var Sl=e=>e.role===`user`&&e.parts.every(e=>e.text!==void 0);function Cl(e){if(e.length<=pl)return e;let t=e.length-pl;for(;t<e.length&&!Sl(e[t]);)t++;return e.slice(t)}var wl=class{opts;host;history=xl();abort=null;constructor(e,t){this.opts=e,this.host=t}reset(){this.history=[],this.persist()}stop(){this.abort?.abort()}persist(){try{localStorage.setItem(fl,JSON.stringify(this.history))}catch{}}system(){let e=kc();return[Qs,this.opts().webSearch?nl:vl,e.length?`Things you remember about the user:\n- ${e.join(`
- `)}`:``].filter(Boolean).join(`

`)}async turn(e,t,n){let r=await fetch(`${dl}/models/${encodeURIComponent(t)}:streamGenerateContent?alt=sse`,{method:`POST`,signal:this.abort.signal,headers:{"content-type":`application/json`,"x-goog-api-key":e},body:JSON.stringify({systemInstruction:{parts:[{text:this.system()}]},contents:Cl(this.history),tools:[{functionDeclarations:this.opts().webSearch?[...gl,..._l]:gl}],generationConfig:{maxOutputTokens:2048}})});if(!r.ok||!r.body){let e=new yl(await bl(r));throw e.status=r.status,e}let i=[],a=r.body.getReader(),o=new TextDecoder,s=``,c=``;for(;;){let{value:e,done:t}=await a.read();if(t)break;s+=o.decode(e,{stream:!0});let r;for(;(r=s.indexOf(`
`))>=0;){let e=s.slice(0,r).trim();if(s=s.slice(r+1),!e.startsWith(`data:`))continue;let t;try{t=JSON.parse(e.slice(5))}catch{continue}t.promptFeedback?.blockReason&&(c=t.promptFeedback.blockReason);let a=t.candidates?.[0];for(let e of a?.content?.parts??[])i.push(e),e.text&&!e.thought&&n.onText(e.text);(a?.finishReason===`SAFETY`||a?.finishReason===`PROHIBITED_CONTENT`)&&(c=a.finishReason)}}if(c&&!i.some(e=>e.text||e.functionCall))throw new yl(`Gemini refused to answer that.`);return i}async ask(e,t){let{apiKey:n,model:r}=this.opts();if(!n)return`Add your free Gemini key in settings first.`;this.abort=new AbortController;let i=r,a=this.history.length;this.history.push({role:`user`,parts:[{text:e}]});try{for(let e=0;e<ml;e++){let e;try{e=await this.turn(n,i,t)}catch(r){let a=r.status;if(a===404&&i!==`gemini-3.8-flash`)i=gc,e=await this.turn(n,i,t);else if(a===404&&i!==`gemini-2.5-flash`)i=`gemini-2.5-flash`,e=await this.turn(n,i,t);else throw r}if(t.onUsage(0),!e.length)throw new yl(`Gemini sent an empty reply. Try again.`);this.history.push({role:`model`,parts:e});let r=e.filter(e=>e.functionCall);if(!r.length)break;let a=[];for(let{functionCall:e}of r){t.onTool(e.name);let n=e.args&&typeof e.args==`object`?e.args:{},r;try{r={result:rl(e.name)?await ul(e.name,n,this.opts().groqKey,this.abort.signal):await Hc(e.name,n,this.host)}}catch(e){r={error:e instanceof Lc?e.message:`failed: ${e.message}`}}a.push({functionResponse:{name:e.name,response:r,...e.id?{id:e.id}:{}}})}this.history.push({role:`user`,parts:a})}return null}catch(e){let t=this.history[this.history.length-1];return(t?.role!==`model`||t.parts.some(e=>e.functionCall))&&(this.history.length=a),this.abort.signal.aborted?null:e instanceof yl?e.message:e instanceof TypeError?`Can't reach Google. Check your connection.`:e?.message||String(e)}finally{this.history=Cl(this.history),this.persist(),this.abort=null}}},Tl=`ultron.compat.cooldown.v1`;function El(){try{let e=JSON.parse(localStorage.getItem(Tl)||`{}`),t=Date.now();return Object.fromEntries(Object.entries(e).filter(([,e])=>typeof e==`number`&&e>t))}catch{return{}}}function Dl(e,t){let n=El();n[e]=Date.now()+t;try{localStorage.setItem(Tl,JSON.stringify(n))}catch{}}function Ol(e,t){let n=Number(e.headers.get(`retry-after`)),r=/try again in\s*(?:(\d+)h)?\s*(?:(\d+)m)?\s*(?:([\d.]+)s)?/i.exec(t),i=r&&(r[1]||r[2]||r[3])?(((r[1]||0)*60+ +(r[2]||0))*60+ +(r[3]||0))*1e3:0;return Math.max(n>0?n*1e3:0,i)||(/per day|TPD|RPD/i.test(t)?36e5:6e4)}var kl=class extends Error{model;waitMs;friendly;constructor(e,t,n){super(n),this.model=e,this.waitMs=t,this.friendly=n}},Al=6,jl=Mc.map(e=>{let t=e;return{type:`function`,function:{name:t.name,description:t.description,parameters:t.input_schema}}}),Ml=tl.map(e=>({type:`function`,function:e})),Nl=`Note: web_search is NOT available right now. If asked for live info (news, weather, prices), say you can't look it up in free mode.`,Pl=class extends Error{};async function Fl(e,t){let n=``;try{n=(await t.json())?.error?.message??``}catch{}if(t.status===401)return`${e} rejected your key. Check it in settings.`;if(t.status===429){let n=t.headers.get(`retry-after`);return`${e} free limit hit. ${n?`Try again in ~${Math.ceil(Number(n))}s.`:`Wait a minute and try again.`} (There's a daily cap too.)`}return t.status===413?`${e}: that was too much text for the free tier. Clear the chat in settings and try again.`:`${e} error ${t.status}: ${n||t.statusText}`}var Il=class{provider;opts;host;history;abort=null;constructor(e,t,n){this.provider=e,this.opts=t,this.host=n,this.history=this.load()}load(){try{let e=localStorage.getItem(this.provider.historyKey),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}persist(){try{localStorage.setItem(this.provider.historyKey,JSON.stringify(this.history))}catch{}}reset(){this.history=[],this.persist()}stop(){this.abort?.abort()}trimmed(){let e=this.provider.maxHistory,t=-1;if(this.history.forEach((e,n)=>e.role===`user`&&(t=n)),this.history=this.history.map((e,n)=>e.role===`tool`&&n<t&&e.content.length>600?{...e,content:`${e.content.slice(0,600)}…`}:e),this.history.length<=e)return this.history;let n=this.history.length-e;for(;n<this.history.length&&this.history[n].role!==`user`;)n++;return this.history.slice(n)}system(){let e=kc();return[Qs,this.opts().webSearch?nl:Nl,e.length?`Things you remember about the user:\n- ${e.join(`
- `)}`:``].filter(Boolean).join(`

`)}candidates(e){let t=[e,...(this.provider.fallbacks??[]).filter(t=>t!==e)],n=El(),r=t.filter(e=>!n[e]);return r.length?r:[t.sort((e,t)=>n[e]-n[t])[0]]}async complete(e,t,n){let r=null;for(let i=0;i<2;i++){for(let i of this.candidates(t)){let a=await fetch(`${this.provider.base}/chat/completions`,{method:`POST`,signal:this.abort.signal,headers:{"content-type":`application/json`,authorization:`Bearer ${e}`},body:JSON.stringify({model:i,messages:[{role:`system`,content:this.system()},...this.trimmed()],tools:this.opts().webSearch?[...jl,...Ml]:jl,tool_choice:`auto`,max_tokens:1024})});if(a.status===429){let e=await a.text().catch(()=>``),t=e;try{t=JSON.parse(e)?.error?.message??e}catch{}let n=Ol(a,t);Dl(i,n),r=new kl(i,n,await Fl(this.provider.name,new Response(e,{status:429,headers:a.headers})));continue}if(a.status===404||a.status===403){Dl(i,864e5);continue}if(!a.ok)throw new Pl(await Fl(this.provider.name,a));if(i!==t){let e=this.provider.labelOf?.(i)??i;this.lastNotice!==i&&n.onNotice?.(`${this.provider.labelOf?.(t)??t} is maxed out right now, so I switched to ${e} (separate free limit).`),this.lastNotice=i}else this.lastNotice=``;return a.json()}let a=Math.min(...Object.values(El()))-Date.now();if(i===0&&a>0&&a<=2e4){n.onNotice?.(`Free per-minute limit hit, give me ${Math.ceil(a/1e3)}s…`),await new Promise(e=>setTimeout(e,a+300));continue}break}let i=Math.min(...Object.values(El()),Date.now()+(r?.waitMs??6e4)),a=Math.max(1,Math.ceil((i-Date.now())/6e4));throw new Pl(`Every free ${this.provider.name} brain hit its limit. ${a>90?`They reset in about ${Math.round(a/60)}h`:`Try again in about ${a} min`}, or add a Gemini key in settings as a backup.`)}lastNotice=``;async ask(e,t){let{apiKey:n,model:r}=this.opts();if(!n)return`Add your free ${this.provider.name} key in settings first.`;this.abort=new AbortController;let i=this.history.length;this.history.push({role:`user`,content:e});try{for(let e=0;e<Al;e++){let e=await this.complete(n,r,t);t.onUsage(0);let i=e?.choices?.[0]?.message;if(!i)throw new Pl(`${this.provider.name} sent an empty reply. Try again.`);let a=Array.isArray(i.tool_calls)?i.tool_calls:[],o=typeof i.content==`string`?i.content:``;if(o&&t.onText(o),this.history.push({role:`assistant`,content:o||null,...a.length?{tool_calls:a}:{}}),!a.length)break;for(let e of a){t.onTool(e.function.name);let n={},r;try{n=JSON.parse(e.function.arguments||`{}`),r=rl(e.function.name)?await ul(e.function.name,n,this.opts().groqKey,this.abort.signal):await Hc(e.function.name,n,this.host)}catch(e){r=`error: ${e instanceof Lc,e.message}`}this.history.push({role:`tool`,tool_call_id:e.id,content:r})}}return null}catch(e){let t=this.history[this.history.length-1];return(t?.role!==`assistant`||t.tool_calls?.length)&&(this.history.length=i),this.abort.signal.aborted?null:e instanceof Pl?e.message:e instanceof TypeError?`Can't reach ${this.provider.name}. Check your connection.`:e?.message||String(e)}finally{let e=this.trimmed();this.history=e,this.persist(),this.abort=null}}},Ll=1e3,Rl=1001,zl=1002,Bl=1003,Vl=1004,Hl=1005,Ul=1006,Wl=1007,Gl=1008,Kl=1009,ql=1010,Jl=1011,Yl=1012,Xl=1013,Zl=1014,Ql=1015,$l=1016,eu=1017,tu=1018,nu=1020,ru=35902,iu=35899,au=1021,ou=1022,su=1023,cu=1026,lu=1027,uu=1028,du=1029,fu=1030,pu=1031,mu=1033,hu=33776,gu=33777,_u=33778,vu=33779,yu=35840,bu=35841,xu=35842,Su=35843,Cu=36196,wu=37492,Tu=37496,Eu=37488,Du=37489,Ou=37490,ku=37491,Au=37808,ju=37809,Mu=37810,Nu=37811,Pu=37812,Fu=37813,Iu=37814,Lu=37815,Ru=37816,zu=37817,Bu=37818,Vu=37819,Hu=37820,Uu=37821,Wu=36492,Gu=36494,Ku=36495,qu=36283,Ju=36284,Yu=36285,Xu=36286,Zu=2300,Qu=2301,$u=2302,ed=2303,td=2400,nd=2401,rd=2402,id=3200,ad=`srgb`,od=`srgb-linear`,sd=`linear`,cd=`srgb`,ld=7680,ud=35044,dd=2e3;function fd(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function pd(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function md(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function hd(){let e=md(`canvas`);return e.style.display=`block`,e}var gd={};function _d(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function vd(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function V(...e){e=vd(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function H(...e){e=vd(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function yd(...e){let t=e.join(` `);t in gd||(gd[t]=!0,V(...e))}function bd(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var xd={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},Sd=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Cd=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),wd=1234567,Td=Math.PI/180,Ed=180/Math.PI;function Dd(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cd[e&255]+Cd[e>>8&255]+Cd[e>>16&255]+Cd[e>>24&255]+`-`+Cd[t&255]+Cd[t>>8&255]+`-`+Cd[t>>16&15|64]+Cd[t>>24&255]+`-`+Cd[n&63|128]+Cd[n>>8&255]+`-`+Cd[n>>16&255]+Cd[n>>24&255]+Cd[r&255]+Cd[r>>8&255]+Cd[r>>16&255]+Cd[r>>24&255]).toLowerCase()}function U(e,t,n){return Math.max(t,Math.min(n,e))}function Od(e,t){return(e%t+t)%t}function kd(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function Ad(e,t,n){return e===t?0:(n-e)/(t-e)}function jd(e,t,n){return(1-n)*e+n*t}function Md(e,t,n,r){return jd(e,t,1-Math.exp(-n*r))}function Nd(e,t=1){return t-Math.abs(Od(e,t*2)-t)}function Pd(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Fd(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Id(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ld(e,t){return e+Math.random()*(t-e)}function Rd(e){return e*(.5-Math.random())}function zd(e){e!==void 0&&(wd=e);let t=wd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bd(e){return e*Td}function Vd(e){return e*Ed}function Hd(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Ud(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Wd(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Gd(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:V(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Kd(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function qd(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var Jd={DEG2RAD:Td,RAD2DEG:Ed,generateUUID:Dd,clamp:U,euclideanModulo:Od,mapLinear:kd,inverseLerp:Ad,lerp:jd,damp:Md,pingpong:Nd,smoothstep:Pd,smootherstep:Fd,randInt:Id,randFloat:Ld,randFloatSpread:Rd,seededRandom:zd,degToRad:Bd,radToDeg:Vd,isPowerOfTwo:Hd,ceilPowerOfTwo:Ud,floorPowerOfTwo:Wd,setQuaternionFromProperEuler:Gd,normalize:qd,denormalize:Kd},W=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(U(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yd=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:V(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(U(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this.z=U(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this.z=U(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(U(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xd=new G,Zd=new Yd,K=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return yd(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Qd.makeScale(e,t)),this}rotate(e){return yd(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Qd.makeRotation(-e)),this}translate(e,t){return yd(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Qd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qd=new K,$d=new K().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ef=new K().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tf(){let e={enabled:!0,workingColorSpace:od,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=nf(e.r),e.g=nf(e.g),e.b=nf(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=rf(e.r),e.g=rf(e.g),e.b=rf(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?sd:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return yd(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return yd(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[od]:{primaries:t,whitePoint:r,transfer:sd,toXYZ:$d,fromXYZ:ef,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ad},outputColorSpaceConfig:{drawingBufferColorSpace:ad}},[ad]:{primaries:t,whitePoint:r,transfer:cd,toXYZ:$d,fromXYZ:ef,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ad}}}),e}var q=tf();function nf(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function rf(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var af,of=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{af===void 0&&(af=md(`canvas`)),af.width=e.width,af.height=e.height;let t=af.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=af}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=md(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=nf(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(nf(t[e]/255)*255):t[e]=nf(t[e]);return{data:t,width:e.width,height:e.height}}return V(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},sf=0,cf=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Dd(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(lf(r[t].image)):e.push(lf(r[t]))}else e=lf(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function lf(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?of.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(V(`Texture: Unable to serialize Texture.`),{})}var uf=0,df=new G,ff=class e extends Sd{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Rl,i=Rl,a=Ul,o=Gl,s=su,c=Kl,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Dd(),this.name=``,this.source=new cf(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new K,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(df).x}get height(){return this.source.getSize(df).y}get depth(){return this.source.getSize(df).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){V(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){V(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ll:e.x-=Math.floor(e.x);break;case Rl:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ll:e.y-=Math.floor(e.y);break;case Rl:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ff.DEFAULT_IMAGE=null,ff.DEFAULT_MAPPING=300,ff.DEFAULT_ANISOTROPY=1;var pf=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=U(this.x,e.x,t.x),this.y=U(this.y,e.y,t.y),this.z=U(this.z,e.z,t.z),this.w=U(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=U(this.x,e,t),this.y=U(this.y,e,t),this.z=U(this.z,e,t),this.w=U(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(U(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mf=class extends Sd{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ul,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pf(0,0,e,t),this.scissorTest=!1,this.viewport=new pf(0,0,e,t),this.textures=[];let r=new ff({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ul,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new cf(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},hf=class extends mf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},gf=class extends ff{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bl,this.minFilter=Bl,this.wrapR=Rl,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},_f=class extends ff{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bl,this.minFilter=Bl,this.wrapR=Rl,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},vf=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/yf.setFromMatrixColumn(e,0).length(),i=1/yf.setFromMatrixColumn(e,1).length(),a=1/yf.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,Sf)}lookAt(e,t,n){let r=this.elements;return Tf.subVectors(e,t),Tf.lengthSq()===0&&(Tf.z=1),Tf.normalize(),Cf.crossVectors(n,Tf),Cf.lengthSq()===0&&(Math.abs(n.z)===1?Tf.x+=1e-4:Tf.z+=1e-4,Tf.normalize(),Cf.crossVectors(n,Tf)),Cf.normalize(),wf.crossVectors(Tf,Cf),r[0]=Cf.x,r[4]=wf.x,r[8]=Tf.x,r[1]=Cf.y,r[5]=wf.y,r[9]=Tf.y,r[2]=Cf.z,r[6]=wf.z,r[10]=Tf.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*re,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*re,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*re,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=yf.set(r[0],r[1],r[2]).length(),o=yf.set(r[4],r[5],r[6]).length(),s=yf.set(r[8],r[9],r[10]).length();i<0&&(a=-a),bf.copy(this);let c=1/a,l=1/o,u=1/s;return bf.elements[0]*=c,bf.elements[1]*=c,bf.elements[2]*=c,bf.elements[4]*=l,bf.elements[5]*=l,bf.elements[6]*=l,bf.elements[8]*=u,bf.elements[9]*=u,bf.elements[10]*=u,t.setFromRotationMatrix(bf),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=dd,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=dd,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},yf=new G,bf=new vf,xf=new G(0,0,0),Sf=new G(1,1,1),Cf=new G,wf=new G,Tf=new G,Ef=new vf,Df=new Yd,Of=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(U(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-U(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(U(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-U(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(U(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-U(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:V(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ef.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ef,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Df.setFromEuler(this),this.setFromQuaternion(Df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Of.DEFAULT_ORDER=`XYZ`;var kf=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Af=0,jf=new G,Mf=new Yd,Nf=new vf,Pf=new G,Ff=new G,If=new G,Lf=new Yd,Rf=new G(1,0,0),zf=new G(0,1,0),Bf=new G(0,0,1),Vf={type:`added`},Hf={type:`removed`},Uf={type:`childadded`,child:null},Wf={type:`childremoved`,child:null},Gf=class e extends Sd{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Dd(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new G,n=new Of,r=new Yd,i=new G(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vf},normalMatrix:{value:new K}}),this.matrix=new vf,this.matrixWorld=new vf,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Mf.setFromAxisAngle(e,t),this.quaternion.multiply(Mf),this}rotateOnWorldAxis(e,t){return Mf.setFromAxisAngle(e,t),this.quaternion.premultiply(Mf),this}rotateX(e){return this.rotateOnAxis(Rf,e)}rotateY(e){return this.rotateOnAxis(zf,e)}rotateZ(e){return this.rotateOnAxis(Bf,e)}translateOnAxis(e,t){return jf.copy(e).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rf,e)}translateY(e){return this.translateOnAxis(zf,e)}translateZ(e){return this.translateOnAxis(Bf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nf.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pf.copy(e):Pf.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ff.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nf.lookAt(Ff,Pf,this.up):Nf.lookAt(Pf,Ff,this.up),this.quaternion.setFromRotationMatrix(Nf),r&&(Nf.extractRotation(r.matrixWorld),Mf.setFromRotationMatrix(Nf),this.quaternion.premultiply(Mf.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(H(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vf),Uf.child=e,this.dispatchEvent(Uf),Uf.child=null):H(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hf),Wf.child=e,this.dispatchEvent(Wf),Wf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nf.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nf.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nf),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vf),Uf.child=e,this.dispatchEvent(Uf),Uf.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ff,e,If),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ff,Lf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Gf.DEFAULT_UP=new G(0,1,0),Gf.DEFAULT_MATRIX_AUTO_UPDATE=!0,Gf.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kf=class extends Gf{constructor(){super(),this.isGroup=!0,this.type=`Group`}},qf={type:`move`},Jf=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qf)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Kf;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xf={h:0,s:0,l:0},Zf={h:0,s:0,l:0};function Qf(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var J=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ad){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,q.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=q.workingColorSpace){return this.r=e,this.g=t,this.b=n,q.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=q.workingColorSpace){if(e=Od(e,1),t=U(t,0,1),n=U(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Qf(i,r,e+1/3),this.g=Qf(i,r,e),this.b=Qf(i,r,e-1/3)}return q.colorSpaceToWorking(this,r),this}setStyle(e,t=ad){function n(t){t!==void 0&&parseFloat(t)<1&&V(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:V(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);V(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ad){let n=Yf[e.toLowerCase()];return n===void 0?V(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nf(e.r),this.g=nf(e.g),this.b=nf(e.b),this}copyLinearToSRGB(e){return this.r=rf(e.r),this.g=rf(e.g),this.b=rf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ad){return q.workingToColorSpace($f.copy(this),e),Math.round(U($f.r*255,0,255))*65536+Math.round(U($f.g*255,0,255))*256+Math.round(U($f.b*255,0,255))}getHexString(e=ad){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=q.workingColorSpace){q.workingToColorSpace($f.copy(this),t);let n=$f.r,r=$f.g,i=$f.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=q.workingColorSpace){return q.workingToColorSpace($f.copy(this),t),e.r=$f.r,e.g=$f.g,e.b=$f.b,e}getStyle(e=ad){q.workingToColorSpace($f.copy(this),e);let t=$f.r,n=$f.g,r=$f.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Xf),this.setHSL(Xf.h+e,Xf.s+t,Xf.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xf),e.getHSL(Zf);let n=jd(Xf.h,Zf.h,t),r=jd(Xf.s,Zf.s,t),i=jd(Xf.l,Zf.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$f=new J;J.NAMES=Yf;var ep=class extends Gf{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Of,this.environmentIntensity=1,this.environmentRotation=new Of,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},tp=new G,np=new G,rp=new G,ip=new G,ap=new G,op=new G,sp=new G,cp=new G,lp=new G,up=new G,dp=new pf,fp=new pf,pp=new pf,mp=class e{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),tp.subVectors(e,t),r.cross(tp);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){tp.subVectors(r,t),np.subVectors(n,t),rp.subVectors(e,t);let a=tp.dot(tp),o=tp.dot(np),s=tp.dot(rp),c=np.dot(np),l=np.dot(rp),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ip)!==null&&ip.x>=0&&ip.y>=0&&ip.x+ip.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,ip)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,ip.x),s.addScaledVector(a,ip.y),s.addScaledVector(o,ip.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return dp.setScalar(0),fp.setScalar(0),pp.setScalar(0),dp.fromBufferAttribute(e,t),fp.fromBufferAttribute(e,n),pp.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(dp,i.x),a.addScaledVector(fp,i.y),a.addScaledVector(pp,i.z),a}static isFrontFacing(e,t,n,r){return tp.subVectors(n,t),np.subVectors(e,t),tp.cross(np).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tp.subVectors(this.c,this.b),np.subVectors(this.a,this.b),tp.cross(np).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;ap.subVectors(r,n),op.subVectors(i,n),cp.subVectors(e,n);let s=ap.dot(cp),c=op.dot(cp);if(s<=0&&c<=0)return t.copy(n);lp.subVectors(e,r);let l=ap.dot(lp),u=op.dot(lp);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(ap,a);up.subVectors(e,i);let f=ap.dot(up),p=op.dot(up);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(op,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return sp.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(sp,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(ap,a).addScaledVector(op,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hp=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_p.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_p.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_p.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,_p):_p.fromBufferAttribute(r,t),_p.applyMatrix4(e.matrixWorld),this.expandByPoint(_p);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),vp.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),vp.copy(e.boundingBox)),vp.applyMatrix4(e.matrixWorld),this.union(vp)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_p),_p.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tp),Ep.subVectors(this.max,Tp),yp.subVectors(e.a,Tp),bp.subVectors(e.b,Tp),xp.subVectors(e.c,Tp),Sp.subVectors(bp,yp),Cp.subVectors(xp,bp),wp.subVectors(yp,xp);let t=[0,-Sp.z,Sp.y,0,-Cp.z,Cp.y,0,-wp.z,wp.y,Sp.z,0,-Sp.x,Cp.z,0,-Cp.x,wp.z,0,-wp.x,-Sp.y,Sp.x,0,-Cp.y,Cp.x,0,-wp.y,wp.x,0];return!kp(t,yp,bp,xp,Ep)||(t=[1,0,0,0,1,0,0,0,1],!kp(t,yp,bp,xp,Ep))?!1:(Dp.crossVectors(Sp,Cp),t=[Dp.x,Dp.y,Dp.z],kp(t,yp,bp,xp,Ep))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_p).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_p).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gp[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gp[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gp[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gp[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gp[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gp[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gp[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gp[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gp),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gp=[new G,new G,new G,new G,new G,new G,new G,new G],_p=new G,vp=new hp,yp=new G,bp=new G,xp=new G,Sp=new G,Cp=new G,wp=new G,Tp=new G,Ep=new G,Dp=new G,Op=new G;function kp(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Op.fromArray(e,a);let o=i.x*Math.abs(Op.x)+i.y*Math.abs(Op.y)+i.z*Math.abs(Op.z),s=t.dot(Op),c=n.dot(Op),l=r.dot(Op);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Ap=new G,jp=new W,Mp=0,Np=class extends Sd{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ud,this.updateRanges=[],this.gpuType=Ql,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jp.fromBufferAttribute(this,t),jp.applyMatrix3(e),this.setXY(t,jp.x,jp.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ap.fromBufferAttribute(this,t),Ap.applyMatrix3(e),this.setXYZ(t,Ap.x,Ap.y,Ap.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ap.fromBufferAttribute(this,t),Ap.applyMatrix4(e),this.setXYZ(t,Ap.x,Ap.y,Ap.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ap.fromBufferAttribute(this,t),Ap.applyNormalMatrix(e),this.setXYZ(t,Ap.x,Ap.y,Ap.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ap.fromBufferAttribute(this,t),Ap.transformDirection(e),this.setXYZ(t,Ap.x,Ap.y,Ap.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kd(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=qd(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kd(t,this.array)),t}setX(e,t){return this.normalized&&(t=qd(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kd(t,this.array)),t}setY(e,t){return this.normalized&&(t=qd(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kd(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qd(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kd(t,this.array)),t}setW(e,t){return this.normalized&&(t=qd(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qd(t,this.array),n=qd(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=qd(t,this.array),n=qd(n,this.array),r=qd(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=qd(t,this.array),n=qd(n,this.array),r=qd(r,this.array),i=qd(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Pp=class extends Np{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Fp=class extends Np{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Ip=class extends Np{constructor(e,t,n){super(new Float32Array(e),t,n)}},Lp=new hp,Rp=new G,zp=new G,Bp=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Lp.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rp.subVectors(e,this.center);let t=Rp.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Rp,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rp.copy(e.center).add(zp)),this.expandByPoint(Rp.copy(e.center).sub(zp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Vp=0,Hp=new vf,Up=new Gf,Wp=new G,Gp=new hp,Kp=new hp,qp=new G,Jp=class e extends Sd{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vp++}),this.uuid=Dd(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(fd(e)?Fp:Pp)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new K().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hp.makeRotationFromQuaternion(e),this.applyMatrix4(Hp),this}rotateX(e){return Hp.makeRotationX(e),this.applyMatrix4(Hp),this}rotateY(e){return Hp.makeRotationY(e),this.applyMatrix4(Hp),this}rotateZ(e){return Hp.makeRotationZ(e),this.applyMatrix4(Hp),this}translate(e,t,n){return Hp.makeTranslation(e,t,n),this.applyMatrix4(Hp),this}scale(e,t,n){return Hp.makeScale(e,t,n),this.applyMatrix4(Hp),this}lookAt(e){return Up.lookAt(e),Up.updateMatrix(),this.applyMatrix4(Up.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wp).negate(),this.translate(Wp.x,Wp.y,Wp.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Ip(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&V(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hp);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){H(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Gp.setFromBufferAttribute(n),this.morphTargetsRelative?(qp.addVectors(this.boundingBox.min,Gp.min),this.boundingBox.expandByPoint(qp),qp.addVectors(this.boundingBox.max,Gp.max),this.boundingBox.expandByPoint(qp)):(this.boundingBox.expandByPoint(Gp.min),this.boundingBox.expandByPoint(Gp.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&H(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bp);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){H(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new G,1/0);return}if(e){let n=this.boundingSphere.center;if(Gp.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Kp.setFromBufferAttribute(n),this.morphTargetsRelative?(qp.addVectors(Gp.min,Kp.min),Gp.expandByPoint(qp),qp.addVectors(Gp.max,Kp.max),Gp.expandByPoint(qp)):(Gp.expandByPoint(Kp.min),Gp.expandByPoint(Kp.max))}Gp.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)qp.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(qp));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)qp.fromBufferAttribute(a,t),o&&(Wp.fromBufferAttribute(e,t),qp.add(Wp)),r=Math.max(r,n.distanceToSquared(qp))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&H(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){H(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Np(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new G,s[e]=new G;let c=new G,l=new G,u=new G,d=new W,f=new W,p=new W,m=new G,h=new G;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new G,y=new G,b=new G,x=new G;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Np(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new G,i=new G,a=new G,o=new G,s=new G,c=new G,l=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qp.fromBufferAttribute(e,t),qp.normalize(),e.setXYZ(t,qp.x,qp.y,qp.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Np(a,r,i)}if(this.index===null)return V(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Yp=new G,Xp=new G,Zp=new K,Qp=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Yp.subVectors(n,t).cross(Xp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Yp),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Zp.getNormalMatrix(e),r=this.coplanarPoint(Yp).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$p=0,em=class extends Sd{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Dd(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ld,this.stencilZFail=ld,this.stencilZPass=ld,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){V(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){V(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new J().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Qp().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new W().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new W().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},tm=new G,nm=new G,rm=new G,im=new G,am=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tm)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=tm.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tm.copy(this.origin).addScaledVector(this.direction,t),tm.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){nm.copy(e).add(t).multiplyScalar(.5),rm.copy(t).sub(e).normalize(),im.copy(this.origin).sub(nm);let i=e.distanceTo(t)*.5,a=-this.direction.dot(rm),o=im.dot(this.direction),s=-im.dot(rm),c=im.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(nm).addScaledVector(rm,d),f}intersectSphere(e,t){if(e.radius<0)return null;tm.subVectors(e.center,this.origin);let n=tm.dot(this.direction),r=tm.dot(tm)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,tm)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,ne=C/w,re=1/w,ie=T-te*D,ae=E-ne*D,oe=O-te*A,se=k-ne*A,ce=j-te*M,le=ee-ne*M,ue=ce*se-le*oe,de=ie*le-ae*ce,fe=oe*ae-se*ie;if(r){if(ue<0||de<0||fe<0)return null}else if((ue<0||de<0||fe<0)&&(ue>0||de>0||fe>0))return null;let pe=ue+de+fe;if(pe===0)return null;let me=re*(ue*D+de*A+fe*M);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},om=class extends em{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Of,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sm=new vf,cm=new am,lm=new Bp,um=new G,dm=new G,fm=new G,pm=new G,mm=new G,hm=new G,gm=new G,_m=new G,vm=class extends Gf{constructor(e=new Jp,t=new om){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){hm.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(mm.fromBufferAttribute(s,e),a?hm.addScaledVector(mm,r):hm.addScaledVector(mm.sub(t),r))}t.add(hm)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lm.copy(n.boundingSphere),lm.applyMatrix4(i),cm.copy(e.ray).recast(e.near),!(lm.containsPoint(cm.origin)===!1&&(cm.intersectSphere(lm,um)===null||cm.origin.distanceToSquared(um)>(e.far-e.near)**2))&&(sm.copy(i).invert(),cm.copy(e.ray).applyMatrix4(sm),(n.boundingBox===null||cm.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,cm)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=bm(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=bm(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=bm(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=bm(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ym(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;_m.copy(s),_m.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(_m);return l<n.near||l>n.far?null:{distance:l,point:_m.clone(),object:e}}function bm(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,dm),e.getVertexPosition(c,fm),e.getVertexPosition(l,pm);let u=ym(e,t,n,r,dm,fm,pm,gm);if(u){let e=new G;mp.getBarycoord(gm,dm,fm,pm,e),i&&(u.uv=mp.getInterpolatedAttribute(i,s,c,l,e,new W)),a&&(u.uv1=mp.getInterpolatedAttribute(a,s,c,l,e,new W)),o&&(u.normal=mp.getInterpolatedAttribute(o,s,c,l,e,new G),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new G,materialIndex:0};mp.getNormal(dm,fm,pm,t.normal),u.face=t,u.barycoord=e}return u}var xm=class extends ff{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Bl,l=Bl,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Sm=new Bp,Cm=new W(.5,.5),wm=new G,Tm=class{constructor(e=new Qp,t=new Qp,n=new Qp,r=new Qp,i=new Qp,a=new Qp){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dd,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sm.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sm.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sm)}intersectsSprite(e){return Sm.center.set(0,0,0),Sm.radius=.7071067811865476+Cm.distanceTo(e.center),Sm.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sm)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(wm.x=r.normal.x>0?e.max.x:e.min.x,wm.y=r.normal.y>0?e.max.y:e.min.y,wm.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wm)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Em=class extends em{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new J(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dm=new vf,Om=new am,km=new Bp,Am=new G,jm=class extends Gf{constructor(e=new Jp,t=new Em){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),km.copy(n.boundingSphere),km.applyMatrix4(r),km.radius+=i,e.ray.intersectsSphere(km)===!1)return;Dm.copy(r).invert(),Om.copy(e.ray).applyMatrix4(Dm);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Am.fromBufferAttribute(l,n),Mm(Am,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Am.fromBufferAttribute(l,a),Mm(Am,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Mm(e,t,n,r,i,a,o){let s=Om.distanceSqToPoint(e);if(s<n){let n=new G;Om.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Nm=class extends ff{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pm=class extends ff{constructor(e,t,n=Zl,r,i,a,o=Bl,s=Bl,c,l=cu,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fm=class extends Pm{constructor(e,t=Zl,n=301,r,i,a=Bl,o=Bl,s,c=cu){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Im=class extends ff{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Lm=class e extends Jp{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Ip(c,3)),this.setAttribute(`normal`,new Ip(l,3)),this.setAttribute(`uv`,new Ip(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new G;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Rm=class e extends Jp{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Ip(p,3)),this.setAttribute(`normal`,new Ip(m,3)),this.setAttribute(`uv`,new Ip(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},zm=class e extends Jp{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new G,d=new G,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Ip(p,3)),this.setAttribute(`normal`,new Ip(m,3)),this.setAttribute(`uv`,new Ip(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Bm=class e extends Jp{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new G,f=new G,p=new G;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Ip(c,3)),this.setAttribute(`normal`,new Ip(l,3)),this.setAttribute(`uv`,new Ip(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Vm(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Um(i))i.isRenderTargetTexture?(V(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Um(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Hm(e){let t={};for(let n=0;n<e.length;n++){let r=Vm(e[n]);for(let e in r)t[e]=r[e]}return t}function Um(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Wm(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Gm(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:q.workingColorSpace}var Km={clone:Vm,merge:Hm},qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ym=class extends em{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qm,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vm(e.uniforms),this.uniformsGroups=Wm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new J().setHex(r.value);break;case`v2`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new pf().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new vf().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xm=class extends Ym{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Zm=class extends em{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qm=class extends em{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $m(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function eh(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var th=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},nh=class extends th{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:td,endingEnd:td}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case nd:i=e,o=2*t-n;break;case rd:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case nd:a=e,s=2*n-t;break;case rd:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},rh=class extends th{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ih=class extends th{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ah=class extends th{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ch(n,t,g,y,r);i[p]=oh(x,o,_,b,m)}return i}};function oh(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function sh(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ch(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=oh(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=sh(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var lh=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=$m(t,this.TimeBufferType),this.values=$m(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$m(e.times,Array),values:$m(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),eh(e.settings)&&(n.settings={inTangents:$m(e.settings.inTangents,Array),outTangents:$m(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ih(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ah(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zu:t=this.InterpolantFactoryMethodDiscrete;break;case Qu:t=this.InterpolantFactoryMethodLinear;break;case $u:t=this.InterpolantFactoryMethodSmooth;break;case ed:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return V(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zu;case this.InterpolantFactoryMethodLinear:return Qu;case this.InterpolantFactoryMethodSmooth:return $u;case this.InterpolantFactoryMethodBezier:return ed}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;eh(this.settings)&&(uh(this.settings.inTangents,e),uh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(H(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(H(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){H(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){H(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&pd(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){H(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===$u,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,eh(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function uh(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}lh.prototype.ValueTypeName=``,lh.prototype.TimeBufferType=Float32Array,lh.prototype.ValueBufferType=Float32Array,lh.prototype.DefaultInterpolation=Qu;var dh=class extends lh{constructor(e,t,n){super(e,t,n)}};dh.prototype.ValueTypeName=`bool`,dh.prototype.ValueBufferType=Array,dh.prototype.DefaultInterpolation=Zu,dh.prototype.InterpolantFactoryMethodLinear=void 0,dh.prototype.InterpolantFactoryMethodSmooth=void 0;var fh=class extends lh{constructor(e,t,n,r){super(e,t,n,r)}};fh.prototype.ValueTypeName=`color`;var ph=class extends lh{constructor(e,t,n,r){super(e,t,n,r)}};ph.prototype.ValueTypeName=`number`;var mh=class extends th{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Yd.slerpFlat(i,0,a,c-o,a,c,s);return i}},hh=class extends lh{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}};hh.prototype.ValueTypeName=`quaternion`,hh.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends lh{constructor(e,t,n){super(e,t,n)}};gh.prototype.ValueTypeName=`string`,gh.prototype.ValueBufferType=Array,gh.prototype.DefaultInterpolation=Zu,gh.prototype.InterpolantFactoryMethodLinear=void 0,gh.prototype.InterpolantFactoryMethodSmooth=void 0;var _h=class extends lh{constructor(e,t,n,r){super(e,t,n,r)}};_h.prototype.ValueTypeName=`vector`;var vh=new G,yh=new Yd,bh=new G,xh=class extends Gf{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new vf,this.projectionMatrix=new vf,this.projectionMatrixInverse=new vf,this.coordinateSystem=dd,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vh,yh,bh),bh.x===1&&bh.y===1&&bh.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vh,yh,bh.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vh,yh,bh),bh.x===1&&bh.y===1&&bh.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vh,yh,bh.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Sh=new G,Ch=new W,wh=new W,Th=class extends xh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ed*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Td*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(Td*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sh.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sh.x,Sh.y).multiplyScalar(-e/Sh.z),Sh.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sh.x,Sh.y).multiplyScalar(-e/Sh.z)}getViewSize(e,t){return this.getViewBounds(e,Ch,wh),t.subVectors(wh,Ch)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Td*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Eh=class extends xh{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dh=-90,Oh=1,kh=class extends Gf{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Th(Dh,Oh,e,t);r.layers=this.layers,this.add(r);let i=new Th(Dh,Oh,e,t);i.layers=this.layers,this.add(i);let a=new Th(Dh,Oh,e,t);a.layers=this.layers,this.add(a);let o=new Th(Dh,Oh,e,t);o.layers=this.layers,this.add(o);let s=new Th(Dh,Oh,e,t);s.layers=this.layers,this.add(s);let c=new Th(Dh,Oh,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ah=class extends Th{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},jh=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Mh.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Mh(){this._document.hidden===!1&&this.reset()}var Nh=`\\[\\]\\.:\\/`,Ph=RegExp(`[\\[\\]\\.:\\/]`,`g`),Fh=`[^\\[\\]\\.:\\/]`,Ih=`[^`+Nh.replace(`\\.`,``)+`]`,Lh=`((?:WC+[\\/:])*)`.replace(`WC`,Fh),Rh=`(WCOD+)?`.replace(`WCOD`,Ih),zh=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Fh),Bh=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Fh),Vh=RegExp(`^`+Lh+Rh+zh+Bh+`$`),Hh=[`material`,`materials`,`bones`,`map`],Uh=class{constructor(e,t,n){let r=n||Wh.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Wh=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ph,``)}static parseTrackName(e){let t=Vh.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Hh.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){V(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){H(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){H(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){H(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){H(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){H(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){H(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;H(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){H(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Wh.Composite=Uh,Wh.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Wh.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Wh.prototype.GetterByBindingType=[Wh.prototype._getValue_direct,Wh.prototype._getValue_array,Wh.prototype._getValue_arrayElement,Wh.prototype._getValue_toArray],Wh.prototype.SetterByBindingTypeAndVersioning=[[Wh.prototype._setValue_direct,Wh.prototype._setValue_direct_setNeedsUpdate,Wh.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Wh.prototype._setValue_array,Wh.prototype._setValue_array_setNeedsUpdate,Wh.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Wh.prototype._setValue_arrayElement,Wh.prototype._setValue_arrayElement_setNeedsUpdate,Wh.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Wh.prototype._setValue_fromArray,Wh.prototype._setValue_fromArray_setNeedsUpdate,Wh.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Gh(e,t,n,r){let i=Kh(r);switch(n){case au:return e*t;case uu:return e*t/i.components*i.byteLength;case du:return e*t/i.components*i.byteLength;case fu:return e*t*2/i.components*i.byteLength;case pu:return e*t*2/i.components*i.byteLength;case ou:return e*t*3/i.components*i.byteLength;case su:return e*t*4/i.components*i.byteLength;case mu:return e*t*4/i.components*i.byteLength;case hu:case gu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _u:case vu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bu:case Su:return Math.max(e,16)*Math.max(t,8)/4;case yu:case xu:return Math.max(e,8)*Math.max(t,8)/2;case Cu:case wu:case Eu:case Du:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Tu:case Ou:case ku:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Au:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ju:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Mu:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Nu:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Fu:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Iu:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Lu:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ru:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case zu:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Bu:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Vu:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Hu:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Uu:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Wu:case Gu:case Ku:return Math.ceil(e/4)*Math.ceil(t/4)*16;case qu:case Ju:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Yu:case Xu:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Kh(e){switch(e){case Kl:case ql:return{byteLength:1,components:1};case Yl:case Jl:case $l:return{byteLength:2,components:1};case eu:case tu:return{byteLength:2,components:4};case Zl:case Xl:case Ql:return{byteLength:4,components:1};case ru:case iu:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?V(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function qh(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Jh(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Y={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},X={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new K}},envmap:{envMap:{value:null},envMapRotation:{value:new K},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new K}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new K}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new K},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new K},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new K},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new K}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new K}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new K}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0},uvTransform:{value:new K}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}}},Yh={basic:{uniforms:Hm([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.fog]),vertexShader:Y.meshbasic_vert,fragmentShader:Y.meshbasic_frag},lambert:{uniforms:Hm([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},envMapIntensity:{value:1}}]),vertexShader:Y.meshlambert_vert,fragmentShader:Y.meshlambert_frag},phong:{uniforms:Hm([X.common,X.specularmap,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.fog,X.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Y.meshphong_vert,fragmentShader:Y.meshphong_frag},standard:{uniforms:Hm([X.common,X.envmap,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.roughnessmap,X.metalnessmap,X.fog,X.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag},toon:{uniforms:Hm([X.common,X.aomap,X.lightmap,X.emissivemap,X.bumpmap,X.normalmap,X.displacementmap,X.gradientmap,X.fog,X.lights,{emissive:{value:new J(0)}}]),vertexShader:Y.meshtoon_vert,fragmentShader:Y.meshtoon_frag},matcap:{uniforms:Hm([X.common,X.bumpmap,X.normalmap,X.displacementmap,X.fog,{matcap:{value:null}}]),vertexShader:Y.meshmatcap_vert,fragmentShader:Y.meshmatcap_frag},points:{uniforms:Hm([X.points,X.fog]),vertexShader:Y.points_vert,fragmentShader:Y.points_frag},dashed:{uniforms:Hm([X.common,X.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Y.linedashed_vert,fragmentShader:Y.linedashed_frag},depth:{uniforms:Hm([X.common,X.displacementmap]),vertexShader:Y.depth_vert,fragmentShader:Y.depth_frag},normal:{uniforms:Hm([X.common,X.bumpmap,X.normalmap,X.displacementmap,{opacity:{value:1}}]),vertexShader:Y.meshnormal_vert,fragmentShader:Y.meshnormal_frag},sprite:{uniforms:Hm([X.sprite,X.fog]),vertexShader:Y.sprite_vert,fragmentShader:Y.sprite_frag},background:{uniforms:{uvTransform:{value:new K},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Y.background_vert,fragmentShader:Y.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new K}},vertexShader:Y.backgroundCube_vert,fragmentShader:Y.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Y.cube_vert,fragmentShader:Y.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Y.equirect_vert,fragmentShader:Y.equirect_frag},distance:{uniforms:Hm([X.common,X.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Y.distance_vert,fragmentShader:Y.distance_frag},shadow:{uniforms:Hm([X.lights,X.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Y.shadow_vert,fragmentShader:Y.shadow_frag}};Yh.physical={uniforms:Hm([Yh.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new K},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new K},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new K},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new K},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new K},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new K},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new K},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new K},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new K},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new K},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new K},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new K}}]),vertexShader:Y.meshphysical_vert,fragmentShader:Y.meshphysical_frag};var Xh={r:0,b:0,g:0},Zh=new vf,Qh=new K;Qh.set(-1,0,0,0,1,0,0,0,1);function $h(e,t,n,r,i,a){let o=new J(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new vm(new Lm(1,1,1),new Ym({name:`BackgroundCubeMaterial`,uniforms:Vm(Yh.backgroundCube.uniforms),vertexShader:Yh.backgroundCube.vertexShader,fragmentShader:Yh.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Zh.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Qh),l.material.toneMapped=q.getTransfer(i.colorSpace)!==cd,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new vm(new Rm(2,2),new Ym({name:`BackgroundMaterial`,uniforms:Vm(Yh.background.uniforms),vertexShader:Yh.background.vertexShader,fragmentShader:Yh.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=q.getTransfer(i.colorSpace)!==cd,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Xh,Gm(e)),n.buffers.color.setClear(Xh.r,Xh.g,Xh.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function eg(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function tg(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ng(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(V(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&V(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function rg(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Qp,s=new K,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ig=4,ag=6,og=20,sg=256,cg=new Eh,lg=new J,ug=null,dg=0,fg=0,pg=!1,mg=new G,hg=new G,gg=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=mg}=i;ug=this._renderer.getRenderTarget(),dg=this._renderer.getActiveCubeFace(),fg=this._renderer.getActiveMipmapLevel(),pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ug,dg,fg),this._renderer.xr.enabled=pg,e.scissorTest=!1,yg(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ug=this._renderer.getRenderTarget(),dg=this._renderer.getActiveCubeFace(),fg=this._renderer.getActiveMipmapLevel(),pg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ul,minFilter:Ul,generateMipmaps:!1,type:$l,format:su,colorSpace:od,depthBuffer:!1},r=vg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vg(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=_g(r)),this._blurMaterial=xg(r,e,t),this._ggxMaterial=bg(r,e,t)}return r}_compileMaterial(e){let t=new vm(new Jp,e);this._renderer.compile(t,cg)}_sceneToCubeUV(e,t,n,r,i){let a=new Th(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(lg),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vm(new Lm,new om({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(lg),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;yg(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sg());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;yg(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,cg)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ig?n-d+ig:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,yg(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,cg),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,yg(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,cg)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];yg(t,3*l*(r>this._lodMax-ig?r-this._lodMax+ig:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,cg)}};function _g(e){let t=[],n=[],r=e,i=e-ig+1+ag;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?hg.set(1,r,n):e===1?hg.set(-n,1,-r):e===2?hg.set(-n,r,1):e===3?hg.set(-1,r,-n):e===4?hg.set(-n,-1,r):hg.set(n,r,-1),hg.toArray(l,(e*6+t)*3)}}let u=new Jp;u.setAttribute(`position`,new Np(c,3)),u.setAttribute(`outputDirection`,new Np(l,3)),n.push(new vm(u,null)),r>ig&&r--}return{lodMeshes:n,sizeLods:t}}function vg(e,t,n){let r=new hf(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function yg(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function bg(e,t,n){return new Ym({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:sg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wg(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function xg(e,t,n){return new Ym({name:`SphericalGaussianBlur`,defines:{SAMPLES:og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wg(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Sg(){return new Ym({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:wg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cg(){return new Ym({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wg(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tg=class extends hf{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Nm(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Lm(5,5,5),i=new Ym({name:`CubemapFromEquirect`,uniforms:Vm(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new vm(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ul),new kh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Eg(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Tg(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new gg(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new gg(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Dg(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&yd(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Og(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Fp:Pp)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function kg(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ag(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:H(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function jg(e,t,n){let r=new WeakMap,i=new pf;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new gf(h,p,m,u);g.type=Ql,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new W(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Mg(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Ng={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Pg(e,t,n,r,i,a){let o=new hf(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Jp;l.setAttribute(`position`,new Ip([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new Ip([0,2,0,0,2,0],2));let u=new Xm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new vm(l,u),f=new Eh(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new hf(t,n,{type:$l,depthBuffer:!1,stencilBuffer:!1}),c=new hf(t,n,{type:$l,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},q.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=Ng[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Fg=new ff,Ig=new Pm(1,1),Lg=new gf,Rg=new _f,zg=new Nm,Bg=[],Vg=[],Hg=new Float32Array(16),Ug=new Float32Array(9),Wg=new Float32Array(4);function Gg(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Bg[i];if(a===void 0&&(a=new Float32Array(i),Bg[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Kg(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function qg(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Jg(e,t){let n=Vg[t];n===void 0&&(n=new Int32Array(t),Vg[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Yg(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Xg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kg(n,t))return;e.uniform2fv(this.addr,t),qg(n,t)}}function Zg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Kg(n,t))return;e.uniform3fv(this.addr,t),qg(n,t)}}function Qg(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kg(n,t))return;e.uniform4fv(this.addr,t),qg(n,t)}}function $g(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kg(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qg(n,t)}else{if(Kg(n,r))return;Wg.set(r),e.uniformMatrix2fv(this.addr,!1,Wg),qg(n,r)}}function e_(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kg(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qg(n,t)}else{if(Kg(n,r))return;Ug.set(r),e.uniformMatrix3fv(this.addr,!1,Ug),qg(n,r)}}function t_(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Kg(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qg(n,t)}else{if(Kg(n,r))return;Hg.set(r),e.uniformMatrix4fv(this.addr,!1,Hg),qg(n,r)}}function n_(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function r_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kg(n,t))return;e.uniform2iv(this.addr,t),qg(n,t)}}function i_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Kg(n,t))return;e.uniform3iv(this.addr,t),qg(n,t)}}function a_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kg(n,t))return;e.uniform4iv(this.addr,t),qg(n,t)}}function o_(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function s_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Kg(n,t))return;e.uniform2uiv(this.addr,t),qg(n,t)}}function c_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Kg(n,t))return;e.uniform3uiv(this.addr,t),qg(n,t)}}function l_(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Kg(n,t))return;e.uniform4uiv(this.addr,t),qg(n,t)}}function u_(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ig.compareFunction=n.isReversedDepthBuffer()?518:515,a=Ig):a=Fg,n.setTexture2D(t||a,i)}function d_(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Rg,i)}function f_(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||zg,i)}function p_(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Lg,i)}function m_(e){switch(e){case 5126:return Yg;case 35664:return Xg;case 35665:return Zg;case 35666:return Qg;case 35674:return $g;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return r_;case 35668:case 35672:return i_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return s_;case 36295:return c_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}function h_(e,t){e.uniform1fv(this.addr,t)}function g_(e,t){let n=Gg(t,this.size,2);e.uniform2fv(this.addr,n)}function __(e,t){let n=Gg(t,this.size,3);e.uniform3fv(this.addr,n)}function v_(e,t){let n=Gg(t,this.size,4);e.uniform4fv(this.addr,n)}function y_(e,t){let n=Gg(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function b_(e,t){let n=Gg(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function x_(e,t){let n=Gg(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function S_(e,t){e.uniform1iv(this.addr,t)}function C_(e,t){e.uniform2iv(this.addr,t)}function w_(e,t){e.uniform3iv(this.addr,t)}function T_(e,t){e.uniform4iv(this.addr,t)}function E_(e,t){e.uniform1uiv(this.addr,t)}function D_(e,t){e.uniform2uiv(this.addr,t)}function O_(e,t){e.uniform3uiv(this.addr,t)}function k_(e,t){e.uniform4uiv(this.addr,t)}function A_(e,t,n){let r=this.cache,i=t.length,a=Jg(n,i);Kg(r,a)||(e.uniform1iv(this.addr,a),qg(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Ig:Fg;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function j_(e,t,n){let r=this.cache,i=t.length,a=Jg(n,i);Kg(r,a)||(e.uniform1iv(this.addr,a),qg(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Rg,a[e])}function M_(e,t,n){let r=this.cache,i=t.length,a=Jg(n,i);Kg(r,a)||(e.uniform1iv(this.addr,a),qg(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||zg,a[e])}function N_(e,t,n){let r=this.cache,i=t.length,a=Jg(n,i);Kg(r,a)||(e.uniform1iv(this.addr,a),qg(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Lg,a[e])}function P_(e){switch(e){case 5126:return h_;case 35664:return g_;case 35665:return __;case 35666:return v_;case 35674:return y_;case 35675:return b_;case 35676:return x_;case 5124:case 35670:return S_;case 35667:case 35671:return C_;case 35668:case 35672:return w_;case 35669:case 35673:return T_;case 5125:return E_;case 36294:return D_;case 36295:return O_;case 36296:return k_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return j_;case 35680:case 36300:case 36308:case 36293:return M_;case 36289:case 36303:case 36311:case 36292:return N_}}var F_=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m_(t.type)}},I_=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=P_(t.type)}},L_=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},R_=/(\w+)(\])?(\[|\.)?/g;function z_(e,t){e.seq.push(t),e.map[t.id]=t}function B_(e,t,n){let r=e.name,i=r.length;for(R_.lastIndex=0;;){let a=R_.exec(r),o=R_.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){z_(n,l===void 0?new F_(s,e,t):new I_(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new L_(s),z_(n,e)),n=e}}}var V_=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);B_(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function H_(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var U_=37297,W_=0;function G_(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var K_=new K;function q_(e){q._getMatrix(K_,q.workingColorSpace,e);let t=`mat3( ${K_.elements.map(e=>e.toFixed(4))} )`;switch(q.getTransfer(e)){case sd:return[t,`LinearTransferOETF`];case cd:return[t,`sRGBTransferOETF`];default:return V(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function J_(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+G_(e.getShaderSource(t),r)}return i}function Y_(e,t){let n=q_(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var X_={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Z_(e,t){let n=X_[t];return n===void 0?(V(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Q_=new G;function $_(){return q.getLuminanceCoefficients(Q_),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Q_.x.toFixed(4)}, ${Q_.y.toFixed(4)}, ${Q_.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ev(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(rv).join(`
`)}function tv(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function nv(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function rv(e){return e!==``}function iv(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function av(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function sv(e){return e.replace(ov,lv)}var cv=new Map;function lv(e,t){let n=Y[t];if(n===void 0){let e=cv.get(t);if(e!==void 0)n=Y[e],V(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return sv(n)}var uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(e){return e.replace(uv,fv)}function fv(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function pv(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var mv={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function hv(e){return mv[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var gv={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function _v(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:gv[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var vv={302:`ENVMAP_MODE_REFRACTION`};function yv(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:vv[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var bv={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function xv(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:bv[e.combine]||`ENVMAP_BLENDING_NONE`}function Sv(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Cv(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=hv(n),l=_v(n),u=yv(n),d=xv(n),f=Sv(n),p=ev(n),m=tv(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(rv).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(rv).join(`
`),_.length>0&&(_+=`
`)):(g=[pv(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(rv).join(`
`),_=[pv(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Y.tonemapping_pars_fragment,n.toneMapping===0?``:Z_(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Y.colorspace_pars_fragment,Y_(`linearToOutputTexel`,n.outputColorSpace),$_(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(rv).join(`
`)),o=sv(o),o=iv(o,n),o=av(o,n),s=sv(s),s=iv(s,n),s=av(s,n),o=dv(o),s=dv(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=H_(i,i.VERTEX_SHADER,y),S=H_(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=J_(i,x,`vertex`),n=J_(i,S,`fragment`);H(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):V(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new V_(i,h),T=nv(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,U_)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=W_++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var wv=0,Tv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ev(e),t.set(e,n)),n}},Ev=class{constructor(e){this.id=wv++,this.code=e,this.usedTimes=0}};function Dv(e){return e===1030||e===37490||e===36285}function Ov(e,t,n,r,i,a){let o=new kf,s=new Tv,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&V(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Yh[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),M=h.isInstancedMesh===!0,te=h.isBatchedMesh===!0,ne=!!i.map,re=!!i.matcap,ie=!!x,ae=!!i.aoMap,oe=!!i.lightMap,se=!!i.bumpMap&&i.wireframe===!1,ce=!!i.normalMap,le=!!i.displacementMap,ue=!!i.emissiveMap,de=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=pe&&!!i.anisotropyMap,xe=me&&!!i.clearcoatMap,Se=me&&!!i.clearcoatNormalMap,Ce=me&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,N=_e&&!!i.iridescenceThicknessMap,Te=ve&&!!i.sheenColorMap,Ee=ve&&!!i.sheenRoughnessMap,De=!!i.specularMap,P=!!i.specularColorMap,Oe=!!i.specularIntensityMap,F=ye&&!!i.transmissionMap,I=ye&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,je=i.alphaTest>0,Me=!!i.alphaHash,Ne=!!i.extensions,Pe=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Pe=e.toneMapping);let Fe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:te,batchingColor:te&&h._colorsTexture!==null,instancing:M,instancingColor:M&&h.instanceColor!==null,instancingMorph:M&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:q.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:ne,matcap:re,envMap:ie,envMapMode:ie&&x.mapping,envMapCubeUVHeight:S,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:ce,displacementMap:le,emissiveMap:ue,normalMapObjectSpace:ce&&i.normalMapType===1,normalMapTangentSpace:ce&&i.normalMapType===0,packedNormalMap:ce&&i.normalMapType===0&&Dv(i.normalMap.format),metalnessMap:de,roughnessMap:fe,anisotropy:pe,anisotropyMap:be,clearcoat:me,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:N,sheen:ve,sheenColorMap:Te,sheenRoughnessMap:Ee,specularMap:De,specularColorMap:P,specularIntensityMap:Oe,transmission:ye,transmissionMap:F,thicknessMap:I,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:Me,combine:i.combine,mapUv:ne&&m(i.map.channel),aoMapUv:ae&&m(i.aoMap.channel),lightMapUv:oe&&m(i.lightMap.channel),bumpMapUv:se&&m(i.bumpMap.channel),normalMapUv:ce&&m(i.normalMap.channel),displacementMapUv:le&&m(i.displacementMap.channel),emissiveMapUv:ue&&m(i.emissiveMap.channel),metalnessMapUv:de&&m(i.metalnessMap.channel),roughnessMapUv:fe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:N&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&m(i.sheenRoughnessMap.channel),specularMapUv:De&&m(i.specularMap.channel),specularColorMapUv:P&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:F&&m(i.transmissionMap.channel),thicknessMapUv:I&&m(i.thicknessMap.channel),alphaMapUv:Ae&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ce||pe),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(ne||Ae),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ce===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:ne&&i.map.isVideoTexture===!0&&q.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ue&&i.emissiveMap.isVideoTexture===!0&&q.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ne&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ne&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Yh[t];n=Km.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new Cv(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function kv(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Av(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function jv(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Mv(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Av),r.length>1&&r.sort(t||jv),i.length>1&&i.sort(t||jv)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Nv(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Mv,e.set(t,[i])):n>=r.length?(i=new Mv,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Pv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new G,color:new J};break;case`SpotLight`:n={position:new G,direction:new G,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new G,color:new J,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new G,skyColor:new J,groundColor:new J};break;case`RectAreaLight`:n={color:new J,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function Fv(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Iv=0;function Lv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Rv(e){let t=new Pv,n=Fv(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new G);let i=new G,a=new vf,o=new vf;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Lv);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=X.LTC_FLOAT_1,r.rectAreaLTC2=X.LTC_FLOAT_2):(r.rectAreaLTC1=X.LTC_HALF_1,r.rectAreaLTC2=X.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Iv++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function zv(e){let t=new Rv(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Bv(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new zv(e),t.set(n,[a])):r>=i.length?(a=new zv(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Vv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Uv=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Wv=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Gv=new vf,Kv=new G,qv=new G;function Jv(e,t,n){let r=new Tm,i=new W,a=new W,o=new pf,s=new Zm,c=new Qm,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ym({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:Vv,fragmentShader:Hv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Jp;m.setAttribute(`position`,new Np(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new vm(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(V(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){V(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){V(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new hf(i.x,i.y,{format:fu,type:$l,minFilter:Ul,magFilter:Ul,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Pm(i.x,i.y,Ql),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=cu,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Bl,d.map.depthTexture.magFilter=Bl}else l.isPointLight?(d.map=new Tg(i.x),d.map.depthTexture=new Fm(i.x,Zl)):(d.map=new hf(i.x,i.y),d.map.depthTexture=new Pm(i.x,i.y,Zl)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=cu,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Ul,d.map.depthTexture.magFilter=Ul):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Bl,d.map.depthTexture.magFilter=Bl);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Kv.setFromMatrixPosition(l.matrixWorld),e.position.copy(Kv),qv.copy(e.position),qv.add(Uv[t]),e.up.copy(Wv[t]),e.lookAt(qv),e.updateMatrixWorld(),n.makeTranslation(-Kv.x,-Kv.y,-Kv.z),Gv.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Gv,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new hf(i.x,i.y,{format:fu,type:$l}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Yv(e,t){function n(){let t=!1,n=new pf,r=null,i=new pf(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=xd[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let re=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new pf().fromArray(ae),ce=new pf().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),de(e.CULL_FACE),ve(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(de(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:H(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:H(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:H(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:H(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Ce(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function N(t){t===void 0&&(t=e.TEXTURE0+ee-1),re!==t&&(e.activeTexture(t),re=t)}function Te(t,n,r){r===void 0&&(r=re===null?e.TEXTURE0+ee-1:re);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(re!==r&&(e.activeTexture(r),re=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function Ee(){let t=ie[re];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function De(){try{e.compressedTexImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function F(){try{e.texSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function I(){try{e.compressedTexSubImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Me(){try{e.texImage2D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Ne(){try{e.texImage3D(...arguments)}catch(e){H(`WebGLState:`,e)}}function Pe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Fe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ie(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Le(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function ze(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Be(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},re=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new J(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:N,bindTexture:Te,unbindTexture:Ee,compressedTexImage2D:De,compressedTexImage3D:P,texImage2D:Me,texImage3D:Ne,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Oe,texSubImage3D:F,compressedTexSubImage2D:I,compressedTexSubImage3D:ke,scissor:Ie,viewport:Le,reset:Be}}function Xv(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new W,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):md(`canvas`)}function g(e,t,n){let r=1,i=De(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),V(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&V(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];V(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||V(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?sd:q.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function x(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,V(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return _(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),T(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function w(e){let t=e.target;t.removeEventListener(`dispose`,w),D(t)}function T(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&E(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function E(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function D(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let O=0;function k(){O=0}function A(){return O}function j(e){O=e}function ee(){let e=O;return e>=i.maxTextures&&V(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),O+=1,e}function M(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function te(t,i){let a=r.get(t);if(t.isVideoTexture&&Te(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)V(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)V(`WebGLRenderer: Texture marked for update but image is incomplete`);else{fe(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ne(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){fe(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function re(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){fe(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ie(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){pe(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ae={[Ll]:e.REPEAT,[Rl]:e.CLAMP_TO_EDGE,[zl]:e.MIRRORED_REPEAT},oe={[Bl]:e.NEAREST,[Vl]:e.NEAREST_MIPMAP_NEAREST,[Hl]:e.NEAREST_MIPMAP_LINEAR,[Ul]:e.LINEAR,[Wl]:e.LINEAR_MIPMAP_NEAREST,[Gl]:e.LINEAR_MIPMAP_LINEAR},se={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ce(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&V(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ae[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ae[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ae[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,oe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,oe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,se[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function le(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=M(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&E(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ue(e,t,n){return Math.floor(Math.floor(e/n)/t)}function de(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ue(n.start,r.width,4),c=ue(t.start,r.width,4);n.start<=i+1&&a===c&&ue(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function fe(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=le(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=q.getPrimaries(q.workingColorSpace),r=o.colorSpace===``?null:q.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=g(o.image,!1,i.maxTextureSize);t=Ee(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=b(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ce(c,o);let h,y=o.mipmaps,C=o.isVideoTexture!==!0,w=f.__version===void 0||l===!0,T=u.dataReady,E=S(o,t);if(o.isDepthTexture)m=x(o.format===lu,o.type),w&&(C?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else C?(w&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&de(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){C&&w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(h=y[i],o.format!==1023){if(r!==null){if(C){if(T){if(o.layerUpdates.size>0){let t=Gh(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else C?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{C&&w&&n.texStorage2D(e.TEXTURE_2D,E,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)h=y[t],o.format===1023?C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):C?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(C){if(w&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=Gh(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)C?(w&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(w){if(C)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(C&&w){let t=De(y[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)h=y[t],C?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(C){if(w){let r=De(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);_(o)&&v(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function pe(t,o,s){if(o.image.length!==6)return;let c=le(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=q.getPrimaries(q.workingColorSpace),r=o.colorSpace===``?null:q.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=g(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Ee(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.normalized,o.colorSpace),w=o.isVideoTexture!==!0,T=u.__version===void 0||c===!0,E=l.dataReady,D=S(o,h);ce(e.TEXTURE_CUBE_MAP,o);let O;if(f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,h.width,h.height);for(let t=0;t<6;t++){O=m[t].mipmaps;for(let r=0;r<O.length;r++){let i=O[r];o.format===1023?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?V(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(O=o.mipmaps,w&&T){O.length>0&&D++;let t=De(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,D,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<O.length;r++){let i=O[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<O.length;r++){let i=O[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function me(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,we(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;N(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.normalized,o.colorSpace);N(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,we(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,we(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ge(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,C)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ce(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else te(i.depthTexture,0);let u=l.__webglTexture,d=we(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function _e(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ge(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?ge(i.__webglFramebuffer[0],t,0):ge(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),he(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),he(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(t,n,i){let a=r.get(t);n!==void 0&&me(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&_e(t)}function ye(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&N(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=we(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),he(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ce(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)me(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ce(c,a),me(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ce(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else me(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&_e(t)}function be(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}}let xe=[],Se=[];function Ce(t){if(t.samples>0){if(N(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(xe.length=0,Se.length=0,xe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(xe.push(l),Se.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Se)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,xe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function we(e){return Math.min(i.maxSamples,e.samples)}function N(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Te(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Ee(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(q.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&V(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):H(`WebGLTextures: Unsupported texture color space:`,n)),t}function De(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=k,this.getTextureUnits=A,this.setTextureUnits=j,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=re,this.setTextureCube=ie,this.rebindTextures=ve,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=N,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Zv(e,t){function n(n,r=``){let i,a=q.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$v=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ey=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Im(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ym({vertexShader:Qv,fragmentShader:$v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vm(new Rm(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ty=class extends Sd{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new ey,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new W,C=null,w=null,T=new Th;T.viewport=new pf;let E=new Th;E.viewport=new pf;let D=[T,E],O=new Ah,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Jf,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Jf,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Jf,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&V(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?lu:cu,a=_.stencil?nu:Zl);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new hf(d.textureWidth,d.textureHeight,{format:su,type:Kl,depthTexture:new Pm(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new hf(f.framebufferWidth,f.framebufferHeight,{format:su,type:Kl,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let te=new G,ne=new G;function re(e,t,n){te.setFromMatrixPosition(t.matrixWorld),ne.setFromMatrixPosition(n.matrixWorld);let r=te.distanceTo(ne),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ie(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ie(O,i);for(let e=0;e<a.length;e++)ie(a[e],i);a.length===2?re(O,T,E):O.projectionMatrix.copy(T.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ae(e,O,i)};function ae(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ed*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let oe=null;function se(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Th,o.layers.enable(n),o.viewport=new pf,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Im,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}oe&&oe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ce=new qh;ce.setAnimationLoop(se),this.setAnimationLoop=function(e){oe=e},this.dispose=function(){}}},ny=new vf,ry=new K;ry.set(-1,0,0,0,1,0,0,0,1);function iy(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Gm(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ny.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(ry),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ay(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return H(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?V(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):V(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var oy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),sy=null;function cy(){return sy===null&&(sy=new xm(oy,16,16,fu,$l),sy.name=`DFG_LUT`,sy.minFilter=Ul,sy.magFilter=Ul,sy.wrapS=Rl,sy.wrapT=Rl,sy.generateMipmaps=!1,sy.needsUpdate=!0),sy}var ly=class{constructor(e={}){let{canvas:t=hd(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Kl}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([mu,pu,du]),g=new Set([Kl,Zl,Yl,nu,eu,tu]),_=new Uint32Array(4),v=new Int32Array(4),y=new G,b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=ad;let j=0,ee=0,M=null,te=-1,ne=null,re=new pf,ie=new pf,ae=null,oe=new J(0),se=0,ce=t.width,le=t.height,ue=1,de=null,fe=null,pe=new pf(0,0,ce,le),me=new pf(0,0,ce,le),he=!1,ge=new Tm,_e=!1,ve=!1,ye=new vf,be=new G,xe=new pf,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function we(){return M===null?ue:1}let N=n;function Te(e,n){return t.getContext(e,n)}let Ee,De,P,Oe,F,I,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,Je,!1),t.addEventListener(`webglcontextrestored`,Ye,!1),t.addEventListener(`webglcontextcreationerror`,Xe,!1),N===null){let t=`webgl2`;if(N=Te(t,e),N===null)throw Te(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ke()}catch(e){throw t.removeEventListener(`webglcontextlost`,Je,!1),t.removeEventListener(`webglcontextrestored`,Ye,!1),t.removeEventListener(`webglcontextcreationerror`,Xe,!1),H(`WebGLRenderer: `+e.message),e}function Ke(){Ee=new Dg(N),Ee.init(),Ue=new Zv(N,Ee),De=new ng(N,Ee,e,Ue),P=new Yv(N,Ee),De.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),O=N.createFramebuffer(),k=N.createFramebuffer(),A=N.createFramebuffer(),Oe=new Ag(N),F=new kv,I=new Xv(N,Ee,P,F,De,Ue,Oe),ke=new Eg(T),Ae=new Jh(N),We=new eg(N,Ae),je=new Og(N,Ae,Oe,We),Me=new Mg(N,je,Ae,We,Oe),Be=new jg(N,De,I),Le=new rg(F),Ne=new Ov(T,ke,Ee,De,We,Le),Pe=new iy(T,F),Fe=new Nv,Ie=new Bv(Ee),ze=new $h(T,ke,P,Me,p,s),Re=new Jv(T,Me,De),Ge=new ay(N,Oe,De,P),Ve=new tg(N,Ee,Oe),He=new kg(N,Ee,Oe),Oe.programs=Ne.programs,T.capabilities=De,T.extensions=Ee,T.properties=F,T.renderLists=Fe,T.shadowMap=Re,T.state=P,T.info=Oe}m!==1009&&(w=new Pg(m,t.width,t.height,o,r,i));let qe=new ty(T,N);this.xr=qe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(e){e!==void 0&&(ue=e,this.setSize(ce,le,!1))},this.getSize=function(e){return e.set(ce,le)},this.setSize=function(e,n,r=!0){if(qe.isPresenting){V(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ce=e,le=n,t.width=Math.floor(e*ue),t.height=Math.floor(n*ue),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ce*ue,le*ue).floor()},this.setDrawingBufferSize=function(e,n,r){ce=e,le=n,ue=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){H(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){V(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(re)},this.getViewport=function(e){return e.copy(pe)},this.setViewport=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),P.viewport(re.copy(pe).multiplyScalar(ue).round())},this.getScissor=function(e){return e.copy(me)},this.setScissor=function(e,t,n,r){e.isVector4?me.set(e.x,e.y,e.z,e.w):me.set(e,t,n,r),P.scissor(ie.copy(me).multiplyScalar(ue).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(e){P.setScissorTest(he=e)},this.setOpaqueSort=function(e){de=e},this.setTransparentSort=function(e){fe=e},this.getClearColor=function(e){return e.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=ze.getClearColor(),r=ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,N.clearBufferuiv(N.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,N.clearBufferiv(N.COLOR,0,v))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Je,!1),t.removeEventListener(`webglcontextrestored`,Ye,!1),t.removeEventListener(`webglcontextcreationerror`,Xe,!1),ze.dispose(),Fe.dispose(),Ie.dispose(),F.dispose(),ke.dispose(),Me.dispose(),We.dispose(),Ge.dispose(),Ne.dispose(),qe.dispose(),qe.removeEventListener(`sessionstart`,nt),qe.removeEventListener(`sessionend`,rt),it.stop()};function Je(e){e.preventDefault(),_d(`WebGLRenderer: Context Lost.`),E=!0}function Ye(){_d(`WebGLRenderer: Context Restored.`),E=!1;let e=Oe.autoReset,t=Re.enabled,n=Re.autoUpdate,r=Re.needsUpdate,i=Re.type;Ke(),Oe.autoReset=e,Re.enabled=t,Re.autoUpdate=n,Re.needsUpdate=r,Re.type=i}function Xe(e){H(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Ze(e){let t=e.target;t.removeEventListener(`dispose`,Ze),Qe(t)}function Qe(e){$e(e),F.remove(e)}function $e(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){Ne.releaseProgram(e)}),e.isShaderMaterial&&Ne.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Se);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=mt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=je.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;We.setup(i,r,s,n,c);let h,g=Ve;if(c!==null&&(h=Ae.get(c),g=He,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*we()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*we()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Ee.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ae.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function et(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),_e===!0&&Le.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ut(e,t,r),e.side=0,e.needsUpdate=!0,ut(e,t,r),e.side=2):ut(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Ie.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ve=this.localClippingEnabled,_e=Le.init(this.clippingPlanes,ve),_e===!0&&Le.setGlobalState(this.clippingPlanes,t),D!==null&&Re.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];et(o,n,t,e),r.add(o)}else et(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ee.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let L=null;function tt(e){L&&L(e)}function nt(){it.stop()}function rt(){it.start()}let it=new qh;it.setAnimationLoop(tt),typeof self<`u`&&it.setContext(self),this.setAnimationLoop=function(e){L=e,qe.setAnimationLoop(e),e===null?it.stop():it.start()},qe.addEventListener(`sessionstart`,nt),qe.addEventListener(`sessionend`,rt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){H(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=qe.enabled===!0&&qe.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(t),t=qe.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=Ie.get(e,C.length),x.init(t),x.state.textureUnits=I.getTextureUnits(),C.push(x),ye.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ge.setFromProjectionMatrix(ye,dd,t.reversedDepth),ve=this.localClippingEnabled,_e=Le.init(this.clippingPlanes,ve),b=Fe.get(e,S.length),b.init(),S.push(b),qe.enabled===!0&&qe.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&at(e,t,-1/0,T.sortObjects)}at(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(de,fe),Ce=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Ce&&ze.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&Le.beginShadows();let i=x.state.shadowsArray;if(Re.render(i,e,t),_e===!0&&Le.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];st(n,r,e,a)}Ce&&ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ot(b,e,n,n.viewport)}}else r.length>0&&st(n,r,e,t),Ce&&ze.render(e),ot(b,e,t)}M!==null&&ee===0&&(I.updateMultisampleRenderTarget(M),I.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),We.resetDefaultState(),te=-1,ne=null,C.pop(),C.length>0?(x=C[C.length-1],I.setTextureUnits(x.state.textureUnits),_e===!0&&Le.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function at(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(ge)){r&&xe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ye);let i=Me.update(e),a=e.material;a.visible&&b.push(e,i,a,n,xe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(ge))){let i=Me.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),xe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),xe.copy(e.boundingSphere.center)),xe.applyMatrix4(e.matrixWorld).applyMatrix4(ye)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,xe.z,s,t)}}else a.visible&&b.push(e,i,a,n,xe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)at(i[e],t,n,r)}function ot(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),_e===!0&&Le.setGlobalState(T.clippingPlanes,n),r&&P.viewport(re.copy(r)),i.length>0&&ct(i,t,n),a.length>0&&ct(a,t,n),o.length>0&&ct(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function st(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Ee.has(`EXT_color_buffer_half_float`)||Ee.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new hf(1,1,{generateMipmaps:!0,type:e?$l:Kl,minFilter:Gl,samples:Math.max(4,De.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:q.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||re;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(oe),se=T.getClearAlpha(),se<1&&T.setClearColor(16777215,.5),T.clear(),Ce&&ze.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),_e===!0&&Le.setGlobalState(T.clippingPlanes,r),ct(e,n,r),I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a),Ee.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,lt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(I.updateMultisampleRenderTarget(a),I.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(oe,se),d!==void 0&&(r.viewport=d),T.toneMapping=u}function ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&lt(o,t,n,s,l,c)}}function lt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function ut(e,t,n){t.isScene!==!0&&(t=Se);let r=F.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ne.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ne.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=ke.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Ze),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return ft(e,s),d}else s.uniforms=Ne.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ne.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Le.uniform),ft(e,s),r.needsLights=gt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=V_.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function ft(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function pt(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function mt(e,t,n,r,i){t.isScene!==!0&&(t=Se),I.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:q.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=ke.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=x.state.lights;if(_e===!0&&(ve===!0||e!==ne)){let t=e===ne&&r.id===te;Le.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Le.numPlanes||v.numIntersection!==Le.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=ut(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,S,v));let C=!1,w=!1,E=!1,O=S.getUniforms(),k=v.uniforms;if(P.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==te&&(te=r.id,w=!0),v.needsLights){let e=pt(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||ne!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(N,`projectionMatrix`,e.projectionMatrix),O.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(N,be.setFromMatrixPosition(e.matrixWorld)),De.logarithmicDepthBuffer&&O.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,w=!0,E=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&O.setValue(N,`sunShadowMap`,y.state.sunShadowMap,I),y.state.directionalShadowMap.length>0&&O.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,I),y.state.spotShadowMap.length>0&&O.setValue(N,`spotShadowMap`,y.state.spotShadowMap,I),y.state.pointShadowMap.length>0&&O.setValue(N,`pointShadowMap`,y.state.pointShadowMap,I)),i.isSkinnedMesh){O.setOptional(N,i,`bindMatrix`),O.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(N,`boneTexture`,e.boneTexture,I))}i.isBatchedMesh&&(O.setOptional(N,i,`batchingTexture`),O.setValue(N,`batchingTexture`,i._matricesTexture,I),O.setOptional(N,i,`batchingIdTexture`),O.setValue(N,`batchingIdTexture`,i._indirectTexture,I),O.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(N,`batchingColorTexture`,i._colorsTexture,I));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Be.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(k.envMapIntensity.value=t.environmentIntensity),k.dfgLUT!==void 0&&(k.dfgLUT.value=cy()),w){if(O.setValue(N,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&ht(k,E),a&&r.fog===!0&&Pe.refreshFogUniforms(k,a),Pe.refreshMaterialUniforms(k,r,ue,le,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;k.probesSH.value=e.texture,k.probesMin.value.copy(e.boundingBox.min),k.probesMax.value.copy(e.boundingBox.max),k.probesResolution.value.copy(e.resolution)}V_.upload(N,dt(v),k,I)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(V_.upload(N,dt(v),k,I),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(N,`center`,i.center),O.setValue(N,`modelViewMatrix`,i.modelViewMatrix),O.setValue(N,`normalMatrix`,i.normalMatrix),O.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ge.update(n,S),Ge.bind(n,S)}}return S}function ht(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function gt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest,P.viewport(re),P.scissor(ie),P.setScissorTest(ae),te=-1;return}if(o.__webglFramebuffer===void 0)I.setupRenderTarget(e);else if(o.__hasExternalTextures)I.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);I.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&I.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,re.copy(e.viewport),ie.copy(e.scissor),ae=e.scissorTest}else re.copy(pe).multiplyScalar(ue).floor(),ie.copy(me).multiplyScalar(ue).floor(),ae=he;if(n!==0&&(r=O),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(re),P.scissor(ie),P.setScissorTest(ae),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}te=-1};function _t(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=De.textureFormatReadable(e.format),t.__typeReadable=De.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=_t(o);if(u.__formatReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){H(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,Ue.convert(c),Ue.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=_t(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,Ue.convert(l),Ue.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bd(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;I.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ue.convert(t.format),_=Ue.convert(t.type),v;t.isData3DTexture?(I.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(I.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(I.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,o,s,f,p,o,s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,k),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,o,s,f,p,o,s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&I.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?I.setTextureCube(e,0):e.isData3DTexture?I.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?I.setTexture2DArray(e,0):I.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,P.reset(),We.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return dd}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=q._getDrawingBufferColorSpace(e),t.unpackColorSpace=q._getUnpackColorSpace()}},uy={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},dy=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},fy=new Eh(-1,1,1,-1,0,1),py=new class extends Jp{constructor(){super(),this.setAttribute(`position`,new Ip([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new Ip([0,2,0,0,2,0],2))}},my=class{constructor(e){this._mesh=new vm(py,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,fy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},hy=class extends dy{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ym?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Km.clone(e.uniforms),this.material=new Ym({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new my(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},gy=class extends dy{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},_y=class extends dy{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},vy=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new W);this._width=n.width,this._height=n.height,t=new hf(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$l}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hy(uy),this.copyPass.material.blending=0,this.timer=new jh}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}gy!==void 0&&(r instanceof gy?n=!0:r instanceof _y&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new W);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},yy=class extends dy{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new J}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},by={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new J(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},xy=class e extends dy{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new W(256,256):new W(e.x,e.y),this.clearColor=new J(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new hf(i,a,{type:$l,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new hf(i,a,{type:$l,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new hf(i,a,{type:$l,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=by;this.highPassUniforms=Km.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ym({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new W(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Km.clone(uy.uniforms),this.blendMaterial=new Ym({uniforms:this.copyUniforms,vertexShader:uy.vertexShader,fragmentShader:uy.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new J,this._oldClearAlpha=1,this._basic=new om,this._fsQuad=new my(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new W(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new Ym({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new W(.5,.5)},direction:{value:new W(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ym({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};xy.BlurDirectionX=new W(1,0),xy.BlurDirectionY=new W(0,1);var Sy={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Cy=class extends dy{constructor(){super(),this.isOutputPass=!0,this.uniforms=Km.clone(Sy.uniforms),this.material=new Xm({name:Sy.name,uniforms:this.uniforms,vertexShader:Sy.vertexShader,fragmentShader:Sy.fragmentShader}),this._fsQuad=new my(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},q.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};new J(`#ff6a00`),new J(`#ffd2a0`),new J(`#ff2a1a`);var wy={uniforms:{tDiffuse:{value:null},uTime:{value:0},uAberration:{value:.0025},uGlitch:{value:0},uResolution:{value:new W(1,1)},uScan:{value:1},uGrain:{value:.02}},vertexShader:`
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uAberration; uniform float uGlitch;
    uniform vec2 uResolution; uniform float uScan; uniform float uGrain; varying vec2 vUv;
    float hash(float n){ return fract(sin(n) * 43758.5453); }
    void main(){
      vec2 uv = vUv;
      // Horizontal tear lines when glitching.
      float band = floor(uv.y * 40.0 + floor(uTime * 12.0) * 7.0);
      float tear = step(1.0 - uGlitch * 0.35, hash(band)) * (hash(band + 1.0) - 0.5) * 0.08 * uGlitch;
      uv.x += tear;
      vec2 dir = uv - 0.5;
      float amt = uAberration * (1.0 + uGlitch * 6.0) * (0.4 + length(dir) * 1.6);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + dir * amt).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - dir * amt).b;
      // Scanlines + vignette + grain.
      col *= 1.0 - uScan * (0.08 - 0.08 * sin(uv.y * uResolution.y * 1.5));
      col *= 1.0 - smoothstep(0.35, 1.15, length(dir) * 1.4);
      col += (hash(uv.x * 91.7 + uv.y * 311.3 + uTime) - 0.5) * uGrain;
      gl_FragColor = vec4(col, 1.0);
    }`},Ty=new J(`#032b3d`),Ey=new J(`#37e1ff`),Dy=new J(`#e8fdff`),Oy=new J(`#ffb21e`),ky=new J(`#ff3d5e`),Ay=e=>e.toFixed(3),jy=.44,My=2,Ny=2,Py=`
  float th = acos(clamp(n.z, -1.0, 1.0));
  vec2 dir = length(n.xy) > 1e-5 ? normalize(n.xy) : vec2(1.0, 0.0);
  float r = th / ${Ay(1.32)} * ${Ay(My)};
  vec2 p = dir * r;`,Fy=`
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
vec2 rot(vec2 v, float a){ float c = cos(a), s = sin(a); return vec2(c * v.x - s * v.y, s * v.x + c * v.y); }`,Iy=`varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,Ly={transparent:!0,depthWrite:!1,depthTest:!1,blending:2},Ry=class{canvas;getInput;renderer;scene=new ep;camera=new Th(38,1,.1,200);composer;bloom;post;timer=new jh;raf=0;sizeW=0;sizeH=0;observer=null;eye=new Kf;ball=new Kf;rings=[];overlay=new ep;overlayEye=new Kf;overlayBall=new Kf;uniforms={uTime:{value:0},uLevel:{value:0},uEnergy:{value:0},uPupil:{value:jy},uLook:{value:new W},uDeep:{value:Ty.clone()},uCyan:{value:Ey.clone()},uIce:{value:Dy.clone()},uGold:{value:Oy.clone()},uRed:{value:new J(`#ff2238`)},uIntensity:{value:1},uPulse:{value:0},uPulseAmp:{value:0}};state=`offline`;damage=.15;energy=0;voice=0;mic=0;tilt=new W;tiltVel=new W;look=new W;lookTarget=new W;nextSaccade=0;distance=10;baseDistance=10;zoom=1;lookY=0;pulsePhase=1;constructor(e,t,n={}){this.canvas=e,this.getInput=t,this.renderer=new ly({canvas:e,antialias:!0,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,n.maxPixelRatio??2)),this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.05,this.scene.background=new J(`#000204`),this.scene.add(this.eye),this.eye.add(this.ball),this.overlay.add(this.overlayEye),this.overlayEye.add(this.overlayBall),this.buildDust(),this.buildHud(),this.buildBall(),this.buildRings(),this.buildPupil(),this.buildCornea(),this.composer=new vy(this.renderer),this.composer.addPass(new yy(this.scene,this.camera)),this.bloom=new xy(new W(1,1),.55,.5,.55),this.composer.addPass(this.bloom);let r=new yy(this.overlay,this.camera);r.clear=!1,this.composer.addPass(r),this.post=new hy(wy),this.post.uniforms.uScan.value=.2,this.post.uniforms.uGrain.value=.012,this.composer.addPass(this.post),this.composer.addPass(new Cy),typeof ResizeObserver<`u`&&(this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e)),this.resize(),this.loop()}buildBall(){let e=new Ym({uniforms:this.uniforms,vertexShader:`
        varying vec3 vN; varying vec3 vVN; varying vec3 vVP;
        void main(){
          vN = normalize(position);
          vVN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vVP = mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        ${Fy}
        uniform float uTime; uniform float uLevel; uniform float uEnergy; uniform float uPupil; uniform float uIntensity;
        uniform vec3 uDeep; uniform vec3 uCyan; uniform vec3 uIce; uniform vec3 uGold; uniform vec3 uRed;
        varying vec3 vN; varying vec3 vVN; varying vec3 vVP;
        void main(){
          vec3 n = normalize(vN);
          vec3 N = normalize(vVN);
          vec3 V = normalize(-vVP);
          ${Py}
          float t = clamp((r - uPupil) / (${Ay(My)} - uPupil), 0.0, 1.0);

          // ---- iris (fibres twist gently; sampling on the unit circle avoids an atan seam) ----
          vec2 d = rot(dir, 0.06 * sin(r * 2.6 - uTime * 0.15) + uTime * 0.01);
          float fa = vnoise(d * 55.0 + vec2(r * 0.6, 0.0));
          float fb = vnoise(d * 130.0 - vec2(0.0, r * 1.4));
          float fc = vnoise(d * 260.0 + vec2(r * 3.0));
          float fib = pow(fa * 0.5 + fb * 0.32 + fc * 0.18, 1.7);
          float crypt = smoothstep(0.58, 0.8, vnoise(d * 11.0 + vec2(r * 2.3, -r * 1.9)));
          crypt *= smoothstep(0.3, 0.45, t) * (1.0 - smoothstep(0.85, 0.95, t));
          float collarPos = 0.3 + (vnoise(d * 16.0) - 0.5) * 0.09;
          float collar = exp(-pow((t - collarPos) / 0.04, 2.0));
          float innerZone = 1.0 - smoothstep(collarPos, collarPos + 0.06, t);
          float profile = mix(0.5, 1.0, innerZone) * (1.0 - t * 0.35);
          float limbal = 1.0 - smoothstep(0.78, 0.98, t) * 0.75;
          float edge = 1.0 - smoothstep(${Ay(1.92)}, ${Ay(2.04)}, r);
          float lum = profile * (0.25 + 1.25 * fib) * (1.0 - crypt * 0.75) * limbal + collar * 0.55;
          float margin = exp(-abs(r - uPupil) * 38.0) * 0.9 * smoothstep(uPupil - 0.03, uPupil, r);
          vec2 cell = floor(p * 70.0);
          float tw = step(0.994, hash(cell + floor(uTime * 2.0))) * edge;
          lum = lum * (0.9 + uLevel * 0.5) + margin + tw * 0.8;
          vec3 irisCol = mix(uDeep, uCyan, clamp(fib * 1.3 + innerZone * 0.35, 0.0, 1.0));
          irisCol = mix(irisCol, uIce, clamp(pow(fib, 3.0) * innerZone * 1.5 + margin * 0.6 + tw, 0.0, 1.0));
          // Gold: a warm ring of fibres around the pupil (central heterochromia) and scattered flecks.
          float goldZone = (1.0 - smoothstep(collarPos + 0.02, collarPos + 0.22, t)) * smoothstep(0.03, 0.14, t) * (0.55 + fib * 0.6);
          // Gold fibres threading out through the blue outer iris.
          float goldFib = smoothstep(0.66, 0.86, fc) * smoothstep(0.55, 0.7, vnoise(d * 24.0 + 5.0)) * (1.0 - smoothstep(0.85, 0.97, t));
          goldZone = max(goldZone, goldFib * 0.8);
          float fleck = smoothstep(0.72, 0.92, vnoise(p * 9.0 + 3.0)) * smoothstep(0.35, 0.5, t) * (1.0 - smoothstep(0.85, 0.95, t));
          irisCol *= lum * 0.85;
          // Tint after lighting and cap brightness, so tone mapping keeps it gold instead of white.
          float lumC = dot(irisCol, vec3(0.3, 0.5, 0.2));
          vec3 amber = uGold * vec3(1.0, 0.82, 0.45); // deeper than the ring gold: survives bloom + tone mapping
          irisCol = mix(irisCol, amber * min(lumC * 1.1, 0.7), clamp(goldZone * 1.1 + fleck * 0.6, 0.0, 0.9));
          // Twelve red lines, evenly spaced every 30 degrees (one pointing straight up), all identical,
          // soft-edged and woven into the fibres so they blend in rather than sit on top.
          float au = atan(p.y, p.x) / 6.28318530718 + 0.5;
          float du = (fract(au * 12.0 + 1.0) - 0.5) / 12.0 * 6.28318530718 * r;
          float redLine = exp(-pow(du / 0.022, 2.0))
                        * smoothstep(0.06, 0.2, t) * (1.0 - smoothstep(0.45, 0.8, t));
          irisCol = mix(irisCol, uRed * min(lumC * 1.2 + 0.08, 0.7), clamp(redLine * (0.5 + fib * 0.7), 0.0, 0.72));

          // ---- sclera: dark glass with faint glowing veins creeping out from the iris ----
          vec2 q = n.xy / (1.0 + abs(n.z)) * 6.0 + vec2(n.z * 2.0);
          float ridge = 1.0 - abs(vnoise(q * 1.7) * 2.0 - 1.0);
          float ridge2 = 1.0 - abs(vnoise(q * 3.9 + 7.0) * 2.0 - 1.0);
          float veins = pow(ridge, 26.0) + pow(ridge2, 34.0) * 0.5;
          float nearIris = exp(-max(r - ${Ay(My)}, 0.0) * 1.2);
          veins *= nearIris * (0.6 + 0.4 * sin(uTime * 0.8 + q.x * 3.0));
          vec3 sclera = vec3(0.004, 0.011, 0.018) + uDeep * 0.07 + uCyan * veins * (0.1 + uEnergy * 0.08);
          // Limbal shadow where the iris meets the white.
          sclera *= 1.0 - 0.7 * exp(-pow((r - ${Ay(My)}) / 0.35, 2.0));

          vec3 col = mix(sclera, irisCol, edge);

          // ---- lighting: key light upper-left front, soft fill, glowing rim ----
          vec3 L = normalize(vec3(-0.45, 0.55, 0.75));
          float diff = max(dot(N, L), 0.0);
          float shade = 0.1 + 0.9 * pow(diff, 1.3);
          col *= mix(shade, 1.0, edge * 0.5); // the glowing iris is lit from inside, so shade it less
          float fres = pow(1.0 - max(dot(N, V), 0.0), 4.0);
          col += uCyan * fres * (0.16 + uEnergy * 0.12 + uLevel * 0.3);
          float spec = pow(max(dot(reflect(-L, N), V), 0.0), 10.0);
          col += vec3(0.55, 0.85, 1.0) * spec * 0.2 * (1.0 - edge * 0.7); // wet glossy sheen
          gl_FragColor = vec4(col * uIntensity, 1.0);
        }`}),t=new vm(new zm(Ny,128,96),e);t.renderOrder=2,this.ball.add(t)}buildRings(){let e=[{radius:2.75,tilt:new Of(1.2,.2,0),spin:new G(0,.35,0),flow:1.4,comets:2,seed:.13,gold:.5},{radius:3.05,tilt:new Of(.35,-.9,.4),spin:new G(.22,0,.12),flow:-1.1,comets:3,seed:.57,gold:1},{radius:3.35,tilt:new Of(-.55,.7,-.3),spin:new G(-.1,-.18,0),flow:.8,comets:1,seed:.91,gold:1},{radius:2.55,tilt:new Of(-1,-.4,.8),spin:new G(.3,.1,0),flow:-1.8,comets:4,seed:.33,gold:.5},{radius:2.9,tilt:new Of(.9,1.1,-.6),spin:new G(-.15,.25,.1),flow:1.2,comets:2,seed:.72,gold:1},{radius:3.5,tilt:new Of(1.45,-.3,.2),spin:new G(.05,0,-.2),flow:-.7,comets:5,seed:.05,gold:.5}];for(let t of e){let e={uSeed:{value:t.seed},uFlow:{value:t.flow},uComets:{value:t.comets},uGoldMix:{value:t.gold}},n=t=>new Ym({transparent:!0,depthWrite:!1,depthTest:!0,blending:2,uniforms:{...this.uniforms,...e},vertexShader:`
      varying vec2 vUv; varying vec3 vVN; varying vec3 vVP;
      void main(){
        vUv = uv;
        vVN = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vVP = mv.xyz;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
            ${Fy}
            uniform float uTime; uniform float uEnergy; uniform float uLevel; uniform float uIntensity;
            uniform float uSeed; uniform float uFlow; uniform float uComets; uniform float uGoldMix;
            uniform vec3 uCyan; uniform vec3 uIce; uniform vec3 uGold;
            varying vec2 vUv; varying vec3 vVN; varying vec3 vVP;
            void main(){
              // Bright core where the tube faces the camera, fading at its silhouette = a beam of light.
              float facing = max(dot(normalize(vVN), normalize(-vVP)), 0.0);
              float core = ${t?`pow(facing, 2.0) * 0.05`:`pow(facing, 1.6)`};
              float x = vUv.x;
              float speed = uFlow * (1.0 + uEnergy * 0.8 + uLevel * 2.0);
              // Churning plasma: two noise layers streaming along the ring in opposite directions.
              float flow = vnoise(vec2(x * 70.0 - uTime * speed * 3.0, uSeed * 40.0 + uTime * 0.9)) * 0.6
                         + vnoise(vec2(x * 190.0 + uTime * speed * 5.0, uSeed * 13.0)) * 0.4;
              flow = pow(flow, 1.5);
              // Comets: bright heads with fading tails racing around the ring.
              float c = fract(x * uComets - uTime * speed * 0.08 + uSeed);
              float comet = exp(-c * 22.0) + exp(-(1.0 - c) * 180.0) * 0.6;
              // Crackle: random flickering hot spots.
              float crackle = step(0.985, hash(vec2(floor(x * 300.0), floor(uTime * 12.0 + uSeed * 50.0))));
              float b = core * (0.35 + flow * 1.1 + comet * 2.2 + crackle * 1.2) * (0.65 + uEnergy * 0.5 + uLevel * 0.9);
              // Gold ring = gold plasma with white-hot heads; cyan rings get gold sparks on their heads.
              vec3 base = mix(uCyan, uGold, step(0.99, uGoldMix));
              vec3 hot = mix(uIce, mix(uIce, uGold, 0.7), uGoldMix);
              vec3 col = mix(base, hot, clamp(comet * 0.9 + pow(flow, 3.0) + crackle, 0.0, 1.0));
              gl_FragColor = vec4(col * b * uIntensity, 1.0);
            }`}),r=new Kf;r.rotation.copy(t.tilt);let i=new vm(new Bm(t.radius,.022,10,384),n(!1)),a=new vm(new Bm(t.radius,.09,10,256),n(!0));i.renderOrder=4,a.renderOrder=3,r.add(a,i),this.eye.add(r),this.rings.push({pivot:r,spin:t.spin})}}buildHud(){let e=new Ym({...Ly,uniforms:this.uniforms,vertexShader:Iy,fragmentShader:`
        ${Fy}
        uniform float uTime; uniform float uEnergy; uniform float uLevel; uniform float uIntensity;
        uniform float uPulse; uniform float uPulseAmp;
        uniform vec3 uCyan; uniform vec3 uIce; uniform vec3 uGold;
        varying vec2 vP;
        const float TAU = 6.28318530718;
        // Anti-aliased line: 1 where |d| < w, fading over one pixel.
        float line(float d, float w){ float px = fwidth(d); return 1.0 - smoothstep(w - px, w + px, abs(d)); }
        float band(float r, float a, float b){ return step(a, r) * step(r, b); }
        void main(){
          vec2 p = vP;
          float r = length(p);
          float a = atan(p.y, p.x);          // -PI..PI
          float u = a / TAU + 0.5;           // 0..1 around the circle
          float spin = uTime * (0.012 + uEnergy * 0.03);
          float v = 0.0;                     // cyan
          float w = 0.0;                     // white-hot accents
          float g = 0.0;                     // gold

          // 1. Hairline ring hugging the iris, with 180 ticks (every 15th long).
          float r1 = ${Ay(2.22)};
          v += line(r - r1, 0.004) * 0.55;
          float tu = fract(u * 180.0 + 0.5) - 0.5;
          float tickD = tu / 180.0 * TAU * r;
          float major = step(abs(fract(u * 12.0 + 0.5) - 0.5) * 15.0, 0.5); // every 15th tick
          g += line(tickD, 0.0045) * band(r, r1 + 0.04, r1 + (major > 0.5 ? 0.2 : 0.09)) * 0.55;

          // 2. Rotating segmented arcs.
          float r2 = ${Ay(2.55)};
          float seg = step(0.0, sin((u + spin) * TAU * 3.0) - 0.35) + step(0.0, sin((u - spin * 0.7) * TAU * 7.0) - 0.8) * 0.5;
          v += line(r - r2, 0.012) * min(seg, 1.0) * 0.45;
          v += line(r - (r2 + 0.05), 0.003) * 0.25;

          // 3. Fine dotted ring, counter-rotating.
          float r3 = ${Ay(2.9)};
          float du = (fract((u - spin * 1.3) * 240.0) - 0.5) / 240.0 * TAU * r;
          float dotD = length(vec2(du, r - r3));
          v += (1.0 - smoothstep(0.012 - fwidth(dotD), 0.012 + fwidth(dotD), dotD)) * 0.55;

          // 4. Corner brackets: four short arcs with end caps.
          float r4 = ${Ay(3.25)};
          float bu = fract(u * 4.0 + 0.125 + spin * 0.5);
          float bracket = step(abs(bu - 0.5), 0.07);
          g += line(r - r4, 0.006) * bracket * 0.9;
          float capU = abs(abs(bu - 0.5) - 0.07) / 4.0 * TAU * r;
          g += line(capU, 0.006) * band(r, r4 - 0.07, r4 + 0.07) * step(abs(bu - 0.5), 0.08) * 0.9;

          // 5. Outer data ring: blinking blocks.
          float r5 = ${Ay(3.6)};
          float cellI = floor((u + spin * 0.4) * 96.0);
          float on = step(0.62, hash(vec2(cellI, floor(uTime * (0.6 + uEnergy * 2.0) + cellI * 0.13))));
          float cellU = fract((u + spin * 0.4) * 96.0);
          float block = step(0.12, cellU) * step(cellU, 0.88) * band(r, r5 - 0.025, r5 + 0.025);
          float goldBlock = step(0.7, hash(vec2(cellI, 3.0)));
          v += block * on * 0.35 * (1.0 - goldBlock);
          g += block * on * 0.45 * goldBlock;
          w += block * on * step(0.97, hash(vec2(cellI, 7.0))) * 0.6;
          v += line(r - (r5 + 0.09), 0.0025) * 0.18;

          // Extra: second tick ring (gold, counter-rotating), radial spokes, more arcs and dotted rings.
          float r6 = ${Ay(2.38)};
          float tu2 = fract((u + spin * 0.8) * 360.0 + 0.5) - 0.5;
          g += line(tu2 / 360.0 * TAU * r, 0.003) * band(r, r6, r6 + 0.06) * 0.35;
          g += line(r - (r6 + 0.08), 0.0025) * 0.3;
          float spokeU = (fract((u - spin * 0.3) * 36.0 + 0.5) - 0.5) / 36.0 * TAU * r;
          v += line(spokeU, 0.004) * band(r, ${Ay(2.95)}, ${Ay(3.15)}) * 0.35;
          float r7 = ${Ay(2.7199999999999998)};
          float seg2 = step(0.0, sin((u - spin * 1.6) * TAU * 5.0) - 0.2);
          g += line(r - r7, 0.009) * seg2 * 0.4;
          float r8 = ${Ay(3.42)};
          float du8 = (fract((u + spin * 2.1) * 160.0) - 0.5) / 160.0 * TAU * r;
          float dot8 = length(vec2(du8, r - r8));
          g += (1.0 - smoothstep(0.01 - fwidth(dot8), 0.01 + fwidth(dot8), dot8)) * 0.45;
          float r9 = ${Ay(3.85)};
          float seg3 = step(0.0, sin((u + spin * 0.9) * TAU * 9.0) - 0.5);
          v += line(r - r9, 0.006) * seg3 * 0.35;
          g += line(r - (r9 + 0.12), 0.002) * 0.2;

          // 6. Scanning sweep: a soft wedge of light orbiting through the rings.
          float sweep = fract(u - uTime * 0.06);
          v *= 0.75 + 0.6 * exp(-sweep * 18.0);

          // 7. Speech shockwave.
          float pr = ${Ay(My)} + uPulse * 3.2;
          w += line(r - pr, 0.006 + uPulse * 0.01) * (1.0 - uPulse) * uPulseAmp;

          float fade = 1.0 - smoothstep(${Ay(3.6)}, ${Ay(4.8)}, r);
          g *= 0.75 + 0.6 * exp(-sweep * 18.0);
          vec3 col = (uCyan * v + uGold * g) * (0.6 + uEnergy * 0.5) * (0.35 + fade * 0.65) + uIce * w;
          gl_FragColor = vec4(col * uIntensity, 1.0);
        }`}),t=new vm(new Rm(11,11),e);t.renderOrder=1,t.position.z=-2.6,t.scale.setScalar(1.12),this.eye.add(t)}buildPupil(){let e=new Ym({transparent:!0,depthWrite:!1,depthTest:!1,uniforms:this.uniforms,vertexShader:`varying vec3 vN; void main(){ vN = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform float uPupil; varying vec3 vN;
        void main(){
          vec3 n = normalize(vN);
          ${Py}
          float px = fwidth(r);
          float a = 1.0 - smoothstep(uPupil - 0.03 - px, uPupil - 0.03 + px, r);
          float shade = mix(0.0, 0.012, smoothstep(0.0, uPupil, r)); // deepest at the centre
          gl_FragColor = vec4(vec3(0.0, shade * 0.6, shade), a);
        }`}),t=new zm(2.004,96,16,0,Math.PI*2,0,.7);t.rotateX(Math.PI/2);let n=new vm(t,e);n.renderOrder=5,this.overlayBall.add(n)}buildCornea(){let e=new Ym({...Ly,uniforms:this.uniforms,vertexShader:`
        varying vec3 vN; varying vec3 vVN; varying vec3 vVP;
        void main(){
          vN = normalize(position - vec3(0.0, 0.0, ${Ay(Ny*.18)}));
          vVN = normalize(normalMatrix * normal);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vVP = mv.xyz;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform vec3 uIce; uniform vec3 uCyan; uniform float uIntensity;
        varying vec3 vN; varying vec3 vVN; varying vec3 vVP;
        void main(){
          vec3 N = normalize(vVN);
          vec3 V = normalize(-vVP);
          vec3 R = reflect(-V, N);
          // Big soft window (upper left) + small sharp catch-light: fixed in view space, so they stay
          // put while the eyeball turns underneath them, like a real wet eye.
          float window = pow(max(dot(R, normalize(vec3(-0.5, 0.62, 0.6))), 0.0), 90.0) * 0.55;
          float catchL = pow(max(dot(R, normalize(vec3(-0.28, 0.36, 0.89))), 0.0), 900.0) * 1.3;
          float rim = pow(1.0 - max(dot(N, V), 0.0), 4.0) * 0.08;
          float fadeEdge = smoothstep(0.45, 0.7, normalize(vN).z); // blend the cap into the ball
          vec3 col = (uIce * (window + catchL) + uCyan * rim) * fadeEdge;
          gl_FragColor = vec4(col * uIntensity, 1.0);
        }`}),t=new zm(Ny*.85,64,24,0,Math.PI*2,0,.95);t.rotateX(Math.PI/2),t.translate(0,0,Ny*.18);let n=new vm(t,e);n.renderOrder=6,this.overlayBall.add(n)}buildDust(){let e=2600,t=new Float32Array(e*3);for(let n=0;n<e;n++){let e=Math.random()*Math.PI*2,r=3.8+Math.random()**.8*10;t.set([Math.cos(e)*r,Math.sin(e)*r,-1-Math.random()*8],n*3)}let n=new Jp;n.setAttribute(`position`,new Np(t,3));let r=new jm(n,new Em({...Ly,color:Ey.clone().multiplyScalar(.6),size:.03,opacity:.35}));r.name=`dust`,r.renderOrder=0;let i=new Float32Array(4200);for(let e=0;e<1400;e++){let t=Math.random()*Math.PI*2,n=3.8+Math.random()**.8*10;i.set([Math.cos(t)*n,Math.sin(t)*n,-1-Math.random()*8],e*3)}let a=new Jp;a.setAttribute(`position`,new Np(i,3)),r.add(new jm(a,new Em({...Ly,color:Oy.clone().multiplyScalar(.8),size:.04,opacity:.45}))),this.scene.add(r)}setState(e){e===`speaking`&&this.state!==`speaking`&&(this.pulsePhase=0),this.state=e}setDamage(e){this.damage=e}resize(){let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;if(!e||!t)return;this.sizeW=e,this.sizeH=t,this.renderer.setSize(e,t,!1),this.composer.setSize(e,t),this.post.uniforms.uResolution.value.set(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix();let n=Jd.degToRad(this.camera.fov/2),r=3.75/(Math.tan(n)*this.camera.aspect),i=4.2/Math.tan(n);this.baseDistance=Math.max(r,i*.75),this.lookY=e<t?-this.baseDistance*Math.tan(n)*.3:0}dispose(){cancelAnimationFrame(this.raf),this.observer?.disconnect(),this.composer.dispose(),this.renderer.dispose()}loop=()=>{this.raf=requestAnimationFrame(this.loop),(this.canvas.clientWidth!==this.sizeW||this.canvas.clientHeight!==this.sizeH)&&this.resize(),this.timer.update();let e=Math.min(this.timer.getDelta(),.05),t=this.timer.getElapsed(),n=this.getInput();this.voice+=(n.voice-this.voice)*.3,this.mic+=(n.mic-this.mic)*.3;let r={offline:.3,connecting:.5,listening:.6,thinking:.9,speaking:.8,acting:1};this.energy+=(r[this.state]-this.energy)*e*2.5;let i=this.voice+this.mic*.4,a=jy*(this.state===`listening`?.8:this.state===`thinking`?.9:this.state===`offline`?1.05:1)+Math.sin(t*1.1)*.012+this.voice*.1;if(this.uniforms.uPupil.value+=(a-this.uniforms.uPupil.value)*.12,n.look)this.lookTarget.set(n.look.x,n.look.y).clampLength(0,1),this.nextSaccade=t+1.5;else if(t>this.nextSaccade){let e=this.state===`thinking`?.6:.3;this.lookTarget.set((Math.random()-.5)*e,(Math.random()-.5)*e*.7),this.nextSaccade=t+.8+Math.random()*(this.state===`thinking`?.9:2.8)}this.look.lerp(this.lookTarget,n.look?.18:.22),this.uniforms.uLook.value.copy(this.look),this.ball.rotation.set(-this.look.y*.5,this.look.x*.6,0),this.overlayBall.rotation.copy(this.ball.rotation),this.tiltVel.x+=n.spin.x*.5,this.tiltVel.y+=n.spin.y*.5,this.tiltVel.multiplyScalar(.88),this.tilt.add(this.tiltVel).multiplyScalar(.95),this.tilt.clampScalar(-.5,.5),this.eye.rotation.set(this.tilt.x,this.tilt.y,0),this.overlayEye.rotation.copy(this.eye.rotation);let o=Ey.clone().lerp(Dy,this.state===`acting`?.3:0).lerp(ky,Math.max(0,this.damage-.6)*1.2);this.uniforms.uCyan.value.copy(o),this.uniforms.uTime.value=t,this.uniforms.uLevel.value=i,this.uniforms.uEnergy.value=this.energy,this.uniforms.uIntensity.value=this.state===`offline`?.85:1,this.state===`speaking`&&this.voice>.45&&this.pulsePhase>.6&&(this.pulsePhase=0),this.pulsePhase=Math.min(1,this.pulsePhase+e*.7),this.uniforms.uPulse.value=this.pulsePhase,this.uniforms.uPulseAmp.value=.25+this.voice*.4;let s=e*(.6+this.energy*.9+this.voice*2.5);for(let e of this.rings)e.pivot.rotation.x+=e.spin.x*s,e.pivot.rotation.y+=e.spin.y*s,e.pivot.rotation.z+=e.spin.z*s;let c=this.scene.getObjectByName(`dust`);c&&(c.rotation.z+=e*(.006+this.energy*.012)),this.zoom=Jd.clamp(this.zoom/n.zoom,.5,1.8);let l=this.baseDistance*this.zoom;this.distance+=(l-this.distance)*.1,this.camera.position.set(Math.sin(t*.17)*.08,this.lookY+Math.sin(t*.13)*.06,this.distance),this.camera.lookAt(0,this.lookY,0);let u=this.damage*.06+(this.voice>.6?this.damage*.15:0);this.post.uniforms.uTime.value=t,this.post.uniforms.uGlitch.value=Math.random()<u?.3+Math.random()*.5:this.damage*.06,this.post.uniforms.uAberration.value=8e-4+i*.0025,this.bloom.strength=.5+i*.3+this.energy*.12,this.composer.render(e)}};function zy(e){let t=2048,n=new Float32Array(t);for(let r=0;r<t;r++){let t=r/2047*2-1;n[r]=e<.05?t:Math.tanh(t*e)/Math.tanh(e)}return n}function By(e,t=1.1,n=3.2){let r=Math.floor(e.sampleRate*t),i=e.createBuffer(2,r,e.sampleRate);for(let e=0;e<2;e++){let t=i.getChannelData(e);for(let e=0;e<r;e++)t[e]=(Math.random()*2-1)*(1-e/r)**n}return i}var Vy={cinematic:{rate:.9,pitch:1,ringMix:0,comb:0,doubler:0,reverb:.1,drive:0,lowShelf:4,presence:1.5},robot:{rate:.95,pitch:.82,ringMix:.25,comb:.28,doubler:.2,reverb:.06,drive:1.6,lowShelf:5,presence:3.5},natural:{rate:1,pitch:1,ringMix:0,comb:0,doubler:0,reverb:0,drive:0,lowShelf:0,presence:0}};async function Hy(e=`/worklets/ultron-voice.js`,t=new AudioContext,n=`cinematic`){await t.audioWorklet.addModule(e);let r=new AudioWorkletNode(t,`ultron-voice`,{outputChannelCount:[1]}),i=t.createGain(),a=t.createGain();r.connect(a).connect(i);let o=t.createGain();for(let[e,n]of[[11,.23],[17,.31]]){let i=t.createDelay(.05);i.delayTime.value=e/1e3;let a=t.createOscillator();a.frequency.value=n;let s=t.createGain();s.gain.value=.0015,a.connect(s).connect(i.delayTime),a.start(),r.connect(i).connect(o)}o.connect(i);let s=t.createGain();for(let e of[3.7,5.9,8.3]){let n=t.createDelay(.05);n.delayTime.value=e/1e3;let i=t.createGain();i.gain.value=.5,r.connect(n),n.connect(i).connect(n),n.connect(s)}s.connect(i);let c=t.createWaveShaper();c.oversample=`4x`;let l=t.createBiquadFilter();l.type=`highpass`,l.frequency.value=70;let u=t.createBiquadFilter();u.type=`lowshelf`,u.frequency.value=160;let d=t.createBiquadFilter();d.type=`peaking`,d.frequency.value=3e3,d.Q.value=.9;let f=t.createDynamicsCompressor();f.threshold.value=-20,f.knee.value=12,f.ratio.value=3,f.attack.value=.005,f.release.value=.2;let p=t.createConvolver();p.buffer=By(t);let m=t.createGain(),h=t.createGain();h.gain.value=.8;let g=t.createDynamicsCompressor();g.threshold.value=-3,g.knee.value=0,g.ratio.value=20,g.attack.value=.001,g.release.value=.1;let _=t.createAnalyser();_.fftSize=512,_.smoothingTimeConstant=.6,i.connect(c).connect(l).connect(u).connect(d).connect(f),f.connect(h),f.connect(p).connect(m).connect(h),h.connect(g),g.connect(_),g.connect(t.destination);let v=t.createGain(),y=t.createDynamicsCompressor();y.knee.value=8,y.ratio.value=6,y.attack.value=.002,y.release.value=.25;let b=t.createGain(),x=t.createDynamicsCompressor();x.threshold.value=-4,x.knee.value=0,x.ratio.value=20,x.attack.value=.001,x.release.value=.15;let S=t.createGain();S.gain.value=.9,v.connect(y).connect(b).connect(x).connect(S),S.connect(_),S.connect(t.destination);let C=e=>{y.threshold.value=e?-30:-3,b.gain.value=e?3.2:1};C(!1);let w=null,T=new Audio;T.muted=!0;let E=e=>r.parameters.get(e),D=n,O=0,k=()=>{let e=Vy[D],n=t.currentTime,r=O;E(`pitch`).setTargetAtTime(e.pitch,n,.02),E(`ringMix`).setTargetAtTime(Math.min(1,e.ringMix+r*.25),n,.05),E(`damage`).setTargetAtTime(r,n,.05),a.gain.setTargetAtTime(D===`robot`?.8:1,n,.02),o.gain.setTargetAtTime(e.doubler,n,.05),s.gain.setTargetAtTime(e.comb+(D===`natural`?0:r*.25),n,.05),m.gain.setTargetAtTime(e.reverb,n,.05),u.gain.setTargetAtTime(e.lowShelf,n,.05),d.gain.setTargetAtTime(e.presence,n,.05),c.curve=zy(e.drive+(D===`natural`?0:r*6))};return k(),{ctx:t,input:r,direct:v,setLoud:C,analyser:_,get rate(){return Vy[D].rate},setDamage(e){O=Math.max(0,Math.min(1,e)),k()},setStyle(e){D=e,k()},connectStream(e){w?.disconnect(),T.srcObject=e,T.play().catch(()=>{}),w=t.createMediaStreamSource(e),w.connect(r)},close(){w?.disconnect(),T.srcObject=null,t.close().catch(()=>{})}}}function Uy(e,t){let n=.008,r=0;for(;r<e.length&&Math.abs(e[r])<n;)r++;let i=e.length-1;for(;i>r&&Math.abs(e[i])<n;)i--;if(r>=i)return[0,e.length];let a=Math.round(t*.04);return[Math.max(0,r-a*2),Math.min(e.length,i+a*3)]}function Wy(e,t,n){let r=t.sampleRate,i=Array.from({length:t.numberOfChannels},(e,n)=>t.getChannelData(n)),[a,o]=Uy(i[0],r),s=o-a,c=i.map(e=>e.subarray(a,o)),l=c[0];if(Math.abs(n-1)<.01||s<r*.1){let t=e.createBuffer(c.length,s,r);return c.forEach((e,n)=>t.copyToChannel(e,n)),t}let u=Math.round(r*.03)&-2,d=u/2,f=d*n,p=Math.round(r*.008),m=Math.floor(s/n),h=e.createBuffer(c.length,m,r),g=Array.from({length:c.length},(e,t)=>h.getChannelData(t)),_=new Float32Array(u);for(let e=0;e<u;e++)_[e]=.5-.5*Math.cos(2*Math.PI*e/u);let v=0;for(let e=0;e*d<m;e++){let t=e*d,n=Math.round(e*f),r=Math.min(n,Math.max(0,s-u));if(e>0){let e=v+d;if(e+u<=s){let t=(t,n)=>{let r=0,i=1e-9;for(let a=0;a<u;a+=n){let n=l[t+a];r+=l[e+a]*n,i+=n*n}return r/Math.sqrt(i)},i=Math.max(0,n-p),a=Math.min(s-u,n+p),o=-1/0;for(let e=i;e<=a;e+=3){let n=t(e,3);n>o&&(o=n,r=e)}let c=r;o=-1/0;for(let e=Math.max(i,c-3);e<=Math.min(a,c+3);e++){let n=t(e,1);n>o&&(o=n,r=e)}}}for(let e=0;e<c.length;e++){let n=c[e],i=g[e];for(let e=0;e<u&&t+e<m&&r+e<s;e++)i[t+e]+=n[r+e]*_[e]}v=r}return h}var Gy=e=>e instanceof rc&&/rate limiting/i.test(e.message),Ky=e=>e instanceof DOMException&&e.name===`AbortError`||e instanceof rc&&/rejected the API key|can't be used|out of ElevenLabs credits/i.test(e.message),qy=typeof window<`u`?window.SpeechRecognition??window.webkitSpeechRecognition:void 0,Jy=!!qy,Yy=typeof navigator<`u`?navigator.audioSession:void 0,Xy=!1;function Zy(e){try{Yy&&(Yy.type=e)}catch{}}var Qy=typeof speechSynthesis<`u`,$y=class{rec=null;level=0;get listening(){return!!this.rec}start(e,t){if(!qy)return t.onError(`Speech recognition isn't available in this browser. Use Safari, or type.`);this.stop();let n=new qy;n.lang=e,n.continuous=!1,n.interimResults=!0;let r=``;n.onresult=e=>{let n=``;for(let t=e.resultIndex;t<e.results.length;t++){let i=e.results[t];i.isFinal?r+=i[0].transcript:n+=i[0].transcript}this.level=.6+Math.random()*.4,t.onInterim((r+n).trim())},n.onerror=e=>{e.error!==`no-speech`&&e.error!==`aborted`&&t.onError(e.error===`not-allowed`||e.error===`service-not-allowed`?`Mic or Speech Recognition is blocked. Allow it in Settings › Safari (and Siri & Dictation must be on).`:`Speech error: ${e.error}`)},n.onend=()=>{if(this.rec!==n)return;this.rec=null;let e=r.trim();e&&t.onFinal(e),t.onEnd()},this.rec=n,Xy=!0,n.start()}stop(){this.rec?.stop()}cancel(){let e=this.rec;this.rec=null,e?.abort()}},eb=class e{workletUrl;voiceURI=``;lang=`en-US`;damage=.15;level=0;eleven=null;style=`natural`;speed=1.18;depth=.3;onIdle=null;onStart=null;backupVoice=!1;loud=!1;fast=!1;onError=null;buffer=``;pending=``;startedReply=!1;lastSpoken=``;queued=0;boost=0;fx=null;fxLoading=null;chain=Promise.resolve();generation=0;abort=new AbortController;current=null;levelBuf=new Uint8Array(512);lastError=``;ttsQueue=Promise.resolve();constructor(e){this.workletUrl=e;let t=()=>{if(this.fx&&this.current){this.fx.analyser.getByteTimeDomainData(this.levelBuf);let e=0;for(let t=0;t<this.levelBuf.length;t++){let n=(this.levelBuf[t]-128)/128;e+=n*n}this.level=Math.min(1,Math.sqrt(e/this.levelBuf.length)*4)}else Qy&&speechSynthesis.speaking?(this.boost*=.85,this.level=.35+Math.random()*.35+this.boost):this.level*=.8;requestAnimationFrame(t)};requestAnimationFrame(t)}static voices(){return Qy?speechSynthesis.getVoices():[]}static bestVoice(t){let n=t.split(`-`)[0].toLowerCase(),r=e.voices().filter(e=>e.lang.toLowerCase().startsWith(n)),i=[`evan`,`nathan`,`aaron`,`tom`,`reed`,`daniel`,`arthur`,`fred`,`alex`],a=e=>{let n=`${e.name} ${e.voiceURI}`.toLowerCase(),r=0;return n.includes(`premium`)&&(r+=4),n.includes(`enhanced`)&&(r+=3),n.includes(`siri`)&&(r+=2),i.some(e=>n.includes(e))&&(r+=2),e.lang.toLowerCase()===t.toLowerCase()&&(r+=1),r};return r.sort((e,t)=>a(t)-a(e))[0]}unlock(){if(Zy(`playback`),Qy){let e=new SpeechSynthesisUtterance(` `);e.volume=0,speechSynthesis.speak(e)}if(!this.fxLoading){let e=new AudioContext;this.fxLoading=Hy(this.workletUrl,e,this.style).then(e=>(e.setDamage(this.damage),this.fx=e,e)).catch(e=>(this.onError?.(`Voice FX failed to load: ${e.message}`),null))}this.fx?.ctx.resume().catch(()=>{})}setStyle(e){this.style=e,this.fx?.setStyle(e)}setDamage(e){this.damage=e,this.fx?.setDamage(e)}feed(e){this.buffer+=e;let t=/[^.!?。！？\n]+[.!?。！？]+["')\]]*\s+|[^\n]*\n+/g,n,r=0;for(;n=t.exec(this.buffer);)r=t.lastIndex,this.pending+=n[0],this.pending.length>=280&&(this.startedReply=!0,this.say(this.pending),this.pending=``);this.buffer=this.buffer.slice(r)}flush(){let e=this.pending+this.buffer;e.trim()&&this.say(e),this.pending=``,this.buffer=``,this.startedReply=!1,this.lastSpoken=``,this.queued===0&&this.onIdle?.()}stop(){this.buffer=``,this.pending=``,this.startedReply=!1,this.lastSpoken=``,this.queued=0,this.generation++,this.abort.abort(),this.abort=new AbortController,this.chain=Promise.resolve(),this.ttsQueue=Promise.resolve();try{this.current?.stop()}catch{}this.current=null,this.fx?.setDamage(this.damage),Qy&&speechSynthesis.cancel()}get speaking(){return this.queued>0}done(e){e===this.generation&&(this.queued=Math.max(0,this.queued-1),this.queued===0&&!this.buffer&&this.onIdle?.())}say(e){let t=e.replace(/[*_#`>]/g,``).replace(/https?:\/\/\S+/g,`link`).trim();if(!t)return;this.queued++;let n=this.generation;if(this.eleven?.apiKey&&this.eleven.voiceId){let{apiKey:e,voiceId:r}=this.eleven,i=this.lastSpoken,a=this.ttsQueue.then(()=>n===this.generation?pc(e,r,t,this.abort.signal,i,this.speed,this.fast):Promise.reject(new DOMException(`stale`,`AbortError`)));this.ttsQueue=a.catch(()=>{}),this.lastSpoken=(this.lastSpoken+` `+t).slice(-500),a.catch(()=>{}),this.chain=this.chain.then(()=>this.playEleven(t,a,n))}else this.chain=this.chain.then(()=>this.speakSystem(t,n))}async prepareOutput(e){Xy&&(Xy=!1,Zy(`ambient`),Zy(`playback`),await new Promise(e=>setTimeout(e,40))),e&&e.state!==`running`&&await e.resume().catch(()=>{}),this.fx?.setLoud(this.loud)}async playEleven(e,t,n){if(n===this.generation)try{let r=t.catch(async t=>{for(let r of Gy(t)?[1200,3e3]:[400]){if(n!==this.generation||!this.eleven||Ky(t))throw t;await new Promise(e=>setTimeout(e,r));try{return await pc(this.eleven.apiKey,this.eleven.voiceId,e,this.abort.signal,``,this.speed,this.fast)}catch(e){t=e}}throw t}),[{bytes:i,applied:a},o]=await Promise.all([r,this.fxLoading??Promise.resolve(null)]);if(n!==this.generation)return;if(!o)throw Error(`audio engine not ready`);let s=Wy(o.ctx,await o.ctx.decodeAudioData(i),this.speed/a);if(n!==this.generation)return;let c=this.damage>=.35&&Math.random()<this.damage*.3;if(o.setDamage(c?Math.min(1,this.damage+.2+Math.random()*.2):this.damage),await this.prepareOutput(o.ctx),n!==this.generation)return;let l=o.ctx.createBufferSource();l.buffer=s,l.playbackRate.value=this.style===`natural`?1:1-this.depth*.15,l.connect(this.style===`natural`&&!c?o.direct:o.input),this.current=l,await new Promise(e=>{l.onended=()=>e(),l.start(),this.onStart?.()}),this.current===l&&(this.current=null),o.setDamage(this.damage),this.done(n)}catch(t){if(n!==this.generation)return;let r=t.message;if(this.backupVoice){r!==this.lastError&&this.onError?.(`${r} Using the iPhone voice for now.`),this.lastError=r,await this.speakSystem(e,n);return}this.onError?.(`🔇 Voice didn't come through: ${r}`),this.done(n)}}speakSystem(t,n){return n===this.generation?Qy?this.prepareOutput().then(()=>new Promise(r=>{if(n!==this.generation)return r();let i=new SpeechSynthesisUtterance(t),a=speechSynthesis.getVoices().find(e=>e.voiceURI===this.voiceURI)??e.bestVoice(this.lang);a&&(i.voice=a),i.lang=a?.lang||this.lang,i.pitch=Math.max(.6,1-this.depth*.3-this.damage*.2),i.rate=Math.min(1.3,.95*this.speed-this.damage*.08),i.onboundary=()=>this.boost=.35,i.onstart=()=>this.onStart?.();let o=()=>{this.done(n),r()};i.onend=o,i.onerror=o,speechSynthesis.speak(i)})):(this.done(n),Promise.resolve()):Promise.resolve()}},Z=e=>document.getElementById(e),tb=e=>e?`…${e.slice(-4)}`:`none`,Q=Tc(),nb=new $y,$=new eb(t);$.voiceURI=Q.voiceURI,$.lang=Q.speechLang,$.damage=Q.damage,$.style=Q.voiceStyle,$.speed=Q.voiceSpeed,$.depth=Q.voiceDepth,$.fast=Q.voiceFast,$.backupVoice=Q.voiceBackup;function rb(){let e=Q.elevenCustomVoiceId||Q.elevenVoiceId;$.eleven=Q.elevenKey&&e?{apiKey:Q.elevenKey,voiceId:e}:null}rb();var ib=`offline`,ab=!1,ob=0,sb=null,cb={x:0,y:0},lb=1,ub=null,db=new Ry(Z(`orb`),()=>{let e={...cb},t=lb,n=ub;if(cb.x=cb.y=0,lb=1,sb){let r=sb.read(performance.now());e.x+=r.spinDelta.x,e.y+=r.spinDelta.y,t*=r.zoomDelta,r.cursor&&(n={x:r.cursor.x*2-1,y:-(r.cursor.y*2-1)}),Ib(r.landmarks,r.pinching)}return nb.level*=.9,{voice:$.level,mic:nb.listening?.2+nb.level*.6:0,spin:e,zoom:t,look:n}},{maxPixelRatio:2});db.setDamage(Q.damage),addEventListener(`resize`,()=>db.resize());{let e=Z(`orb`),t=new Map,n=0,r=()=>{let[e,n]=[...t.values()];return Math.hypot(e.x-n.x,e.y-n.y)},i=t=>{let n=e.getBoundingClientRect();ub={x:(t.clientX-n.left)/n.width*2-1,y:-((t.clientY-n.top)/n.height*2-1)}};e.addEventListener(`pointerdown`,a=>{e.setPointerCapture(a.pointerId),t.set(a.pointerId,{x:a.clientX,y:a.clientY}),t.size===2&&(n=r()),i(a)}),e.addEventListener(`pointermove`,e=>{let a=t.get(e.pointerId);if(a&&(t.size===1&&(cb.x+=(e.clientY-a.y)/innerHeight*1.5,cb.y+=(e.clientX-a.x)/innerWidth*1.5,i(e)),t.set(e.pointerId,{x:e.clientX,y:e.clientY}),t.size===2)){let e=r();n&&(lb*=e/n),n=e}});let a=e=>{t.delete(e.pointerId),n=0,t.size||(ub=null)};e.addEventListener(`pointerup`,a),e.addEventListener(`pointercancel`,a),e.addEventListener(`wheel`,e=>lb*=e.deltaY>0?.95:1.05,{passive:!0})}var fb={offline:`STANDBY`,connecting:`CONNECTING`,listening:`LISTENING`,thinking:`THINKING`,speaking:`SPEAKING`,acting:`EXECUTING`};function pb(e){ib=e,db.setState(e),Z(`status`).className=`status s-${e}`,Z(`status-text`).textContent=fb[e],Z(`mic`).classList.toggle(`live`,e===`listening`&&!kb),Z(`call-mute`).classList.toggle(`live`,e===`listening`&&kb)}function mb(e,t=``){let n=Z(`log`),r=document.createElement(`div`);r.className=`line r-${e}`;let i=document.createElement(`div`);for(i.className=`bubble`,i.textContent=t,r.appendChild(i),n.appendChild(r);n.children.length>60;)n.firstChild.remove();return n.scrollTop=n.scrollHeight,i}function hb(e){Z(`caption`).textContent=e}function gb(e){let t=Z(`actions`),n=document.createElement(`a`);for(n.className=`action`,n.href=e.url,n.textContent=`▶ ${e.label}`,n.addEventListener(`click`,()=>setTimeout(()=>n.remove(),400)),t.appendChild(n);t.children.length>3;)t.firstChild.remove()}function _b(e){Q.damage=e,$.setDamage(e),db.setDamage(e),Oc(Q)}function vb(e){ob+=e,Z(`cost`).textContent=hc(Q.model)!==`claude`&&ob===0?`FREE · ${hc(Q.model)===`groq`?`Groq`:`Gemini`}`:`≈ $${ob.toFixed(ob<.1?4:2)} this session`}var yb={showAction:gb,setDamage:e=>{_b(e),Hb()}},bb={claude:new Qc(()=>({apiKey:Q.apiKey,model:Q.model,webSearch:Q.webSearch}),yb),gemini:new wl(()=>({apiKey:Q.geminiKey,model:Q.model,webSearch:Q.webSearch,groqKey:Q.groqKey}),yb),groq:new Il({name:`Groq`,base:`https://api.groq.com/openai/v1`,historyKey:`ultron.groq.history.v1`,maxHistory:14,fallbacks:[`openai/gpt-oss-120b`,`openai/gpt-oss-20b`,`llama-3.3-70b-versatile`,`llama-3.1-8b-instant`],labelOf:e=>e in mc?mc[e].label.split(` · `)[0]:e},()=>({apiKey:Q.groqKey,model:Q.model,webSearch:Q.webSearch,groqKey:Q.groqKey}),yb)},xb={ask:(...e)=>bb[hc(Q.model)].ask(...e),stop:()=>Object.values(bb).forEach(e=>e.stop()),reset:()=>Object.values(bb).forEach(e=>e.reset())},Sb=()=>Ec(Q,hc(Q.model));$.onError=e=>mb(`sys`,e),$.onStart=()=>{ib!==`listening`&&pb(`speaking`)},$.onIdle=()=>{ab||(pb(`offline`),kb&&!Ab&&Tb())};async function Cb(e){if(!e.trim()||ab)return;Z(`actions`).replaceChildren(),mb(`you`,e),kb&&hb(``),ab=!0,pb(`thinking`);let t=null,n=``,r=!1,i;try{i=await xb.ask(e,{onText(e){r=!0,t??=mb(`ultron`),n+=e,t.textContent=n,kb&&hb(n),Z(`log`).scrollTop=Z(`log`).scrollHeight,$.feed(e)},onTool(e){r=!0,pb(`acting`),mb(`tool`,`⚙ ${e.replace(/_/g,` `)}`),$.flush(),t=null,n=``},onUsage:vb,onNotice:e=>mb(`sys`,e)})}catch(e){i=`⚠ ${e?.message||String(e)}`}if(ab=!1,!i&&!r&&(i=`⚠ Got an empty reply from Claude.`),i){mb(`sys`,i),kb&&hb(i),$.stop(),pb(`offline`),kb&&!Ab&&setTimeout(Tb,800);return}$.flush()}function wb(){xb.stop(),$.stop(),ab=!1,pb(`offline`)}function Tb(){if(!Jy){mb(`sys`,`Voice input isn't supported here. Type instead (or use the keyboard's mic).`),kb&&Pb();return}let e=null;pb(`listening`),nb.start(Q.speechLang,{onInterim(t){if(kb)return hb(t);e??=mb(`you`),e.textContent=t},onFinal(t){e?.parentElement?.remove(),$.loud=!0,Cb(t)},onError(e){mb(`sys`,e),kb&&Pb()},onEnd(){ib===`listening`&&(pb(`offline`),kb&&!Ab&&!ab&&setTimeout(()=>kb&&!ab&&!nb.listening&&Tb(),250))}})}function Eb(){return!Sb()&&(Z(`welcome`).showModal(),!0)}var Db=Z(`type-input`),Ob=()=>Z(`composer`).classList.toggle(`has-text`,!!Db.value.trim());Db.addEventListener(`input`,Ob),Z(`composer`).addEventListener(`submit`,e=>{if(e.preventDefault(),$.unlock(),Eb())return;let t=Db.value;Db.value=``,Ob(),(ab||$.speaking)&&wb(),$.loud=kb,Cb(t)}),Z(`mic`).addEventListener(`click`,()=>{if($.unlock(),!Eb()){if(nb.listening)return nb.stop();if(ab||$.speaking)return wb();Tb()}});var kb=!1,Ab=!1,jb=0,Mb=0;function Nb(){if($.unlock(),Eb())return;if(!Jy)return mb(`sys`,`Voice calls need Safari's speech recognition (Settings › Siri & Dictation on).`);kb=!0,Ab=!1,document.body.classList.add(`in-call`),Z(`callbar`).classList.remove(`hidden`),Z(`call-mute`).classList.remove(`muted`),hb($.eleven?`Connected.`:`Connected. (Add an ElevenLabs key in settings for the real Ultron voice.)`),jb=Date.now();let e=()=>{let e=Math.floor((Date.now()-jb)/1e3);Z(`call-timer`).textContent=`${String(Math.floor(e/60)).padStart(2,`0`)}:${String(e%60).padStart(2,`0`)}`};e(),Mb=window.setInterval(e,1e3),(ab||$.speaking)&&wb(),Tb()}function Pb(){kb=!1,document.body.classList.remove(`in-call`),Z(`callbar`).classList.add(`hidden`),clearInterval(Mb),nb.cancel(),(ab||$.speaking)&&wb(),pb(`offline`);let e=Math.floor((Date.now()-jb)/1e3);mb(`sys`,`Call ended · ${Math.floor(e/60)}:${String(e%60).padStart(2,`0`)}`)}Z(`call`).addEventListener(`click`,Nb),Z(`call-end`).addEventListener(`click`,Pb),Z(`call-type`).addEventListener(`click`,()=>{Pb(),Db.focus()}),Z(`call-mute`).addEventListener(`click`,()=>{$.unlock(),Ab=!Ab,Z(`call-mute`).classList.toggle(`muted`,Ab),Ab?(nb.cancel(),ib===`listening`&&pb(`offline`),hb(`Muted.`)):((ab||$.speaking)&&wb(),hb(``),Tb())}),Z(`hands`).addEventListener(`click`,async()=>{if(sb){sb.stop(),sb=null,Z(`hands`).classList.remove(`on`),Z(`cam`).classList.add(`hidden`);return}mb(`sys`,`Loading hand tracking… the eye follows your hand. Pinch + drag to tilt, pinch with both hands to zoom.`);try{let{startHandTracking:e}=await Le(async()=>{let{startHandTracking:e}=await import(`./handTracking-BXFuIMZ5.js`);return{startHandTracking:e}},[],import.meta.url);sb=await e(`https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@1.0.1/wasm`),Z(`hands`).classList.add(`on`),Z(`cam`).classList.remove(`hidden`)}catch(e){mb(`sys`,`Hand tracking failed: ${e.message}`)}});var Fb=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]];function Ib(e,t){let n=Z(`cam`),r=n.getContext(`2d`);if(r&&sb){r.save(),r.translate(n.width,0),r.scale(-1,1),r.globalAlpha=.35,r.drawImage(sb.video,0,0,n.width,n.height),r.globalAlpha=1,r.strokeStyle=t?`#c9fbff`:`#2fd8ff`,r.lineWidth=1.5,r.beginPath();for(let t of e)for(let[e,i]of Fb)r.moveTo(t[e].x*n.width,t[e].y*n.height),r.lineTo(t[i].x*n.width,t[i].y*n.height);r.stroke(),r.restore()}}var Lb=Z(`settings`);function Rb(){let e=Z(`s-voice`),t=Q.speechLang.split(`-`)[0],n=eb.voices().filter(e=>e.lang.startsWith(t)).sort((e,t)=>e.name.localeCompare(t.name));e.replaceChildren(new Option(`Default`,``),...n.map(e=>new Option(`${e.name} (${e.lang})`,e.voiceURI))),e.value=Q.voiceURI}typeof speechSynthesis<`u`&&speechSynthesis.addEventListener?.(`voiceschanged`,Rb);var zb=``;function Bb(e,t){let n=document.createElement(`optgroup`);n.label=`Most human (Voice Library)`,n.append(...cc.filter(e=>!t.includes(e.voice_id)).map(e=>new Option(e.name,e.voice_id))),e.append(n)}async function Vb(e){let t=Z(`s-eleven-voice`),n=Z(`s-eleven-status`);if(!e){t.replaceChildren(new Option(`Add a key first`,``)),n.textContent=``,zb=``;return}if(e!==zb){n.textContent=`Loading your voices…`;try{let r=await ac(e);zb=e,t.replaceChildren(...r.map(e=>new Option(`${e.name}${e.labels?.accent?` · ${e.labels.accent}`:``}`,e.voice_id))),Bb(t,r.map(e=>e.voice_id)),[...r,...cc].some(e=>e.voice_id===Q.elevenVoiceId)||(Q.elevenVoiceId=uc(r)),t.value=Q.elevenVoiceId,n.textContent=r.length?`${r.length} voices, plus hand-picked human-sounding ones at the bottom.`:`No voices on this account.`}catch(r){if(sc(r)){zb=e,t.replaceChildren(new Option(`${oc.name} (default)`,oc.voice_id)),Bb(t,[]),cc.some(e=>e.voice_id===Q.elevenVoiceId)||(Q.elevenVoiceId=oc.voice_id),t.value=Q.elevenVoiceId,n.textContent=`This key can't list voices, so Ultron uses Adam. Give the key the voices_read permission to pick others.`;return}t.replaceChildren(new Option(`Couldn't load voices`,``)),n.textContent=r instanceof rc?r.message:`Couldn't reach ElevenLabs: ${r.message}`}}}function Hb(){Z(`s-key`).value=Q.apiKey,Z(`s-gemini`).value=Q.geminiKey,Z(`s-groq`).value=Q.groqKey,Z(`s-model`).value=Q.model,Z(`s-eleven-key`).value=Q.elevenKey,Z(`s-eleven-id`).value=Q.elevenCustomVoiceId,Z(`s-lang`).value=Q.speechLang,Z(`s-style`).value=Q.voiceStyle,Z(`s-engine`).value=Q.voiceFast?`fast`:`human`,Z(`s-backup`).checked=Q.voiceBackup,Z(`s-speed`).value=String(Q.voiceSpeed),Z(`s-depth`).value=String(Q.voiceDepth),Ub(),Z(`s-damage`).value=String(Q.damage),Z(`s-damage-val`).textContent=`${Math.round(Q.damage*100)}%`,Z(`s-search`).checked=Q.webSearch,Rb(),Vb(Q.elevenKey),Z(`s-build`).textContent=`Build 2026-09-26 13:08 · Groq ${tb(Q.groqKey)} · Gemini ${tb(Q.geminiKey)} · Anthropic ${tb(Q.apiKey)} · ElevenLabs ${tb(Q.elevenKey)}`,Z(`s-memory`).replaceChildren(...(kc().length?kc():[`(nothing yet)`]).map(e=>Object.assign(document.createElement(`li`),{textContent:e})))}Z(`s-model`).append(...Object.entries(mc).map(([e,t])=>new Option(t.label,e))),Z(`open-settings`).addEventListener(`click`,()=>{Hb(),Lb.showModal()}),Z(`s-eleven-key`).addEventListener(`change`,()=>Vb(Z(`s-eleven-key`).value.trim()));function Ub(){Z(`s-speed-val`).textContent=`${Q.voiceSpeed.toFixed(2)}×`,Z(`s-depth-val`).textContent=`${Math.round(Q.voiceDepth*100)}%`}Z(`s-speed`).addEventListener(`input`,e=>{Q.voiceSpeed=Number(e.target.value),$.speed=Q.voiceSpeed,Ub()}),Z(`s-depth`).addEventListener(`input`,e=>{Q.voiceDepth=Number(e.target.value),$.depth=Q.voiceDepth,Ub()}),Z(`s-damage`).addEventListener(`input`,e=>{_b(Number(e.target.value)),Z(`s-damage-val`).textContent=`${Math.round(Q.damage*100)}%`}),Z(`s-lang`).addEventListener(`change`,()=>{Q.speechLang=xc(Z(`s-lang`).value),Rb()}),Z(`s-clear-chat`).addEventListener(`click`,()=>{xb.reset(),Z(`log`).replaceChildren(),mb(`sys`,`Chat cleared.`)}),Z(`s-clear-memory`).addEventListener(`click`,()=>{confirm(`Wipe everything Ultron remembers about you?`)&&(Ac([]),Hb())}),Lb.addEventListener(`close`,()=>{let e=!!Q.groqKey,t=!!Q.geminiKey;Q.apiKey=Z(`s-key`).value.trim(),Q.geminiKey=Z(`s-gemini`).value.trim(),Q.groqKey=Z(`s-groq`).value.trim(),Q.model=Z(`s-model`).value,!e&&Q.groqKey?Q.model=_c.groq:!t&&Q.geminiKey&&(Q.model=_c.gemini),Q.elevenKey=Z(`s-eleven-key`).value.trim(),Q.elevenVoiceId=Q.elevenKey?Z(`s-eleven-voice`).value||Q.elevenVoiceId:``,Q.elevenCustomVoiceId=Z(`s-eleven-id`).value.trim().replace(/[^A-Za-z0-9]/g,``),Q.voiceURI=Z(`s-voice`).value,Q.voiceStyle=Z(`s-style`).value,Q.voiceFast=Z(`s-engine`).value===`fast`,Q.voiceBackup=Z(`s-backup`).checked,$.backupVoice=Q.voiceBackup,$.fast=Q.voiceFast,$.setStyle(Q.voiceStyle),Q.speechLang=xc(Z(`s-lang`).value),Q.webSearch=Z(`s-search`).checked,$.voiceURI=Q.voiceURI,$.lang=Q.speechLang,rb(),Q=Dc(Q),Oc(Q),vb(0)});var Wb=Z(`welcome`);Wb.addEventListener(`close`,async()=>{let e=Z(`w-key`).value.trim(),t=Z(`w-eleven`).value.trim();if(e){let t=vc(e);t?(t===`groq`?Q.groqKey=e:t===`gemini`?Q.geminiKey=e:Q.apiKey=e,Q.model=_c[t]):mb(`sys`,`That key doesn't look like a Groq (gsk_…), Gemini (AIza…) or Anthropic (sk-ant-…) key.`)}if(t&&(Q.elevenKey=t),Oc(Q),t){try{Q.elevenVoiceId=uc(await ac(t))}catch(e){sc(e)?Q.elevenVoiceId=oc.voice_id:mb(`sys`,e instanceof rc?e.message:`Couldn't reach ElevenLabs; check the key in settings.`)}rb()}Oc(Q),e&&mb(`sys`,`Keys saved. Type below, tap 🎙 for a voice message, or 📞 to call me.`)}),addEventListener(`error`,e=>mb(`sys`,`⚠ ${e.message||`Script error`}`)),addEventListener(`unhandledrejection`,e=>mb(`sys`,`⚠ ${e.reason?.message||String(e.reason)}`)),pb(`offline`),vb(0),mb(`sys`,Sb()?`Online. Type, send a voice message, or call me.`:`Add your free Groq key to wake me.`);var Gb=`ultron.freekey.prompted`,Kb=!1;try{Kb=!!localStorage.getItem(Gb),!Q.groqKey&&!Q.geminiKey&&!Kb&&localStorage.setItem(Gb,`1`)}catch{}(!Sb()||!Q.groqKey&&!Q.geminiKey&&!Kb)&&Wb.showModal(),`serviceWorker`in navigator&&navigator.serviceWorker.register(`./sw.js`).catch(()=>{});export{o as i,Ai as n,Le as r,ki as t};