/* @ds-bundle: {"format":4,"namespace":"Brinkema","components":[{"name":"Wordmark"},{"name":"Icon"},{"name":"Button"},{"name":"TextLink"},{"name":"DownloadButton"},{"name":"LanguageSwitch"},{"name":"ThemeToggle"},{"name":"SiteHeader"},{"name":"SiteFooter"},{"name":"Toc"},{"name":"Metric"},{"name":"AccentBand"},{"name":"CaseTeaser"},{"name":"Tag"},{"name":"StatusBadge"},{"name":"Callout"},{"name":"Prose"},{"name":"CodeBlock"},{"name":"Table"},{"name":"Figure"},{"name":"Timeline"},{"name":"NoticePage"},{"name":"Mark"},{"name":"Portrait"},{"name":"Hero"},{"name":"SectionNav"},{"name":"DocTabs"},{"name":"SectionHeading"},{"name":"FactList"},{"name":"PageHeader"},{"name":"FocusList"},{"name":"CertList"},{"name":"ADRList"},{"name":"Consequences"},{"name":"Pager"},{"name":"DecisionCompare"}]} */
(function () {
  "use strict";
  var React = window.React;
  var h = React.createElement;
  var Fragment = React.Fragment;
  var F2 = React.Fragment;
  var MARKS = {"wordmark": {"vb": "74 -717 5146 729", "d": "M350.2010498046875 12.0Q305.40087890625 12.0 270.60089111328125 -4.400146484375Q235.8009033203125 -20.80029296875 212.20098876953125 -49.50042724609375Q188.60107421875 -78.2005615234375 177.201171875 -114.6005859375L191.80126953125 -134.8009033203125L186.001220703125 0.0H73.9990234375V-710.0H192.401123046875V-407.199462890625L181.4010009765625 -429.3995361328125Q189.6009521484375 -461.199951171875 212.700927734375 -487.60009765625Q235.8009033203125 -514.000244140625 271.200927734375 -530.000244140625Q306.6009521484375 -546.000244140625 350.2010498046875 -546.000244140625Q416.600830078125 -546.000244140625 465.6007080078125 -512.6002807617188Q514.6005859375 -479.2003173828125 541.300537109375 -416.80029296875Q568.00048828125 -354.4002685546875 568.00048828125 -267.0001220703125Q568.00048828125 -179.5999755859375 541.300537109375 -117.199951171875Q514.6005859375 -54.7999267578125 465.6007080078125 -21.39996337890625Q416.600830078125 12.0 350.2010498046875 12.0ZM322.399658203125 -94.401611328125Q381.399169921875 -94.401611328125 413.0987548828125 -139.8011474609375Q444.79833984375 -185.20068359375 444.79833984375 -267.0001220703125Q444.79833984375 -349.3995361328125 413.0987548828125 -394.49908447265625Q381.399169921875 -439.5986328125 323.599609375 -439.5986328125Q283.400146484375 -439.5986328125 253.80047607421875 -419.49884033203125Q224.2008056640625 -399.3990478515625 208.30096435546875 -360.79937744140625Q192.401123046875 -322.19970703125 192.401123046875 -267.0001220703125Q192.401123046875 -213.00048828125 208.5009765625 -174.30084228515625Q224.600830078125 -135.6011962890625 253.70050048828125 -115.00140380859375Q282.8001708984375 -94.401611328125 322.399658203125 -94.401611328125Z M657.999267578125 0.0V-96.4013671875H841.799560546875L789.598876953125 -44.8006591796875V-489.799560546875L841.799560546875 -437.598876953125H657.999267578125V-534.000244140625H879.60009765625L890.4002685546875 -379.199462890625L880.0001220703125 -387.599609375Q886.800048828125 -460.1998291015625 919.7999877929688 -497.10003662109375Q952.7999267578125 -534.000244140625 1015.4002685546875 -534.000244140625H1132.000732421875V-434.798828125H1022.400634765625Q984.20068359375 -434.798828125 958.9007568359375 -420.89892578125Q933.600830078125 -406.9990234375 920.8009033203125 -379.899169921875Q908.0009765625 -352.79931640625 908.0009765625 -311.99951171875V-44.8006591796875L856.4002685546875 -96.4013671875H1072.80078125V0.0Z M1231.99951171875 0.0V-96.4013671875H1435.7989501953125V-489.799560546875L1487.9996337890625 -437.598876953125H1241.99951171875V-534.000244140625H1554.2010498046875V-96.4013671875H1728.00048828125V0.0H1554.2010498046875H1435.7989501953125ZM1430.59912109375 -605.3995361328125V-717.0003662109375H1551.401123046875V-605.3995361328125Z M1815.99951171875 0.0V-534.000244140625H1924.201416015625L1928.00146484375 -391.3997802734375L1915.601318359375 -398.399658203125Q1925.2012939453125 -448.9998779296875 1950.3012084960938 -481.70001220703125Q1975.401123046875 -514.400146484375 2011.8010864257812 -530.2001953125Q2048.2010498046875 -546.000244140625 2091.201171875 -546.000244140625Q2150.2010498046875 -546.000244140625 2188.1008911132812 -519.80029296875Q2226.000732421875 -493.600341796875 2245.0006103515625 -448.30035400390625Q2264.00048828125 -403.0003662109375 2264.00048828125 -345.000244140625V0.0H2145.598388671875V-316.5999755859375Q2145.598388671875 -381.3994140625 2122.19873046875 -413.0989990234375Q2098.799072265625 -444.798583984375 2051.1998291015625 -444.798583984375Q2019.0003662109375 -444.798583984375 1992.6007690429688 -429.69873046875Q1966.201171875 -414.598876953125 1950.3013916015625 -385.29913330078125Q1934.401611328125 -355.9993896484375 1934.401611328125 -312.5997314453125V0.0Z M2389.998779296875 0.0V-710.0H2508.40087890625V-283.0023193359375L2730.398681640625 -534.000244140625H2875.20068359375L2669.8009033203125 -306.2000732421875L2884.400634765625 0.0H2747.198486328125L2591.599609375 -228.798828125L2508.40087890625 -139.60009765625V0.0Z M3203.599853515625 12.0Q3128.599853515625 12.0 3072.0997314453125 -22.20001220703125Q3015.599609375 -56.4000244140625 2984.2994995117188 -119.300048828125Q2952.9993896484375 -182.2000732421875 2952.9993896484375 -267.0001220703125Q2952.9993896484375 -350.60009765625 2984.0994873046875 -413.20013427734375Q3015.1995849609375 -475.8001708984375 3070.8997192382812 -510.90020751953125Q3126.599853515625 -546.000244140625 3201.199951171875 -546.000244140625Q3273.400146484375 -546.000244140625 3328.80029296875 -511.900146484375Q3384.200439453125 -477.800048828125 3415.6005249023438 -414.79998779296875Q3447.0006103515625 -351.7999267578125 3447.0006103515625 -264.800048828125V-233.7996826171875H3075.4014892578125Q3080.4014892578125 -165.6007080078125 3114.901123046875 -130.00115966796875Q3149.4007568359375 -94.401611328125 3205.5999755859375 -94.401611328125Q3247.9993896484375 -94.401611328125 3276.4990844726562 -114.5013427734375Q3304.998779296875 -134.60107421875 3315.9986572265625 -167.8006591796875L3436.800537109375 -159.2005615234375Q3411.80029296875 -79.4000244140625 3351.9002075195312 -33.70001220703125Q3292.0001220703125 12.0 3203.599853515625 12.0ZM3076.6015625 -320.200439453125H3319.3984375Q3314.198486328125 -380.7994384765625 3281.9989013671875 -410.19903564453125Q3249.79931640625 -439.5986328125 3200.39990234375 -439.5986328125Q3149.800537109375 -439.5986328125 3117.5009765625 -409.299072265625Q3085.201416015625 -378.99951171875 3076.6015625 -320.200439453125Z M3511.99951171875 0.0V-534.000244140625H3611.40087890625L3615.6009521484375 -412.4000244140625L3604.40087890625 -415.2000732421875Q3615.801025390625 -479.0003662109375 3644.7009887695312 -512.5003051757812Q3673.6009521484375 -546.000244140625 3717.600830078125 -546.000244140625Q3766.200927734375 -546.000244140625 3789.9008178710938 -512.2002563476562Q3813.6007080078125 -478.4002685546875 3820.80078125 -410.400146484375H3807.6005859375Q3817.8006591796875 -476.0003662109375 3850.3007202148438 -511.00030517578125Q3882.80078125 -546.000244140625 3930.80078125 -546.000244140625Q3991.6005859375 -546.000244140625 4019.800537109375 -503.00030517578125Q4048.00048828125 -460.0003662109375 4048.00048828125 -365.600830078125V0.0H3935.19873046875V-343.2001953125Q3935.19873046875 -401.7994384765625 3923.9989624023438 -423.29901123046875Q3912.7991943359375 -444.798583984375 3888.7996826171875 -444.798583984375Q3872.5999755859375 -444.798583984375 3860.2001953125 -434.29876708984375Q3847.8004150390625 -423.7989501953125 3840.5005493164062 -400.99932861328125Q3833.20068359375 -378.19970703125 3833.20068359375 -342.000244140625V0.0H3726.79931640625V-343.2001953125Q3726.79931640625 -399.199462890625 3715.8995361328125 -421.9990234375Q3704.999755859375 -444.798583984375 3680.000244140625 -444.798583984375Q3663.4005126953125 -444.798583984375 3651.000732421875 -434.29876708984375Q3638.6009521484375 -423.7989501953125 3631.7011108398438 -400.99932861328125Q3624.80126953125 -378.19970703125 3624.80126953125 -342.000244140625V0.0Z M4285.999755859375 12.0Q4236.3997802734375 12.0 4195.999755859375 -6.0Q4155.5997314453125 -24.0 4131.999694824219 -57.50006103515625Q4108.399658203125 -91.0001220703125 4108.399658203125 -136.80029296875Q4108.399658203125 -204.80029296875 4150.8997802734375 -242.50030517578125Q4193.39990234375 -280.2003173828125 4273.199462890625 -296.80029296875L4439.998779296875 -332.000244140625Q4439.998779296875 -388.3995361328125 4416.2991943359375 -417.59930419921875Q4392.599609375 -446.799072265625 4342.800048828125 -446.799072265625Q4297.400634765625 -446.799072265625 4272.4010009765625 -425.0992431640625Q4247.4013671875 -403.3994140625 4239.0015869140625 -366.5999755859375L4115.99951171875 -374.0Q4130.99951171875 -451.400146484375 4190.2996826171875 -498.7001953125Q4249.599853515625 -546.000244140625 4341.199951171875 -546.000244140625Q4450.4007568359375 -546.000244140625 4504.400817871094 -487.90020751953125Q4558.40087890625 -429.8001708984375 4558.40087890625 -326.0V-126.80126953125Q4558.40087890625 -107.201171875 4566.0008544921875 -99.8011474609375Q4573.600830078125 -92.401123046875 4588.000732421875 -92.401123046875H4614.000244140625V0.0Q4608.000244140625 1.0 4594.400207519531 2.300048828125Q4580.8001708984375 3.60009765625 4566.800048828125 3.60009765625Q4528.7998046875 3.60009765625 4502.299621582031 -9.4000244140625Q4475.7994384765625 -22.400146484375 4461.999328613281 -48.70025634765625Q4448.19921875 -75.0003662109375 4446.7991943359375 -113.600341796875H4461.9991455078125Q4456.5992431640625 -78.000244140625 4432.8994140625 -49.3001708984375Q4409.1995849609375 -20.60009765625 4371.399719238281 -4.300048828125Q4333.599853515625 12.0 4285.999755859375 12.0ZM4307.2005615234375 -80.401123046875Q4350.39990234375 -80.401123046875 4379.99951171875 -95.700927734375Q4409.59912109375 -111.000732421875 4424.7989501953125 -139.700439453125Q4439.998779296875 -168.400146484375 4439.998779296875 -207.599853515625V-243.999267578125L4306.800537109375 -215.99951171875Q4264.4012451171875 -207.599609375 4247.601501464844 -190.49981689453125Q4230.8017578125 -173.4000244140625 4230.8017578125 -144.000244140625Q4230.8017578125 -114.20068359375 4250.701416015625 -97.3009033203125Q4270.60107421875 -80.401123046875 4307.2005615234375 -80.401123046875Z", "r": [4740, -534, 480, 534]}, "monogram": {"vb": "32 -710 1618 722", "d": "M31.99951171875 0.0V-534.000244140625H131.40087890625L135.6009521484375 -412.4000244140625L124.40087890625 -415.2000732421875Q135.801025390625 -479.0003662109375 164.70098876953125 -512.5003051757812Q193.6009521484375 -546.000244140625 237.600830078125 -546.000244140625Q286.200927734375 -546.000244140625 309.90081787109375 -512.2002563476562Q333.6007080078125 -478.4002685546875 340.80078125 -410.400146484375H327.6005859375Q337.8006591796875 -476.0003662109375 370.30072021484375 -511.00030517578125Q402.80078125 -546.000244140625 450.80078125 -546.000244140625Q511.6005859375 -546.000244140625 539.800537109375 -503.00030517578125Q568.00048828125 -460.0003662109375 568.00048828125 -365.600830078125V0.0H455.19873046875V-343.2001953125Q455.19873046875 -401.7994384765625 443.99896240234375 -423.29901123046875Q432.7991943359375 -444.798583984375 408.7996826171875 -444.798583984375Q392.5999755859375 -444.798583984375 380.2001953125 -434.29876708984375Q367.8004150390625 -423.7989501953125 360.50054931640625 -400.99932861328125Q353.20068359375 -378.19970703125 353.20068359375 -342.000244140625V0.0H246.79931640625V-343.2001953125Q246.79931640625 -399.199462890625 235.8995361328125 -421.9990234375Q224.999755859375 -444.798583984375 200.000244140625 -444.798583984375Q183.4005126953125 -444.798583984375 171.000732421875 -434.29876708984375Q158.6009521484375 -423.7989501953125 151.70111083984375 -400.99932861328125Q144.80126953125 -378.19970703125 144.80126953125 -342.000244140625V0.0Z M930.2010498046875 12.0Q885.40087890625 12.0 850.6008911132812 -4.400146484375Q815.8009033203125 -20.80029296875 792.2009887695312 -49.50042724609375Q768.60107421875 -78.2005615234375 757.201171875 -114.6005859375L771.80126953125 -134.8009033203125L766.001220703125 0.0H653.9990234375V-710.0H772.401123046875V-407.199462890625L761.4010009765625 -429.3995361328125Q769.6009521484375 -461.199951171875 792.700927734375 -487.60009765625Q815.8009033203125 -514.000244140625 851.200927734375 -530.000244140625Q886.6009521484375 -546.000244140625 930.2010498046875 -546.000244140625Q996.600830078125 -546.000244140625 1045.6007080078125 -512.6002807617188Q1094.6005859375 -479.2003173828125 1121.300537109375 -416.80029296875Q1148.00048828125 -354.4002685546875 1148.00048828125 -267.0001220703125Q1148.00048828125 -179.5999755859375 1121.300537109375 -117.199951171875Q1094.6005859375 -54.7999267578125 1045.6007080078125 -21.39996337890625Q996.600830078125 12.0 930.2010498046875 12.0ZM902.399658203125 -94.401611328125Q961.399169921875 -94.401611328125 993.0987548828125 -139.8011474609375Q1024.79833984375 -185.20068359375 1024.79833984375 -267.0001220703125Q1024.79833984375 -349.3995361328125 993.0987548828125 -394.49908447265625Q961.399169921875 -439.5986328125 903.599609375 -439.5986328125Q863.400146484375 -439.5986328125 833.8004760742188 -419.49884033203125Q804.2008056640625 -399.3990478515625 788.3009643554688 -360.79937744140625Q772.401123046875 -322.19970703125 772.401123046875 -267.0001220703125Q772.401123046875 -213.00048828125 788.5009765625 -174.30084228515625Q804.600830078125 -135.6011962890625 833.7005004882812 -115.00140380859375Q862.8001708984375 -94.401611328125 902.399658203125 -94.401611328125Z", "r": [1230, -110, 420, 110]}};

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) { if (arguments[i]) out.push(arguments[i]); }
    return out.join(" ");
  }
  function omit(obj, keys) {
    var o = {};
    for (var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k) && keys.indexOf(k) < 0) o[k] = obj[k]; }
    return o;
  }
  function t(lang, de, en) { return lang === "en" ? en : de; }
  var uid = 0;
  function useId(prefix) {
    var ref = React.useRef(null);
    if (ref.current === null) { uid += 1; ref.current = (prefix || "bk") + "-" + uid; }
    return ref.current;
  }

  /* ---------- Motion (progressive enhancement) ----------
     Ohne JavaScript, ohne IntersectionObserver oder bei „Bewegung reduzieren“ ist alles sofort
     vollständig sichtbar. Sonst: Element bekommt .bk-m-ready (Ausgangszustand), beim Hineinscrollen
     .bk-m-in (Endzustand mit gestaffelten Verzögerungen), danach werden alle Hilfsklassen entfernt.
     Jede Choreografie läuft genau einmal. */
  function motionAllowed() {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return false;
    try { return !window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return true; }
  }
  function tokenMs(el, name, fallback) {
    var v = "";
    try { v = window.getComputedStyle(el).getPropertyValue(name).trim(); } catch (e) { v = ""; }
    var n = parseFloat(v);
    if (isNaN(n)) return fallback;
    return /ms$/.test(v) ? n : (/s$/.test(v) ? n * 1000 : n);
  }
  function each(list, fn) { for (var i = 0; i < list.length; i++) fn(list[i], i); }
  function setVar(el, name, ms) { el.style.setProperty(name, Math.round(ms) + "ms"); }
  function mark(el, cls, delay, hl) {
    el.classList.add(cls);
    setVar(el, "--bk-m-d", delay);
    if (hl != null) setVar(el, "--bk-m-h", hl);
  }

  /* Diagramm: erst Knoten, dann Kanten, zuletzt der hervorgehobene Pfad. */
  function planDiagram(root) {
    var step = tokenMs(root, "--duration-stagger", 70);
    var draw = tokenMs(root, "--duration-draw", 520);
    var slow = tokenMs(root, "--duration-slow", 360);
    var total = 0, found = false;
    each(root.querySelectorAll("svg"), function (svg) {
      var els = svg.querySelectorAll(".bk-dg-node, .bk-dg-edge, .bk-dg-label, .bk-dg-sub, .bk-dg-num");
      if (!els.length) return;
      found = true;
      var nodes = [], edges = [], hlEdges = [], texts = [], last = null;
      each(els, function (el) {
        var c = el.classList;
        if (c.contains("bk-dg-label") || c.contains("bk-dg-sub") || c.contains("bk-dg-num")) { texts.push([el, last]); return; }
        if (c.contains("bk-dg-edge--hl")) hlEdges.push(el);
        else if (c.contains("bk-dg-node")) nodes.push(el);
        else edges.push(el);
        last = el;
      });
      var nStep = Math.min(step, nodes.length > 8 ? 600 / nodes.length : step);
      var at = new Map();
      each(nodes, function (el, i) { at.set(el, i * nStep); });
      var t1 = nodes.length ? (nodes.length - 1) * nStep + slow : 0;
      each(edges, function (el, i) { at.set(el, t1 + i * step); });
      var t2 = t1 + (edges.length ? (edges.length - 1) * step + draw : 0);
      each(hlEdges, function (el, i) { at.set(el, t2 + i * step); });
      var end = t2 + (hlEdges.length ? (hlEdges.length - 1) * step + draw * 1.3 : slow);

      each(nodes, function (el) {
        var hl = el.classList.contains("bk-dg-node--hl");
        mark(el, "bk-m-fade", at.get(el), hl ? t2 : null);
      });
      each(edges, function (el) {
        if (el.classList.contains("bk-dg-edge--muted") || el.getAttribute("stroke-dasharray")) { mark(el, "bk-m-fade", at.get(el)); return; }
        el.setAttribute("pathLength", "1");
        mark(el, "bk-m-draw", at.get(el));
      });
      each(hlEdges, function (el) {
        el.setAttribute("pathLength", "1");
        mark(el, "bk-m-draw", at.get(el));
        el.classList.add("bk-m-draw--hl");
      });
      each(texts, function (pair) {
        var owner = pair[1], d = 0;
        if (owner && at.has(owner)) {
          d = at.get(owner);
          if (owner.classList.contains("bk-dg-edge")) d += draw * (owner.classList.contains("bk-dg-edge--hl") ? 1.1 : 0.7);
        }
        mark(pair[0], "bk-m-fade", d);
      });
      setVar(svg, "--bk-m-dh", t2);
      setVar(svg, "--bk-m-dhh", t2 + (hlEdges.length ? (hlEdges.length - 1) * step + draw * 1.1 : 0));
      total = Math.max(total, end);
    });
    return found ? total : null;
  }

  /* Entscheidung: Optionen erscheinen, dann wird die gewählte hervorgehoben, dann folgt das Ergebnis. */
  function planDecide(root) {
    var step = tokenMs(root, "--duration-stagger", 70) * 1.4;
    var slow = tokenMs(root, "--duration-slow", 360);
    var opts = root.querySelectorAll(".bk-decide-opt");
    if (!opts.length) return null;
    each(opts, function (el, i) { mark(el, "bk-m-rise", i * step); });
    var tH = (opts.length - 1) * step + slow + 240;
    each(root.querySelectorAll(".bk-decide-opt.is-chosen"), function (el) { setVar(el, "--bk-m-h", tH); });
    each(root.querySelectorAll(".bk-decide-chosen"), function (el) { mark(el, "bk-m-fade", tH); });
    var tR = tH + slow + 120, end = tH + slow;
    var res = root.querySelector(".bk-decide-result");
    if (res) {
      mark(res, "bk-m-rise", tR);
      each(res.querySelectorAll("li"), function (li, i) { mark(li, "bk-m-rise", tR + 120 + i * step); end = tR + 120 + i * step + slow; });
    }
    var cap = root.querySelector(".bk-decide-caption");
    if (cap) { mark(cap, "bk-m-fade", res ? tR + 120 : tH); end = Math.max(end, (res ? tR + 120 : tH) + slow); }
    return end;
  }

  /* Tabelle mit gewählter Zeile: Zeilen erscheinen, dann läuft der Marker über die gewählte. */
  function planTable(root) {
    var step = tokenMs(root, "--duration-stagger", 70);
    var slow = tokenMs(root, "--duration-slow", 360);
    var rows = root.querySelectorAll("tbody tr");
    var hl = root.querySelector("tbody tr.is-highlight");
    if (!rows.length || !hl) return null;
    each(rows, function (el, i) { mark(el, "bk-m-fade", i * step); });
    var tH = (rows.length - 1) * step + slow + 200;
    var cells = hl.children, cell = 160;
    each(cells, function (el, j) { setVar(el, "--bk-m-h", tH + j * cell); });
    var tEnd = tH + cells.length * cell;
    each(hl.querySelectorAll(".bk-table-mark"), function (el) { mark(el, "bk-m-fade", tEnd); });
    return tEnd + slow;
  }

  var PLANS = { diagram: planDiagram, decide: planDecide, table: planTable };
  var useIsoLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

  function useMotion(kind, enabled) {
    var ref = React.useRef(null);
    useIsoLayoutEffect(function () {
      var el = ref.current;
      if (!el || !enabled || !motionAllowed()) return undefined;
      if (el.getBoundingClientRect().bottom < 0) return undefined; /* bereits vorbeigescrollt: statisch lassen */
      var total = PLANS[kind](el);
      if (total == null) return undefined;
      var timer = null, done = false;
      function finish() {
        if (done) return;
        done = true;
        el.classList.remove("bk-m-ready", "bk-m-in");
        each(el.querySelectorAll('[pathLength="1"]'), function (p) { p.removeAttribute("pathLength"); });
      }
      el.classList.add("bk-m-ready");
      var io = new IntersectionObserver(function (entries) {
        var hit = false;
        each(entries, function (e) { if (e.isIntersecting) hit = true; });
        if (!hit) return;
        io.disconnect();
        void el.getBoundingClientRect();
        window.requestAnimationFrame(function () {
          el.classList.remove("bk-m-ready");
          el.classList.add("bk-m-in");
          timer = window.setTimeout(finish, total + 700);
        });
      }, { threshold: 0.25 });
      io.observe(el);
      return function () { io.disconnect(); window.clearTimeout(timer); finish(); };
    }, [kind, enabled]);
    return ref;
  }

  /* ---------- Icon ---------- */
  var ICONS = {
    "arrow-right": "M4 12h15M13 6l6 6-6 6",
    "arrow-left": "M20 12H5M11 6l-6 6 6 6",
    "arrow-up-right": "M7 17L17 7M8 7h9v9",
    "download": "M12 4v11M7 10l5 5 5-5M5 20h14",
    "menu": "M4 7h16M4 12h16M4 17h16",
    "close": "M6 6l12 12M18 6L6 18",
    "sun": "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
    "moon": "M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z",
    "check": "M5 12.5l4.5 4.5L19 7.5",
    "chevron-down": "M6 9l6 6 6-6",
    "status-proposed": "M12 3a9 9 0 0 1 0 18M12 21a9 9 0 0 1 0-18M12 8v4l3 2",
    "status-accepted": "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12.5l3 3 5-6",
    "status-superseded": "M4 9h13M13 5l4 4-4 4M20 15H7M11 19l-4-4 4-4",
    "status-deprecated": "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM8 12h8",
    "info": "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 11v6M12 7.5v.5",
    "learned": "M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3z",
    "warning": "M12 3l9.5 17h-19L12 3zM12 10v4.5M12 17.5v.5",
    "mail": "M3 6h18v12H3zM3 7l9 6 9-6"
  };
  function Icon(props) {
    var size = props.size || 20;
    var label = props.label;
    var d = ICONS[props.name] || ICONS["arrow-right"];
    var attrs = {
      className: cx("bk-icon", props.className), "data-icon": props.name,
      width: size, height: size, viewBox: "0 0 24 24", fill: "none",
      stroke: "currentColor", strokeWidth: props.strokeWidth || 1.75,
      strokeLinecap: "square", strokeLinejoin: "miter", focusable: "false"
    };
    if (label) { attrs.role = "img"; attrs["aria-label"] = label; } else { attrs["aria-hidden"] = "true"; }
    return h("svg", attrs, h("path", { d: d }));
  }
  Icon.names = Object.keys(ICONS);

  /* ---------- Wordmark ---------- */
  function Wordmark(props) {
    var variant = props.variant === "monogram" ? "monogram" : "wordmark";
    var m = MARKS[variant];
    var vb = m.vb.split(" ").map(Number);
    var height = props.height || 24;
    var width = Math.round((vb[2] / vb[3]) * height);
    var label = props.label || (variant === "monogram" ? "mb_" : "brinkema");
    return h("svg", {
      className: cx("bk-wordmark", props.className), viewBox: m.vb, width: width, height: height,
      role: "img", "aria-label": label, focusable: "false"
    },
      h("path", { d: m.d, fill: "currentColor" }),
      h("rect", { className: "bk-wordmark-cursor", x: m.r[0], y: m.r[1], width: m.r[2], height: m.r[3] }));
  }

  /* ---------- Button ---------- */
  function Button(props) {
    var variant = props.variant || "primary";
    var rest = omit(props, ["variant", "icon", "iconPosition", "className", "children", "href", "disabled", "state"]);
    var cls = cx("bk-btn", "bk-btn--" + variant, props.state && "is-" + props.state, props.className);
    var icon = props.icon ? h(Icon, { name: props.icon, size: 18 }) : null;
    var kids = props.iconPosition === "start" ? [icon, h("span", { key: "l" }, props.children)] : [h("span", { key: "l" }, props.children), icon];
    if (props.href) {
      if (props.disabled) {
        return h("a", Object.assign({}, rest, { className: cls, role: "link", "aria-disabled": "true" }), kids[0], kids[1]);
      }
      return h("a", Object.assign({}, rest, { className: cls, href: props.href }), kids[0], kids[1]);
    }
    return h("button", Object.assign({ type: "button" }, rest, { className: cls, disabled: props.disabled }), kids[0], kids[1]);
  }

  /* ---------- TextLink ---------- */
  function TextLink(props) {
    var rest = omit(props, ["external", "arrow", "className", "children", "state", "lang", "disabled"]);
    var cls = cx("bk-link", props.arrow && "bk-link--arrow", props.state && "is-" + props.state, props.className);
    var lang = props.lang || "de";
    var tail = null;
    if (props.external) {
      tail = h(Fragment, null, h(Icon, { name: "arrow-up-right", size: 16, className: "bk-link-icon" }),
        h("span", { className: "bk-sr" }, t(lang, " (externer Link)", " (external link)")));
      rest.rel = rest.rel || "noopener";
    } else if (props.arrow) {
      tail = h(Icon, { name: "arrow-right", size: 16, className: "bk-link-icon" });
    }
    if (props.disabled) {
      return h("a", Object.assign({}, omit(rest, ["href"]), { className: cls, role: "link", "aria-disabled": "true" }), tail ? h("span", { className: "bk-link-text" }, props.children) : props.children, tail);
    }
    return h("a", Object.assign({}, rest, { className: cls }), tail ? h("span", { className: "bk-link-text" }, props.children) : props.children, tail);
  }

  /* ---------- DownloadButton ---------- */
  function DownloadButton(props) {
    var lang = props.lang || "de";
    var rest = omit(props, ["label", "meta", "className", "state", "lang", "disabled", "children"]);
    var cls = cx("bk-download", props.state && "is-" + props.state, props.className);
    var inner = [
      h("span", { className: "bk-download-icon", key: "i" }, h(Icon, { name: "download", size: 22, strokeWidth: 2 })),
      h("span", { className: "bk-download-text", key: "t" },
        h("span", { className: "bk-download-label" }, props.label || props.children || t(lang, "Lebenslauf", "CV")),
        h("span", { className: "bk-download-meta" }, props.meta || "PDF"))
    ];
    if (props.disabled) {
      return h("a", Object.assign({}, omit(rest, ["href", "download"]), { className: cls, role: "link", "aria-disabled": "true" }), inner);
    }
    return h("a", Object.assign({ download: "" }, rest, { className: cls }), inner);
  }

  /* ---------- LanguageSwitch ---------- */
  function LanguageSwitch(props) {
    var value = props.value || "de";
    var hrefs = props.hrefs || { de: "#de", en: "#en" };
    var labelLang = value;
    function item(code, name) {
      var active = code === value;
      var a = {
        className: cx("bk-seg", active && "is-current", props.state && props.stateFor === code && "is-" + props.state),
        href: hrefs[code], lang: code, hrefLang: code, title: name
      };
      if (active) a["aria-current"] = "true";
      if (props.onChange) a.onClick = function (e) { e.preventDefault(); props.onChange(code); };
      return h("li", { key: code }, h("a", a, h("span", { "aria-hidden": "true" }, code.toUpperCase()), h("span", { className: "bk-sr" }, name)));
    }
    return h("nav", { className: cx("bk-segmented", "bk-lang", props.className), "aria-label": t(labelLang, "Sprache", "Language") },
      h("ul", null, item("de", "Deutsch"), item("en", "English")));
  }

  /* ---------- ThemeToggle ---------- */
  function ThemeToggle(props) {
    var lang = props.lang || "de";
    var initial = props.theme || "light";
    var st = React.useState(initial);
    var theme = props.onToggle ? initial : st[0];
    function toggle() {
      var next = theme === "dark" ? "light" : "dark";
      if (props.onToggle) props.onToggle(next); else st[1](next);
    }
    var dark = theme === "dark";
    return h("button", {
      type: "button", className: cx("bk-iconbtn", "bk-theme", props.state && "is-" + props.state, props.className),
      "aria-pressed": dark ? "true" : "false", onClick: toggle, disabled: props.disabled,
      title: t(lang, "Dunkles Design", "Dark theme")
    },
      h(Icon, { name: dark ? "moon" : "sun", size: 20 }),
      h("span", { className: "bk-sr" }, t(lang, "Dunkles Design", "Dark theme")));
  }

  /* ---------- SiteHeader ---------- */
  var NAV = [
    { id: "vorstellung", de: "Vorstellung", en: "About", href: "/#vorstellung" },
    { id: "projekte", de: "Projekte", en: "Projects", href: "/projekte" },
    { id: "lebenslauf", de: "Lebenslauf", en: "CV", href: "/lebenslauf" },
    { id: "architektur", de: "Architektur", en: "Architecture", href: "/architektur" }
  ];
  function NavList(props) {
    return h("ul", { className: "bk-nav-list" }, NAV.map(function (n) {
      var a = { className: cx("bk-nav-link", props.stateFor === n.id && props.state && "is-" + props.state), href: n.href };
      if (props.current === n.id) a["aria-current"] = "page";
      return h("li", { key: n.id }, h("a", a, t(props.lang, n.de, n.en)));
    }));
  }
  function SiteHeader(props) {
    var lang = props.lang || "de";
    var session = props.session !== false;
    var menuId = useId("bk-menu");
    var brand = h("a", { className: "bk-header-brand", href: "/", "aria-label": t(lang, "brinkema – zur Startseite", "brinkema – home") },
      h(Wordmark, { height: 22, className: "bk-header-wordmark" }), h(Wordmark, { variant: "monogram", height: 22, className: "bk-header-monogram" }));
    var tools = h("div", { className: "bk-header-tools" },
      h(LanguageSwitch, { value: lang, hrefs: props.langHrefs, onChange: props.onLanguageChange }),
      session ? h(ThemeToggle, { lang: lang, theme: props.theme, onToggle: props.onThemeToggle }) : null);
    return h("header", { className: cx("bk-header", !session && "bk-header--guest", props.className) },
      h("a", { className: "bk-skip", href: props.skipHref || "#inhalt" }, t(lang, "Zum Inhalt springen", "Skip to content")),
      h("div", { className: "bk-header-inner" },
        brand,
        session ? h("nav", { className: "bk-header-nav", "aria-label": t(lang, "Hauptnavigation", "Main navigation") },
          h(NavList, { lang: lang, current: props.current, state: props.navState, stateFor: props.navStateFor })) : null,
        tools,
        session ? h("details", { className: "bk-menu", open: props.menuOpen || undefined },
          h("summary", { className: "bk-menu-btn", "aria-controls": menuId },
            h(Icon, { name: "menu", size: 20, className: "bk-menu-open" }), h(Icon, { name: "close", size: 20, className: "bk-menu-close" }),
            h("span", null, t(lang, "Menü", "Menu"))),
          h("div", { className: "bk-menu-panel", id: menuId },
            h("nav", { "aria-label": t(lang, "Hauptnavigation", "Main navigation") }, h(NavList, { lang: lang, current: props.current })),
            h("div", { className: "bk-menu-tools" },
              h(LanguageSwitch, { value: lang, hrefs: props.langHrefs, onChange: props.onLanguageChange }),
              h(ThemeToggle, { lang: lang, theme: props.theme, onToggle: props.onThemeToggle })))) : null));
  }

  /* ---------- SiteFooter ---------- */
  function SiteFooter(props) {
    if (props.variant === "titleblock") return TitleBlockFooter(props);
    var lang = props.lang || "de";
    var year = props.year || 2026;
    var email = props.email || "kontakt@brinkema.dev";
    return h("footer", { className: cx("bk-footer", props.className) },
      h("div", { className: "bk-footer-inner" },
        props.cta === false ? null : h("div", { className: "bk-footer-cta" },
          h("p", { className: "bk-footer-cta-text" }, t(lang, "Lust, über Architektur zu sprechen?", "Fancy a chat about architecture?")),
          h(Button, { variant: "secondary", href: "mailto:" + email, icon: "mail", iconPosition: "start" }, email)),
        h("div", { className: "bk-footer-row" },
          h("div", { className: "bk-footer-brand" },
            h(Wordmark, { height: 20 }),
            h("p", { className: "bk-footer-note" },
              h("strong", null, t(lang, "Handgebaut", "Hand-built")),
              t(lang, " mit Astro und TypeScript. Jede Entscheidung dahinter ist als ADR dokumentiert – wer neugierig ist, darf gern in die DevTools schauen.",
                " with Astro and TypeScript. Every decision behind it is written up as an ADR – feel free to open your DevTools."))),
          h("ul", { className: "bk-footer-links" },
            h("li", null, h(TextLink, { href: props.architectureHref || "/architektur" }, t(lang, "Architektur dieser Seite", "How this site was built"))),
            h("li", null, h(TextLink, { href: props.privacyHref || "/datenschutz" }, t(lang, "Datenschutz", "Privacy"))))),
        h("p", { className: "bk-footer-meta" },
          h("span", null, t(lang, "Code unter MIT · Inhalte © ", "Code under MIT · Content © ") + year + " Max Brinkema"),
          h("span", null, t(lang, "zuletzt aktualisiert: ", "last updated: ") + (props.updated || t(lang, "Oktober 2026", "October 2026"))))));
  }

  /* ---------- Toc ---------- */
  function Toc(props) {
    var lang = props.lang || "de";
    var title = props.title || t(lang, "Inhalt", "Contents");
    var items = props.items || [];
    function list() {
      var n = 0;
      return h("ol", { className: "bk-toc-list" }, items.map(function (it) {
        if (it.level !== 3) n += 1;
        var a = { className: cx("bk-toc-link", it.level === 3 && "bk-toc-link--sub", props.state && props.stateFor === it.id && "is-" + props.state), href: "#" + it.id };
        if (props.current === it.id) a["aria-current"] = "location";
        return h("li", { key: it.id }, h("a", a,
          it.level === 3 ? null : h("span", { className: "bk-toc-num", "aria-hidden": "true" }, it.num || String(n).padStart(2, "0")),
          h("span", null, it.label)));
      }));
    }
    return h("nav", { className: cx("bk-toc", props.compact && "bk-toc--compact", props.numbered && "bk-toc--numbered", props.className), "aria-label": title },
      h("div", { className: "bk-toc-full" }, h("p", { className: "bk-toc-title" }, title), list()),
      h("details", { className: "bk-toc-compact", open: props.open || undefined },
        h("summary", null, h("span", null, title), h(Icon, { name: "chevron-down", size: 18, className: "bk-toc-chevron" })),
        list()));
  }

  /* ---------- Metric ---------- */
  function Metric(props) {
    var size = props.size || "md";
    return h("figure", { className: cx("bk-metric", "bk-metric--" + size, props.tone && "bk-metric--" + props.tone, props.className) },
      h("p", { className: "bk-metric-value" }, props.value,
        props.unit ? h("span", { className: "bk-metric-unit" }, props.unit) : null),
      h("figcaption", { className: "bk-metric-caption" },
        h("span", { className: "bk-metric-label" }, props.label),
        props.context ? h("span", { className: "bk-metric-context" }, " " + props.context) : null));
  }

  /* ---------- AccentBand ---------- */
  function AccentBand(props) {
    return h("section", { className: cx("bk-band", props.className), "aria-label": props.label, "aria-labelledby": props.labelledBy },
      h("div", { className: "bk-band-inner" }, props.children));
  }

  /* ---------- Tag ---------- */
  function Tag(props) {
    var interactive = typeof props.onClick === "function" || props.selected !== undefined || props.href;
    var cls = cx("bk-tag", interactive && "bk-tag--interactive", props.selected && "is-selected", props.state && "is-" + props.state, props.className);
    if (props.href) return h("a", { className: cls, href: props.href }, props.children);
    if (interactive) {
      return h("button", { type: "button", className: cls, onClick: props.onClick, disabled: props.disabled, "aria-pressed": props.selected ? "true" : "false" },
        props.selected ? h(Icon, { name: "check", size: 14, strokeWidth: 2.25 }) : null, props.children);
    }
    return h("span", { className: cls }, props.children);
  }

  /* ---------- StatusBadge ---------- */
  var STATUS = ["proposed", "accepted", "superseded", "deprecated"];
  function StatusBadge(props) {
    var s = STATUS.indexOf(props.status) >= 0 ? props.status : "proposed";
    var lang = props.lang || "de";
    return h("span", { className: cx("bk-status", "bk-status--" + s, props.className) },
      h(Icon, { name: "status-" + s, size: 16, strokeWidth: 2 }),
      h("span", { className: "bk-sr" }, t(lang, "Status: ", "Status: ")),
      props.prefix ? h("span", { className: "bk-status-prefix" }, props.prefix) : null,
      h("span", null, s));
  }

  /* ---------- CaseTeaser ---------- */
  function CaseTeaser(props) {
    var lang = props.lang || "de";
    var variant = props.variant || "feature";
    var titleId = useId("bk-case");
    var Heading = props.headingLevel ? "h" + props.headingLevel : "h3";
    var linked = props.href && !props.disabled;
    var vtName = props.transitionName === false ? undefined : (props.transitionName || (linked && props.number ? "bk-case-" + props.number : undefined));
    var visualRef = useMotion("diagram", !!props.visual && variant === "feature" && props.motion !== false);
    var title = linked ? h("a", { className: "bk-case-link", href: props.href, style: vtName ? { viewTransitionName: vtName, viewTransitionClass: "bk-case-title" } : undefined }, props.title)
      : h("span", { className: "bk-case-link" }, props.title);
    var kpis = props.kpis || [];
    return h("article", {
      className: cx("bk-case", "bk-case--" + variant, props.visual && "has-visual", props.disabled && "is-disabled", props.state && "is-" + props.state, props.className),
      "aria-labelledby": titleId
    }, h("div", { className: "bk-case-grid" },
      h("p", { className: "bk-case-num", "aria-hidden": "true" }, props.number),
      h("div", { className: "bk-case-body" },
        props.meta && props.meta.length ? h("p", { className: "bk-case-meta" }, props.meta.map(function (m, i) { return h("span", { key: i }, m); })) : null,
        h(Heading, { className: "bk-case-title", id: titleId },
          props.number ? h("span", { className: "bk-sr" }, "Case Study " + props.number + ": ") : null, title),
        props.summary ? h("p", { className: "bk-case-summary" }, props.summary) : null,
        kpis.length && variant === "feature" ? h("ul", { className: "bk-case-kpis", "aria-label": t(lang, "Kennzahlen", "Key figures") },
          kpis.map(function (k, i) { return h("li", { key: i }, h("strong", null, k.value), h("span", null, k.label)); })) : null,
        props.disabled ? h("p", { className: "bk-case-soon" }, t(lang, "In Arbeit", "In progress")) : null,
        props.tags && props.tags.length ? h("ul", { className: "bk-case-tags", "aria-label": t(lang, "Technologien", "Technologies") },
          props.tags.map(function (tg) { return h("li", { key: tg }, h(Tag, null, tg)); })) : null,
        linked && variant === "feature" && !props.detail ? h("p", { className: "bk-case-more", "aria-hidden": "true" }, h("span", { className: "bk-case-more-text" }, t(lang, "Case Study lesen", "Read the case study")), h(Icon, { name: "arrow-right", size: 16 })) : null),
      props.visual && variant === "feature" ? h("div", { className: "bk-case-visual", "aria-hidden": "true", ref: visualRef }, props.visual) : null,
      props.detail ? h("div", { className: "bk-case-detail" }, props.detail) : null,
      props.detail && linked && variant === "feature" ? h("p", { className: "bk-case-more bk-case-more--end", "aria-hidden": "true" }, h("span", { className: "bk-case-more-text" }, t(lang, "Case Study lesen", "Read the case study")), h(Icon, { name: "arrow-right", size: 16 })) : null));
  }

  /* ---------- Callout ---------- */
  function Callout(props) {
    var lang = props.lang || "de";
    var variant = props.variant || "note";
    var defaults = {
      learned: t(lang, "Was ich daraus gelernt habe", "What I learned"),
      note: t(lang, "Hinweis", "Note"),
      warning: t(lang, "Achtung", "Heads-up")
    };
    var icon = { learned: "learned", note: "info", warning: "warning" }[variant] || "info";
    return h("aside", { className: cx("bk-callout", "bk-callout--" + variant, props.className), "aria-label": props.title || defaults[variant] },
      h("p", { className: "bk-callout-title" }, h(Icon, { name: icon, size: 20 }), h("span", null, props.title || defaults[variant])),
      h("div", { className: "bk-callout-body" }, props.children));
  }

  /* ---------- Prose ---------- */
  function Prose(props) {
    return h(props.as || "div", { className: cx("bk-prose", props.className), lang: props.lang }, props.children);
  }

  /* ---------- CodeBlock ---------- */
  /* Syntax-Highlighting ohne Bibliothek: ein Durchlauf mit einer Regex, fünf Rollen
     (Schlüsselwort, String, Zahl/Literal, Funktion, Kommentar). Unbekannte Sprachen bleiben einfarbig. */
  var KW = {
    ts: "abstract as async await break case catch class const continue declare default delete do else enum export extends false finally for from function get if implements import in instanceof interface keyof let new null of private protected public readonly return satisfies set static super switch this throw true try type typeof undefined var void while yield",
    json: "true false null",
    sh: "if then else elif fi for in do done case esac while until function return export local echo cd npm npx pnpm git"
  };
  var LANG = { ts: "ts", typescript: "ts", tsx: "ts", js: "ts", javascript: "ts", jsx: "ts", mjs: "ts", astro: "ts", json: "json", bash: "sh", sh: "sh", shell: "sh", zsh: "sh" };
  var kwSets = {};
  Object.keys(KW).forEach(function (k) { kwSets[k] = {}; KW[k].split(" ").forEach(function (w) { kwSets[k][w] = true; }); });
  function highlight(code, language) {
    var l = LANG[String(language || "").toLowerCase()];
    if (!l || typeof code !== "string") return code;
    var com = l === "sh" ? "#[^\\n]*" : "\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/";
    var re = new RegExp("(" + com + ")|(\"(?:\\\\.|[^\"\\\\])*\"|'(?:\\\\.|[^'\\\\])*'|`(?:\\\\.|[^`\\\\])*`)|(\\b\\d[\\d_]*(?:\\.\\d+)?\\b)|([A-Za-z_$][\\w$]*)", "g");
    var out = [], last = 0, m, k = 0, kws = kwSets[l];
    function push(cls, text) { out.push(cls ? h("span", { key: k++, className: "bk-tok bk-tok--" + cls }, text) : text); }
    while ((m = re.exec(code))) {
      if (m.index > last) push(null, code.slice(last, m.index));
      if (m[1]) push("com", m[1]);
      else if (m[2]) push(l === "json" && /^\s*:/.test(code.slice(re.lastIndex)) ? "fn" : "str", m[2]);
      else if (m[3]) push("num", m[3]);
      else {
        var w = m[4];
        if (kws[w]) push(l === "json" ? "num" : "kw", w);
        else if (l === "ts" && /^\s*\(/.test(code.slice(re.lastIndex))) push("fn", w);
        else push(null, w);
      }
      last = re.lastIndex;
    }
    if (last < code.length) push(null, code.slice(last));
    return out;
  }

  function CodeBlock(props) {
    var lang = props.lang || "de";
    var id = useId("bk-code");
    var body = props.code != null ? (props.highlight === false ? props.code : highlight(props.code, props.language)) : props.children;
    return h("figure", { className: cx("bk-code", props.className) },
      props.language || props.caption ? h("figcaption", { className: "bk-code-head", id: id },
        props.language ? h("span", { className: "bk-code-lang" }, props.language) : null,
        props.caption ? h("span", null, props.caption) : null) : null,
      h("pre", { tabIndex: 0, "aria-labelledby": props.language || props.caption ? id : undefined, "aria-label": props.language || props.caption ? undefined : t(lang, "Codebeispiel", "Code example") },
        h("code", null, body)));
  }

  /* ---------- Table ---------- */
  function Table(props) {
    var lang = props.lang || "de";
    var id = useId("bk-table");
    var cols = props.columns || [];
    var rows = props.rows || [];
    var motionRef = useMotion("table", typeof props.highlight === "number" && props.motion !== false);
    return h("div", { className: cx("bk-table", props.wide && "bk-table--wide", props.className), ref: motionRef },
      h("div", { className: "bk-table-scroll", role: "region", "aria-labelledby": id, tabIndex: 0 },
        h("table", null,
          h("caption", { id: id }, props.caption),
          h("thead", null, h("tr", null, cols.map(function (c) {
            return h("th", { key: c.key, scope: "col", className: c.align === "end" ? "is-num" : undefined }, c.label);
          }))),
          h("tbody", null, rows.map(function (r, i) {
            var hl = props.highlight === i;
            return h("tr", { key: i, className: hl ? "is-highlight" : undefined }, cols.map(function (c, j) {
              var content = r[c.key];
              if (j === 0) {
                return h("th", { key: c.key, scope: "row" },
                  hl ? h("span", { className: "bk-table-mark" }, h(Icon, { name: "check", size: 14, strokeWidth: 2.5 }), props.highlightLabel || t(lang, "Gewählt", "Chosen")) : null,
                  content);
              }
              return h("td", { key: c.key, className: c.align === "end" ? "is-num" : undefined }, content);
            }));
          })))),
      props.note ? h("p", { className: "bk-table-note" }, props.note) : null);
  }

  /* ---------- Figure ---------- */
  function Figure(props) {
    var motionRef = useMotion("diagram", props.motion !== false);
    return h("figure", { className: cx("bk-figure", props.wide && "bk-figure--wide", props.grid === false && "bk-figure--plain", props.className), ref: motionRef },
      h("div", { className: "bk-figure-canvas", tabIndex: 0, role: "region", "aria-label": props.regionLabel || (props.label ? props.label + " – " : "") + "Diagramm, bei Bedarf horizontal scrollbar" }, props.children),
      props.caption ? h("figcaption", { className: "bk-figure-caption" },
        props.label ? h("span", { className: "bk-figure-label" }, props.label) : null, props.caption) : null);
  }

  /* ---------- Timeline ---------- */
  function Timeline(props) {
    var lang = props.lang || "de";
    var items = props.items || [];
    var H = props.headingLevel ? "h" + props.headingLevel : "h3";
    return h("ol", { className: cx("bk-timeline", props.compact && "bk-timeline--compact", props.className), "aria-label": props.label || t(lang, "Werdegang", "Career") },
      items.map(function (it, i) {
        return h("li", { key: i, className: cx("bk-tl-item", it.current && "is-current", it.education && "is-education") },
          h("p", { className: "bk-tl-period" }, it.period),
          h("div", { className: "bk-tl-body" },
            h(H, { className: "bk-tl-title" }, it.org),
            it.description ? h("p", { className: "bk-tl-text" }, it.description) : null,
            it.steps && it.steps.length ? h("ol", { className: "bk-tl-steps" }, it.steps.map(function (s, j) {
              return h("li", { key: j, className: cx("bk-tl-step", s.current && "is-current") },
                h("p", { className: "bk-tl-step-head" },
                  h("span", { className: "bk-tl-step-title" }, s.title),
                  h("span", { className: "bk-tl-step-period" }, s.period),
                  s.current ? h("span", { className: "bk-tl-now" }, t(lang, "aktuell", "current")) : null,
                  s.thesis ? h("span", { className: "bk-tl-kind" }, t(lang, "Abschlussarbeit", "Thesis")) : null),
                s.thesis ? h("p", { className: "bk-tl-thesis" }, t(lang, "„", "“") + s.thesis + t(lang, "“", "”")) : null,
                !props.compact && s.bullets && s.bullets.length ? h("ul", { className: "bk-tl-bullets" }, s.bullets.map(function (b, k) { return h("li", { key: k }, b); })) : null);
            })) : null));
      }));
  }

  /* ---------- NoticePage ---------- */
  var NOTICES = {
    expired: { code: "410", de: ["Link abgelaufen", "Dieser Einladungslink ist abgelaufen.", "Links zu dieser Seite gelten nur eine Weile. Wenn Sie weiterhin Interesse haben, schicke ich Ihnen gern einen neuen – eine kurze Nachricht genügt."],
      en: ["Link expired", "This invitation link has expired.", "Links to this site only last a while. If you're still interested, I'm happy to send you a new one – a short message is all it takes."] },
    invalid: { code: "403", de: ["Link ungültig", "Mit diesem Link stimmt etwas nicht.", "Er ist vermutlich unvollständig oder wurde bereits ersetzt. Bitte prüfen Sie, ob er vollständig aus der E-Mail kopiert wurde."],
      en: ["Invalid link", "Something is wrong with this link.", "It is probably incomplete or has already been replaced. Please check that it was copied from the email in full."] },
    invite: { code: null, de: ["Nur per Einladung", "Diese Seite öffnet sich nur mit Einladung.", "Der Zugang erfolgt über einen persönlichen Link, den Sie per E-Mail erhalten haben."],
      en: ["Invitation only", "This site only opens with an invitation.", "Access works through a personal link you received by email."] },
    "404": { code: "404", de: ["Not Found", "Diese Seite gibt es nicht – oder nicht mehr.", "Vielleicht wurde sie verschoben, oder in der Adresse steckt ein Tippfehler. Passiert den Besten."],
      en: ["Not Found", "This page doesn't exist – or no longer does.", "Perhaps it was moved, or there's a typo in the address. Happens to the best of us."] },
    "500": { code: "500", de: ["Internal Server Error", "Hier ist etwas schiefgelaufen.", "Der Fehler liegt bei mir, nicht bei Ihnen. Ich bin informiert – bitte versuchen Sie es in ein paar Minuten noch einmal."],
      en: ["Internal Server Error", "Something went wrong here.", "The fault is mine, not yours. I've been notified – please try again in a few minutes."] }
  };
  function NoticePage(props) {
    var lang = props.lang || "de";
    var v = NOTICES[props.variant] ? props.variant : "invite";
    var n = NOTICES[v];
    var copy = n[lang === "en" ? "en" : "de"];
    var email = props.email || "kontakt@brinkema.dev";
    var actions = null;
    if (v === "expired") actions = [
      h(Button, { key: "a", href: "mailto:" + email, icon: "mail", iconPosition: "start" }, t(lang, "Neuen Link anfragen", "Request a new link")),
      h("span", { key: "b", className: "bk-notice-mail" }, email)];
    if (v === "404") actions = [
      h(Button, { key: "a", href: props.homeHref || "/", variant: "secondary" }, t(lang, "Zur Startseite", "Go to the start page")),
      h(TextLink, { key: "b", href: props.projectsHref || "/projekte", arrow: true }, t(lang, "Alle Projekte", "All projects"))];
    if (v === "500") actions = [
      h(Button, { key: "a", variant: "secondary", onClick: function () { if (typeof location !== "undefined") location.reload(); } }, t(lang, "Seite neu laden", "Reload the page")),
      h(TextLink, { key: "b", href: props.homeHref || "/", arrow: true }, t(lang, "Zur Startseite", "Go to the start page"))];
    return h("main", { className: cx("bk-notice", "bk-notice--" + v, props.className), id: "inhalt" },
      h("div", { className: "bk-notice-inner" },
        n.code ? h("p", { className: "bk-notice-code" }, h("span", { className: "bk-sr" }, "HTTP "), n.code) : null,
        h("p", { className: "bk-notice-status" }, n.code ? n.code + " · " + copy[0] : copy[0]),
        h("h1", { className: "bk-notice-title" }, props.title || copy[1]),
        h("p", { className: "bk-notice-text" }, props.text || copy[2]),
        actions ? h("div", { className: "bk-notice-actions" }, actions) : null));
  }

  /* ---------- Mark ---------- */
  function Mark(props) { return h("mark", { className: cx("bk-mark", props.className) }, props.children); }

  /* ---------- Portrait ---------- */
  function Portrait(props) {
    var lang = props.lang || "de";
    var alt = props.alt || t(lang, "Porträt von Max Brinkema", "Portrait of Max Brinkema");
    return h("figure", { className: cx("bk-portrait", props.className) },
      props.src ? h("img", { src: props.src, alt: alt, width: 320, height: 400, loading: "lazy", decoding: "async" })
        : h("div", { className: "bk-portrait-placeholder", role: "img", "aria-label": alt }, h("span", null, t(lang, "Profilfoto", "Profile photo")), h("span", null, "4 : 5")));
  }

  /* ---------- Hero ---------- */
  function Hero(props) {
    var lang = props.lang || "de";
    var id = useId("bk-hero");
    return h("section", { className: cx("bk-hero", props.variant && "bk-hero--" + props.variant, props.className), "aria-labelledby": id },
      h("div", { className: "bk-hero-grid" },
        h("div", { className: "bk-hero-text" },
          props.status ? h("p", { className: "bk-hero-status" }, h("span", { className: "bk-hero-dot", "aria-hidden": "true" }), props.status) : null,
          h("h1", { className: "bk-hero-greeting", id: id }, props.greeting || t(lang, "Hallo, ich bin Max.", "Hi, I'm Max.")),
          h("p", { className: "bk-hero-role" }, props.role || t(lang, "Software-Architekt", "Software Architect"), h("span", { className: "bk-hero-cursor", "aria-hidden": "true" })),
          props.intro ? h("p", { className: "bk-hero-intro" }, props.intro) : null,
          props.actions ? h("div", { className: "bk-hero-actions" }, props.actions) : null),
        props.aside ? h("div", { className: "bk-hero-aside" }, props.aside) : (props.portrait === false ? null : h(Portrait, Object.assign({ lang: lang }, props.portrait || {})))));
  }

  /* ---------- SubNav (SectionNav, DocTabs) ---------- */
  function SubNav(props, kind) {
    var cls = cx("bk-subnav", "bk-subnav--" + kind, props.className);
    return h("nav", { className: cls, "aria-label": props.label },
      h("ul", null, (props.items || []).map(function (it) {
        var a = { className: cx("bk-subnav-link", props.state && props.stateFor === it.id && "is-" + props.state), href: it.href || "#" + it.id };
        if (props.current === it.id) a["aria-current"] = kind === "tabs" ? "page" : "true";
        return h("li", { key: it.id }, h("a", a, h("span", null, it.label), it.count ? h("small", { className: "bk-subnav-count" }, it.count) : null));
      })));
  }
  function SectionNav(props) {
    return SubNav(Object.assign({ label: t(props.lang || "de", "Abschnitte dieser Seite", "Sections on this page") }, props), "sections");
  }
  function DocTabs(props) {
    return SubNav(Object.assign({ label: t(props.lang || "de", "Architektur-Dokumentation", "Architecture documentation") }, props), "tabs");
  }

  /* ---------- SectionHeading ---------- */
  function SectionHeading(props) {
    var lang = props.lang || "de";
    var H = "h" + (props.level || 2);
    return h("div", { className: cx("bk-heading", props.num && "has-num", props.className) },
      props.num ? h("span", { className: "bk-heading-num", "aria-hidden": "true" }, props.num) : null,
      h(H, { className: "bk-heading-title", id: props.id }, props.children),
      props.id && props.anchor !== false ? h("a", { className: "bk-heading-anchor", href: "#" + props.id, "aria-label": t(lang, "Link zu diesem Abschnitt", "Link to this section") }, "#") : null);
  }

  /* ---------- FactList ---------- */
  function FactList(props) {
    return h("dl", { className: cx("bk-facts", props.className) }, (props.items || []).map(function (f, i) {
      return h("div", { key: i }, h("dt", null, f.label), h("dd", null, f.value));
    }));
  }

  /* ---------- PageHeader ---------- */
  function PageHeader(props) {
    var id = useId("bk-ph");
    return h("section", { className: cx("bk-pagehead", props.band && "bk-pagehead--band", props.className), "aria-labelledby": id },
      h("div", { className: "bk-pagehead-inner" },
        props.back ? h("p", { className: "bk-pagehead-back" }, h("a", { className: "bk-link bk-link--back", href: props.back.href },
          h(Icon, { name: "arrow-left", size: 16, className: "bk-back-icon" }), h("span", { className: "bk-link-text" }, props.back.label))) : null,
        props.eyebrow && props.eyebrow.length ? h("p", { className: "bk-pagehead-eyebrow" }, props.eyebrow.map(function (e, i) { return h("span", { key: i }, e); })) : null,
        h("h1", { className: cx("bk-pagehead-title", props.size === "xl" && "is-xl"), id: id, style: props.transitionName ? { viewTransitionName: props.transitionName, viewTransitionClass: "bk-case-title" } : undefined }, props.title),
        props.lead ? h("p", { className: "bk-pagehead-lead" }, props.lead) : null,
        props.facts ? h(FactList, { items: props.facts }) : null,
        props.actions ? h("div", { className: "bk-pagehead-actions" }, props.actions) : null,
        props.children));
  }

  /* ---------- FocusList ---------- */
  function FocusList(props) {
    var H = "h" + (props.headingLevel || 3);
    return h(props.numbered === false ? "ul" : "ol", { className: cx("bk-focus", props.numbered === false && "bk-focus--plain", props.className) }, (props.items || []).map(function (it, i) {
      return h("li", { key: i, className: "bk-focus-item" },
        props.numbered === false ? null : h("span", { className: "bk-focus-num", "aria-hidden": "true" }, it.num || String(i + 1).padStart(2, "0")),
        h(H, { className: "bk-focus-title" }, it.title),
        it.meta ? h("p", { className: "bk-focus-meta" }, it.meta) : null,
        it.text ? h("p", { className: "bk-focus-text" }, it.text) : null);
    }));
  }

  /* ---------- CertList ---------- */
  function CertList(props) {
    var lang = props.lang || "de";
    return h("ul", { className: cx("bk-certs", props.className) }, (props.items || []).map(function (c, i) {
      return h("li", { key: i, className: cx("bk-cert", props.state && props.stateFor === i && "is-" + props.state) },
        h("p", { className: "bk-cert-issuer" }, c.issuer),
        h("h3", { className: "bk-cert-name" }, c.name),
        h("p", { className: "bk-cert-meta" }, h("time", null, c.date)),
        h("a", { className: "bk-cert-verify", href: c.verifyUrl, rel: "noopener" },
          h("span", { className: "bk-sr" }, c.name + ": "), c.verifyLabel,
          h(Icon, { name: "arrow-up-right", size: 16 }),
          h("span", { className: "bk-sr" }, t(lang, " (externe Seite)", " (external site)"))));
    }));
  }

  /* ---------- ADRList ---------- */
  function ADRList(props) {
    var lang = props.lang || "de";
    var items = props.items || [];
    var filters = props.filters || [];
    return h("div", { className: cx("bk-adrs", props.className) },
      filters.length ? h("div", { className: "bk-adrs-filter", role: "group", "aria-label": t(lang, "Nach Status filtern", "Filter by status") },
        filters.map(function (f) {
          return h(Tag, { key: f.key, selected: props.activeFilter === f.key, onClick: props.onFilter ? function () { props.onFilter(f.key); } : function () {} },
            f.label, h("span", { className: "bk-adrs-count" }, f.count));
        })) : null,
      props.summary ? h("p", { className: "bk-adrs-summary" }, props.summary) : null,
      h("ol", { className: "bk-adrs-list" }, items.map(function (a) {
        var muted = a.status === "superseded" || a.status === "deprecated";
        return h("li", { key: a.id, className: cx("bk-adr", muted && "is-muted", props.state && props.stateFor === a.id && "is-" + props.state) },
          h("p", { className: "bk-adr-id" }, a.id),
          h("div", { className: "bk-adr-body" },
            h("h3", { className: "bk-adr-title" }, h("a", { className: "bk-adr-link", href: a.href || "#" }, a.title)),
            a.summary ? h("p", { className: "bk-adr-summary" }, a.summary) : null,
            h("p", { className: "bk-adr-meta" }, h("span", null, a.area), a.relation ? h("span", null, a.relation) : null)),
          h("div", { className: "bk-adr-side" }, h(StatusBadge, { status: a.status, lang: lang }), h("time", { className: "bk-adr-date" }, a.date)));
      })));
  }

  /* ---------- Consequences ---------- */
  function Consequences(props) {
    var lang = props.lang || "de";
    function col(kind, title, glyph, list) {
      return h("div", { className: "bk-cons-col bk-cons-col--" + kind },
        h("h3", { className: "bk-cons-title" }, h("span", { className: "bk-cons-glyph", "aria-hidden": "true" }, glyph), title),
        h("ul", null, (list || []).map(function (x, i) { return h("li", { key: i }, x); })));
    }
    return h("div", { className: cx("bk-cons", props.className) },
      col("pos", t(lang, "Positiv", "Positive"), "+", props.positive),
      col("neg", t(lang, "Negativ", "Negative"), "−", props.negative));
  }

  /* ---------- Pager ---------- */
  function Pager(props) {
    var lang = props.lang || "de";
    function card(kind, it) {
      if (!it) return null;
      return h("a", { className: cx("bk-pager-link", "bk-pager-link--" + kind, props.state && props.stateFor === kind && "is-" + props.state), href: it.href || "#", rel: kind },
        h("span", { className: "bk-pager-label" }, kind === "prev" ? h(Icon, { name: "arrow-left", size: 14 }) : null, kind === "prev" ? t(lang, "vorherige", "previous") + " · " + it.label : t(lang, "nächste", "next") + " · " + it.label, kind === "next" ? h(Icon, { name: "arrow-right", size: 14 }) : null),
        h("span", { className: "bk-pager-title" }, it.title));
    }
    return h("nav", { className: cx("bk-pager", props.className), "aria-label": props.label || t(lang, "Weiterblättern", "Pagination") },
      card("prev", props.prev), card("next", props.next));
  }

  /* ---------- BlueprintPanel ---------- */
  function BlueprintPanel(props) {
    return h("figure", { className: cx("bk-bp", props.className) },
      props.label ? h("p", { className: "bk-bp-label" }, props.label) : null,
      h("div", { className: "bk-bp-canvas", tabIndex: props.scroll ? 0 : undefined, role: props.scroll ? "region" : undefined, "aria-label": props.scroll ? (props.regionLabel || "Diagramm, horizontal scrollbar") : undefined }, props.children),
      props.caption ? h("figcaption", { className: "bk-bp-caption" }, props.caption) : null);
  }

  /* ---------- DecisionCompare ---------- */
  function DecisionCompare(props) {
    var lang = props.lang || "de";
    var crit = props.criteria || [];
    var id = useId("bk-dec");
    var chosenName = ((props.options || []).filter(function (o) { return o.chosen; })[0] || {}).name;
    var motionRef = useMotion("decide", props.motion !== false);
    return h("figure", { className: cx("bk-decide", props.className), "aria-labelledby": id, ref: motionRef },
      h("div", { className: "bk-decide-head" },
        props.eyebrow ? h("p", { className: "bk-decide-eyebrow" }, props.eyebrow) : null,
        h("p", { className: "bk-decide-question", id: id }, props.question)),
      h("ol", { className: "bk-decide-options" }, (props.options || []).map(function (o, i) {
        return h("li", { key: i, className: cx("bk-decide-opt", o.chosen && "is-chosen") },
          h("p", { className: "bk-decide-num" }, t(lang, "Option ", "Option ") + String(i + 1).padStart(2, "0"),
            o.chosen ? h("span", { className: "bk-decide-chosen" }, h(Icon, { name: "check", size: 14, strokeWidth: 2.5 }), t(lang, "gewählt", "chosen")) : null),
          h("h3", { className: "bk-decide-name" }, o.name),
          h("dl", { className: "bk-decide-crit" }, crit.map(function (c) {
            return h("div", { key: c.key }, h("dt", null, c.label), h("dd", null, o.values[c.key]));
          })));
      })),
      props.result && props.result.length ? h("div", { className: "bk-decide-result" },
        h("p", { className: "bk-decide-result-label" }, (props.resultLabel || t(lang, "Ergebnis", "Result")) + (chosenName ? " · " + chosenName : "")),
        h("ul", null, props.result.map(function (r, k) { return h("li", { key: k }, h("strong", null, r.value), h("span", null, r.label)); }))) : null,
      props.caption || props.href ? h("figcaption", { className: "bk-decide-caption" },
        props.caption ? h("span", null, props.caption) : null,
        props.href ? h(TextLink, { href: props.href, arrow: true }, props.linkLabel || t(lang, "Zur Case Study", "To the case study")) : null) : null);
  }

  /* ---------- SiteFooter: Schriftfeld (title block) ---------- */
  function TitleBlockFooter(props) {
    var lang = props.lang || "de";
    var year = props.year || 2026;
    var email = props.email || "kontakt@brinkema.dev";
    function cell(label, content, cls) { return h("div", { className: cx("bk-tb-cell", cls) }, h("p", { className: "bk-tb-label" }, label), h("div", { className: "bk-tb-value" }, content)); }
    return h("footer", { className: cx("bk-footer", "bk-footer--titleblock", props.className) },
      h("div", { className: "bk-footer-inner" },
        h("div", { className: "bk-tb" },
          props.cta === false ? null : cell(t(lang, "Kontakt", "Contact"), h(F2, null,
            h("p", { className: "bk-tb-cta" }, t(lang, "Lust, über Architektur zu sprechen?", "Fancy a chat about architecture?")),
            h(Button, { variant: "secondary", href: "mailto:" + email, icon: "mail", iconPosition: "start" }, email)), "bk-tb-cell--wide"),
          cell(t(lang, "Machart", "Built with"), h("p", null, h("strong", null, t(lang, "Handgebaut", "Hand-built")),
            t(lang, " mit Astro und TypeScript. Jede Entscheidung dahinter ist als ADR dokumentiert – wer neugierig ist, darf gern in die DevTools schauen.", " with Astro and TypeScript. Every decision behind it is written up as an ADR – feel free to open your DevTools.")), "bk-tb-cell--wide"),
          cell(t(lang, "Verweise", "Links"), h("ul", { className: "bk-footer-links" },
            h("li", null, h(TextLink, { href: props.architectureHref || "/architektur" }, t(lang, "Architektur dieser Seite", "How this site was built"))),
            h("li", null, h(TextLink, { href: props.privacyHref || "/datenschutz" }, t(lang, "Datenschutz", "Privacy"))))),
          cell(t(lang, "Lizenz", "License"), h("p", null, t(lang, "Code unter MIT · Inhalte © ", "Code under MIT · Content © ") + year + " Max Brinkema")),
          cell(t(lang, "Stand", "Updated"), h("p", null, props.updated || t(lang, "Oktober 2026", "October 2026"))),
          cell(t(lang, "Zeichen", "Mark"), h(Wordmark, { height: 20 })))));
  }

  var api = {
    Wordmark: Wordmark, Icon: Icon, Button: Button, TextLink: TextLink, DownloadButton: DownloadButton,
    LanguageSwitch: LanguageSwitch, ThemeToggle: ThemeToggle, SiteHeader: SiteHeader, SiteFooter: SiteFooter,
    Toc: Toc, Metric: Metric, AccentBand: AccentBand, CaseTeaser: CaseTeaser, Tag: Tag, StatusBadge: StatusBadge,
    Callout: Callout, Prose: Prose, CodeBlock: CodeBlock, Table: Table, Figure: Figure, Timeline: Timeline, NoticePage: NoticePage,
    Mark: Mark, Portrait: Portrait, Hero: Hero, SectionNav: SectionNav, DocTabs: DocTabs, SectionHeading: SectionHeading, FactList: FactList, PageHeader: PageHeader, FocusList: FocusList, CertList: CertList, ADRList: ADRList, Consequences: Consequences, Pager: Pager,
    DecisionCompare: DecisionCompare
  };
  window.Brinkema = Object.assign(window.Brinkema || {}, api);
})();
