// Kupák betöltése a local storage-ból
let cups = localStorage.getItem('savedCups') ? parseInt(localStorage.getItem('savedCups')) : 0;

// Különböző kontinensekhez tartozó kvíz adatok
const continents = {
    World: [
        { country: "Hungary", flag: "https://flagcdn.com/w320/hu.png" },
        { country: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
        { country: "France", flag: "https://flagcdn.com/w320/fr.png" },
        { country: "Germany", flag: "https://flagcdn.com/w320/de.png" },
        { country: "Austria", flag: "https://flagcdn.com/w320/at.png" },
        { country: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
        { country: "Luxembourg", flag: "https://flagcdn.com/w320/lu.png" },
        { country: "Belgium", flag: "https://flagcdn.com/w320/be.png" },
        { country: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
        { country: "Spain", flag: "https://flagcdn.com/w320/es.png" },
        { country: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
        { country: "Ireland", flag: "https://flagcdn.com/w320/ie.png" },
        { country: "Iceland", flag: "https://flagcdn.com/w320/is.png" },
        { country: "Denmark", flag: "https://flagcdn.com/w320/dk.png" },
        { country: "Estonia", flag: "https://flagcdn.com/w320/ee.png" },
        { country: "Romania", flag: "https://flagcdn.com/w320/ro.png" },
        { country: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
        { country: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
        { country: "Ukraine", flag: "https://flagcdn.com/w320/ua.png" },
        { country: "Italy", flag: "https://flagcdn.com/w320/it.png" },
        { country: "Poland", flag: "https://flagcdn.com/w320/pl.png" },
        { country: "Albania", flag: "https://flagcdn.com/w320/al.png" },
        { country: "Andorra", flag: "https://flagcdn.com/w320/ad.png" },
        { country: "San Marino", flag: "https://flagcdn.com/w320/sm.png" },
        { country: "Serbia", flag: "https://flagcdn.com/w320/rs.png" },
        { country: "Slovakia", flag: "https://flagcdn.com/w320/sk.png" },
        { country: "Slovenia", flag: "https://flagcdn.com/w320/si.png" },
        { country: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
        { country: "Switzerland", flag: "https://flagcdn.com/w320/ch.png" },
        { country: "Denmark", flag: "https://flagcdn.com/w320/dk.png" },
        { country: "Finland", flag: "https://flagcdn.com/w320/fi.png" },
        { country: "Greece", flag: "https://flagcdn.com/w320/gr.png" },
        { country: "Kosovo", flag: "https://flagcdn.com/w320/xk.png" },
        { country: "Latvia", flag: "https://flagcdn.com/w320/lv.png" },
        { country: "Liechtenstein", flag: "https://flagcdn.com/w320/li.png" },
        { country: "Lithuania", flag: "https://flagcdn.com/w320/lt.png" },
        { country: "Luxembourg", flag: "https://flagcdn.com/w320/lu.png" },
        { country: "Croatia", flag: "https://flagcdn.com/w320/hr.png" },
        { country: "Cyprus", flag: "https://flagcdn.com/w320/cy.png" },
        { country: "Czechia", flag: "https://flagcdn.com/w320/cz.png" },
        { country: "Vatican City", flag: "https://flagcdn.com/w320/va.png" },
        { country: "Belarus", flag: "https://flagcdn.com/w320/by.png" },
        { country: "Belgium", flag: "https://flagcdn.com/w320/be.png" },
        { country: "Bosnia and Herzegovina", flag: "https://flagcdn.com/w320/ba.png" },
        { country: "Bulgaria", flag: "https://flagcdn.com/w320/bg.png" },
        { country: "North Macedonia", flag: "https://flagcdn.com/w320/mk.png" },
        { country: "Norway", flag: "https://flagcdn.com/w320/no.png" },
        { country: "Malta", flag: "https://flagcdn.com/w320/mt.png" },
        { country: "Moldova", flag: "https://flagcdn.com/w320/md.png" },
        { country: "Monaco", flag: "https://flagcdn.com/w320/mc.png" },
        { country: "Montenegro", flag: "https://flagcdn.com/w320/me.png" },
        { country: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
        { country: "China", flag: "https://flagcdn.com/w320/cn.png" },
        { country: "India", flag: "https://flagcdn.com/w320/in.png" },
        { country: "Qatar", flag: "https://flagcdn.com/w320/qa.png" },
        { country: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
        { country: "Taiwan", flag: "https://flagcdn.com/w320/tw.png" },
        { country: "Tajikistan", flag: "https://flagcdn.com/w320/tj.png" },
        { country: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
        { country: "Timor-Leste", flag: "https://flagcdn.com/w320/tl.png" },
        { country: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
        { country: "Turkmenistan", flag: "https://flagcdn.com/w320/tm.png" },
        { country: "United Arab Emirates", flag: "https://flagcdn.com/w320/ae.png" },
        { country: "Uzbekistan", flag: "https://flagcdn.com/w320/uz.png" },
        { country: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
        { country: "Iran", flag: "https://flagcdn.com/w320/ir.png" },
        { country: "Iraq", flag: "https://flagcdn.com/w320/iq.png" },
        { country: "Israel", flag: "https://flagcdn.com/w320/il.png" },
        { country: "Oman", flag: "https://flagcdn.com/w320/om.png" },
        { country: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
        { country: "Palestine", flag: "https://flagcdn.com/w320/ps.png" },
        { country: "Philippines", flag: "https://flagcdn.com/w320/ph.png" },
        { country: "Afghanistan", flag: "https://flagcdn.com/w320/af.png" },
        { country: "Armenia", flag: "https://flagcdn.com/w320/am.png" },
        { country: "Azerbaijan", flag: "https://flagcdn.com/w320/az.png" },
        { country: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
        { country: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png" },
        { country: "Singapore", flag: "https://flagcdn.com/w320/sg.png" },
        { country: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
        { country: "Syria", flag: "https://flagcdn.com/w320/sy.png" },
        { country: "Georgia", flag: "https://flagcdn.com/w320/ge.png" },
        { country: "Jordan", flag: "https://flagcdn.com/w320/jo.png" },
        { country: "Kazakhstan", flag: "https://flagcdn.com/w320/kz.png" },
        { country: "Kuwait", flag: "https://flagcdn.com/w320/kw.png" },
        { country: "Kyrgyzstan", flag: "https://flagcdn.com/w320/kg.png" },
        { country: "North Korea", flag: "https://flagcdn.com/w320/kp.png" },
        { country: "Hong Kong", flag: "https://flagcdn.com/w320/hk.png" },
        { country: "Laos", flag: "https://flagcdn.com/w320/la.png" },
        { country: "Lebanon", flag: "https://flagcdn.com/w320/lb.png" },
        { country: "Yemen", flag: "https://flagcdn.com/w320/ye.png" },
        { country: "Cambodia", flag: "https://flagcdn.com/w320/kh.png" },
        { country: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
        { country: "Bahrain", flag: "https://flagcdn.com/w320/bh.png" },
        { country: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
        { country: "Bhutan", flag: "https://flagcdn.com/w320/bt.png" },
        { country: "Brunei", flag: "https://flagcdn.com/w320/bn.png" },
        { country: "North Korea", flag: "https://flagcdn.com/w320/kp.png" },
        { country: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
        { country: "Malaysia", flag: "https://flagcdn.com/w320/my.png" },
        { country: "Maldives", flag: "https://flagcdn.com/w320/mv.png" },
        { country: "Mongolia", flag: "https://flagcdn.com/w320/mn.png" },
        { country: "Myanmar", flag: "https://flagcdn.com/w320/mm.png" },
        { country: "Nigeria", flag: "https://flagcdn.com/w320/ng.png" },
        { country: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
        { country: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
        { country: "Equatorial Guinea", flag: "https://flagcdn.com/w320/gq.png" },
        { country: "Eritrea", flag: "https://flagcdn.com/w320/er.png" },
        { country: "Eswatini", flag: "https://flagcdn.com/w320/sz.png" },
        { country: "Ethiopia", flag: "https://flagcdn.com/w320/et.png" },
        { country: "Republic of the Congo", flag: "https://flagcdn.com/w320/cg.png" },
        { country: "Rwanda", flag: "https://flagcdn.com/w320/rw.png" },
        { country: "Tanzania", flag: "https://flagcdn.com/w320/tz.png" },
        { country: "Togo", flag: "https://flagcdn.com/w320/tg.png" },
        { country: "Tunisia", flag: "https://flagcdn.com/w320/tn.png" },
        { country: "Zambia", flag: "https://flagcdn.com/w320/zm.png" },
        { country: "Zimbabwe", flag: "https://flagcdn.com/w320/zw.png" },
        { country: "Uganda", flag: "https://flagcdn.com/w320/ug.png" },
        { country: "Sudan", flag: "https://flagcdn.com/w320/sd.png" },
        { country: "Algeria", flag: "https://flagcdn.com/w320/dz.png" },
        { country: "Angola", flag: "https://flagcdn.com/w320/ao.png" },
        { country: "Senegal", flag: "https://flagcdn.com/w320/sn.png" },
        { country: "Seychelles", flag: "https://flagcdn.com/w320/sc.png" },
        { country: "Sierra Leone", flag: "https://flagcdn.com/w320/sl.png" },
        { country: "Somalia", flag: "https://flagcdn.com/w320/so.png" },
        { country: "South Sudan", flag: "https://flagcdn.com/w320/ss.png" },
        { country: "DR Congo", flag: "https://flagcdn.com/w320/cd.png" },
        { country: "Djibouti", flag: "https://flagcdn.com/w320/dj.png" },
        { country: "Gabon", flag: "https://flagcdn.com/w320/ga.png" },
        { country: "Gambia", flag: "https://flagcdn.com/w320/gm.png" },
        { country: "Ghana", flag: "https://flagcdn.com/w320/gh.png" },
        { country: "Guinea", flag: "https://flagcdn.com/w320/gn.png" },
        { country: "Guinea-Bissau", flag: "https://flagcdn.com/w320/gw.png" },
        { country: "Kenya", flag: "https://flagcdn.com/w320/ke.png" },
        { country: "Lesotho", flag: "https://flagcdn.com/w320/ls.png" },
        { country: "Liberia", flag: "https://flagcdn.com/w320/lr.png" },
        { country: "Lybia", flag: "https://flagcdn.com/w320/ly.png" },
        { country: "Cameroon", flag: "https://flagcdn.com/w320/cm.png" },
        { country: "Cape Verde", flag: "https://flagcdn.com/w320/cv.png" },
        { country: "Central African Republic", flag: "https://flagcdn.com/w320/cf.png" },
        { country: "Chad", flag: "https://flagcdn.com/w320/td.png" },
        { country: "Comoros", flag: "https://flagcdn.com/w320/km.png" },
        { country: "Ivory Coast", flag: "https://flagcdn.com/w320/ci.png" },
        { country: "Botswana", flag: "https://flagcdn.com/w320/bw.png" },
        { country: "Burkina Faso", flag: "https://flagcdn.com/w320/bf.png" },
        { country: "Burundi", flag: "https://flagcdn.com/w320/bi.png" },
        { country: "Niger", flag: "https://flagcdn.com/w320/ne.png" },
        { country: "Madagascar", flag: "https://flagcdn.com/w320/mg.png" },
        { country: "Malawi", flag: "https://flagcdn.com/w320/mw.png" },
        { country: "Mali", flag: "https://flagcdn.com/w320/ml.png" },
        { country: "Mauritania", flag: "https://flagcdn.com/w320/mr.png" },
        { country: "Mauritius", flag: "https://flagcdn.com/w320/mu.png" },
        { country: "Morocco", flag: "https://flagcdn.com/w320/ma.png" },
        { country: "Mozambique", flag: "https://flagcdn.com/w320/mz.png" },
        { country: "Australia", flag: "https://flagcdn.com/w320/au.png" },
        { country: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
        { country: "Fiji", flag: "https://flagcdn.com/w320/fj.png" },
        { country: "Tonga", flag: "https://flagcdn.com/w320/to.png" },
        { country: "Tuvalu", flag: "https://flagcdn.com/w320/tv.png" },
        { country: "Palau", flag: "https://flagcdn.com/w320/pw.png" },
        { country: "Papua New Guinea", flag: "https://flagcdn.com/w320/pg.png" },
        { country: "Samoa", flag: "https://flagcdn.com/w320/ws.png" },
        { country: "Solomon Islands", flag: "https://flagcdn.com/w320/sb.png" },
        { country: "Kiribati", flag: "https://flagcdn.com/w320/ki.png" },
        { country: "Vanuatu", flag: "https://flagcdn.com/w320/vu.png" },
        { country: "Nauru", flag: "https://flagcdn.com/w320/nr.png" },
        { country: "Marshall Islands", flag: "https://flagcdn.com/w320/mh.png" },
        { country: "Micronesia", flag: "https://flagcdn.com/w320/fm.png" },
        { country: "United States", flag: "https://flagcdn.com/w320/us.png" },
        { country: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
        { country: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
        { country: "El Salvador", flag: "https://flagcdn.com/w320/sv.png" },
        { country: "Panama", flag: "https://flagcdn.com/w320/pa.png" },
        { country: "Dominican Republic", flag: "https://flagcdn.com/w320/do.png" },
        { country: "Guatemala", flag: "https://flagcdn.com/w320/gt.png" },
        { country: "Honduras", flag: "https://flagcdn.com/w320/hn.png" },
        { country: "Jamaica", flag: "https://flagcdn.com/w320/jm.png" },
        { country: "Costa Rica", flag: "https://flagcdn.com/w320/cr.png" },
        { country: "Cuba", flag: "https://flagcdn.com/w320/cu.png" },
        { country: "Bahamas", flag: "https://flagcdn.com/w320/bs.png" },
        { country: "Barbados", flag: "https://flagcdn.com/w320/bb.png" },
        { country: "Nicaragua", flag: "https://flagcdn.com/w320/ni.png" },
        { country: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
        { country: "Colombia", flag: "https://flagcdn.com/w320/co.png" },
        { country: "Ecuador", flag: "https://flagcdn.com/w320/ec.png" },
        { country: "Uruguay", flag: "https://flagcdn.com/w320/uy.png" },
        { country: "Paraguay", flag: "https://flagcdn.com/w320/py.png" },
        { country: "Peru", flag: "https://flagcdn.com/w320/pe.png" },
        { country: "Suriname", flag: "https://flagcdn.com/w320/sr.png" },
        { country: "Guyana", flag: "https://flagcdn.com/w320/gy.png" },
        { country: "Chile", flag: "https://flagcdn.com/w320/cl.png" },
        { country: "Venezuela", flag: "https://flagcdn.com/w320/ve.png" },
        { country: "Bolivia", flag: "https://flagcdn.com/w320/bo.png" }
        // Itt további országokat adhatsz hozzá a világ minden tájáról
    ],
    Europe: [
        { country: "Germany", flag: "https://flagcdn.com/w320/de.png" },
        { country: "France", flag: "https://flagcdn.com/w320/fr.png" },
        { country: "Hungary", flag: "https://flagcdn.com/w320/hu.png" },
        { country: "Austria", flag: "https://flagcdn.com/w320/at.png" },
        { country: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
        { country: "Luxembourg", flag: "https://flagcdn.com/w320/lu.png" },
        { country: "Belgium", flag: "https://flagcdn.com/w320/be.png" },
        { country: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
        { country: "Spain", flag: "https://flagcdn.com/w320/es.png" },
        { country: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
        { country: "Ireland", flag: "https://flagcdn.com/w320/ie.png" },
        { country: "Iceland", flag: "https://flagcdn.com/w320/is.png" },
        { country: "Denmark", flag: "https://flagcdn.com/w320/dk.png" },
        { country: "Estonia", flag: "https://flagcdn.com/w320/ee.png" },
        { country: "Romania", flag: "https://flagcdn.com/w320/ro.png" },
        { country: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
        { country: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
        { country: "Ukraine", flag: "https://flagcdn.com/w320/ua.png" },
        { country: "Italy", flag: "https://flagcdn.com/w320/it.png" },
        { country: "Poland", flag: "https://flagcdn.com/w320/pl.png" },
        { country: "Albania", flag: "https://flagcdn.com/w320/al.png" },
        { country: "Andorra", flag: "https://flagcdn.com/w320/ad.png" },
        { country: "San Marino", flag: "https://flagcdn.com/w320/sm.png" },
        { country: "Serbia", flag: "https://flagcdn.com/w320/rs.png" },
        { country: "Slovakia", flag: "https://flagcdn.com/w320/sk.png" },
        { country: "Slovenia", flag: "https://flagcdn.com/w320/si.png" },
        { country: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
        { country: "Switzerland", flag: "https://flagcdn.com/w320/ch.png" },
        { country: "Denmark", flag: "https://flagcdn.com/w320/dk.png" },
        { country: "Finland", flag: "https://flagcdn.com/w320/fi.png" },
        { country: "Greece", flag: "https://flagcdn.com/w320/gr.png" },
        { country: "Kosovo", flag: "https://flagcdn.com/w320/xk.png" },
        { country: "Latvia", flag: "https://flagcdn.com/w320/lv.png" },
        { country: "Liechtenstein", flag: "https://flagcdn.com/w320/li.png" },
        { country: "Lithuania", flag: "https://flagcdn.com/w320/lt.png" },
        { country: "Luxembourg", flag: "https://flagcdn.com/w320/lu.png" },
        { country: "Croatia", flag: "https://flagcdn.com/w320/hr.png" },
        { country: "Cyprus", flag: "https://flagcdn.com/w320/cy.png" },
        { country: "Czechia", flag: "https://flagcdn.com/w320/cz.png" },
        { country: "Vatican City", flag: "https://flagcdn.com/w320/va.png" },
        { country: "Belarus", flag: "https://flagcdn.com/w320/by.png" },
        { country: "Belgium", flag: "https://flagcdn.com/w320/be.png" },
        { country: "Bosnia and Herzegovina", flag: "https://flagcdn.com/w320/ba.png" },
        { country: "Bulgaria", flag: "https://flagcdn.com/w320/bg.png" },
        { country: "North Macedonia", flag: "https://flagcdn.com/w320/mk.png" },
        { country: "Norway", flag: "https://flagcdn.com/w320/no.png" },
        { country: "Malta", flag: "https://flagcdn.com/w320/mt.png" },
        { country: "Moldova", flag: "https://flagcdn.com/w320/md.png" },
        { country: "Monaco", flag: "https://flagcdn.com/w320/mc.png" },
        { country: "Montenegro", flag: "https://flagcdn.com/w320/me.png" }
        // Itt további európai országokat adhatsz hozzá
    ],
    Asia: [
        { country: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
        { country: "China", flag: "https://flagcdn.com/w320/cn.png" },
        { country: "India", flag: "https://flagcdn.com/w320/in.png" },
        { country: "Qatar", flag: "https://flagcdn.com/w320/qa.png" },
        { country: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
        { country: "Taiwan", flag: "https://flagcdn.com/w320/tw.png" },
        { country: "Tajikistan", flag: "https://flagcdn.com/w320/tj.png" },
        { country: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
        { country: "Timor-Leste", flag: "https://flagcdn.com/w320/tl.png" },
        { country: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
        { country: "Turkmenistan", flag: "https://flagcdn.com/w320/tm.png" },
        { country: "United Arab Emirates", flag: "https://flagcdn.com/w320/ae.png" },
        { country: "Uzbekistan", flag: "https://flagcdn.com/w320/uz.png" },
        { country: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
        { country: "Iran", flag: "https://flagcdn.com/w320/ir.png" },
        { country: "Iraq", flag: "https://flagcdn.com/w320/iq.png" },
        { country: "Israel", flag: "https://flagcdn.com/w320/il.png" },
        { country: "Oman", flag: "https://flagcdn.com/w320/om.png" },
        { country: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
        { country: "Palestine", flag: "https://flagcdn.com/w320/ps.png" },
        { country: "Philippines", flag: "https://flagcdn.com/w320/ph.png" },
        { country: "Afghanistan", flag: "https://flagcdn.com/w320/af.png" },
        { country: "Armenia", flag: "https://flagcdn.com/w320/am.png" },
        { country: "Azerbaijan", flag: "https://flagcdn.com/w320/az.png" },
        { country: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
        { country: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png" },
        { country: "Singapore", flag: "https://flagcdn.com/w320/sg.png" },
        { country: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
        { country: "Syria", flag: "https://flagcdn.com/w320/sy.png" },
        { country: "Georgia", flag: "https://flagcdn.com/w320/ge.png" },
        { country: "Jordan", flag: "https://flagcdn.com/w320/jo.png" },
        { country: "Kazakhstan", flag: "https://flagcdn.com/w320/kz.png" },
        { country: "Kuwait", flag: "https://flagcdn.com/w320/kw.png" },
        { country: "Kyrgyzstan", flag: "https://flagcdn.com/w320/kg.png" },
        { country: "North Korea", flag: "https://flagcdn.com/w320/kp.png" },
        { country: "Hong Kong", flag: "https://flagcdn.com/w320/hk.png" },
        { country: "Laos", flag: "https://flagcdn.com/w320/la.png" },
        { country: "Lebanon", flag: "https://flagcdn.com/w320/lb.png" },
        { country: "Yemen", flag: "https://flagcdn.com/w320/ye.png" },
        { country: "Cambodia", flag: "https://flagcdn.com/w320/kh.png" },
        { country: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
        { country: "Bahrain", flag: "https://flagcdn.com/w320/bh.png" },
        { country: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
        { country: "Bhutan", flag: "https://flagcdn.com/w320/bt.png" },
        { country: "Brunei", flag: "https://flagcdn.com/w320/bn.png" },
        { country: "North Korea", flag: "https://flagcdn.com/w320/kp.png" },
        { country: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
        { country: "Malaysia", flag: "https://flagcdn.com/w320/my.png" },
        { country: "Maldives", flag: "https://flagcdn.com/w320/mv.png" },
        { country: "Mongolia", flag: "https://flagcdn.com/w320/mn.png" },
        { country: "Myanmar", flag: "https://flagcdn.com/w320/mm.png" }
        // További kontinensek adatai hasonlóan hozzáadhatók
    ],
    Africa: [
        { country: "Nigeria", flag: "https://flagcdn.com/w320/ng.png" },
        { country: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
        { country: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
        { country: "Equatorial Guinea", flag: "https://flagcdn.com/w320/gq.png" },
        { country: "Eritrea", flag: "https://flagcdn.com/w320/er.png" },
        { country: "Eswatini", flag: "https://flagcdn.com/w320/sz.png" },
        { country: "Ethiopia", flag: "https://flagcdn.com/w320/et.png" },
        { country: "Republic of the Congo", flag: "https://flagcdn.com/w320/cg.png" },
        { country: "Rwanda", flag: "https://flagcdn.com/w320/rw.png" },
        { country: "Tanzania", flag: "https://flagcdn.com/w320/tz.png" },
        { country: "Togo", flag: "https://flagcdn.com/w320/tg.png" },
        { country: "Tunisia", flag: "https://flagcdn.com/w320/tn.png" },
        { country: "Zambia", flag: "https://flagcdn.com/w320/zm.png" },
        { country: "Zimbabwe", flag: "https://flagcdn.com/w320/zw.png" },
        { country: "Uganda", flag: "https://flagcdn.com/w320/ug.png" },
        { country: "Sudan", flag: "https://flagcdn.com/w320/sd.png" },
        { country: "Algeria", flag: "https://flagcdn.com/w320/dz.png" },
        { country: "Angola", flag: "https://flagcdn.com/w320/ao.png" },
        { country: "Senegal", flag: "https://flagcdn.com/w320/sn.png" },
        { country: "Seychelles", flag: "https://flagcdn.com/w320/sc.png" },
        { country: "Sierra Leone", flag: "https://flagcdn.com/w320/sl.png" },
        { country: "Somalia", flag: "https://flagcdn.com/w320/so.png" },
        { country: "South Sudan", flag: "https://flagcdn.com/w320/ss.png" },
        { country: "DR Congo", flag: "https://flagcdn.com/w320/cd.png" },
        { country: "Djibouti", flag: "https://flagcdn.com/w320/dj.png" },
        { country: "Gabon", flag: "https://flagcdn.com/w320/ga.png" },
        { country: "Gambia", flag: "https://flagcdn.com/w320/gm.png" },
        { country: "Ghana", flag: "https://flagcdn.com/w320/gh.png" },
        { country: "Guinea", flag: "https://flagcdn.com/w320/gn.png" },
        { country: "Guinea-Bissau", flag: "https://flagcdn.com/w320/gw.png" },
        { country: "Kenya", flag: "https://flagcdn.com/w320/ke.png" },
        { country: "Lesotho", flag: "https://flagcdn.com/w320/ls.png" },
        { country: "Liberia", flag: "https://flagcdn.com/w320/lr.png" },
        { country: "Lybia", flag: "https://flagcdn.com/w320/ly.png" },
        { country: "Cameroon", flag: "https://flagcdn.com/w320/cm.png" },
        { country: "Cape Verde", flag: "https://flagcdn.com/w320/cv.png" },
        { country: "Central African Republic", flag: "https://flagcdn.com/w320/cf.png" },
        { country: "Chad", flag: "https://flagcdn.com/w320/td.png" },
        { country: "Comoros", flag: "https://flagcdn.com/w320/km.png" },
        { country: "Ivory Coast", flag: "https://flagcdn.com/w320/ci.png" },
        { country: "Botswana", flag: "https://flagcdn.com/w320/bw.png" },
        { country: "Burkina Faso", flag: "https://flagcdn.com/w320/bf.png" },
        { country: "Burundi", flag: "https://flagcdn.com/w320/bi.png" },
        { country: "Niger", flag: "https://flagcdn.com/w320/ne.png" },
        { country: "Madagascar", flag: "https://flagcdn.com/w320/mg.png" },
        { country: "Malawi", flag: "https://flagcdn.com/w320/mw.png" },
        { country: "Mali", flag: "https://flagcdn.com/w320/ml.png" },
        { country: "Mauritania", flag: "https://flagcdn.com/w320/mr.png" },
        { country: "Mauritius", flag: "https://flagcdn.com/w320/mu.png" },
        { country: "Morocco", flag: "https://flagcdn.com/w320/ma.png" },
        { country: "Mozambique", flag: "https://flagcdn.com/w320/mz.png" }

    ],
    Australia: [
        { country: "Australia", flag: "https://flagcdn.com/w320/au.png" },
        { country: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
        { country: "Fiji", flag: "https://flagcdn.com/w320/fj.png" },
        { country: "Tonga", flag: "https://flagcdn.com/w320/to.png" },
        { country: "Tuvalu", flag: "https://flagcdn.com/w320/tv.png" },
        { country: "Palau", flag: "https://flagcdn.com/w320/pw.png" },
        { country: "Papua New Guinea", flag: "https://flagcdn.com/w320/pg.png" },
        { country: "Samoa", flag: "https://flagcdn.com/w320/ws.png" },
        { country: "Solomon Islands", flag: "https://flagcdn.com/w320/sb.png" },
        { country: "Kiribati", flag: "https://flagcdn.com/w320/ki.png" },
        { country: "Vanuatu", flag: "https://flagcdn.com/w320/vu.png" },
        { country: "Nauru", flag: "https://flagcdn.com/w320/nr.png" },
        { country: "Marshall Islands", flag: "https://flagcdn.com/w320/mh.png" },
        { country: "Micronesia", flag: "https://flagcdn.com/w320/fm.png" }

    ],
    "North America": [
        { country: "United States", flag: "https://flagcdn.com/w320/us.png" },
        { country: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
        { country: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
        { country: "El Salvador", flag: "https://flagcdn.com/w320/sv.png" },
        { country: "Panama", flag: "https://flagcdn.com/w320/pa.png" },
        { country: "Dominican Republic", flag: "https://flagcdn.com/w320/do.png" },
        { country: "Guatemala", flag: "https://flagcdn.com/w320/gt.png" },
        { country: "Honduras", flag: "https://flagcdn.com/w320/hn.png" },
        { country: "Jamaica", flag: "https://flagcdn.com/w320/jm.png" },
        { country: "Costa Rica", flag: "https://flagcdn.com/w320/cr.png" },
        { country: "Cuba", flag: "https://flagcdn.com/w320/cu.png" },
        { country: "Bahamas", flag: "https://flagcdn.com/w320/bs.png" },
        { country: "Barbados", flag: "https://flagcdn.com/w320/bb.png" },
        { country: "Nicaragua", flag: "https://flagcdn.com/w320/ni.png" }

   ],
    "South America": [
        { country: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
        { country: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
        { country: "Colombia", flag: "https://flagcdn.com/w320/co.png" },
        { country: "Ecuador", flag: "https://flagcdn.com/w320/ec.png" },
        { country: "Uruguay", flag: "https://flagcdn.com/w320/uy.png" },
        { country: "Paraguay", flag: "https://flagcdn.com/w320/py.png" },
        { country: "Peru", flag: "https://flagcdn.com/w320/pe.png" },
        { country: "Suriname", flag: "https://flagcdn.com/w320/sr.png" },
        { country: "Guyana", flag: "https://flagcdn.com/w320/gy.png" },
        { country: "Chile", flag: "https://flagcdn.com/w320/cl.png" },
        { country: "Venezuela", flag: "https://flagcdn.com/w320/ve.png" },
        { country: "Bolivia", flag: "https://flagcdn.com/w320/bo.png" }

   ], 
};

// Játék állapot változók
let selectedContinentData = [];
let shuffledQuizData = [];
let currentQuestion = 0;

// Kvíz kezdése a kiválasztott kontinenssel
function startQuiz(continent) {
    selectedContinentData = continents[continent];
    shuffledQuizData = shuffle([...selectedContinentData]);
    document.getElementById("continent-selection").style.display = "none";
    document.getElementById("quiz-content").style.display = "block";
    document.getElementById("continent-title").innerText = continent + " Quiz";
    loadQuestion();
    updateCups();
}

function loadQuestion() {
    const questionData = shuffledQuizData[currentQuestion];
    document.getElementById("flag").innerHTML = `<img src="${questionData.flag}" alt="Flag" width="300">`;
    document.getElementById("result").innerText = '';
}

function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const result = document.getElementById("result");
    const correctAnswer = shuffledQuizData[currentQuestion].country.toLowerCase();

    if (answer === correctAnswer) {
        result.innerHTML = "<span style='color: green;'>Correct answer!</span>";
        cups += 50; // 50 kupa minden helyes válasz után
        saveCups(); // Kupák elmentése
        updateCups();
        currentQuestion++;
        if (currentQuestion < shuffledQuizData.length) {
            loadQuestion();
            document.getElementById("answer").value = "";
        } else {
            document.getElementById("flag").innerHTML = "Quiz completed!";
            result.innerHTML += "<br>Well done!";
        }
    } else {
        result.innerHTML = "<span style='color: red;'>Wrong answer, try again!</span>";
    }
}

function skipQuestion() {
    if (cups >= 85) {
        cups -= 85;
        saveCups(); // Kupák elmentése
        updateCups();
        currentQuestion++;
        if (currentQuestion < shuffledQuizData.length) {
            loadQuestion();
            document.getElementById("answer").value = "";
            document.getElementById("result").innerText = "You skipped the question!";
        } else {
            document.getElementById("flag").innerHTML = "Quiz completed!";
            document.getElementById("result").innerHTML = "Well done!";
        }
    } else {
        document.getElementById("result").innerHTML = "<span style='color: red;'>Not enough cups to skip the question!</span>";
    }
}

function updateCups() {
    document.getElementById("cups").innerText = cups;
}

// Kupák elmentése a local storage-ba
function saveCups() {
    localStorage.setItem('savedCups', cups);
}

// Kilépés a főoldalra, kupák megtartásával
function goToHome() {
    document.getElementById("quiz-content").style.display = "none";
    document.getElementById("continent-selection").style.display = "block";
    currentQuestion = 0;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
}

// Keverő funkció a kvíz adatokhoz
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}