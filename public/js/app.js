var map;
var markers = [];
var marked = {};

var countries = [{name: 'Afghanistan', code: 'AF'}, {name: '�landIslands', code: 'AX'}, {name: 'Albania', code: 'AL'}, {name: 'Algeria', code: 'DZ'}, {name: 'AmericanSamoa', code: 'AS'}, {name: 'AndorrA', code: 'AD'}, {name: 'Angola', code: 'AO'}, {name: 'Anguilla', code: 'AI'}, {name: 'Antarctica', code: 'AQ'}, {name: 'AntiguaandBarbuda', code: 'AG'}, {name: 'Argentina', code: 'AR'}, {name: 'Armenia', code: 'AM'}, {name: 'Aruba', code: 'AW'}, {name: 'Australia', code: 'AU'}, {name: 'Austria', code: 'AT'}, {name: 'Azerbaijan', code: 'AZ'}, {name: 'Bahamas', code: 'BS'}, {name: 'Bahrain', code: 'BH'}, {name: 'Bangladesh', code: 'BD'}, {name: 'Barbados', code: 'BB'}, {name: 'Belarus', code: 'BY'}, {name: 'Belgium', code: 'BE'}, {name: 'Belize', code: 'BZ'}, {name: 'Benin', code: 'BJ'}, {name: 'Bermuda', code: 'BM'}, {name: 'Bhutan', code: 'BT'}, {name: 'Bolivia', code: 'BO'}, {name: 'BosniaandHerzegovina', code: 'BA'}, {name: 'Botswana', code: 'BW'}, {name: 'BouvetIsland', code: 'BV'}, {name: 'Brazil', code: 'BR'}, {name: 'BritishIndianOceanTerritory', code: 'IO'}, {name: 'BruneiDarussalam', code: 'BN'}, {name: 'Bulgaria', code: 'BG'}, {name: 'BurkinaFaso', code: 'BF'}, {name: 'Burundi', code: 'BI'}, {name: 'Cambodia', code: 'KH'}, {name: 'Cameroon', code: 'CM'}, {name: 'Canada', code: 'CA'}, {name: 'CapeVerde', code: 'CV'}, {name: 'CaymanIslands', code: 'KY'}, {name: 'CentralAfricanRepublic', code: 'CF'}, {name: 'Chad', code: 'TD'}, {name: 'Chile', code: 'CL'}, {name: 'China', code: 'CN'}, {name: 'ChristmasIsland', code: 'CX'}, {name: 'Cocos(Keeling)Islands', code: 'CC'}, {name: 'Colombia', code: 'CO'}, {name: 'Comoros', code: 'KM'}, {name: 'Congo', code: 'CG'}, {name: 'Congo,TheDemocraticRepublicofthe', code: 'CD'}, {name: 'CookIslands', code: 'CK'}, {name: 'CostaRica', code: 'CR'}, {name: 'CoteD\'Ivoire', code: 'CI'}, {name: 'Croatia', code: 'HR'}, {name: 'Cuba', code: 'CU'}, {name: 'Cyprus', code: 'CY'}, {name: 'CzechRepublic', code: 'CZ'}, {name: 'Denmark', code: 'DK'}, {name: 'Djibouti', code: 'DJ'}, {name: 'Dominica', code: 'DM'}, {name: 'DominicanRepublic', code: 'DO'}, {name: 'Ecuador', code: 'EC'}, {name: 'Egypt', code: 'EG'}, {name: 'ElSalvador', code: 'SV'}, {name: 'EquatorialGuinea', code: 'GQ'}, {name: 'Eritrea', code: 'ER'}, {name: 'Estonia', code: 'EE'}, {name: 'Ethiopia', code: 'ET'}, {name: 'FalklandIslands(Malvinas)', code: 'FK'}, {name: 'FaroeIslands', code: 'FO'}, {name: 'Fiji', code: 'FJ'}, {name: 'Finland', code: 'FI'}, {name: 'France', code: 'FR'}, {name: 'FrenchGuiana', code: 'GF'}, {name: 'FrenchPolynesia', code: 'PF'}, {name: 'FrenchSouthernTerritories', code: 'TF'}, {name: 'Gabon', code: 'GA'}, {name: 'Gambia', code: 'GM'}, {name: 'Georgia', code: 'GE'}, {name: 'Germany', code: 'DE'}, {name: 'Ghana', code: 'GH'}, {name: 'Gibraltar', code: 'GI'}, {name: 'Greece', code: 'GR'}, {name: 'Greenland', code: 'GL'}, {name: 'Grenada', code: 'GD'}, {name: 'Guadeloupe', code: 'GP'}, {name: 'Guam', code: 'GU'}, {name: 'Guatemala', code: 'GT'}, {name: 'Guernsey', code: 'GG'}, {name: 'Guinea', code: 'GN'}, {name: 'Guinea-Bissau', code: 'GW'}, {name: 'Guyana', code: 'GY'}, {name: 'Haiti', code: 'HT'}, {name: 'HeardIslandandMcdonaldIslands', code: 'HM'}, {name: 'HolySee(VaticanCityState)', code: 'VA'}, {name: 'Honduras', code: 'HN'}, {name: 'HongKong', code: 'HK'}, {name: 'Hungary', code: 'HU'}, {name: 'Iceland', code: 'IS'}, {name: 'India', code: 'IN'}, {name: 'Indonesia', code: 'ID'}, {name: 'Iran,IslamicRepublicOf', code: 'IR'}, {name: 'Iraq', code: 'IQ'}, {name: 'Ireland', code: 'IE'}, {name: 'IsleofMan', code: 'IM'}, {name: 'Israel', code: 'IL'}, {name: 'Italy', code: 'IT'}, {name: 'Jamaica', code: 'JM'}, {name: 'Japan', code: 'JP'}, {name: 'Jersey', code: 'JE'}, {name: 'Jordan', code: 'JO'}, {name: 'Kazakhstan', code: 'KZ'}, {name: 'Kenya', code: 'KE'}, {name: 'Kiribati', code: 'KI'}, {name: 'Korea,DemocraticPeople\'SRepublicof', code: 'KP'}, {name: 'Korea,Republicof', code: 'KR'}, {name: 'Kuwait', code: 'KW'}, {name: 'Kyrgyzstan', code: 'KG'}, {name: 'LaoPeople\'SDemocraticRepublic', code: 'LA'}, {name: 'Latvia', code: 'LV'}, {name: 'Lebanon', code: 'LB'}, {name: 'Lesotho', code: 'LS'}, {name: 'Liberia', code: 'LR'}, {name: 'LibyanArabJamahiriya', code: 'LY'}, {name: 'Liechtenstein', code: 'LI'}, {name: 'Lithuania', code: 'LT'}, {name: 'Luxembourg', code: 'LU'}, {name: 'Macao', code: 'MO'}, {name: 'Macedonia,TheFormerYugoslavRepublicof', code: 'MK'}, {name: 'Madagascar', code: 'MG'}, {name: 'Malawi', code: 'MW'}, {name: 'Malaysia', code: 'MY'}, {name: 'Maldives', code: 'MV'}, {name: 'Mali', code: 'ML'}, {name: 'Malta', code: 'MT'}, {name: 'MarshallIslands', code: 'MH'}, {name: 'Martinique', code: 'MQ'}, {name: 'Mauritania', code: 'MR'}, {name: 'Mauritius', code: 'MU'}, {name: 'Mayotte', code: 'YT'}, {name: 'Mexico', code: 'MX'}, {name: 'Micronesia,FederatedStatesof', code: 'FM'}, {name: 'Moldova,Republicof', code: 'MD'}, {name: 'Monaco', code: 'MC'}, {name: 'Mongolia', code: 'MN'}, {name: 'Montserrat', code: 'MS'}, {name: 'Morocco', code: 'MA'}, {name: 'Mozambique', code: 'MZ'}, {name: 'Myanmar', code: 'MM'}, {name: 'Namibia', code: 'NA'}, {name: 'Nauru', code: 'NR'}, {name: 'Nepal', code: 'NP'}, {name: 'Netherlands', code: 'NL'}, {name: 'NetherlandsAntilles', code: 'AN'}, {name: 'NewCaledonia', code: 'NC'}, {name: 'NewZealand', code: 'NZ'}, {name: 'Nicaragua', code: 'NI'}, {name: 'Niger', code: 'NE'}, {name: 'Nigeria', code: 'NG'}, {name: 'Niue', code: 'NU'}, {name: 'NorfolkIsland', code: 'NF'}, {name: 'NorthernMarianaIslands', code: 'MP'}, {name: 'Norway', code: 'NO'}, {name: 'Oman', code: 'OM'}, {name: 'Pakistan', code: 'PK'}, {name: 'Palau', code: 'PW'}, {name: 'PalestinianTerritory,Occupied', code: 'PS'}, {name: 'Panama', code: 'PA'}, {name: 'PapuaNewGuinea', code: 'PG'}, {name: 'Paraguay', code: 'PY'}, {name: 'Peru', code: 'PE'}, {name: 'Philippines', code: 'PH'}, {name: 'Pitcairn', code: 'PN'}, {name: 'Poland', code: 'PL'}, {name: 'Portugal', code: 'PT'}, {name: 'PuertoRico', code: 'PR'}, {name: 'Qatar', code: 'QA'}, {name: 'Reunion', code: 'RE'}, {name: 'Romania', code: 'RO'}, {name: 'RussianFederation', code: 'RU'}, {name: 'RWANDA', code: 'RW'}, {name: 'SaintHelena', code: 'SH'}, {name: 'SaintKittsandNevis', code: 'KN'}, {name: 'SaintLucia', code: 'LC'}, {name: 'SaintPierreandMiquelon', code: 'PM'}, {name: 'SaintVincentandtheGrenadines', code: 'VC'}, {name: 'Samoa', code: 'WS'}, {name: 'SanMarino', code: 'SM'}, {name: 'SaoTomeandPrincipe', code: 'ST'}, {name: 'SaudiArabia', code: 'SA'}, {name: 'Senegal', code: 'SN'}, {name: 'SerbiaandMontenegro', code: 'CS'}, {name: 'Seychelles', code: 'SC'}, {name: 'SierraLeone', code: 'SL'}, {name: 'Singapore', code: 'SG'}, {name: 'Slovakia', code: 'SK'}, {name: 'Slovenia', code: 'SI'}, {name: 'SolomonIslands', code: 'SB'}, {name: 'Somalia', code: 'SO'}, {name: 'SouthAfrica', code: 'ZA'}, {name: 'SouthGeorgiaandtheSouthSandwichIslands', code: 'GS'}, {name: 'Spain', code: 'ES'}, {name: 'SriLanka', code: 'LK'}, {name: 'Sudan', code: 'SD'}, {name: 'Suriname', code: 'SR'}, {name: 'SvalbardandJanMayen', code: 'SJ'}, {name: 'Swaziland', code: 'SZ'}, {name: 'Sweden', code: 'SE'}, {name: 'Switzerland', code: 'CH'}, {name: 'SyrianArabRepublic', code: 'SY'}, {name: 'Taiwan,ProvinceofChina', code: 'TW'}, {name: 'Tajikistan', code: 'TJ'}, {name: 'Tanzania,UnitedRepublicof', code: 'TZ'}, {name: 'Thailand', code: 'TH'}, {name: 'Timor-Leste', code: 'TL'}, {name: 'Togo', code: 'TG'}, {name: 'Tokelau', code: 'TK'}, {name: 'Tonga', code: 'TO'}, {name: 'TrinidadandTobago', code: 'TT'}, {name: 'Tunisia', code: 'TN'}, {name: 'Turkey', code: 'TR'}, {name: 'Turkmenistan', code: 'TM'}, {name: 'TurksandCaicosIslands', code: 'TC'}, {name: 'Tuvalu', code: 'TV'}, {name: 'Uganda', code: 'UG'}, {name: 'Ukraine', code: 'UA'}, {name: 'UnitedArabEmirates', code: 'AE'}, {name: 'UnitedKingdom', code: 'GB'}, {name: 'UnitedStates', code: 'US'}, {name: 'UnitedStatesMinorOutlyingIslands', code: 'UM'}, {name: 'Uruguay', code: 'UY'}, {name: 'Uzbekistan', code: 'UZ'}, {name: 'Vanuatu', code: 'VU'}, {name: 'Venezuela', code: 'VE'}, {name: 'VietNam', code: 'VN'}, {name: 'VirginIslands,British', code: 'VG'}, {name: 'VirginIslands,U.S.', code: 'VI'}, {name: 'WallisandFutuna', code: 'WF'}, {name: 'WesternSahara', code: 'EH'}, {name: 'Yemen', code: 'YE'}, {name: 'Zambia', code: 'ZM'}, {name: 'Zimbabwe', code: 'ZW'}];
var data;
var chart;
var options = {'title': 'Fotos por pais',
'width': 400,
'height': 300};

