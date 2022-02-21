"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[669],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,d=m["".concat(c,".").concat(u)]||m[u]||f[u]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5383:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={title:"How it works",hide_table_of_contents:!1},c="How it works",l={unversionedId:"how_it_works",id:"how_it_works",title:"How it works",description:"The plastic scanner allows you to scan an object (like a shampoo bottle) and identify its plastic type using an approach called discrete near-infrared (NIR) spectroscopy. Sounds like scientific gibberish? It basically means flashing some kind of light on a plastic sample, measuring its reflection and doing some magic with it. The point is, it allows distinguishing between the five most common plastic resins: PET, HDPE, PE, PVC, PP and PS in an affordable, pocket-size manner.",source:"@site/docs/how_it_works.md",sourceDirName:".",slug:"/how_it_works",permalink:"/how_it_works",editUrl:"https://github.com/Plastic-Scanner/docs/how_it_works.md",tags:[],version:"current",frontMatter:{title:"How it works",hide_table_of_contents:!1},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Introduction",permalink:"/boards/pcb_revisions"}},p=[{value:"Discrete NIR spectroscopy",id:"discrete-nir-spectroscopy",children:[],level:2},{value:"Technology",id:"technology",children:[],level:2}],f={toc:p};function m(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"The plastic scanner allows you to scan an object (like a shampoo bottle) and identify its plastic type using an approach called ",(0,a.kt)("strong",{parentName:"p"},"discrete near-infrared (NIR) spectroscopy"),". Sounds like scientific gibberish? It basically means flashing some kind of light on a plastic sample, measuring its reflection and doing some magic with it. The point is, it allows distinguishing between the five most common plastic resins: PET, HDPE, PE, PVC, PP and PS in an affordable, pocket-size manner."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,"  ",(0,a.kt)("img",{alt:"plastic scanner explaination",src:n(3507).Z,width:"853",height:"405"}))),(0,a.kt)("h2",{id:"discrete-nir-spectroscopy"},"Discrete NIR spectroscopy"),(0,a.kt)("p",null,"Let us try to explain this technology and break it down word-by-word:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Spectroscopy")," is the study of the interaction between matter (e.g. plastic sample) and electromagnetic radiation (e.g. near-infrared light) at different wavelengths",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".\nBy shining light onto a surface, some of it will be absorbed and some of it will be reflected and this ratio depends on material's structure and light's wavelength. Measuring the ",(0,a.kt)("em",{parentName:"p"},"reflectance")," at various wavelengths gives a ",(0,a.kt)("em",{parentName:"p"},"reflectance spectrum")," which provides all sorts of useful information about the measured object and that is, brutally simplified, the essence of spectroscopy."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NIR")," stands for Near InfraRed. Visible light is only a small part of the electromagnetic spectrum, beyond red there is infrared it contains the electromagnetic (EM) wavelengths between 780 nm to 2500 nm, it is not visible to the eye, but it is definitely there!"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{alt:"Electromagnetic (EM) spectrum",src:"/img/em_spectrum_nir.svg",width:"800px"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Discrete"),' spectroscopy means we only measure reflectance at cetrain wavelengths, unlike in continuous spectroscopy where the complete spectrum is measured across all frequencies without having a gap between values (e.g. splitting light into a "rainbow" with a prism). '),(0,a.kt)("h2",{id:"technology"},"Technology"),(0,a.kt)("p",null,"The approach mentioned above is implemented on a custom PCB which, at its core, contains a ",(0,a.kt)("strong",{parentName:"p"},"photodiode")," and ",(0,a.kt)("strong",{parentName:"p"},"8 LEDs")," emmiting specific wavelengths",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," of near-infrared light. By flashing each LED individually onto a plastic sample and measuring it's reflectance with the photodiode, we obtain its (discrete) reflectance spectra."),(0,a.kt)("p",null,"Each family of plastic resins has a typical reflectance spectrum, shown below, which is used for comparison and identification of the measured plastic sample."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{alt:"Typical reflectance spectra of different plastic polymers",src:"/img/response_curve.svg",width:"600px"})),(0,a.kt)("p",null,'Industrial devices that can measure a sample\'s continuous spectrum are expensive and hard to produce at home. In our case, we only measure the reflectance at 8 specific points (this is where the "discrete" part comes from) and observe the ratios betwen them.'),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Spectroscopy"},"https://en.wikipedia.org/wiki/Spectroscopy")," ",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Wavelengths of near-infrared LEDs in nanometers: 855, 940, 1050, 1200, 1300, 1450, 1550, 1650",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},3507:function(e,t,n){t.Z=n.p+"assets/images/plasticscannerexplain-5c6739f7ced3b33e6aa163b40399e1ac.gif"}}]);