import{A as k,x as A,y as a}from"./chunks/lit-html.595eb6ed.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=window,y=h.ShadowRoot&&(h.ShadyCSS===void 0||h.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,E=Symbol(),$=new WeakMap;class P{constructor(e,t,s){if(this._$cssResult$=!0,s!==E)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(y&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=$.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&$.set(t,e))}return e}toString(){return this.cssText}}const T=i=>new P(typeof i=="string"?i:i+"",void 0,E),L=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((s,r,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new P(t,i,E)},z=(i,e)=>{y?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const s=document.createElement("style"),r=h.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=t.cssText,i.appendChild(s)})},C=y?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return T(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var u;const d=window,b=d.trustedTypes,R=b?b.emptyScript:"",S=d.reactiveElementPolyfillSupport,g={toAttribute(i,e){switch(e){case Boolean:i=i?R:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},U=(i,e)=>e!==i&&(e==e||i==i),f={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:U};class l extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,s)=>{const r=this._$Ep(s,t);r!==void 0&&(this._$Ev.set(r,s),e.push(r))}),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of s)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const r of s)t.unshift(C(r))}else e!==void 0&&t.push(C(e));return t}static _$Ep(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,s;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)===null||s===void 0||s.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return z(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostConnected)===null||s===void 0?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var s;return(s=t.hostDisconnected)===null||s===void 0?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$EO(e,t,s=f){var r;const o=this.constructor._$Ep(e,s);if(o!==void 0&&s.reflect===!0){const n=(((r=s.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?s.converter:g).toAttribute(t,s.type);this._$El=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var s;const r=this.constructor,o=r._$Ev.get(e);if(o!==void 0&&this._$El!==o){const n=r.getPropertyOptions(o),x=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:g;this._$El=o,this[o]=x.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,s){let r=!0;e!==void 0&&(((s=s||this.constructor.getPropertyOptions(e)).hasChanged||U)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),s.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,s))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,o)=>this[o]=r),this._$Ei=void 0);let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var o;return(o=r.hostUpdate)===null||o===void 0?void 0:o.call(r)}),this.update(s)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(s)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(s=>{var r;return(r=s.hostUpdated)===null||r===void 0?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,s)=>this._$EO(s,this[s],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}l.finalized=!0,l.elementProperties=new Map,l.elementStyles=[],l.shadowRootOptions={mode:"open"},S?.({ReactiveElement:l}),((u=d.reactiveElementVersions)!==null&&u!==void 0?u:d.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var m,v;class c extends l{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const s=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=s.firstChild),s}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=k(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return A}}c.finalized=!0,c._$litElement$=!0,(m=globalThis.litElementHydrateSupport)===null||m===void 0||m.call(globalThis,{LitElement:c});const w=globalThis.litElementPolyfillSupport;w?.({LitElement:c});((v=globalThis.litElementVersions)!==null&&v!==void 0?v:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M=i=>e=>typeof e=="function"?((t,s)=>(customElements.define(t,s),s))(i,e):((t,s)=>{const{kind:r,elements:o}=s;return{kind:r,elements:o,finisher(n){customElements.define(t,n)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function D(i){return(e,t)=>t!==void 0?((s,r,o)=>{r.constructor.createProperty(o,s)})(i,e,t):j(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _;((_=window.HTMLSlotElement)===null||_===void 0?void 0:_.prototype.assignedElements)!=null;const N=a`<svg
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="12" cy="12" r="12" fill="#F2F2F2" />
	<path
		d="M12 22C10.6868 22 9.38642 21.7413 8.17316 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.7612 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2L12 12L12 22Z"
		fill="white"
	/>
	<path
		d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22L12 12L22 12Z"
		fill="#EEF1F3"
	/>
	<path
		d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L12 12L12 2Z"
		fill="black"
	/>
