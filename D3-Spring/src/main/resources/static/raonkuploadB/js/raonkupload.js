/*
 Copyright (c) 2014, Raonwiz Technology Inc. All rights reserved.
*/
if ("undefined" != typeof window && !window.RAONKUPLOAD) {
	window.RAONKUPLOAD = function() {
		var a = window.RAONKUPLOAD_ROOTPATH || ""; if (!a) for (var c = document.getElementsByTagName("script"), b = c.length, d = null, g = 0; g < b; g++)if (d = c[g], d = d.src.match(/(^|.*[\\\/])raonkupload\.js/i)) { a = d[1]; break } -1 == a.indexOf(":/") && (a = 0 === a.indexOf("/") ? location.href.match(/^.*?:\/\/[^\/]*/)[0] + a : location.href.match(/^[^\?]*\/(?:)/)[0] + a); a = a.substring(0, a.length - 1); a = a.substring(0, a.lastIndexOf("/")) + "/"; if (!a) throw "RAONK Upload installation path could not be automatically detected.";
		return { isRelease: !0, logMode: !1, logLevel: "ALL", logGroupingName: "", isPopUpCssLoaded: !1, version: "RAON K Upload", ReleaseVer: "2018.1472233.1730.01", ServerReleaseVer: "", rootPath: a, RAONKMULTIPLE: {}, RAONKHOLDER: {}, RAONKMULTIPLEID: [], CUploadID: "", IsUploadLoadedHashTable: null, InitUploadDataHashTable: null, UserConfigHashTable: null, _0_: null, IsCreatedDropZone: !1, EnforceDocumentDomain: !1 }
	}(); try {
		"undefined" == typeof RAONKSolutionLog && "undefined" != typeof RAONKUploadLogMode && RAONKUploadLogMode && (RAONKUPLOAD.logMode =
			!0, "undefined" != typeof RAONKUploadLogModeLevel && (RAONKUPLOAD.logLevel = RAONKUploadLogModeLevel.toUpperCase()), document.write('<script src="' + RAONKUPLOAD.rootPath + "js/log4javascript/raonk.log4javascript.min.js?ver=" + RAONKUPLOAD.ReleaseVer + '" type="text/javascript">\x3c/script>'))
	} catch (e$$4) { } RAONKUPLOAD.browser || (RAONKUPLOAD.browser = function() {
		var a = navigator.userAgent.toLowerCase(), c = window.opera, c = {
			ie: -1 < a.search("trident") || -1 < a.search("msie") || /(edge)\/((\d+)?[\w\.]+)/i.test(a) ? !0 : !1, edge: /(edge)\/((\d+)?[\w\.]+)/i.test(a) ?
				!0 : !1, opera: !!c && c.version, webkit: -1 < a.indexOf(" applewebkit/"), mac: -1 < a.indexOf("macintosh"), quirks: (-1 < a.search("trident") || -1 < a.search("msie") || /(edge)\/((\d+)?[\w\.]+)/i.test(a)) && "BackCompat" == document.compatMode, mobile: -1 < a.indexOf("mobile") || -1 < a.indexOf("android") || -1 < a.indexOf("iphone"), iOS: /(ipad|iphone|ipod)/.test(a), isCustomDomain: function(a) {
					if (!this.ie) return !1; var b = a.domain; a = RAONKUPLOAD.util.getDocWindow(a).location.hostname; var c = !1; try { c = RAONKUPLOAD.EnforceDocumentDomain } catch (d) { } return 1 ==
						!!c || b != a && b != "[" + a + "]"
				}, isHttps: "https:" == location.protocol, HTML5Supported: !0, HTML5PlusSupported: !1, ajaxOnProgressSupported: !1, G_AP12: 9, G_AP24: "i", postMessageSupported: window.postMessage ? !0 : !1
		}; c.gecko = "Gecko" == navigator.product && !c.webkit && !c.opera; c.ie && (c.gecko = !1); c.webkit && (-1 < a.indexOf("chrome") ? (c.chrome = !0, -1 < a.indexOf("opr") && (c.opera = !0, c.chrome = !1)) : c.safari = !0); var b; c.ieVersion = 0; c.ie && (c.quirks || !document.documentMode ? -1 < a.indexOf("msie") ? b = parseFloat(a.match(/msie (\d+)/)[1]) : -1 < a.indexOf("trident") ?
			b = parseFloat(a.match(/rv:([\d\.]+)/)[1]) : /(edge)\/((\d+)?[\w\.]+)/i.test(a) ? (b = 12, c.chrome = !1) : b = 7 : b = document.documentMode, c.ieVersion = b, c.ie12 = 12 == b, c.ie11 = 11 == b, c.ie10 = 10 == b, c.ie9 = 9 == b, c.ie8 = 8 == b, c.ie7 = 7 == b, c.ie6 = 7 > b || c.quirks); c.gecko && (b = a.match(/rv:([\d\.]+)/)) && (b = b[1].split("."), b = 1E4 * b[0] + 100 * (b[1] || 0) + 1 * (b[2] || 0)); c.webkit && (b = parseFloat(a.match(/ applewebkit\/(\d+)/)[1])); c.HTML5Supported = "File" in window && "FileReader" in window && "Blob" in window; c.HTML5PlusSupported = "File" in window && "FileReader" in
				window && "Blob" in window && ("WebSocket" in window || "MozWebSocket" in window); c.ie && 10 > c.ieVersion && (c.HTML5Supported = !1, c.HTML5PlusSupported = !1); c.WorkerSupported = 0 == c.ie && "Worker" in window; c.imageProcessWorkerSupported = "Worker" in window; a = null; try { a = new XMLHttpRequest, c.ajaxOnProgressSupported = !!(a && "upload" in a && "onprogress" in a.upload) } catch (d) { c.ajaxOnProgressSupported = !1 } a = null; c.LocalStorageSupported = !0; try { null == window.localStorage && (c.LocalStorageSupported = !1) } catch (g) {
					c.LocalStorageSupported =
					!1
				} return c
	}()); RAONKUPLOAD.UserAgent || (RAONKUPLOAD.UserAgent = function() {
		var a = window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "", c = {
			extend: function(a, b) { for (var c in b) -1 !== "browser cpu device engine os".indexOf(c) && 0 === b[c].length % 2 && (a[c] = b[c].concat(a[c])); return a }, has: function(a, b) { return "string" === typeof a ? -1 !== b.toLowerCase().indexOf(a.toLowerCase()) : !1 }, lowerize: function(a) { return a.toLowerCase() }, major: function(a) {
				return "string" === typeof a ? a.split(".")[0] :
					void 0
			}
		}, b = function() {
			for (var b, c = 0, d, e, g, l, r, q, f = arguments; c < f.length && !r;) {
				var u = f[c], t = f[c + 1]; if ("undefined" === typeof b) for (g in b = {}, t) l = t[g], "object" === typeof l ? b[l[0]] = void 0 : b[l] = void 0; for (d = e = 0; d < u.length && !r;)if (r = u[d++].exec(a)) for (g = 0; g < t.length; g++)q = r[++e], l = t[g], "object" === typeof l && 0 < l.length ? 2 == l.length ? b[l[0]] = "function" == typeof l[1] ? l[1].call(this, q) : l[1] : 3 == l.length ? b[l[0]] = "function" !== typeof l[1] || l[1].exec && l[1].test ? q ? q.replace(l[1], l[2]) : void 0 : q ? l[1].call(this, q, l[2]) : void 0 :
					4 == l.length && (b[l[0]] = q ? l[3].call(this, q.replace(l[1], l[2])) : void 0) : b[l] = q ? q : void 0; c += 2
			} return b
		}, d = function(a, b) { for (var d in b) if ("object" === typeof b[d] && 0 < b[d].length) for (var e = 0; e < b[d].length; e++) { if (c.has(b[d][e], a)) return "?" === d ? void 0 : d } else if (c.has(b[d], a)) return "?" === d ? void 0 : d; return a }, g = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2E3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", "8.1": "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, e = [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
		["model", "vendor", ["type", "tablet"]], [/applecoremedia\/[\w\.]+ \((ipad)/], ["model", ["vendor", "Apple"], ["type", "tablet"]], [/(apple\s{0,1}tv)/i], [["model", "Apple TV"], ["vendor", "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], ["vendor", "model", ["type", "tablet"]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], ["model", ["vendor", "Amazon"], ["type", "tablet"]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [["model",
			d, { "Fire Phone": ["SD", "KF"] }], ["vendor", "Amazon"], ["type", "mobile"]], [/\((ip[honed|\s\w*]+);.+(apple)/i], ["model", "vendor", ["type", "mobile"]], [/\((ip[honed|\s\w*]+);/i], ["model", ["vendor", "Apple"], ["type", "mobile"]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], ["vendor", "model", ["type", "mobile"]], [/\(bb10;\s(\w+)/i], ["model", ["vendor", "BlackBerry"], ["type", "mobile"]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
		["model", ["vendor", "Asus"], ["type", "tablet"]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [["vendor", "Sony"], ["model", "Xperia Tablet"], ["type", "tablet"]], [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i], [["vendor", "Sony"], ["model", "Xperia Phone"], ["type", "mobile"]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], ["vendor", "model", ["type", "console"]], [/android.+;\s(shield)\sbuild/i], ["model", ["vendor", "Nvidia"], ["type", "console"]], [/(playstation\s[3portablevi]+)/i], ["model",
			["vendor", "Sony"], ["type", "console"]], [/(sprint\s(\w+))/i], [["vendor", d, { HTC: "APA", Sprint: "Sprint" }], ["model", d, { "Evo Shift 4G": "7373KT" }], ["type", "mobile"]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], ["vendor", "model", ["type", "tablet"]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], ["vendor", ["model", /_/g, " "], ["type", "mobile"]], [/(nexus\s9)/i], ["model", ["vendor", "HTC"], ["type", "tablet"]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
		["model", ["vendor", "Microsoft"], ["type", "console"]], [/(kin\.[onetw]{3})/i], [["model", /\./g, " "], ["vendor", "Microsoft"], ["type", "mobile"]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i], ["model", ["vendor", "Motorola"], ["type", "mobile"]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], ["model", ["vendor", "Motorola"], ["type", "tablet"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
		[["vendor", "Samsung"], "model", ["type", "tablet"]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [["vendor", "Samsung"], "model", ["type", "mobile"]], [/(samsung);smarttv/i], ["vendor", "model", ["type", "smarttv"]], [/\(dtv[\);].+(aquos)/i], ["model", ["vendor", "Sharp"], ["type", "smarttv"]], [/sie-(\w+)*/i], ["model", ["vendor", "Siemens"], ["type", "mobile"]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [["vendor", "Nokia"], "model", ["type",
			"mobile"]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], ["model", ["vendor", "Acer"], ["type", "tablet"]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [["vendor", "LG"], "model", ["type", "tablet"]], [/(lg) netcast\.tv/i], ["vendor", "model", ["type", "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], ["model", ["vendor", "LG"], ["type", "mobile"]], [/android.+(ideatab[a-z0-9\-\s]+)/i], ["model", ["vendor", "Lenovo"], ["type", "tablet"]], [/linux;.+((jolla));/i], ["vendor", "model", ["type", "mobile"]], [/((pebble))app\/[\d\.]+\s/i],
		["vendor", "model", ["type", "wearable"]], [/android.+;\s(glass)\s\d/i], ["model", ["vendor", "Google"], ["type", "wearable"]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i], [["model", /_/g, " "], ["vendor", "Xiaomi"], ["type", "mobile"]], [/(mobile|tablet);.+rv\:.+gecko\//i], [["type", c.lowerize], "vendor", "model"]], g = [[/microsoft\s(windows)\s(vista|xp)/i], ["name", "version"], [/(windows)\snt\s6\.2;\s(arm)/i,
			/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], ["name", ["version", d, g]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [["name", "Windows"], ["version", d, g]], [/\((bb)(10);/i], [["name", "BlackBerry"], "version"], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], ["name", "version"], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [["name", "Symbian"], "version"],
		[/\((series40);/i], ["name"], [/mozilla.+\(mobile;.+gecko.+firefox/i], [["name", "Firefox OS"], "version"], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], ["name", "version"], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [["name", "Chromium OS"], "version"], [/(sunos)\s?([\w\.]+\d)*/i],
		[["name", "Solaris"], "version"], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], ["name", "version"], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [["name", "iOS"], ["version", /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [["name", "Mac OS"], ["version", /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], ["name", "version"]],
		d = b.apply(this, [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], ["name", "version"], [/\s(opr)\/([\w\.]+)/i], [["name", "Opera"], "version"], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi)\/([\w\.-]+)/i],
		["name", "version"], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [["name", "IE"], "version"], [/(edge)\/((\d+)?[\w\.]+)/i], ["name", "version"], [/(yabrowser)\/([\w\.]+)/i], [["name", "Yandex"], "version"], [/(comodo_dragon)\/([\w\.]+)/i], [["name", /_/g, " "], "version"], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?([\w\.]+)/i], ["name", "version"], [/(dolfin)\/([\w\.]+)/i], [["name", "Dolphin"], "version"], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [["name", "Chrome"],
			"version"], [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i], ["version", ["name", "MIUI Browser"]], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i], ["version", ["name", "Android Browser"]], [/FBAV\/([\w\.]+);/i], ["version", ["name", "Facebook"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], ["version", ["name", "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], ["version", "name"], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], ["name", ["version", d, {
				"1.0": "/8", "1.2": "/1", "1.3": "/3", "2.0": "/412",
				"2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/"
			}]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], ["name", "version"], [/(navigator|netscape)\/([\w\.-]+)/i], [["name", "Netscape"], "version"], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i,
			/(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], ["name", "version"]]); d.major = c.major(d.version); g = b.apply(this, g); if (b = b.apply(this, e)) void 0 == b.model && (b.model = ""), void 0 == b.type && (b.type = ""), void 0 == b.vendor && (b.vendor = ""); return { browser: d, os: g, device: b, osSeparator: 0 > g.name.toLowerCase().indexOf("windows") ? "/" : "\\" }
	}()); RAONKUPLOAD.ajax || (RAONKUPLOAD.ajax = function() {
		var a = function() {
			try {
				var a = new XMLHttpRequest; RAONKUPLOAD.ajax.xhrWithCredentials && "withCredentials" in
					a && (a.withCredentials = !0); return a
			} catch (b) { } try { return new ActiveXObject("Msxml2.XHLHTTP") } catch (c) { } try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (d) { } return null
		}, c = function() { }, b = function(a) { return 4 == a.readyState && (200 <= a.status && 300 > a.status || 304 == a.status || 0 === a.status || 1223 == a.status) }, d = function(a) { var d = null; b(a) && (d = a.responseText); a && a.onreadystatechange && (a.onreadystatechange = c); return d }, g = function(a) {
			var d = null; b(a) && (d = a.responseXML, d || (d = a.responseText)); a && a.onreadystatechange &&
				(a.onreadystatechange = c); return d
		}, e = function(b, c, d) { var e = !!c, g = a(); if (!g) return null; g.open("GET", b, e); e && (g.onreadystatechange = function() { 4 == g.readyState && c(d(g)) }); try { g.send(null) } catch (h) { return null } if (!e) { var q = setTimeout(function() { try { g.abort() } catch (a) { } clearTimeout(q) }, 5E3); "undefined" == typeof RAONKUPLOAD.RAONKMULTIPLETIMEOUT && (RAONKUPLOAD.RAONKMULTIPLETIMEOUT = []); RAONKUPLOAD.RAONKMULTIPLETIMEOUT.push(q) } return e ? "" : d(g) }, h = function(b, c, d, e) {
			var g = !!d, h = a(); if (!h) return null; h.open("POST",
				b, g); h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"); g && (h.onreadystatechange = function() { 4 == h.readyState && d(e(h, c)) }); try { h.send(c) } catch (q) { return null } if (!g) { var f = setTimeout(function() { try { h.abort() } catch (a) { } clearTimeout(f) }, 5E3); "undefined" == typeof RAONKUPLOAD.RAONKMULTIPLETIMEOUT && (RAONKUPLOAD.RAONKMULTIPLETIMEOUT = []); RAONKUPLOAD.RAONKMULTIPLETIMEOUT.push(f) } return g ? "" : e(h)
		}; return {
			load: function(a, b) { return e(a, b, d) }, loadXml: function(a, b) {
				return e(a, b,
					g)
			}, postData: function(a, b, c) { return h(a, b, c, d) }, postFileData: function(b, c) {
				var d; a: if (d = a()) {
					try {
						d.open("POST", b, !1); var e = KUPLOADTOP.RAONKUPLOAD.util.makeGuidTagName("----raonk_"); d.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + e); for (var e = "--" + e, g = "", h = c.split("&"), q = h.length, f = null, u = "", t = "", v = 0; v < q; v++)f = h[v].split("="), "imagedata" == f[0] ? u = f[1] : (g += e + "\r\n", g += 'Content-Disposition: form-data; name="' + f[0] + '"\r\n\r\n', g += f[1] + "\r\n"); for (var h = null, q = "", x = window.atob(u), y = x.length,
							h = new Uint8Array(new ArrayBuffer(y)), v = 0; v < y; v++)h[v] = x.charCodeAt(v), q += String.fromCharCode(h[v]); String.fromCharCode.apply([], new Uint8Array(h)); new Uint8Array(h); t = q; g += e + "\r\n"; g += 'Content-Disposition: form-data; name="Filedata"; filename="' + (new Date).getTime() + '"\r\n'; g += "Content-Type: image/png\r\n"; g += "\r\n"; g += t + "\r\n"; d.send(g + (e + "--\r\n"))
					} catch (w) { d = null; break a } d = d.responseText
				} else d = null; return d
			}, urlExists: function(b) {
				var c = a(); c ? (c.open("HEAD", b, !1), c.send(), b = 404 != c.status) : b = !1;
				return b
			}, createXMLHttpRequest: function() { return a() }
		}
	}()); RAONKUPLOAD.util || (RAONKUPLOAD.util = {
		G_IMG_LIST: {}, writeLog: function(a, c, b, d) {
			if ("undefined" != typeof RAONKSolutionLog && "undefined" != typeof RAONKUploadLogMode && RAONKUploadLogMode) {
				var g = ""; "string" == typeof d && (d = d.split("#"), 2 == d.length && ("" == RAONKUPLOAD.logGroupingName && "s" == d[1].toLowerCase() ? (RAONKUPLOAD.logGroupingName = d[0].toLowerCase(), g = "#separator#") : "" != RAONKUPLOAD.logGroupingName && RAONKUPLOAD.logGroupingName == d[0].toLowerCase() &&
					"e" == d[1].toLowerCase() && (RAONKUPLOAD.logGroupingName = ""))); RAONKLogSolution.writeLog(g + "[RAONK Upload]", a, c, b)
			}
		}, G_AP11: 6, G_AP13: 7, trim: function(a) { return a.trim ? a.trim() : a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") }, getDefaultIframeSrc: function() {
			var a = "", a = "document.open();" + (RAONKUPLOAD.browser.isCustomDomain(document) ? 'document.domain="' + document.domain + '";' : "") + " document.close();"; return a = RAONKUPLOAD.browser.ie && 12 > RAONKUPLOAD.browser.ieVersion ? "javascript:void(function(){" + encodeURIComponent(a) +
				"}())" : ""
		}, makeIframe: function() { var a; try { a = document.createElement('<iframe frameborder="0" >') } catch (c) { a = document.createElement("iframe") } a.style.margin = "0px"; a.style.padding = "0px"; a.frameBorder = 0; a.style.overflow = "auto"; a.style.overflowX = "hidden"; a.style.backgroundColor = "#ffffff"; a.title = "RAONKUpload"; a.src = this.getDefaultIframeSrc(); return a }, addEvent: function(a, c, b, d) {
			a.addEventListener ? a.addEventListener(c, b, d) : a.attachEvent && a.attachEvent("on" + c, b); try {
				"" != RAONKUPLOAD.CUploadID ? (RAONKUPLOAD.RAONKMULTIPLEEVENT =
					{}, RAONKUPLOAD.RAONKMULTIPLEEVENT[RAONKUPLOAD.CUploadID] = [], RAONKUPLOAD.RAONKMULTIPLEEVENT[RAONKUPLOAD.CUploadID].push({ element: a, event: c, func: b }), RAONKUPLOAD.CUploadID = "") : KUPLOADTOP.G_CURRKUPLOADER && RAONKUPLOAD.RAONKMULTIPLEEVENT[KUPLOADTOP.G_CURRKUPLOADER.ID] && RAONKUPLOAD.RAONKMULTIPLEEVENT[KUPLOADTOP.G_CURRKUPLOADER.ID].push({ element: a, event: c, func: b })
			} catch (g) { }
		}, removeEvent: function(a, c, b, d) { a.removeEventListener ? a.removeEventListener(c, b, d) : a.detachEvent && a.detachEvent("on" + c, b) }, stopEvent: function(a) {
			"bubbles" in
			a ? a.bubbles && a.stopPropagation() : a.cancelBubble = !0
		}, cancelEvent: function(a) { a.preventDefault ? a.preventDefault() : a.returnValue = !1 }, ajax: { xml_http_request: function() { var a; window.XMLHttpRequest ? a = new XMLHttpRequest : window.ActiveXObject && (a = new ActiveXObject("Microsoft.XMLHTTP")); return a } }, url: {
			full_url: function(a) {
				var c = ""; if (0 == a.indexOf("http://") || 0 == a.indexOf("https://")) c = a; else if (0 == a.indexOf("/")) c = location.protocol + "//" + location.host + a; else var c = location.href, b = c.lastIndexOf("/"), c = c.substring(0,
					b + 1), c = c + a; return c
			}
		}, xml: {
			count: function(a, c) { return a ? a.getElementsByTagName(c).length : 0 }, getNode: function(a, c) { return null == a || void 0 == a ? null : this.getNodeIdx(a, c, 0) }, getNodeIdx: function(a, c, b) { return a.getElementsByTagName(c)[b] }, getNodeValue: function(a, c) { return null == a || void 0 == a ? "" : this.getNodeValueIdx(a, c, 0) }, getNodeValueIdx: function(a, c, b) { a = this.getNodeIdx(a, c, b); return this.getValue(a) }, getValue: function(a) {
				var c = "", b = ""; if (void 0 != a) try {
					0 < a.childNodes.length && (b = c = a.firstChild.nodeValue);
					try { ("product_key" == a.nodeName || "license_key" == a.nodeName || "license_key_ex" == a.nodeName || "font" == a.nodeName || "encoding" == a.nodeName || "doctype" == a.nodeName) && 2 <= a.childNodes.length && (c = a.textContent ? a.textContent : b) } catch (d) { c = b }
				} catch (g) { c = "parsing error" } return c
			}, getAllNodes: function(a) {
				var c = {}, b = function(a, c) {
					for (var e = a.childNodes, h = !1, k = 0; k < e.length; k++) {
						var m = e[k]; if (3 != m.nodeType && 8 != m.nodeType && 4 != m.nodeType) {
							var h = !0, n = {}; if (0 < m.attributes.length) {
								n._attributes = {}; for (var p = 0; p < m.attributes.length; p++) {
									var l =
										m.attributes[p]; n._attributes[l.nodeName] = l.nodeValue
								}
							} "undefined" == typeof c[m.nodeName] ? c[m.nodeName] = n : 0 < c[m.nodeName].length ? c[m.nodeName].push(n) : c[m.nodeName] = [c[m.nodeName], n]; 0 < m.childNodes.length && b(m, n)
						}
					} h || (value = a.textContent || a.nodeTypedValue || "", 4 != a.firstChild.nodeType && (value = value.replace(/^[\s]+|[\s]+&/g, "")), value && "" != value && (c._value = value))
				}; "xml" == a.firstChild.nodeName.toLowerCase() ? b(a.firstChild.nextSibling, c) : b(a.firstChild, c); return c
			}
		}, removeEvents: function(a, c, b) {
			a = c.split(",");
			c = b.length; for (var d = 0, g = 0; g < c; g++)for (var d = a.length, e = 0; e < d; e++)b[g].removeAttribute(a[e])
		}, removeElementWithChildNodes: function(a) {
			try {
				if (null != a) {
					if ("1" == a.nodeType && "iframe" == a.tagName.toLowerCase()) {
						var c = a.contentDocument || a.contentWindow.document || a.document; if (c) {
							if (a.contentWindow) for (var b in a.contentWindow) if (a.contentWindow.hasOwnProperty(b)) try { a.contentWindow[b] = null, delete a.contentWindow[b] } catch (d) { } for (var g = c.getElementsByTagName("script"); 0 != g.length;) {
								g[0].parentNode.removeChild(g[0]);
								for (var e in g) delete g[e]
							} c.body && (c.body.innerHTML = ""); c.body.parentNode && (c.body.parentNode.innerHTML = "")
						} a.setAttribute("src", "")
					} for (; a.hasChildNodes();)try { a.removeChild(a.firstChild), a.firstChild = null, delete a.firstChild } catch (h) { } a.parentNode.removeChild(a); try { delete null } catch (k) { }
				}
			} catch (m) { }
		}, bytesToSize: function(a) {
			a = parseInt(a, 10); var c = "0 byte"; isNaN(a) && (a = "", c = "N/A"); c = { size: 0, unit: "byte", toString: c }; if (0 == a) return c; var b = parseInt(Math.floor(Math.log(a) / Math.log(1024))); c.size = Math.round(a /
				Math.pow(1024, b) * 100, 2) / 100; c.unit = ["bytes", "KB", "MB", "GB", "TB"][b]; c.toString = c.size + " " + c.unit; return c
		}, stringToXML: function(a) { var c; try { window.DOMParser ? c = (new DOMParser).parseFromString(a, "text/xml") : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(a)) } catch (b) { c = null } return c }, xmlToString: function(a) { return window.ActiveXObject ? a.xml : (new XMLSerializer).serializeToString(a) }, getUnitSize: function(a) {
			var c = 1; switch (a.toLowerCase()) {
				case "kb": c *= 1024; break; case "mb": c *= 1048576;
					break; case "gb": c *= 1073741824; break; case "tb": c *= 1099511627776
			}return c
		}, getUnit: function(a) { a = a.toLowerCase(); var c = ""; -1 < a.indexOf("tb") ? c = a.substring(a.indexOf("tb")) : -1 < a.indexOf("mb") ? c = a.substring(a.indexOf("mb")) : -1 < a.indexOf("gb") ? c = a.substring(a.indexOf("gb")) : -1 < a.indexOf("kb") ? c = a.substring(a.indexOf("kb")) : -1 < a.indexOf("b") && (c = a.substring(a.indexOf("b"))); return c }, getDate: function() {
			var a = 0, c = new Date, a = "" + c.getFullYear(), b = "" + (c.getMonth() + 1); 1 == b.length && (b = "0" + b); c = "" + c.getDate();
			1 == c.length && (c = "0" + c); return a = parseInt(a + b + c, 10)
		}, getMimeFilter: function(a) { var c = "", c = a.split(",").join(",."); "" != c && (c = "." + c); return c }, getMimeFilterEx: function(a) { var c = "", c = a.split(",").join(";*."); "" != c && (c = "*." + c); return c }, getExtStringFromExtEx: function(a) { a = a.toLowerCase().split("|"); for (var c = a.length, b = "", d = 1; d < c; d += 2) { var g = a[d].replace(/\*./gi, ""), g = g.replace(/\*/gi, ""), g = g.replace(/;$/gi, ""), g = g.replace(/;/gi, ","); "" != b && (b += ","); b += g } return b }, parseIntOr0: function(a) {
			a = parseInt(a,
				10); return isNaN(a) ? 0 : a
		}, makeGuidTagName: function(a) { var c = 0, b = (new Date).getTime().toString(32), d; for (d = 0; 5 > d; d++)b += Math.floor(65535 * Math.random()).toString(32); return (a || "o_") + b + (c++).toString(32) }, makeGuid: function(a) { var c = function() { return (65536 * (1 + Math.random()) | 0).toString(16).substring(1) }, c = (c() + c() + c() + c() + c() + c() + c() + c()).toLowerCase(); void 0 != a && (c = a + "-" + c); return c }, getUserLang: function(a) {
			a = a.toLowerCase(); var c = "ko-kr"; "auto" == a && (c = "en-us", (a = navigator.language || navigator.userLanguage) ||
				(a = c), a = a.toLowerCase()); -1 < a.indexOf("auto") ? c = "Auto" : -1 < a.indexOf("ko") ? c = "ko-kr" : -1 < a.indexOf("en") ? c = "en-us" : -1 < a.indexOf("ja") ? c = "ja-jp" : -1 < a.indexOf("zh-cn") ? c = "zh-cn" : -1 < a.indexOf("zh-tw") && (c = "zh-tw"); return c
		}, getDocWindow: function(a) { return a.parentWindow || a.defaultView }, getClientRect: function(a) { var c = { left: 0, top: 0, right: 0, bottom: 0 }; try { c = a.getBoundingClientRect() } catch (b) { } return c }, getParentbyTagName: function(a, c) {
			for (var b = a; null != b && (!b.tagName || b.tagName.toLowerCase() != c);)b = b.parentNode;
			return b
		}, getElementsByClass: function(a, c, b) { var d = []; null == c && (c = document); null == b && (b = "*"); c = c.getElementsByTagName(b); b = c.length; a = new RegExp("(^|\\s)" + a + "(\\s|$)"); for (j = i = 0; i < b; i++)a.test(c[i].className) && (d[j] = c[i], j++); return d }, postFormData: function(a, c, b, d) {
			void 0 == d && (d = []); var g = a.createElement("form"); g.method = "post"; g.action = c; g.target = b; c = d.length; for (b = 0; b < c; b++) { var e = a.createElement("input"); e.type = "hidden"; e.name = d[b][0]; e.value = d[b][1]; g.appendChild(e) } a.body.appendChild(g); g.submit();
			a.body.removeChild(g)
		}, base64_decode: function(a) {
			var c = "", b, d, g, e, h, k = 0; for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); k < a.length;)b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(k++)), b = b <<
				2 | d >> 4, d = (d & 15) << 4 | e >> 2, g = (e & 3) << 6 | h, c += String.fromCharCode(b), 64 != e && (c += String.fromCharCode(d)), 64 != h && (c += String.fromCharCode(g)); return c = RAONKUPLOAD.util.utf8_decode(c)
		}, base64_encode: function(a) {
			var c = "", b, d, g, e, h, k, m = 0; for (a = RAONKUPLOAD.util.utf8_encode(a); m < a.length;)b = a.charCodeAt(m++), d = a.charCodeAt(m++), g = a.charCodeAt(m++), e = b >> 2, b = (b & 3) << 4 | d >> 4, h = (d & 15) << 2 | g >> 6, k = g & 63, isNaN(d) ? h = k = 64 : isNaN(g) && (k = 64), c = c + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(b) +
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k); return c
		}, utf8_encode: function(a) { a = a.replace(/\r\n/g, "\n"); for (var c = "", b = 0; b < a.length; b++) { var d = a.charCodeAt(b); 128 > d ? c += String.fromCharCode(d) : (127 < d && 2048 > d ? c += String.fromCharCode(d >> 6 | 192) : (c += String.fromCharCode(d >> 12 | 224), c += String.fromCharCode(d >> 6 & 63 | 128)), c += String.fromCharCode(d & 63 | 128)) } return c }, utf8_decode: function(a) {
			for (var c =
				"", b = 0, d = c1 = c2 = 0; b < a.length;)d = a.charCodeAt(b), 128 > d ? (c += String.fromCharCode(d), b++) : 191 < d && 224 > d ? (c2 = a.charCodeAt(b + 1), c += String.fromCharCode((d & 31) << 6 | c2 & 63), b += 2) : (c2 = a.charCodeAt(b + 1), c3 = a.charCodeAt(b + 2), c += String.fromCharCode((d & 15) << 12 | (c2 & 63) << 6 | c3 & 63), b += 3); return c
		}, dataURItoBlob: function(a) {
			var c = atob(a.split(",")[1]); a = a.split(",")[0].split(":")[1].split(";")[0]; for (var b = new ArrayBuffer(c.length), d = new Uint8Array(b), g = 0; g < c.length; g++)d[g] = c.charCodeAt(g); c = new DataView(b); return new Blob([c.buffer],
				{ type: a })
		}, makeDecryptReponseMessage: function(a) {
			var c = function(a, b) { var c = a.split(""); c.splice(b, 1); return c = c.join("") }; a = a.replace(/ /g, ""); a = a.replace(/\r/g, ""); a = a.replace(/\n/g, ""); a = a.replace(/%2B/g, "+"); if (0 == a.indexOf("_")) try {
				a = a.substring(1); var b = KUPLOADTOP.G_CURRKUPLOADER._config.security.keyValue, b = b.substring(0, 14), b = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Utf8.parse(b); b.sigBytes = 16; var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map; KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map =
					"hituvabcdejklmnopqrxyzsfgwBCDEANOPQRSFGHIJKLYZMTUVWX5890167234+/="; a = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64.parse(a); KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map = d; a = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.AES.decrypt({ ciphertext: a }, b, { iv: b }).toString(KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Utf8)
			} catch (g) { a = "C012|response data decrypt error" } else 15 <= a.length ? (a = c(a, 9), a = c(a, 6), a = c(a, 8), a = c(a, 7), a = c(a, 9), a = c(a, 6), a = c(a, 8)) : (a = a.replace(/#/g, ""), a = a.replace(/$/g,
				"")), a = RAONKUPLOAD.util.base64_decode(a); return a
		}, getCodeAndMessage: function(a) { var c = { code: "", message: "" }; a = a.split("|"); 0 == a.length ? c.message = a[0] : (c.code = a[0], c.message = a[1]); return c }, set_handlerUrl: function(a) { var c = "", c = 0 == a.length ? RAONKUPLOAD.rootPath : "/" == a.substring(0, 1) ? location.protocol + "//" + location.host : 4 < a.length && ("http" == a.substring(0, 4).toLowerCase() || "file" == a.substring(0, 4).toLowerCase()) ? "" : RAONKUPLOAD.rootPath; return c + a }, buildFormData: function(a, c, b, d) {
			c = "" + ("--" + a + '\r\nContent-Disposition: form-data; name="' +
				c + '"') + "\r\n"; c += "\r\n"; c += b; c += "\r\n"; d && (c += "--" + a + "--"); return c
		}, hashTable: function(a) {
			this.length = 0; this.items = {}; for (var c in a) a.hasOwnProperty(c) && (this.items[c] = a[c], this.length++); this.setItem = function(a, c) { var g = void 0; this.hasItem(a) ? g = this.items[a] : this.length++; this.items[a] = c; return g }; this.getItem = function(a) { return this.hasItem(a) ? this.items[a] : void 0 }; this.hasItem = function(a) { return this.items.hasOwnProperty(a) }; this.removeItem = function(a) {
				if (this.hasItem(a)) return previous = this.items[a],
					this.length--, delete this.items[a], previous
			}; this.keys = function() { var a = [], c; for (c in this.items) this.hasItem(c) && a.push(c); return a }; this.values = function() { var a = [], c; for (c in this.items) this.hasItem(c) && a.push(this.items[c]); return a }; this.each = function(a) { for (var c in this.items) this.hasItem(c) && a(c, this.items[c]) }; this.clear = function() { this.items = {}; this.length = 0 }
		}, setSecuritySetting: function(a, c, b, d) {
			if (1 == d) "NONE" == b.developLang && (b.security.encryptParam = "0", b.security.fileIntegrity = "0", b.security.fileIntegrityUpload =
				"", b.security.fileIntegrityDownload = ""); else {
					a.Security.EncryptParam && "" != a.Security.EncryptParam ? b.security.encryptParam = "1" == a.Security.EncryptParam ? "1" : "2" == a.Security.EncryptParam ? "2" : "0" : (d = RAONKUPLOAD.util.xml.getNodeValue(c, "encrypt_param"), b.security.encryptParam = "1" == d ? "1" : "2" == d ? "2" : "0"); a.Security.FileExtensionDetector && "" != a.Security.FileExtensionDetector ? b.security.fileExtensionDetector = "1" == a.Security.FileExtensionDetector ? "1" : "0" : (d = RAONKUPLOAD.util.xml.getNodeValue(c, "file_extension_detector"),
						b.security.fileExtensionDetector = "1" == d ? "1" : "0"); a.Security.DeleteOpenFile && "" != a.Security.DeleteOpenFile && (b.security.deleteOpenFile = a.Security.DeleteOpenFile); a.Security.FileIntegrity && "" != a.Security.FileIntegrity ? b.security.fileIntegrity = "1" == a.Security.FileIntegrity ? "1" : "0" : (d = RAONKUPLOAD.util.xml.getNodeValue(c, "file_integrity"), b.security.fileIntegrity = "1" == d ? "1" : "0"); if (a.Security.FileIntegrityUpload && "" != a.Security.FileIntegrityUpload) b.security.fileIntegrityUpload = "1" == a.Security.FileIntegrityUpload ?
							"1" : "0" == a.Security.FileIntegrityUpload ? "0" : ""; else if (d = RAONKUPLOAD.util.xml.getNode(c, "file_integrity")) d = d.getAttribute("upload"), b.security.fileIntegrityUpload = "1" == d ? "1" : "0" == d ? "0" : ""; if (a.Security.FileIntegrityDownload && "" != a.Security.FileIntegrityDownload) b.security.fileIntegrityDownload = "1" == a.Security.FileIntegrityDownload ? "1" : "0" == a.Security.FileIntegrityDownload ? "0" : ""; else if (d = RAONKUPLOAD.util.xml.getNode(c, "file_integrity")) d = d.getAttribute("download"), b.security.fileIntegrityDownload =
								"1" == d ? "1" : "0" == d ? "0" : ""; a.Security.FileEncrypt && "" != a.Security.FileEncrypt ? b.security.fileEncrypt = a.Security.FileEncrypt : (d = RAONKUPLOAD.util.xml.getNodeValue(c, "file_encrypt"), b.security.fileEncrypt = d); 0 < b.security.fileEncrypt && "1" != b.useKManager && ("html5" != b.userRunTimeMode ? b.security.fileEncrypt = "0" : "1" != a.Security.FileEncryptHtml5 && ("0" == a.Security.FileEncryptHtml5 ? b.security.fileEncrypt = "0" : (a = RAONKUPLOAD.util.xml.getNode(c, "file_encrypt"), a && a.getAttribute("use_html5") && "1" == a.getAttribute("use_html5") ||
									(b.security.fileEncrypt = "0"))))
			}
		}, makeEncryptParam: function(a) {
			a = RAONKUPLOAD.util.base64_encode(a); 10 <= a.length ? (a = RAONKUPLOAD.util.insertAt(a, RAONKSolution.Agent.G_AP10, RAONKUPLOAD.util.G_AP27), a = RAONKUPLOAD.util.insertAt(a, RAONKUPLOAD.util.G_AP11, RAONKSolution.Agent.G_AP.G_AP22), a = RAONKUPLOAD.util.insertAt(a, RAONKUPLOAD.browser.G_AP12, RAONKUPLOAD.util.G_AP25), a = RAONKUPLOAD.util.insertAt(a, RAONKUPLOAD.util.G_AP13, RAONKSolution.Agent.G_AP23), a = RAONKUPLOAD.util.insertAt(a, RAONKSolution.Agent.G_AP10,
				RAONKSolution.Agent.G_AP.G_AP29), a = RAONKUPLOAD.util.insertAt(a, RAONKUPLOAD.util.G_AP11, RAONKUPLOAD.browser.G_AP24), a = RAONKUPLOAD.util.insertAt(a, RAONKUPLOAD.browser.G_AP12, RAONKSolution.Agent.G_AP20)) : (a = RAONKUPLOAD.util.insertAt(a, a.length - 1, "$"), a = RAONKUPLOAD.util.insertAt(a, 0, "$")); return a = a.replace(/[+]/g, "%2B")
		}, makeEncryptParam2: function(a) {
			var c = KUPLOADTOP.G_CURRKUPLOADER._config.security.keyValue, c = c.substring(0, 15), c = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Utf8.parse(c); c.sigBytes =
				16; a = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Utf8.parse(a); a = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.AES.encrypt(a, c, { iv: c }); c = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map; KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map = "hituvabcdejklmnopqrxyzsfgwBCDEANOPQRSFGHIJKLYZMTUVWX5890167234+/="; a = KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64.stringify(a.ciphertext); KUPLOADTOP.G_CURRKUPLOADER.frameWin.CryptoJS.enc.Base64._map = c; return a = a.replace(/[+]/g,
					"%2B")
		}, makeEncryptParamOld: function(a) { a = RAONKUPLOAD.util.base64_encode(a); a = "R" + a; a = RAONKUPLOAD.util.base64_encode(a); return a = a.replace(/[+]/g, "%2B") }, makeEncryptParamFinal: function(a) {
			var c = { name: "", value: "" }, b = KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam; "2" == b && "2.7.1268547.1800.01" > KUPLOADTOP.RAONKUPLOAD.ServerReleaseVer && (b = "1"); if ("1" >= b) c.name = "k00", c.value = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam(a); else if ("2" == b) try { c.name = "k01", c.value = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam2(a) } catch (d) {
				c.name =
				"k00", c.value = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParam(a)
			} return c
		}, getIframeDocument: function(a) { return "undefined" != typeof a.contentDocument ? a.contentDocument : "undefined" != typeof a.contentWindow ? a.contentWindow.document : null }, isExistUploaderName: function(a, c) { if (void 0 == a || "" == a) return 1; var b = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + a]; return void 0 == b || null == b ? 0 : "" != c.UploadHolder && RAONKUPLOAD.RAONKHOLDER[a] == c.UploadHolder ? 3 : 2 }, getNewNextUploaderName: function(a) {
			var c = "", b = a.split("_"),
			d = 0; do c = b.length, 1 < c && (a = a.replace("_" + b[c - 1], "")), c = a + "_" + d, d++; while (0 < RAONKUPLOAD.util.isExistUploaderName(c)); return c
		}, createEvent: function(a, c, b) { var d = document.createElement("script"); d.setAttribute("for", a); d.event = c; d.appendChild(document.createTextNode(b)); document.body.appendChild(d) }, initHandlerCheck: function(a, c, b) {
			if ((a = RAONKUPLOAD.util.parseDataFromServer(a)) && -1 < a.toLowerCase().indexOf("hello raonk")) {
				if (-1 < a.indexOf(RAONKSolution.Agent.formfeed)) {
					b = a.split(RAONKSolution.Agent.formfeed);
					var d = b.length; a = b[0]; if (null != c.cloudInfo && void 0 != c.cloudInfo && "1" == c.cloudInfo.Use && 1 < d && "" != b[1]) { var g = b[1], g = g.replace(/ /g, ""), g = g.replace(/\r/g, ""), g = g.replace(/\n/g, ""); c.cloudInfo ? c.cloudInfo.K256Key = g : c.cloudInfo = { K256Key: g } } 2 < d && "" != b[2] && (b = b[2], b = b.replace(/ /g, ""), b = b.replace(/\r/g, ""), b = b.replace(/\n/g, ""), c.sworkInfo ? c.sworkInfo.K256Key = b : c.sworkInfo = { K256Key: b })
				} -1 < a.indexOf("-") && (RAONKUPLOAD.ServerReleaseVer = a.split("-")[1], c.security.keyValue = RAONKUPLOAD.ServerReleaseVer)
			} else if (a &&
				0 < a.length) if (-1 < a.indexOf(c.unitDelimiter)) c = a.split(c.unitDelimiter), RAONKUPLOAD.ServerReleaseVer = c[1], RAONKUPLOAD._0_ = c[2], alert(c[0]); else if (a && 0 == a.indexOf("[FAIL]")) try {
					if (d = RAONKUPLOAD.util.makeDecryptReponseMessage(a.substring(6)).split("|"), g = { strType: "handlerCheck", strCode: d[0], strMessage: d[1] }, "function" == typeof c.event.onError) c.event.onError(b.Id, g); else "function" !== typeof RAONKUPLOAD_OnError && alert("Error Code: "+g.strCode+"\nError Message: "+g.strMessage),RAONKUPLOAD_OnError(b.Id,
					g)
				} catch (e) { } else alert(a); else a = "", b = 0 < b.InitXml.length ? b.InitXml : "raonkupload.config.xml", "ko-kr" == c.lang ? (a = "Uploader\uc758 \uc124\uc815\uac12\uc774 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc544\ub798 URL \uc811\uadfc\uc774 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\n" + (c.handlerUrl + "\n\n"), a += b + " \ud30c\uc77c\uc758 uploader_setting \uc139\uc158\uc758 <develop_langage>\uc640 <handler_url> \uc124\uc815\uac12\uc744 \ud655\uc778\ud558\uc138\uc694.") : (a = "Uploader's setting is not correct. Access the following URL is not valid.\n\n" +
					(c.handlerUrl + "\n\n"), a += 'Please check the settings, <handler_url> and <develop_langage> in "uploader_setting" section in the "' + b + '."'),
					(a)
		}, createUploaderIframe: function(a, c, b, d, g, e) {
			var h = document.createElement("iframe"); c.appendChild(h); h.id = d; h.title = g; "" == h.title && (h.title = "RAONKUpload Area"); h.frameBorder = 0; h.style.width = "100%"; h.style.height = RAONKUPLOAD.browser.quirks ? a.height : "100%"; h.style.borderWidth = "0px"; c = RAONKUPLOAD.util.getDefaultIframeSrc(); h.src = c; RAONKUPLOAD.util.addEvent(h,
				"load", function() {
					try {
						h.contentWindow.raonk_frame_loaded_event(e, a, b); var c = KUPLOADTOP.G_CURRKUPLOADER.frameWin.getDialogDocument(), d = c.getElementsByTagName("head")[0], g = d.getElementsByTagName("link"), p = g.length, l = "raonkupload.popup.min.css"; RAONKUPLOAD.isRelease || (l = "raonkupload.popup.css"); for (var r = !1, q = 0; q < p; q++)-1 < g[q].href.indexOf(l) && (r = !0); if (!r) {
							var f = c.createElement("link"); f.type = "text/css"; f.rel = "stylesheet"; var u = RAONKUPLOAD.ReleaseVer; "1" == KUPLOADTOP.G_CURRKUPLOADER._config.cacheProtectMode &&
								(u = RAONKUPLOAD.util.getTimeStamp()); f.href = RAONKUPLOAD.isRelease ? a.webPath.css + "raonkupload.popup.min.css?ver=" + u : a.webPath.cssDev + "raonkupload.popup.css?ver=" + u; d.appendChild(f)
						} b = a = null
					} catch (t) { }
				}, !1); c = RAONKUPLOAD.util.getIframeDocument(h); d = '<!DOCTYPE html><html lang="ko">'; d += "<head>"; d += "<title>RAONK Upload</title>"; g = RAONKUPLOAD.ReleaseVer; "1" == a.cacheProtectMode && (g = RAONKUPLOAD.util.getTimeStamp()); RAONKUPLOAD.isRelease ? (d += '<link rel="stylesheet" type="text/css" href="' + a.webPath.css + "raonkupload.min.css?ver=" +
					g + '" />', d += '<link rel="stylesheet" type="text/css" href="' + a.webPath.css + "raonkupload.context.min.css?ver=" + g + '" />', "" != a.userCssUrl && (d += '<link rel="stylesheet" type="text/css" href="' + a.userCssUrl + '" />'), d += "<style>body,div,dl,dt,dd,ol,ul,li,h1,h2,h3,h4,h5,form,fieldset,p,button,input,object,pre,a,label{margin:0;padding:0;font-size:12px;font-family:" + RAONKUPLOAD.util.langFontStyle[a.lang] + "}</style>", RAONKUPLOAD.browser.isCustomDomain(document) && (d += '<script type="text/javascript"> document.domain = "' +
						document.domain + '"; \x3c/script>'), d += '<script type="text/javascript" src="' + a.webPath.js + "raonkupload.xhr.js?ver=" + g + '">\x3c/script>', 1 > a.imageQuality.quality && 0 == RAONKUPLOAD.browser.imageProcessWorkerSupported && "0" == a.useKManager && (d += '<script type="text/javascript" src="' + a.webPath.js + "raonkupload.image.exif.js?ver=" + g + '">\x3c/script>'), d += '<script type="text/javascript" src="' + a.webPath.js + "raonkupload.core.js?ver=" + g + '">\x3c/script>', d += '<script type="text/javascript" src="' + a.webPath.js + "json2.min.js?ver=" +
						g + '">\x3c/script>', "0" != a.useKManager || "html5" != a.userRunTimeMode || "1" != ("" != a.security.fileIntegrityUpload ? a.security.fileIntegrityUpload : a.security.fileIntegrity) && "1" != a.security.fileEncrypt && "2" != a.security.fileEncrypt || (d += '<script type="text/javascript" src="' + a.webPath.js + "raonkupload.fdi.aes.js?ver=" + g + '">\x3c/script>'), "0" == a.useKManager && "html5" == a.userRunTimeMode && "1" == ("" != a.security.fileIntegrityUpload ? a.security.fileIntegrityUpload : a.security.fileIntegrity) && (d += '<script type="text/javascript" src="' +
							a.webPath.js + "hmac-sha256.js?ver=" + g + '">\x3c/script>'), "0" != a.useKManager || "1" != a.security.fileEncrypt && "2" != a.security.fileEncrypt && "2" != a.security.encryptParam || (d += '<script type="text/javascript" src="' + a.webPath.js + "aes.js?ver=" + g + '">\x3c/script>'), "0" != a.useCompressTransfer && (d += '<script type="text/javascript" src="' + a.webPath.js + "jszip/jszip.js?ver=" + g + '">\x3c/script>'), d += '<script type="text/javascript" src="' + a.webPath.lang + a.lang + ".js?ver=" + g + '">\x3c/script>', "0" == a.useKManager && "html4" ==
							a.userRunTimeMode && (d += '<script type="text/javascript" src="' + a.webPath.js + "raonkupload.html4.js?ver=" + g + '">\x3c/script>')) : (d += '<link rel="stylesheet" type="text/css" href="' + a.webPath.cssDev + "raonkupload.css?ver=" + g + '" />', d += '<link rel="stylesheet" type="text/css" href="' + a.webPath.cssDev + "raonkupload.context.css?ver=" + g + '" />', "" != a.userCssUrl && (d += '<link rel="stylesheet" type="text/css" href="' + a.userCssUrl + '" />'), d += "<style>body,div,dl,dt,dd,ol,ul,li,h1,h2,h3,h4,h5,form,fieldset,p,button,input,object,pre,a,label{margin:0;padding:0;font-size:12px;font-family:" +
								RAONKUPLOAD.util.langFontStyle[a.lang] + "}</style>", RAONKUPLOAD.browser.isCustomDomain(document) && (d += '<script type="text/javascript"> document.domain = "' + document.domain + '"; \x3c/script>'), d += '<script type="text/javascript" src="' + a.webPath.jsDev + "raonkupload.xhr.js?ver=" + g + '">\x3c/script>', d += '<script type="text/javascript" src="' + a.webPath.jsDev + "raonkupload.src.js?ver=" + g + '">\x3c/script>', d += '<script type="text/javascript" src="' + a.webPath.jsDev + "raonkupload.api.js?ver=" + g + '">\x3c/script>', d +=
								'<script type="text/javascript" src="' + a.webPath.jsDev + "raonkupload.control.js?ver=" + g + '">\x3c/script>', d += '<script type="text/javascript" src="' + a.webPath.jsDev + "raonkupload.base64.js?ver=" + g + '">\x3c/script>', d += '<script type="text/javascript" src="' + a.webPath.jsDev + "raonkupload.context.js?ver=" + g + '">\x3c/script>', d += '<script type="text/javascript" src="' + a.webPath.jsDev + "json2.min.js?ver=" + g + '">\x3c/script>', d += '<script type="text/javascript" src="' + a.webPath.jsDev + "raonkupload.detector.js?ver=" +
								g + '">\x3c/script>', 1 > a.imageQuality.quality && 0 == RAONKUPLOAD.browser.imageProcessWorkerSupported && "0" == a.useKManager && (d += '<script type="text/javascript" src="' + a.webPath.jsDev + "raonkupload.image.exif.js?ver=" + g + '">\x3c/script>'), "0" != a.useKManager || "html5" != a.userRunTimeMode || "1" != ("" != a.security.fileIntegrityUpload ? a.security.fileIntegrityUpload : a.security.fileIntegrity) && "1" != a.security.fileEncrypt && "2" != a.security.fileEncrypt || (d += '<script type="text/javascript" src="' + a.webPath.jsDev + "raonkupload.fdi.aes.js?ver=" +
									g + '">\x3c/script>'), "0" == a.useKManager && "html5" == a.userRunTimeMode && "1" == ("" != a.security.fileIntegrityUpload ? a.security.fileIntegrityUpload : a.security.fileIntegrity) && (d += '<script type="text/javascript" src="' + a.webPath.jsDev + "hmac-sha256.js?ver=" + g + '">\x3c/script>'), "0" != a.useKManager || "1" != a.security.fileEncrypt && "2" != a.security.fileEncrypt && "2" != a.security.encryptParam || (d += '<script type="text/javascript" src="' + a.webPath.jsDev + "aes.js?ver=" + g + '">\x3c/script>'), "0" != a.useCompressTransfer && (d +=
										'<script type="text/javascript" src="' + a.webPath.jsDev + "jszip/jszip.js?ver=" + g + '">\x3c/script>'), d += '<script type="text/javascript" src="' + a.webPath.langDev + a.lang + ".js?ver=" + g + '">\x3c/script>', "0" == a.useKManager && "html4" == a.userRunTimeMode && (d += '<script type="text/javascript" src="' + a.webPath.jsDev + "raonkupload.html4.js?ver=" + g + '">\x3c/script>')); d += "</head>"; d += '<body oncontextmenu="return false" class="raonk_' + a.lang + '">'; d += "</body>"; d += "</html>"; c.open("text/html", "replace"); c.write(d); c.close();
			return h
		}, GetUserRunTimeUpload: function(a, c) {
			a = a.toLowerCase(); var b = "", d = !1; "agent" == a && (d = !0, a = "html5"); b = "html5plus" == a ? 1 == RAONKUPLOAD.browser.HTML5PlusSupported && "1" == c ? "html5plus" : 1 == RAONKUPLOAD.browser.HTML5Supported ? "html5" : "html4agent" : "html5" == a ? 1 == RAONKUPLOAD.browser.HTML5Supported ? "html5" : "html4agent" : "htmlonly" == a ? 1 == RAONKUPLOAD.browser.HTML5Supported ? "html5" : "html4" : 1 == RAONKUPLOAD.browser.HTML5PlusSupported && "1" == c ? "html5plus" : 1 == RAONKUPLOAD.browser.HTML5Supported ? "html5" : "html4agent";
			return { isAgent: d, mode: b }
		}, gcRequest_postMessage: function(a) {
			var c; c = "" + ("kc" + RAONKSolution.Agent.formfeed + "c20"); c = RAONKUPLOAD.util.makeEncryptParam(c); if ("html4" == a.userRunTimeMode && a.isCrossDomain) {
				var b = document.createElement("div"), d = RAONKUPLOAD.util.getDefaultIframeSrc(); b.innerHTML = '<iframe name="initCheckframe" id="initCheckframe" style="display:none;" src="' + d + '"></iframe>'; b.style.display = "none"; document.body.appendChild(b); RAONKUPLOAD.util.postFormData(document, a.handlerUrl, "initCheckframe",
					[["k00", c]]); document.body.removeChild(b)
			} else RAONKUPLOAD.ajax.postData(a.handlerUrl, "k00=" + c, function() { })
		}, _setRaonKUploader: function(a) { a = RAONKUPLOAD.util._getRaonKUploader(a); return void 0 == a || null == a ? !1 : a }, _getRaonKUploader: function(a) { var c = null, c = RAONKUPLOAD.util._getUploaderByName(a); return void 0 == c || null == c ? (alert("Uploader's Name is not correct, Please check uploader's name. \ror\rThe uploader was not initialized, Please check the location of api call"), null) : c }, _getUploaderByName: function(a) {
			var c =
				null; if (void 0 == a || "" == a) c = KUPLOADTOP.G_CURRKUPLOADER; else { try { if (1 == RAONKUPLOAD.RAONKMULTIPLEID.length) { var b = RAONKUPLOAD.RAONKMULTIPLEID[0]; a != b && RAONKUPLOAD.isLoadedUploadEx(b) && (a = b) } } catch (d) { } c = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + a]; "object" != typeof c && (c = null) } return c
		}, _getUploadName: function(a) {
			if (void 0 == a || "" == a) {
				if (null != RAONKUPLOAD.RAONKMULTIPLEID && void 0 != RAONKUPLOAD.RAONKMULTIPLEID && 1 == RAONKUPLOAD.RAONKMULTIPLEID.length) return RAONKUPLOAD.RAONKMULTIPLEID[0]; alert("Uploader's Name is not correct, Please check uploader's name. \ror\rThe uploader was not initialized, Please check the location of api call");
				return null
			} return a
		}, prependZero: function(a, c) { for (; a.toString().length < c;)a = "0" + a; return a }, insertAt: function(a, c, b) { return String.prototype.insertAt ? a.insertAt(c, b) : a.substr(0, c) + b + a.substr(c) }, G_AP27: "r", G_AP25: "o", createDropZoneObject: function(a) {
			if (null == document.getElementById("dext5dropzonePL")) {
				var c, b = a.licenseKey; c = '<object id="dext5dropzonePL" name="dext5dropzonePL" classid="CLSID:F7FEF85C-B9A4-421C-BD01-099E534ABFB0" width="0" height="0" style="width:0px; height:0px;">' + ('<param name="sPostURL" value="' +
					a.handlerUrl + '">'); c += '<param name="strProductKey" value="' + a.productKey + '">'; c = c + ('<param name="strLicenseKey" value="' + b + '">') + ('<param name="nUseDropzone" value="' + a.useDropzone + '">'); c += "</object>"; a = document.createElement("div"); a.innerHTML = c; c = a.firstChild; document.body.appendChild(c); 11 <= RAONKUPLOAD.browser.ieVersion ? RAONKUPLOAD.util.createEvent("dext5dropzonePL", "d5_event_dropZone_drop(strID, strFullPath, bFolder, nDropCount)", "dext5_dropZone_drop(strID, strFullPath, bFolder, nDropCount)") :
						c.attachEvent("d5_event_dropZone_drop", dext5_dropZone_drop)
			}
		}, rgbToHex: function() { var a, c, b; 1 == arguments.length ? (a = arguments[0].toLowerCase(), a = a.replace("rgb(", ""), a = a.replace("rgba(", ""), a = a.replace(")", ""), b = a.split(","), a = parseInt(b[0], 10), c = parseInt(b[1], 10), b = parseInt(b[2], 10)) : 3 <= arguments.length && (a = arguments[0], c = arguments[1], b = arguments[2]); return "#" + (16777216 + (a << 16) + (c << 8) + b).toString(16).slice(1) }, jsonToString: function(a) { return KUPLOADTOP.G_CURRKUPLOADER.frameWin.JSON.stringify(a) },
		stringToJson: function(a) { return KUPLOADTOP.G_CURRKUPLOADER.frameWin.JSON.parse(a) }, saveJsonToLocalStorage: function(a, c) { var b = RAONKUPLOAD.util.jsonToString(c); window.localStorage[a] = b }, loadJsonFromLocalStorage: function(a) { a = window.localStorage[a]; var c = null; a && (c = RAONKUPLOAD.util.stringToJson(a)); return c }, langFontStyle: { "ko-kr": "dotum,\ub3cb\uc6c0,tahoma,sans-serif;", "en-us": "Arial,Verdana,sans-serif;", "zh-cn": "Arial,Verdana,sans-serif;", "zh-tw": "Arial,Verdana,sans-serif;", "ja-jp": "MS PGothic,MS UI Gothic,Verdana,sans-serif;" },
		parseDataFromServer: function(a) { if (a) { var c = a.toLowerCase().indexOf("<raonk>"); -1 < c && (a = a.substring(c + 7)); c = a.toLowerCase().indexOf("</raonk>"); -1 < c && (a = a.substring(0, c)) } return a }, getParamInfoFromUrl: function(a) { var c = []; if ((a = a.split("?")[1]) && "" != a) { a = a.split("&"); for (var b = a.length, d = 0; d < b; d++) { var g = a[d].split("="), e = ""; if (2 < g.length) { for (var h = 1; h < g.length; h++)e += g[h] + "="; e = e.substring(0, e.length - 1) } else e = g[1] ? g[1] : ""; c.push({ name: g[0], value: e }) } } return c }, changeUrlForGetParam: function(a, c) {
			var b =
				a, d = RAONKUPLOAD.util.getParamInfoFromUrl(b), g = d.length; if (0 < g) for (var b = a.split("?")[0], b = b + "?", e = 0; e < g; e++) { 0 != e && (b += "&"); var h = d[e].value, h = "1" == c ? RAONKUPLOAD.util.makeEncryptParam(h) : "2" == c ? RAONKUPLOAD.util.makeEncryptParam2(h) : encodeURIComponent(h), b = b + (d[e].name + "=" + h) } return b
		}, getInterValue: function(a) { var c = 1E3; try { var b = parseInt(a, 10); 5242880 > b ? (c = parseInt(b * c / 5242880, 10), 500 > c && (c = 500)) : 1048576 < b / 1024 && (c = 1500) } catch (d) { c = 1E3 } return c }, getDomainInUrl: function(a) {
			var c = {
				fullDomain: "", domain: "",
				port: ""
			}; try { var b = a.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i); c.fullDomain = b && b[1] ? b && b[1] : ""; if ("" != c.fullDomain) { var d = c.fullDomain.split(":"); if (d[0] && "" != d[0]) { var g = d[0].split("."), e = g.length; if (1 == e) c.domain = g[0]; else { for (a = 1; a < e; a++)c.domain += g[a] + "."; c.domain = c.domain.substring(0, c.domain.length - 1) } } d[1] && (c.port = d[1]) } } catch (h) { } return c
		}, isLoadedResourceWithAppend: function(a, c, b, d) {
			if (null == a) return !1; var g = !1, e = a.getElementsByTagName("head")[0], h = c.toLowerCase(), k = "", m = ""; if (-1 < h.indexOf(".js")) k =
				"script", m = "src"; else if (-1 < h.indexOf(".css")) k = "link", m = "href"; else return !1; for (var h = e.getElementsByTagName(k), n = 0, p = h.length, l; n < p; n++)if (l = h[n], -1 < l[m].toLowerCase().indexOf(c)) { g = !0; break } if (!g && "undefined" != typeof b && b && "undefined" != typeof d && "" != d) { var r; "link" == k ? (r = a.createElement("link"), r.type = "text/css", r.rel = "stylesheet", r.href = d) : "script" == k && (r = a.createElement("script"), r.type = "text/javascript", r.src = d); e.appendChild(r) } return g
		}, getTimeStamp: function() {
			var a = "", a = this.makeGuid();
			return a = a.replace(/-/g, "")
		}
	}); if (!window.RAONKSolution || window.RAONKSolution && !window.RAONKSolution.Agent.connectedPort) window.RAONKSolution = {
		Agent: {
			vertical: "\x0B", formfeed: "\f", backspace: "\b", space: " ", rtnCode1: "2000", parseRtn: function(a) {
				var c = { code: 0, valueArr: [], splitCode: "" }; a = a.trim ? a.trim() : a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""); 0 == a.indexOf("7777") && 5 == a.toLowerCase().indexOf("<pre") && (a = a.replace(/ <pre/i, RAONKSolution.Agent.vertical + "<pre"), a = a.replace(RAONKSolution.Agent.vertical + "<pre>",
					RAONKSolution.Agent.vertical), a = a.replace(/<\/pre>$/i, "")); var b; -1 < a.indexOf(RAONKSolution.Agent.vertical) ? (b = a.split(RAONKSolution.Agent.vertical), c.splitCode = RAONKSolution.Agent.vertical) : (b = a.split(RAONKSolution.Agent.space), c.splitCode = RAONKSolution.Agent.space); c.code = parseInt(b[0], 10); if (7777 == c.code) { a = b.length; for (var d = 1; d < a; d++)c.valueArr[d - 1] = b[d] } else b[1] ? (b = RAONKSolution.Agent.decryptManagerParam(b[1]), c.valueArr = b.split(RAONKSolution.Agent.vertical), "" == c.valueArr[c.valueArr.length -
						1] && c.valueArr.splice(c.valueArr.length - 1, 1)) : isNaN(c.code) && (c.valueArr[0] = a); return c
			}, parseRtnInWorker: function(a, c) {
				var b = "", b = RAONKUPLOAD.ReleaseVer; "1" == KUPLOADTOP.G_CURRKUPLOADER._config.cacheProtectMode && (b = RAONKUPLOAD.util.getTimeStamp()); var b = RAONKUPLOAD.isRelease ? KUPLOADTOP.G_CURRKUPLOADER._config.webPath.js + "raonkupload.processmanagerparam.min.js?ver=" + b : KUPLOADTOP.G_CURRKUPLOADER._config.webPath.jsDev + "raonkupload.processmanagerparam.js?ver=" + b, d = new Worker(b), g = { code: 0, valueArr: [] };
				d.onmessage = function(a) { a = a.data; switch (a.type) { case "decrypt": g = a.agentMsg, d.terminate() }"undefined" != typeof c && c(g) }; d.onerror = function(a) { d.terminate(); "undefined" != typeof c && (g.valueArr[0] = "Agent Param Process Worker Error", c(g)) }; d.postMessage({ type: "decrypt", agentMsg: a, agentVar: { vertical: "\x0B", formfeed: "\f", backspace: "\b", space: " " } })
			}, isLoaded: !1, isUpdating: !1, isStartInstall: !1, isOtherUploadWaiting: !1, G_AP: { G_AP29: "w", G_AP22: "a" }, makeEncryptManagerParam: function(a) {
				var c = null; try {
					RAONKEDITOR &&
					RAONKEDITOR.util && (c = RAONKEDITOR.util.base64_encode)
				} catch (b) { } try { null == c && RAONKUPLOAD && RAONKUPLOAD.util && (c = RAONKUPLOAD.util.base64_encode) } catch (d) { } try { null == c && RAONKPHOTO && RAONKPHOTO.util && (c = RAONKPHOTO.util.base64_encode) } catch (g) { } a = "R" + c(a); a = c(a); a = a.replace(/[+]/g, "%2B"); return a += "\x0B"
			}, decryptManagerParam: function(a) {
				var c = null; try { RAONKEDITOR && RAONKEDITOR.util && (c = RAONKEDITOR.util.base64_decode) } catch (b) { } try { null == c && RAONKUPLOAD && RAONKUPLOAD.util && (c = RAONKUPLOAD.util.base64_decode) } catch (d) { } try {
					null ==
					c && RAONKPHOTO && RAONKPHOTO.util && (c = RAONKPHOTO.util.base64_decode)
				} catch (g) { } a = a.replace(/%2B/g, "+"); a = c(a); a = a.substring(1); return a = c(a)
			}, G_AP10: 8, G_AP23: "n", G_AP20: "z", isCheckingPort: !1, connectedPort: "", sendCount: 0, managerFinalUrl: "", reset: function() { this.isCheckingPort = this.isOtherUploadWaiting = this.isStartInstall = this.isUpdating = this.isLoaded = !1; this.connectedPort = ""; this.sendCount = 0; this.managerFinalUrl = "" }
		}
	}; RAONKUPLOAD._manager || (RAONKUPLOAD._manager = {
		createManagerRequest: function(a) { return new XMLHttpRequest },
		sendDataWidthAjax: function(a) { var c = a.req; a.errorCallBack && (c.onerror = function() { a.errorCallBack(c); c = null; c = void 0 }); a.successCallBack && (c.onload = function() { a.successCallBack(c.responseText); c = null; c = void 0 }); var b = a.url ? a.url : KUPLOADTOP.RAONKSolution.managerFinalUrl; try { c.open("POST", b, a.async), c.send("k00=" + a.data) } catch (d) { try { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2", KUPLOADTOP.G_CURRKUPLOADER.frameWin.sendMessageToAgent(a.data, a.successCallBack, null, a.async, b, KUPLOADTOP.G_CURRKUPLOADER) } catch (g) { } } }
	});
	RAONKUPLOAD.Transfer = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) { KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && b.startUpload() } } catch (d) { } }; RAONKUPLOAD.TransferEx = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) { KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && setTimeout(function() { b.startUpload() }, 100) } } catch (d) { } }; RAONKUPLOAD.MultiTransfer = function() {
		try {
			var a = RAONKUPLOAD.RAONKMULTIPLEID.length; if (0 < a) var c =
				0, b = [], d = setInterval(function() {
					if (c == a) {
						clearInterval(d); try { "function" == typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.multiUploadComplete ? KUPLOADTOP.G_CURRKUPLOADER._config.event.multiUploadComplete(b) : KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_MultiUploadComplete(b) } catch (e) { } try {
							for (var g = 0; g < a; g++) {
								var k = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + RAONKUPLOAD.RAONKMULTIPLEID[g]]; if (k && (KUPLOADTOP.G_CURRKUPLOADER = k, "0" == KUPLOADTOP.G_CURRKUPLOADER._config.skipSentFile)) {
									var m = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
									m.fileListReset()
								}
							}
						} catch (n) { }
					} else if ((k = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + RAONKUPLOAD.RAONKMULTIPLEID[c]]) && "upload" == k._config.mode) {
						if (KUPLOADTOP.G_CURRKUPLOADER = k, m = KUPLOADTOP.G_CURRKUPLOADER.frameWin) if (0 == m.G_MultiTranferCheck) m.G_MultiTranferCheck = 1, m.startUpload(); else if (2 == m.G_MultiTranferCheck || 3 == m.G_MultiTranferCheck || 4 == m.G_MultiTranferCheck) 2 == m.G_MultiTranferCheck ? (g = { uploadID: RAONKUPLOAD.RAONKMULTIPLEID[c], status: "complete" }, b.push(g)) : 3 == m.G_MultiTranferCheck ? (g =
							{ uploadID: RAONKUPLOAD.RAONKMULTIPLEID[c], status: "cancel" }, b.push(g)) : 4 == m.G_MultiTranferCheck && (g = { uploadID: RAONKUPLOAD.RAONKMULTIPLEID[c], status: "error" }, b.push(g)), m.G_MultiTranferCheck = 0, c++
					} else c++
				}, 100)
		} catch (g) { }
	}; RAONKUPLOAD.AddUploadedFile = function(a, c, b, d, g, e) { RAONKUPLOAD.AddUploadedFileEw(a, c, b, d, g, e) }; RAONKUPLOAD.AddUploadedFileAsArray = function(a, c, b, d, g, e) {
		var h = "", h = "[object Array]" === Object.prototype.toString.call(e) ? e[0] : e, h = RAONKUPLOAD.util._getUploadName(h); if (null != h) if (RAONKUPLOAD.isLoadedUploadEx(h)) {
			var k;
			try {
				if (k = RAONKUPLOAD.util._setRaonKUploader(h)) {
					KUPLOADTOP.G_CURRKUPLOADER = k; var m = KUPLOADTOP.G_CURRKUPLOADER.frameWin; k.frameWin.displayCommonReady(!0, k); setTimeout(function() {
						if ("[object Array]" === Object.prototype.toString.call(a)) {
							var e = a.length; if (!m || 0 == m.isExecuteApi()) return; for (var l = 0; l < e; l++) {
								var n = ""; void 0 != a && null != a && void 0 != a[l] && null != a[l] && (n = a[l]); var q = ""; void 0 != c && null != c && void 0 != c[l] && null != c[l] && (q = c[l]); var f = ""; void 0 != b && null != b && void 0 != b[l] && null != b[l] && (f = b[l]); var u =
									""; void 0 != d && null != d && void 0 != d[l] && null != d[l] && (u = d[l]); var t = ""; void 0 != g && null != g && void 0 != g[l] && null != g[l] && (t = g[l]); var u = u.toString(), u = u.replace(/,/g, ""), u = isNaN(Number(u)) || 0 > Number(u) || "" == u ? "" : parseInt(u, 10), v = !0; l == e - 1 && (v = !1); m._addUploadedFile({ uniqueKey: n, originName: q, webPath: f, size: u, customValue: t, uploadName: h, bHugeCount: v })
							}
						} else n = "", void 0 != a && null != a && (n = a), q = "", void 0 != c && null != c && (q = c), f = "", void 0 != b && null != b && (f = b), u = "", void 0 != d && null != d && (u = d), t = "", void 0 != g && null != g && (t =
							g), m._addUploadedFile({ uniqueKey: n, originName: q, webPath: f, size: u, customValue: t, uploadName: h }); k.frameWin.displayCommonReady(!1, k)
					}, 1)
				}
			} catch (n) { }
		} else null == RAONKUPLOAD.InitUploadDataHashTable && (RAONKUPLOAD.InitUploadDataHashTable = new RAONKUPLOAD.util.hashTable), e = RAONKUPLOAD.InitUploadDataHashTable.getItem(h), "undefined" == typeof e && (e = []), e.push({ mode: "AddUploadedFileAsArray", uniqueKey: a, originName: c, webPath: b, size: d, customValue: g }), RAONKUPLOAD.InitUploadDataHashTable.setItem(h, e)
	}; RAONKUPLOAD.AddUploadedFileWithGetFileSize =
		function(a, c, b, d, g) {
			var e = "", e = "[object Array]" === Object.prototype.toString.call(g) ? g[0] : g, e = RAONKUPLOAD.util._getUploadName(e); if (null != e) if (RAONKUPLOAD.isLoadedUploadEx(e)) {
				var h; try {
					if (h = RAONKUPLOAD.util._setRaonKUploader(e)) {
						KUPLOADTOP.G_CURRKUPLOADER = h; var k = KUPLOADTOP.G_CURRKUPLOADER.frameWin; k.displayCommonReady(!0, h); var m = "", n = KUPLOADTOP.G_CURRKUPLOADER._config.handlerUrl; g = []; "[object Array]" === Object.prototype.toString.call(b) ? g = b : g.push(b); var p = "", l = "", l = l + ("kc" + KUPLOADTOP.RAONKSolution.Agent.formfeed +
							"c22" + KUPLOADTOP.RAONKSolution.Agent.vertical), l = l + ("k01" + KUPLOADTOP.RAONKSolution.Agent.formfeed + KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam + KUPLOADTOP.RAONKSolution.Agent.vertical); if ("1" <= KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) for (var r = g.length, q = 0; q < r; q++)l += "k30" + KUPLOADTOP.RAONKSolution.Agent.formfeed + g[q] + KUPLOADTOP.RAONKSolution.Agent.vertical; l = l.substring(0, l.length - 1); 1 == KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain && (l += KUPLOADTOP.RAONKSolution.Agent.vertical,
								l += "k22" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "1"); var f = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(l), p = f.name + "=" + f.value, l = []; if (1 == KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain) { if (l.push([f.name, f.value]), "0" == KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) for (r = g.length, q = 0; q < r; q++)l.push(["k30", encodeURIComponent(g[q])]) } else if ("0" == KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) for (r = g.length, q = 0; q < r; q++)p += "&k30=" + encodeURIComponent(g[q]); var u = function(f) {
									null !=
									f && "" != f ? (f = KUPLOADTOP.RAONKUPLOAD.util.trim(f), f = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(f), 0 == f.indexOf("[OK]") ? (f = f.replace("[OK]", ""), f = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(f)) : f = "") : f = ""; h && h.frameWin.displayCommonReady(!1, h); if (k._addUploadedFile) if ("[object Array]" === Object.prototype.toString.call(b)) {
										var g = b.length; f = f.split(KUPLOADTOP.RAONKSolution.Agent.formfeed); for (var m = 0; m < g; m++) {
											var l = ""; void 0 != a && null != a && void 0 != a[m] && null != a[m] && (l = a[m]); var n = ""; void 0 !=
												c && null != c && void 0 != c[m] && null != c[m] && (n = c[m]); var p = ""; void 0 != b && null != b && void 0 != b[m] && null != b[m] && (p = b[m]); var r = ""; void 0 != f && null != f && void 0 != f[m] && null != f[m] && (r = f[m]); var u = ""; void 0 != d && null != d && void 0 != d[m] && null != d[m] && (u = d[m]); k._addUploadedFile({ uniqueKey: l, originName: n, webPath: p, size: r, customValue: u, uploadName: e })
										}
									} else l = "", void 0 != a && null != a && (l = a), n = "", void 0 != c && null != c && (n = c), p = "", void 0 != b && null != b && (p = b), r = "", void 0 != f && null != f && (r = f), u = "", void 0 != d && null != d && (u = d), k._addUploadedFile({
										uniqueKey: l,
										originName: n, webPath: p, size: r, customValue: u, uploadName: e
									})
								}; if (1 == KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain) {
									var t = document.createElement("div"), v = KUPLOADTOP.RAONKUPLOAD.util.getDefaultIframeSrc(); t.innerHTML = '<iframe name="sizeConfirmFrame" id="sizeConfirmFrame" style="display:none;" src="' + v + '"></iframe>'; t.style.display = "none"; document.body.appendChild(t); KUPLOADTOP.RAONKUPLOAD.util.addEvent(t.firstChild, "load", function() { t.firstChild.contentWindow.postMessage("check", "*") }, !0); if (window.postMessage) {
										var x =
											function(a) { document.body.removeChild(t); KUPLOADTOP.RAONKUPLOAD.util.removeEvent(window, "message", x); m = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(a.data); u(m) }; KUPLOADTOP.RAONKUPLOAD.util.addEvent(window, "message", x)
									} KUPLOADTOP.RAONKUPLOAD.util.postFormData(document, n, "sizeConfirmFrame", l)
								} else KUPLOADTOP.RAONKUPLOAD.ajax.postData(n, p, u)
					}
				} catch (y) { }
			} else null == RAONKUPLOAD.InitUploadDataHashTable && (RAONKUPLOAD.InitUploadDataHashTable = new RAONKUPLOAD.util.hashTable), n = RAONKUPLOAD.InitUploadDataHashTable.getItem(e),
				"undefined" == typeof n && (n = []), n.push({ mode: "AddUploadedFileWithGetFileSize", uniqueKey: a, originName: c, webPath: b, customValue: d }), RAONKUPLOAD.InitUploadDataHashTable.setItem(e, n)
		}; RAONKUPLOAD.GetFileSize = function(a, c) {
			var b = "", d = KUPLOADTOP.G_CURRKUPLOADER._config.handlerUrl, g = []; "[object Array]" === Object.prototype.toString.call(a) ? g = a : g.push(a); var e = "", h; h = "" + ("kc" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c22" + KUPLOADTOP.RAONKSolution.Agent.vertical); h += "k01" + KUPLOADTOP.RAONKSolution.Agent.formfeed +
				KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam + KUPLOADTOP.RAONKSolution.Agent.vertical; if ("1" <= KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) for (var k = g.length, m = 0; m < k; m++)h += "k30" + KUPLOADTOP.RAONKSolution.Agent.formfeed + g[m] + KUPLOADTOP.RAONKSolution.Agent.vertical; h = h.substring(0, h.length - 1); 1 == KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain && (h += KUPLOADTOP.RAONKSolution.Agent.vertical, h += "k22" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "1"); k = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(h);
			e = k.name + "=" + k.value; h = []; if (1 == KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain) { if (h.push([k.name, k.value]), "0" == KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) for (k = g.length, m = 0; m < k; m++)h.push(["k30", encodeURIComponent(g[m])]) } else if ("0" == KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) for (k = g.length, m = 0; m < k; m++)e += "&k30=" + encodeURIComponent(g[m]); var n = function(a) {
				null != a && "" != a ? (a = KUPLOADTOP.RAONKUPLOAD.util.trim(a), a = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(a), 0 ==
					a.indexOf("[OK]") ? (a = a.replace("[OK]", ""), a = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(a)) : a = "") : a = ""; "function" == typeof c && c(a.split(KUPLOADTOP.RAONKSolution.Agent.formfeed))
			}; if (1 == KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain) {
				var p = document.createElement("div"), g = KUPLOADTOP.RAONKUPLOAD.util.getDefaultIframeSrc(); p.innerHTML = '<iframe name="sizeConfirmFrame" id="sizeConfirmFrame" style="display:none;" src="' + g + '"></iframe>'; p.style.display = "none"; document.body.appendChild(p); KUPLOADTOP.RAONKUPLOAD.util.addEvent(p.firstChild,
					"load", function() { p.firstChild.contentWindow.postMessage("check", "*") }, !0); if (window.postMessage) { var l = function(a) { document.body.removeChild(p); KUPLOADTOP.RAONKUPLOAD.util.removeEvent(window, "message", l); b = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(a.data); n(b) }; KUPLOADTOP.RAONKUPLOAD.util.addEvent(window, "message", l) } KUPLOADTOP.RAONKUPLOAD.util.postFormData(document, d, "sizeConfirmFrame", h)
			} else KUPLOADTOP.RAONKUPLOAD.ajax.postData(d, e, n)
		}; RAONKUPLOAD.AddUploadedFileEx = function(a, c, b, d, g, e,
			h) {
				h = RAONKUPLOAD.util._getUploadName(h); if (null != h) if (RAONKUPLOAD.isLoadedUploadEx(h)) try { var k = RAONKUPLOAD.util._setRaonKUploader(h); if (k) { KUPLOADTOP.G_CURRKUPLOADER = k; var m = KUPLOADTOP.G_CURRKUPLOADER.frameWin; m && m._addUploadedFileEx(a, c, b, d, g, e, h) } } catch (n) { } else null == RAONKUPLOAD.InitUploadDataHashTable && (RAONKUPLOAD.InitUploadDataHashTable = new RAONKUPLOAD.util.hashTable), k = RAONKUPLOAD.InitUploadDataHashTable.getItem(h), "undefined" == typeof k && (k = []), k.push({
					mode: "AddUploadedFileEx", uniqueKey: a,
					originName: c, webPath: b, size: d, customValue: g, headerEx: e
				}), RAONKUPLOAD.InitUploadDataHashTable.setItem(h, k)
		}; RAONKUPLOAD.AddUploadedFileExAsArray = function(a, c, b, d, g, e, h) {
			var k = "", k = "[object Array]" === Object.prototype.toString.call(h) ? h[0] : h, k = RAONKUPLOAD.util._getUploadName(k); if (null != k) if (RAONKUPLOAD.isLoadedUploadEx(k)) {
				var m; try {
					if (m = RAONKUPLOAD.util._setRaonKUploader(k)) {
						KUPLOADTOP.G_CURRKUPLOADER = m; var n = KUPLOADTOP.G_CURRKUPLOADER.frameWin; n && (n.displayCommonReady(!0, m), setTimeout(function() {
							if ("[object Array]" ===
								Object.prototype.toString.call(a)) {
									var h = a.length; if (0 == n.isExecuteApi()) return; for (var p = 0; p < h; p++) {
										var q = ""; void 0 != a && null != a && void 0 != a[p] && null != a[p] && (q = a[p]); var f = ""; void 0 != c && null != c && void 0 != c[p] && null != c[p] && (f = c[p]); var u = ""; void 0 != b && null != b && void 0 != b[p] && null != b[p] && (u = b[p]); var t = ""; void 0 != d && null != d && void 0 != d[p] && null != d[p] && (t = d[p]); var v = ""; void 0 != g && null != g && void 0 != g[p] && null != g[p] && (v = g[p]); var x = ""; void 0 != e && null != e && void 0 != e[p] && null != e[p] && (x = e[p]); var y = KUPLOADTOP.G_CURRKUPLOADER._config.headerBarItem.length;
										if ("" == x) for (var w = 1; w < y; w++)x += "|"; else { var z = x.split("|"), A = z.length; if (A < y) for (w = 0; w < y - A; w++)x += "|"; else if (A > y) for (x = "", w = 0; w < y; w++)0 != w && (x += "|"), x += z[w] } if ("" != KUPLOADTOP.G_CURRKUPLOADER._config.headerBarItem) for (y = KUPLOADTOP.G_CURRKUPLOADER._config.headerBarItem.length, w = 0; w < y; w++)n.document.getElementById("user_header_bar_" + w).getElementsByTagName("span")[0].style.display = "none"; t = t.toString(); t = t.replace(/,/g, ""); t = isNaN(Number(t)) || 0 > Number(t) || "" == t ? "" : parseInt(t, 10); n._addUploadedFileEx(q,
											f, u, t, v, x, k)
									}
							} else q = "", void 0 != a && null != a && (q = a), f = "", void 0 != c && null != c && (f = c), u = "", void 0 != b && null != b && (u = b), t = "", void 0 != d && null != d && (t = d), v = "", void 0 != g && null != g && (v = g), x = "", void 0 != e && null != e && (x = e), n._addUploadedFileEx(q, f, u, t, v, x, k); m.frameWin.displayCommonReady(!1, m)
						}, 1))
					}
				} catch (p) { }
			} else null == RAONKUPLOAD.InitUploadDataHashTable && (RAONKUPLOAD.InitUploadDataHashTable = new RAONKUPLOAD.util.hashTable), h = RAONKUPLOAD.InitUploadDataHashTable.getItem(k), "undefined" == typeof h && (h = []), h.push({
				mode: "AddUploadedFileExAsArray",
				uniqueKey: a, originName: c, webPath: b, size: d, customValue: g, headerEx: e
			}), RAONKUPLOAD.InitUploadDataHashTable.setItem(k, h)
		}; RAONKUPLOAD.AddUploadedFileExWithGetFileSize = function(a, c, b, d, g, e) {
			var h = "", h = "[object Array]" === Object.prototype.toString.call(e) ? e[0] : e, h = RAONKUPLOAD.util._getUploadName(h); if (null != h) if (RAONKUPLOAD.isLoadedUploadEx(h)) {
				var k; try {
					if (k = RAONKUPLOAD.util._setRaonKUploader(h)) {
						KUPLOADTOP.G_CURRKUPLOADER = k; var m = KUPLOADTOP.G_CURRKUPLOADER.frameWin; m.displayCommonReady(!0, k); var n = "",
							p = KUPLOADTOP.G_CURRKUPLOADER._config.handlerUrl; e = []; "[object Array]" === Object.prototype.toString.call(b) ? e = b : e.push(b); var l = "", l = l + ("kc" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "c22" + KUPLOADTOP.RAONKSolution.Agent.vertical), l = l + ("k01" + KUPLOADTOP.RAONKSolution.Agent.formfeed + KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam + KUPLOADTOP.RAONKSolution.Agent.vertical); if ("1" <= KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) for (var r = e.length, q = 0; q < r; q++)l += "k30" + KUPLOADTOP.RAONKSolution.Agent.formfeed +
								e[q] + KUPLOADTOP.RAONKSolution.Agent.vertical; var l = l.substring(0, l.length - 1), f = KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(l); param = f.name + "=" + f.value; l = []; if (1 == KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain) { if (l.push([f.name, f.value]), "0" == KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) for (r = e.length, q = 0; q < r; q++)l.push(["k30", encodeURIComponent(e[q])]) } else if ("0" == KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam) for (r = e.length, q = 0; q < r; q++)param += "&k30=" + encodeURIComponent(e[q]);
						var u = function(f) {
							null != f && "" != f ? (f = KUPLOADTOP.RAONKUPLOAD.util.trim(f), f = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(f), 0 == f.indexOf("[OK]") ? (f = f.replace("[OK]", ""), f = KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(f)) : f = "") : f = ""; m.displayCommonReady(!1, k); if (m._addUploadedFile) if ("[object Array]" === Object.prototype.toString.call(b)) {
								var e = b.length; f = f.split(m.G_formfeed); for (var l = 0; l < e; l++) {
									var p = ""; void 0 != a && null != a && void 0 != a[l] && null != a[l] && (p = a[l]); var n = ""; void 0 != c && null != c && void 0 !=
										c[l] && null != c[l] && (n = c[l]); var u = ""; void 0 != b && null != b && void 0 != b[l] && null != b[l] && (u = b[l]); var q = ""; void 0 != f && null != f && void 0 != f[l] && null != f[l] && (q = f[l]); var t = ""; void 0 != d && null != d && void 0 != d[l] && null != d[l] && (t = d[l]); var r = ""; void 0 != g && null != g && void 0 != g[l] && null != g[l] && (r = g[l]); m._addUploadedFileEx(p, n, u, q, t, r, h)
								}
							} else p = "", void 0 != a && null != a && (p = a), n = "", void 0 != c && null != c && (n = c), u = "", void 0 != b && null != b && (u = b), q = "", void 0 != f && null != f && (q = f), t = "", void 0 != d && null != d && (t = d), r = "", void 0 != g && null !=
								g && (r = g), m._addUploadedFileEx(p, n, u, q, t, r, h)
						}; if (1 == KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain) {
							var t = document.createElement("div"), v = KUPLOADTOP.RAONKUPLOAD.util.getDefaultIframeSrc(); t.innerHTML = '<iframe name="sizeConfirmFrame" id="sizeConfirmFrame" style="display:none;" src="' + v + '"></iframe>'; t.style.display = "none"; document.body.appendChild(t); KUPLOADTOP.RAONKUPLOAD.util.addEvent(t.firstChild, "load", function() { t.firstChild.contentWindow.postMessage("check", "*") }, !0); if (window.postMessage) {
								var x =
									function(a) { document.body.removeChild(t); KUPLOADTOP.RAONKUPLOAD.util.removeEvent(window, "message", x); n = KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(a.data); u(n) }; KUPLOADTOP.RAONKUPLOAD.util.addEvent(window, "message", x)
							} KUPLOADTOP.RAONKUPLOAD.util.postFormData(document, p, "sizeConfirmFrame", l)
						} else KUPLOADTOP.RAONKUPLOAD.ajax.postData(p, param, u)
					}
				} catch (y) { }
			} else null == RAONKUPLOAD.InitUploadDataHashTable && (RAONKUPLOAD.InitUploadDataHashTable = new RAONKUPLOAD.util.hashTable), p = RAONKUPLOAD.InitUploadDataHashTable.getItem(h),
				"undefined" == typeof p && (p = []), p.push({ mode: "AddUploadedFileExWithGetFileSize", uniqueKey: a, originName: c, webPath: b, customValue: d, headerEx: g }), RAONKUPLOAD.InitUploadDataHashTable.setItem(h, p)
		}; RAONKUPLOAD.OpenFileDialog = function(a, c) { try { var b = RAONKUPLOAD.util._setRaonKUploader(a); if (b) { KUPLOADTOP.G_CURRKUPLOADER = b; var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; c ? d.selectFile(null, c) : d.selectFile() } } catch (g) { } }; RAONKUPLOAD.DeleteAllFile = function(a) {
			try {
				var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) {
					KUPLOADTOP.G_CURRKUPLOADER =
					c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && b.deleteAllFile(null, !0)
				}
			} catch (d) { }
		}; RAONKUPLOAD.DeleteSelectedFile = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) { KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && b.deleteSelectedFile(null, !0) } } catch (d) { } }; RAONKUPLOAD.OpenSelectedFile = function(a) {
			try {
				var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) {
					KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && (RAONKUPLOAD.browser.mobile ? b.downloadFile(null,
						!0) : b.openFile(null, !0))
				}
			} catch (d) { }
		}; RAONKUPLOAD.Cancel = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) { KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && b.uploadCancel() } } catch (d) { } }; RAONKUPLOAD.GetTotalFileCount = function(a) { var c = null; try { var b = RAONKUPLOAD.util._setRaonKUploader(a); if (b) { KUPLOADTOP.G_CURRKUPLOADER = b; var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; d && (c = d.getTotalFileCount()) } } catch (g) { } return c }; RAONKUPLOAD.GetTotalFileSize = function(a) {
			var c =
				null; try { var b = RAONKUPLOAD.util._setRaonKUploader(a); if (b) { KUPLOADTOP.G_CURRKUPLOADER = b; var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; d && (c = d.getTotalFileSize()) } } catch (g) { } return c
		}; RAONKUPLOAD.ResetUpload = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); c && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.reset(a), RAONKUPLOAD.ResetUploadCompleteState(KUPLOADTOP.G_CURRKUPLOADER.ID)) } catch (b) { } }; RAONKUPLOAD.ResetUploadEx = function(a, c) {
			try {
				var b = RAONKUPLOAD.util._setRaonKUploader(a);
				b && (c && (KUPLOADTOP.G_CURRKUPLOADER = b), b.reset(a), RAONKUPLOAD.ResetUploadCompleteStateEx(b.ID, c))
			} catch (d) { }
		}; RAONKUPLOAD.GetUploadCompleteState = function(a) { var c = null; try { var b = RAONKUPLOAD.util._setRaonKUploader(a); b && (KUPLOADTOP.G_CURRKUPLOADER = b, c = KUPLOADTOP.G_CURRKUPLOADER.isUploadComplete) } catch (d) { } return c }; RAONKUPLOAD.ResetUploadCompleteState = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); c && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.isUploadComplete = !1) } catch (b) { } };
	RAONKUPLOAD.ResetUploadCompleteStateEx = function(a, c) { try { var b = RAONKUPLOAD.util._setRaonKUploader(a); b && (c && (KUPLOADTOP.G_CURRKUPLOADER = b), KUPLOADTOP.G_CURRKUPLOADER.isUploadComplete = !1) } catch (d) { } }; RAONKUPLOAD.GetUserRuntimeMode = function(a) { var c = null; try { var b = RAONKUPLOAD.util._setRaonKUploader(a); b && (KUPLOADTOP.G_CURRKUPLOADER = b, c = "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager ? "agent" : KUPLOADTOP.G_CURRKUPLOADER._config.userRunTimeMode) } catch (d) { } return c }; RAONKUPLOAD.SetAllowOrLimitExtension =
		function(a, c, b) { try { var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) { KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; g && g.setAllowOrLimitExtension(a.toString(), c) } } catch (e) { } }; RAONKUPLOAD.GetFileObjectList = function(a) { var c = null; try { var b = RAONKUPLOAD.util._setRaonKUploader(a); b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && (c = KUPLOADTOP.G_CURRKUPLOADER.frameWin.getFileObjectList())) } catch (d) { } return c }; RAONKUPLOAD.SetFileObjectList = function(a,
			c) { try { var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) for (var d = a.length, b = 0; b < d; b++)KUPLOADTOP.RAONKUPLOAD.AddLocalFileDirectly(a[b].file, KUPLOADTOP.G_CURRKUPLOADER.ID) } catch (g) { } }; RAONKUPLOAD.SetMaxOneFileSize = function(a, c) {
				try {
					var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, KUPLOADTOP.G_CURRKUPLOADER.frameWin)) {
						a = a.toString(); var d = RAONKUPLOAD.util.getUnit(a), g = RAONKUPLOAD.util.getUnitSize(d),
							e = parseInt(a, 10) * g; b._config.maxOneFileSize = e
					}
				} catch (h) { }
			}; RAONKUPLOAD.SetMaxTotalFileSize = function(a, c) { try { var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b) { KUPLOADTOP.G_CURRKUPLOADER = b; var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d) { a = a.toString(); var g = RAONKUPLOAD.util.getUnit(a), e = RAONKUPLOAD.util.getUnitSize(g), h = parseInt(a, 10) * e; b._config.maxTotalFileSize = h; d.reLoadStatusBar(b._config) } } } catch (k) { } }; RAONKUPLOAD.SetMaxTotalFileCount = function(a, c) {
				try {
					var b = RAONKUPLOAD.util._setRaonKUploader(c);
					if (b) { KUPLOADTOP.G_CURRKUPLOADER = b; var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d) { b._config.maxTotalFileCount = parseInt(a, 10); b._config.multiFileSelect = 1 == b._config.maxTotalFileCount ? !1 : !0; if ("0" == b._config.useKManager && "html5" == b._config.userRunTimeMode) { var g = d.document.getElementById("file_" + KUPLOADTOP.G_CURRKUPLOADER.TagID); g && "undefined" != typeof g.multiple && (g.multiple = b._config.multiFileSelect) } d.reLoadStatusBar(b._config) } }
				} catch (e) { }
			}; RAONKUPLOAD.SetDefaultDownloadPath = function(a, c) {
				try {
					var b =
						RAONKUPLOAD.util._setRaonKUploader(c); b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && (KUPLOADTOP.G_CURRKUPLOADER._config.defaultDownloadPath = a))
				} catch (d) { }
			}; RAONKUPLOAD.GetItemCount = function(a) { var c = null; try { var b = RAONKUPLOAD.util._setRaonKUploader(a); b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && (c = KUPLOADTOP.G_CURRKUPLOADER.frameWin.getTotalItemCount())) } catch (d) { } return c }; RAONKUPLOAD.GetSelectedFileCount = function(a) {
				var c =
					null; try { var b = RAONKUPLOAD.util._setRaonKUploader(a); if (b) { KUPLOADTOP.G_CURRKUPLOADER = b; var d = b.frameWin; d && (c = d.getSelectedFileCount()) } } catch (g) { } return c
			}; RAONKUPLOAD.GetSelectedFileSize = function(a) { var c = null; try { var b = RAONKUPLOAD.util._setRaonKUploader(a); if (b) { KUPLOADTOP.G_CURRKUPLOADER = b; var d = b.frameWin; d && (c = d.getSelectedFileSize()) } } catch (g) { } return c }; RAONKUPLOAD.GetUploadNameSet = function() { return RAONKUPLOAD.RAONKMULTIPLEID }; RAONKUPLOAD.SetLargeFile = function(a, c, b) {
				if (void 0 != a && null !=
					a) try { var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) { KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) { a = RAONKUPLOAD.util.parseIntOr0(a); if (void 0 == c || null == c) c = !1; g.setLargeFile(a, c) } } } catch (e) { }
			}; RAONKUPLOAD.Destroy = function(a) {
				try {
					var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) {
						KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; try {
							if (RAONKUPLOAD.RAONKMULTIPLEEVENT[c.ID]) {
								uploadEventList = RAONKUPLOAD.RAONKMULTIPLEEVENT[c.ID]; for (var d = 0, g = uploadEventList.length; d <
									g; d++)uploadEventList[d].element && (RAONKUPLOAD.util.removeEvent(uploadEventList[d].element, uploadEventList[d].event, uploadEventList[d].func), delete uploadEventList[d].func, uploadEventList[d].func = null); delete uploadEventList; delete RAONKUPLOAD.RAONKMULTIPLEEVENT[c.ID]
							} RAONKUPLOAD.util.removeEvent(KUPLOADTOP, "keydown", b._top_Keydown); RAONKUPLOAD.util.removeEvent(KUPLOADTOP, "click", b._top_filebtn)
						} catch (e) { } var h = KUPLOADTOP.window.document; null != KUPLOADTOP.G_CURRKUPLOADER.dialogWindow && (h = KUPLOADTOP.G_CURRKUPLOADER.dialogWindow.document);
						try { RAONKUPLOAD.util.removeElementWithChildNodes(h.getElementById("RAON_K_UP_ly_wrapper")), RAONKUPLOAD.util.removeElementWithChildNodes(h.getElementById("RAON_K_UP_Popup_Mode")), RAONKUPLOAD.util.removeElementWithChildNodes(h.getElementById("raonkupload_context_menu_" + c.ID)) } catch (k) { } try {
							if (RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + c.ID]) {
								try { for (var d = 0, m = RAONKUPLOAD.RAONKMULTIPLETIMEOUT, g = m.length; d < g; d++)m[d] && (window.clearTimeout(m[d]), delete m[d]); delete RAONKUPLOAD.RAONKMULTIPLETIMEOUT } catch (n) { } RAONKUPLOAD.util.removeElementWithChildNodes(document.getElementById(c._frame.frameID));
								try { RAONKUPLOAD.util.removeElementWithChildNodes(document.getElementById("raonkuploader_holder_" + c.ID)) } catch (p) { } c._config && delete c._config; c._frame && delete c._frame; if (c.frameWin._raonk_uploader) try { delete c.frameWin._raonk_uploader } catch (l) { c.frameWin._raonk_uploader = null } c.frameWin && delete c.frameWin; var d = 0, r; for (r in RAONKUPLOAD.RAONKHOLDER) if (r == c.ID) break; else d++; RAONKUPLOAD.RAONKMULTIPLEID.splice(d, 1); RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + c.ID] && delete RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" +
									c.ID]; "undefined" != typeof RAONKUPLOAD.RAONKHOLDER[c.ID] && delete RAONKUPLOAD.RAONKHOLDER[c.ID]; if (RAONKUPLOAD.RAONKMULTIPLEID && 0 < RAONKUPLOAD.RAONKMULTIPLEID.length) G_CURRKUPLOADER = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + RAONKUPLOAD.RAONKMULTIPLEID[0]]; else { G_CURRKUPLOADER = null; try { delete RAONKUPLOAD.RAONKMULTIPLEEVENT } catch (q) { } } try { RAONKSolution.Agent.reset() } catch (f) { } delete c
							}
						} catch (u) { } try { RAONKUPLOAD.IsUploadLoadedHashTable.removeItem(a) } catch (t) { }
					}
				} catch (v) { }
			}; RAONKUPLOAD.DownloadFile =
				function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) { KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && b.downloadFile(null, !0) } } catch (d) { } }; RAONKUPLOAD.DownloadAllFile = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) { KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && b.downloadAllFile(null, !0) } } catch (d) { } }; RAONKUPLOAD.SetUploadMode = function(a, c) {
					try {
						var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b) {
							KUPLOADTOP.G_CURRKUPLOADER =
							b; var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d && 0 != d.isExecuteApi()) { if ("" == a || void 0 == a || "edit" == a.toLowerCase()) a = "upload"; d.setUploadMode(a) }
						}
					} catch (g) { }
				}; RAONKUPLOAD.Show = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) { KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && b.uploadShow() } } catch (d) { } }; RAONKUPLOAD.Hidden = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); c && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.frameWin && KUPLOADTOP.G_CURRKUPLOADER.frameWin.uploadHidden()) } catch (b) { } };
	RAONKUPLOAD.MoveFirstFile = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) { KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && 0 != b.isExecuteApi() && b.moveFirstFile() } } catch (d) { } }; RAONKUPLOAD.MoveForwardFile = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) { KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && 0 != b.isExecuteApi() && b.moveForwardFile() } } catch (d) { } }; RAONKUPLOAD.MoveBackwardFile = function(a) {
		try {
			var c = RAONKUPLOAD.util._setRaonKUploader(a);
			if (c) { KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && 0 != b.isExecuteApi() && b.moveBackwardFile() }
		} catch (d) { }
	}; RAONKUPLOAD.MoveEndFile = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) { KUPLOADTOP.G_CURRKUPLOADER = c; var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; b && 0 != b.isExecuteApi() && b.moveEndFile() } } catch (d) { } }; RAONKUPLOAD.AddFormData = function(a, c, b) {
		try {
			var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) {
				KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
				if (g && a && "" != a && null != c && void 0 != c) { c = c.toString(); var e = g.G_FormData, h = e.length; b = !0; for (d = 0; d < h; d++)if (e[d].form_name.toLowerCase() == a.toLowerCase()) { e[d].form_value = c; b = !1; break } b && g.G_FormData.push({ form_name: a, form_value: c }) }
			}
		} catch (k) { }
	}; RAONKUPLOAD.SetSelectFile = function(a, c, b) {
		try {
			var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) {
				KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g && !isNaN(Number(a)) && !isNaN(Number(c)) && "" != a.toString() && "" != c.toString()) if (-1 == Number(a) &&
					-1 == Number(c) && (c = 0), -1 != Number(c)) {
						g.setSelectFile(parseInt(a, 10), parseInt(c, 10)); try {
							if (a = parseInt(a, 10), -1 < a) {
								var e = g.document.getElementById("file_list").getElementsByTagName("input")[a].getAttribute("listvalue"); if (g.RESULTFILELIST[e]) {
									c = null; "0" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && (c = g.RESULTFILELIST[e].file); b = ""; "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && "" != g.RESULTFILELIST[e].localPath && (b = KUPLOADTOP.RAONKSolution.managerFinalUrl + "/" + encodeURIComponent(g.RESULTFILELIST[e].localPath));
									var h = { isWebFile: g.RESULTFILELIST[e].isWebFile, strLocalPath: g.RESULTFILELIST[e].localPath, strWebPath: g.RESULTFILELIST[e].webPath, nFileSize: g.RESULTFILELIST[e].fileSize, strOriginalName: g.RESULTFILELIST[e].originName, strExtension: g.RESULTFILELIST[e].fileExt, nIndex: a, strUniqkey: g.RESULTFILELIST[e].fileIdx, strCustomValue: g.RESULTFILELIST[e].customValue, strPreviewUrl: b, objFile: c }; "function" == typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.selectItem ? KUPLOADTOP.G_CURRKUPLOADER._config.event.selectItem(KUPLOADTOP.G_CURRKUPLOADER.ID,
										h) : KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_SelectItem(KUPLOADTOP.G_CURRKUPLOADER.ID, h)
								}
							}
						} catch (k) { }
				} else 0 <= Number(a) && g.setUnselectFile(parseInt(a, 10))
			}
		} catch (m) { }
	}; RAONKUPLOAD.SetSelectFileEx = function(a, c, b) {
		try {
			var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) {
				KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g && (a = a.toString(), !isNaN(Number(c)) && "" != c.toString())) if (-1 != Number(c)) {
					g.setSelectFileEx(a, parseInt(c, 10)); try {
						if ("" != a) {
							var e = g.RESULTFILELIST.length; if (0 < e) {
								c = null;
								for (var h = d = b = 0; h < e; h++)"y" != g.RESULTFILELIST[h].isDelete && ("y" == g.RESULTFILELIST[h].isWebFile && g.RESULTFILELIST[h].fileIdx == a && (c = h, b = d), d++); if (null != c && g.RESULTFILELIST[c]) {
									a = null; "0" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && (a = g.RESULTFILELIST[c].file); e = ""; "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && "" != g.RESULTFILELIST[c].localPath && (e = KUPLOADTOP.RAONKSolution.managerFinalUrl + "/" + encodeURIComponent(g.RESULTFILELIST[c].localPath)); var k = {
										isWebFile: g.RESULTFILELIST[c].isWebFile,
										strLocalPath: g.RESULTFILELIST[c].localPath, strWebPath: g.RESULTFILELIST[c].webPath, nFileSize: g.RESULTFILELIST[c].fileSize, strOriginalName: g.RESULTFILELIST[c].originName, strExtension: g.RESULTFILELIST[c].fileExt, nIndex: b, strUniqkey: g.RESULTFILELIST[c].fileIdx, strCustomValue: g.RESULTFILELIST[c].customValue, strPreviewUrl: e, objFile: a
									}; "function" == typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.selectItem ? KUPLOADTOP.G_CURRKUPLOADER._config.event.selectItem(KUPLOADTOP.G_CURRKUPLOADER.ID, k) : KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_SelectItem(KUPLOADTOP.G_CURRKUPLOADER.ID,
										k)
								}
							}
						}
					} catch (m) { }
				} else g.setUnselectFileEx(a)
			}
		} catch (n) { }
	}; RAONKUPLOAD.SetFileCustomValue = function(a, c, b) { try { var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) { KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; g && (isNaN(Number(a)) || "" == a.toString() || g.setFileCustomValue(parseInt(a, 10), c)) } } catch (e) { } }; RAONKUPLOAD.AddLocalFileDirectly = function(a, c, b) {
		if (void 0 != a && "" != a) try {
			var d = null, g = null; void 0 == b ? "string" == typeof c ? b = c : "object" == typeof c ? (g = c.size, d = c.callback) : d = c : "object" ==
				typeof c ? (g = c.size, d = c.callback) : d = c; var e = RAONKUPLOAD.util._setRaonKUploader(b); if (e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var h = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (h) if (g) {
						var k = { name: h.getFileName(a, !1), type: "", uniqValue: "", isFolder: "0", localPath: a, size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(g), subFolderCount: "", fileCount: "" }; h.fileHandler([k], "", ""); if ("function" == typeof d) var m = setInterval(function() {
							if (0 == h.G_FileHandlerProcessingFlag) {
								var a =
									{ strUploadId: e.ID, strPath: k.localPath }; clearInterval(m); d(a)
							}
						}, 1)
					} else {
						c = [["kcmd", "KC10"]]; c.push(["kp1", encodeURIComponent(a)]); var n = h.setManagerParam("{}", c), n = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(n), p = function(c) {
							c = KUPLOADTOP.RAONKSolution.Agent.parseRtn(c); var b = c.code; c = c.valueArr; if (1E3 == b) {
								if (c[0] == "_" + KUPLOADTOP.RAONKSolution.Agent.formfeed) {
									var g = { strType: "", strCode: "C100", strMessage: "File is not found" }; if ("function" == typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(KUPLOADTOP.G_CURRKUPLOADER.ID,
										g); else "function" !== typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError && alert("Error Code : " + g.strCode + "\nError Message : " + g.strMessage), KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(KUPLOADTOP.G_CURRKUPLOADER.ID, g)
								} else {
									g = h.getFileName(a, !1); if ("2018.0.2.36" >= KUPLOADTOP.G_CURRKUPLOADER.agentVersion) var m = { name: g, type: "", uniqValue: "", isFolder: "0", localPath: a, size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(c[0]), subFolderCount: "", fileCount: "" }; else c = c[0].split(KUPLOADTOP.RAONKSolution.Agent.formfeed), m =
										{ name: g, type: "", uniqValue: "", isFolder: "0", localPath: a, size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(c[0]), subFolderCount: "", fileCount: "", lastModifiedDate: c[2], type: c[1] }; h.fileHandler([m], "", ""); if ("function" == typeof d) var k = setInterval(function() { if (0 == h.G_FileHandlerProcessingFlag) { var a = { strUploadId: e.ID, strPath: m.localPath }; clearInterval(k); d(a) } }, 1)
								} h.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
							} else if (2E3 == b) {
								try {
									if (g = { strType: "", strCode: "C100", strMessage: c[0] }, "function" == typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(KUPLOADTOP.G_CURRKUPLOADER.ID,
										g); else "function" !== typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError && alert("Error Code : " + g.strCode + "\nError Message : " + g.strMessage), KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(KUPLOADTOP.G_CURRKUPLOADER.ID, g)
								} catch (r) { } h.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
							} else 2001 == b && h.sendMessageToAgent(n, p, l, !1)
						}, l = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; h.sendMessageToAgent(n, p, null, !1) }; h.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); h.sendMessageToAgent(n,
							p, l, !1)
					}
				}
		} catch (r) { }
	}; RAONKUPLOAD.AddLocalFileDirectlyEx = function(a, c, b) {
		if (null != a && void 0 != a && 0 != a.length) try {
			for (var d = [], g = [], e = a.length, h = 0; h < e; h++)null != a[h].path && void 0 != a[h].path && "" != a[h].path && (d[h] = a[h].path), null != a[h].size && void 0 != a[h].size && "" != a[h].size && (g[h] = a[h].size); var k = RAONKUPLOAD.util._setRaonKUploader(b); if (k && (KUPLOADTOP.G_CURRKUPLOADER = k, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
				var m = [], n = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (n) if (null != g && 0 != g.length) {
					for (h =
						0; h < e; h++) { var p = { name: n.getFileName(d[h], !1), type: "", uniqValue: "", isFolder: "0", localPath: d[h], size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(g[h]), subFolderCount: "", fileCount: "" }; m.push(p) } n.fileHandler(m, "", ""); if ("function" == typeof c) var l = setInterval(function() { if (0 == n.G_FileHandlerProcessingFlag) { var a = { strUploadId: k.ID, arrPath: d }; clearInterval(l); c(a) } }, 1)
				} else {
					a = ""; for (h = 0; h < e; h++)a += d[h], a = h != e - 1 ? a + KUPLOADTOP.RAONKSolution.Agent.formfeed : a + KUPLOADTOP.RAONKSolution.Agent.vertical; h = [["kcmd",
						"KC10"]]; h.push(["kp1", encodeURIComponent(a)]); var r = n.setManagerParam("{}", h), r = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(r), q = function(a) {
							a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a); var b = a.code; a = a.valueArr; if (1E3 == b) {
								var g = []; if ("2018.0.2.36" >= KUPLOADTOP.G_CURRKUPLOADER.agentVersion) for (var h = a[0].split(KUPLOADTOP.RAONKSolution.Agent.formfeed), b = 0; b < e; b++) {
									g.push(!1); var w = n.getFileName(d[b], !1), w = {
										name: w, type: "", uniqValue: "", isFolder: "0", localPath: d[b], size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(h[b]),
										subFolderCount: "", fileCount: ""
									}; m.push(w)
								} else for (b = 0; b < e; b++)if (a[b] == "_" + KUPLOADTOP.RAONKSolution.Agent.formfeed) if (g.push(!0), h = { strType: "", strCode: "C100", strMessage: "File is not found" }, "function" == typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(KUPLOADTOP.G_CURRKUPLOADER.ID, h); else "function" !== typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError && alert("Error Code : " + h.strCode + "\nError Message : " + h.strMessage), KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(KUPLOADTOP.G_CURRKUPLOADER.ID,
									h); else g.push(!1), w = n.getFileName(d[b], !1), h = a[b].split(KUPLOADTOP.RAONKSolution.Agent.formfeed), w = { name: w, type: "", uniqValue: "", isFolder: "0", localPath: d[b], size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(h[0]), subFolderCount: "", fileCount: "", lastModifiedDate: h[2], type: h[1] }, m.push(w); if (0 < m.length) { if (n.fileHandler(m, "", ""), "function" == typeof c) var l = setInterval(function() { if (0 == n.G_FileHandlerProcessingFlag) { var a = { strUploadId: k.ID, arrPath: d, arrErrorFlag: g }; clearInterval(l); c(a) } }, 1) } else n.displayCommonReady(!1,
										KUPLOADTOP.G_CURRKUPLOADER)
							} else if (2E3 == b) { try { if (h = { strType: "", strCode: "C100", strMessage: a[0] }, "function" == typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(KUPLOADTOP.G_CURRKUPLOADER.ID, h); else "function" !== typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError && alert("Error Code : " + h.strCode + "\nError Message : " + h.strMessage), KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(KUPLOADTOP.G_CURRKUPLOADER.ID, h) } catch (p) { } n.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) } else 2001 ==
								b && n.sendMessageToAgent(r, q, f, !0)
						}, f = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; n.sendMessageToAgent(r, q, null, !0) }; n.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); n.sendMessageToAgent(r, q, f, !0)
				}
			}
		} catch (u) { }
	}; RAONKUPLOAD.AddLocalFileObject = function(a, c, b) {
		try {
			var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) {
				KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g && 0 != g.isExecuteApi() && "object" == typeof a) {
					if ("VirtualFile" == a._type_name) a = {
						type: "file",
						value: a.path, files: [a._handle]
					}; else if (0 < a.length && "VirtualFile" == a[0]._type_name) { tempFileObject = { type: "file", files: [] }; for (b = 0; b < a.length; b++)tempFileObject.files.push(a[b]._handle); a = tempFileObject } "file" == a.type && "html5" == d._config.userRunTimeMode && 0 < a.files.length && g.fileHandler(a.files, a.value, c)
				}
			}
		} catch (e) { }
	}; RAONKUPLOAD.AddLocalFolderDirectly = RAONKUPLOAD.AddLocalFolderDirectlyEx = function(a, c, b) {
		if (void 0 != a && 0 != a.length) try {
			var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d && (KUPLOADTOP.G_CURRKUPLOADER =
				d, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && "0" != KUPLOADTOP.G_CURRKUPLOADER._config.folderTransfer)) {
					void 0 == c && (c = {}); "string" == typeof a && (a = [a]); var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) {
						b = [["kcmd", "KC10A"]]; b.push(["kp1", encodeURIComponent(a.join(KUPLOADTOP.RAONKSolution.Agent.formfeed))]); b.push(["s09", KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(KUPLOADTOP.G_CURRKUPLOADER._config.getFolderInFile)]); var e = 0; 1 == c.addFiles && (e = 1); b.push(["kp2", e]); var h = g.setManagerParam("{}", b), h = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(h),
							k = function(a) {
								a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a); var b = a.code; a = a.valueArr; var n = []; if (1E3 == b) {
									if (a[0] == "_" + KUPLOADTOP.RAONKSolution.Agent.formfeed) {
										var q = { strType: "", strCode: "C100", strMessage: "Folder is not found" }; if ("function" == typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(KUPLOADTOP.G_CURRKUPLOADER.ID, q); else "function" !== typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError && alert("Error Code : " + q.strCode + "\nError Message : " + q.strMessage),
											KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(KUPLOADTOP.G_CURRKUPLOADER.ID, q)
									} else {
										for (var q = [], b = a.length, f = 0; f < b; f++) {
											var u = a[f].split(KUPLOADTOP.RAONKSolution.Agent.formfeed), t = ""; 0 == e ? (t = u[1].lastIndexOf(KUPLOADTOP.RAONKUPLOAD.UserAgent.osSeparator), t = t == u[1].length - 1 ? u[1].substring(0, t - 1) : u[1]) : t = u[1]; t = g.getFileName(t); t = { name: t, type: "", uniqValue: "", isFolder: 0 == e ? "1" : "2", localPath: u[1], size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(u[2]), subFolderCount: "", fileCount: "", logicalPath: "" }; if (0 == e) {
												t.localPath +=
												KUPLOADTOP.RAONKUPLOAD.UserAgent.osSeparator; t.subFolderCount = KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(u[3]); t.fileCount = KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(u[4]); t.logicalPath = u[1]; var v = u[1].split(KUPLOADTOP.RAONKUPLOAD.UserAgent.osSeparator); t.rootFolderName = v[v.length - 1]; t.folderIdx = g.FOLDERLISTINFO.length; g.FOLDERLISTINFO[t.folderIdx] = []; if (u[7]) for (var v = u[7].split(KUPLOADTOP.RAONKSolution.Agent.backspace), x = v.length, y = 0; y < x; y++) {
													var w = u[1]; 0 == v[y].indexOf(u[1]) && (w = t.rootFolderName + "/" +
														v[y].substring(u[1].length + 1).replace(/\\/g, "/"), w = w.substring(0, w.lastIndexOf("/"))); w = { uploadName: "", uploadPath: "", logicalPath: w, originName: g.getFileName(v[y], !1), fileSize: "", customValue: "", localPath: v[y], lastModifiedDate: "", mimeType: "", hashValue: "" }; g.FOLDERLISTINFO[t.folderIdx].push(w)
												}
											} else t.lastModifiedDate = u[2], t.type = u[1]; n.push(u[1]); q.push(t)
										} if (0 < q.length && (g.fileHandler(q, "", ""), "function" == typeof c.callback)) var z = setInterval(function() {
											if (0 == g.G_FileHandlerProcessingFlag) {
												var a = {
													strUploadId: d.ID,
													strPath: n
												}; clearInterval(z); c.callback(a)
											}
										}, 1)
									} g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
								} else if (2E3 == b) {
									try {
										if (q = { strType: "", strCode: "C100", strMessage: a[0] }, "function" == typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError) KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(KUPLOADTOP.G_CURRKUPLOADER.ID, q); else "function" !== typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError && alert("Error Code : " + q.strCode + "\nError Message : " + q.strMessage), KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(KUPLOADTOP.G_CURRKUPLOADER.ID,
											q)
									} catch (A) { } g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
								} else 2001 == b && g.sendMessageToAgent(h, k, m, !1)
							}, m = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; g.sendMessageToAgent(h, k, null, !1) }; g.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); g.sendMessageToAgent(h, k, m, !1)
					}
			}
		} catch (n) { }
	}; RAONKUPLOAD.SaveAndOpen = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); c && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.frameWin.saveAndOpenEx(null, !0)) } catch (b) { } };
	RAONKUPLOAD.SaveAndFolderOpen = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); c && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.frameWin.saveAndFolderOpenEx(null, !0)) } catch (b) { } }; RAONKUPLOAD.PrintSelectedFile = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); c && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.frameWin.printFileEx(null, !0)) } catch (b) { } }; RAONKUPLOAD.DoSelectFolder = function(a) {
		try {
			var c = RAONKUPLOAD.util._setRaonKUploader(a); c && (KUPLOADTOP.G_CURRKUPLOADER =
				c, KUPLOADTOP.G_CURRKUPLOADER.frameWin.selectFile(null, !0))
		} catch (b) { }
	}; RAONKUPLOAD.AddHttpHeader = function(a, c, b) { try { var d = RAONKUPLOAD.util._setRaonKUploader(b); d && (KUPLOADTOP.G_CURRKUPLOADER = d, KUPLOADTOP.G_CURRKUPLOADER.frameWin && (d.tempHttpHeaderObj[a] = c)) } catch (g) { } }; RAONKUPLOAD.AddKMonitorHttpHeader = function(a, c, b) { try { var d = RAONKUPLOAD.util._setRaonKUploader(b); d && (KUPLOADTOP.G_CURRKUPLOADER = d, KUPLOADTOP.G_CURRKUPLOADER.frameWin && (d.tempKMonitorHttpHeaderObj[a] = c)) } catch (g) { } }; RAONKUPLOAD.setSize =
		RAONKUPLOAD.SetSize = function(a, c, b) { if ("" != a && "" != c) try { var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) { KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; g && (a = a.toString(), c = c.toString(), g.setUploadSize(a, c, !0)) } } catch (e) { } }; RAONKUPLOAD.SetConfig = function(a, c, b) {
			try {
				var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d && (KUPLOADTOP.G_CURRKUPLOADER = d, KUPLOADTOP.G_CURRKUPLOADER.frameWin)) {
					var g = a.substring(0, 1).toLowerCase() + a.substring(1); switch (g) {
						case "handlerUrl": d._config[g] =
							KUPLOADTOP.RAONKUPLOAD.util.set_handlerUrl(c); "0" == d._config.useKManager && -1 < d._config[g].indexOf("?") && (d._config[g] = RAONKUPLOAD.util.changeUrlForGetParam(d._config[g], d._config.security.encryptParam)); break; case "downloadHandlerUrl": d._config[g] = KUPLOADTOP.RAONKUPLOAD.util.set_handlerUrl(c); "0" == d._config.useKManager && -1 < d._config[g].indexOf("?") && (d._config[g] = RAONKUPLOAD.util.changeUrlForGetParam(d._config[g], d._config.security.encryptParam)); break; case "viewerHandlerUrl": d._config.viewerUrl =
								KUPLOADTOP.RAONKUPLOAD.util.set_handlerUrl(c); -1 < d._config[g].indexOf("?") && (d._config[g] = RAONKUPLOAD.util.changeUrlForGetParam(d._config[g], d._config.security.encryptParam)); break; case "folderNameRule": d._config[g] = c; break; case "fileNameRule": d._config[g] = c; break; case "fileNameRuleEx": d._config[g] = c; break; case "allowedZeroFileSize": d._config[g] = c; break; case "silentUpload": d._config[g] = c; break; case "silentDownload": d._config[g] = c; break; case "wsWorkerCount": d._config.socketWorkerCount = c; break; case "wsWorkerJobSize": d._config.socketWorkerJobSize =
									c; break; case "wsMinSingleWorkerSize": d._config.minSingleSocketWorkerSize = c; break; case "KMonitorUrl": d._config[g] = KUPLOADTOP.RAONKUPLOAD.util.set_handlerUrl(c); break; case "KMonitorPartUrl": d._config[g] = KUPLOADTOP.RAONKUPLOAD.util.set_handlerUrl(c); break; default: d._config[g] = c
					}
				}
			} catch (e) { }
		}; RAONKUPLOAD.GetListInfoByIndex = function(a, c, b) {
			var d = null; try {
				var g = RAONKUPLOAD.util._setRaonKUploader(b); if (g) {
					KUPLOADTOP.G_CURRKUPLOADER = g; var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (e) switch (0 == !!a && (a = ""), c =
						void 0 == c ? -1 : RAONKUPLOAD.util.parseIntOr0(c), b = !0, -1 == c && (b = !1), e.setCurrFileStatus(c), a.toLowerCase()) { case "text": d = e.getListInfoByIndexText(b); break; case "xml": d = e.getListInfoByIndexXml(b); break; case "json": d = e.getListInfoByIndexJson(b); break; default: d = e.getListInfoByIndexArray(b) }
				}
			} catch (h) { } return d
		}; RAONKUPLOAD.GetListInfo = function(a, c) {
			var b = null; try {
				var d = RAONKUPLOAD.util._setRaonKUploader(c); if (d) {
					KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) {
						g.setCurrFileStatus(-1);
						0 == !!a && (a = ""); b = { newFile: null, deleteFile: null, webFile: null, mergeFile: null }; switch (a.toLowerCase()) {
							case "text": b.newFile = g.getNewListInfoText(); b.deleteFile = g.getDeleteListInfoText(); b.webFile = g.getNoneDeleteListInfoText(); break; case "xml": b.newFile = g.getNewListInfoXml(); b.deleteFile = g.getDeleteListInfoXml(); b.webFile = g.getNoneDeleteListInfoXml(); break; case "json": b.newFile = g.getNewListInfoJson(); b.deleteFile = g.getDeleteListInfoJson(); b.webFile = g.getNoneDeleteListInfoJson(); break; default: b.newFile =
								g.getNewListInfoArray(), b.deleteFile = g.getDeleteListInfoArray(), b.webFile = g.getNoneDeleteListInfoArray()
						}b.mergeFile = RAONKUPLOAD.GetListInfoByIndex(a, -1, c)
					}
				}
			} catch (e) { } return b
		}; RAONKUPLOAD.GetNewUploadList = function(a, c) {
			var b = null; try {
				var d = RAONKUPLOAD.util._setRaonKUploader(c); if (d) {
					KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) switch (g.setCurrFileStatus(-1), 0 == !!a && (a = ""), a.toLowerCase()) {
						case "text": b = g.getNewListInfoText(); break; case "xml": b = g.getNewListInfoXml();
							break; case "json": b = g.getNewListInfoJson(); break; default: b = g.getNewListInfoArray()
					}
				}
			} catch (e) { } return b
		}; RAONKUPLOAD.GetDeleteList = function(a, c) { var b = null; try { var d = RAONKUPLOAD.util._setRaonKUploader(c); if (d) { KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) switch (g.setCurrFileStatus(-1), 0 == !!a && (a = ""), a.toLowerCase()) { case "text": b = g.getDeleteListInfoText(); break; case "xml": b = g.getDeleteListInfoXml(); break; case "json": b = g.getDeleteListInfoJson(); break; default: b = g.getDeleteListInfoArray() } } } catch (e) { } return b };
	RAONKUPLOAD.GetSelectedListInfo = function(a, c) {
		var b = null; try {
			var d = RAONKUPLOAD.util._setRaonKUploader(c); if (d) {
				KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) switch (g.setCurrFileStatus(-1), 0 == !!a && (a = ""), b = { newFile: null, webFile: null }, a.toLowerCase()) {
					case "text": var e = g.getSelectedListInfoText(); b.newFile = e.newFile; b.webFile = e.webFile; break; case "xml": e = g.getSelectedListInfoXml(); b.newFile = e.newFile; b.webFile = e.webFile; break; case "json": e = g.getSelectedListInfoJson(); b.newFile =
						e.newFile; b.webFile = e.webFile; break; default: e = g.getSelectedListInfoArray(), b.newFile = e.newFile, b.webFile = e.webFile
				}
			}
		} catch (h) { } return b
	}; RAONKUPLOAD.FileSort = function(a, c, b) { try { var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) { KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; g && (g.sortTotalFileList(a, c, !0), g.setListvalue()) } } catch (e) { } }; RAONKUPLOAD.GetUploadByName = function(a) {
		var c = null; try {
			void 0 == a || "" == a ? c = G_CURRKUPLOADER : RAONKUPLOAD.isLoadedUploadEx(a) && (c = RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" +
				a]), void 0 == c && (c = null)
		} catch (b) { } return c
	}; RAONKUPLOAD.SetViewModeChange = function(a, c) {
		try {
			var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b) {
				KUPLOADTOP.G_CURRKUPLOADER = b; var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d && a != KUPLOADTOP.G_CURRKUPLOADER._config.views) {
					KUPLOADTOP.G_CURRKUPLOADER._config.views = a; var g = KUPLOADTOP.RAONKUPLOAD.util.getElementsByClass("RAON_K_UP_uploadbox_tit", d.document, "div")[0]; if ("thumbs" == a) KUPLOADTOP.G_CURRKUPLOADER._config.showHeaderBar = "0", g.style.display = "none"; else if (("list" ==
						a || "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && "detail" == a) && "1" == KUPLOADTOP.G_CURRKUPLOADER._config.showHeaderBarOrg) { KUPLOADTOP.G_CURRKUPLOADER._config.showHeaderBar = "1"; g.style.display = "block"; var e = d.document.getElementById("header_bar_file_name"), h; h = "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && "detail" == KUPLOADTOP.G_CURRKUPLOADER._config.views ? document.createTextNode(d.RAONKUpload_Lang.file_path) : document.createTextNode(d.RAONKUpload_Lang.file_name); e.replaceChild(h, e.firstChild) } var k =
							parseInt(KUPLOADTOP.G_CURRKUPLOADER._config.height); if (-1 < KUPLOADTOP.G_CURRKUPLOADER._config.height.indexOf("%")) var m = KUPLOADTOP.RAONKUPLOAD.util.getClientRect(KUPLOADTOP.KUPLOADDOC.getElementById("raonkuploader_holder_" + KUPLOADTOP.G_CURRKUPLOADER.ID)), k = m.bottom - m.top; d.setFileListHeight(k, KUPLOADTOP.G_CURRKUPLOADER._config, KUPLOADTOP.G_CURRKUPLOADER); d.document.getElementById("RAON_K_UP_file_temp").style.height = KUPLOADTOP.G_CURRKUPLOADER.fileListHeight + "px"; d.document.getElementById("file_list").innerHTML =
								""; var n = d.RESULTFILELIST.length; KUPLOADTOP.G_CURRKUPLOADER.checkThumbsArr = []; for (b = 0; b < n; b++)"n" == d.RESULTFILELIST[b].isDelete && ("y" == d.RESULTFILELIST[b].isWebFile ? d.addFileList(d.RESULTFILELIST[b], !0, b) : d.addFileList(d.RESULTFILELIST[b], !1, b)); "thumbs" == a && d.thumbsViewWithCanvas(); d.setTabOrder()
				}
			}
		} catch (p) { }
	}; RAONKUPLOAD.AddUploadedFileEw = function(a, c, b, d, g, e) {
		if ("object" == typeof a) { var h = a; a = h.fileUniqueKey; c = h.fileName; b = h.filePath; d = h.fileSize; g = h.customValue; e = h.uploadId; h = h.bucketName } e = RAONKUPLOAD.util._getUploadName(e);
		if (null != e) try {
			if (RAONKUPLOAD.isLoadedUploadEx(e)) try { var k = RAONKUPLOAD.util._setRaonKUploader(e); if (k) { KUPLOADTOP.G_CURRKUPLOADER = k; var m = KUPLOADTOP.G_CURRKUPLOADER.frameWin; m && m._addUploadedFile({ uniqueKey: a, originName: c, webPath: b, size: d, customValue: g, uploadName: e, bucketName: h }) } } catch (n) { } else {
				null == RAONKUPLOAD.InitUploadDataHashTable && (RAONKUPLOAD.InitUploadDataHashTable = new RAONKUPLOAD.util.hashTable); var p = RAONKUPLOAD.InitUploadDataHashTable.getItem(e); "undefined" == typeof p && (p = []); p.push({
					mode: "AddUploadedFileEw",
					uniqueKey: a, originName: c, webPath: b, size: d, customValue: g
				}); RAONKUPLOAD.InitUploadDataHashTable.setItem(e, p)
			}
		} catch (l) { }
	}; RAONKUPLOAD.IsLoadedUploadEx = RAONKUPLOAD.isLoadedUploadEx = function(a) {
		var c = !1; try {
			var b = document.getElementById("raonkuploader_frame_" + a); if (b && b.contentWindow.document.getElementById("RAON_K_UP_wrapper") && RAONKUPLOAD.IsUploadLoadedHashTable) { var d = RAONKUPLOAD.IsUploadLoadedHashTable.getItem(a); "undefined" != typeof d && "1" == d && (c = !0) } if (!c && RAONKUPLOAD.IsUploadLoadedHashTable) try {
				d =
				RAONKUPLOAD.IsUploadLoadedHashTable.getItem(a), "undefined" != typeof d && RAONKUPLOAD.IsUploadLoadedHashTable.setItem(a, "0")
			} catch (g) { }
		} catch (e) { } return c
	}; RAONKUPLOAD.AddBase64Data = function(a, c, b) {
		if (0 != !!a && "" != a) try {
			var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) {
				KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if ("1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager) {
					b = [["kcmd", "KC05"]]; b.push(["kp1", a.replace(/[+]/g, "%2B")]); var e = g.setManagerParam("{}", b), e = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(e),
						h = function(a) {
							a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a); var b = a.code; a = a.valueArr; if (1E3 == b) {
								for (var b = [], d = a.length, m = 0; m < d; m++)try {
									var f = a[m].split(KUPLOADTOP.RAONKSolution.Agent.formfeed), n = "", n = 0 == !!c || "" == c ? f[1].substring(f[1].lastIndexOf(RAONKUPLOAD.UserAgent.osSeparator) + 1) : c, t = { name: n, type: "", uniqValue: "", isFolder: f[0], localPath: f[1], size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(f[2]), subFolderCount: "", fileCount: "" }; "1" == f[0] && (t.subFolderCount = KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(f[3]),
										t.fileCount = KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(f[4])); b.push(t)
								} catch (v) { } g.fileHandler(b, "", ""); g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)
							} else 2001 == b && g.sendMessageToAgent(e, h, k, !1)
						}, k = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; g.sendMessageToAgent(e, h, null, !1) }; g.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); g.sendMessageToAgent(e, h, k, !1)
				} else if (0 != !!c && "" != c) {
					b = null; try { b = RAONKUPLOAD.util.dataURItoBlob(a) } catch (m) { } b && (b.name = c, b.lastModifiedDate =
						"", g.fileHandler([b]))
				}
			}
		} catch (n) { }
	}; RAONKUPLOAD.GetImageSize = function(a, c, b) {
		try {
			var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) {
				KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) {
					var e = g.RESULTFILELIST.length; b = 0; if ("1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager) {
						var h = g.getRealIndexByListIndex(a); "" != g.RESULTFILELIST[h].localPath && (m = new Image, m.onload = function() { var a = { width: this.width, height: this.height }; try { m = void 0 } catch (b) { } c && c(a) }, m.onerror = function() {
							c &&
							c(null)
						}, m.src = KUPLOADTOP.RAONKSolution.managerFinalUrl + "/" + g.RESULTFILELIST[h].localPath)
					} else { h = null; for (d = 0; d < e; d++)if ("y" != g.RESULTFILELIST[d].isDelete) { if (-1 != a && b == a) { h = g.RESULTFILELIST[d].file; break } b++ } if (h) if (-1 < h.type.indexOf("image")) { var k, m; if (k = h) m = new Image, m.onload = function() { var a = { width: this.width, height: this.height }; try { window.URL.revokeObjectURL(this.src), m = void 0 } catch (b) { } c && c(a) }, m.src = window.URL.createObjectURL(k) } else c && c(null); else c && c(null) }
				}
			}
		} catch (n) { }
	}; RAONKUPLOAD.SetUploadedFile =
		function(a, c, b, d, g, e, h) { try { var k = RAONKUPLOAD.util._setRaonKUploader(h); if (k) { KUPLOADTOP.G_CURRKUPLOADER = k; var m = KUPLOADTOP.G_CURRKUPLOADER.frameWin; m && m._setUploadedFile(a, c, b, d, g, e, h) } } catch (n) { } }; RAONKUPLOAD.ChangeToAgentMode = function(a, c) {
			try {
				var b = RAONKUPLOAD.util._setRaonKUploader(a); if (b && "0" == b._config.useKManager) {
					var d = RAONKUPLOAD.UserConfigHashTable.getItem(a); "undefined" != typeof d && ("undefined" != typeof c && 0 == c && (b._config.disableAlertMessage.disableDeleteConfirm = "1", RAONKUPLOAD.DeleteAllFile(a)),
						RAONKUPLOAD.Destroy(a), d.Runtimes = "agent", new RAONKUpload(d))
				}
			} catch (g) { }
		}; RAONKUPLOAD.GetFileObjectByIndex = function(a, c) {
			var b = null; try {
				var d = RAONKUPLOAD.util._setRaonKUploader(c); if (d && (KUPLOADTOP.G_CURRKUPLOADER = d, "0" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && "upload" == KUPLOADTOP.G_CURRKUPLOADER._config.mode)) {
					var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) {
						a = parseInt(a, 10); var e = g.document.getElementById("file_list"); if (e) {
							var h = e.childNodes[a]; if (h) var k = parseInt(h.getElementsByTagName("input")[0].getAttribute("listvalue"),
								10), b = g.RESULTFILELIST[k].file
						}
					}
				}
			} catch (m) { } return b
		}; RAONKUPLOAD.RecoveryTransfer = function(a, c) { try { var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) { var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; d && (null != a && void 0 != a && "" != a && (KUPLOADTOP.G_CURRKUPLOADER._config.autoRecoveryId = a), d.recoveryUpload(b), d.recoveryDownload(b)) } } catch (g) { } }; RAONKUPLOAD.SetExceptionPath = function(a, c) {
			try {
				var b = RAONKUPLOAD.util._setRaonKUploader(c);
				b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (DirControl.BLACK_LIST = a))
			} catch (d) { }
		}; RAONKUPLOAD.SetAllowExecFile = function(a, c) { try { var b = RAONKUPLOAD.util._setRaonKUploader(c); b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (DirControl.allowExeFile = a)) } catch (d) { } }; RAONKUPLOAD.SetAllowViewerFile = function(a, c) {
			try {
				var b = RAONKUPLOAD.util._setRaonKUploader(c);
				b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (DirControl.allowViewerFile = a))
			} catch (d) { }
		}; RAONKUPLOAD.GetCompressionType = function(a, c) {
			try {
				var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d) {
						var g = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
							var e = function(b) {
								b = b.split(RAONKSolution.Agent.vertical);
								var c = b[0]; 1E3 == c ? g = b[1] : 2E3 == c ? g = "" : 2001 == c && e(raonkPatent.CompressionTypeGet(a))
							}; e(raonkPatent.CompressionTypeGet(a))
						} else {
							b = [["kcmd", "KC77"]]; b.push(["kp1", encodeURIComponent("CompressionTypeGet")]); b.push(["kp2", encodeURIComponent(a)]); var h = d.setManagerParam("{}", b), h = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(h), e = function(a) {
								a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a); var b = a.code; a = a.valueArr; 1E3 == b ? (g = a[0], d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == b ? (g = "", d.displayCommonReady(!1,
									KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == b && d.sendMessageToAgent(h, e, k, !1)
							}, k = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; d.sendMessageToAgent(h, e, null, !1) }; d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); d.sendMessageToAgent(h, e, k, !1)
						} return g
					}
				}
			} catch (m) { }
		}; RAONKUPLOAD.GetLocalDirList = function(a, c) {
			try {
				var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
					if (d) {
						try { a = a.toLowerCase() } catch (g) { } var b = [], e = DirControl.BLACK_LIST; "" != e && (e = e.replace(/"/gi, ""), e = e.replace(/'/gi, ""), b = e.split(",")); var e = !1, h = b.length; if (0 < h) for (var k = 0; k < h; k++) { var m = RAONKUPLOAD.util.trim(b[k]), m = m.toLowerCase(); if (-1 < a.indexOf(m)) { e = !0; break } } if (e) return d.RAONKUpload_Lang.etc.message1; var n = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
							var p = function(b) {
								var c = b.split(RAONKSolution.Agent.vertical); b = c[0]; if (1E3 == b) {
									if (0 < c.length && 0 < c[1].length) {
										b = []; var c =
											c[1].split(";"), d = c.length; a = a.substr(0, a.lastIndexOf("\\") + 1); for (var e = 0; e < d; e++) { var g = c[e], g = g.replace(a, ""); if (0 > g.lastIndexOf("\\")) b.push(g); else { for (var g = g.split("\\")[0], h = !1, w = b.length - 1; 0 <= w; w--)if (b[w] == g) { h = !0; break } 0 == h && b.push(g) } } n = b.join(";")
									}
								} else 2E3 == b ? n = "" : 2001 == b && p(raonkPatent.GetLocalDirList(a))
							}; p(raonkPatent.GetLocalDirList(a))
						} else {
							h = [["kcmd", "KC77"]]; h.push(["kp1", encodeURIComponent("GetLocalDirList")]); h.push(["kp2", encodeURIComponent(a)]); var l = d.setManagerParam("{}",
								h), l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l), p = function(b) {
									var c = KUPLOADTOP.RAONKSolution.Agent.parseRtn(b); b = c.code; c = c.valueArr; if (1E3 == b) { if (0 < c.length && 0 < c[0].length) { b = []; var c = c[0].split(";"), e = c.length; a = a.substr(0, a.lastIndexOf("\\") + 1); for (var g = 0; g < e; g++) { var h = c[g], h = h.replace(a, ""); if (0 > h.lastIndexOf("\\")) b.push(h); else { for (var h = h.split("\\")[0], m = !1, w = b.length - 1; 0 <= w; w--)if (b[w] == h) { m = !0; break } 0 == m && b.push(h) } } n = b.join(";") } d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) } else 2E3 ==
										b ? (n = "", d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == b && d.sendMessageToAgent(l, p, r, !1)
								}, r = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; d.sendMessageToAgent(l, p, null, !1) }; d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); d.sendMessageToAgent(l, p, r, !1)
						} return n
					}
				}
			} catch (q) { }
		}; RAONKUPLOAD.MakeDir = function(a, c) {
			try {
				var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
					if (d) {
						var b = [], g = DirControl.BLACK_LIST; "" != g && (g = g.replace(/"/gi, ""), g = g.replace(/'/gi, ""), b = g.split(",")); var g = !1, e = a.toLowerCase(), h = b.length; if (0 < h) for (var k = 0; k < h; k++) { var m = RAONKUPLOAD.util.trim(b[k]), m = m.toLowerCase(); if (-1 < e.indexOf(m)) { g = !0; break } } if (g) return !1; var n = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var p = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 == b ? n = !0 : 2E3 == b ? n = !1 : 2001 == b && p(raonkPatent.MakeDir(a)) }; p(raonkPatent.MakeDir(a)) } else {
							e = [["kcmd",
								"KC77"]]; e.push(["kp1", encodeURIComponent("MakeDir")]); e.push(["kp2", encodeURIComponent(a)]); var l = d.setManagerParam("{}", e), l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l), p = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? (n = !0, d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (n = !1, d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a && d.sendMessageToAgent(l, p, r, !1) }, r = function(a) {
									KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; d.sendMessageToAgent(l,
										p, null, !1)
								}; d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); d.sendMessageToAgent(l, p, r, !1)
						} return n
					}
				}
			} catch (q) { }
		}; RAONKUPLOAD.RemoveDir = function(a, c) {
			try {
				var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d) {
						try { a = a.toLowerCase() } catch (g) { } var b = [], e = DirControl.BLACK_LIST; "" != e && (e = e.replace(/"/gi, ""), e = e.replace(/'/gi, ""), b = e.split(",")); var e = !1, h = b.length; if (0 < h) for (var k =
							0; k < h; k++) { var m = RAONKUPLOAD.util.trim(b[k]), m = m.toLowerCase(); if (-1 < a.indexOf(m)) { e = !0; break } } if (e) return !1; var n = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var p = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 == b ? n = !0 : 2E3 == b ? n = !1 : 2001 == b && p(raonkPatent.RemoveDir(a)) }; p(raonkPatent.RemoveDir(a)) } else {
								h = [["kcmd", "KC77"]]; h.push(["kp1", encodeURIComponent("RemoveDir")]); h.push(["kp2", encodeURIComponent(a)]); var l = d.setManagerParam("{}", h), l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l),
									p = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? (n = !0, d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (n = !1, d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a && d.sendMessageToAgent(l, p, r, !1) }, r = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; d.sendMessageToAgent(l, p, null, !1) }; d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); d.sendMessageToAgent(l, p, r, !1)
							} return n
					}
				}
			} catch (q) { }
		}; RAONKUPLOAD.RemoveFile = function(a, c) {
			try {
				var b = RAONKUPLOAD.util._setRaonKUploader(c);
				if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d) {
						try { a = a.toLowerCase() } catch (g) { } var b = [], e = DirControl.BLACK_LIST; "" != e && (e = e.replace(/"/gi, ""), e = e.replace(/'/gi, ""), b = e.split(",")); var e = !1, h = b.length; if (0 < h) for (var k = 0; k < h; k++) { var m = RAONKUPLOAD.util.trim(b[k]), m = m.toLowerCase(); if (-1 < a.indexOf(m)) { e = !0; break } } if (e) return !1; var n = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
							var p = function(b) {
								b =
								b.split(RAONKSolution.Agent.vertical)[0]; 1E3 == b ? n = !0 : 2E3 == b ? n = !1 : 2001 == b && p(raonkPatent.RemoveFile(a))
							}; p(raonkPatent.RemoveFile(a))
						} else {
							h = [["kcmd", "KC77"]]; h.push(["kp1", encodeURIComponent("RemoveFile")]); h.push(["kp2", encodeURIComponent(a)]); var l = d.setManagerParam("{}", h), l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l), p = function(a) {
								a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? (n = !0, d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (n = !1, d.displayCommonReady(!1,
									KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a && d.sendMessageToAgent(l, p, r, !1)
							}, r = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; d.sendMessageToAgent(l, p, null, !1) }; d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); d.sendMessageToAgent(l, p, r, !1)
						} return n
					}
				}
			} catch (q) { }
		}; RAONKUPLOAD.Rename = function(a, c, b) {
			try {
				var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d && (KUPLOADTOP.G_CURRKUPLOADER = d, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) {
						try {
							a =
							a.toLowerCase(), c = c.toLowerCase()
						} catch (e) { } b = []; var h = DirControl.BLACK_LIST; "" != h && (h = h.replace(/"/gi, ""), h = h.replace(/'/gi, ""), b = h.split(",")); var h = !1, k = b.length; if (0 < k) for (d = 0; d < k; d++) { var m = RAONKUPLOAD.util.trim(b[d]), m = m.toLowerCase(); if (-1 < a.indexOf(m)) { h = !0; break } if (-1 < c.indexOf(m)) { h = !0; break } } if (h) return !1; var n = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
							var p = function(b) {
								b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 == b ? n = !0 : 2E3 == b ? n = !1 : 2001 == b && p(raonkPatent.RenameFileOrFolder(a,
									c))
							}; p(raonkPatent.RenameFileOrFolder(a, c))
						} else {
							k = [["kcmd", "KC77"]]; k.push(["kp1", encodeURIComponent("Rename")]); k.push(["kp2", encodeURIComponent(a)]); k.push(["kp3", encodeURIComponent(c)]); var l = g.setManagerParam("{}", k), l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l), p = function(a) {
								a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? (n = !0, g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (n = !1, g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a && g.sendMessageToAgent(l,
									p, r, !1)
							}, r = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; g.sendMessageToAgent(l, p, null, !1) }; g.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); g.sendMessageToAgent(l, p, r, !1)
						} return n
					}
				}
			} catch (q) { }
		}; RAONKUPLOAD.ExcuteFile = function(a, c) {
			try {
				var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d) {
						b = ""; try {
							a = a.toLowerCase(); var g = a.split("\\"), b = g[g.length -
								1]
						} catch (e) { } var g = [], h = DirControl.allowExeFile; "" != h && (h = h.replace(/"/gi, ""), h = h.replace(/'/gi, ""), g = h.split(",")); var h = !1, k = g.length; if (0 < k) for (var m = 0; m < k; m++) { var n = RAONKUPLOAD.util.trim(g[m]), n = n.toLowerCase(); if (b == n) { h = !0; break } } if (!(0 < k && 0 == h)) if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var p = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 != b && 2E3 != b && 2001 == b && p(raonkPatent.FileExe(a)) }; p(raonkPatent.FileExe(a)) } else {
							k = [["kcmd", "KC77"]]; k.push(["kp1", encodeURIComponent("FileExe")]);
							k.push(["kp2", encodeURIComponent(a)]); var l = d.setManagerParam("{}", k), l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l), p = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) : 2E3 == a ? d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) : 2001 == a && d.sendMessageToAgent(l, p, r, !1) }, r = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; d.sendMessageToAgent(l, p, null, !1) }; d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
							d.sendMessageToAgent(l, p, r, !1)
						}
					}
				}
			} catch (q) { }
		}; RAONKUPLOAD.ExcuteViewer = function(a, c, b) {
			try {
				var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d && (KUPLOADTOP.G_CURRKUPLOADER = d, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) {
						b = ""; try { a = a.toLowerCase(); var e = a.split("\\"); b = e[e.length - 1] } catch (h) { } var e = [], k = DirControl.allowViewerFile; "" != k && (k = k.replace(/"/gi, ""), k = k.replace(/'/gi, ""), e = k.split(",")); var k = !1, m = e.length; if (0 < m) for (d = 0; d < m; d++) {
							var n =
								RAONKUPLOAD.util.trim(e[d]), n = n.toLowerCase(); if (b == n) { k = !0; break }
						} if (0 < m && 0 == k) return 1; var p = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var l = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 == b ? p = 0 : 2E3 == b ? p = 1 : 2001 == b && l(raonkPatent.ExecTheViewer(a, c)) }; l(raonkPatent.ExecTheViewer(a, c)) } else {
							m = [["kcmd", "KC77"]]; m.push(["kp1", encodeURIComponent("ExecTheViewer")]); m.push(["kp2", encodeURIComponent(a)]); m.push(["kp3", encodeURIComponent(c)]); var r = g.setManagerParam("{}",
								m), r = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(r), l = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? (p = 0, g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (p = 1, g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a && g.sendMessageToAgent(r, l, q, !1) }, q = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; g.sendMessageToAgent(r, l, null, !1) }; g.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); g.sendMessageToAgent(r, l, q, !1)
						} return p
					}
				}
			} catch (f) { }
		};
	RAONKUPLOAD.OpenLocalFile = function(a, c, b) {
		try {
			var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d && (KUPLOADTOP.G_CURRKUPLOADER = d, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
				var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) {
					try { a = a.toLowerCase() } catch (e) { } b = []; var h = DirControl.BLACK_LIST; "" != h && (h = h.replace(/"/gi, ""), h = h.replace(/'/gi, ""), b = h.split(",")); var h = !1, k = b.length; if (0 < k) for (d = 0; d < k; d++) { var m = RAONKUPLOAD.util.trim(b[d]), m = m.toLowerCase(); if (-1 < a.indexOf(m)) { h = !0; break } } if (h) return !1;
					DirControl.openFile = a; DirControl.nextLineNo = 0; var n = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var p = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 == b ? n = !0 : 2E3 == b ? n = !1 : 2001 == b && p(raonkPatent.OpenLocalFile(a, c)) }; p(raonkPatent.OpenLocalFile(a, c)) } else {
						k = [["kcmd", "KC77"]]; k.push(["kp1", encodeURIComponent("OpenLocalFile")]); k.push(["kp2", encodeURIComponent(a)]); k.push(["kp3", encodeURIComponent(c)]); var l = g.setManagerParam("{}", k), l = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(l),
							p = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? (n = !0, g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (n = !1, g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a && g.sendMessageToAgent(l, p, r, !1) }, r = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; g.sendMessageToAgent(l, p, null, !1) }; g.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); g.sendMessageToAgent(l, p, r, !1)
					} return n
				}
			}
		} catch (q) { }
	}; RAONKUPLOAD.CloseLocalFile = function(a) {
		try {
			var c = RAONKUPLOAD.util._setRaonKUploader(a);
			if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
				var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (b) {
					var d = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var g = function(a) { a = a.split(RAONKSolution.Agent.vertical)[0]; 1E3 == a ? d = !0 : 2E3 == a ? d = !1 : 2001 == a && g(raonkPatent.CloseLocalFile(DirControl.openFile)) }; g(raonkPatent.CloseLocalFile(DirControl.openFile)) } else {
						a = [["kcmd", "KC77"]]; a.push(["kp1", encodeURIComponent("CloseLocalFile")]); a.push(["kp2", encodeURIComponent(DirControl.openFile)]);
						var e = b.setManagerParam("{}", a), e = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(e), g = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? (d = !0, b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (d = !1, b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a && b.sendMessageToAgent(e, g, h, !1) }, h = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; b.sendMessageToAgent(e, g, null, !1) }; b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); b.sendMessageToAgent(e,
							g, h, !1)
					} return d
				}
			}
		} catch (k) { }
	}; RAONKUPLOAD.WriteString = function(a, c) {
		try {
			var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
				var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d) {
					var g = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
						var e = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 == b ? g = !0 : 2E3 == b ? g = !1 : 2001 == b && e(raonkPatent.WriteString(DirControl.openFile, a, "0")) }; e(raonkPatent.WriteString(DirControl.openFile,
							a, "0"))
					} else {
						b = [["kcmd", "KC77"]]; b.push(["kp1", encodeURIComponent("WriteString")]); b.push(["kp2", encodeURIComponent(DirControl.openFile)]); b.push(["kp3", encodeURIComponent(a)]); b.push(["kp4", encodeURIComponent("0")]); var h = d.setManagerParam("{}", b), h = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(h), e = function(a) {
							a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? (g = !0, d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (g = !1, d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) :
								2001 == a && d.sendMessageToAgent(h, e, k, !1)
						}, k = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; d.sendMessageToAgent(h, e, null, !1) }; d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); d.sendMessageToAgent(h, e, k, !1)
					} return g
				}
			}
		} catch (m) { }
	}; RAONKUPLOAD.WritelnString = function(a, c) {
		try {
			var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
				var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d) {
					var g = ""; if (RAONKUPLOAD.browser.ie &&
						10 > RAONKUPLOAD.browser.ieVersion) { var e = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 == b ? g = !0 : 2E3 == b ? g = !1 : 2001 == b && e(raonkPatent.WriteString(DirControl.openFile, a, "1")) }; e(raonkPatent.WriteString(DirControl.openFile, a, "1")) } else {
							b = [["kcmd", "KC77"]]; b.push(["kp1", encodeURIComponent("WriteString")]); b.push(["kp2", encodeURIComponent(DirControl.openFile)]); b.push(["kp3", encodeURIComponent(a)]); b.push(["kp4", encodeURIComponent("1")]); var h = d.setManagerParam("{}", b), h = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(h),
								e = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? (g = !0, d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (g = !1, d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a && d.sendMessageToAgent(h, e, k, !1) }, k = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; d.sendMessageToAgent(h, e, null, !1) }; d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); d.sendMessageToAgent(h, e, k, !1)
					} return g
				}
			}
		} catch (m) { }
	}; RAONKUPLOAD.ReadString = function(a) {
		try {
			var c = RAONKUPLOAD.util._setRaonKUploader(a);
			if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
				var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (b) {
					var d = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var g = function(a) { a = a.split(RAONKSolution.Agent.vertical); var b = a[0]; 1E3 == b ? (DirControl.nextLineNo++, d = a[1]) : 2E3 == b ? d = "" : 2001 == b && g(raonkPatent.ReadString(DirControl.openFile, DirControl.nextLineNo + "")) }; g(raonkPatent.ReadString(DirControl.openFile, DirControl.nextLineNo + "")) } else {
						a = [["kcmd", "KC77"]];
						a.push(["kp1", encodeURIComponent("ReadString")]); a.push(["kp2", encodeURIComponent(DirControl.openFile)]); a.push(["kp3", encodeURIComponent(DirControl.nextLineNo + "")]); var e = b.setManagerParam("{}", a), e = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(e), g = function(a) {
							a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a); var c = a.code; a = a.valueArr; 1E3 == c ? (DirControl.nextLineNo++, d = a[0], b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == c ? (d = "", b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) :
								2001 == c && b.sendMessageToAgent(e, g, h, !1)
						}, h = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; b.sendMessageToAgent(e, g, null, !1) }; b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); b.sendMessageToAgent(e, g, h, !1)
					} return d
				}
			}
		} catch (k) { }
	}; RAONKUPLOAD.SaveUTF8 = function(a, c) {
		try {
			var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
				var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d) if (RAONKUPLOAD.browser.ie && 10 >
					RAONKUPLOAD.browser.ieVersion) { var g = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 != b && 2E3 != b && 2001 == b && g(raonkPatent.SaveToUTF8(a)) }; g(raonkPatent.SaveToUTF8(a)) } else {
						b = [["kcmd", "KC77"]]; b.push(["kp1", encodeURIComponent("SaveUTF8")]); b.push(["kp2", encodeURIComponent(a)]); var e = d.setManagerParam("{}", b), e = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(e), g = function(a) {
							a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) :
								2E3 == a ? d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) : 2001 == a && d.sendMessageToAgent(e, g, h, !1)
						}, h = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; d.sendMessageToAgent(e, g, null, !1) }; d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); d.sendMessageToAgent(e, g, h, !1)
				}
			}
		} catch (k) { }
	}; RAONKUPLOAD.OpenFileToBrowser = function(a, c) {
		try {
			var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
				var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin;
				if (d) {
					var g = "firefox.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "chrome.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "opera.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "safari.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "iexplore.exe"; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var e = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 != b && 2E3 != b && 2001 == b && e(raonkPatent.OpenHtml(a, g)) }; e(raonkPatent.OpenHtml(a, g)) } else {
						b = [["kcmd", "KC77"]]; b.push(["kp1", encodeURIComponent("OpenHtml")]);
						b.push(["kp2", encodeURIComponent(a)]); b.push(["kp3", encodeURIComponent(g)]); var h = d.setManagerParam("{}", b), h = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(h), e = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) : 2E3 == a ? d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) : 2001 == a && d.sendMessageToAgent(h, e, k, !1) }, k = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; d.sendMessageToAgent(h, e, null, !1) }; d.displayCommonReady(!0,
							KUPLOADTOP.G_CURRKUPLOADER); d.sendMessageToAgent(h, e, k, !1)
					}
				}
			}
		} catch (m) { }
	}; RAONKUPLOAD.OpenFileToBrowser2 = function(a, c) {
		try {
			var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
				var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d) {
					var g = "iexplore.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "firefox.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "chrome.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed + "opera.exe" + KUPLOADTOP.RAONKSolution.Agent.formfeed +
						"safari.exe"; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var e = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 != b && 2E3 != b && 2001 == b && e(raonkPatent.OpenHtml(a, g)) }; e(raonkPatent.OpenHtml(a, g)) } else {
							b = [["kcmd", "KC77"]]; b.push(["kp1", encodeURIComponent("OpenHtml")]); b.push(["kp2", encodeURIComponent(a)]); b.push(["kp3", encodeURIComponent(g)]); var h = d.setManagerParam("{}", b), h = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(h), e = function(a) {
								a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
								1E3 == a ? d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) : 2E3 == a ? d.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) : 2001 == a && d.sendMessageToAgent(h, e, k, !1)
							}, k = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; d.sendMessageToAgent(h, e, null, !1) }; d.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); d.sendMessageToAgent(h, e, k, !1)
						}
				}
			}
		} catch (m) { }
	}; RAONKUPLOAD.ZipFile = function(a, c, b) {
		try {
			var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d && (KUPLOADTOP.G_CURRKUPLOADER = d, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
				var g =
					KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) {
						var e = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var h = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 == b ? e = 1 : 2E3 == b ? e = 0 : 2001 == b && h(raonkPatent.AddFile(a, c)) }; h(raonkPatent.AddFile(a, c)) } else {
							b = [["kcmd", "KC77"]]; b.push(["kp1", encodeURIComponent("AddFile")]); b.push(["kp2", encodeURIComponent(a)]); b.push(["kp3", encodeURIComponent(c)]); var k = g.setManagerParam("{}", b), k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k), h =
								function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? (e = 1, g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (e = 0, g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a && g.sendMessageToAgent(k, h, m, !1) }, m = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; g.sendMessageToAgent(k, h, null, !1) }; g.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); g.sendMessageToAgent(k, h, m, !1)
						} return e
					}
			}
		} catch (n) { }
	}; RAONKUPLOAD.UnZipFile = function(a, c, b) {
		try {
			var d = RAONKUPLOAD.util._setRaonKUploader(b);
			if (d && (KUPLOADTOP.G_CURRKUPLOADER = d, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
				var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) {
					var e = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var h = function(b) { b = b.split(RAONKSolution.Agent.vertical)[0]; 1E3 == b ? e = 1 : 2E3 == b ? e = 0 : 2001 == b && h(raonkPatent.ExtractFile(a, c)) }; h(raonkPatent.ExtractFile(a, c)) } else {
						b = [["kcmd", "KC77"]]; b.push(["kp1", encodeURIComponent("ExtractFile")]); b.push(["kp2", encodeURIComponent(a)]); b.push(["kp3", encodeURIComponent(c)]);
						var k = g.setManagerParam("{}", b), k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k), h = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? (e = 1, g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (e = 0, g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a && g.sendMessageToAgent(k, h, m, !1) }, m = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; g.sendMessageToAgent(k, h, null, !1) }; g.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); g.sendMessageToAgent(k,
							h, m, !1)
					} return e
				}
			}
		} catch (n) { }
	}; RAONKUPLOAD.SetUnZipPaperInfo = function(a, c, b, d, g) { try { var e = RAONKUPLOAD.util._setRaonKUploader(g); if (e && (KUPLOADTOP.G_CURRKUPLOADER = e, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin)) { g = ""; var h = a.split("\\"), k = h.length; for (a = 0; a < k - 1; a++)g += h[a] + "\\"; c.lastIndexOf("\\") != c.length - 1 && (c += "\\"); UnZipPaper.SendDelFileList = g; UnZipPaper.ZipSourceDir = c; UnZipPaper.ZipSourceFile = b; UnZipPaper.UnZipTargetFile = d } } catch (m) { } }; RAONKUPLOAD.UnZipPaperInfo =
		function(a) {
			try {
				var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (b) {
						var d = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
							var g = function(a) { a = a.split(RAONKSolution.Agent.vertical)[0]; 1E3 == a ? d = 0 : 2E3 == a ? d = 1 : 2001 == a && g(raonkPatent.UnZipPaperInfo(UnZipPaper.SendDelFileList, UnZipPaper.ZipSourceDir + UnZipPaper.ZipSourceFile, UnZipPaper.UnZipTargetFile)) }; g(raonkPatent.UnZipPaperInfo(UnZipPaper.SendDelFileList,
								UnZipPaper.ZipSourceDir + UnZipPaper.ZipSourceFile, UnZipPaper.UnZipTargetFile))
						} else {
							a = [["kcmd", "KC77"]]; a.push(["kp1", encodeURIComponent("UnZipPaperInfo")]); a.push(["kp2", encodeURIComponent(UnZipPaper.SendDelFileList)]); a.push(["kp3", encodeURIComponent(UnZipPaper.ZipSourceDir + UnZipPaper.ZipSourceFile)]); a.push(["kp4", encodeURIComponent(UnZipPaper.UnZipTargetFile)]); var e = b.setManagerParam("{}", a), e = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(e), g = function(a) {
								a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code;
								1E3 == a ? (d = 0, b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == a ? (d = 1, b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == a && b.sendMessageToAgent(e, g, h, !1)
							}, h = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; b.sendMessageToAgent(e, g, null, !1) }; b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); b.sendMessageToAgent(e, g, h, !1)
						} return d
					}
				}
			} catch (k) { }
		}; RAONKUPLOAD.GetZipSourceDir = function(a) {
			var c = ""; try {
				var b = RAONKUPLOAD.util._setRaonKUploader(a); b && (KUPLOADTOP.G_CURRKUPLOADER =
					b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (c = UnZipPaper.ZipSourceDir))
			} catch (d) { } return c
		}; RAONKUPLOAD.GetUnZipTargetFile = function(a) { var c = ""; try { var b = RAONKUPLOAD.util._setRaonKUploader(a); b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (c = UnZipPaper.UnZipTargetFile)) } catch (d) { } return c }; RAONKUPLOAD.GetZipSourceFile = function(a) {
			var c = ""; try {
				var b = RAONKUPLOAD.util._setRaonKUploader(a);
				b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (c = UnZipPaper.ZipSourceFile))
			} catch (d) { } return c
		}; RAONKUPLOAD.GetSendDelFileList = function(a) { var c = ""; try { var b = RAONKUPLOAD.util._setRaonKUploader(a); b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (c = UnZipPaper.SendDelFileList)) } catch (d) { } return c }; RAONKUPLOAD.SetDialogInitDir = function(a, c) {
			try {
				var b =
					RAONKUPLOAD.util._setRaonKUploader(c); b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (SelectFile.initDir = a))
			} catch (d) { }
		}; RAONKUPLOAD.SetDialogTitle = function(a, c) { try { var b = RAONKUPLOAD.util._setRaonKUploader(c); b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (SelectFile.DialogTitle = a)) } catch (d) { } }; RAONKUPLOAD.SetDialogFilter = function(a, c) {
			try {
				var b =
					RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin)) {
						var d = a.length; "|" == a.substring(d - 1, d) && (a = a.substring(0, d - 1)); if (-1 < a.indexOf(".wad") || -1 < a.indexOf(".sg1")) { var g = a.split("|"), e = g.length; a = ""; for (b = 0; b < e; b++)0 == b % 2 && (-1 < g[b].indexOf(".wad") && "*.*" == g[b + 1] ? g[b + 1] = "*.txt;*.wad" : -1 < g[b].indexOf(".sg1") && "*.*" == g[b + 1] && (g[b + 1] = "*.txt;*.zg1;*.sg1")), a += g[b] + "|" } d = a.length; "|" == a.substring(d -
							1, d) && (a = a.substring(0, d - 1)); SelectFile.Filter = a
					}
			} catch (h) { }
		}; RAONKUPLOAD.OpenDialogMultiSelect = function(a) {
			try {
				var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (b) {
						var d = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
							var g = function(a) {
								a = a.split(RAONKSolution.Agent.vertical); var b = a[0]; if (1E3 == b) {
									SelectFile.fileName = ""; SelectFile.fileExt = ""; SelectFile.fileLength =
										0; for (var b = a.length, c = 1; c < b; c++) { var e = a[c].split(KUPLOADTOP.RAONKSolution.Agent.formfeed); SelectFile.fileName += e[0] + "+" } d = !0
								} else 2E3 == b ? d = !1 : 2001 == b && g(raonkPatent.MultiSave(SelectFile.initDir, SelectFile.DialogTitle, SelectFile.Filter, "" + RAONKSolution.Agent.formfeed + "1" + RAONKSolution.Agent.formfeed + "0"))
							}; g(raonkPatent.MultiSave(SelectFile.initDir, SelectFile.DialogTitle, SelectFile.Filter, "" + RAONKSolution.Agent.formfeed + "1" + RAONKSolution.Agent.formfeed + "0"))
						} else {
							a = [["kcmd", "KC77"]]; a.push(["kp1",
								encodeURIComponent("MultiSave")]); a.push(["kp2", encodeURIComponent(SelectFile.initDir)]); a.push(["kp3", encodeURIComponent(SelectFile.DialogTitle)]); a.push(["kp4", encodeURIComponent(SelectFile.Filter)]); a.push(["kp5", encodeURIComponent("")]); a.push(["kp6", encodeURIComponent("1")]); a.push(["kp7", encodeURIComponent("0")]); var e = b.setManagerParam("{}", a), e = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(e), g = function(a) {
									a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a); var c = a.code; a = a.valueArr; if (1E3 ==
										c) { SelectFile.fileName = ""; SelectFile.fileExt = ""; SelectFile.fileLength = 0; for (var c = a.length, k = 0; k < c; k++) { var l = a[k].split(KUPLOADTOP.RAONKSolution.Agent.formfeed); SelectFile.fileName += l[0] + "+" } d = !0; b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) } else 2E3 == c ? (d = !1, b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == c && b.sendMessageToAgent(e, g, h, !1)
								}, h = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; b.sendMessageToAgent(e, g, null, !1) }; b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER);
							b.sendMessageToAgent(e, g, h, !1)
						} return d
					}
				}
			} catch (k) { }
		}; RAONKUPLOAD.OpenFolderDialog = function(a) {
			try {
				var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (b) {
						var d = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
							var g = SelectFile.DialogTitle, g = g + (KUPLOADTOP.RAONKSolution.Agent.formfeed + KUPLOADTOP.G_CURRKUPLOADER._config.folderSelectDialogButtonName), e = function(a) {
								a =
								a.split(RAONKSolution.Agent.vertical); var b = a[0]; 1E3 == b ? (SelectFile.dirPath = "", SelectFile.dirPath = a[1], d = !0) : 2E3 == b ? d = !1 : 2001 == b && e(raonkPatent.ShowDirectoryDialog(SelectFile.initDir, g))
							}; e(raonkPatent.ShowDirectoryDialog(SelectFile.initDir, g))
						} else {
							a = [["kcmd", "KC77"]]; a.push(["kp1", encodeURIComponent("Show")]); a.push(["kp2", encodeURIComponent(SelectFile.initDir)]); g = SelectFile.DialogTitle; g += KUPLOADTOP.RAONKSolution.Agent.formfeed + KUPLOADTOP.G_CURRKUPLOADER._config.folderSelectDialogButtonName; a.push(["kp3",
								encodeURIComponent(g)]); var h = b.setManagerParam("{}", a), h = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(h), e = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a); var c = a.code; a = a.valueArr; 1E3 == c ? (SelectFile.dirPath = "", SelectFile.dirPath = a[0], d = !0, b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == c ? (d = !1, b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == c && b.sendMessageToAgent(h, e, k, !1) }, k = function(a) {
									KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; b.sendMessageToAgent(h,
										e, null, !1)
								}; b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); b.sendMessageToAgent(h, e, k, !1)
						} return d
					}
				}
			} catch (m) { }
		}; RAONKUPLOAD.OpenDialogSingleSelect = function(a) {
			try {
				var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var b = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (b) {
						var d = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
							var g = function(a) {
								a = a.split(RAONKSolution.Agent.vertical); var b = a[0]; if (1E3 == b) {
									SelectFile.fileName =
									""; SelectFile.fileExt = ""; SelectFile.fileLength = 0; for (var b = a.length, c = 1; c < b; c++) { var e = a[c].split(KUPLOADTOP.RAONKSolution.Agent.formfeed); SelectFile.fileName = e[0]; SelectFile.fileLength = RAONKUPLOAD.util.parseIntOr0(e[1]); var e = SelectFile.fileName.split("."), h = e.length; SelectFile.fileExt = 1 < h ? e[h - 1] : "" } d = !0
								} else 2E3 == b ? d = !1 : 2001 == b && g(raonkPatent.MultiSave(SelectFile.initDir, SelectFile.DialogTitle, SelectFile.Filter, "" + RAONKSolution.Agent.formfeed + "0" + RAONKSolution.Agent.formfeed + "0"))
							}; g(raonkPatent.MultiSave(SelectFile.initDir,
								SelectFile.DialogTitle, SelectFile.Filter, "" + RAONKSolution.Agent.formfeed + "0" + RAONKSolution.Agent.formfeed + "0"))
						} else {
							a = [["kcmd", "KC77"]]; a.push(["kp1", encodeURIComponent("MultiSave")]); a.push(["kp2", encodeURIComponent(SelectFile.initDir)]); a.push(["kp3", encodeURIComponent(SelectFile.DialogTitle)]); a.push(["kp4", encodeURIComponent(SelectFile.Filter)]); a.push(["kp5", encodeURIComponent("")]); a.push(["kp6", encodeURIComponent("0")]); a.push(["kp7", encodeURIComponent("0")]); var e = b.setManagerParam("{}",
								a), e = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(e), g = function(a) {
									a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a); var c = a.code; a = a.valueArr; if (1E3 == c) {
										SelectFile.fileName = ""; SelectFile.fileExt = ""; SelectFile.fileLength = 0; for (var c = a.length, k = 0; k < c; k++) { var l = a[k].split(KUPLOADTOP.RAONKSolution.Agent.formfeed); SelectFile.fileName = l[0]; SelectFile.fileLength = RAONKUPLOAD.util.parseIntOr0(l[1]); var l = SelectFile.fileName.split("."), r = l.length; SelectFile.fileExt = 1 < r ? l[r - 1] : "" } d = !0; b.displayCommonReady(!1,
											KUPLOADTOP.G_CURRKUPLOADER)
									} else 2E3 == c ? (d = !1, b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == c && b.sendMessageToAgent(e, g, h, !1)
								}, h = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; b.sendMessageToAgent(e, g, null, !1) }; b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); b.sendMessageToAgent(e, g, h, !1)
						} return d
					}
				}
			} catch (k) { }
		}; RAONKUPLOAD.OpenSaveDialog = function(a) {
			try {
				var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c && (KUPLOADTOP.G_CURRKUPLOADER = c, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var b =
						KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (b) {
							var d = SelectFile.fileName; if ("" != d) var g = SelectFile.fileName.split("\\"), d = g[g.length - 1]; var e = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) {
								var h = function(a) {
									a = a.split(RAONKSolution.Agent.vertical); var b = a[0]; if (1E3 == b) { SelectFile.fileName = ""; SelectFile.fileExt = ""; SelectFile.fileLength = 0; for (var b = a.length, c = 1; c < b; c++) { var g = a[c].split(RAONKSolution.Agent.formfeed); SelectFile.fileName = g[0] } e = !0 } else 2E3 == b ? e = !1 : 2001 == b && h(raonkPatent.MultiSave(SelectFile.initDir,
										SelectFile.DialogTitle, SelectFile.Filter, d + RAONKSolution.Agent.formfeed + "0" + RAONKSolution.Agent.formfeed + "1"))
								}; h(raonkPatent.MultiSave(SelectFile.initDir, SelectFile.DialogTitle, SelectFile.Filter, d + RAONKSolution.Agent.formfeed + "0" + RAONKSolution.Agent.formfeed + "1"))
							} else {
								a = [["kcmd", "KC77"]]; a.push(["kp1", encodeURIComponent("MultiSave")]); a.push(["kp2", encodeURIComponent(SelectFile.initDir)]); a.push(["kp3", encodeURIComponent(SelectFile.DialogTitle)]); a.push(["kp4", encodeURIComponent(SelectFile.Filter)]);
								a.push(["kp5", encodeURIComponent(d)]); a.push(["kp6", encodeURIComponent("0")]); a.push(["kp7", encodeURIComponent("1")]); var k = b.setManagerParam("{}", a), k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k), h = function(a) {
									a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a); var c = a.code; a = a.valueArr; if (1E3 == c) { SelectFile.fileName = ""; SelectFile.fileExt = ""; SelectFile.fileLength = 0; for (var c = a.length, d = 0; d < c; d++)SelectFile.fileName = a[0]; e = !0; b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) } else 2E3 == c ? (e =
										!1, b.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == c && b.sendMessageToAgent(k, h, m, !1)
								}, m = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; b.sendMessageToAgent(k, h, null, !1) }; b.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); b.sendMessageToAgent(k, h, m, !1)
							} return e
						}
				}
			} catch (n) { }
		}; RAONKUPLOAD.GetDialogFilePath = function(a, c) {
			var b = ""; try {
				var d = RAONKUPLOAD.util._setRaonKUploader(c); d && (KUPLOADTOP.G_CURRKUPLOADER = d, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin &&
					(b = SelectFile.fileName))
			} catch (g) { } return b
		}; RAONKUPLOAD.GetDialogFolderPath = function(a, c) { var b = ""; try { var d = RAONKUPLOAD.util._setRaonKUploader(c); d && (KUPLOADTOP.G_CURRKUPLOADER = d, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (b = SelectFile.dirPath)) } catch (g) { } return b }; RAONKUPLOAD.GetDialogFileSize = function(a, c) {
			var b = 0; try {
				var d = RAONKUPLOAD.util._setRaonKUploader(c); d && (KUPLOADTOP.G_CURRKUPLOADER = d, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager &&
					KUPLOADTOP.G_CURRKUPLOADER.frameWin && (b = SelectFile.fileLength))
			} catch (g) { } return b
		}; RAONKUPLOAD.GetDialogFileExt = function(a, c) { var b = ""; try { var d = RAONKUPLOAD.util._setRaonKUploader(c); d && (KUPLOADTOP.G_CURRKUPLOADER = d, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && KUPLOADTOP.G_CURRKUPLOADER.frameWin && (b = SelectFile.fileExt)) } catch (g) { } return b }; RAONKUPLOAD.GetRegValue = function(a, c, b) {
			try {
				var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d && (KUPLOADTOP.G_CURRKUPLOADER = d, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
					var g =
						KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (g) {
							var e = ""; if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var h = function(b) { b = b.split(RAONKSolution.Agent.vertical); var d = b[0]; 1E3 == d ? e = b[1] : 2E3 == d ? e = "" : 2001 == d && h(raonkPatent.GetRegString(a, c)) }; h(raonkPatent.GetRegString(a, c)) } else {
								b = [["kcmd", "KC77"]]; b.push(["kp1", encodeURIComponent("getregstring")]); b.push(["kp2", encodeURIComponent(a)]); b.push(["kp3", encodeURIComponent(c)]); var k = g.setManagerParam("{}", b), k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k),
									h = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a); var b = a.code; a = a.valueArr; 1E3 == b ? (e = a[0], g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == b ? (e = "", g.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == b && g.sendMessageToAgent(k, h, m, !1) }, m = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; g.sendMessageToAgent(k, h, null, !1) }; g.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); g.sendMessageToAgent(k, h, m, !1)
							} return e
						}
				}
			} catch (n) { }
		}; RAONKUPLOAD.SetRegValue = function(a,
			c, b, d) {
				try {
					var g = RAONKUPLOAD.util._setRaonKUploader(d); if (g && (KUPLOADTOP.G_CURRKUPLOADER = g, "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager)) {
						var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (e) if (RAONKUPLOAD.browser.ie && 10 > RAONKUPLOAD.browser.ieVersion) { var h = function(d) { d = d.split(RAONKSolution.Agent.vertical)[0]; 1E3 != d && 2E3 != d && 2001 == d && h(raonkPatent.SetRegString(a, c, b)) }; h(raonkPatent.SetRegString(a, c, b)) } else {
							d = [["kcmd", "KC77"]]; d.push(["kp1", encodeURIComponent("setregstring")]); d.push(["kp2", encodeURIComponent(a)]);
							d.push(["kp3", encodeURIComponent(c)]); d.push(["kp4", encodeURIComponent(b)]); var k = e.setManagerParam("{}", d), k = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(k), h = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a).code; 1E3 == a ? e.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) : 2E3 == a ? e.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER) : 2001 == a && e.sendMessageToAgent(k, h, m, !1) }, m = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; e.sendMessageToAgent(k, h, null, !1) }; e.displayCommonReady(!0,
								KUPLOADTOP.G_CURRKUPLOADER); e.sendMessageToAgent(k, h, m, !1)
						}
					}
				} catch (n) { }
		}; RAONKUPLOAD.GetFileVersion = function(a, c, b, d) {
			try {
				var g = RAONKUPLOAD.util._setRaonKUploader(d); if (g) {
					KUPLOADTOP.G_CURRKUPLOADER = g; var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (e && "1" == KUPLOADTOP.G_CURRKUPLOADER._config.useKManager && (e = KUPLOADTOP.G_CURRKUPLOADER.frameWin)) {
						d = [["kcmd", "KC07"]]; d.push(["kp1", encodeURIComponent(a)]); "," != c && (c = "."); d.push(["kp2", c]); var h = e.setManagerParam("{}", d), h = KUPLOADTOP.RAONKSolution.Agent.makeEncryptManagerParam(h),
							k = function(a) { a = KUPLOADTOP.RAONKSolution.Agent.parseRtn(a); var c = a.code; a = a.valueArr; 1E3 == c ? ("function" == typeof b && b(a[0]), e.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2E3 == c ? ("function" == typeof b && b(""), e.displayCommonReady(!1, KUPLOADTOP.G_CURRKUPLOADER)) : 2001 == c && e.sendMessageToAgent(h, k, m, !1) }, m = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; e.sendMessageToAgent(h, k, null, !1) }; e.displayCommonReady(!0, KUPLOADTOP.G_CURRKUPLOADER); e.sendMessageToAgent(h, k, m, !1)
					}
				}
			} catch (n) { }
		};
	RAONKUPLOAD.SetAgentTempRootDirectory = function(a, c) { try { var b = RAONKUPLOAD.util._setRaonKUploader(c); b && (KUPLOADTOP.G_CURRKUPLOADER = b, KUPLOADTOP.G_CURRKUPLOADER._config.agentTempRootDirectory = a) } catch (d) { } }; RAONKUPLOAD.GetExcelData = function(a, c) { try { var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && "1" == b._config.useKManager) { var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; d && d.selectExcelForImport(a, b) } } catch (g) { } }; RAONKUPLOAD.IsAgentInstalled = function(a) {
		try {
			var c = "http://127.0.0.1:"; -1 < window.location.host.indexOf("127.0.0.1") &&
				(c = "http://localhost:"); var b; if (RAONKUPLOAD.browser.isHttps) { c = c.replace("http:", "https:"); b = ["47337", "47159", "57337", "57338", "57439"]; try { null != window.localStorage.kupload_manager_port2 && "" != window.localStorage.kupload_manager_port2 && (b = [window.localStorage.kupload_manager_port2]) } catch (d) { } } else { b = ["47139", "47317", "57317", "57318", "57419"]; try { null != window.localStorage.kupload_manager_port && "" != window.localStorage.kupload_manager_port && (b = [window.localStorage.kupload_manager_port]) } catch (g) { } } for (var e =
					[], h = [], k = 0; k < b.length; k++)e.push(b[k]), h.push(b[k]); var m = function(a) { for (var b = a.length, c = 0; c < b; c++)a[c].parentNode.removeChild(a[c]), a[c] = void 0 }; (function() {
						for (var b = e.length, d = [], g = 0; g < b; g++) {
							var k = new Image; k.style.display = "none"; k.onload = function(b) {
								return function(c) {
									try {
										var e = d[b].src, e = e.replace("http://", ""), e = e.replace("https://", ""), g = e.substring(e.indexOf(":") + 1, e.length), g = g.substring(0, g.indexOf("/")); RAONKUPLOAD.browser.isHttps ? window.localStorage.kupload_manager_port2 = g : window.localStorage.kupload_manager_port =
											g
									} catch (h) { } m(d); "function" == typeof a && a(!0)
								}
							}(g); k.onerror = function(b) { return function(c) { c = e[b]; for (var g = h.length - 1; 0 <= g; g--)h[g] == c && h.splice(g, 1); 0 == h.length && (m(d), "function" == typeof a && a(!1)) } }(g); d.push(k); document.body.appendChild(k)
						} for (g = 0; g < b; g++)d[g] && (d[g].src = c + e[g] + "/png.png?t=" + RAONKUPLOAD.util.makeGuid())
					})()
		} catch (n) { }
	}; RAONKUPLOAD.IsUpdateRequired = RAONKUPLOAD.isUpdateRequired = function(a, c, b) {
		0 == !!c && (c = "0"); try {
			0 == !!b || "" == b ? b = RAONKUPLOAD.rootPath + "agent/" : "/" != b.substring(b.length -
				1) && (b += "/"); b += "kversion.js?t=" + RAONKUPLOAD.util.getTimeStamp(); var d = RAONKUPLOAD.ajax.load(b), d = d.replace(/\r\n/g, ""), d = d.replace(/\r/g, ""), d = d.replace(/\n/g, ""), d = d.replace(/\s/g, ""), g = d.indexOf('"agent":'), e = d.indexOf('","'), d = d.substring(g + 8, e + 1), d = d.replace(/"/g, ""), d = d.replace(/,/g, "."), h = function(a, b, c, d, e, f) {
					0 == f && RAONKUPLOAD.browser.ie && 10 <= RAONKUPLOAD.browser.ieVersion || RAONKUPLOAD.browser.chrome || RAONKUPLOAD.browser.opera || RAONKUPLOAD.browser.gecko ? (a = {
						req: RAONKUPLOAD._manager.createManagerRequest(),
						async: d ? !0 : !1, errorCallBack: c, successCallBack: b, data: a, url: e
					}, RAONKUPLOAD._manager.sendDataWidthAjax(a)) : (a = { managerParamStr: a, fn_success: b, frameId: RAONKUPLOAD.util.makeGuid(), currUpload: null }, a.url = e, null == b && (a.frameId = RAONKUPLOAD.util.makeGuid()), function(a) {
						document.getElementById(a.frameId) && document.getElementById(a.frameId).parentNode.removeChild(document.getElementById(a.frameId)); var b = document.createElement("iframe"); b.style.display = "none"; b.id = a.frameId; document.body.appendChild(b); var c =
							RAONKUPLOAD.util.getDefaultIframeSrc(); b.src = c; var d = b.contentWindow.document, b = RAONKUPLOAD.util.getDocWindow(d), c = '<!doctype html><html lang="ko">', c = c + "<head>"; RAONKUPLOAD.browser.isCustomDomain(document) && (c += '<script> document.domain = "' + document.domain + '"; \x3c/script>'); c += "</head>"; c += "<body>"; c += '<form id="send_form" target="response_frame" method="post" action="' + a.url + '">'; c += "</form>"; c += '<iframe id="response_frame" name="response_frame"></iframe>'; c += "</body>"; c += "</html>"; d.open("text/html",
								"replace"); d.write(c); d.close(); c = d.createElement("input"); c.type = "hidden"; c.name = "k01"; c.value = a.managerParamStr; d.getElementById("send_form").appendChild(c); d.getElementById("send_form").submit(); RAONKUPLOAD.util.addEvent(b, "message", function(b) { b = RAONKUPLOAD.util.trim(b.data); if ("" != b) { clearInterval(e); try { document.getElementById(a.frameId).parentNode.removeChild(document.getElementById(a.frameId)) } catch (c) { clearInterval(e) } a.fn_success && a.fn_success(b) } }); var e = null; if (a.fn_success) e = setInterval(function() {
									try {
										d.getElementById("response_frame").contentWindow.postMessage("",
											"*")
									} catch (a) { clearInterval(e) }
								}, 100); else try { var f = document.getElementById(a.frameId); setTimeout(function() { f.parentNode.removeChild(f) }, 500) } catch (g) { }
					}(a))
				}; b = "C:\\ProgramData\\RAONWIZ\\RAON K\\raonk.exe"; "xp" == RAONKUPLOAD.UserAgent.os.version.toLowerCase() && (b = "C:\\Documents and Settings\\All Users\\Application Data\\RAONWIZ\\RAON K\\raonk.exe"); var k = '{ "kcmd": "KC07", "kp1": "' + encodeURIComponent(b) + '", "kp2": "."}', m = RAONKSolution.Agent.makeEncryptManagerParam(k), n = ""; if (RAONKUPLOAD.browser.isHttps) {
					n =
					"https://127.0.0.1:"; try { n = window.localStorage.kupload_manager_port2 && "" != window.localStorage.kupload_manager_port2 ? n + (window.localStorage.kupload_manager_port2 + "/") : n + "47337/" } catch (p) { n += "47337/" }
				} else { n = "http://127.0.0.1:"; try { n = window.localStorage.kupload_manager_port && "" != window.localStorage.kupload_manager_port ? n + (window.localStorage.kupload_manager_port + "/") : n + "47317/" } catch (l) { n += "47317/" } } var r = function(b) {
					b = RAONKSolution.Agent.parseRtn(b); var e = b.code; b = b.valueArr; 1E3 == e ? "function" == typeof a &&
						(e = !1, "1" == c ? b[0] != d && (e = !0) : b[0] < d && (e = !0), a(e)) : 2E3 == e ? "function" == typeof a && a(!1) : 2001 == e && h(m, r, q, !1, n, !1)
				}, q = function(a) { KUPLOADTOP.G_CURRKUPLOADER._config.sendToManagerType = "2"; h(m, r, q, !1, n, !0) }; h(m, r, q, !1, n, !1)
		} catch (f) { }
	}; RAONKUPLOAD.SetCustomHeaderByIndex = function(a, c, b) { var d = null; try { var g = RAONKUPLOAD.util._setRaonKUploader(b); if (g) { KUPLOADTOP.G_CURRKUPLOADER = g; var e = KUPLOADTOP.G_CURRKUPLOADER.frameWin; e && (d = e._setCustomHeaderByIndex(a, c)) } } catch (h) { } return d }; RAONKUPLOAD.SetButtonList =
		function(a, c) { try { var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b) { KUPLOADTOP.G_CURRKUPLOADER = b; var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; d && null != a && void 0 != a && "" != a && ("upload" == KUPLOADTOP.G_CURRKUPLOADER._config.mode ? KUPLOADTOP.G_CURRKUPLOADER._config.showButtonBarEdit = a.split(",") : KUPLOADTOP.G_CURRKUPLOADER._config.showButtonBarView = a.split(","), d.setUploadMode(KUPLOADTOP.G_CURRKUPLOADER._config.mode)) } } catch (g) { } }; RAONKUPLOAD.SetSessionKeepUrl = function(a, c, b, d) {
			try {
				var g = RAONKUPLOAD.util._setRaonKUploader(d);
				if (g && (KUPLOADTOP.G_CURRKUPLOADER = g, "" != a && (g.sessionKeepUrl[a] = { auth: {}, pollingTime: 30 }, "object" == typeof c && (g.sessionKeepUrl[a].auth = c), b))) { var e = RAONKUPLOAD.util.parseIntOr0(b); g.sessionKeepUrl[a].pollingTime = e }
			} catch (h) { }
		}; RAONKUPLOAD.SetCloudInfo = function(a, c) {
			try {
				var b = RAONKUPLOAD.util._setRaonKUploader(c); b && (KUPLOADTOP.G_CURRKUPLOADER = b, b._config.cloudInfo = a, b._config.cloudInfo.Type && (b._config.cloudInfo.Type = b._config.cloudInfo.Type), b._config.cloudInfo.AuthMethod && (b._config.cloudInfo.AuthMethod =
					b._config.cloudInfo.AuthMethod), b._config.cloudInfo.AccessKeyID && (b._config.cloudInfo.AccessKeyID = encodeURIComponent(b._config.cloudInfo.AccessKeyID)), b._config.cloudInfo.SecretKey && (b._config.cloudInfo.SecretKey = encodeURIComponent(b._config.cloudInfo.SecretKey)), b._config.cloudInfo.EndPoint && (b._config.cloudInfo.EndPoint = encodeURIComponent(b._config.cloudInfo.EndPoint)), b._config.cloudInfo.Bucket && (b._config.cloudInfo.Bucket = encodeURIComponent(b._config.cloudInfo.Bucket)), b._config.cloudInfo.AuthHeader &&
					(b._config.cloudInfo.AuthHeader = encodeURIComponent(b._config.cloudInfo.AuthHeader)))
			} catch (d) { }
		}; RAONKUPLOAD.GetCloudInfo = function(a) {
			try {
				var c = RAONKUPLOAD.util._setRaonKUploader(a); if (c) return KUPLOADTOP.G_CURRKUPLOADER = c, c._config.cloudInfo.Type && (c._config.cloudInfo.Type = c._config.cloudInfo.Type), c._config.cloudInfo.AuthMethod && (c._config.cloudInfo.AuthMethod = c._config.cloudInfo.AuthMethod), c._config.cloudInfo.AccessKeyID && (c._config.cloudInfo.AccessKeyID = decodeURIComponent(c._config.cloudInfo.AccessKeyID)),
					c._config.cloudInfo.SecretKey && (c._config.cloudInfo.SecretKey = decodeURIComponent(c._config.cloudInfo.SecretKey)), c._config.cloudInfo.EndPoint && (c._config.cloudInfo.EndPoint = decodeURIComponent(c._config.cloudInfo.EndPoint)), c._config.cloudInfo.Bucket && (c._config.cloudInfo.Bucket = decodeURIComponent(c._config.cloudInfo.Bucket)), c._config.cloudInfo.AuthHeader && (c._config.cloudInfo.AuthHeader = decodeURIComponent(c._config.cloudInfo.AuthHeader)), c._config.cloudInfo
			} catch (b) { }
		}; RAONKUPLOAD.SetImageMultiThumnail =
			function(a, c) { try { var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b && (KUPLOADTOP.G_CURRKUPLOADER = b, KUPLOADTOP.G_CURRKUPLOADER._config.imageMultiThumnail = a, KUPLOADTOP.G_CURRKUPLOADER._config.imageMultiThumnail)) for (var d = KUPLOADTOP.G_CURRKUPLOADER._config.imageMultiThumnail.thumnail, g = d.length, b = 0; b < g; b++)d[b].id = encodeURIComponent(d[b].id) } catch (e) { } }; RAONKUPLOAD.SetMultiFileSelect = function(a, c) {
				try {
					var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b) {
						KUPLOADTOP.G_CURRKUPLOADER = b; var d = b.frameWin.document.getElementById("file_" +
							b.TagID); "0" == b._config.useKManager && (0 == a ? d.removeAttribute("multiple") : (d.removeAttribute("multiple"), d.setAttribute("multiple", a))); b._config.multiFileSelect = a
					}
				} catch (g) { }
			}; RAONKUPLOAD.StartAgentInstall = function(a) { try { var c = RAONKUPLOAD.util._setRaonKUploader(a); c && (KUPLOADTOP.G_CURRKUPLOADER = c, KUPLOADTOP.G_CURRKUPLOADER.frameWin.startAgentInstall(c, { isApi: !0 })) } catch (b) { } }; RAONKUPLOAD.AddRAONKFileObject = function(a, c) {
				try {
					var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b) {
						KUPLOADTOP.G_CURRKUPLOADER =
						b; var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d && 0 != d.isExecuteApi() && "object" == typeof a && a.length) for (var g = 0, e = a.length, h; g < e; g++)if (h = a[g], "1" == h.isWebFile) RAONKUPLOAD.AddUploadedFileEw(h.uniqKey, h.originalName, h.uploadPath, h.size, h.customValue, b.ID); else if ("1" == b._config.useKManager) { var k = { name: d.getFileName(h.localPath, !1), type: "", uniqValue: "", isFolder: "0", localPath: h.localPath, size: KUPLOADTOP.RAONKUPLOAD.util.parseIntOr0(h.size), subFolderCount: "", fileCount: "" }; d.fileHandler([k], "", "") } else d.fileHandler([h.fileObject],
							h.localPath, "", "")
					}
				} catch (m) { }
			}; RAONKUPLOAD.GetImageDownSize = function(a, c) {
				try {
					var b = RAONKUPLOAD.util._setRaonKUploader(c); if (b) {
						KUPLOADTOP.G_CURRKUPLOADER = b; var d = KUPLOADTOP.G_CURRKUPLOADER.frameWin; if (d && a && a.targetFiles) {
							RAONKUPLOAD.ResetUpload(c); var g = a.targetFiles; d._convertImgIdxAry = []; d.G_DONOTSTARTUPLOAD = !0; d.G_ImageQualityEndCallBack = function() {
								d.G_DONOTSTARTUPLOAD = !1; var b = RAONKUPLOAD.GetListInfo("array", c).newFile; if (b && b.length === d._convertImgIdxAry.length) for (var e = b.length, h; 0 < e; e--)h =
									d._convertImgIdxAry.pop(), g.splice(h, 0, [b[e - 1].fileObject]), g.splice(h + 1, 1), g[h][0].rDown = !0; "function" === typeof a.callBack && a.callBack(g)
							}; for (var b = 0, e = a.targetFiles.length, h; b < e; b++)(h = a.targetFiles[b][0]) && 0 === h.type.indexOf("image") && parseInt(h.size, 10) >= parseInt(KUPLOADTOP.G_CURRKUPLOADER._config.imageQuality.overFileSize, 10) && "undefined" === typeof h.rDown && (d.fileHandler(a.targetFiles[b], a.targetFiles[b].name, ""), d._convertImgIdxAry.push(b)); 0 < d._convertImgIdxAry.length ? (d.startUpload(), window.setTimeout(function() { d.startUpload() },
								500)) : d.G_ImageQualityEndCallBack()
						}
					}
				} catch (k) { }
			}; RAONKUPLOAD.SetOriginalFileName = function(a, c, b) {
				try {
					var d = RAONKUPLOAD.util._setRaonKUploader(b); if (d) {
						KUPLOADTOP.G_CURRKUPLOADER = d; var g = KUPLOADTOP.G_CURRKUPLOADER.frameWin; 0 < g.RESULTFILELIST.length && (isNaN(Number(a)) || (c.match(/[\\\/:*?\"<>|]/gi) ? alert(g.RAONKUpload_Lang.message_not_allow_file_name) : "html5" != KUPLOADTOP.G_CURRKUPLOADER._config.userRunTimeMode && "html4" != KUPLOADTOP.G_CURRKUPLOADER._config.userRunTimeMode || g.setOriginalFileName(parseInt(a,
							10), c)))
					}
				} catch (e) { }
			}
}
function kupload_user_config() {
	return {
		RootPath: "", InitXml: "", InitServerXml: "", InitVisible: !0, SkinName: "", Width: "", Height: "", Lang: "", HeaderBar: "", StatusBar: "", ButtonBar: "", ButtonBarEdit: "", ButtonBarView: "", BorderStyle: "", MaxTotalFileCount: "", MaxTotalFileSize: "", MaxOneFileSize: "", MultiFileSelect: "", ExtensionAllowOrLimit: "", ExtensionArr: "", Mode: "", Views: "", Runtimes: "", RunTimes: "", UseWS: "", FolderNameRule: "", CustomHeaderColor: "", CustomFooterColor: "", CustomProgressBarColor: "", CustomTextColor: "", CustomWebFileColor: "",
		UploadHolder: "", ResumeUpload: "", ResumeDownload: "", FolderTransfer: "", GetFolderInFile: "", UseAddEvent: "", UseBeforeAddEvent: "", UseAfterAddEvent: "", UseAfterAddEndTimeEvent: "", UseAfterAddAllEvent: "", UseDeleteEvent: "", UseBeforeDeleteEvent: "", UseDeleteAfterEvent: "", UseAfterDeleteEvent: "", UseDeleteEndTimeEvent: "", UseDeleteAllEvent: "", UseOpenEvent: "", UseBeforeOpenEvent: "", UseDownloadEvent: "", UseBeforeDownloadEvent: "", UseAfterDownloadEvent: "", UseDownloadCompleteEvent: "", UseFinishDownloadedEvent: "", UseDownloadCompleteAllEvent: "",
		UseUploadingCancelEvent: "", UseAfterMoveFileEvent: "", UseExcuteDownloadInMobile: "", Timeout: "", AutomaticConnection: "", ShowFolderView: "", IgnoreSameUploadName: "0", HandlerUrl: "", DownloadHandlerUrl: "", ProcessHandlerUrl: "", MessageTitle: "", UseScriptEventControl: "", DevelopLangage: "", ShowCheckBox: "", HideContextMenu: "", SizeColumnWidth: "", UnitDelimiter: "", UnitAttributeDelimiter: "", DownloadMulti: "", CssRootPath: "", ViewerHandlerUrl: "", UseAutoHeight: "", RemoveContextItem: "", DisableDeleteConfirmMessage: "", DisplayFileSizeHtml4: "",
		ListViewDbclick: "", ListViewDragAndDrop: "", HideListInfo: "", NTLM: "", LargeFiles: "", CacheProtectMode: "", UseFileSort: "", FileSortField: "", FileSortAscDesc: "", AutoSort: "", ShowEditAlign: "", ShowViewAlign: "", FileMoveContextMenu: "", CompleteEventResetUse: "", ImgPreView: "", ImgPreViewWidth: "", ImgPreViewHeight: "", StatusBarShowLimit: "", StatusBarShowStatus: "", ButtonBarPosition: "", UserMessage: "", UseSingleSelect: "", DisableAlertMessage: {
			Duplication: "", DeleteUnchosen: "", DownloadUnchosen: "", OpenUnchosen: "", DisableDeleteConfirm: "",
			FileExtensionDetect: "", FileMaxCountAdd: "", OpenFileTransfer: ""
		}, AllowedZeroFileSize: "", ChunkSize: "", MaxChunkSize: "", FileNameRule: "", FileNameRuleEx: null, AsyncUpload: "", SilentUpload: "", SilentDownload: "", SilentDownloadEx: "", ProductKey: "", LicenseKey: "", LicenseKeyHtml5: "", Security: { EncryptParam: "", FileExtensionDetector: "", FileIntegrity: "", FileIntegrityUpload: "", FileIntegrityDownload: "", FileEncrypt: "", DeleteOpenFile: "" }, HighSpeed: "", SizeForChunkUpload: "", HeaderBarItem: "", HeaderBarItemWidth: "", HeaderBarItemAlign: "",
		HeaderBarItemSetTitle: "", WsWorkerCount: "", WsWorkerJobSize: "", WsMinSingleWorkerSize: "", UploadTransferWindow: { View: "", ViewWidth: "", ViewHeight: "", ButtonType: "", HideDownloadedPath: "", UISetting: { Width: "", SystemTitleUpload: "", SystemTitleDownload: "", SystemTitleFontFamily: "", SystemTitleFontSize: "", SystemTitleFontBold: "", UserColor: "", FileListView: "", FileListStatusAlign: "", UseSetting: "", SpeedText: "", SpeedTextDesc: "", ViewTheme: "" }, ViewFilesInFolder: "" }, PluginInstallType: "", PluginInstallUrl: "", DefaultDownloadPath: "",
		TransferOpenFile: "", SelectByClicked: "", SavePathSetting: "", TransferBackgroundStyle: "", UseDropzone: "", AllowOpenExtension: "", FileFilterEx: "", ImageQuality: "", UseZipDownload: "", ManagerUploadWindowMode: "", ManagerDownloadWindowMode: "", DialogWindow: null, AllowedRealtimeDownloadAdd: "", AgentTransferWindowItemCount: "", AutoDestroy: "", SkipSentFile: "", ForceOverwrite: "", Event: {
			OnError: null, CreationComplete: null, BeforeUpload: null, UploadComplete: null, MultiUploadComplete: null, TransferComplete: null, BeforeDownloadFile: null,
			DownloadCompleteFile: null, DownloadCompleteAllFile: null, ExcuteDownloadFile: null, BeforeOpenFile: null, BeforeAddFile: null, AfterAddFile: null, AfterAddAllFile: null, BeforeDeleteFile: null, AfterDeleteFile: null, DeleteAllFile: null, SelectItem: null, AfterMoveFile: null, UploadingCancel: null, DownloadCancel: null, CustomAction: null, OnLanguageDefinition: null, Alert: null, AgentInstall: null, MultipleAccessEvent: null, ExtendFunction: null, UnselectItem: null
		}, EmptyDownloadFileText: "", EmptyDownloadFileTextColor: "", EmptyDownloadFileTextBold: "",
		EmptyDownloadFileTextItalic: "", EmptyDownloadFileTextUnderline: "", EmptyDownloadFileTextStrike: "", ZIndex: "", UseSingleDownloadDialog: "", UseDbclickOpen: "", ZipFileName: "", DisableMultiFileSelectInMobile: "", UseHashExtract: "", UseAgentLog: "", UseKManagerEncodingUrl: "", AgentBandwidth: "", UseAdminConfig: "", UseAdminLog: "", AgentMultiTransferCount: "", AgentMultiDownloadCount: "", AgentMultiUploadCount: "", DropZoneTransparency: "", AgentHttps: "", CheckNetworkSpeed: "", UseCompressTransfer: "", AgentCompressBufferSize: "", AgentIntelligentCompressValue: "",
		AgentAutoDecompression: "", DirectDownload: "", AgentAdmin: { ChunkSize: "", RequestCount: "", MultiTransferCount: "", InternetOpenType: "", BufferSize: "", BufferSizeUpload: "", BufferSizeDownload: "", Timeout: "", DownloadFileNameSuffix: "", SystemCode: "", SmartRequestSize: "" }, UseInstallGuide: "", InstallGuideZIndex: "", InstallGuideLogoUrl: "", UseAutoInstall: "", UseAgentInstallGuide: "", AgentInstallGuideZIndex: "", AgentInstallGuideLogoUrl: "", AgentInstallFileUrl: "", AgentInstallFileUrl2: "", AgentInstallFolderUrl: "", MoveMouseDrag: "",
		CookieWindow: null, ApplyAgentOs: "", EnforceHtml5: "", EnforceDocumentDomain: "", ExtendFunction: "", SkipInternetState: "", FileOpenDialogTitle: "", FileOpenDialogType: "", FileSaveDialogTitle: "", FolderSelectDialogTitle: "", FolderSelectDialogButtonName: "", FolderSelectDialogType: "", AgentCommunicationMethod: "", TrustSites: "", ShowTrayIcon: "", AgentTempRootDirectory: "", AgentEventInterval: "", AgentEventType: "", AgentEventWaitTime: "", AutoRecoveryTransfer: "", AutoRecoveryId: "", AutoTransfer: "", UserCssUrl: "", AllowDuplicationFile: "",
		SessionKeep: { Use: "", Url: "", RetryTime: "" }, DisableChunkUpload: "", DisableChunkDownload: "", UseBrowserUseragent: "", TransferProcess: "", UseWebfileThumbnailView: "", UseKMonitoring: "", KMonitorUrl: "", KMonitorPartUrl: "", KMonitorPollingTime: "", KMonitorSkipCachedBandwidth: "", EnableAdminLog: "", DEXT5Install: "", UseWorkingImg: {
			UseUploadPre: "", UploadPreImage: "", UploadPreCaption: "", UploadPreUseOnce: "", UseUploadEnd: "", UploadEndImage: "", UploadEndCaption: "", UploadEndUseOnce: "", UseDownloadPre: "", DownloadPreImage: "", DownloadPreCaption: "",
			DownloadPreUseOnce: "", UseDownloadEnd: "", DownloadEndImage: "", DownloadEndCaption: "", DownloadEndUseOnce: ""
		}, ThumbsSize: "", ThumbsViewMode: "", CloudInfo: {}, UseZipInspector: "", ImageMultiThumnail: "", AgentInstallFailCheck: null, AgentTransferType: "", DownloadHybridApp: "", MultipleAccessCheck: { Use: "", ExcludeCI: "", CallUrl: "", CheckInterval: "" }, UseCompressTransferHtml5: "", PluginVersion: "", AgentRequestCount: "", AgentChunkSize: "", UseSWorkConnect: "", DragAndDropMode: "", UseDownloadCache: "", MobileSelectImage: "", AgentEventMethod: "",
		DisableLastNotify: "", EnableAgentShortcut: "", UseFormDataInRangeInfo: "", UseWirelessMode: "", UseLocalFileDownload: "", ShowConfirmLocalFileDownload: "", AutoRenameLocalFileDownload: "", ShowProgressLocalFileDownload: "", AlertToEvent: "", AgentDownloadMethod: "", DownloadSkipCheckWithFileSize: "", PreCheckFileExistInDownload: "", ReportFailedList: ""
	}
}
function RAONKUpload_Config(a) {
	"" != a.RootPath && (RAONKUPLOAD.rootPath = a.RootPath); RAONKUPLOAD.rootPath = RAONKUPLOAD.util.set_handlerUrl(RAONKUPLOAD.rootPath); this.licenseKeyHtml5 = this.licenseKey = this.productKey = ""; this.webPath = {
		image: RAONKUPLOAD.rootPath + "images/", skin: RAONKUPLOAD.rootPath + "images/skin/", page: RAONKUPLOAD.rootPath + "pages/", js: RAONKUPLOAD.rootPath + "js/", jsDev: RAONKUPLOAD.rootPath + "js_dev/", lang: RAONKUPLOAD.rootPath + "js/lang/", langDev: RAONKUPLOAD.rootPath + "js_dev/lang/", css: RAONKUPLOAD.rootPath +
			"css/", cssDev: RAONKUPLOAD.rootPath + "css_dev/", config: RAONKUPLOAD.rootPath + "config/", plugin: RAONKUPLOAD.rootPath + "plugin/", manager: RAONKUPLOAD.rootPath + "agent/", installGuide: RAONKUPLOAD.rootPath + "agent/installguide/raonk_setup.html"
	}; this.initVisible = !0; this.configUrl = this.webPath.config + "raonkupload.config.xml"; this.skinName = "bluegray"; this.customTextColor = this.customProgressBarColor = this.customFooterColor = this.customHeaderColor = ""; this.customWebFileColor = "#f9f5f5"; this.width = "500px"; this.height =
		"316px"; this.minHeight = 120; this.statusBarHeight = 26; this.buttonBarHeight = 34; this.minHeaderBarHeight = 28; this.originHeight = "316px"; this.customHeaderHeight = "28"; this.lang = "ko-kr"; this.managerLang = "auto"; this.isCrossDomain = !1; this.maxOneFileSize = this.maxTotalFileCount = this.maxTotalFileSize = 0; this.useLogoImage = { use: "0", logoPath: this.webPath.image + "raonklogo.png", logoVer: "" }; this.hideListInfo = "0"; this.extension = { allowOrLimit: "1", extArr: [], extToString: "", mimeAccept: "" }; this.showHeaderBarOrg = this.showHeaderBar =
			this.showStatusBar = "1"; this.showButtonBarEdit = []; this.showButtonBarView = []; this.uploadBorderStyle = "none"; this.multiFileSelect = !0; this.listViewDragAndDrop = this.listViewDbclick = "1"; this.mode = "upload"; this.views = "list"; this.canvasWidth = 88; this.canvasHeight = 60; this.userRunTimeMode = "html5"; this.managerParam = ""; this.managerDownloadWindowMode = this.managerUploadWindowMode = "0"; this.developLang = "NET"; this.handlerUrl = RAONKUPLOAD.rootPath + "handler/raonkhandler.ashx"; this.processHandlerUrl = this.downloadHandlerUrl =
				""; this.viewerUrl = RAONKUPLOAD.rootPath + "handler/raonkviewer.aspx"; this.folderNameRule = ""; this.fileNameRule = "GUID"; this.fileNameRuleEx = "_"; this.asyncUpload = !0; this.chunkSize = 1048576; this.maxChunkSize = 0; this.getFolderInFile = this.folderTransfer = this.resumeDownload = this.resumeUpload = "0"; this.useAfterMoveFileEvent = this.useFinishDownloadedEvent = this.useAfterDownloadEvent = this.useAfterAddEndTimeEvent = this.useAfterAddEvent = this.useDownloadEvent = this.useUploadingCancelEvent = this.useOpenEvent = this.useDeleteEndTimeEvent =
					this.useDeleteAfterEvent = this.useDeleteEvent = this.useAddEvent = "1"; this.useExcuteDownloadInMobile = "0"; this.addExtIcon = []; this.isPause = !1; this.automaticConnection = this.timeout = "0"; this.showFolderView = "1"; this.messageTitle = "RAON K"; this.useScriptEventControl = "1"; this.uploadCancel = !1; this.showCheckBox = "1"; this.hideContextMenu = "0"; this.sizeColumnWidth = "100"; this.unitDelimiter = "\x0B"; this.unitAttributeDelimiter = "\f"; this.trans_unitDelimiter = "\x0B"; this.trans_unitAttributeDelimiter = "\f"; this.useAutoHeight =
						this.downloadMulti = "0"; this.removeContextItem = ""; this.displayFileSizeHtml4 = this.disableDeleteConfirmMessage = "0"; this.NTLM = ""; this.largeFiles = { markSize: 0, maxCount: 0, maxTotalSize: 0, text: "", color: "", markBaseTotalSize: 0, customMode: 0 }; this.cacheProtectMode = "0"; this.use_file_sort = "1"; this.auto_sort = this.sort_ascdesc = this.sort_field = "0"; this.showViewAlign = this.showEditAlign = "left"; this.imgPreView = this.completeEventResetUse = this.fileMoveContextMenu = "0"; this.imgPreViewHeight = this.imgPreViewWidth = "100px"; this.statusBarShowStatus =
							this.statusBarShowLimit = "1"; this.buttonBarPosition = "buttom"; this.userMessage = { edit: "", view: "" }; this.useSingleSelect = "0"; this.disableAlertMessage = { duplication: "1", deleteUnchosen: "1", downloadUnchosen: "1", openUnchosen: "1", disableDeleteConfirm: "0", fileExtensionDetect: "0", fileMaxCountAdd: "0" }; this.silentDownloadEx = this.silentDownload = this.silentUpload = this.allowedZeroFileSize = "0"; this.security = {
								encryptParam: "0", fileExtensionDetector: "0", fileIntegrity: "0", fileIntegrityUpload: "", fileIntegrityDownload: "",
								fileEncrypt: "0", deleteOpenFile: "0", keyValue: RAONKUPLOAD.ReleaseVer.substring(0, 11)
							}; this.sizeForChunkUpload = this.highSpeed = "0"; this.headerBarItem = []; this.headerBarItemWidth = []; this.headerBarItemAlign = []; this.headerBarItemSetTitle = []; this.uploadTransferWindow = {
								view: "1", viewWidth: "470px", viewHeight: "170px", buttonType: 0, hideDownloadedPath: 0, uiSetting: {
									width: "", systemTitleUpload: "", systemTitleDownload: "", systemTitleFontFamily: "", systemTitleFontSize: "", systemTitleFontBold: "", userColor: "", fileListView: "",
									fileListStatusAlign: "", useSetting: "", speedText: "", speedTextDesc: "", viewTheme: ""
								}, viewFilesInFolder: "0"
							}; this.defaultDownloadPath = "#|"; this.transferOpenFile = "1"; this.selectByClicked = "0"; this.savePathSetting = ""; this.transferBackgroundStyle = "filter:alpha(opacity=50); opacity:0.5; -moz-opacity:0.5; -ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=50); -khtml-opacity: 0.5; background-color:black;"; this.useDropzone = "0"; this.allowOpenExtension = ""; this.fileFilterEx = "*.*"; this.imageQuality = {
								quality: 1,
								workerCount: 7, extension: "", changedExtension: "jpg", allowOrLimit: "1", overFileSize: "0", processingWindow: "0"
							}; this.useZipDownload = "0"; this.allowedRealtimeDownloadAdd = 1; this.managerShowItemCount = 5; this.forceOverwrite = this.skipSentFile = this.autoDestroy = "0"; this.event = {
								onError: null, creationComplete: null, beforeUpload: null, uploadComplete: null, multiUploadComplete: null, transferComplete: null, beforeDownloadFile: null, downloadCompleteFile: null, downloadCompleteAllFile: null, excuteDownloadFile: null, beforeOpenFile: null,
								beforeAddFile: null, afterAddFile: null, afterAddAllFile: null, beforeDeleteFile: null, afterDeleteFile: null, deleteAllFile: null, selectItem: null, afterMoveFile: null, uploadingCancel: null, downloadCancel: null, customAction: null, onLanguageDefinition: null, alert: null, agentInstall: null, multipleAccessEvent: null, extendFunction: null, unselectItem: null
							}; this.emptyDownloadFileText = ""; this.emptyDownloadFileTextColor = "#000000"; this.emptyDownloadFileTextStrike = this.emptyDownloadFileTextUnderline = this.emptyDownloadFileTextItalic =
								this.emptyDownloadFileTextBold = "0"; this.workerSupported = 0 == RAONKUPLOAD.browser.ie && "Worker" in window; this.zIndex = 1E3; this.useSingleDownloadDialog = "0"; this.interworkingModuleThird = this.interworkingModuleSecond = this.interworkingModuleFirst = null; this.useServerLicense = !1; this.useDbclickOpen = "1"; this.zipFileName = "download.zip"; this.useHashExtract = this.DisableMultiFileSelectInMobile = "0"; this.useAgentLog = this.useKManager = "1"; this.useAdminLog = this.useAdminConfig = this.agentBandwidth = this.useKManagerEncodingUrl =
									"0"; this.agentMultiUploadCount = this.agentMultiDownloadCount = this.agentMultiTransferCount = "1"; this.agentAdmin = { chunkSize: 0, requestCount: "0", multiTransferCount: "0", internetOpenType: "0", bufferSize: "0", bufferSizeUpload: "", bufferSizeDownload: "", timeout: "0", downloadFileNameSuffix: "", systemCode: "", smartRequestSize: "" }; this.dialogWindow = null; this.managerPortArr = ["47317", "47139", "57317", "57318", "57419"]; this.managerHttpsPortArr = ["47337", "47159", "57337", "57338", "57439"]; this.sendToManagerType = "1"; -1 < RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("windows") &&
										-1 < RAONKUPLOAD.UserAgent.browser.name.toLocaleLowerCase().indexOf("safari") && (this.sendToManagerType = "2"); "1" == this.sendToManagerType && RAONKUPLOAD.browser.ie && 9 >= RAONKUPLOAD.browser.ieVersion && (this.sendToManagerType = "2"); this.dropZoneTransparency = 1; this.agentHttps = !1; this.agentCompressBufferSize = this.useCompressTransfer = this.checkNetworkSpeed = "0"; this.agentIntelligentCompressValue = "15"; this.agentAutoDecompression = "0"; this.directDownload = !1; this.useInstallGuide = "0"; this.installGuideZIndex = 1E3; this.installGuideLogoUrl =
											""; this.useAutoInstall = "1"; this.agentInstallFileName = "raonkSetup.exe"; this.agentInstallFileUrl2 = this.agentInstallFileUrl = this.agentInstallFileName2 = ""; this.agentInstallFolderUrl = this.webPath.manager; this.moveMouseDrag = 0; this.cookieWindow = parent.parent; this.applyAgentOs = ",windows,"; this.enforceHtml5 = "0"; this.extendFunction = []; this.skipInternetState = "1"; this.fileOpenDialogTitle = ""; this.fileOpenDialogType = "0"; this.folderSelectDialogButtonName = this.folderSelectDialogTitle = this.fileSaveDialogTitle = "";
	this.agentCommunicationMethod = this.folderSelectDialogType = "0"; this.trustSites = ""; this.showTrayIcon = "1"; this.agentTempRootDirectory = ""; this.agentEventInterval = 300; this.agentEventType = "1"; this.autoRecoveryTransfer = "0"; this.autoRecoveryId = this.agentEventWaitTime = ""; this.autoTransfer = "1"; this.userCssUrl = ""; this.allowDuplicationFile = "0"; this.sessionKeep = { use: "0", url: RAONKUPLOAD.rootPath + "handler/raonksession.aspx", retryTime: "30", requestFlag: !1 }; this.disableChunkDownload = this.disableChunkUpload = "0"; this.useBrowserUseragent =
		"1"; this.transferProcess = ""; this.useWebfileThumbnailView = "1"; this.useKMonitoring = "0"; this.kMonitorUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.ashx"; this.kMonitorPartUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.ashx"; this.kMonitorPollingTime = ""; this.kMonitorSkipCachedBandwidth = "1"; this.enableAdminLog = "0"; this.dext5Install = "1"; this.useWorkingImg = {
			use: [0, 0, 0, 0], useOnce: [0, 0, 0, 0], caption: ["Processing on server", "Processing on server", "Processing on server", "Processing on server"], image: [this.webPath.image +
				"process_mini.gif", this.webPath.image + "upload_end.gif", this.webPath.image + "download_pre.gif", this.webPath.image + "process_mini.gif"]
		}; this.thumbsSize = ""; this.thumbsViewMode = "0"; this.cloudInfo = { Use: "0" }; this.sworkInfo = null; this.useZipInspector = "0"; this.imageMultiThumnail = null; this.agentInstallFailCheck = { use: "0", time: 30, stopInstallCheck: !1 }; this.agentTransferType = 0; this.downloadHybridApp = "0"; this.multipleAccessCheck = { use: "0", excludeCI: "", callUrl: "", checkInterval: 0 }; this.useSWorkConnect = "0"; this.dragAndDropMode =
			"1"; this.mobileSelectImage = this.useDownloadCache = "0"; this.agentEventMethod = "1"; this.disableLastNotify = "0"; this.enableAgentShortcut = "1"; this.auditLogEnable = null; this.useFormDataInRangeInfo = "1"; this.useWirelessMode = ""; this.useLocalFileDownload = "0"; this.alertToEvent = this.showProgressLocalFileDownload = this.autoRenameLocalFileDownload = this.showConfirmLocalFileDownload = ""; this.agentDownloadMethod = 0; this.reportFailedList = this.preCheckFileExistInDownload = this.downloadSkipCheckWithFileSize = "0"
}
function RAONKUpload(a) {
	var c = a.Id, b = new kupload_user_config, d; for (d in a) a.hasOwnProperty(d) && (b[d] = a[d]); void 0 == c && (c = RAONKUPLOAD.util.makeGuidTagName("raonkupload_")); RAONKUPLOAD.CUploadID = c; a = RAONKUPLOAD.util.isExistUploaderName(c, b); if (1 == a) alert("uploader's name is empty. Please, check uploader's name"); else {
		if (2 == a) if ("1" == b.IgnoreSameUploadName) c = RAONKUPLOAD.util.getNewNextUploaderName(c); else { 
("uploader's name is already exist. Please, check uploader's name"); return } 3 != a && (RAONKUPLOAD.RAONKMULTIPLEID.push(c),
			RAONKUPLOAD.RAONKMULTIPLE["raonkuploader_frame_" + c] = c, RAONKUPLOAD.RAONKHOLDER[c] = b.UploadHolder); this.frameID = "raonkuploader_frame_" + c; this.ID = c; try { null == RAONKUPLOAD.UserConfigHashTable && (RAONKUPLOAD.UserConfigHashTable = new RAONKUPLOAD.util.hashTable), b.Id = c, RAONKUPLOAD.UserConfigHashTable.setItem(c, b) } catch (g) { } b.XhrWithCredentials && (RAONKUPLOAD.ajax.xhrWithCredentials = !0); var e = new RAONKUpload_Config(b); b.DialogWindow && (e.dialogWindow = b.DialogWindow); if (0 < b.InitServerXml.length) if (-1 < b.InitServerXml.indexOf("f=")) try {
				var h =
					b.InitServerXml.split("?"), k = h[0], m = h[1].split("&"), n = m.length; a = ""; d = "&"; for (h = 0; h < n; h++) { var p = m[h].split("="); "f" == p[0] ? a = p[1] : d += p[0] + "=" + p[1] } var l = "kc" + RAONKSolution.Agent.formfeed + "c21" + RAONKSolution.Agent.vertical, l = l + ("k14" + RAONKSolution.Agent.formfeed + a), l = RAONKUPLOAD.util.makeEncryptParam(l); e.configUrl = k + "?k00=" + l; 1 < d.length && (e.configUrl += d)
			} catch (r) { alert("Error occurred reading the Upload Settings") } else { alert("Error occurred reading the Upload Settings"); return } else 0 < b.InitXml.length &&
				(0 == b.InitXml.indexOf("http") ? e.configUrl = b.InitXml : e.configUrl = RAONKUPLOAD.rootPath + "config/" + b.InitXml); e.configUrl = RAONKUPLOAD.util.set_handlerUrl(e.configUrl); -1 < e.configUrl.indexOf("?") ? e.configUrl += "&t=" + RAONKUPLOAD.util.getTimeStamp() : e.configUrl += "?t=" + RAONKUPLOAD.util.getTimeStamp(); l = null; l = 0 < b.InitServerXml.length ? RAONKUPLOAD.ajax.load(e.configUrl) : RAONKUPLOAD.ajax.loadXml(e.configUrl); if (null == l) alert("Error occurred reading the Upload Settings"); else {
					"object" == typeof l ? "" == l.xml && (l =
						RAONKUPLOAD.ajax.load(e.configUrl), l = RAONKUPLOAD.util.stringToXML(l)) : (0 < b.InitServerXml.length && (l = RAONKUPLOAD.util.parseDataFromServer(l)), 0 == l.indexOf("[OK]") ? (0 == l.indexOf("[OK]") && (l = l.substring(4), l = RAONKUPLOAD.util.makeDecryptReponseMessage(l)), l = l.substring(l.indexOf("<?")), l = RAONKUPLOAD.util.stringToXML(l)) : 0 == l.indexOf("[FAIL]") ? alert("Error occurred reading the Upload Settings") : (l = RAONKUPLOAD.util.stringToXML(l)) || alert("Error occurred reading the Upload Settings")); var q = RAONKUPLOAD.util.xml.getAllNodes(l),
							f = { "JS|InterworkingModuleFirst": { config: "interworkingModuleFirst" }, "JS|InterworkingModuleSecond": { config: "interworkingModuleSecond" }, "JS|InterworkingModuleThird": { config: "interworkingModuleThird" }, "JS|InitVisible": { config: "initVisible", configFn: function(a) { 0 == a && (e.initVisible = a) } } }; f["XML|license.product_key"] = f["JS|ProductKey"] = { config: "productKey" }; f["XML|license.license_key"] = f["JS|LicenseKey"] = { config: "licenseKey" }; f["XML|license.license_key_html5"] = f["JS|LicenseKeyHtml5"] = { config: "licenseKeyHtml5" };
					f["XML|uploader_setting.high_speed"] = f["JS|HighSpeed"] = { config: "highSpeed" }; f["XML|uploader_setting.develop_langage"] = f["JS|DevelopLangage"] = { config: "developLang" }; f["XML|uploader_setting.download_handler_url"] = f["JS|DownloadHandlerUrl"] = { config: "downloadHandlerUrl" }; f["XML|uploader_setting.process_handler_url"] = f["JS|ProcessHandlerUrl"] = { config: "processHandlerUrl" }; f["XML|uploader_setting.folder_name_rule"] = f["JS|FolderNameRule"] = { config: "folderNameRule" }; f["XML|uploader_setting.file_name_rule"] =
						f["JS|FileNameRule"] = { config: "fileNameRule" }; f["XML|uploader_setting.file_name_rule_ex"] = f["JS|FileNameRuleEx"] = { config: "fileNameRuleEx", allowEmpty: !0, jsFn: function(a) { null != a && (this.inEmpty = !0); return a }, configFn: function(a) { if ("" == a || "#" == a || "i" == a || "_" == a) return a } }; f["XML|uploader_setting.async_upload"] = f["JS|AsyncUpload"] = { config: "asyncUploadTemp", configFn: function(a) { e.asyncUpload = "0" == a ? !1 : !0; return a } }; f["XML|uploader_setting.max_chunk_size"] = f["JS|MaxChunkSize"] = {
							config: "maxChunkSize", configFn: function(a) {
								var b =
									RAONKUPLOAD.util.getUnit(a), b = RAONKUPLOAD.util.getUnitSize(b); return parseInt(a, 10) * b
							}
						}; f["XML|uploader_setting.size_for_chunk_upload"] = f["JS|SizeForChunkUpload"] = { config: "sizeForChunkUpload", configFn: function(a) { var b = RAONKUPLOAD.util.getUnit(a), b = RAONKUPLOAD.util.getUnitSize(b); return parseInt(a, 10) * b } }; f["XML|uploader_setting.disable_chunk_upload"] = f["JS|DisableChunkUpload"] = { config: "disableChunkUpload" }; f["XML|uploader_setting.disable_chunk_download"] = f["JS|DisableChunkDownload"] = { config: "disableChunkDownload" };
					f["XML|uploader_setting.use_browser_useragent"] = f["JS|UseBrowserUseragent"] = { config: "useBrowserUseragent" }; f["XML|uploader_setting.transfer_process"] = f["JS|TransferProcess"] = { config: "transferProcess" }; f["XML|setting.skin_name"] = f["JS|SkinName"] = { config: "skinName" }; f["XML|setting.enforce_document_domain"] = f["JS|EnforceDocumentDomain"] = { config: "EnforceDocumentDomainTemp", configFn: function(a) { RAONKUPLOAD.EnforceDocumentDomain = "1" == a ? !0 : !1; return a } }; f["XML|setting.skin_name@color1"] = f["JS|CustomHeaderColor"] =
						{ config: "customHeaderColor" }; f["XML|setting.skin_name@color2"] = f["JS|CustomFooterColor"] = { config: "customFooterColor" }; f["XML|setting.skin_name@color3"] = f["JS|CustomProgressBarColor"] = { config: "customProgressBarColor" }; f["XML|setting.skin_name@text_color"] = f["JS|CustomTextColor"] = { config: "customTextColor" }; f["XML|setting.skin_name@webfile_color"] = f["JS|CustomWebFileColor"] = { config: "customWebFileColor" }; f["XML|setting.skin_name@css_root_path"] = f["JS|CssRootPath"] = {
							config: "webPath.css", configFn: function(a) {
								return e.webPath.cssDev =
									a
							}
						}; f["XML|setting.width"] = f["JS|Width"] = { config: "width", configFn: function(a) { return a + "" } }; f["XML|setting.height"] = f["JS|Height"] = { config: "height", configFn: function(a) { e.originHeight = a; return a + "" } }; f["XML|setting.lang"] = f["JS|Lang"] = { config: "lang", configFn: function(a) { e.managerLang = a; return a = "" == a ? "ko-kr" : RAONKUPLOAD.util.getUserLang(a) } }; f["XML|setting.max_total_file_size"] = f["JS|MaxTotalFileSize"] = {
							config: "maxTotalFileSize", configFn: function(a) {
								var b = RAONKUPLOAD.util.getUnit(a), b = RAONKUPLOAD.util.getUnitSize(b);
								return a = parseInt(a, 10) * b
							}
						}; f["XML|setting.max_total_file_count"] = f["JS|MaxTotalFileCount"] = { config: "maxTotalFileCount", configFn: function(a) { return parseInt(a, 10) } }; f["XML|setting.max_one_file_size"] = f["JS|MaxOneFileSize"] = { config: "maxOneFileSize", configFn: function(a) { var b = RAONKUPLOAD.util.getUnit(a), b = RAONKUPLOAD.util.getUnitSize(b); return a = parseInt(a, 10) * b } }; f["XML|setting.upload_transfer_window@upload_window_mode"] = f["JS|ManagerUploadWindowMode"] = { config: "managerUploadWindowMode" }; f["XML|setting.upload_transfer_window@download_window_mode"] =
							f["JS|ManagerDownloadWindowMode"] = { config: "managerDownloadWindowMode" }; f["XML|setting.upload_transfer_window.view"] = f["JS|UploadTransferWindow.View"] = { config: "uploadTransferWindow.view" }; f["XML|setting.upload_transfer_window.view@width"] = f["JS|UploadTransferWindow.ViewWidth"] = { config: "uploadTransferWindow.viewWidth", configFn: function(a) { 250 >= RAONKUPLOAD.util.parseIntOr0(a) && (a = "250px"); return a } }; f["XML|setting.upload_transfer_window.view@height"] = f["JS|UploadTransferWindow.ViewHeight"] = {
								config: "uploadTransferWindow.viewHeight",
								configFn: function(a) { 150 >= RAONKUPLOAD.util.parseIntOr0(a) && (a = "150px"); return a }
							}; f["XML|setting.upload_transfer_window.button_type"] = f["JS|UploadTransferWindow.ButtonType"] = { config: "uploadTransferWindow.buttonType", configFn: function(a) { return RAONKUPLOAD.util.parseIntOr0(a) } }; f["XML|setting.upload_transfer_window.hide_downloaded_path"] = f["JS|UploadTransferWindow.HideDownloadedPath"] = { config: "uploadTransferWindow.hideDownloadedPath", configFn: function(a) { return RAONKUPLOAD.util.parseIntOr0(a) } }; f["XML|setting.upload_transfer_window.use_logo_image"] =
								f["JS|UseLogoImage.Use"] = { config: "useLogoImage.use" }; f["XML|setting.upload_transfer_window.use_logo_image@logo_path"] = f["JS|UseLogoImage.LogoPath"] = { config: "useLogoImage.logoPath" }; f["XML|setting.upload_transfer_window.use_logo_image@logo_ver"] = f["JS|UseLogoImage.LogoVer"] = { config: "useLogoImage.logoVer", configFn: function(a) { if ("1" == e.useLogoImage.use) return a } }; f["XML|setting.upload_transfer_window.silent_upload"] = f["JS|SilentUpload"] = { config: "silentUpload" }; f["XML|setting.upload_transfer_window.silent_download"] =
									f["JS|SilentDownload"] = { config: "silentDownload" }; f["XML|setting.upload_transfer_window.silent_download_ex"] = f["JS|SilentDownloadEx"] = { config: "silentDownloadEx" }; f["XML|setting.upload_transfer_window.ui_setting.width"] = f["JS|UploadTransferWindow.UISetting.Width"] = { config: "uploadTransferWindow.uiSetting.width" }; f["XML|setting.upload_transfer_window.ui_setting.system_title_upload"] = f["JS|UploadTransferWindow.UISetting.SystemTitleUpload"] = { config: "uploadTransferWindow.uiSetting.systemTitleUpload" }; f["XML|setting.upload_transfer_window.ui_setting.system_title_download"] =
										f["JS|UploadTransferWindow.UISetting.SystemTitleDownload"] = { config: "uploadTransferWindow.uiSetting.systemTitleDownload" }; f["XML|setting.upload_transfer_window.ui_setting.system_title_font_family"] = f["JS|UploadTransferWindow.UISetting.SystemTitleFontFamily"] = { config: "uploadTransferWindow.uiSetting.systemTitleFontFamily" }; f["XML|setting.upload_transfer_window.ui_setting.system_title_font_size"] = f["JS|UploadTransferWindow.UISetting.SystemTitleFontSize"] = { config: "uploadTransferWindow.uiSetting.systemTitleFontSize" };
					f["XML|setting.upload_transfer_window.ui_setting.system_title_font_bold"] = f["JS|UploadTransferWindow.UISetting.SystemTitleFontBold"] = { config: "uploadTransferWindow.uiSetting.systemTitleFontBold" }; f["XML|setting.upload_transfer_window.ui_setting.userColor"] = f["JS|UploadTransferWindow.UISetting.UserColor"] = { config: "uploadTransferWindow.uiSetting.userColor" }; f["XML|setting.upload_transfer_window.ui_setting.user_color"] = f["JS|UploadTransferWindow.UISetting.UserColor"] = { config: "uploadTransferWindow.uiSetting.userColor" };
					f["XML|setting.upload_transfer_window.ui_setting.file_list_view"] = f["JS|UploadTransferWindow.UISetting.FileListView"] = { config: "uploadTransferWindow.uiSetting.fileListView" }; f["XML|setting.upload_transfer_window.ui_setting.file_list_status_align"] = f["JS|UploadTransferWindow.UISetting.FileListStatusAlign"] = { config: "uploadTransferWindow.uiSetting.fileListStatusAlign" }; f["XML|setting.upload_transfer_window.ui_setting.use_setting"] = f["JS|UploadTransferWindow.UISetting.UseSetting"] = { config: "uploadTransferWindow.uiSetting.useSetting" };
					f["XML|setting.upload_transfer_window.ui_setting.speed_text"] = f["JS|UploadTransferWindow.UISetting.SpeedText"] = { config: "uploadTransferWindow.uiSetting.speedText" }; f["XML|setting.upload_transfer_window.ui_setting.speed_text_desc"] = f["JS|UploadTransferWindow.UISetting.SpeedTextDesc"] = { config: "uploadTransferWindow.uiSetting.speedTextDesc" }; f["XML|setting.upload_transfer_window.ui_setting.view_theme"] = f["JS|UploadTransferWindow.UISetting.ViewTheme"] = { config: "uploadTransferWindow.uiSetting.viewTheme" };
					f["XML|setting.upload_transfer_window.view_files_in_folder"] = f["JS|UploadTransferWindow.ViewFilesInFolder"] = { config: "uploadTransferWindow.viewFilesInFolder" }; f["XML|setting.hide_list_info"] = f["JS|HideListInfo"] = { config: "hideListInfo" }; f["XML|setting.extension"] = f["JS|ExtensionArr"] = { config: "extension.extArr" }; f["XML|setting.extension@allow_or_limit"] = f["JS|ExtensionAllowOrLimit"] = {
						config: "extension.allowOrLimit", configFn: function(a) {
							if ("" != a.toString() && "" != e.extension.extArr && "0" != a) {
								var b = RAONKUPLOAD.util.getMimeFilter(e.extension.extArr.toLowerCase());
								e.extension.mimeAccept = b
							} return a
						}
					}; f["XML|setting.border_style"] = f["JS|BorderStyle"] = { config: "uploadBorderStyle" }; f["XML|setting.multi_file_select"] = f["JS|MultiFileSelect"] = { config: "multiFileSelectTemp", configFn: function(a) { e.multiFileSelect = "0" == a ? !1 : !0; 1 == e.maxTotalFileCount && (e.multiFileSelect = !1); return a } }; f["XML|setting.multi_file_select@disable_mobile"] = f["JS|DisableMultiFileSelectInMobile"] = {
						config: "DisableMultiFileSelectInMobile", configFn: function(a) {
							if (RAONKUPLOAD.browser.mobile && e.multiFileSelect) return "1" ==
								a && (e.multiFileSelect = !1), a
						}
					}; f["XML|setting.mode"] = f["JS|Mode"] = { config: "mode", configFn: function(a) { a = a.toLowerCase(); "edit" == a && (a = "upload"); return a } }; f["XML|setting.list_view_dbclick"] = f["JS|ListViewDbclick"] = { config: "listViewDbclick" }; f["XML|setting.list_view_drag_and_drop"] = f["JS|ListViewDragAndDrop"] = { config: "listViewDragAndDrop" }; f["XML|setting.runtimes"] = f["JS|Runtimes"] = f["JS|RunTimes"] = { config: "userRunTimeMode" }; f["XML|setting.runtimes@agent_os"] = f["JS|ApplyAgentOs"] = {
						config: "applyAgentOs",
						configFn: function(a) { return "," + a.toLocaleLowerCase() + "," }
					}; f["XML|setting.resume_mode@upload"] = f["JS|ResumeUpload"] = { config: "resumeUpload" }; f["XML|setting.resume_mode@download"] = f["JS|ResumeDownload"] = { config: "resumeDownload" }; f["XML|setting.runtimes@use_ws"] = f["JS|UseWS"] = { config: "useWS", configFn: function(a) { "1" != a && (a = "0"); return a } }; f["XML|setting.allowed_realtime_download_add"] = f["JS|AllowedRealtimeDownloadAdd"] = {
						config: "allowedRealtimeDownloadAdd", jsFn: function(a) { return RAONKUPLOAD.util.parseIntOr0(a) },
						xmlFn: function(a) { return parseInt(a, 10) }
					}; f["XML|setting.agent_transfer_window_item_count"] = f["JS|AgentTransferWindowItemCount"] = { config: "managerShowItemCount", configFn: function(a) { 3 > a ? a = 3 : 15 < a && (a = 15); return RAONKUPLOAD.util.parseIntOr0(a) } }; f["XML|setting.enforce_html5"] = f["JS|EnforceHtml5"] = { config: "enforceHtml5" }; f["XML|setting.use_agent_install_guide"] = f["JS|UseAgentInstallGuide"] = { config: "useInstallGuide" }; f["XML|setting.use_agent_install_guide@zindex"] = f["JS|AgentInstallGuideZIndex"] = {
						config: "installGuideZIndex",
						configFn: function(a) { if ("1" == e.useInstallGuide) return parseInt(a, 10) }
					}; f["XML|setting.use_agent_install_guide@logo_url"] = f["JS|AgentInstallGuideLogoUrl"] = { config: "installGuideLogoUrl", configFn: function(a) { if ("1" == e.useInstallGuide) return a } }; f["XML|setting.use_install_guide"] = f["JS|UseInstallGuide"] = { config: "useInstallGuide" }; f["XML|setting.use_install_guide@zindex"] = f["JS|InstallGuideZIndex"] = { config: "installGuideZIndex", configFn: function(a) { if ("1" == e.useInstallGuide) return parseInt(a, 10) } }; f["XML|setting.use_install_guide@logo_url"] =
						f["JS|InstallGuideLogoUrl"] = { config: "installGuideLogoUrl", configFn: function(a) { if ("1" == e.useInstallGuide) return a } }; f["XML|setting.agent_install_folder_url"] = f["JS|AgentInstallFolderUrl"] = { config: "agentInstallFolderUrl", configFn: function(a) { "/" != a.substring(a.length - 1) && (a += "/"); return a } }; f["XML|setting.use_auto_install"] = f["JS|UseAutoInstall"] = { config: "useAutoInstall" }; f["XML|setting.agent_https"] = f["JS|AgentHttps"] = { config: "agentHttps" }; f["XML|setting.use_agent_log"] = f["JS|UseAgentLog"] = { config: "useAgentLog" };
					f["XML|setting.agent_bandwidth"] = f["JS|AgentBandwidth"] = { config: "agentBandwidth" }; f["XML|setting.agent_chunk_size"] = f["JS|AgentChunkSize"] = { config: "agentChunkSize" }; f["XML|setting.agent_request_count"] = f["JS|AgentRequestCount"] = { config: "agentRequestCount" }; f["XML|setting.agent_compress_buffer_size"] = f["JS|AgentCompressBufferSize"] = { config: "agentCompressBufferSize", configFn: function(a) { if ("0" != a) { var b = RAONKUPLOAD.util.getUnit(a), b = RAONKUPLOAD.util.getUnitSize(b); return parseInt(a, 10) * b } } }; f["XML|setting.agent_intelligent_compress_value"] =
						f["JS|AgentIntelligentCompressValue"] = { config: "agentIntelligentCompressValue" }; f["XML|setting.agent_auto_decompression"] = f["JS|AgentAutoDecompression"] = { config: "agentAutoDecompression" }; f["XML|setting.agent_multi_transfer_count"] = f["JS|AgentMultiTransferCount"] = { config: "agentMultiTransferCount", configFn: function(a) { e.agentMultiUploadCount = a; return e.agentMultiDownloadCount = a } }; f["XML|setting.agent_multi_upload_count"] = f["JS|AgentMultiUploadCount"] = { config: "agentMultiUploadCount" }; f["XML|setting.agent_multi_download_count"] =
							f["JS|AgentMultiDownloadCount"] = { config: "agentMultiDownloadCount" }; f["XML|setting.agent_admin.chunk_size"] = f["JS|AgentAdmin.ChunkSize"] = { config: "agentAdmin.chunkSize", configFn: function(a) { if (0 !== a) { var b = RAONKUPLOAD.util.getUnit(a); return "" != b ? (b = RAONKUPLOAD.util.getUnitSize(b), parseInt(a, 10) * b) : RAONKUPLOAD.util.parseIntOr0(a, 10) } } }; f["XML|setting.agent_admin.request_count"] = f["JS|AgentAdmin.RequestCount"] = { config: "agentAdmin.requestCount" }; f["XML|setting.agent_admin.multi_transfer_count"] = f["JS|AgentAdmin.MultiTransferCount"] =
								{ config: "agentAdmin.multiTransferCount" }; f["XML|setting.agent_admin.internet_open_type"] = f["JS|AgentAdmin.InternetOpenType"] = { config: "agentAdmin.internetOpenType" }; f["XML|setting.agent_admin.buffer_size"] = f["JS|AgentAdmin.BufferSize"] = { config: "agentAdmin.bufferSize" }; f["XML|setting.agent_admin.buffer_size_upload"] = f["JS|AgentAdmin.BufferSizeUpload"] = { config: "agentAdmin.bufferSizeUpload" }; f["XML|setting.agent_admin.buffer_size_download"] = f["JS|AgentAdmin.BufferSizeDownload"] = { config: "agentAdmin.bufferSizeDownload" };
					f["XML|setting.agent_admin.timeout"] = f["JS|AgentAdmin.Timeout"] = { config: "agentAdmin.timeout" }; f["XML|setting.agent_admin.download_file_name_suffix"] = f["JS|AgentAdmin.DownloadFileNameSuffix"] = { config: "agentAdmin.downloadFileNameSuffix" }; f["XML|setting.agent_admin.system_code"] = f["JS|AgentAdmin.SystemCode"] = { config: "agentAdmin.systemCode" }; f["XML|setting.agent_admin.smart_request_size"] = f["JS|AgentAdmin.SmartRequestSize"] = { config: "agentAdmin.smartRequestSize" }; f["JS|DropZoneTransparency"] = {
						config: "dropZoneTransparency",
						configFn: function(a) { "" != a && (a = parseInt(a, 10), 0 > a ? a = 0 : 255 < a && (a = 255)); return a }
					}; f["XML|setting.plugin_version"] = f["JS|PluginVersion"] = { config: "plugin_version" }; f["XML|setting.show_status_bar"] = f["JS|StatusBar"] = { config: "showStatusBar" }; f["XML|setting.show_status_bar@show_limit"] = f["JS|StatusBarShowLimit"] = { config: "statusBarShowLimit", configFn: function(a) { if ("1" == e.showStatusBar) return a } }; f["XML|setting.show_status_bar@show_status"] = f["JS|StatusBarShowStatus"] = {
						config: "statusBarShowStatus", configFn: function(a) {
							if ("1" ==
								e.showStatusBar) return a
						}
					}; f["XML|setting.show_header_bar"] = f["JS|HeaderBar"] = { config: "showHeaderBar", configFn: function(a) { return e.showHeaderBarOrg = a } }; f["XML|setting.show_header_bar@header_height"] = f["JS|CustomHeaderHeight"] = { config: "customHeaderHeight", configFn: function(a) { RAONKUPLOAD.util.parseIntOr0(a) < e.minHeaderBarHeight && (a = "28px"); return a } }; f["XML|setting.show_button_bar_edit"] = f["JS|ButtonBarEdit"] = {
						config: "showButtonBarEdit", configFn: function(a) {
							if ("" != b.ButtonBar || "" != a) {
								var c = ""; "" !=
									b.ButtonBarEdit && (c = b.ButtonBar); "" != a && (c = a); a = "0" == c ? "" : c.split(",")
							} return a
						}
					}; f["XML|setting.show_button_bar_edit@align"] = f["JS|ShowEditAlign"] = { config: "showEditAlign" }; f["XML|setting.show_button_bar_view"] = f["JS|ButtonBarView"] = { config: "showButtonBarView", configFn: function(a) { return a = "0" == a ? "" : a.split(",") } }; f["XML|setting.show_button_bar_view@align"] = f["JS|ShowViewAlign"] = { config: "showViewAlign" }; f["XML|setting.button_bar_position"] = f["JS|ButtonBarPosition"] = { config: "buttonBarPosition" }; f["XML|setting.folder_transfer"] =
						f["JS|FolderTransfer"] = { config: "folderTransfer" }; f["XML|setting.folder_transfer@get_folder_in_file"] = f["JS|GetFolderInFile"] = { config: "getFolderInFile", configFn: function(a) { if ("1" == e.folderTransfer) return a } }; f["XML|setting.use_dbclick_open"] = f["JS|UseDbclickOpen"] = { config: "useDbclickOpen" }; f["XML|setting.use_single_download_dialog"] = f["JS|UseSingleDownloadDialog"] = { config: "useSingleDownloadDialog" }; f["XML|setting.use_before_add_event"] = f["JS|UseBeforeAddEvent"] = { config: "useAddEvent" }; f["XML|setting.use_add_event"] =
							f["JS|UseAddEvent"] = { config: "useAddEvent" }; f["XML|setting.use_before_delete_event"] = f["JS|UseBeforeDeleteEvent"] = { config: "useDeleteEvent" }; f["XML|setting.use_delete_event"] = f["JS|UseDeleteEvent"] = { config: "useDeleteEvent" }; f["XML|setting.use_after_delete_event"] = f["JS|UseAfterDeleteEvent"] = { config: "useDeleteAfterEvent" }; f["XML|setting.use_delete_after_event"] = f["JS|UseDeleteAfterEvent"] = { config: "useDeleteAfterEvent" }; f["XML|setting.use_before_open_event"] = f["JS|UseBeforeOpenEvent"] = { config: "useOpenEvent" };
					f["XML|setting.use_open_event"] = f["JS|UseOpenEvent"] = { config: "useOpenEvent" }; f["XML|setting.use_uploading_cancel_event"] = f["JS|UseUploadingCancelEvent"] = { config: "useUploadingCancelEvent" }; f["XML|setting.use_before_download_event"] = f["JS|UseBeforeDownloadEvent"] = { config: "useDownloadEvent" }; f["XML|setting.use_download_event"] = f["JS|UseDownloadEvent"] = { config: "useDownloadEvent" }; f["XML|setting.use_after_add_event"] = f["JS|UseAfterAddEvent"] = { config: "useAfterAddEvent" }; f["XML|setting.use_after_add_all_event"] =
						f["JS|UseAfterAddAllEvent"] = { config: "useAfterAddEndTimeEvent" }; f["XML|setting.use_after_add_end_time_event"] = f["JS|UseAfterAddEndTimeEvent"] = { config: "useAfterAddEndTimeEvent" }; f["XML|setting.use_download_complete_event"] = f["JS|UseDownloadCompleteEvent"] = { config: "useAfterDownloadEvent" }; f["XML|setting.use_after_download_event"] = f["JS|UseAfterDownloadEvent"] = { config: "useAfterDownloadEvent" }; f["XML|setting.use_delete_all_event"] = f["JS|UseDeleteAllEvent"] = { config: "useDeleteEndTimeEvent" }; f["XML|setting.use_delete_end_time_event"] =
							f["JS|UseDeleteEndTimeEvent"] = { config: "useDeleteEndTimeEvent" }; f["XML|setting.use_download_complete_all_event"] = f["JS|UseDownloadCompleteAllEvent"] = { config: "useFinishDownloadedEvent" }; f["XML|setting.use_finish_downloaded_event"] = f["JS|UseFinishDownloadedEvent"] = { config: "useFinishDownloadedEvent" }; f["XML|setting.use_after_move_file_event"] = f["JS|UseAfterMoveFileEvent"] = { config: "useAfterMoveFileEvent" }; f["XML|setting.use_excute_download_in_mobile"] = f["JS|UseExcuteDownloadInMobile"] = { config: "useExcuteDownloadInMobile" };
					f["XML|setting.timeout"] = f["JS|Timeout"] = { config: "timeout" }; f["XML|setting.automatic_connection"] = f["JS|AutomaticConnection"] = { config: "automaticConnection" }; f["XML|setting.show_folder_view"] = f["JS|ShowFolderView"] = { config: "showFolderView" }; f["XML|setting.message_title"] = f["JS|MessageTitle"] = { config: "messageTitle" }; f["XML|setting.use_script_event_control"] = f["JS|UseScriptEventControl"] = { config: "useScriptEventControl" }; f["XML|setting.show_checkbox"] = f["JS|ShowCheckBox"] = { config: "showCheckBox" }; f["XML|setting.hide_context_menu"] =
						f["JS|HideContextMenu"] = { config: "hideContextMenu" }; f["XML|setting.use_size_column"] = f["JS|SizeColumnWidth"] = { config: "sizeColumnWidth" }; f["XML|setting.file_delimiter@unit_delimiter"] = f["JS|UnitDelimiter"] = { config: "unitDelimiter", configFn: function(a) { return String.fromCharCode(a) } }; f["XML|setting.file_delimiter@unit_attribute_delimiter"] = f["JS|UnitAttributeDelimiter"] = { config: "unitAttributeDelimiter", configFn: function(a) { return String.fromCharCode(a) } }; f["XML|setting.use_auto_height"] = f["JS|UseAutoHeight"] =
							{ config: "useAutoHeight" }; f["XML|setting.remove_context_item"] = f["JS|RemoveContextItem"] = { config: "removeContextItem" }; f["XML|setting.display_file_size_html4"] = f["JS|DisplayFileSizeHtml4"] = { config: "displayFileSizeHtml4" }; f["XML|setting.allowed_zero_file_size"] = f["JS|AllowedZeroFileSize"] = { config: "allowedZeroFileSize" }; f["XML|setting.use_dropzone"] = f["JS|UseDropzone"] = { config: "useDropzone" }; f["XML|setting.use_zip_download"] = f["JS|UseZipDownload"] = { config: "useZipDownload" }; f["XML|setting.allow_open_extension"] =
								f["JS|AllowOpenExtension"] = { config: "allowOpenExtension" }; f["XML|setting.file_filter_ex"] = f["JS|FileFilterEx"] = { config: "fileFilterEx" }; f["XML|uploader_setting.download_multi"] = f["JS|DownloadMulti"] = { config: "downloadMulti" }; f["JS|NTLM"] = { config: "NTLM", configFn: function(a) { if (-1 < a.indexOf("Basic")) return a } }; f["XML|setting.large_files"] = f["JS|LargeFiles.MarkSize"] = {
									config: "largeFiles.markSize", configFn: function(a) {
										var b = RAONKUPLOAD.util.getUnit(a), b = RAONKUPLOAD.util.getUnitSize(b); return parseInt(a,
											10) * b
									}
								}; f["XML|setting.large_files@max_total_size"] = f["JS|LargeFiles.MaxTotalSize"] = { config: "largeFiles.maxTotalSize", configFn: function(a) { var b = RAONKUPLOAD.util.getUnit(a), b = RAONKUPLOAD.util.getUnitSize(b); return parseInt(a, 10) * b } }; f["XML|setting.large_files@max_count"] = f["JS|LargeFiles.MaxCount"] = { config: "largeFiles.maxCount", configFn: function(a) { return RAONKUPLOAD.util.parseIntOr0(a) } }; f["XML|setting.large_files@text"] = f["JS|LargeFiles.Text"] = { config: "largeFiles.text" }; f["XML|setting.large_files@color"] =
									f["JS|LargeFiles.Color"] = { config: "largeFiles.color" }; f["XML|setting.large_files@base_total_size"] = f["JS|LargeFiles.MarkBaseTotalSize"] = { config: "largeFiles.markBaseTotalSize", configFn: function(a) { var b = RAONKUPLOAD.util.getUnit(a), b = RAONKUPLOAD.util.getUnitSize(b); return parseInt(a, 10) * b } }; f["XML|setting.large_files@custom_mode"] = f["JS|LargeFiles.CustomMode"] = { config: "largeFiles.customMode" }; f["XML|setting.mode@views"] = f["JS|Views"] = {
										config: "views", configFn: function(a) {
											"thumbs" == a && (e.largeFiles = {
												markSize: 0,
												maxCount: 0, maxTotalSize: 0, text: "", color: ""
											}, e.showHeaderBar = 0); return a
										}
									}; f["XML|setting.auto_destroy"] = f["JS|AutoDestroy"] = { config: "autoDestroy" }; f["XML|setting.cache_protect_mode"] = f["JS|CacheProtectMode"] = { config: "cacheProtectMode" }; f["XML|setting.file_sort"] = f["JS|UseFileSort"] = { config: "use_file_sort" }; f["XML|setting.file_sort@sort_field"] = f["JS|FileSortField"] = { config: "sort_field" }; f["XML|setting.file_sort@sort_ascdesc"] = f["JS|FileSortAscDesc"] = { config: "sort_ascdesc" }; f["XML|setting.file_sort@auto_sort"] =
										f["JS|AutoSort"] = { config: "auto_sort", configFn: function(a) { if ("1" == a || "2" == a) return a } }; f["XML|setting.file_move_context_menu"] = f["JS|FileMoveContextMenu"] = { config: "fileMoveContextMenu", configFn: function(a) { "thumbs" == e.views && (a = "0"); return a } }; f["XML|setting.complete_event_reset_use"] = f["JS|CompleteEventResetUse"] = { config: "completeEventResetUse" }; f["XML|setting.img_preview"] = f["JS|ImgPreView"] = {
											config: "imgPreView", configFn: function(a) {
												if (1 == RAONKUPLOAD.browser.mobile || "mobile" == RAONKUPLOAD.UserAgent.device.type) a =
													"0"; return a
											}
										}; f["XML|setting.img_preview@width"] = f["JS|ImgPreViewWidth"] = { config: "imgPreViewWidth", configFn: function(a) { if ("1" == e.imgPreView) return 100 >= RAONKUPLOAD.util.parseIntOr0(a) && (a = "100px"), a } }; f["XML|setting.img_preview@height"] = f["JS|ImgPreViewHeight"] = { config: "imgPreViewHeight", configFn: function(a) { if ("1" == e.imgPreView) return 100 >= RAONKUPLOAD.util.parseIntOr0(a) && (a = "100px"), a } }; f["XML|setting.user_message"] = f["JS|UserMessage"] = { config: "userMessageTemp" }; f["XML|setting.user_message@edit"] =
											f["JS|UserMessage.Edit"] = { config: "userMessage.edit", configFn: function(a) { if ("1" == e.userMessageTemp) return a } }; f["XML|setting.user_message@view"] = f["JS|UserMessage.View"] = { config: "userMessage.view", configFn: function(a) { if ("1" == e.userMessageTemp) return a } }; f["XML|setting.use_single_select"] = f["JS|UseSingleSelect"] = { config: "useSingleSelect" }; f["XML|setting.disable_alert_message.duplication"] = f["JS|DisableAlertMessage.Duplication"] = { config: "disableAlertMessage.duplication" }; f["XML|setting.disable_alert_message.delete_unchosen"] =
												f["JS|DisableAlertMessage.DeleteUnchosen"] = { config: "disableAlertMessage.deleteUnchosen" }; f["XML|setting.disable_alert_message.download_unchosen"] = f["JS|DisableAlertMessage.DownloadUnchosen"] = { config: "disableAlertMessage.downloadUnchosen" }; f["XML|setting.disable_alert_message.open_unchosen"] = f["JS|DisableAlertMessage.OpenUnchosen"] = { config: "disableAlertMessage.openUnchosen" }; f["XML|setting.disable_delete_confirm_message"] = f["JS|DisableDeleteConfirmMessage"] = {
													config: "disableAlertMessage.disableDeleteConfirm",
													configFn: function(a) { if ("1" == a || "2" == a || "3" == a) return a }
												}; f["XML|setting.disable_alert_message.disable_delete_confirm"] = f["JS|DisableAlertMessage.DisableDeleteConfirm"] = { config: "disableAlertMessage.disableDeleteConfirm", configFn: function(a) { if ("0" == a || "1" == a || "2" == a || "3" == a) return a } }; f["XML|setting.disable_alert_message.file_extension_detect"] = f["JS|DisableAlertMessage.FileExtensionDetect"] = { config: "disableAlertMessage.fileExtensionDetect" }; f["XML|setting.disable_alert_message.file_max_count_add"] =
													f["JS|DisableAlertMessage.FileMaxCountAdd"] = { config: "disableAlertMessage.fileMaxCountAdd" }; f["XML|setting.header_item.item"] = f["JS|HeaderBarItem"] = { config: "headerBarItem", valueType: "array", jsFn: function(a) { return a.split(",") } }; f["XML|setting.header_item.item@width"] = f["JS|HeaderBarItemWidth"] = { config: "headerBarItemWidth", valueType: "array", jsFn: function(a) { return a.split(",") }, configFn: function(a) { for (var b = a.length, c = 0; c < b; c++)a[c] && (a[c] = a[c].replace(/\%/gi, "px")); return a } }; f["XML|setting.header_item.item@align"] =
														f["JS|HeaderBarItemAlign"] = { config: "headerBarItemAlign", valueType: "array", jsFn: function(a) { return a.split(",") }, xmlFn: function(a) { for (var b = a.length, c = 0; c < b; c++)a[c] = a[c] ? a[c].toLowerCase() : "left"; return a } }; f["XML|setting.header_item.item@set_title"] = f["JS|HeaderBarItemSetTitle"] = { config: "headerBarItemSetTitle", valueType: "array", jsFn: function(a) { return a.split(",") }, xmlFn: function(a) { for (var b = a.length, c = 0; c < b; c++)a[c] = a[c] ? a[c] : "1"; return a } }; f["XML|setting.transfer_open_file"] = f["JS|TransferOpenFile"] =
															{ config: "transferOpenFile" }; f["XML|setting.select_by_clicked"] = f["JS|SelectByClicked"] = { config: "selectByClicked" }; f["XML|setting.image_quality"] = f["JS|ImageQuality.Quality"] = { config: "imageQuality.quality" }; f["XML|setting.image_quality@worker_count"] = f["JS|ImageQuality.WorkerCount"] = { config: "imageQuality.workerCount" }; f["XML|setting.image_quality@extension"] = f["JS|ImageQuality.Extension"] = { config: "imageQuality.extension" }; f["XML|setting.image_quality@changed_extension"] = f["JS|ImageQuality.ChangedExtension"] =
																{ config: "imageQuality.changedExtension" }; f["XML|setting.image_quality@over_file_size"] = f["JS|ImageQuality.OverFileSize"] = { config: "imageQuality.overFileSize" }; f["XML|setting.image_quality@processing_window"] = f["JS|ImageQuality.ProcessingWindow"] = { config: "imageQuality.processingWindow" }; f["XML|setting.skip_sent_file"] = f["JS|SkipSentFile"] = { config: "skipSentFile" }; f["XML|setting.check_network_speed"] = f["JS|CheckNetworkSpeed"] = { config: "checkNetworkSpeed" }; f["XML|setting.use_compress_transfer"] = f["JS|UseCompressTransfer"] =
																	{ config: "useCompressTransfer" }; f["XML|setting.use_compress_transfer@use_html5"] = f["JS|UseCompressTransferHtml5"] = { config: "useCompressTransferHtml5" }; f["XML|setting.direct_download"] = f["JS|DirectDownload"] = { config: "directDownloadTemp", configFn: function(a) { e.directDownload = "1" == a ? !0 : !1; return a } }; f["XML|setting.force_overwrite"] = f["JS|ForceOverwrite"] = { config: "forceOverwrite" }; f["JS|Event.OnError"] = { config: "event.onError", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.CreationComplete"] =
																		{ config: "event.creationComplete", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.BeforeUpload"] = { config: "event.beforeUpload", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.UploadComplete"] = { config: "event.uploadComplete", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.TransferComplete"] = { config: "event.transferComplete", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.MultiUploadComplete"] = {
																			config: "event.multiUploadComplete",
																			configFn: function(a) { if ("function" === typeof a) return a }
																		}; f["JS|Event.BeforeDownloadFile"] = { config: "event.beforeDownloadFile", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.DownloadCompleteFile"] = { config: "event.downloadCompleteFile", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.DownloadCompleteAllFile"] = { config: "event.downloadCompleteAllFile", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.ExcuteDownloadFile"] = {
																			config: "event.excuteDownloadFile",
																			configFn: function(a) { if ("function" === typeof a) return a }
																		}; f["JS|Event.BeforeOpenFile"] = { config: "event.beforeOpenFile", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.BeforeAddFile"] = { config: "event.beforeAddFile", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.AfterAddFile"] = { config: "event.afterAddFile", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.AfterAddAllFile"] = {
																			config: "event.afterAddAllFile", configFn: function(a) {
																				if ("function" ===
																					typeof a) return a
																			}
																		}; f["JS|Event.BeforeDeleteFile"] = { config: "event.beforeDeleteFile", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.AfterDeleteFile"] = { config: "event.afterDeleteFile", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.DeleteAllFile"] = { config: "event.deleteAllFile", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.SelectItem"] = { config: "event.selectItem", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.AfterMoveFile"] =
																			{ config: "event.afterMoveFile", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.UploadingCancel"] = { config: "event.uploadingCancel", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.DownloadCancel"] = { config: "event.downloadCancel", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.CustomAction"] = { config: "event.customAction", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.OnLanguageDefinition"] = {
																				config: "event.onLanguageDefinition",
																				configFn: function(a) { if ("function" === typeof a) return a }
																			}; f["JS|Event.Alert"] = { config: "event.alert", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.AgentInstall"] = { config: "event.agentInstall", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.MultipleAccessEvent"] = { config: "event.multipleAccessEvent", configFn: function(a) { if ("function" === typeof a) return a } }; f["JS|Event.ExtendFunction"] = { config: "event.extendFunction", configFn: function(a) { if ("function" === typeof a) return a } };
					f["JS|Event.UnselectItem"] = { config: "event.unselectItem", configFn: function(a) { if ("function" === typeof a) return a } }; f["XML|setting.text.empty_download_file"] = f["JS|EmptyDownloadFileText"] = { config: "emptyDownloadFileText" }; f["XML|setting.text.empty_download_file@color"] = f["JS|EmptyDownloadFileTextColor"] = { config: "emptyDownloadFileTextColor", configFn: function(a) { if ("" != e.emptyDownloadFileText) return a } }; f["XML|setting.text.empty_download_file@bold"] = f["JS|EmptyDownloadFileTextBold"] = {
						config: "emptyDownloadFileTextBold",
						configFn: function(a) { if ("" != e.emptyDownloadFileText) return a }
					}; f["XML|setting.text.empty_download_file@italic"] = f["JS|EmptyDownloadFileTextItalic"] = { config: "emptyDownloadFileTextItalic", configFn: function(a) { if ("" != e.emptyDownloadFileText) return a } }; f["XML|setting.text.empty_download_file@underline"] = f["JS|EmptyDownloadFileTextUnderline"] = { config: "emptyDownloadFileTextUnderline", configFn: function(a) { if ("" != e.emptyDownloadFileText) return a } }; f["XML|setting.text.empty_download_file@strike"] = f["JS|EmptyDownloadFileTextStrike"] =
						{ config: "emptyDownloadFileTextStrike", configFn: function(a) { if ("" != e.emptyDownloadFileText) return a } }; f["XML|setting.file_open_dialog_title"] = f["JS|FileOpenDialogTitle"] = { config: "fileOpenDialogTitle" }; f["XML|setting.file_open_dialog_type"] = f["JS|FileOpenDialogType"] = { config: "fileOpenDialogType" }; f["XML|setting.file_save_dialog_title"] = f["JS|FileSaveDialogTitle"] = { config: "fileSaveDialogTitle" }; f["XML|setting.folder_select_dialog_title"] = f["JS|FolderSelectDialogTitle"] = { config: "folderSelectDialogTitle" };
					f["XML|setting.folder_select_dialog_button_name"] = f["JS|FolderSelectDialogButtonName"] = { config: "folderSelectDialogButtonName" }; f["XML|setting.folder_select_dialog_type"] = f["JS|FolderSelectDialogType"] = { config: "folderSelectDialogType" }; f["XML|setting.agent_communication_method"] = f["JS|AgentCommunicationMethod"] = { config: "agentCommunicationMethod", configFn: function(a) { "1" == a && (e.sendToManagerType = "2"); return a } }; f["XML|setting.trust_sites"] = f["JS|TrustSites"] = { config: "trustSites" }; f["XML|setting.show_tray_icon"] =
						f["JS|ShowTrayIcon"] = { config: "showTrayIcon" }; f["XML|setting.agent_temp_root_directory"] = f["JS|AgentTempRootDirectory"] = { config: "agentTempRootDirectory" }; f["XML|setting.agent_event_interval"] = f["JS|AgentEventInterval"] = { config: "agentEventInterval" }; f["XML|setting.agent_event_type"] = f["JS|AgentEventType"] = { config: "agentEventType" }; f["XML|setting.agent_event_wait_time"] = f["JS|AgentEventWaitTime"] = { config: "agentEventWaitTime" }; f["XML|setting.auto_recovery_transfer"] = f["JS|AutoRecoveryTransfer"] = {
							config: "autoRecoveryTransfer",
							configFn: function(a) { "0" != a && 0 == RAONKUPLOAD.browser.LocalStorageSupported && (a = "0"); return a }
						}; f["XML|setting.auto_recovery_transfer@auto_transfer"] = f["JS|AutoTransfer"] = { config: "autoTransfer", configFn: function(a) { if ("0" != e.autoRecoveryTransfer) return a } }; f["JS|AutoRecoveryId"] = { config: "autoRecoveryId" }; f["XML|setting.use_webfile_thumbnail_view"] = f["JS|UseWebfileThumbnailView"] = { config: "useWebfileThumbnailView" }; f["XML|setting.use_kmonitoring"] = f["JS|UseKMonitoring"] = { config: "useKMonitoring" }; f["XML|setting.DEXT5_install"] =
							f["JS|DEXT5Install"] = { config: "dext5Install" }; f["XML|setting.enable_admin_log"] = f["JS|EnableAdminLog"] = { config: "enableAdminLog" }; f["XML|setting.use_working_image.upload_pre"] = f["JS|UseWorkingImg.UseUploadPre"] = { config: "tempUseWorkingImg", configFn: function(a) { "1" == a && (e.useWorkingImg.use[0] = a) } }; f["XML|setting.use_working_image.upload_pre@image"] = f["JS|UseWorkingImg.UploadPreImage"] = {
								config: "tempWorkingImg", configFn: function(a) {
									"1" == e.useWorkingImg.use[0] && ("/" == a.substring(0, 1) && (a = location.protocol +
										"//" + location.host + a), e.useWorkingImg.image[0] = a)
								}
							}; f["XML|setting.use_working_image.upload_pre@caption"] = f["JS|UseWorkingImg.UploadPreCaption"] = { config: "tempWorkingCaption", configFn: function(a) { "1" == e.useWorkingImg.use[0] && (e.useWorkingImg.caption[0] = a) } }; f["XML|setting.use_working_image.upload_pre@use_once"] = f["JS|UseWorkingImg.UploadPreUseOnce"] = { config: "tempWorkingUseOnce", configFn: function(a) { "1" == e.useWorkingImg.use[0] && (e.useWorkingImg.useOnce[0] = RAONKUPLOAD.util.parseIntOr0(a)) } }; f["XML|setting.use_working_image.upload_end"] =
								f["JS|UseWorkingImg.UseUploadEnd"] = { config: "tempUseWorkingImg", configFn: function(a) { "1" == a && (e.useWorkingImg.use[1] = a) } }; f["XML|setting.use_working_image.upload_end@image"] = f["JS|UseWorkingImg.UploadEndImage"] = { config: "tempWorkingImg", configFn: function(a) { "1" == e.useWorkingImg.use[1] && ("/" == a.substring(0, 1) && (a = location.protocol + "//" + location.host + a), e.useWorkingImg.image[1] = a) } }; f["XML|setting.use_working_image.upload_end@caption"] = f["JS|UseWorkingImg.UploadEndCaption"] = {
									config: "tempWorkingCaption",
									configFn: function(a) { "1" == e.useWorkingImg.use[1] && (e.useWorkingImg.caption[1] = a) }
								}; f["XML|setting.use_working_image.upload_end@use_once"] = f["JS|UseWorkingImg.UploadEndUseOnce"] = { config: "tempWorkingUseOnce", configFn: function(a) { "1" == e.useWorkingImg.use[1] && (e.useWorkingImg.useOnce[1] = RAONKUPLOAD.util.parseIntOr0(a)) } }; f["XML|setting.use_working_image.download_pre"] = f["JS|UseWorkingImg.UseDownloadPre"] = { config: "tempUseWorkingImg", configFn: function(a) { "1" == a && (e.useWorkingImg.use[2] = a) } }; f["XML|setting.use_working_image.download_pre@image"] =
									f["JS|UseWorkingImg.DownloadPreImage"] = { config: "tempWorkingImg", configFn: function(a) { "1" == e.useWorkingImg.use[2] && ("/" == a.substring(0, 1) && (a = location.protocol + "//" + location.host + a), e.useWorkingImg.image[2] = a) } }; f["XML|setting.use_working_image.download_pre@caption"] = f["JS|UseWorkingImg.DownloadPreCaption"] = { config: "tempWorkingCaption", configFn: function(a) { "1" == e.useWorkingImg.use[2] && (e.useWorkingImg.caption[2] = a) } }; f["XML|setting.use_working_image.download_pre@use_once"] = f["JS|UseWorkingImg.DownloadPreUseOnce"] =
										{ config: "tempWorkingUseOnce", configFn: function(a) { "1" == e.useWorkingImg.use[2] && (e.useWorkingImg.useOnce[2] = RAONKUPLOAD.util.parseIntOr0(a)) } }; f["XML|setting.use_working_image.download_end"] = f["JS|UseWorkingImg.UseDownloadEnd"] = { config: "tempUseWorkingImg", configFn: function(a) { "1" == a && (e.useWorkingImg.use[3] = a) } }; f["XML|setting.use_working_image.download_end@image"] = f["JS|UseWorkingImg.DownloadEndImage"] = {
											config: "tempWorkingImg", configFn: function(a) {
												"1" == e.useWorkingImg.use[3] && ("/" == a.substring(0,
													1) && (a = location.protocol + "//" + location.host + a), e.useWorkingImg.image[3] = a)
											}
										}; f["XML|setting.use_working_image.download_end@caption"] = f["JS|UseWorkingImg.DownloadEndCaption"] = { config: "tempWorkingCaption", configFn: function(a) { "1" == e.useWorkingImg.use[3] && (e.useWorkingImg.caption[3] = a) } }; f["XML|setting.use_working_image.download_end@use_once"] = f["JS|UseWorkingImg.DownloadEndUseOnce"] = { config: "tempWorkingUseOnce", configFn: function(a) { "1" == e.useWorkingImg.use[3] && (e.useWorkingImg.useOnce[3] = RAONKUPLOAD.util.parseIntOr0(a)) } };
					f["XML|setting.thumbs_size"] = f["JS|ThumbsSize"] = {
						config: "thumbsSize", configFn: function(a) {
							-1 < a.indexOf(",") ? (88 < RAONKUPLOAD.util.parseIntOr0(a.split(",")[0]) && (e.canvasWidth = RAONKUPLOAD.util.parseIntOr0(a.split(",")[0])), 60 < RAONKUPLOAD.util.parseIntOr0(a.split(",")[1]) && (e.canvasHeight = RAONKUPLOAD.util.parseIntOr0(a.split(",")[1]))) : (88 < RAONKUPLOAD.util.parseIntOr0(a) && (e.canvasWidth = RAONKUPLOAD.util.parseIntOr0(a)), 60 < RAONKUPLOAD.util.parseIntOr0(a) && (e.canvasHeight = RAONKUPLOAD.util.parseIntOr0(a)));
							return a
						}
					}; f["XML|setting.thumbs_view_mode"] = f["JS|ThumbsViewMode"] = { config: "thumbsViewMode" }; f["JS|CloudInfo"] = { config: "cloudInfo" }; f["XML|setting.clound_info.use"] = { config: "cloudInfo.Use" }; f["XML|setting.cloud_info.use"] = { config: "cloudInfo.Use" }; f["XML|setting.use_zip_inspector"] = f["JS|UseZipInspector"] = { config: "useZipInspector" }; f["JS|ImageMultiThumnail"] = {
						config: "imageMultiThumnail", configFn: function(a) {
							if (e.imageMultiThumnail) {
								a = e.imageMultiThumnail.thumnail; for (var b = a.length, c = 0; c < b; c++)a[c].id =
									encodeURIComponent(a[c].id)
							} return a
						}
					}; f["XML|setting.agent_install_fail_check"] = f["JS|AgentInstallFailCheck.Use"] = { config: "agentInstallFailCheck.use" }; f["XML|setting.agent_install_fail_check@time"] = f["JS|AgentInstallFailCheck.Time"] = { config: "agentInstallFailCheck.time", configFn: function(a) { a = RAONKUPLOAD.util.parseIntOr0(a); 0 < a && (a = RAONKUPLOAD.util.parseIntOr0(a)); return a } }; f["XML|setting.agent_install_fail_check@stop_install_check"] = f["JS|AgentInstallFailCheck.StopInstallCheck"] = {
						config: "agentInstallFailCheck.stopInstallCheckTemp",
						configFn: function(a) { "1" == a ? e.agentInstallFailCheck.stopInstallCheck = !0 : "0" == a && (e.agentInstallFailCheck.stopInstallCheck = !1); return a }
					}; f["XML|setting.agent_transfer_type"] = f["JS|AgentTransferType"] = { config: "agentTransferType" }; f["XML|setting.multiple_access_check@use"] = f["JS|MultipleAccessCheck.Use"] = { config: "multipleAccessCheck.use" }; f["XML|setting.multiple_access_check@call_url"] = f["JS|MultipleAccessCheck.CallUrl"] = { config: "multipleAccessCheck.callUrl" }; f["XML|setting.multiple_access_check@check_interval"] =
						f["JS|MultipleAccessCheck.CheckInterval"] = { config: "multipleAccessCheck.checkInterval", configFn: function(a) { return RAONKUPLOAD.util.parseIntOr0(a) } }; f["XML|setting.multiple_access_check@exclude_ci"] = f["JS|MultipleAccessCheck.ExcludeCI"] = { config: "multipleAccessCheck.excludeCI" }; f["XML|setting.default_download_path"] = f["JS|DefaultDownloadPath"] = { config: "defaultDownloadPath" }; f["XML|setting.save_path_setting"] = f["JS|SavePathSetting"] = { config: "savePathSetting" }; f["XML|setting.transfer_background_style"] =
							f["JS|TransferBackgroundStyle"] = { config: "transferBackgroundStyle" }; f["XML|setting.zindex"] = f["JS|ZIndex"] = { config: "zIndex", configFn: function(a) { if (1E3 < parseInt(a, 10)) return parseInt(a, 10) } }; f["XML|setting.zip_file_name"] = f["JS|ZipFileName"] = { config: "zipFileName" }; f["XML|setting.use_hash_extract"] = f["JS|UseHashExtract"] = { config: "useHashExtract" }; f["XML|setting.move_mouse_drag"] = f["JS|MoveMouseDrag"] = { config: "moveMouseDrag" }; f["JS|CookieWindow"] = { config: "cookieWindow" }; f["XML|extend_function.function"] =
								f["JS|ExtendFunction"] = {
									config: "extendFunction", valueType: "array", jsFn: function(a) { return a }, xmlFn: function(a) {
										var b = a.length; if (1 == b) { if (this.nodeObj._attributes) { var c = { name: a, id: "" != this.nodeObj._attributes.id ? this.nodeObj._attributes.id : "", version: "" != this.nodeObj._attributes.version ? this.nodeObj._attributes.version : "" }; e.extendFunction.push(c) } return e.extendFunction } for (var d = 0; d < b; d++)this.nodeObj[d]._attributes && (c = {
											name: a[d], id: "" != this.nodeObj[d]._attributes.id ? this.nodeObj[d]._attributes.id :
												"", version: "" != this.nodeObj[d]._attributes.version ? this.nodeObj[d]._attributes.version : ""
										}, e.extendFunction.push(c)); return e.extendFunction
									}
								}; f["XML|setting.skip_internet_state"] = f["JS|SkipInternetState"] = { config: "skipInternetState" }; f["XML|setting.user_css_url"] = f["JS|UserCssUrl"] = { config: "userCssUrl" }; f["XML|setting.allow_duplication_file"] = f["JS|AllowDuplicationFile"] = { config: "allowDuplicationFile" }; f["XML|setting.use_session_keep"] = f["JS|SessionKeep.Use"] = { config: "sessionKeep.use" }; f["XML|setting.download_hybrid_app"] =
									f["JS|DownloadHybridApp"] = { config: "downloadHybridApp" }; f["XML|setting.use_swork_connect"] = f["JS|UseSWorkConnect"] = { config: "useSWorkConnect" }; f["XML|setting.drag_and_drop_mode"] = f["JS|DragAndDropMode"] = { config: "dragAndDropMode" }; f["XML|setting.use_download_cache"] = f["JS|UseDownloadCache"] = { config: "useDownloadCache" }; f["XML|setting.mobile_select_image"] = f["JS|MobileSelectImage"] = { config: "mobileSelectImage", configFn: function(a) { return RAONKUPLOAD.browser.mobile ? a : "0" } }; f["XML|setting.agent_event_method"] =
										f["JS|AgentEventMethod"] = { config: "agentEventMethod" }; f["XML|setting.disable_last_notify"] = f["JS|DisableLastNotify"] = { config: "disableLastNotify" }; f["XML|setting.enable_agent_shortcut"] = f["JS|EnableAgentShortcut"] = { config: "enableAgentShortcut" }; f["XML|setting.use_form_data_in_range_info"] = f["JS|UseFormDataInRangeInfo"] = { config: "useFormDataInRangeInfo" }; f["XML|setting.use_wireless_mode"] = f["JS|UseWirelessMode"] = { config: "useWirelessMode" }; f["XML|setting.use_local_file_download"] = f["JS|UseLocalFileDownload"] =
											{ config: "useLocalFileDownload" }; f["XML|setting.show_confirm_local_file_download"] = f["JS|ShowConfirmLocalFileDownload"] = { config: "showConfirmLocalFileDownload" }; f["XML|setting.auto_rename_local_file_download"] = f["JS|AutoRenameLocalFileDownload"] = { config: "autoRenameLocalFileDownload" }; f["XML|setting.show_progress_local_file_download"] = f["JS|ShowProgressLocalFileDownload"] = { config: "showProgressLocalFileDownload" }; f["XML|setting.alert_to_event"] = f["JS|AlertToEvent"] = { config: "alertToEvent" }; f["XML|setting.download_skip_check_with_file_size"] =
												f["JS|DownloadSkipCheckWithFileSize"] = { config: "downloadSkipCheckWithFileSize" }; f["XML|setting.pre_check_file_exist_in_download"] = f["JS|PreCheckFileExistInDownload"] = { config: "preCheckFileExistInDownload" }; f["XML|setting.report_failed_list"] = f["JS|ReportFailedList"] = { config: "reportFailedList" }; f["XML|uploader_setting.agent_download_method"] = f["JS|AgentDownloadMethod"] = { config: "agentDownloadMethod", configFn: function(a) { if ("" != a && "post" == a.toLowerCase()) return 1 } }; var u = function(a, b, d) {
													var f = e, g = a.config;
													if (-1 < g.indexOf(".")) { for (var g = g.split("."), h = 0; h < g.length - 1; h++)f = f[g[h]]; g = g[h] } if (d) { if ((b = d(b)) || 0 === b || "" == b) f[g] = b, a["set" + c] = 1 } else f[g] = b, a["set" + c] = 1
												}; (function() {
													for (var a in f) {
														var d = f[a]; if (!d["set" + c]) if (0 == a.indexOf("JS|")) {
															for (var e = a.substring(3).split("."), g = e.length, h = b, k = 0; k < g; k++)h = h ? h[e[k]] : void 0; e = !1; !d.allowEmpty || h && "" != h || (e = !0); if ("boolean" == typeof h || h && "" != h || d.allowEmpty) {
																d.jsFn && (returnValue = d.jsFn(h)) && (h = returnValue); try {
																	u(d, h, d.configFn), e && d.inEmpty && (d["set" + c] =
																		!0)
																} catch (l) { }
															}
														} else {
															for (var e = a.split("@"), g = e[0].split(":"), k = g[0].substring(4).split("."), m = k.length, g = 1 < g.length ? g[1] : 0, e = 1 < e.length ? e[1] : 0, h = q, n = 0; n < m; n++) { var p = k[n], h = h ? h[p] || (h[0] ? h[0][p] : void 0) : void 0; d.nodeObj = h } if (g && h) { m = !1; for (k = 0; k < h.length; k++)if (h[k]._value == g) { h = h[k]; m = !0; break } if (!m) continue } if ("undefined" != typeof h) {
																if (e) if ("array" == d.valueType) if (h.slice) {
																	tempXmlValue = h.slice(); for (k = 0; k < tempXmlValue.length; k++)tempXmlValue[k] = tempXmlValue[k]._attributes ? tempXmlValue[k]._attributes[e] :
																		""; h = tempXmlValue
																} else if (h._attributes) h = [h._attributes[e]]; else continue; else if (h._attributes) h = h._attributes[e]; else continue; else { g = e = !1; if ("object" == typeof h && 0 < h.length) { h.slice && (h = h.slice()); for (k = 0; k < h.length; k++)h[k]._value && (h[k] = h[k]._value); "array" != d.valueType ? h = h[0] : e = !0 } else if ("array" == d.valueType) h = [h._value], e = !0; else if ("object" == typeof h) { for (var r in h) { g = !0; break } g || (h = "") } !e && h._value && (h = h._value); e || "string" == typeof h || (h = "") } if ("boolean" == typeof h || h && "" != h || d.allowEmpty) {
																	d.xmlFn &&
																	(returnValue = d.xmlFn(h)) && (h = returnValue); try { u(d, h, d.configFn) } catch (t) { }
																}
															}
														}
													}
												})(); h = RAONKUPLOAD.util.xml.getNode(l, "setting"); "html5plus" == e.userRunTimeMode && (e.useWS = "1"); k = RAONKUPLOAD.util.GetUserRunTimeUpload(e.userRunTimeMode, e.useWS); e.userRunTimeMode = k.mode; 0 == k.isAgent && (e.useKManager = "0"); "0" == e.useKManager && "1" == e.silentDownloadEx && (e.useAfterDownloadEvent = "0", e.useFinishDownloadedEvent = "0", e.downloadMulti = "0", e.silentDownload = "1"); "1" == e.multipleAccessCheck.use && (e.useKManager = "1", e.checkNetworkSpeed =
													"0", e.developLang = "none"); "html4agent" == e.userRunTimeMode && (e.useKManager = "1", e.userRunTimeMode = "html4"); "" != b.AgentInstallFileUrl ? (e.agentInstallFileUrl = b.AgentInstallFileUrl, k = e.agentInstallFileUrl.split("/"), e.agentInstallFileName = k[k.length - 1]) : (k = RAONKUPLOAD.util.xml.getNodeValue(h, "agent_install_file_url"), "" != k && (e.agentInstallFileUrl = k, k = e.agentInstallFileUrl.split("/"), e.agentInstallFileName = k[k.length - 1])); "" != e.agentInstallFileName2 && ("" != b.AgentInstallFileUrl2 ? (e.agentInstallFileUrl2 =
														b.AgentInstallFileUrl2, k = e.agentInstallFileUrl2.split("/"), e.agentInstallFileName2 = k[k.length - 1]) : (k = RAONKUPLOAD.util.xml.getNodeValue(h, "agent_install_file_url2"), "" != k && (e.agentInstallFileUrl2 = k, k = e.agentInstallFileUrl2.split("/"), e.agentInstallFileName2 = k[k.length - 1]))); "1" == e.useKManager && (-1 < RAONKUPLOAD.UserAgent.device.type.toLowerCase().indexOf("mobile") ? e.useKManager = "0" : 0 == RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("windows") ? 0 > e.applyAgentOs.indexOf(",windows,") && (e.useKManager =
															"0") : 0 == RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("mac") ? 0 > e.applyAgentOs.indexOf(",mac,") ? e.useKManager = "0" : e.agentInstallFileName = "raonk-2018.pkg" : 0 == RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("fedora") ? -1 < e.applyAgentOs.indexOf(",linux,") || e.applyAgentOs.indexOf(",fedora,") ? e.agentInstallFileName = "raonk-2018.x86_64.rpm" : e.useKManager = "0" : 0 == RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("ubuntu") ? -1 < e.applyAgentOs.indexOf(",linux,") || e.applyAgentOs.indexOf(",ubuntu,") ? e.agentInstallFileName =
																"raonk-2018_amd64.deb" : e.useKManager = "0" : 0 == RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("linux") ? -1 < e.applyAgentOs.indexOf(",linux,") ? (e.agentInstallFileName = "raonk-2018_amd64.deb", e.agentInstallFileName2 = "raonk-2018.x86_64.rpm") : e.useKManager = "0" : e.useKManager = "0"); "" == e.agentInstallFileUrl && (e.agentInstallFileUrl = e.agentInstallFolderUrl + e.agentInstallFileName); "" != e.agentInstallFileName2 && "" == e.agentInstallFileUrl2 && (e.agentInstallFileUrl2 = e.agentInstallFolderUrl + e.agentInstallFileName2);
					"1" == e.useKManager && "1" == e.enforceHtml5 && (e.useKManager = "0"); "0" != e.useKManager || "html4" != e.userRunTimeMode || "" != e.showButtonBarEdit && 0 != e.showButtonBarEdit.length || (e.showButtonBarEdit = ["add"]); "1" == e.useKManager ? RAONKUPLOAD.browser.isHttps && (e.agentHttps = !0) : e.agentHttps = !1; "1" == e.folderTransfer && "0" == e.useKManager && (e.folderTransfer = "0"); RAONKUPLOAD.browser.iOS && "1" == e.resumeDownload && (e.resumeDownload = "0"); 5 == e.productKey.split("_").length && (e.useServerLicense = !0); h = RAONKUPLOAD.util.xml.getNode(l,
						"setting"); k = RAONKUPLOAD.util.xml.getNode(l, "uploader_setting"); switch (e.developLang.toUpperCase()) {
							case "JAVA": case "JSP": e.handlerUrl = RAONKUPLOAD.rootPath + "handler/raonkhandler.jsp"; e.viewerUrl = RAONKUPLOAD.rootPath + "handler/raonkviewer.jsp"; e.sessionKeep.url = RAONKUPLOAD.rootPath + "handler/raonksession.jsp"; e.kMonitorUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.jsp"; e.kMonitorPartUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.jsp"; break; case "PHP": e.handlerUrl = RAONKUPLOAD.rootPath + "handler/raonkhandler.php";
								e.viewerUrl = RAONKUPLOAD.rootPath + "handler/raonkviewer.php"; e.sessionKeep.url = RAONKUPLOAD.rootPath + "handler/raonksession.php"; e.kMonitorUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.php"; e.kMonitorPartUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.php"; break; case "NONE": e.handlerUrl = ""; e.viewerUrl = ""; break; default: e.handlerUrl = RAONKUPLOAD.rootPath + "handler/raonkhandler.ashx", e.viewerUrl = RAONKUPLOAD.rootPath + "handler/raonkviewer.aspx", e.sessionKeep.url = RAONKUPLOAD.rootPath + "handler/raonksession.aspx",
									e.kMonitorUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.ashx", e.kMonitorPartUrl = RAONKUPLOAD.rootPath + "handler/raonkmonitor.ashx"
						}"" != e.downloadHandlerUrl && (e.downloadHandlerUrl = RAONKUPLOAD.util.set_handlerUrl(e.downloadHandlerUrl)); "" != b.HandlerUrl ? e.handlerUrl = b.HandlerUrl : (xmlHandlerUrl = RAONKUPLOAD.util.xml.getNodeValue(k, "handler_url"), 0 < xmlHandlerUrl.length && (e.handlerUrl = xmlHandlerUrl)); e.handlerUrl = RAONKUPLOAD.util.set_handlerUrl(e.handlerUrl); "" != b.KMonitorUrl ? e.kMonitorUrl = b.KMonitorUrl :
							(m = RAONKUPLOAD.util.xml.getNode(h, "use_kmonitoring")) && m.getAttribute("url") && "" != m.getAttribute("url") && (e.kMonitorUrl = m.getAttribute("url")); e.kMonitorUrl = RAONKUPLOAD.util.set_handlerUrl(e.kMonitorUrl); "" != b.KMonitorPartUrl ? e.kMonitorPartUrl = b.KMonitorPartUrl : (m = RAONKUPLOAD.util.xml.getNode(h, "use_kmonitoring")) && m.getAttribute("part_url") && "" != m.getAttribute("part_url") ? e.kMonitorPartUrl = m.getAttribute("part_url") : e.kMonitorPartUrl = e.kMonitorUrl; e.kMonitorPartUrl = RAONKUPLOAD.util.set_handlerUrl(e.kMonitorPartUrl);
					"" != b.KMonitorPollingTime ? e.kMonitorPollingTime = b.KMonitorPollingTime : (m = RAONKUPLOAD.util.xml.getNode(h, "use_kmonitoring")) && m.getAttribute("polling_time") && "" != m.getAttribute("polling_time") && (e.kMonitorPollingTime = m.getAttribute("polling_time")); "" != b.KMonitorSkipCachedBandwidth ? e.kMonitorSkipCachedBandwidth = b.KMonitorSkipCachedBandwidth : (m = RAONKUPLOAD.util.xml.getNode(h, "use_kmonitoring")) && m.getAttribute("skip_cached_bandwidth") && "" != m.getAttribute("skip_cached_bandwidth") && (e.kMonitorSkipCachedBandwidth =
						m.getAttribute("skip_cached_bandwidth")); 0 == RAONKUPLOAD.browser.iOS && 4 < e.handlerUrl.length && "http" == e.handlerUrl.substring(0, 4).toLowerCase() && 0 == RAONKUPLOAD.browser.HTML5Supported && e.handlerUrl.match(/:\/\/(.[^\/]+)/)[1] != window.location.host && "file:" != location.protocol && (e.isCrossDomain = !0); "" != b.ViewerHandlerUrl ? e.viewerUrl = b.ViewerHandlerUrl : (k = RAONKUPLOAD.util.xml.getNodeValue(k, "viewer_handler_url"), "" != k && (e.viewerUrl = k)); e.viewerUrl = RAONKUPLOAD.util.set_handlerUrl(e.viewerUrl); "1" == e.sessionKeep.use &&
							(h = RAONKUPLOAD.util.xml.getNode(h, "use_session_keep"), "" != b.SessionKeep.Url ? e.sessionKeep.url = b.SessionKeep.Url : (k = h.getAttribute("url"), "" != k && (e.sessionKeep.url = k)), e.sessionKeep.url = RAONKUPLOAD.util.set_handlerUrl(e.sessionKeep.url), "" != b.SessionKeep.RetryTime ? e.sessionKeep.retryTime = b.SessionKeep.RetryTime : (h = h.getAttribute("retry_time"), "" != h && (e.sessionKeep.retryTime = h))); e.processHandlerUrl = "" != e.processHandlerUrl ? RAONKUPLOAD.util.set_handlerUrl(e.processHandlerUrl) : "" == e.downloadHandlerUrl ?
								e.handlerUrl : e.downloadHandlerUrl; "1" == e.resumeUpload && "0" == e.useKManager && "html5" == e.userRunTimeMode && 0 == RAONKUPLOAD.browser.LocalStorageSupported && (e.resumeUpload = "0"); 0 > RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("windows") && "1" == e.useKManager && (e.listViewDragAndDrop = "0", e.useDropzone = "0"); "0" != e.uploadTransferWindow.view && RAONKUPLOAD.browser.mobile && (e.uploadTransferWindow.view = "0"); "1" == e.useKManager && "1" == e.useLogoImage.use && "" != e.useLogoImage.logoPath && (e.useLogoImage.logoPath = RAONKUPLOAD.util.set_handlerUrl(e.useLogoImage.logoPath));
					"1" == e.useKManager || "0" == e.useKManager && -1 < e.userRunTimeMode.indexOf("html5") ? (e.imageQuality.quality = parseFloat(e.imageQuality.quality), e.imageQuality.workerCount = RAONKUPLOAD.util.parseIntOr0(e.imageQuality.workerCount), e.imageQuality.extension = "," + e.imageQuality.extension + ",", "0" != e.imageQuality.overFileSize && (h = RAONKUPLOAD.util.getUnit(e.imageQuality.overFileSize), h = RAONKUPLOAD.util.getUnitSize(h), k = parseInt(e.imageQuality.overFileSize, 10), e.imageQuality.overFileSize = k * h)) : (e.imageQuality.quality =
						1, e.imageQuality.workerCount = 7, e.imageQuality.extension = "", e.imageQuality.changedExtension = "jpg", e.imageQuality.overFileSize = "0", e.imageQuality.processingWindow = "0"); e.imageQuality.changedExtension = "0" == e.useKManager ? "jpg" : "png" == e.imageQuality.changedExtension ? "png" : "jpg"; 0 < e.useCompressTransfer && "1" != e.useKManager && ("html5" != e.userRunTimeMode ? e.useCompressTransfer = "0" : e.workerSupported ? "1" != e.useCompressTransferHtml5 && "0" == e.useCompressTransferHtml5 && (e.useCompressTransfer = "0") : e.useCompressTransfer =
							"0"); "1" == e.useZipInspector && "0" == e.useKManager && (e.useZipInspector = "0"); "" != e.extension.allowOrLimit.toString() && "" != e.extension.extArr && (-1 < e.extension.extArr.indexOf("|") ? e.extension.extToString = e.extension.extArr : (e.extension.extArr = e.extension.extArr.toLowerCase().split(","), e.extension.extToString = e.extension.extArr.toString())); if ("0" == e.useKManager && "html5" == e.userRunTimeMode && RAONKUPLOAD.browser.WorkerSupported) {
								h = ""; h = RAONKUPLOAD.ReleaseVer; "1" == e.cacheProtectMode && (h = RAONKUPLOAD.util.getTimeStamp());
								h = RAONKUPLOAD.isRelease ? e.webPath.js + "raonkupload.processuploadfile.min.js?ver=" + h : e.webPath.jsDev + "raonkupload.processuploadfile.js?ver=" + h; try { (new Worker(h)).terminate() } catch (t) { RAONKUPLOAD.browser.WorkerSupported = !1, e.workerSupported = !1 }
							} e.webPath.css.lastIndexOf("/") < e.webPath.css.length - 1 && (e.webPath.css += "/"); e.webPath.cssDev.lastIndexOf("/") < e.webPath.cssDev.length - 1 && (e.webPath.cssDev += "/"); if ("1" != e.agentMultiUploadCount || "1" != e.agentMultiDownloadCount) e.agentMultiTransferCount = e.agentMultiUploadCount >
								e.agentMultiDownloadCount ? e.agentMultiUploadCount : e.agentMultiDownloadCount; if ("0" == e.useKManager && "html5" == e.userRunTimeMode && 1 == RAONKUPLOAD.browser.WorkerSupported && RAONKUPLOAD.browser.ie) {
									h = RAONKUPLOAD.ReleaseVer; "1" == e.cacheProtectMode && (h = RAONKUPLOAD.util.getTimeStamp()); var v = new Worker(RAONKUPLOAD.isRelease ? e.webPath.js + "raonkupload.processuploadfile.min.js?ver=" + h : e.webPath.jsDev + "raonkupload.processuploadfile.js?ver=" + h); v.onmessage = function(a) {
										a = a.data; switch (a.type) {
											case "check_formdata": RAONKUPLOAD.browser.WorkerSupported =
												a.isFormDataSupport, e.workerSupported = a.isFormDataSupport, v.terminate()
										}
									}; v.onerror = function(a) { v.terminate() }; v.postMessage({ type: "check_formdata" })
								} k = RAONKUPLOAD.util.xml.getNode(l, "add_ext_icon"); m = RAONKUPLOAD.util.xml.count(k, "icon"); for (h = 0; h < m; h++)n = RAONKUPLOAD.util.xml.getNodeValueIdx(k, "icon", h), e.addExtIcon[h] = n; h = RAONKUPLOAD.util.xml.getNode(l, "setting"); l = RAONKUPLOAD.util.xml.getNode(h, "security"); RAONKUPLOAD.util.setSecuritySetting(b, l, e, !1); l = document.location.href; -1 < l.indexOf("?") &&
									(l = l.substring(0, l.indexOf("?"))); "" != e.extension.extToString && -1 < e.extension.extToString.indexOf("|") && (-1 < e.extension.extToString.indexOf("*.*") ? (e.extension.extArr = [], e.extension.mimeAccept = "") : (l = RAONKUPLOAD.util.getExtStringFromExtEx(e.extension.extToString), e.extension.extArr = l.split(","), "1" == e.extension.allowOrLimit && (e.extension.mimeAccept = RAONKUPLOAD.util.getMimeFilter(e.extension.extArr.toString())))); l = e.headerBarItemWidth.length; for (h = 0; h < l; h++)e.headerBarItemWidth[h] = RAONKUPLOAD.util.parseIntOr0(e.headerBarItemWidth[h]) +
										"px"; if ("NONE" == e.developLang.toUpperCase()) { RAONKUPLOAD.util.setSecuritySetting(b, null, e, !0); e.sizeForChunkUpload = 0; if (0 == e.maxOneFileSize || 2147483648 < e.maxOneFileSize) e.maxOneFileSize = 2147483648; RAONKUPLOAD.ServerReleaseVer = RAONKUPLOAD.ReleaseVer } else if (h = e.handlerUrl, l = "" + ("kc" + RAONKSolution.Agent.formfeed + "c00" + RAONKSolution.Agent.vertical), l += "k01" + RAONKSolution.Agent.formfeed + e.security.encryptParam, e.isCrossDomain && (l += RAONKSolution.Agent.vertical + "k22" + RAONKSolution.Agent.formfeed + "1"), l =
											RAONKUPLOAD.util.makeEncryptParam(l), h = -1 < h.indexOf("?") ? h + ("&raonk=" + RAONKUPLOAD.util.getTimeStamp()) : h + ("?raonk=" + RAONKUPLOAD.util.getTimeStamp()), e.isCrossDomain) {
												if (RAONKUPLOAD.browser.postMessageSupported) {
													var x = document.createElement("div"), k = RAONKUPLOAD.util.getDefaultIframeSrc(); x.innerHTML = '<iframe name="initCheckframe" id="initCheckframe" style="display:none;" src="' + k + '"></iframe>'; x.style.display = "none"; document.body.appendChild(x); RAONKUPLOAD.util.postFormData(document, h, "initCheckframe",
														[["k00", l]]); RAONKUPLOAD.util.addEvent(x.firstChild, "load", function() { x.firstChild.contentWindow.postMessage("check", "*") }, !0); if (window.postMessage) { var y = function(a) { a = RAONKUPLOAD.util.trim(a.data); RAONKUPLOAD.util.initHandlerCheck(a, e, b); document.body.removeChild(x); RAONKUPLOAD.util.removeEvent(window, "message", y) }; RAONKUPLOAD.util.addEvent(window, "message", y) }
												}
										} else RAONKUPLOAD.ajax.postData(h, "k00=" + l, function(a) { RAONKUPLOAD.util.initHandlerCheck(a, e, b) }); null != e.cloudInfo && (e.cloudInfo.AccessKeyID &&
											(e.cloudInfo.AccessKeyID = encodeURIComponent(e.cloudInfo.AccessKeyID)), e.cloudInfo.SecretKey && (e.cloudInfo.SecretKey = encodeURIComponent(e.cloudInfo.SecretKey)), e.cloudInfo.EndPoint && (e.cloudInfo.EndPoint = encodeURIComponent(e.cloudInfo.EndPoint)), e.cloudInfo.Bucket && (e.cloudInfo.Bucket = encodeURIComponent(e.cloudInfo.Bucket)), e.cloudInfo.AuthHeader && (e.cloudInfo.AuthHeader = encodeURIComponent(e.cloudInfo.AuthHeader))); "0" != e.useCompressTransfer && 0 > RAONKUPLOAD.UserAgent.os.name.toLowerCase().indexOf("windows") &&
												(e.useCompressTransfer = "2"); l = ""; l = e.minHeight; l = "1" == e.showHeaderBar ? l + RAONKUPLOAD.util.parseIntOr0(e.customHeaderHeight) - e.minHeaderBarHeight : l - e.minHeaderBarHeight; "0" == e.showStatusBar && (l -= e.statusBarHeight); "upload" == e.mode ? 0 == e.showButtonBarEdit.length && "0" == e.useKManager && "html4" != e.userRunTimeMode && (l -= e.buttonBarHeight) : 0 == e.showButtonBarView.length && (l -= e.buttonBarHeight); e.minHeight = l; 0 > e.height.indexOf("%") && l > RAONKUPLOAD.util.parseIntOr0(e.height) && (e.height = l + "px"); "1" == e.useKMonitoring &&
													(e.agentMultiUploadCount = "1", e.agentMultiDownloadCount = "1"); 0 == RAONKUPLOAD.browser.mobile && (e.useExcuteDownloadInMobile = "0"); l = e.initVisible ? '<div id="raonkuploader_holder_' + c + '" style="width:' + e.width + "; height:" + e.height + '"></div>' : '<div id="raonkuploader_holder_' + c + '" style="width:' + e.width + '; height:0px; display:none;"></div>'; "" != b.UploadHolder ? (h = document.getElementById(b.UploadHolder)) ? h.innerHTML = l : document.write(l) : document.write(l); l = document.getElementById("raonkuploader_holder_" + c); RAONKUPLOAD.util.createUploaderIframe(e,
														l, this, "raonkuploader_frame_" + c, "", c)
				}
	}
};
