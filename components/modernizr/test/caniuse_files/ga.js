((() => {
  var k=void 0;
  var aa=encodeURIComponent;
  var l=String;
  var o=Math;
  var ba="push";
  var ca="cookie";
  var p="charAt";
  var q="indexOf";
  var da="getTime";
  var r="toString";
  var t="window";
  var v="length";
  var w="document";
  var x="split";
  var y="location";
  var ea="protocol";
  var fa="href";
  var z="substring";
  var A="join";
  var C="toLowerCase";
  var ga="_gat";
  var ha="_gaq";
  var ia="4.9.4";
  var ja="_gaUserPrefs";
  var ka="ioo";
  var D="&";
  var E="=";
  var F="__utma=";
  var H="__utmb=";
  var la="__utmc=";
  var ma="__utmk=";
  var I="__utmv=";
  var J="__utmz=";
  var na="__utmx=";
  var oa="GASO=";
  var pa=function(){var d=this,f=[],b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";d.set=b => {f[b]=!0};d.Sc=() => {for(var d=[],e=0;e<f[v];e++)f[e]&&(d[o.floor(e/6)]^=1<<e%6);for(e=0;e<d[v];e++)d[e]=b[p](d[e]||0);return d[A]("")+"~"}};
  var qa=new pa;
  function K(d){qa.set(d)}

  var ra=function(d,f){var b=this;b.window=d;b.document=f;b.setTimeout=(b, e) => {setTimeout(b,e)};b.Jb=b => navigator.userAgent[q](b)>=0;b.Xc=() => b.Jb("Firefox")&&![].reduce;b.Vc=() => L[t][ja];b.Gc=() => L[t].external;b.Hc=() => L[t].performance||L[t].webkitPerformance;b.Ic=() => L[t].top==L[t];b.Ya=b => {var e=L[t]&&L[t].gaGlobal;if(b&&!e)e={},L[t].gaGlobal=e;return e};b.ec=b => {L[w][y].href=b};b.qb=
  d => {if(!d||!b.Jb("Firefox"))return d;for(var d=d.replace(/\n|\r/g," "),e=0,f=d[v];e<f;++e){var g=d.charCodeAt(e)&255;if(g==10||g==13)d=d[z](0,e)+"?"+d[z](e+1)}return d}};

  var L=new ra(window,document);
  var sa=d => (f, b, h) => {d[f]=function(...args) {K(b);return h.apply(d,args);};return h};
  var ta=(d, f, b, h) => {d.addEventListener?d.addEventListener(f,b,!!h):d.attachEvent&&d.attachEvent("on"+f,b)};
  var ua=d => Object.prototype[r].call(Object(d))=="[object Array]";
  var M=d => k==d||"-"==d||""==d;
  var N=(d, f, b) => {var h="-",e;!M(d)&&!M(f)&&!M(b)&&(e=d[q](f),e>-1&&(b=d[q](b,e),b<0&&(b=d[v]),h=d[z](e+f[q](E)+1,b)));return h};

  var xa=d => {var f=!1,b=0,h,e;if(!M(d)){f=
  !0;for(h=0;h<d[v];h++)e=d[p](h),b+="."==e?1:0,f=f&&b<=1&&(0==h&&"-"==e||".0123456789"[q](e)>-1)}return f};

  var P=(d, f) => {var b=aa;return b instanceof Function?f?encodeURI(d):b(d):(K(68),escape(d))};
  var Q=(d, f) => {var b=decodeURIComponent,h,d=d[x]("+")[A](" ");if(b instanceof Function)try{h=f?decodeURI(d):b(d)}catch(e){K(17),h=unescape(d)}else K(68),h=unescape(d);return h};
  var R=(d, f) => d[q](f)>-1;
  function ya(d){if(!d||""==d)return"";for(;d[p](0)[v]>0&&" \n\r\t"[q](d[p](0))>-1;)d=d[z](1);for(;d[p](d[v]-1)[v]>0&&" \n\r\t"[q](d[p](d[v]-1))>-1;)d=d[z](0,d[v]-1);return d}
  var T=(d, f) => {d[ba]||K(94);d[d[v]]=f};
  var za=d => {var f=1,b=0,h;if(!M(d)){f=0;for(h=d[v]-1;h>=0;h--)b=d.charCodeAt(h),f=(f<<6&268435455)+b+(b<<14),b=f&266338304,f=b!=0?f^b>>21:f}return f};
  var Aa=() => o.round(o.random()*2147483647);
  var Ba=() => {};
  var Ca=function(d,f){this.ib=d;this.jb=f};

  var Da=function(){function d(b){for(var d=[],b=b[x](","),e,f=0;f<b[v];f++)e=b[f][x](":"),d[ba](new Ca(e[0],e[1]));return d}var f=this;f.Ca="utm_campaign";f.Da="utm_content";f.Ea="utm_id";f.Fa="utm_medium";f.Ga="utm_nooverride";f.Ha="utm_source";f.Ia="utm_term";f.Ja="gclid";f.vc="dclid";f.U=0;f.w=0;f.La=15768E6;f.Ma=18E5;f.s=63072E6;f.V=[];f.W=[];f.wc="cse";f.xc="q";f.Ta=50;f.J=d("daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:encquery,aol:q,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:q,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:query,rambler:words");
  f.f="/";f.L=100;f.ga="/__utm.gif";f.la=1;f.ma=1;f.u="|";f.ka=1;f.Ka=1;f.Ua=1;f.b="auto";f.B=1;f.Wb=10;f.zc=10;f.Ac=0.2;f.o=k};

  var Ea=function(d){
    function f(a,c,b,j){
      var i="";
      var d=0;
      var i=N(a,"2"+c,";");
      if(!M(i)){a=i[q]("^"+b+".");if(a<0)return["",0];i=i[z](a+b[v]+2);i[q]("^")>0&&(i=i[x]("^")[0]);b=i[x](":");i=b[1];d=parseInt(b[0],10);!j&&d<e.m&&(i="")}M(i)&&(i="");return[i,d]
    }function b(a,c){return"^"+[[c,a[1]][A]("."),a[0]][A](":")}function h(a){
      var c=new Date;
      var a=new Date(c[da]()+a);
      return"expires="+a.toGMTString()+"; "
    }
    var e=this;
    var m=d;
    e.m=(new Date)[da]();var g=[F,H,la,J,I,na,oa];e.g=() => {var a=L[w][ca];return m.o?e.Nc(a,
    m.o):a};e.Nc=(a, c) => {for(var b=[],j,i=0;i<g[v];i++)j=f(a,g[i],c)[0],M(j)||(b[b[v]]=g[i]+j+";");return b[A]("")};e.l=(a, c, b) => {var j=b>0?h(b):"";m.o&&(c=e.Oc(L[w][ca],a,m.o,c,b),a="2"+a,j=b>0?h(m.s):"");a+=c;a=L.qb(a);a[v]>2E3&&(K(69),a=a[z](0,2E3));j=a+"; path="+m.f+"; "+j+e.hb();if(!V.pb())L[w].cookie=j};e.Oc=(a, c, d, j, i) => {
      var g="";
      var i=i||m.s;
      var j=b([j,e.m+i*1],d);
      var g=N(a,"2"+c,";");
      if(!M(g))return a=b(f(a,c,d,!0),d),g=g[x](a)[A](""),g=j+g;return j
    };e.hb=() => M(m.b)?"":"domain="+
    m.b+";"
  };var Fa=function(d){
    function f(a){a=ua(a)?a[A]("."):"";return M(a)?"-":a}function b(a,c){
      var n=[];
      var b;
      if(!M(a)&&(n=a[x]("."),c))for(b=0;b<n[v];b++)xa(n[b])||(n[b]="-");return n
    }function h(a,c,n){
      var b=i.I;
      var j;
      var d;
      for(j=0;j<b[v];j++)d=b[j][0],d+=M(c)?c:c+b[j][4],b[j][2](N(a,d,n))
    }
    var e;
    var m;
    var g;
    var a;
    var c;
    var u;
    var j;
    var i=this;
    var s;
    var n=d;
    i.i=new Ea(d);i.Ba=() => k==s||s==i.K();i.g=() => i.i.g();i.ea=() => c?c:"-";i.Pa=a => {c=a};i.fa=a => {s=xa(a)?a*1:"-"};i.da=() => f(u);
    i.X=a => {u=b(a)};i.yc=() => {i.i.l(I,"",-1)};i.Rb=() => s?s:"-";i.hb=() => M(n.b)?"":"domain="+n.b+";";i.ba=() => f(e);i.Na=a => {e=b(a,1)};i.z=() => f(m);i.$=a => {m=b(a,1)};i.ca=() => f(g);i.Oa=a => {g=b(a,1)};i.qa=() => f(a);i.ra=c => {a=b(c);for(c=0;c<a[v];c++)c<4&&!xa(a[c])&&(a[c]="-")};i.Fc=() => j;i.Dc=a => {j=a};i.Qb=() => {e=[];m=[];g=[];a=[];c=k;u=[];s=
    k};i.K=() => {for(var a="",c=0;c<i.I[v];c++)a+=i.I[c][1]();return za(a)};i.Z=a => {
      var c=i.g();
      var n=!1;
      c&&(h(c,a,";"),i.fa(l(i.K())),n=!0);return n
    };i.Sb=a => {h(a,"",D);i.fa(N(a,ma,D))};i.Tb=() => {
      var a=i.I;
      var c=[];
      var n;
      for(n=0;n<a[v];n++)T(c,a[n][0]+a[n][1]());T(c,ma+i.K());return c[A](D)
    };i.Ub=(a, c) => {
      var b=i.I;
      var j=n.f;
      i.Z(a);n.f=c;for(var d=0;d<b[v];d++)if(!M(b[d][1]()))b[d][3]();n.f=j
    };i.Qa=() => {i.i.l(F,i.ba(),n.s)};i.aa=() => {i.i.l(H,i.z(),n.Ma)};i.Ra=() => {i.i.l(la,
    i.ca(),0)};i.sa=() => {i.i.l(J,i.qa(),n.La)};i.Sa=() => {i.i.l(na,i.ea(),n.s)};i.Y=() => {i.i.l(I,i.da(),n.s)};i.Ec=() => {i.i.l(oa,i.Fc(),0)};i.I=[[F,i.ba,i.Na,i.Qa,"."],[H,i.z,i.$,i.aa,""],[la,i.ca,i.Oa,i.Ra,""],[na,i.ea,i.Pa,i.Sa,""],[J,i.qa,i.ra,i.sa,"."],[I,i.da,i.X,i.Y,"."]]
  };
  var Ga="https:"==L[w][y][ea]?"https://ssl.google-analytics.com/":"http://www.google-analytics.com/";
  var Ha=Ga+"p/__utm.gif";

  var Ja=function(){var d=this;d.Bb=(f, b, h, e, m) => {b[v]<=2036||m?d.Aa(f+"?"+b,e):b[v]<=8192?L.Xc()?d.Aa(f+"?"+h+"&err=ff2post&len="+b[v],e):d.fd(b,e):d.Aa(f+"?"+h+"&err=len&max=8192&len="+b[v],e)};d.Aa=(d, b) => {var h=new Image(1,1);h.src=d;h.onload=() => {h.onload=null;(b||Ba)()}};d.fd=(f, b) => {d.ed(f,b)||d.Ob(f,b)};d.ed=(d, b) => {var h,e=L[t].XDomainRequest;if(e)h=
  new e,h.open("POST",Ha);else if(e=L[t].XMLHttpRequest)e=new e,"withCredentials"in e&&(h=e,h.open("POST",Ha,!0),h.setRequestHeader("Content-Type","text/plain"));if(h)return h.onreadystatechange=() => {h.readyState==4&&(b&&b(),h=null)},h.send(d),!0;return!1};d.Ob=(f, b) => {var h=L[w];if(h.body){f=aa(f);try{var e=h.createElement('<iframe name="'+f+'"></iframe>')}catch(m){e=h.createElement("iframe"),e.name=f}e.height="0";e.width="0";e.style.display="none";e.style.visibility="hidden";var g=h[y],
  g=g[ea]+"//"+g.host+"/favicon.ico",g=Ga+"u/post_iframe.html#"+aa(g),a=() => {e.src="";e.parentNode&&e.parentNode.removeChild(e)};ta(L[t],"beforeunload",a);var c=!1,u=0,j=() => {if(!c){try{if(u>9||e.contentWindow[y].host==h[y].host){c=!0;a();var d=L[t],g="beforeunload",n=a;d.removeEventListener?d.removeEventListener(g,n,!1):d.detachEvent&&d.detachEvent("on"+g,n);b&&b();return}}catch(f){}u++;L.setTimeout(j,200)}};ta(e,"load",j);h.body.appendChild(e);e.src=g}else L.setTimeout(() => {d.Ob(f,
  b)},100)}};

  var Ka=function(d){
    var f=this;
    var b=d;
    var h=new Fa(b);
    var e=null;
    var m=!V.pb();
    var g=() => {};
    f.Uc=() => "https:"==L[w][y][ea]?"https://ssl.google-analytics.com/__utm.gif":"http://www.google-analytics.com/__utm.gif";f.A=(a, c, d, j, i, s) => {
      e||(e=new Ja);
      var n=b.B;
      var O=L[w][y];
      h.Z(d);var B=h.z()[x](".");if(B[1]<500||j){if(i){
        var S=(new Date)[da]();
        var X;
        X=(S-B[3])*(b.Ac/1E3);X>=1&&(B[2]=o.min(o.floor(B[2]*1+X),b.zc),B[3]=S)
      }if(j||!i||B[2]>=1){!j&&i&&(B[2]=B[2]*1-1);j=B[1]*1+1;B[1]=j;i="utmwv="+ia;S="&utms="+
      j;X="&utmn="+Aa();j=i+"e"+S+X;a=i+S+X+(M(O.hostname)?"":"&utmhn="+P(O.hostname))+(b.L==100?"":"&utmsp="+P(b.L))+a;if(0==n||2==n)O=2==n?g:s||g,m&&e.Bb(b.ga,a,j,O,!0);if(1==n||2==n)c="&utmac="+c,j+=c,a+=c+"&utmcc="+f.Tc(d),V.Ab&&(d="&aip=1",j+=d,a+=d),a+="&utmu="+qa.Sc(),m&&e.Bb(f.Uc(),a,j,s)}}h.$(B[A]("."));h.aa()
    };f.Tc=a => {for(var c=[],b=[F,J,I,na],d=h.g(),i,g=0;g<b[v];g++)if(i=N(d,b[g]+a,";"),!M(i)){if(b[g]==I){i=i[x](a+".")[1][x]("|")[0];if(M(i))continue;i=a+"."+i}T(c,b[g]+i+";")}return P(c[A]("+"))}
  };var W=function(){var d=this;d.N=[];d.Va=f => {for(var b,h=d.N,e=0;e<h[v];e++)b=f==h[e].q?h[e]:b;return b};d.Xb=(f, b, h, e, m, g, a, c) => {var u=d.Va(f);k==u?(u=new W.Wc(f,b,h,e,m,g,a,c),T(d.N,u)):(u.tb=b,u.zb=h,u.yb=e,u.wb=m,u.ub=g,u.xb=a,u.vb=c);return u}};W.Qc=function(d,f,b,h,e,m){var g=this;g.Fb=d;g.va=f;g.n=b;g.Cb=h;g.Db=e;g.Eb=m;g.ha=() => "&"+["utmt=item","tid="+P(g.Fb),"ipc="+P(g.va),"ipn="+P(g.n),"iva="+P(g.Cb),"ipr="+P(g.Db),"iqt="+P(g.Eb)][A]("&utm")};
  W.Wc=function(d,f,b,h,e,m,g,a){var c=this;c.q=d;c.tb=f;c.zb=b;c.yb=h;c.wb=e;c.ub=m;c.xb=g;c.vb=a;c.M=[];c.Vb=(a, b, d, g, n) => {
    var e=c.Rc(a);
    var f=c.q;
    k==e?T(c.M,new W.Qc(f,a,b,d,g,n)):(e.Fb=f,e.va=a,e.n=b,e.Cb=d,e.Db=g,e.Eb=n)
  };c.Rc=a => {for(var b,d=c.M,g=0;g<d[v];g++)b=a==d[g].va?d[g]:b;return b};c.ha=() => "&"+["utmt=tran","id="+P(c.q),"st="+P(c.tb),"to="+P(c.zb),"tx="+P(c.yb),"sp="+P(c.wb),"ci="+P(c.ub),"rg="+P(c.xb),"co="+P(c.vb)][A]("&utmt")};var La=function(d){
    function f(){
      var b;
      var a;
      var c;
      a="ShockwaveFlash";
      var d="$version";
      var j=L[t].navigator;
      if((j=j?j.plugins:k)&&j[v]>0)for(b=0;b<j[v]&&!c;b++)a=j[b],R(a.name,"Shockwave Flash")&&(c=a.description[x]("Shockwave Flash ")[1]);else{a=a+"."+a;try{b=new ActiveXObject(a+".7"),c=b.GetVariable(d)}catch(e){}if(!c)try{b=new ActiveXObject(a+".6"),c="WIN 6,0,21,0",b.we="always",c=b.GetVariable(d)}catch(f){}if(!c)try{b=new ActiveXObject(a),c=b.GetVariable(d)}catch(n){}c&&(c=c[x](" ")[1][x](","),c=c[0]+"."+
      c[1]+" r"+c[2])}return c?c:h
    }
    var b=this;
    var h="-";
    var e=L[t].screen;
    var m=L[t].navigator;
    b.Nb=e?e.width+"x"+e.height:h;b.Mb=e?e.colorDepth+"-bit":h;b.cd=P(L[w].characterSet?L[w].characterSet:L[w].charset?L[w].charset:h);b.Lb=(m&&m.language?m.language:m&&m.browserLanguage?m.browserLanguage:h)[C]();b.Kb=m&&m.javaEnabled()?1:0;b.dd=d?f():h;b.dc=() => D+"utm"+["cs="+P(b.cd),"sr="+b.Nb,"sc="+b.Mb,"ul="+b.Lb,"je="+b.Kb,"fl="+P(b.dd)][A]("&utm");b.cc=() => {for(var d=L[t].navigator,a=L[t].history[v],
    d=d.appName+d.version+b.Lb+d.platform+d.userAgent+b.Kb+b.Nb+b.Mb+(L[w][ca]?L[w][ca]:"")+(L[w].referrer?L[w].referrer:""),c=d[v];a>0;)d+=a--^c++;return za(d)}
  };var Z=function(d,f,b,h){
    function e(a){
      var c="";
      var c=a[x]("://")[1][C]();
      R(c,"/")&&(c=c[x]("/")[0]);return c
    }
    var m=h;
    var g=this;
    g.a=d;g.ob=f;g.m=b;g.mb=a => {var c=g.ua();return new Z.v(N(a,m.Ea+E,D),N(a,m.Ha+E,D),N(a,m.Ja+E,D),g.R(a,m.Ca,"(not set)"),g.R(a,m.Fa,"(not set)"),g.R(a,m.Ia,c&&!M(c.G)?Q(c.G):k),g.R(a,m.Da,k),N(a,m.vc+E,D))};g.nb=a => {
      var c=e(a);
      var b;
      b=a;var d="";b=b[x]("://")[1][C]();R(b,"/")&&(b=b[x]("/")[1],R(b,"?")&&(d=b[x]("?")[0]));b=d;if(R(c,"google")&&(a=a[x]("?")[A](D),R(a,D+
      m.xc+E)&&b==m.wc))return!0;return!1
    };g.ua=() => {
      var a;
      var c=g.ob;
      var b;
      var d=m.J;
      if(!M(c)&&"0"!=c&&R(c,"://")&&!g.nb(c)){a=e(c);for(var i=0;i<d[v];i++)if(b=d[i],R(a,b.ib[C]())&&(c=c[x]("?")[A](D),R(c,D+b.jb+E)))return a=c[x](D+b.jb+E)[1],R(a,D)&&(a=a[x](D)[0]),new Z.v(k,b.ib,k,"(organic)","organic",a,k,k)}
    };g.R=(a, c, b) => {a=N(a,c+E,D);return b=!M(a)?Q(a):!M(b)?b:"-"};g.Bc=a => {
      var c=m.V;
      var b=!1;
      if(a&&"organic"==a.P)for(var a=Q(a.G)[C](),d=0;d<c[v];d++)b=b||c[d][C]()==a;return b
    };g.lb=() => {
      var a=
      "";

      var c="";
      var a=g.ob;
      if(!M(a)&&"0"!=a&&R(a,"://")&&!g.nb(a))return a=a[x]("://")[1],R(a,"/")&&(c=a[z](a[q]("/")),c=c[x]("?")[0],a=a[x]("/")[0][C]()),0==a[q]("www.")&&(a=a[z](4)),new Z.v(k,a,k,"(referral)","referral",k,c,k)
    };g.kb=a => {var c="";m.U&&(c=a&&a.hash?a[fa][z](a[fa][q]("#")):"",c=""!=c?c+D:c);c+=a.search;return c};g.ta=() => new Z.v(k,"(direct)",k,"(direct)","(none)",k,k,k);g.Cc=a => {
      var c=!1;
      var b=m.W;
      if(a&&"referral"==a.P)for(var a=P(a.Q)[C](),d=0;d<b[v];d++)c=c||R(a,b[d][C]());
      return c
    };g.h=a => k!=a&&a.fb();g.te=a => {
      var a=N(a,J+g.a+".",";");
      var c=a[x](".");
      var a=new Z.v;
      a.gb(c.slice(4)[A]("."));if(!g.h(a))return!0;c=L[w][y];c=g.kb(c);c=g.mb(c);g.h(c)||(c=g.ua(),g.h(c)||(c=g.lb()));return g.h(c)&&a.H()[C]()!=c.H()[C]()
    };g.Pb=(a, c) => {if(m.Ka){
      var b="";
      var d="-";
      var e;
      var f=0;
      var n;
      var h;
      var B=g.a;
      if(a){h=a.g();b=g.kb(L[w][y]);if(m.w&&a.Ba()&&(d=Q(a.qa()),!M(d)&&!R(d,";"))){a.ra(d);a.sa();return}d=N(h,J+B+".",";");e=g.mb(b);if(g.h(e)&&(b=N(b,m.Ga+E,D),"1"==b&&!M(d)))return;
      if(!g.h(e)){e=g.ua();b=g.Bc(e);if(!M(d)&&b)return;b&&(e=g.ta())}if(!g.h(e)&&c){e=g.lb();b=g.Cc(e);if(!M(d)&&b)return;b&&(e=g.ta())}g.h(e)||M(d)&&c&&(e=g.ta());if(g.h(e)&&(M(d)||(f=d[x]("."),n=new Z.v,n.gb(f.slice(4)[A](".")),n=n.H()[C]()==e.H()[C](),f=f[3]*1),!n||c))h=N(h,F+B+".",";"),n=h.lastIndexOf("."),h=n>9?h[z](n+1)*1:0,f++,h=0==h?1:h,a.ra([B,g.m,h,f,e.H()][A](".")),a.sa()}
    }}
  };
  Z.v=function(d,f,b,h,e,m,g,a){var c=this;c.q=d;c.Q=f;c.ya=b;c.n=h;c.P=e;c.G=m;c.Gb=g;c.xa=a;c.H=() => {
    var a=[];
    var b=[["cid",c.q],["csr",c.Q],["gclid",c.ya],["ccn",c.n],["cmd",c.P],["ctr",c.G],["cct",c.Gb],["dclid",c.xa]];
    var d;
    var e;
    if(c.fb())for(d=0;d<b[v];d++)M(b[d][1])||(e=b[d][1][x]("+")[A]("%20"),e=e[x](" ")[A]("%20"),T(a,"utm"+b[d][0]+E+e));return L.qb(a[A]("|"))
  };c.fb=() => !(M(c.q)&&M(c.Q)&&M(c.ya)&&M(c.xa));c.gb=a => {var b=b => Q(N(a,"utm"+b+E,"|"));c.q=b("cid");
  c.Q=b("csr");c.ya=b("gclid");c.n=b("ccn");c.P=b("cmd");c.G=b("ctr");c.Gb=b("cct");c.xa=b("dclid")}};var Ma=function(d,f,b,h){
    var e=this;
    var m=f;
    var g=E;
    var a=d;
    var c=h;
    e.S=b;e.wa="";e.r={};e.$b=() => {var a;a=N(e.S.g(),I+m+".",";")[x](m+".")[1];if(!M(a)){
      a=a[x]("|");
      var b=e.r;
      var c=a[1];
      var d;
      if(!M(c))for(var c=c[x](","),n=0;n<c[v];n++)d=c[n],M(d)||(d=d[x](g),d[v]==4&&(b[d[0]]=[Q(d[1]),Q(d[2]),1]));e.wa=Q(a[0]);e.T()
    }};e.T=() => {
      e.Pc();
      var a=P(e.wa);
      var b;
      var c;
      var d="";
      for(b in e.r)(c=e.r[b])&&1===c[2]&&(d+=b+g+P(c[0])+g+P(c[1])+g+1+",");M(d)||(a+="|"+d);M(a)?e.S.yc():(e.S.X(m+"."+a),e.S.Y())
    };e.bc=a => {e.wa=a;e.T()};
    e.ac=(b, c, d, g) => {1!=g&&2!=g&&3!=g&&(g=3);var n=!1;if(c&&d&&b>0&&b<=a.Ta){
      var f=P(c);
      var h=P(d);
      f[v]+h[v]<=64&&(e.r[b]=[c,d,g],e.T(),n=!0)
    }return n};e.Zb=a => {if((a=e.r[a])&&1===a[2])return a[1]};e.Yb=a => {var b=e.r;b[a]&&(delete b[a],e.T())};e.Pc=() => {
      c.t(8);c.t(9);c.t(11);
      var a=e.r;
      var b;
      var d;
      for(d in a)if(b=a[d])c.j(8,d,b[0]),c.j(9,d,b[1]),(b=b[2])&&3!=b&&c.j(11,d,""+b)
    }
  };var Na=function(){
    function d(a,b,c,d){k==g[a]&&(g[a]={});k==g[a][b]&&(g[a][b]=[]);g[a][b][c]=d}function f(a,b,c){if(k!=g[a]&&k!=g[a][b])return g[a][b][c]}function b(a,b){if(k!=g[a]&&k!=g[a][b]){
      g[a][b]=k;
      var c=!0;
      var d;
      for(d=0;d<u[v];d++)if(k!=g[a][u[d]]){c=!1;break}c&&(g[a]=k)
    }}function h(a){
      var b="";
      var c=!1;
      var d;
      var e;
      for(d=0;d<u[v];d++)if(e=a[u[d]],k!=e){c&&(b+=u[d]);for(var c=[],g=k,f=k,f=0;f<e[v];f++)if(k!=e[f]){g="";f!=S&&k==e[f-1]&&(g+=f[r]()+n);var h;h=e[f];for(var O="",m=k,U=k,wa=k,m=0;m<h[v];m++)U=h[p](m),
      wa=B[U],O+=k!=wa?wa:U;h=O;g+=h;T(c,g)}e=j+c[A](s)+i;b+=e;c=!1}else c=!0;return b
    }
    var e=this;
    var m=sa(e);
    var g={};
    var a="k";
    var c="v";
    var u=[a,c];
    var j="(";
    var i=")";
    var s="*";
    var n="!";
    var O="'";
    var B={};
    B[O]="'0";B[i]="'1";B[s]="'2";B[n]="'3";var S=1;e.Yc=a => k!=g[a];e.C=() => {
      var a="";
      var b;
      for(b in g)k!=g[b]&&(a+=b[r]()+h(g[b]));return a
    };e.hc=a => {
      if(a==k)return e.C();
      var b=a.C();
      var c;
      for(c in g)k!=g[c]&&!a.Yc(c)&&(b+=c[r]()+h(g[c]));return b
    };e.j=m("_setKey",89,(b, c, n) => {if(typeof n!="string")return!1;d(b,a,
    c,n);return!0});e.ja=m("_setValue",90,(a, b, n) => {if(typeof n!="number"&&(k==Number||!(n instanceof Number))||o.round(n)!=n||n==NaN||n==Infinity)return!1;d(a,c,b,n[r]());return!0});e.fc=m("_getKey",87,(b, c) => f(b,a,c));e.gc=m("_getValue",88,(a, b) => f(a,c,b));e.t=m("_clearKey",85,c => {b(c,a)});e.ia=m("_clearValue",86,a => {b(a,c)})
  };var Oa=function(d,f){
    var b=this;
    var h=sa(b);
    b.ze=f;b.gd=d;b.Za=h("_trackEvent",91,(d, h, g) => f.Za(b.gd,d,h,g))
  };var Pa=function(d,f){
    var b=this;
    var h=L.Gc();
    var e=L.Hc();
    var m=10;
    b.rb=new Na;b.Kc=() => {
      var b;
      var a="timing";
      var c="onloadT";
      h&&h[c]!=k&&h.isValidLoadTime?b=h[c]:e&&e[a]&&(b=e[a].loadEventStart-e[a].fetchStart);return b
    };b.Mc=() => d.D()&&d.Xa()%100<m;b.Lc=() => {var e="&utmt=event&utme="+P(b.rb.C())+d.na();f.A(e,d.p,d.a,!1,!0)};b.Jc=b => {b=o.min(o.floor(b/100),5E3);return b>0?b+"00":"0"};b.sb=() => {var d=b.Kc();if(d==k||isNaN(d))return!1;if(d<=0)return!0;if(d>2147483648)return!1;
    var a=b.rb;a.t(14);a.ia(14);var c=b.Jc(d);a.j(14,1,c)&&a.ja(14,1,d)&&b.Lc();h&&h.isValidLoadTime!=k&&h.setPageReadyTime();return!1};b.Wa=() => {if(!b.Mc())return!1;if(!L.Ic())return!1;b.sb()&&ta(L[t],"load",b.sb,!1);return!0}
  };var $=() => {};$.Zc=d => {
    var f="gaso=";
    var b=L[w][y].hash;
    d=b&&1==b[q](f)?N(b,f,D):(b=L[t].name)&&0<=b[q](f)?N(b,f,D):N(d.g(),oa,";");return d
  };$.ad=(d, f) => {
    var b=(f||"www")+".google.com";
    var b="https://"+b+"/analytics/reporting/overlay_js?gaso="+d+D+Aa();
    var h="_gasojs";
    var e=L[w].createElement("script");
    e.type="text/javascript";e.src=b;if(h)e.id=h;(L[w].getElementsByTagName("head")[0]||L[w].getElementsByTagName("body")[0]).appendChild(e)
  };
  $.load=(d, f) => {if(!$.$c){
    var b=$.Zc(f);
    var h=b&&b.match(/^(?:\|([-0-9a-z.]{1,30})\|)?([-.\w]{10,1200})$/i);
    if(h)f.Dc(b),f.Ec(),V._gasoDomain=d.b,V._gasoCPath=d.f,$.ad(h[2],h[1]);$.$c=!0
  }};var Qa=function(d,f,b){
    function h(){if("auto"==j.b){var a=L[w].domain;"www."==a[z](0,4)&&(a=a[z](4));j.b=a}j.b=j.b[C]()}function e(){
      h();
      var a=j.b;
      var b=a[q]("www.google.")*a[q](".google.")*a[q]("google.");
      return b||"/"!=j.f||a[q]("google.org")>-1
    }function m(b,c,d){if(M(b)||M(c)||M(d))return"-";b=N(b,F+a.a+".",c);M(b)||(b=b[x]("."),b[5]=""+(b[5]?b[5]*1+1:1),b[3]=b[4],b[4]=d,b=b[A]("."));return b}function g(){return"file:"!=L[w][y][ea]&&e()}
    var a=this;
    var c=sa(a);
    var u=k;
    var j=new Da;
    var i=!1;
    var s=k;
    a.n=d;a.m=o.round((new Date)[da]()/
    1E3);a.p=f||"UA-XXXXX-X";a.ab=L[w].referrer;a.oa=k;a.d=k;a.F=!1;a.O=k;a.e=k;a.bb=k;a.pa=k;a.a=k;a.k=k;j.o=b?P(b):k;a.eb=!1;a.mc=() => Aa()^a.O.cc()&2147483647;a.lc=() => {if(!j.b||""==j.b||"none"==j.b)return j.b="",1;h();return j.Ua?za(j.b):1};a.kc=(a, b) => {if(M(a))a="-";else{
      b+=j.f&&"/"!=j.f?j.f:"";
      var c=a[q](b);
      var a=c>=0&&c<=8?"0":"["==a[p](0)&&"]"==a[p](a[v]-1)?"-":a;
    }return a};a.na=b => {var c="";c+=j.ka?a.O.dc():"";c+=j.la&&!M(L[w].title)?"&utmdt="+P(L[w].title):"";var d;
    d=L.Ya(!0);if(!d.hid)d.hid=Aa();d=d.hid;c+="&utmhid="+d+"&utmr="+P(l(a.oa))+"&utmp="+P(a.pc(b));return c};a.pc=a => {var b=L[w][y];a&&K(13);return a=k!=a&&""!=a?P(a,!0):P(b.pathname+b.search,!0)};a.uc=b => {if(a.D()){var c="";a.e!=k&&a.e.C()[v]>0&&(c+="&utme="+P(a.e.C()));c+=a.na(b);u.A(c,a.p,a.a)}};a.jc=() => {var b=new Fa(j);return b.Z(a.a)?b.Tb():k};a.cb=c("_getLinkerUrl",52,(b, c) => {
      var d=b[x]("#");
      var e=b;
      var f=a.jc();
      if(f)if(c&&1>=d[v])e+="#"+f;else if(!c||1>=d[v])1>=d[v]?e+=(R(b,
      "?")?D:"?")+f:e=d[0]+(R(b,"?")?D:"?")+f+"#"+d[1];return e
    });a.nc=() => {
      var b=a.m;
      var c=a.k;
      var d=c.g();
      var e=a.a+"";
      var f=L.Ya();
      var g;
      var h=R(d,F+e+".");
      var i=R(d,H+e);
      var u=R(d,la+e);
      var s;
      var G=[];
      var Y="";
      var Ia=!1;
      var d=M(d)?"":d;
      if(j.w&&!a.eb){
        g=L[w][y]&&L[w][y].hash?L[w][y][fa][z](L[w][y][fa][q]("#")):"";j.U&&!M(g)&&(Y=g+D);Y+=L[w][y].search;if(!M(Y)&&R(Y,F))c.Sb(Y),c.Ba()||c.Qb(),s=c.ba(),a.eb=!0;g=c.ea;
        var va=c.Pa;
        var U=c.Sa;
        M(g())||(va(Q(g())),R(g(),";")||U());g=c.da;va=c.X;U=c.Y;M(g())||(va(g()),R(g(),";")||U())
      }M(s)?h?(s=!i||!u)?(s=m(d,
      ";",l(b)),a.F=!0):(s=N(d,F+e+".",";"),G=N(d,H+e,";")[x](".")):(s=[e,a.mc(),b,b,b,1][A]("."),Ia=a.F=!0):M(c.z())||M(c.ca())?(s=m(Y,D,l(b)),a.F=!0):(G=c.z()[x]("."),e=G[0]);s=s[x](".");L[t]&&f&&f.dh==e&&!j.o&&(s[4]=f.sid?f.sid:s[4],Ia&&(s[3]=f.sid?f.sid:s[4],f.vid&&(b=f.vid[x]("."),s[1]=b[0],s[2]=b[1])));c.Na(s[A]("."));G[0]=e;G[1]=G[1]?G[1]:0;G[2]=k!=G[2]?G[2]:j.Wb;G[3]=G[3]?G[3]:s[4];c.$(G[A]("."));c.Oa(e);M(c.Rb())||c.fa(c.K());c.Qa();c.aa();c.Ra()
    };a.oc=() => {u=new Ka(j)};a.getName=c("_getName",
    58,() => a.n);a.c=c("_initData",2,() => {var b;if(!i){if(!a.O)a.O=new La(j.ma);a.a=a.lc();a.k=new Fa(j);a.e=new Na;s=new Ma(j,l(a.a),a.k,a.e);a.oc()}if(g()){if(!i)a.oa=a.kc(a.ab,L[w].domain),b=new Z(l(a.a),a.oa,a.m,j);a.nc(b);s.$b()}if(!i)g()&&b.Pb(a.k,a.F),a.bb=new Na,$.load(j,a.k),i=!0});a.Xa=c("_visitCode",54,() => {
      a.c();
      var b=N(a.k.g(),F+a.a+".",";");
      var b=b[x](".");
      return b[v]<4?"":b[1]
    });a.qd=c("_cookiePathCopy",30,b => {a.c();a.k&&a.k.Ub(a.a,b)});a.D=() => a.Xa()%
    1E4<j.L*100;a.re=c("_trackPageview",1,b => {if(g())a.c(),a.uc(b),a.F=!1});a.se=c("_trackTrans",18,() => {
      var b=a.a;
      var c=[];
      var d;
      var e;
      var f;
      a.c();if(a.d&&a.D()){for(d=0;d<a.d.N[v];d++){e=a.d.N[d];T(c,e.ha());for(f=0;f<e.M[v];f++)T(c,e.M[f].ha())}for(d=0;d<c[v];d++)u.A(c[d],a.p,b,!0)}
    });a.me=c("_setTrans",20,() => {
      var b;
      var c;
      var d;
      var e;
      b=L[w].getElementById?L[w].getElementById("utmtrans"):L[w].utmform&&L[w].utmform.utmtrans?L[w].utmform.utmtrans:k;a.c();if(b&&b.value){a.d=new W;e=b.value[x]("UTM:");j.u=!j.u||
      ""==j.u?"|":j.u;for(b=0;b<e[v];b++){e[b]=ya(e[b]);c=e[b][x](j.u);for(d=0;d<c[v];d++)c[d]=ya(c[d]);"T"==c[0]?a.$a(c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8]):"I"==c[0]&&a.ic(c[1],c[2],c[3],c[4],c[5],c[6])}}
    });a.$a=c("_addTrans",21,(b, c, d, e, f, g, h, i) => {a.d=a.d?a.d:new W;return a.d.Xb(b,c,d,e,f,g,h,i)});a.ic=c("_addItem",19,(b, c, d, e, f, g) => {var h;a.d=a.d?a.d:new W;(h=a.d.Va(b))||(h=a.$a(b,"","","","","","",""));h.Vb(c,d,e,f,g)});a.oe=c("_setVar",22,b => {b&&""!=b&&e()&&(a.c(),s.bc(b),a.D()&&
    u.A("&utmt=var",a.p,a.a))});a.Yd=c("_setCustomVar",10,(b, c, d, e) => {a.c();return s.ac(b,c,d,e)});a.td=c("_deleteCustomVar",35,b => {a.c();s.Yb(b)});a.Cd=c("_getVisitorCustomVar",50,b => {a.c();return s.Zb(b)});a.fe=c("_setMaxCustomVariables",71,a => {j.Ta=a});a.link=c("_link",101,(b, c) => {j.w&&b&&(a.c(),L.ec(a.cb(b,c)))});a.Fd=c("_linkByPost",102,(b, c) => {if(j.w&&b&&b.action)a.c(),b.action=a.cb(b.action,c)});a.pe=c("_setXKey",83,(b, c, d) => {a.e.j(b,c,d)});a.qe=
    c("_setXValue",84,(b, c, d) => {a.e.ja(b,c,d)});a.Dd=c("_getXKey",76,(b, c) => a.e.fc(b,c));a.Ed=c("_getXValue",77,(b, c) => a.e.gc(b,c));a.od=c("_clearXKey",72,b => {a.e.t(b)});a.pd=c("_clearXValue",73,b => {a.e.ia(b)});a.sd=c("_createXObj",75,() => {a.c();return new Na});a.qc=c("_sendXEvent",78,b => {var c="";a.c();a.D()&&(c+="&utmt=event&utme="+P(a.e.hc(b))+a.na(),u.A(c,a.p,a.a,!1,!0))});a.rd=c("_createEventTracker",74,b => {a.c();return new Oa(b,
    a)});a.Za=c("_trackEvent",4,(b, c, d, e) => {a.c();var f=a.bb;k!=b&&k!=c&&""!=b&&""!=c?(f.t(5),f.ia(5),(b=f.j(5,1,b)&&f.j(5,2,c)&&(k==d||f.j(5,3,d))&&(k==e||f.ja(5,1,e)))&&a.qc(f)):b=!1;return b});a.Wa=c("_trackPageLoadTime",100,() => {a.c();if(!a.pa)a.pa=new Pa(a,u);return a.pa.Wa()});a.wd=() => j;a.ae=c("_setDomainName",6,a => {j.b=a});a.kd=c("_addOrganic",14,(a, b, c) => {j.J.splice(c?0:j.J[v],0,new Ca(a,b))});a.nd=c("_clearOrganic",70,() => {j.J=[]});a.hd=c("_addIgnoredOrganic",
    15,a => {T(j.V,a)});a.ld=c("_clearIgnoredOrganic",97,() => {j.V=[]});a.jd=c("_addIgnoredRef",31,a => {T(j.W,a)});a.md=c("_clearIgnoredRef",32,() => {j.W=[]});a.Id=c("_setAllowHash",8,a => {j.Ua=a?1:0});a.Td=c("_setCampaignTrack",36,a => {j.Ka=a?1:0});a.Ud=c("_setClientInfo",66,a => {j.ka=a?1:0});a.vd=c("_getClientInfo",53,() => j.ka);a.Vd=c("_setCookiePath",9,a => {j.f=a});a.ne=c("_setTransactionDelim",82,a => {j.u=a});a.Xd=c("_setCookieTimeout",
    25,b => {a.rc(b*1E3)});a.rc=c("_setCampaignCookieTimeout",29,a => {j.La=a});a.Zd=c("_setDetectFlash",61,a => {j.ma=a?1:0});a.xd=c("_getDetectFlash",65,() => j.ma);a.$d=c("_setDetectTitle",62,a => {j.la=a?1:0});a.yd=c("_getDetectTitle",56,() => j.la);a.ce=c("_setLocalGifPath",46,a => {j.ga=a});a.zd=c("_getLocalGifPath",57,() => j.ga);a.ee=c("_setLocalServerMode",92,() => {j.B=0});a.ie=c("_setRemoteServerMode",63,() => {j.B=
    1});a.de=c("_setLocalRemoteServerMode",47,() => {j.B=2});a.Ad=c("_getServiceMode",59,() => j.B);a.je=c("_setSampleRate",45,a => {j.L=a});a.ke=c("_setSessionTimeout",27,b => {a.sc(b*1E3)});a.sc=c("_setSessionCookieTimeout",26,a => {j.Ma=a});a.Jd=c("_setAllowLinker",11,a => {j.w=a?1:0});a.Hd=c("_setAllowAnchor",7,a => {j.U=a?1:0});a.Qd=c("_setCampNameKey",41,a => {j.Ca=a});a.Md=c("_setCampContentKey",38,a => {j.Da=a});a.Nd=c("_setCampIdKey",
    39,a => {j.Ea=a});a.Od=c("_setCampMediumKey",40,a => {j.Fa=a});a.Pd=c("_setCampNOKey",42,a => {j.Ga=a});a.Rd=c("_setCampSourceKey",43,a => {j.Ha=a});a.Sd=c("_setCampTermKey",44,a => {j.Ia=a});a.Ld=c("_setCampCIdKey",37,a => {j.Ja=a});a.ud=c("_getAccount",64,() => a.p);a.Gd=c("_setAccount",3,b => {a.p=b});a.ge=c("_setNamespace",48,a => {j.o=a?P(a):k});a.Bd=c("_getVersion",60,() => ia);a.Kd=c("_setAutoTrackOutbound",79,Ba);a.le=
    c("_setTrackOutboundSubdomains",81,Ba);a.be=c("_setHrefExamineLimit",80,Ba);a.he=c("_setReferrerOverride",49,b => {a.ab=b});a.Wd=c("_setCookiePersistence",24,b => {a.tc(b)});a.tc=c("_setVisitorCookieTimeout",28,a => {j.s=a})
  };var Ra=function(){
    var d=this;
    var f=sa(d);
    d.Ab=!1;d.Ib={};d.bd=0;d._gasoDomain=k;d._gasoCPath=k;d.ve=f("_getTracker",0,(b, f) => d.za(b,k,f));d.za=f("_createTracker",55,(b, d, e) => {d&&K(23);e&&K(67);d==k&&(d="~"+V.bd++);return V.Ib[d]=new Qa(d,b,e)});d.Hb=f("_getTrackerByName",51,b => {b=b||"";return V.Ib[b]||V.za(k,b)});d.pb=() => {var b=L.Vc();return b&&b[ka]&&b[ka]()};d.ue=f("_anonymizeIp",16,() => {d.Ab=!0})
  };var Ta=function(){
    var d=this;
    var f=sa(d);
    d.xe=f("_createAsyncTracker",33,(b, d) => V.za(b,d||""));d.ye=f("_getAsyncTracker",34,b => V.Hb(b));d.push=function(...args) {K(5);for(var b=args,d=0,e=0;e<b[v];e++)try{if(typeof b[e]==="function")b[e]();else{
      var f="";
      var g=b[e][0];
      var a=g.lastIndexOf(".");
      a>0&&(f=g[z](0,a),g=g[z](a+1));var c=f==ga?V:f==ha?Sa:V.Hb(f);c[g](...b[e].slice(1))
    }}catch(u){d++}return d}
  };var V=new Ra;var Ua=L[t][ga];Ua&&typeof Ua._getTracker=="function"?V=Ua:L[t][ga]=V;var Sa=new Ta;a:{
    var Va=L[t][ha];
    var Wa=!1;
    if(Va&&typeof Va[ba]=="function"&&(Wa=ua(Va),!Wa))break a;L[t][ha]=Sa;Wa&&Sa[ba](...Va)
  }
}))();