var socket = io.connect('https://giussibasso.herokuapp.com');

function suscribe() {
  var tagvalue = $('#tagvalue').val();
  socket.emit('suscribe', {tag: tagvalue});
  $('#tagname').text(tagvalue);
}

function clean() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  marked = {};
  drawChart();
}

function unsuscribe() {
  var url = 'https://api.instagram.com/v1/subscriptions?client_secret=3aaa9a0b25154cf3a3ed8b4745ab82c5&client_id=6e61abb4929b478eb1889f64899ffc1d';
  $.ajax({
    url: url,
    type: 'GET',
    crossDomain: true,
    dataType: 'jsonp'
  }).done(function (data) {
    var suscriptions = {ids: []};
    for (i = 0; i < data.data.length; i++) {
      suscriptions.ids.push({id: (data.data[i].id)});
    }
    $.ajax({url: '/unsuscribe', data: suscriptions}).done(function () {

    });
  });
}

function drawChart() {

  data = new google.visualization.DataTable();
  data.addColumn('string', 'Continente');
  data.addColumn('number', 'Media');
  data.addRows([['Afghanistan', 0], ['�landIslands', 0], ['Albania', 0], ['Algeria', 0], ['AmericanSamoa', 0], ['AndorrA', 0], ['Angola', 0], ['Anguilla', 0], ['Antarctica', 0], ['AntiguaandBarbuda', 0], ['Argentina', 0], ['Armenia', 0], ['Aruba', 0], ['Australia', 0], ['Austria', 0], ['Azerbaijan', 0], ['Bahamas', 0], ['Bahrain', 0], ['Bangladesh', 0], ['Barbados', 0], ['Belarus', 0], ['Belgium', 0], ['Belize', 0], ['Benin', 0], ['Bermuda', 0], ['Bhutan', 0], ['Bolivia', 0], ['BosniaandHerzegovina', 0], ['Botswana', 0], ['BouvetIsland', 0], ['Brazil', 0], ['BritishIndianOceanTerritory', 0], ['BruneiDarussalam', 0], ['Bulgaria', 0], ['BurkinaFaso', 0], ['Burundi', 0], ['Cambodia', 0], ['Cameroon', 0], ['Canada', 0], ['CapeVerde', 0], ['CaymanIslands', 0], ['CentralAfricanRepublic', 0], ['Chad', 0], ['Chile', 0], ['China', 0], ['ChristmasIsland', 0], ['Cocos(Keeling)Islands', 0], ['Colombia', 0], ['Comoros', 0], ['Congo', 0], ['Congo,TheDemocraticRepublicofthe', 0], ['CookIslands', 0], ['CostaRica', 0], ['CoteD\'Ivoire', 0], ['Croatia', 0], ['Cuba', 0], ['Cyprus', 0], ['CzechRepublic', 0], ['Denmark', 0], ['Djibouti', 0], ['Dominica', 0], ['DominicanRepublic', 0], ['Ecuador', 0], ['Egypt', 0], ['ElSalvador', 0], ['EquatorialGuinea', 0], ['Eritrea', 0], ['Estonia', 0], ['Ethiopia', 0], ['FalklandIslands(Malvinas)', 0], ['FaroeIslands', 0], ['Fiji', 0], ['Finland', 0], ['France', 0], ['FrenchGuiana', 0], ['FrenchPolynesia', 0], ['FrenchSouthernTerritories', 0], ['Gabon', 0], ['Gambia', 0], ['Georgia', 0], ['Germany', 0], ['Ghana', 0], ['Gibraltar', 0], ['Greece', 0], ['Greenland', 0], ['Grenada', 0], ['Guadeloupe', 0], ['Guam', 0], ['Guatemala', 0], ['Guernsey', 0], ['Guinea', 0], ['Guinea-Bissau', 0], ['Guyana', 0], ['Haiti', 0], ['HeardIslandandMcdonaldIslands', 0], ['HolySee(VaticanCityState)', 0], ['Honduras', 0], ['HongKong', 0], ['Hungary', 0], ['Iceland', 0], ['India', 0], ['Indonesia', 0], ['Iran,IslamicRepublicOf', 0], ['Iraq', 0], ['Ireland', 0], ['IsleofMan', 0], ['Israel', 0], ['Italy', 0], ['Jamaica', 0], ['Japan', 0], ['Jersey', 0], ['Jordan', 0], ['Kazakhstan', 0], ['Kenya', 0], ['Kiribati', 0], ['Korea,DemocraticPeople\'SRepublicof', 0], ['Korea,Republicof', 0], ['Kuwait', 0], ['Kyrgyzstan', 0], ['LaoPeople\'SDemocraticRepublic', 0], ['Latvia', 0], ['Lebanon', 0], ['Lesotho', 0], ['Liberia', 0], ['LibyanArabJamahiriya', 0], ['Liechtenstein', 0], ['Lithuania', 0], ['Luxembourg', 0], ['Macao', 0], ['Macedonia,TheFormerYugoslavRepublicof', 0], ['Madagascar', 0], ['Malawi', 0], ['Malaysia', 0], ['Maldives', 0], ['Mali', 0], ['Malta', 0], ['MarshallIslands', 0], ['Martinique', 0], ['Mauritania', 0], ['Mauritius', 0], ['Mayotte', 0], ['Mexico', 0], ['Micronesia,FederatedStatesof', 0], ['Moldova,Republicof', 0], ['Monaco', 0], ['Mongolia', 0], ['Montserrat', 0], ['Morocco', 0], ['Mozambique', 0], ['Myanmar', 0], ['Namibia', 0], ['Nauru', 0], ['Nepal', 0], ['Netherlands', 0], ['NetherlandsAntilles', 0], ['NewCaledonia', 0], ['NewZealand', 0], ['Nicaragua', 0], ['Niger', 0], ['Nigeria', 0], ['Niue', 0], ['NorfolkIsland', 0], ['NorthernMarianaIslands', 0], ['Norway', 0], ['Oman', 0], ['Pakistan', 0], ['Palau', 0], ['PalestinianTerritory,Occupied', 0], ['Panama', 0], ['PapuaNewGuinea', 0], ['Paraguay', 0], ['Peru', 0], ['Philippines', 0], ['Pitcairn', 0], ['Poland', 0], ['Portugal', 0], ['PuertoRico', 0], ['Qatar', 0], ['Reunion', 0], ['Romania', 0], ['RussianFederation', 0], ['RWANDA', 0], ['SaintHelena', 0], ['SaintKittsandNevis', 0], ['SaintLucia', 0], ['SaintPierreandMiquelon', 0], ['SaintVincentandtheGrenadines', 0], ['Samoa', 0], ['SanMarino', 0], ['SaoTomeandPrincipe', 0], ['SaudiArabia', 0], ['Senegal', 0], ['SerbiaandMontenegro', 0], ['Seychelles', 0], ['SierraLeone', 0], ['Singapore', 0], ['Slovakia', 0], ['Slovenia', 0], ['SolomonIslands', 0], ['Somalia', 0], ['SouthAfrica', 0], ['SouthGeorgiaandtheSouthSandwichIslands', 0], ['Spain', 0], ['SriLanka', 0], ['Sudan', 0], ['Suriname', 0], ['SvalbardandJanMayen', 0], ['Swaziland', 0], ['Sweden', 0], ['Switzerland', 0], ['SyrianArabRepublic', 0], ['Taiwan,ProvinceofChina', 0], ['Tajikistan', 0], ['Tanzania,UnitedRepublicof', 0], ['Thailand', 0], ['Timor-Leste', 0], ['Togo', 0], ['Tokelau', 0], ['Tonga', 0], ['TrinidadandTobago', 0], ['Tunisia', 0], ['Turkey', 0], ['Turkmenistan', 0], ['TurksandCaicosIslands', 0], ['Tuvalu', 0], ['Uganda', 0], ['Ukraine', 0], ['UnitedArabEmirates', 0], ['UnitedKingdom', 0], ['UnitedStates', 0], ['UnitedStatesMinorOutlyingIslands', 0], ['Uruguay', 0], ['Uzbekistan', 0], ['Vanuatu', 0], ['Venezuela', 0], ['VietNam', 0], ['VirginIslands,British', 0], ['VirginIslands,U.S.', 0], ['WallisandFutuna', 0], ['WesternSahara', 0], ['Yemen', 0], ['Zambia', 0], ['ZimbabweZW', 0]]);
  chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

(function () {

  google.load('visualization', '1.0', {'packages': ['corechart']});

  google.setOnLoadCallback(drawChart);




  function drawChart() {

    data = new google.visualization.DataTable();
    data.addColumn('string', 'Pais');
    data.addColumn('number', 'Media');
    data.addRows([['Afghanistan', 0], ['�landIslands', 0], ['Albania', 0], ['Algeria', 0], ['AmericanSamoa', 0], ['AndorrA', 0], ['Angola', 0], ['Anguilla', 0], ['Antarctica', 0], ['AntiguaandBarbuda', 0], ['Argentina', 0], ['Armenia', 0], ['Aruba', 0], ['Australia', 0], ['Austria', 0], ['Azerbaijan', 0], ['Bahamas', 0], ['Bahrain', 0], ['Bangladesh', 0], ['Barbados', 0], ['Belarus', 0], ['Belgium', 0], ['Belize', 0], ['Benin', 0], ['Bermuda', 0], ['Bhutan', 0], ['Bolivia', 0], ['BosniaandHerzegovina', 0], ['Botswana', 0], ['BouvetIsland', 0], ['Brazil', 0], ['BritishIndianOceanTerritory', 0], ['BruneiDarussalam', 0], ['Bulgaria', 0], ['BurkinaFaso', 0], ['Burundi', 0], ['Cambodia', 0], ['Cameroon', 0], ['Canada', 0], ['CapeVerde', 0], ['CaymanIslands', 0], ['CentralAfricanRepublic', 0], ['Chad', 0], ['Chile', 0], ['China', 0], ['ChristmasIsland', 0], ['Cocos(Keeling)Islands', 0], ['Colombia', 0], ['Comoros', 0], ['Congo', 0], ['Congo,TheDemocraticRepublicofthe', 0], ['CookIslands', 0], ['CostaRica', 0], ['CoteD\'Ivoire', 0], ['Croatia', 0], ['Cuba', 0], ['Cyprus', 0], ['CzechRepublic', 0], ['Denmark', 0], ['Djibouti', 0], ['Dominica', 0], ['DominicanRepublic', 0], ['Ecuador', 0], ['Egypt', 0], ['ElSalvador', 0], ['EquatorialGuinea', 0], ['Eritrea', 0], ['Estonia', 0], ['Ethiopia', 0], ['FalklandIslands(Malvinas)', 0], ['FaroeIslands', 0], ['Fiji', 0], ['Finland', 0], ['France', 0], ['FrenchGuiana', 0], ['FrenchPolynesia', 0], ['FrenchSouthernTerritories', 0], ['Gabon', 0], ['Gambia', 0], ['Georgia', 0], ['Germany', 0], ['Ghana', 0], ['Gibraltar', 0], ['Greece', 0], ['Greenland', 0], ['Grenada', 0], ['Guadeloupe', 0], ['Guam', 0], ['Guatemala', 0], ['Guernsey', 0], ['Guinea', 0], ['Guinea-Bissau', 0], ['Guyana', 0], ['Haiti', 0], ['HeardIslandandMcdonaldIslands', 0], ['HolySee(VaticanCityState)', 0], ['Honduras', 0], ['HongKong', 0], ['Hungary', 0], ['Iceland', 0], ['India', 0], ['Indonesia', 0], ['Iran,IslamicRepublicOf', 0], ['Iraq', 0], ['Ireland', 0], ['IsleofMan', 0], ['Israel', 0], ['Italy', 0], ['Jamaica', 0], ['Japan', 0], ['Jersey', 0], ['Jordan', 0], ['Kazakhstan', 0], ['Kenya', 0], ['Kiribati', 0], ['Korea,DemocraticPeople\'SRepublicof', 0], ['Korea,Republicof', 0], ['Kuwait', 0], ['Kyrgyzstan', 0], ['LaoPeople\'SDemocraticRepublic', 0], ['Latvia', 0], ['Lebanon', 0], ['Lesotho', 0], ['Liberia', 0], ['LibyanArabJamahiriya', 0], ['Liechtenstein', 0], ['Lithuania', 0], ['Luxembourg', 0], ['Macao', 0], ['Macedonia,TheFormerYugoslavRepublicof', 0], ['Madagascar', 0], ['Malawi', 0], ['Malaysia', 0], ['Maldives', 0], ['Mali', 0], ['Malta', 0], ['MarshallIslands', 0], ['Martinique', 0], ['Mauritania', 0], ['Mauritius', 0], ['Mayotte', 0], ['Mexico', 0], ['Micronesia,FederatedStatesof', 0], ['Moldova,Republicof', 0], ['Monaco', 0], ['Mongolia', 0], ['Montserrat', 0], ['Morocco', 0], ['Mozambique', 0], ['Myanmar', 0], ['Namibia', 0], ['Nauru', 0], ['Nepal', 0], ['Netherlands', 0], ['NetherlandsAntilles', 0], ['NewCaledonia', 0], ['NewZealand', 0], ['Nicaragua', 0], ['Niger', 0], ['Nigeria', 0], ['Niue', 0], ['NorfolkIsland', 0], ['NorthernMarianaIslands', 0], ['Norway', 0], ['Oman', 0], ['Pakistan', 0], ['Palau', 0], ['PalestinianTerritory,Occupied', 0], ['Panama', 0], ['PapuaNewGuinea', 0], ['Paraguay', 0], ['Peru', 0], ['Philippines', 0], ['Pitcairn', 0], ['Poland', 0], ['Portugal', 0], ['PuertoRico', 0], ['Qatar', 0], ['Reunion', 0], ['Romania', 0], ['RussianFederation', 0], ['RWANDA', 0], ['SaintHelena', 0], ['SaintKittsandNevis', 0], ['SaintLucia', 0], ['SaintPierreandMiquelon', 0], ['SaintVincentandtheGrenadines', 0], ['Samoa', 0], ['SanMarino', 0], ['SaoTomeandPrincipe', 0], ['SaudiArabia', 0], ['Senegal', 0], ['SerbiaandMontenegro', 0], ['Seychelles', 0], ['SierraLeone', 0], ['Singapore', 0], ['Slovakia', 0], ['Slovenia', 0], ['SolomonIslands', 0], ['Somalia', 0], ['SouthAfrica', 0], ['SouthGeorgiaandtheSouthSandwichIslands', 0], ['Spain', 0], ['SriLanka', 0], ['Sudan', 0], ['Suriname', 0], ['SvalbardandJanMayen', 0], ['Swaziland', 0], ['Sweden', 0], ['Switzerland', 0], ['SyrianArabRepublic', 0], ['Taiwan,ProvinceofChina', 0], ['Tajikistan', 0], ['Tanzania,UnitedRepublicof', 0], ['Thailand', 0], ['Timor-Leste', 0], ['Togo', 0], ['Tokelau', 0], ['Tonga', 0], ['TrinidadandTobago', 0], ['Tunisia', 0], ['Turkey', 0], ['Turkmenistan', 0], ['TurksandCaicosIslands', 0], ['Tuvalu', 0], ['Uganda', 0], ['Ukraine', 0], ['UnitedArabEmirates', 0], ['UnitedKingdom', 0], ['UnitedStates', 0], ['UnitedStatesMinorOutlyingIslands', 0], ['Uruguay', 0], ['Uzbekistan', 0], ['Vanuatu', 0], ['Venezuela', 0], ['VietNam', 0], ['VirginIslands,British', 0], ['VirginIslands,U.S.', 0], ['WallisandFutuna', 0], ['WesternSahara', 0], ['Yemen', 0], ['Zambia', 0], ['ZimbabweZW', 0]]);
    chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  function getCode(geodata) {
    for (var i = 0; i < geodata.results.length; i++) {
      var result = geodata.results[i];
      for (var i = 0; i < result.address_components.length; i++) {
        var address = result.address_components[i];
        if (address.types[0] == "country" || address.types[1] == "country") {
          return address.short_name;
        }
      }
    }
  }

  function getCountry(lat, lng) {
    $.ajax({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&sensor=false',
      crossDomain: true
    }).done(function (geo) {
      var code = getCode(geo);
      if (code) {
        var index = getCountryIndex(code);
        if (index > -1 && index < 243) {
          console.log("Codigo:" + code + " Index: " + index + " Fotos: " + data.getValue(index, 1));
          data.setValue(index, 1, data.getValue(index, 1) + 1);
          chart.draw(data, options);
        }
      }

    });
  }

  function getCountryIndex(code) {
    for (var i = 0; i < countries.length; i++) {
      if (countries[i].code == code) {
        return i;
      }
    }
  }





  /**
  * [Namespacing]
  */
  var Insta = Insta || {};

  Insta.Map = {
    init: function () {
      var myLatlng = new google.maps.LatLng(17, 0);
      var mapOptions = {
        zoom: 3,
        center: myLatlng
      };

      map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    }

  };

  Insta.App = {
    /**
    * [Application initialization method / call for the methods being initializated in order]
    */
    init: function () {
      socket.on('firstShow', function (data) {
        console.log("first show");
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
        drawChart();
      });
      socket.on('unsuscribed', function (data) {
        console.log(data);
      });
      this.getData();
    },
    /**
    * [get data ajax and send to render method]
    */
    getData: function () {
      var self = this;
      socket.on('show', function (data) {
        var url = data.show;
        console.log("Voy a buscar localizacion de: " + url);
        $.ajax({
          url: url,
          type: 'POST',
          crossDomain: true,
          dataType: 'jsonp'
        }).done(function (data) {
          self.renderTemplate(data);
        });
      });
    },
    renderTemplate: function (data) {

      var myLatLng, marker;
      console.log(data);
      jQuery.each(data.data, function (i, val) {

        if (val.location !== null) {
          var latlang = val.location.latitude + "," + val.location.longitude;
          if (marked[latlang] === undefined) {
            marked[latlang] = true;
            console.log("Pongo un marcador en: " + val.location.latitude + "," + val.location.longitude);

            myLatLng = new google.maps.LatLng(val.location.latitude, val.location.longitude);
            marker = new google.maps.Marker({
              position: myLatLng
            });
            marker.setMap(map)
            markers.push(marker);
            getCountry(val.location.latitude, val.location.longitude);
          }
        }
        ;
      });

    },
  };

  Insta.Map.init();
  Insta.App.init();

})(this);