</svg> `,F=a`<svg
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<circle cx="12" cy="12" r="12" fill="#F2F2F2" />
	<path
		d="M12 22C10.6868 22 9.38642 21.7413 8.17316 21.2388C6.95991 20.7362 5.85752 19.9997 4.92893 19.0711C4.00035 18.1425 3.26375 17.0401 2.7612 15.8268C2.25866 14.6136 2 13.3132 2 12C2 10.6868 2.25866 9.38642 2.7612 8.17316C3.26375 6.95991 4.00035 5.85752 4.92893 4.92893C5.85752 4.00035 6.95991 3.26375 8.17317 2.7612C9.38642 2.25866 10.6868 2 12 2L12 12L12 22Z"
		fill="#050505"
	/>
	<path
		d="M22 12C22 13.3132 21.7413 14.6136 21.2388 15.8268C20.7362 17.0401 19.9997 18.1425 19.0711 19.0711C18.1425 19.9997 17.0401 20.7362 15.8268 21.2388C14.6136 21.7413 13.3132 22 12 22L12 12L22 12Z"
		fill="#333333"
	/>
	<path
		d="M12 2C13.3132 2 14.6136 2.25866 15.8268 2.7612C17.0401 3.26375 18.1425 4.00035 19.0711 4.92893C19.9997 5.85752 20.7362 6.95991 21.2388 8.17317C21.7413 9.38642 22 10.6868 22 12L12 12L12 2Z"
		fill="white"
	/>
</svg>`;var B=Object.defineProperty,I=Object.getOwnPropertyDescriptor,O=(i,e,t,s)=>{for(var r=s>1?void 0:s?I(e,t):e,o=i.length-1,n;o>=0;o--)(n=i[o])&&(r=(s?n(e,t,r):n(r))||r);return s&&r&&B(e,t,r),r};const Z=[{name:"default",icon:N},{name:"dark",icon:F}];let p=class extends c{constructor(){super(...arguments),this._doc=document.firstElementChild,this.theme=null}_getCurrentTheme(){const i=localStorage.getItem("theme");i!==null?this._setTheme(i):this._setTheme("default")}firstUpdated(){this._getCurrentTheme()}_setTheme(i){this._doc.setAttribute("data-theme",i);const e=document.querySelector("#home-hero-image");i==="default"&&(e.src="/assets/images/home/fintz_pc_sources.png"),i==="dark"&&(e.src="/assets/images/home/fintz_pc_sources.png"),i==="earth"&&(e.src="/assets/images/home/fintz_pc_sources.png"),i==="ocean"&&(e.src="/assets/images/home/fintz_pc_sources.png"),i==="sand"&&(e.src="/assets/images/home/fintz_pc_sources.png"),localStorage.setItem("theme",i),this.theme=i;const t=document.querySelector("#fintz-logo");i==="default"&&(t.src="logo-positivo.png"),i==="dark"&&(t.src="logo-negativo.png"),localStorage.setItem("theme",i),this.theme=i}render(){const i=a`${Z.map(e=>a`
      <div class="theme-select__container">
        <button
          @click=${()=>this._setTheme(e.name)}
          ?active=${this.theme===e.name}
          title=${`Enable ${e.label} Theme`}
        >
          ${e.icon}
        </button>
        <p>${e.label}</p>
        </div>
      `)}`;return a`
			<div class="theme-switcher__container">
				${i}
			</div>
		`}};p.styles=[L`
			:host {
				display: block;
			}
			button {
				display: inline-flex;
				outline: none;
				border: none;
				background-color: transparent;
				border: 2px solid transparent;
				border-radius: 20rem;
				margin-left: 3px;
				margin-right: 3px;
				cursor: pointer;
				transition: border var(--theme-transition);
			}
			button[active] {
				border: 1px solid var(--theme-primary);
        box-shadow: 0 0 2px 0px var(--theme-primary);
			}
			button:hover {
				border: 2px solid var(--theme-primary);
			}
			.theme-switcher__container {
				margin-top: 1rem;
				display: grid;
				grid-template-columns: repeat(5, 1fr);
			}
			.theme-select__container {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			.theme-select__container p {
				font-size: var(--font-size-sm);
			}
		`];O([D({type:String})],p.prototype,"theme",2);p=O([M("theme-switcher")],p);export{p as ThemeSwitcher};
