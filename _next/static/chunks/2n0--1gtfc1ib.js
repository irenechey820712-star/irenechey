(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={formatUrl:function(){return a},formatWithValidation:function(){return u},urlObjectKeys:function(){return l}};for(var o in r)Object.defineProperty(i,o,{enumerable:!0,get:r[o]});let n=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function a(e){let{auth:t,hostname:i}=e,r=e.protocol||"",o=e.pathname||"",a=e.hash||"",l=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:i&&(u=t+(~i.indexOf(":")?`[${i}]`:i),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||s.test(r))&&!1!==u?(u="//"+(u||""),o&&"/"!==o[0]&&(o="/"+o)):u||(u=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${r}${u}${o}${c}${a}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return a(e)}},18581,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=e.r(71645);function o(e,t){let i=(0,r.useRef)(null),o=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=i.current;e&&(i.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(i.current=n(e,r)),t&&(o.current=n(t,r))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},73668,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"isLocalURL",{enumerable:!0,get:function(){return n}});let r=e.r(18967),o=e.r(52817);function n(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),i=new URL(e,t);return i.origin===t&&(0,o.hasBasePath)(i.pathname)}catch(e){return!1}}},84508,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},22016,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var r={default:function(){return v},useLinkStatus:function(){return _}};for(var o in r)Object.defineProperty(i,o,{enumerable:!0,get:r[o]});let n=e.r(90809),s=e.r(43476),a=n._(e.r(71645)),l=e.r(95057),u=e.r(8372),c=e.r(18581),h=e.r(18967),d=e.r(5550);e.r(33525);let f=e.r(88540),p=e.r(91949),m=e.r(73668),g=e.r(9396);function v(t){var i,r;let o,n,v,[_,b]=(0,a.useOptimistic)(p.IDLE_LINK_STATUS),y=(0,a.useRef)(null),{href:S,as:w,children:R,prefetch:E=null,passHref:A,replace:U,shallow:B,scroll:j,onClick:z,onMouseEnter:T,onTouchStart:k,legacyBehavior:P=!1,onNavigate:C,transitionTypes:F,ref:M,unstable_dynamicOnHover:N,...L}=t;o=R,P&&("string"==typeof o||"number"==typeof o)&&(o=(0,s.jsx)("a",{children:o}));let D=a.default.useContext(u.AppRouterContext),O=!1!==E,V=!1!==E?null===(r=E)||"auto"===r?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,I="string"==typeof(i=w||S)?i:(0,l.formatUrl)(i);if(P){if(o?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=a.default.Children.only(o)}let W=P?n&&"object"==typeof n&&n.ref:M,$=a.default.useCallback(e=>(null!==D&&(y.current=(0,p.mountLinkInstance)(e,I,D,V,O,b)),()=>{y.current&&((0,p.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,p.unmountPrefetchableInstance)(e)}),[O,I,D,V,b]),H={ref:(0,c.useMergedRef)($,W),onClick(t){P||"function"!=typeof z||z(t),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!D||t.defaultPrevented||function(t,i,r,o,n,s,l){if("u">typeof window){let u,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(i)){o&&(t.preventDefault(),location.replace(i));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:h}=e.r(99781);a.default.startTransition(()=>{h(i,o?"replace":"push",!1===n?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,r.current,l)})}}(t,I,y,U,j,C,F)},onMouseEnter(e){P||"function"!=typeof T||T(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),D&&O&&(0,p.onNavigationIntent)(e.currentTarget,!0===N)},onTouchStart:function(e){P||"function"!=typeof k||k(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),D&&O&&(0,p.onNavigationIntent)(e.currentTarget,!0===N)}};return(0,h.isAbsoluteUrl)(I)?H.href=I:P&&!A&&("a"!==n.type||"href"in n.props)||(H.href=(0,d.addBasePath)(I)),v=P?a.default.cloneElement(n,H):(0,s.jsx)("a",{...L,...H,children:o}),(0,s.jsx)(x.Provider,{value:_,children:v})}e.r(84508);let x=(0,a.createContext)(p.IDLE_LINK_STATUS),_=()=>(0,a.useContext)(x);("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},36574,e=>{"use strict";var t=e.i(43476),i=e.i(71645),r=e.i(22016);let o=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,n=8294400;class s{parentElement;canvasElement;gl;program=null;uniformLocations={};fragmentShader;rafId=null;lastRenderTime=0;currentFrame=0;speed=0;currentSpeed=0;providedUniforms;mipmaps=[];hasBeenDisposed=!1;resolutionChanged=!0;textures=new Map;minPixelRatio;maxPixelCount;isSafari=(function(){let e=navigator.userAgent.toLowerCase();return e.includes("safari")&&!e.includes("chrome")&&!e.includes("android")})();uniformCache={};textureUnitMap=new Map;ownerDocument;constructor(e,t,i,r,o=0,s=0,a=2,u=n,c=[]){if(e?.nodeType===1)this.parentElement=e;else throw Error("Paper Shaders: parent element must be an HTMLElement");if(this.ownerDocument=e.ownerDocument,!this.ownerDocument.querySelector("style[data-paper-shader]")){const e=this.ownerDocument.createElement("style");e.innerHTML=l,e.setAttribute("data-paper-shader",""),this.ownerDocument.head.prepend(e)}const h=this.ownerDocument.createElement("canvas");this.canvasElement=h,this.parentElement.prepend(h),this.fragmentShader=t,this.providedUniforms=i,this.mipmaps=c,this.currentFrame=s,this.minPixelRatio=a,this.maxPixelCount=u;const d=h.getContext("webgl2",r);if(!d)throw Error("Paper Shaders: WebGL is not supported in this browser");this.gl=d,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport?.addEventListener("resize",this.handleVisualViewportChange),this.setSpeed(o),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,this.ownerDocument.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}initProgram=()=>{let e=function(e,t,i){let r=e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT),o=r?r.precision:null;o&&o<23&&(t=t.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),i=i.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));let n=a(e,e.VERTEX_SHADER,t),s=a(e,e.FRAGMENT_SHADER,i);if(!n||!s)return null;let l=e.createProgram();return l?(e.attachShader(l,n),e.attachShader(l,s),e.linkProgram(l),e.getProgramParameter(l,e.LINK_STATUS))?(e.detachShader(l,n),e.detachShader(l,s),e.deleteShader(n),e.deleteShader(s),l):(console.error("Unable to initialize the shader program: "+e.getProgramInfoLog(l)),e.deleteProgram(l),e.deleteShader(n),e.deleteShader(s),null):null}(this.gl,o,this.fragmentShader);e&&(this.program=e)};setupPositionAttribute=()=>{let e=this.gl.getAttribLocation(this.program,"a_position"),t=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,t),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)};setupUniforms=()=>{let e={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([t,i])=>{if(e[t]=this.gl.getUniformLocation(this.program,t),i instanceof HTMLImageElement){let i=`${t}AspectRatio`;e[i]=this.gl.getUniformLocation(this.program,i)}}),this.uniformLocations=e};renderScale=1;parentWidth=0;parentHeight=0;parentDevicePixelWidth=0;parentDevicePixelHeight=0;devicePixelsSupported=!1;resizeObserver=null;setupResizeObserver=()=>{this.resizeObserver=new ResizeObserver(([e])=>{if(e?.borderBoxSize[0]){let t=e.devicePixelContentBoxSize?.[0];void 0!==t&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=t.inlineSize,this.parentDevicePixelHeight=t.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)};handleVisualViewportChange=()=>{this.resizeObserver?.disconnect(),this.setupResizeObserver()};handleResize=()=>{let e=0,t=0,i=Math.max(1,window.devicePixelRatio),r=visualViewport?.scale??1;if(this.devicePixelsSupported){let o=Math.max(1,this.minPixelRatio/i);e=this.parentDevicePixelWidth*o*r,t=this.parentDevicePixelHeight*o*r}else{var o;let n,s,a=Math.max(i,this.minPixelRatio)*r;this.isSafari&&(a*=Math.max(1,(o=this.ownerDocument,(s=Math.round(100*(n=outerWidth/((visualViewport?.scale??1)*(visualViewport?.width??window.innerWidth)+(window.innerWidth-o.documentElement.clientWidth)))))%5==0?s/100:33===s?1/3:67===s?2/3:133===s?4/3:n))),e=Math.round(this.parentWidth)*a,t=Math.round(this.parentHeight)*a}let n=Math.min(1,Math.sqrt(this.maxPixelCount)/Math.sqrt(e*t)),s=Math.round(e*n),a=Math.round(t*n),l=s/Math.round(this.parentWidth);(this.canvasElement.width!==s||this.canvasElement.height!==a||this.renderScale!==l)&&(this.renderScale=l,this.canvasElement.width=s,this.canvasElement.height=a,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))};render=e=>{if(this.hasBeenDisposed)return;if(null===this.program)return void console.warn("Tried to render before program or gl was initialized");let t=e-this.lastRenderTime;this.lastRenderTime=e,0!==this.currentSpeed&&(this.currentFrame+=t*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,.001*this.currentFrame),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),0!==this.currentSpeed?this.requestRender():this.rafId=null};requestRender=()=>{null!==this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)};setTextureUniform=(e,t)=>{if(!t.complete||0===t.naturalWidth)throw Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);let i=this.textures.get(e);i&&this.gl.deleteTexture(i),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);let r=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+r);let o=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,o),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));let n=this.gl.getError();if(n!==this.gl.NO_ERROR||null===o)return void console.error("Paper Shaders: WebGL error when uploading texture:",n);this.textures.set(e,o);let s=this.uniformLocations[e];if(s){this.gl.uniform1i(s,r);let i=`${e}AspectRatio`,o=this.uniformLocations[i];if(o){let e=t.naturalWidth/t.naturalHeight;this.gl.uniform1f(o,e)}}};areUniformValuesEqual=(e,t)=>e===t||!!(Array.isArray(e)&&Array.isArray(t))&&e.length===t.length&&e.every((e,i)=>this.areUniformValuesEqual(e,t[i]));setUniformValues=e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([e,t])=>{let i=t;if(t instanceof HTMLImageElement&&(i=`${t.src.slice(0,200)}|${t.naturalWidth}x${t.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[e],i))return;this.uniformCache[e]=i;let r=this.uniformLocations[e];if(!r)return void console.warn(`Uniform location for ${e} not found`);if(t instanceof HTMLImageElement)this.setTextureUniform(e,t);else if(Array.isArray(t)){let i=null,o=null;if(void 0!==t[0]&&Array.isArray(t[0])){let r=t[0].length;if(!t.every(e=>e.length===r))return void console.warn(`All child arrays must be the same length for ${e}`);i=t.flat(),o=r}else o=(i=t).length;switch(o){case 2:this.gl.uniform2fv(r,i);break;case 3:this.gl.uniform3fv(r,i);break;case 4:this.gl.uniform4fv(r,i);break;case 9:this.gl.uniformMatrix3fv(r,!1,i);break;case 16:this.gl.uniformMatrix4fv(r,!1,i);break;default:console.warn(`Unsupported uniform array length: ${o}`)}}else"number"==typeof t?this.gl.uniform1f(r,t):"boolean"==typeof t?this.gl.uniform1i(r,+!!t):console.warn(`Unsupported uniform type for ${e}: ${typeof t}`)})};getCurrentFrame=()=>this.currentFrame;setFrame=e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())};setSpeed=(e=1)=>{this.speed=e,this.setCurrentSpeed(this.ownerDocument.hidden?0:e)};setCurrentSpeed=e=>{this.currentSpeed=e,null===this.rafId&&0!==e&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),null!==this.rafId&&0===e&&(cancelAnimationFrame(this.rafId),this.rafId=null)};setMaxPixelCount=(e=n)=>{this.maxPixelCount=e,this.handleResize()};setMinPixelRatio=(e=2)=>{this.minPixelRatio=e,this.handleResize()};setUniforms=e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.render(performance.now())};handleDocumentVisibilityChange=()=>{this.setCurrentSpeed(this.ownerDocument.hidden?0:this.speed)};dispose=()=>{this.hasBeenDisposed=!0,null!==this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),visualViewport?.removeEventListener("resize",this.handleVisualViewportChange),this.ownerDocument.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount}}function a(e,t,i){let r=e.createShader(t);return r?(e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))?r:(console.error("An error occurred compiling the shaders: "+e.getShaderInfoLog(r)),e.deleteShader(r),null):null}let l=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function u(e){if(e.naturalWidth<1024&&e.naturalHeight<1024){if(e.naturalWidth<1||e.naturalHeight<1)return;let t=e.naturalWidth/e.naturalHeight;e.width=Math.round(t>1?1024*t:1024),e.height=Math.round(t>1?1024:1024/t)}}async function c(e){let t={},i=[];return Object.entries(e).forEach(([e,r])=>{if("string"==typeof r){let o=r||"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";if(!(e=>{try{if(e.startsWith("/"))return!0;return new URL(e),!0}catch{return!1}})(o))return void console.warn(`Uniform "${e}" has invalid URL "${o}". Skipping image loading.`);let n=new Promise((i,r)=>{let n=new Image;(e=>{try{if(e.startsWith("/"))return!1;return new URL(e,window.location.origin).origin!==window.location.origin}catch{return!1}})(o)&&(n.crossOrigin="anonymous"),n.onload=()=>{u(n),t[e]=n,i()},n.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${o}`),r()},n.src=o});i.push(n)}else r instanceof HTMLImageElement&&u(r),t[e]=r}),await Promise.all(i),t}let h=(0,i.forwardRef)(function({fragmentShader:e,uniforms:r,webGlContextAttributes:o,speed:n=0,frame:a=0,width:l,height:u,minPixelRatio:h,maxPixelCount:d,mipmaps:f,style:p,...m},g){var v;let x,_,[b,y]=(0,i.useState)(!1),S=(0,i.useRef)(null),w=(0,i.useRef)(null),R=(0,i.useRef)(o);(0,i.useEffect)(()=>((async()=>{let t=await c(r);S.current&&!w.current&&(w.current=new s(S.current,e,t,R.current,n,a,h,d,f),y(!0))})(),()=>{w.current?.dispose(),w.current=null}),[e]),(0,i.useEffect)(()=>{let e=!1;return(async()=>{let t=await c(r);e||w.current?.setUniforms(t)})(),()=>{e=!0}},[r,b]),(0,i.useEffect)(()=>{w.current?.setSpeed(n)},[n,b]),(0,i.useEffect)(()=>{w.current?.setMaxPixelCount(d)},[d,b]),(0,i.useEffect)(()=>{w.current?.setMinPixelRatio(h)},[h,b]),(0,i.useEffect)(()=>{w.current?.setFrame(a)},[a,b]);let E=(v=[S,g],x=i.useRef(void 0),_=i.useCallback(e=>{let t=v.map(t=>{if(null!=t){if("function"==typeof t){let i=t(e);return"function"==typeof i?i:()=>{t(null)}}return t.current=e,()=>{t.current=null}}});return()=>{t.forEach(e=>e?.())}},v),i.useMemo(()=>v.every(e=>null==e)?null:e=>{x.current&&(x.current(),x.current=void 0),null!=e&&(x.current=_(e))},v));return(0,t.jsx)("div",{ref:E,style:void 0!==l||void 0!==u?{width:"string"==typeof l&&!1===isNaN(+l)?+l:l,height:"string"==typeof u&&!1===isNaN(+u)?+u:u,...p}:p,...m})});h.displayName="ShaderMount";let d={fit:"none",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},f={none:0,contain:1,cover:2};function p(e){if(Array.isArray(e))return 4===e.length?e:3===e.length?[...e,1]:g;if("string"!=typeof e)return g;let t,i,r,o=1;if(e.startsWith("#")){var n;[t,i,r,o]=(3===(n=(n=e).replace(/^#/,"")).length&&(n=n.split("").map(e=>e+e).join("")),6===n.length&&(n+="ff"),[parseInt(n.slice(0,2),16)/255,parseInt(n.slice(2,4),16)/255,parseInt(n.slice(4,6),16)/255,parseInt(n.slice(6,8),16)/255])}else if(e.startsWith("rgb")){let n;[t,i,r,o]=(n=e.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(n[1]??"0")/255,parseInt(n[2]??"0")/255,parseInt(n[3]??"0")/255,void 0===n[4]?1:parseFloat(n[4])]:[0,0,0,1]}else{let n;if(!e.startsWith("hsl"))return console.error("Unsupported color format",e),g;[t,i,r,o]=function(e){let t,i,r,[o,n,s,a]=e,l=o/360,u=n/100,c=s/100;if(0===n)t=i=r=c;else{let e=(e,t,i)=>(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e,o=c<.5?c*(1+u):c+u-c*u,n=2*c-o;t=e(n,o,l+1/3),i=e(n,o,l),r=e(n,o,l-1/3)}return[t,i,r,a]}((n=e.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i))?[parseInt(n[1]??"0"),parseInt(n[2]??"0"),parseInt(n[3]??"0"),void 0===n[4]?1:parseFloat(n[4])]:[0,0,0,1])}return[m(t,0,1),m(i,0,1),m(r,0,1),m(o,0,1)]}let m=(e,t,i)=>Math.min(Math.max(e,t),i),g=[0,0,0,1],v=`
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`,x=`
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);
`,_=`
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`,b=`#version 300 es
precision mediump float;

uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_density;
uniform float u_distortion;
uniform float u_strokeWidth;
uniform float u_strokeCap;
uniform float u_strokeTaper;
uniform float u_noise;
uniform float u_noiseFrequency;
uniform float u_softness;

in vec2 v_patternUV;

out vec4 fragColor;

${v}
${_}

void main() {
  vec2 uv = 2. * v_patternUV;

  float t = u_time;
  float l = length(uv);
  float density = clamp(u_density, 0., 1.);
  l = pow(max(l, 1e-6), density);
  float angle = atan(uv.y, uv.x) - t;
  float angleNormalised = angle / TWO_PI;

  angleNormalised += .125 * u_noise * snoise(16. * pow(u_noiseFrequency, 3.) * uv);

  float offset = l + angleNormalised;
  offset -= u_distortion * (sin(4. * l - .5 * t) * cos(PI + l + .5 * t));
  float stripe = fract(offset);

  float shape = 2. * abs(stripe - .5);
  float width = 1. - clamp(u_strokeWidth, .005 * u_strokeTaper, 1.);


  float wCap = mix(width, (1. - stripe) * (1. - step(.5, stripe)), (1. - clamp(l, 0., 1.)));
  width = mix(width, wCap, u_strokeCap);
  width *= (1. - clamp(u_strokeTaper, 0., 1.) * l);

  float fw = fwidth(offset);
  float fwMult = 4. - 3. * (smoothstep(.05, .4, 2. * u_strokeWidth) * smoothstep(.05, .4, 2. * (1. - u_strokeWidth)));
  float pixelSize = mix(fwMult * fw, fwidth(shape), clamp(fw, 0., 1.));
  pixelSize = mix(pixelSize, .002, u_strokeCap * (1. - clamp(l, 0., 1.)));

  float res = smoothstep(width - pixelSize - u_softness, width + pixelSize + u_softness, shape);

  vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
  float fgOpacity = u_colorFront.a;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  vec3 color = fgColor * res;
  float opacity = fgOpacity * res;

  color += bgColor * (1. - opacity);
  opacity += bgOpacity * (1. - opacity);

  ${x}

  fragColor = vec4(color, opacity);
}
`,y={name:"Default",params:{...d,scale:1,colorBack:"#001429",colorFront:"#79D1FF",density:1,distortion:0,strokeWidth:.5,strokeTaper:0,strokeCap:0,noise:0,noiseFrequency:0,softness:0,speed:1,frame:0}},S=(0,i.memo)(function({speed:e=y.params.speed,frame:i=y.params.frame,colorBack:r=y.params.colorBack,colorFront:o=y.params.colorFront,density:n=y.params.density,distortion:s=y.params.distortion,strokeWidth:a=y.params.strokeWidth,strokeTaper:l=y.params.strokeTaper,strokeCap:u=y.params.strokeCap,noiseFrequency:c=y.params.noiseFrequency,noise:d=y.params.noise,softness:m=y.params.softness,fit:g=y.params.fit,rotation:v=y.params.rotation,scale:x=y.params.scale,originX:_=y.params.originX,originY:S=y.params.originY,offsetX:w=y.params.offsetX,offsetY:R=y.params.offsetY,worldWidth:E=y.params.worldWidth,worldHeight:A=y.params.worldHeight,...U}){let B={u_colorBack:p(r),u_colorFront:p(o),u_density:n,u_distortion:s,u_strokeWidth:a,u_strokeTaper:l,u_strokeCap:u,u_noiseFrequency:c,u_noise:d,u_softness:m,u_fit:f[g],u_scale:x,u_rotation:v,u_offsetX:w,u_offsetY:R,u_originX:_,u_originY:S,u_worldWidth:E,u_worldHeight:A};return(0,t.jsx)(h,{...U,speed:e,frame:i,fragmentShader:b,uniforms:B})},function(e,t){for(let i in e){if("colors"===i){let i=Array.isArray(e.colors),r=Array.isArray(t.colors);if(!i||!r){if(!1===Object.is(e.colors,t.colors))return!1;continue}if(e.colors?.length!==t.colors?.length||!e.colors?.every((e,i)=>e===t.colors?.[i]))return!1;continue}if(!1===Object.is(e[i],t[i]))return!1}return!0}),w=[{kind:"group",id:"dorms-activity",number:"01",name:"도름스 커뮤니티 나의 활동",description:"DoRms에서 나누고 있는 나의 활동을 모아두는 곳",thumb:{kind:"image",src:"/assets/dorms-community.png",alt:"DoRms community"},items:[{name:"자료 공유",description:"도름스 자료 공유 게시판",href:"https://dorms.school/resources",thumb:{kind:"icon",icon:"daisy"}},{name:"내 앱 활동",description:"내가 만든 앱 활동 보기",href:"https://dorms.school/apps/ac53d80b-5f9e-421b-9aa7-b4f3d19614e1",thumb:{kind:"icon",icon:"travel"}}]},{kind:"link",id:"naver-blog",number:"02",name:"네이버 블로그",description:"아이링쌤의 이야기",href:"https://blog.naver.com/irenechey",thumb:{kind:"icon",icon:"naver-blog"}},{kind:"link",id:"instagram",number:"03",name:"인스타그램",description:"여행과 일상 기록",href:"https://www.instagram.com/irene_xoxo0713",thumb:{kind:"icon",icon:"instagram"}},{kind:"group",id:"contact",number:"04",name:"연락처",description:"궁금한 점은 이메일로 문의해 주세요",thumb:{kind:"icon",icon:"sun-hat"},items:[{name:"이메일 문의",description:"irenechey@naver.com",href:"mailto:irenechey@naver.com",thumb:{kind:"icon",icon:"contact"}}]}],R="#FBF3DE",E="#1F3B4D",A="#5C88A6",U="#F2A0A0",B="#E08A3C",j="#2FA8D5",z="#F7D774",T="rgba(31,59,77,0.15)",k="rgba(247,215,116,0.24)",P="linear-gradient(180deg, rgba(47,168,213,0.68), rgba(242,160,160,0.58))",C="linear-gradient(180deg, rgba(31,59,77,0.78), rgba(242,160,160,0.74))",F="#E4572E",M=[{bg:"#F2A0A0",fg:"#1F3B4D"},{bg:"#2FA8D5",fg:"#FBF3DE"},{bg:"#F7D774",fg:"#1F3B4D"},{bg:"#E4572E",fg:"#FBF3DE"}],N=e=>`/irenechey${e}`,L={fit:"none",scale:1.3,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0,density:.5,colorBack:R,colorFront:F,distortion:0,strokeWidth:.5,strokeTaper:0,strokeCap:0,noise:1,noiseFrequency:.25,softness:0,speed:.75,frame:0,maxPixelCount:15e5},D=e=>e.startsWith("http")||e.startsWith("mailto:"),O=e=>{let t=(e||"").trim().toLowerCase();return t?w.findIndex(e=>e.id===t||e.number===t||e.number===t.padStart(2,"0")):-1},V=e=>"group"===e.kind?e.items:[];function I({size:e=16}){return(0,t.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M7 17L17 7M9 7h8v8"})})}function W({size:e=16}){return(0,t.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})}function $({size:e=18}){return(0,t.jsx)("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.3",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M6 9l6 6 6-6"})})}function H({thumb:e,size:i=52}){let r;return"image"===e.kind?(0,t.jsx)("img",{className:"lt-thumb",src:N(e.src),alt:e.alt,loading:"lazy",style:{width:i,height:i}}):(0,t.jsx)("span",{className:"lt-thumb lt-thumb-icon",style:{width:i,height:i},"aria-hidden":"true",children:(0,t.jsx)("img",{src:(r=e.icon,N(`/icons/${r}.svg`)),alt:"",loading:"lazy"})})}function X({onBrowse:e}){return(0,t.jsxs)("div",{className:"lt-intro",children:[(0,t.jsx)(S,{className:"lt-intro-spiral",...L}),(0,t.jsxs)("div",{className:"lt-intro-card",children:[(0,t.jsx)("span",{className:"lt-intro-title",children:"DoRms 교사 아이링쌤"}),(0,t.jsx)("p",{className:"lt-intro-copy",children:"Who Has Seen the Wind? - 바이브코딩의 세계로!"}),(0,t.jsxs)("button",{type:"button",className:"lt-intro-cta",onClick:e,children:["모든 활동 구경하기",(0,t.jsx)($,{size:18})]})]})]})}function q({selected:e,onSelect:i}){return(0,t.jsx)("div",{className:"lt-pills",role:"listbox","aria-label":"링크 선택",children:w.map((r,o)=>{let n=M[o%M.length],s="group"===r.kind?V(r).length:r.href.startsWith("mailto:")?"MAIL":D(r.href)?"EXT":"LINK",a=o===e;return(0,t.jsxs)("div",{className:`lt-pill${a?" lt-pill-active":""}`,style:{background:n.bg,color:n.fg,"--rot":`${[-3,2,-1.5,3.5][o%4]}deg`},children:[(0,t.jsxs)("button",{type:"button",role:"option","aria-selected":a,className:"lt-pill-main",onClick:()=>i(o),children:[(0,t.jsx)(H,{thumb:r.thumb,size:44}),(0,t.jsxs)("span",{className:"lt-pill-text",children:[(0,t.jsx)("span",{className:"lt-pill-name",children:r.name}),(0,t.jsx)("span",{className:"lt-pill-desc",children:r.description})]})]}),(0,t.jsxs)("span",{className:"lt-pill-meta",children:[r.number," // ",s]})]},r.id)})})}function G({item:e}){let i=(0,t.jsxs)(t.Fragment,{children:[e.thumb?(0,t.jsx)(H,{thumb:e.thumb,size:40}):(0,t.jsx)("span",{className:"lt-row-dot","aria-hidden":"true"}),(0,t.jsxs)("span",{className:"lt-row-text",children:[(0,t.jsx)("span",{className:"lt-row-name",children:e.name}),e.description?(0,t.jsx)("span",{className:"lt-row-desc",children:e.description}):null]}),(0,t.jsx)("span",{className:"lt-row-go","aria-hidden":"true",children:(0,t.jsx)(I,{size:15})})]});return D(e.href)?(0,t.jsx)("a",{className:"lt-row",href:e.href,...e.href.startsWith("http")?{target:"_blank",rel:"noopener noreferrer"}:{},children:i}):(0,t.jsx)(r.default,{className:"lt-row",href:e.href,children:i})}function Y({card:e,endRef:i}){let o=V(e);return(0,t.jsxs)("div",{className:"lt-panel-inner",children:[(0,t.jsxs)("div",{className:"lt-sel-head",children:[(0,t.jsx)(H,{thumb:e.thumb,size:60}),(0,t.jsxs)("div",{className:"lt-sel-headtext",children:[(0,t.jsx)("span",{className:"lt-sel-name",children:e.name}),(0,t.jsx)("span",{className:"lt-sel-num",children:e.number})]})]}),(0,t.jsx)("p",{className:"lt-sel-desc",children:e.description}),"group"===e.kind?(0,t.jsx)("div",{className:"lt-rows",children:o.map(e=>(0,t.jsx)(G,{item:e},`${e.name}-${e.href}`))}):D(e.href)?(0,t.jsxs)("a",{className:"lt-visit",href:e.href,...e.href.startsWith("http")?{target:"_blank",rel:"noopener noreferrer"}:{},children:["바로가기 ",(0,t.jsx)(W,{size:16})]}):(0,t.jsxs)(r.default,{className:"lt-visit",href:e.href,children:["바로가기 ",(0,t.jsx)(W,{size:16})]}),(0,t.jsx)("span",{ref:i,className:"lt-panel-end","aria-hidden":"true"})]})}function K({visible:e,className:i=""}){return(0,t.jsxs)("div",{className:`lt-more-hint ${i}${e?" lt-more-visible":""}`,"aria-hidden":!e,children:[(0,t.jsx)("span",{children:"더 보기"}),(0,t.jsx)($,{size:17})]})}e.s(["default",0,function({initialTab:e}={}){let r=O(e),[o,n]=(0,i.useState)(r>=0?r:0),[s,a]=(0,i.useState)(r>=0);(0,i.useEffect)(()=>{let e=O(new URLSearchParams(window.location.search).get("tab")??void 0);e>=0&&(n(e),a(!0))},[]);let[l,u]=(0,i.useState)(!1),[c,h]=(0,i.useState)(!1),d=(0,i.useRef)(null),f=(0,i.useRef)(null),p=w[o],m=(0,i.useMemo)(()=>({"--cream":R,"--ink":E,"--dim":A,"--rose":U,"--brown":B,"--denim":j,"--latte":z,"--border":T,"--scroll-track":k,"--scroll-thumb":P,"--scroll-thumb-hover":C,"--display":"'DM Sans', 'Pretendard', 'Noto Sans KR', system-ui, sans-serif","--body":"'DM Sans', 'Pretendard', 'Noto Sans KR', system-ui, sans-serif","--mono":"'Space Mono', ui-monospace, SFMono-Regular, Menlo, monospace"}),[]);return(0,i.useEffect)(()=>{if(!l)return;let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[l]),(0,i.useEffect)(()=>{r<0||(n(r),a(!0),requestAnimationFrame(()=>{window.innerWidth<=768?u(!0):document.querySelector(".lt-catalog")?.scrollIntoView({block:"start"})}))},[r]),(0,i.useEffect)(()=>{let e=()=>{let e=d.current?.querySelector(".lt-panel-inner"),t=f.current;e&&t?h(t.getBoundingClientRect().bottom>e.getBoundingClientRect().bottom+12):h(!1)};e(),window.addEventListener("resize",e);let t=d.current?.querySelector(".lt-panel-inner");t?.addEventListener("scroll",e,{passive:!0});let i=window.setTimeout(e,160);return()=>{window.removeEventListener("resize",e),t?.removeEventListener("scroll",e),window.clearTimeout(i)}},[o,l]),(0,t.jsxs)("div",{className:`lt-root${s?" lt-root-browsing":""}`,style:m,children:[s?null:(0,t.jsx)(X,{onBrowse:()=>{a(!0),requestAnimationFrame(()=>requestAnimationFrame(()=>document.querySelector(".lt-catalog")?.scrollIntoView({block:"start"})))}}),(0,t.jsx)("header",{className:"lt-header",children:(0,t.jsx)("span",{className:"lt-brand",children:"DoRms 교사 아이링쌤"})}),(0,t.jsxs)("section",{className:"lt-hero",children:[(0,t.jsx)("span",{className:"lt-kicker",children:"DORMS COMMUNITY LINKTREE"}),(0,t.jsx)("h1",{className:"lt-title",children:"DoRms 아이링쌤"}),(0,t.jsx)("p",{className:"lt-tagline",children:"바이브코딩과 여행을 사랑하는 아이링쌤의 활동을 이곳에 모아둡니다."})]}),(0,t.jsxs)("main",{className:"lt-catalog",children:[(0,t.jsx)("div",{className:"lt-pills-wrap",children:(0,t.jsx)(q,{selected:o,onSelect:e=>{n(e),window.innerWidth<=768&&u(!0)}})}),(0,t.jsxs)("div",{ref:d,className:`lt-panel${l?" lt-panel-open":""}`,children:[(0,t.jsxs)("button",{type:"button",className:"lt-sheet-handle",onClick:()=>u(!1),"aria-label":"접기",children:[(0,t.jsx)($,{size:20}),(0,t.jsx)("span",{children:"접기"})]}),(0,t.jsx)(Y,{card:p,endRef:f}),(0,t.jsx)(K,{visible:c,className:"lt-panel-more"})]}),(0,t.jsx)("button",{type:"button",className:`lt-backdrop${l?" lt-backdrop-open":""}`,onClick:()=>u(!1),"aria-label":"닫기"})]}),(0,t.jsxs)("footer",{className:"lt-foot",children:[(0,t.jsx)("span",{children:"DoRms community linktree"}),(0,t.jsxs)("span",{children:[String(w.length).padStart(3,"0"),"-A"]})]})]})}],36574)}]);