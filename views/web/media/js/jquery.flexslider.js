(function(d) {
	d.flexslider = function(f, l) {
		var a = d(f);
		a.vars = d.extend({}, d.flexslider.defaults, l);
		var c = a.vars.namespace,
			w = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
			v = ("ontouchstart" in window || w || window.DocumentTouch && document instanceof DocumentTouch) && a.vars.touch,
			m = "",
			t, p = "vertical" === a.vars.direction,
			n = a.vars.reverse,
			h = 0 < a.vars.itemWidth,
			r = "fade" === a.vars.animation,
			q = "" !== a.vars.asNavFor,
			g = {};
		d.data(f, "flexslider", a);
		g = {
			init: function() {
				a.animating = !1;
				a.currentSlide = parseInt(a.vars.startAt ? a.vars.startAt : 0);
				isNaN(a.currentSlide) && (a.currentSlide = 0);
				a.animatingTo = a.currentSlide;
				a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last;
				a.containerSelector = a.vars.selector.substr(0, a.vars.selector.search(" "));
				a.slides = d(a.vars.selector, a);
				a.container = d(a.containerSelector, a);
				a.count = a.slides.length;
				a.syncExists = 0 < d(a.vars.sync).length;
				"slide" === a.vars.animation && (a.vars.animation = "swing");
				a.prop = p ? "top" : "marginLeft";
				a.args = {};
				a.manualPause = !1;
				a.stopped = !1;
				a.started = !1;
				a.startTimeout = null;
				a.transitions = !a.vars.video && !r && a.vars.useCSS &&
				function() {
					var b = document.createElement("div"),
						e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
						k;
					for (k in e) if (void 0 !== b.style[e[k]]) return a.pfx = e[k].replace("Perspective", "").toLowerCase(), a.prop = "-" + a.pfx + "-transform", !0;
					return !1
				}();
				"" !== a.vars.controlsContainer && (a.controlsContainer = 0 < d(a.vars.controlsContainer).length && d(a.vars.controlsContainer));
				"" !== a.vars.manualControls && (a.manualControls = 0 < d(a.vars.manualControls).length && d(a.vars.manualControls));
				a.vars.randomize && (a.slides.sort(function() {
					return Math.round(Math.random()) - .5
				}), a.container.empty().append(a.slides));
				a.doMath();
				a.setup("init");
				a.vars.controlNav && g.controlNav.setup();
				a.vars.directionNav && g.directionNav.setup();
				a.vars.keyboard && (1 === d(a.containerSelector).length || a.vars.multipleKeyboard) && d(document).bind("keyup", function(b) {
					b = b.keyCode;
					a.animating || 39 !== b && 37 !== b || (b = 39 === b ? a.getTarget("next") : 37 === b ? a.getTarget("prev") : !1, a.flexAnimate(b, a.vars.pauseOnAction))
				});
				a.vars.mousewheel && a.bind("mousewheel", function(b, e, k, d) {
					b.preventDefault();
					b = 0 > e ? a.getTarget("next") : a.getTarget("prev");
					a.flexAnimate(b, a.vars.pauseOnAction)
				});
				a.vars.pausePlay && g.pausePlay.setup();
				a.vars.slideshow && a.vars.pauseInvisible && g.pauseInvisible.init();
				a.vars.slideshow && (a.vars.pauseOnHover && a.hover(function() {
					a.manualPlay || a.manualPause || a.pause()
				}, function() {
					a.manualPause || a.manualPlay || a.stopped || a.play()
				}), a.vars.pauseInvisible && g.pauseInvisible.isHidden() || (0 < a.vars.initDelay ? a.startTimeout = setTimeout(a.play, a.vars.initDelay) : a.play()));
				q && g.asNav.setup();
				v && a.vars.touch && g.touch();
				(!r || r && a.vars.smoothHeight) && d(window).bind("resize orientationchange focus", g.resize);
				a.find("img").attr("draggable", "false");
				setTimeout(function() {
					a.vars.start(a)
				}, 200)
			},
			asNav: {
				setup: function() {
					a.asNav = !0;
					a.animatingTo = Math.floor(a.currentSlide / a.move);
					a.currentItem = a.currentSlide;
					a.slides.removeClass(c + "active-slide").eq(a.currentItem).addClass(c + "active-slide");
					w ? (f._slider = a, a.slides.each(function() {
						this._gesture = new MSGesture;
						this._gesture.target = this;
						this.addEventListener("MSPointerDown", function(a) {
							a.preventDefault();
							a.currentTarget._gesture && a.currentTarget._gesture.addPointer(a.pointerId)
						}, !1);
						this.addEventListener("MSGestureTap", function(b) {
							b.preventDefault();
							b = d(this);
							var e = b.index();
							d(a.vars.asNavFor).data("flexslider").animating || b.hasClass("active") || (a.direction = a.currentItem < e ? "next" : "prev", a.flexAnimate(e, a.vars.pauseOnAction, !1, !0, !0))
						})
					})) : a.slides.click(function(b) {
						b.preventDefault();
						b = d(this);
						var e = b.index();
						0 >= b.offset().left - d(a).scrollLeft() && b.hasClass(c + "active-slide") ? a.flexAnimate(a.getTarget("prev"), !0) : d(a.vars.asNavFor).data("flexslider").animating || b.hasClass(c + "active-slide") || (a.direction = a.currentItem < e ? "next" : "prev", a.flexAnimate(e, a.vars.pauseOnAction, !1, !0, !0))
					})
				}
			},
			controlNav: {
				setup: function() {
					a.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging()
				},
				setupPaging: function() {
					var b = 1,
						e, k;
					a.controlNavScaffold = d('<ol class="' + c + "control-nav " + c + ("thumbnails" === a.vars.controlNav ? "control-thumbs" : "control-paging") + '"></ol>');
					if (1 < a.pagingCount) for (var f = 0; f < a.pagingCount; f++) k = a.slides.eq(f), e = "thumbnails" === a.vars.controlNav ? '<img src="' + k.attr("data-thumb") + '"/>' : "<a>" + b + "</a>", "thumbnails" === a.vars.controlNav && !0 === a.vars.thumbCaptions && (k = k.attr("data-thumbcaption"), "" != k && void 0 != k && (e += '<span class="' + c + 'caption">' + k + "</span>")), a.controlNavScaffold.append("<li>" + e + "</li>"), b++;
					a.controlsContainer ? d(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold);
					g.controlNav.set();
					g.controlNav.active();
					a.controlNavScaffold.delegate("a, img", "click touchend MSPointerUp", function(b) {
						b.preventDefault();
						if ("" === m || m === b.type) {
							var e = d(this),
								k = a.controlNav.index(e);
							e.hasClass(c + "active") || (a.direction = k > a.currentSlide ? "next" : "prev", a.flexAnimate(k, a.vars.pauseOnAction))
						}
						"" === m && (m = b.type);
						g.setToClearWatchedEvent()
					})
				},
				setupManual: function() {
					a.controlNav = a.manualControls;
					g.controlNav.active();
					a.controlNav.bind("click touchend MSPointerUp", function(b) {
						b.preventDefault();
						if ("" === m || m === b.type) {
							var e = d(this),
								k = a.controlNav.index(e);
							e.hasClass(c + "active") || (k > a.currentSlide ? a.direction = "next" : a.direction = "prev", a.flexAnimate(k, a.vars.pauseOnAction))
						}
						"" === m && (m = b.type);
						g.setToClearWatchedEvent()
					})
				},
				set: function() {
					a.controlNav = d("." + c + "control-nav li " + ("thumbnails" === a.vars.controlNav ? "img" : "a"), a.controlsContainer ? a.controlsContainer : a)
				},
				active: function() {
					a.controlNav.removeClass(c + "active").eq(a.animatingTo).addClass(c + "active")
				},
				update: function(b, e) {
					1 < a.pagingCount && "add" === b ? a.controlNavScaffold.append(d("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(e).closest("li").remove();
					g.controlNav.set();
					1 < a.pagingCount && a.pagingCount !== a.controlNav.length ? a.update(e, b) : g.controlNav.active()
				}
			},
			directionNav: {
				setup: function() {
					var b = d('<ul class="' + c + 'direction-nav"><li><a class="' + c + 'prev" href="#">' + a.vars.prevText + '</a></li><li><a class="' + c + 'next" href="#">' + a.vars.nextText + "</a></li></ul>");
					a.controlsContainer ? (d(a.controlsContainer).append(b), a.directionNav = d("." + c + "direction-nav li a", a.controlsContainer)) : (a.append(b), a.directionNav = d("." + c + "direction-nav li a", a));
					g.directionNav.update();
					a.directionNav.bind("click touchend MSPointerUp", function(b) {
						b.preventDefault();
						var k;
						if ("" === m || m === b.type) k = d(this).hasClass(c + "next") ? a.getTarget("next") : a.getTarget("prev"), a.flexAnimate(k, a.vars.pauseOnAction);
						"" === m && (m = b.type);
						g.setToClearWatchedEvent()
					})
				},
				update: function() {
					var b = c + "disabled";
					1 === a.pagingCount ? a.directionNav.addClass(b).attr("tabindex", "-1") : a.vars.animationLoop ? a.directionNav.removeClass(b).removeAttr("tabindex") : 0 === a.animatingTo ? a.directionNav.removeClass(b).filter("." + c + "prev").addClass(b).attr("tabindex", "-1") : a.animatingTo === a.last ? a.directionNav.removeClass(b).filter("." + c + "next").addClass(b).attr("tabindex", "-1") : a.directionNav.removeClass(b).removeAttr("tabindex")
				}
			},
			pausePlay: {
				setup: function() {
					var b = d('<div class="' + c + 'pauseplay"><a></a></div>');
					a.controlsContainer ? (a.controlsContainer.append(b), a.pausePlay = d("." + c + "pauseplay a", a.controlsContainer)) : (a.append(b), a.pausePlay = d("." + c + "pauseplay a", a));
					g.pausePlay.update(a.vars.slideshow ? c + "pause" : c + "play");
					a.pausePlay.bind("click touchend MSPointerUp", function(b) {
						b.preventDefault();
						if ("" === m || m === b.type) d(this).hasClass(c + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play());
						"" === m && (m = b.type);
						g.setToClearWatchedEvent()
					})
				},
				update: function(b) {
					"play" === b ? a.pausePlay.removeClass(c + "pause").addClass(c + "play").html(a.vars.playText) : a.pausePlay.removeClass(c + "play").addClass(c + "pause").html(a.vars.pauseText)
				}
			},
			touch: function() {
				var b, e, k, d, c, g, m = !1,
					l = 0,
					q = 0,
					u = 0;
				if (w) f.style.msTouchAction = "none", f._gesture = new MSGesture, f._gesture.target = f, f.addEventListener("MSPointerDown", function(b) {
					b.stopPropagation();
					a.animating ? b.preventDefault() : (a.pause(), f._gesture.addPointer(b.pointerId), u = 0, d = p ? a.h : a.w, g = Number(new Date), k = h && n && a.animatingTo === a.last ? 0 : h && n ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : h && a.currentSlide === a.last ? a.limit : h ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : n ? (a.last - a.currentSlide + a.cloneOffset) * d : (a.currentSlide + a.cloneOffset) * d)
				}, !1), f._slider = a, f.addEventListener("MSGestureChange", function(a) {
					a.stopPropagation();
					var b = a.target._slider;
					if (b) {
						var e = -a.translationX,
							h = -a.translationY;
						c = u += p ? h : e;
						m = p ? Math.abs(u) < Math.abs(-e) : Math.abs(u) < Math.abs(-h);
						if (a.detail === a.MSGESTURE_FLAG_INERTIA) setImmediate(function() {
							f._gesture.stop()
						});
						else if (!m || 500 < Number(new Date) - g) a.preventDefault(), !r && b.transitions && (b.vars.animationLoop || (c = u / (0 === b.currentSlide && 0 > u || b.currentSlide === b.last && 0 < u ? Math.abs(u) / d + 2 : 1)), b.setProps(k + c, "setTouch"))
					}
				}, !1), f.addEventListener("MSGestureEnd", function(a) {
					a.stopPropagation();
					if (a = a.target._slider) {
						if (a.animatingTo === a.currentSlide && !m && null !== c) {
							var f = n ? -c : c,
								h = 0 < f ? a.getTarget("next") : a.getTarget("prev");
							a.canAdvance(h) && (550 > Number(new Date) - g && 50 < Math.abs(f) || Math.abs(f) > d / 2) ? a.flexAnimate(h, a.vars.pauseOnAction) : r || a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, !0)
						}
						k = c = e = b = null;
						u = 0
					}
				}, !1);
				else {
					var v = function(h) {
							f.removeEventListener("touchmove", t, !1);
							if (a.animatingTo === a.currentSlide && !m && null !== c) {
								h = n ? -c : c;
								var l = 0 < h ? a.getTarget("next") : a.getTarget("prev");
								a.canAdvance(l) && (550 > Number(new Date) - g && 50 < Math.abs(h) || Math.abs(h) > d / 2) ? a.flexAnimate(l, a.vars.pauseOnAction) : r || a.flexAnimate(a.currentSlide, a.vars.pauseOnAction, !0)
							}
							f.removeEventListener("touchend", v, !1);
							k = c = e = b = null
						},
						t = function(f) {
							l = f.touches[0].pageX;
							q = f.touches[0].pageY;
							c = p ? b - q : b - l;
							m = p ? Math.abs(c) < Math.abs(l - e) : Math.abs(c) < Math.abs(q - e);
							if (!m || 500 < Number(new Date) - g) f.preventDefault(), !r && a.transitions && (a.vars.animationLoop || (c /= 0 === a.currentSlide && 0 > c || a.currentSlide === a.last && 0 < c ? Math.abs(c) / d + 2 : 1), a.setProps(k + c, "setTouch"))
						};
					f.addEventListener("touchstart", function(c) {
						if (a.animating) c.preventDefault();
						else if (window.navigator.msPointerEnabled || 1 === c.touches.length) a.pause(), d = p ? a.h : a.w, g = Number(new Date), l = c.touches[0].pageX, q = c.touches[0].pageY, k = h && n && a.animatingTo === a.last ? 0 : h && n ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : h && a.currentSlide === a.last ? a.limit : h ? (a.itemW + a.vars.itemMargin) * a.move * a.currentSlide : n ? (a.last - a.currentSlide + a.cloneOffset) * d : (a.currentSlide + a.cloneOffset) * d, b = p ? q : l, e = p ? l : q, f.addEventListener("touchmove", t, !1), f.addEventListener("touchend", v, !1)
					}, !1)
				}
			},
			resize: function() {
				!a.animating && a.is(":visible") && (h || a.doMath(), r ? g.smoothHeight() : h ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : p ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (a.vars.smoothHeight && g.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")))
			},
			smoothHeight: function(b) {
				if (!p || r) {
					var e = r ? a : a.viewport;
					b ? e.animate({
						height: a.slides.eq(a.animatingTo).height()
					}, b) : e.height(a.slides.eq(a.animatingTo).height())
				}
			},
			sync: function(b) {
				var e = d(a.vars.sync).data("flexslider"),
					c = a.animatingTo;
				switch (b) {
				case "animate":
					e.flexAnimate(c, a.vars.pauseOnAction, !1, !0);
					break;
				case "play":
					e.playing || e.asNav || e.play();
					break;
				case "pause":
					e.pause()
				}
			},
			pauseInvisible: {
				visProp: null,
				init: function() {
					var b = ["webkit", "moz", "ms", "o"];
					if ("hidden" in document) return "hidden";
					for (var e = 0; e < b.length; e++) b[e] + "Hidden" in document && (g.pauseInvisible.visProp = b[e] + "Hidden");
					g.pauseInvisible.visProp && (b = g.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange", document.addEventListener(b, function() {
						g.pauseInvisible.isHidden() ? a.startTimeout ? clearTimeout(a.startTimeout) : a.pause() : a.started ? a.play() : 0 < a.vars.initDelay ? setTimeout(a.play, a.vars.initDelay) : a.play()
					}))
				},
				isHidden: function() {
					return document[g.pauseInvisible.visProp] || !1
				}
			},
			setToClearWatchedEvent: function() {
				clearTimeout(t);
				t = setTimeout(function() {
					m = ""
				}, 3E3)
			}
		};
		a.flexAnimate = function(b, e, k, f, m) {
			!a.vars.animationLoop && b !== a.currentSlide && (a.direction = b > a.currentSlide ? "next" : "prev");
			q && 1 === a.pagingCount && (a.direction = a.currentItem < b ? "next" : "prev");
			if (!a.animating && (a.canAdvance(b, m) || k) && a.is(":visible")) {
				if (q && f) {
					k = d(a.vars.asNavFor).data("flexslider");
					a.atEnd = 0 === b || b === a.count - 1;
					k.flexAnimate(b, !0, !1, !0, m);
					a.direction = a.currentItem < b ? "next" : "prev";
					k.direction = a.direction;
					if (Math.ceil((b + 1) / a.visible) - 1 === a.currentSlide || 0 === b) return a.currentItem = b, a.slides.removeClass(c + "active-slide").eq(b).addClass(c + "active-slide"), !1;
					a.currentItem = b;
					a.slides.removeClass(c + "active-slide").eq(b).addClass(c + "active-slide");
					b = Math.floor(b / a.visible)
				}
				a.animating = !0;
				a.animatingTo = b;
				e && a.pause();
				a.vars.before(a);
				a.syncExists && !m && g.sync("animate");
				a.vars.controlNav && g.controlNav.active();
				h || a.slides.removeClass(c + "active-slide").eq(b).addClass(c + "active-slide");
				a.atEnd = 0 === b || b === a.last;
				a.vars.directionNav && g.directionNav.update();
				b === a.last && (a.vars.end(a), a.vars.animationLoop || a.pause());
				if (r) v ? (a.slides.eq(a.currentSlide).css({
					opacity: 0,
					zIndex: 1
				}), a.slides.eq(b).css({
					opacity: 1,
					zIndex: 2
				}), a.wrapup(l)) : (a.slides.eq(a.currentSlide).css({
					zIndex: 1
				}).animate({
					opacity: 0
				}, a.vars.animationSpeed, a.vars.easing), a.slides.eq(b).css({
					zIndex: 2
				}).animate({
					opacity: 1
				}, a.vars.animationSpeed, a.vars.easing, a.wrapup));
				else {
					var l = p ? a.slides.filter(":first").height() : a.computedW,
						t;
					h ? (b = a.vars.itemMargin, b = (a.itemW + b) * a.move * a.animatingTo, t = b > a.limit && 1 !== a.visible ? a.limit : b) : 0 === a.currentSlide && b === a.count - 1 && a.vars.animationLoop && "next" !== a.direction ? t = n ? (a.count + a.cloneOffset) * l : 0 : a.currentSlide === a.last && 0 === b && a.vars.animationLoop && "prev" !== a.direction ? t = n ? 0 : (a.count + 1) * l : t = n ? (a.count - 1 - b + a.cloneOffset) * l : (b + a.cloneOffset) * l;
					a.setProps(t, "", a.vars.animationSpeed);
					a.transitions ? (a.vars.animationLoop && a.atEnd || (a.animating = !1, a.currentSlide = a.animatingTo), a.container.unbind("webkitTransitionEnd transitionend"), a.container.bind("webkitTransitionEnd transitionend", function() {
						a.wrapup(l)
					})) : a.container.animate(a.args, a.vars.animationSpeed, a.vars.easing, function() {
						a.wrapup(l)
					})
				}
				a.vars.smoothHeight && g.smoothHeight(a.vars.animationSpeed)
			}
		};
		a.wrapup = function(b) {
			!r && !h && (0 === a.currentSlide && a.animatingTo === a.last && a.vars.animationLoop ? a.setProps(b, "jumpEnd") : a.currentSlide === a.last && 0 === a.animatingTo && a.vars.animationLoop && a.setProps(b, "jumpStart"));
			a.animating = !1;
			a.currentSlide = a.animatingTo;
			a.vars.after(a)
		};
		a.animateSlides = function() {
			!a.animating && a.flexAnimate(a.getTarget("next"))
		};
		a.pause = function() {
			clearInterval(a.animatedSlides);
			a.animatedSlides = null;
			a.playing = !1;
			a.vars.pausePlay && g.pausePlay.update("play");
			a.syncExists && g.sync("pause")
		};
		a.play = function() {
			a.playing && clearInterval(a.animatedSlides);
			a.animatedSlides = a.animatedSlides || setInterval(a.animateSlides, a.vars.slideshowSpeed);
			a.started = a.playing = !0;
			a.vars.pausePlay && g.pausePlay.update("pause");
			a.syncExists && g.sync("play")
		};
		a.stop = function() {
			a.pause();
			a.stopped = !0
		};
		a.canAdvance = function(b, e) {
			var c = q ? a.pagingCount - 1 : a.last;
			return e ? !0 : q && a.currentItem === a.count - 1 && 0 === b && "prev" === a.direction ? !0 : q && 0 === a.currentItem && b === a.pagingCount - 1 && "next" !== a.direction ? !1 : b !== a.currentSlide || q ? a.vars.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && b === c && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === c && 0 === b && "next" === a.direction ? !1 : !0 : !1
		};
		a.getTarget = function(b) {
			a.direction = b;
			return "next" === b ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1
		};
		a.setProps = function(b, e, c) {
			var d = function() {
					var c = b ? b : (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo;
					return -1 *
					function() {
						if (h) return "setTouch" === e ? b : n && a.animatingTo === a.last ? 0 : n ? a.limit - (a.itemW + a.vars.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : c;
						switch (e) {
						case "setTotal":
							return n ? (a.count - 1 - a.currentSlide + a.cloneOffset) * b : (a.currentSlide + a.cloneOffset) * b;
						case "setTouch":
							return b;
						case "jumpEnd":
							return n ? b : a.count * b;
						case "jumpStart":
							return n ? a.count * b : b;
						default:
							return b
						}
					}() + "px"
				}();
			a.transitions && (d = p ? "translate3d(0," + d + ",0)" : "translate3d(" + d + ",0,0)", c = void 0 !== c ? c / 1E3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", c));
			a.args[a.prop] = d;
			(a.transitions || void 0 === c) && a.container.css(a.args)
		};
		a.setup = function(b) {
			if (r) a.slides.css({
				width: "100%",
				"float": "left",
				marginRight: "-100%",
				position: "relative"
			}), "init" === b && (v ? a.slides.css({
				opacity: 0,
				display: "block",
				webkitTransition: "opacity " + a.vars.animationSpeed / 1E3 + "s ease",
				zIndex: 1
			}).eq(a.currentSlide).css({
				opacity: 1,
				zIndex: 2
			}) : a.slides.css({
				opacity: 0,
				display: "block",
				zIndex: 1
			}).eq(a.currentSlide).css({
				zIndex: 2
			}).animate({
				opacity: 1
			}, a.vars.animationSpeed, a.vars.easing)), a.vars.smoothHeight && g.smoothHeight();
			else {
				var e, f;
				"init" === b && (a.viewport = d('<div class="' + c + 'viewport"></div>').css({
					overflow: "hidden",
					position: "relative"
				}).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, n && (f = d.makeArray(a.slides).reverse(), a.slides = d(f), a.container.empty().append(a.slides)));
				a.vars.animationLoop && !h && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== b && a.container.find(".clone").remove(), a.container.append(a.slides.first().clone().addClass("clone").attr("aria-hidden", "true")).prepend(a.slides.last().clone().addClass("clone").attr("aria-hidden", "true")));
				a.newSlides = d(a.vars.selector, a);
				e = n ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset;
				p && !h ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
					a.newSlides.css({
						display: "block"
					});
					a.doMath();
					a.viewport.height(a.h);
					a.setProps(e * a.h, "init")
				}, "init" === b ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(e * a.computedW, "init"), setTimeout(function() {
					a.doMath();
					a.newSlides.css({
						width: a.computedW,
						"float": "left",
						display: "block"
					});
					a.vars.smoothHeight && g.smoothHeight()
				}, "init" === b ? 100 : 0))
			}
			h || a.slides.removeClass(c + "active-slide").eq(a.currentSlide).addClass(c + "active-slide")
		};
		a.doMath = function() {
			var b = a.slides.first(),
				c = a.vars.itemMargin,
				d = a.vars.minItems,
				f = a.vars.maxItems;
			a.w = void 0 === a.viewport ? a.width() : a.viewport.width();
			a.h = b.height();
			a.boxPadding = b.outerWidth() - b.width();
			h ? (a.itemT = a.vars.itemWidth + c, a.minW = d ? d * a.itemT : a.w, a.maxW = f ? f * a.itemT - c : a.w, a.itemW = a.minW > a.w ? (a.w - c * (d - 1)) / d : a.maxW < a.w ? (a.w - c * (f - 1)) / f : a.vars.itemWidth > a.w ? a.w : a.vars.itemWidth, a.visible = Math.floor(a.w / a.itemW), a.move = 0 < a.vars.move && a.vars.move < a.visible ? a.vars.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : a.vars.itemWidth > a.w ? a.itemW * (a.count - 1) + c * (a.count - 1) : (a.itemW + c) * a.count - a.w - c) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1);
			a.computedW = a.itemW - a.boxPadding
		};
		a.update = function(b, c) {
			a.doMath();
			h || (b < a.currentSlide ? a.currentSlide += 1 : b <= a.currentSlide && 0 !== b && --a.currentSlide, a.animatingTo = a.currentSlide);
			if (a.vars.controlNav && !a.manualControls) if ("add" === c && !h || a.pagingCount > a.controlNav.length) g.controlNav.update("add");
			else if ("remove" === c && !h || a.pagingCount < a.controlNav.length) h && a.currentSlide > a.last && (--a.currentSlide, --a.animatingTo), g.controlNav.update("remove", a.last);
			a.vars.directionNav && g.directionNav.update()
		};
		a.addSlide = function(b, c) {
			var f = d(b);
			a.count += 1;
			a.last = a.count - 1;
			p && n ? void 0 !== c ? a.slides.eq(a.count - c).after(f) : a.container.prepend(f) : void 0 !== c ? a.slides.eq(c).before(f) : a.container.append(f);
			a.update(c, "add");
			a.slides = d(a.vars.selector + ":not(.clone)", a);
			a.setup();
			a.vars.added(a)
		};
		a.removeSlide = function(b) {
			var c = isNaN(b) ? a.slides.index(d(b)) : b;
			--a.count;
			a.last = a.count - 1;
			isNaN(b) ? d(b, a.slides).remove() : p && n ? a.slides.eq(a.last).remove() : a.slides.eq(b).remove();
			a.doMath();
			a.update(c, "remove");
			a.slides = d(a.vars.selector + ":not(.clone)", a);
			a.setup();
			a.vars.removed(a)
		};
		g.init()
	};
	d(window).blur(function(d) {
		focused = !1
	}).focus(function(d) {
		focused = !0
	});
	d.flexslider.defaults = {
		namespace: "flex-",
		selector: ".slides > li",
		animation: "fade",
		easing: "swing",
		direction: "horizontal",
		reverse: !1,
		animationLoop: !0,
		smoothHeight: !1,
		startAt: 0,
		slideshow: !0,
		slideshowSpeed: 3000,
		animationSpeed: 600,
		initDelay: 0,
		randomize: !1,
		thumbCaptions: !1,
		pauseOnAction: !0,
		pauseOnHover: !1,
		pauseInvisible: !0,
		useCSS: !0,
		touch: !0,
		video: !1,
		controlNav: !0,
		directionNav: !0,
		prevText: "",
		nextText: "",
		keyboard: !0,
		multipleKeyboard: !1,
		mousewheel: !1,
		pausePlay: !1,
		pauseText: "Pause",
		playText: "Play",
		controlsContainer: "",
		manualControls: "",
		sync: "",
		asNavFor: "",
		itemWidth: 0,
		itemMargin: 0,
		minItems: 1,
		maxItems: 0,
		move: 0,
		allowOneSlide: !0,
		start: function() {},
		before: function() {},
		after: function() {},
		end: function() {},
		added: function() {},
		removed: function() {}
	};
	d.fn.flexslider = function(f) {
		void 0 === f && (f = {});
		if ("object" == typeof f) return this.each(function() {
			var a = d(this),
				c = a.find(f.selector ? f.selector : ".slides > li");
			1 === c.length && !0 === f.allowOneSlide || 0 === c.length ? (c.fadeIn(400), f.start && f.start(a)) : void 0 === a.data("flexslider") && new d.flexslider(this, f)
		});
		var l = d(this).data("flexslider");
		switch (f) {
		case "play":
			l.play();
			break;
		case "pause":
			l.pause();
			break;
		case "stop":
			l.stop();
			break;
		case "next":
			l.flexAnimate(l.getTarget("next"), !0);
			break;
		case "prev":
		case "previous":
			l.flexAnimate(l.getTarget("prev"), !0);
			break;
		default:
			"number" == typeof f && l.flexAnimate(f, !0)
		}
	}
})(jQuery);