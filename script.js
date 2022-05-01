// let input = document.getElementsByTagName('input');
// let convertButton = document.querySelector('button');
// let selection = document.getElementsByTagName('select');

// convertButton.addEventListener('click', function() {
// 	if (input[0].value == '')
// 		return alert('Unesite vrednost!');

// 	switch (selection[0].selectedIndex) {
// 		case 0: { // km
// 			switch (selection[1].options[selection[1].selectedIndex].value) {
// 				case 'Kilometri': {
// 					input[1].value = input[0].value;
// 					break;
// 				}

// 				case 'Metri': {
// 					input[1].value = input[0].value * 1000;
// 					break;
// 				}

// 				case 'Centimetri': {
// 					input[1].value = input[0].value * 100000;
// 					break;
// 				}

// 				case 'Milimetri': {
// 					input[1].value = input[0].value * 1000000;
// 					break;
// 				}

// 				case 'Mikrometri': {
// 					input[1].value = input[0].value * 1000000000;
// 					break;
// 				}

// 				case 'Nanometri': {
// 					input[1].value = input[0].value * 1000000000000;
// 					break;
// 				}

// 				case 'Milje': {
// 					input[1].value = input[0].value / 1.609;
// 					break;
// 				}

// 				case 'Inci': {
// 					input[1].value = input[0].value * 39370;
// 					break;
// 				}
// 			}

// 			break;
// 		}

// 		case 1: { // m
// 			switch (selection[1].options[selection[1].selectedIndex].value) {
// 				case 'Kilometri': {
// 					input[1].value = input[0].value / 1000;
// 					break;
// 				}

// 				case 'Metri': {
// 					input[1].value = input[0].value;
// 					break;
// 				}

// 				case 'Centimetri': {
// 					input[1].value = input[0].value * 100;
// 					break;
// 				}

// 				case 'Milimetri': {
// 					input[1].value = input[0].value * 1000;
// 					break;
// 				}

// 				case 'Mikrometri': {
// 					input[1].value = input[0].value * 1000000;
// 					break;
// 				}

// 				case 'Nanometri': {
// 					input[1].value = input[0].value * 1000000000;
// 					break;
// 				}

// 				case 'Milje': {
// 					input[1].value = input[0].value / 1609;
// 					break;
// 				}

// 				case 'Inci': {
// 					input[1].value = input[0].value * 39.37;
// 					break;
// 				}
// 			}

// 			break;
// 		}

// 		case 2: { // cm
// 			switch (selection[1].options[selection[1].selectedIndex].value) {
// 				case 'Kilometri': {
// 					input[1].value = input[0].value / 100000;
// 					break;
// 				}

// 				case 'Metri': {
// 					input[1].value = input[0].value / 100;
// 					break;
// 				}

// 				case 'Centimetri': {
// 					input[1].value = input[0].value;
// 					break;
// 				}

// 				case 'Milimetri': {
// 					input[1].value = input[0].value * 10;
// 					break;
// 				}

// 				case 'Mikrometri': {
// 					input[1].value = input[0].value * 10000;
// 					break;
// 				}

// 				case 'Nanometri': {
// 					input[1].value = input[0].value * 10000000;
// 					break;
// 				}

// 				case 'Milje': {
// 					input[1].value = input[0].value / 160934;
// 					break;
// 				}

// 				case 'Inci': {
// 					input[1].value = input[0].value / 2.54;
// 					break;
// 				}
// 			}

// 			break;
// 		}

// 		case 3: { // mm
// 			switch (selection[1].options[selection[1].selectedIndex].value) {
// 				case 'Kilometri': {
// 					input[1].value = input[0].value / 1000000;
// 					break;
// 				}

// 				case 'Metri': {
// 					input[1].value = input[0].value / 1000;
// 					break;
// 				}

// 				case 'Centimetri': {
// 					input[1].value = input[0].value / 10;
// 					break;
// 				}

// 				case 'Milimetri': {
// 					input[1].value = input[0].value;
// 					break;
// 				}

// 				case 'Mikrometri': {
// 					input[1].value = input[0].value * 1000;
// 					break;
// 				}

// 				case 'Nanometri': {
// 					input[1].value = input[0].value * 1000000;
// 					break;
// 				}

// 				case 'Milje': {
// 					input[1].value = input[0].value / 1609000;
// 					break;
// 				}

// 				case 'Inci': {
// 					input[1].value = input[0].value / 25.4;
// 					break;
// 				}
// 			}

// 			break;
// 		}

// 		case 4: { // micro m
// 			switch (selection[1].options[selection[1].selectedIndex].value) {
// 				case 'Kilometri': {
// 					input[1].value = input[0].value / 1000000000;
// 					break;
// 				}

// 				case 'Metri': {
// 					input[1].value = input[0].value / 0.000001;
// 					break;
// 				}

// 				case 'Centimetri': {
// 					input[1].value = input[0].value / 10000;
// 					break;
// 				}

// 				case 'Milimetri': {
// 					input[1].value = input[0].value / 1000;
// 					break;
// 				}

// 				case 'Mikrometri': {
// 					input[1].value = input[0].value;
// 					break;
// 				}

// 				case 'Nanometri': {
// 					input[1].value = input[0].value * 1000;
// 					break;
// 				}

// 				case 'Milje': {
// 					input[1].value = input[0].value / 1609000000;
// 					break;
// 				}

// 				case 'Inci': {
// 					input[1].value = input[0].value / 25400;
// 					break;
// 				}
// 			}

// 			break;
// 		}

// 		case 5: { // nm
// 			switch (selection[1].options[selection[1].selectedIndex].value) {
// 				case 'Kilometri': {
// 					input[1].value = input[0].value / 1e+12;
// 					break;
// 				}

// 				case 'Metri': {
// 					input[1].value = input[0].value / 1e+9;
// 					break;
// 				}

// 				case 'Centimetri': {
// 					input[1].value = input[0].value / 1e+7;
// 					break;
// 				}

// 				case 'Milimetri': {
// 					input[1].value = input[0].value / 1e+6;
// 					break;
// 				}

// 				case 'Mikrometri': {
// 					input[1].value = input[0].value / 1000;
// 					break;
// 				}

// 				case 'Nanometri': {
// 					input[1].value = input[0].value;
// 					break;
// 				}

// 				case 'Milje': {
// 					input[1].value = input[0].value / 1.609e+12;
// 					break;
// 				}

// 				case 'Inci': {
// 					input[1].value = input[0].value / 2.54e+7;
// 					break;
// 				}
// 			}

// 			break;
// 		}

// 		case 6: { // miles
// 			switch (selection[1].options[selection[1].selectedIndex].value) {
// 				case 'Kilometri': {
// 					input[1].value = input[0].value * 1.609;
// 					break;
// 				}

// 				case 'Metri': {
// 					input[1].value = input[0].value * 1609;
// 					break;
// 				}

// 				case 'Centimetri': {
// 					input[1].value = input[0].value * 160934;
// 					break;
// 				}

// 				case 'Milimetri': {
// 					input[1].value = input[0].value * 1.609e+6;
// 					break;
// 				}

// 				case 'Mikrometri': {
// 					input[1].value = input[0].value * 1.609e+9;
// 					break;
// 				}

// 				case 'Nanometri': {
// 					input[1].value = input[0].value * 1/609e+12;
// 					break;
// 				}

// 				case 'Milje': {
// 					input[1].value = input[0].value;
// 					break;
// 				}

// 				case 'Inci': {
// 					input[1].value = input[0].value * 63360;
// 					break;
// 				}
// 			}

// 			break;
// 		}

// 		case 7: { // inches
// 			switch (selection[1].options[selection[1].selectedIndex].value) {
// 				case 'Kilometri': {
// 					input[1].value = input[0].value / 39370;
// 					break;
// 				}

// 				case 'Metri': {
// 					input[1].value = input[0].value / 39.37;
// 					break;
// 				}

// 				case 'Centimetri': {
// 					input[1].value = input[0].value * 2.54;
// 					break;
// 				}

// 				case 'Milimetri': {
// 					input[1].value = input[0].value * 25.4;
// 					break;
// 				}

// 				case 'Mikrometri': {
// 					input[1].value = input[0].value * 25400;
// 					break;
// 				}

// 				case 'Nanometri': {
// 					input[1].value = input[0].value * 2.54e+7;
// 					break;
// 				}

// 				case 'Milje': {
// 					input[1].value = input[0].value / 63360;
// 					break;
// 				}

// 				case 'Inci': {
// 					input[1].value = input[0].value;
// 					break;
// 				}
// 			}

// 			break;
// 		}
// 	}
// });

const _0x11491b=_0x408c;(function(_0x174157,_0x3fafa3){const _0xa840cb=_0x408c,_0x1f01c4=_0x174157();while(!![]){try{const _0x530a18=parseInt(_0xa840cb(0x197))/0x1*(parseInt(_0xa840cb(0x19d))/0x2)+-parseInt(_0xa840cb(0x191))/0x3*(parseInt(_0xa840cb(0x1a3))/0x4)+parseInt(_0xa840cb(0x19a))/0x5*(-parseInt(_0xa840cb(0x195))/0x6)+-parseInt(_0xa840cb(0x193))/0x7*(-parseInt(_0xa840cb(0x198))/0x8)+parseInt(_0xa840cb(0x19f))/0x9+parseInt(_0xa840cb(0x1a1))/0xa*(parseInt(_0xa840cb(0x1a5))/0xb)+-parseInt(_0xa840cb(0x1a6))/0xc*(parseInt(_0xa840cb(0x18d))/0xd);if(_0x530a18===_0x3fafa3)break;else _0x1f01c4['push'](_0x1f01c4['shift']());}catch(_0x46b4a3){_0x1f01c4['push'](_0x1f01c4['shift']());}}}(_0x33f3,0x23395));function _0x408c(_0xe05683,_0x22d50f){const _0x33f306=_0x33f3();return _0x408c=function(_0x408c1b,_0x4b6951){_0x408c1b=_0x408c1b-0x18b;let _0x5c163c=_0x33f306[_0x408c1b];return _0x5c163c;},_0x408c(_0xe05683,_0x22d50f);}let input=document[_0x11491b(0x1a4)]('input'),convertButton=document['querySelector']('button'),selection=document[_0x11491b(0x1a4)](_0x11491b(0x194));function _0x33f3(){const _0x12798f=['Mikrometri','Milimetri','Centimetri','3iRwKsk','selectedIndex','7fStmsn','select','354gAqUBY','value','688CdpXqt','2058856RYHPKl','Kilometri','21015kNoSaB','options','Nanometri','154ajoGzN','Inci','999477XGQhot','Metri','4150YmqDMv','addEventListener','117464EvusTz','getElementsByTagName','2123tQZTQJ','12BMClgc','Milje','Unesite\x20vrednost!','1038193pxzALW'];_0x33f3=function(){return _0x12798f;};return _0x33f3();}convertButton[_0x11491b(0x1a2)]('click',function(){const _0x391c37=_0x11491b;if(input[0x0][_0x391c37(0x196)]=='')return alert(_0x391c37(0x18c));switch(selection[0x0][_0x391c37(0x192)]){case 0x0:{switch(selection[0x1][_0x391c37(0x19b)][selection[0x1][_0x391c37(0x192)]][_0x391c37(0x196)]){case _0x391c37(0x199):{input[0x1]['value']=input[0x0]['value'];break;}case'Metri':{input[0x1][_0x391c37(0x196)]=input[0x0]['value']*0x3e8;break;}case'Centimetri':{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0x186a0;break;}case'Milimetri':{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0xf4240;break;}case _0x391c37(0x18e):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0x3b9aca00;break;}case _0x391c37(0x19c):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0xe8d4a51000;break;}case _0x391c37(0x18b):{input[0x1][_0x391c37(0x196)]=input[0x0]['value']/1.609;break;}case _0x391c37(0x19e):{input[0x1]['value']=input[0x0][_0x391c37(0x196)]*0x99ca;break;}}break;}case 0x1:{switch(selection[0x1][_0x391c37(0x19b)][selection[0x1][_0x391c37(0x192)]][_0x391c37(0x196)]){case'Kilometri':{input[0x1]['value']=input[0x0][_0x391c37(0x196)]/0x3e8;break;}case _0x391c37(0x1a0):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)];break;}case _0x391c37(0x190):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0x64;break;}case'Milimetri':{input[0x1]['value']=input[0x0][_0x391c37(0x196)]*0x3e8;break;}case _0x391c37(0x18e):{input[0x1][_0x391c37(0x196)]=input[0x0]['value']*0xf4240;break;}case _0x391c37(0x19c):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0x3b9aca00;break;}case _0x391c37(0x18b):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0x649;break;}case _0x391c37(0x19e):{input[0x1][_0x391c37(0x196)]=input[0x0]['value']*39.37;break;}}break;}case 0x2:{switch(selection[0x1][_0x391c37(0x19b)][selection[0x1][_0x391c37(0x192)]][_0x391c37(0x196)]){case _0x391c37(0x199):{input[0x1][_0x391c37(0x196)]=input[0x0]['value']/0x186a0;break;}case _0x391c37(0x1a0):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0x64;break;}case _0x391c37(0x190):{input[0x1]['value']=input[0x0][_0x391c37(0x196)];break;}case'Milimetri':{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0xa;break;}case _0x391c37(0x18e):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0x2710;break;}case'Nanometri':{input[0x1]['value']=input[0x0]['value']*0x989680;break;}case'Milje':{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0x274a6;break;}case'Inci':{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/2.54;break;}}break;}case 0x3:{switch(selection[0x1][_0x391c37(0x19b)][selection[0x1]['selectedIndex']][_0x391c37(0x196)]){case _0x391c37(0x199):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0xf4240;break;}case _0x391c37(0x1a0):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0x3e8;break;}case'Centimetri':{input[0x1]['value']=input[0x0][_0x391c37(0x196)]/0xa;break;}case'Milimetri':{input[0x1]['value']=input[0x0][_0x391c37(0x196)];break;}case _0x391c37(0x18e):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0x3e8;break;}case'Nanometri':{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0xf4240;break;}case'Milje':{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0x188d28;break;}case _0x391c37(0x19e):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/25.4;break;}}break;}case 0x4:{switch(selection[0x1][_0x391c37(0x19b)][selection[0x1]['selectedIndex']]['value']){case'Kilometri':{input[0x1][_0x391c37(0x196)]=input[0x0]['value']/0x3b9aca00;break;}case _0x391c37(0x1a0):{input[0x1]['value']=input[0x0][_0x391c37(0x196)]/0.000001;break;}case'Centimetri':{input[0x1]['value']=input[0x0][_0x391c37(0x196)]/0x2710;break;}case _0x391c37(0x18f):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0x3e8;break;}case _0x391c37(0x18e):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)];break;}case _0x391c37(0x19c):{input[0x1]['value']=input[0x0][_0x391c37(0x196)]*0x3e8;break;}case'Milje':{input[0x1]['value']=input[0x0]['value']/0x5fe76440;break;}case _0x391c37(0x19e):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0x6338;break;}}break;}case 0x5:{switch(selection[0x1][_0x391c37(0x19b)][selection[0x1][_0x391c37(0x192)]]['value']){case _0x391c37(0x199):{input[0x1]['value']=input[0x0][_0x391c37(0x196)]/0xe8d4a51000;break;}case _0x391c37(0x1a0):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0x3b9aca00;break;}case _0x391c37(0x190):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0x989680;break;}case _0x391c37(0x18f):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0xf4240;break;}case _0x391c37(0x18e):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0x3e8;break;}case'Nanometri':{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)];break;}case _0x391c37(0x18b):{input[0x1]['value']=input[0x0][_0x391c37(0x196)]/0x1769fdf9a00;break;}case _0x391c37(0x19e):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/0x18392c0;break;}}break;}case 0x6:{switch(selection[0x1][_0x391c37(0x19b)][selection[0x1][_0x391c37(0x192)]][_0x391c37(0x196)]){case'Kilometri':{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*1.609;break;}case _0x391c37(0x1a0):{input[0x1]['value']=input[0x0]['value']*0x649;break;}case _0x391c37(0x190):{input[0x1]['value']=input[0x0][_0x391c37(0x196)]*0x274a6;break;}case _0x391c37(0x18f):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0x188d28;break;}case _0x391c37(0x18e):{input[0x1][_0x391c37(0x196)]=input[0x0]['value']*0x5fe76440;break;}case _0x391c37(0x19c):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0x1/0x229e1dcab1000;break;}case _0x391c37(0x18b):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)];break;}case _0x391c37(0x19e):{input[0x1]['value']=input[0x0]['value']*0xf780;break;}}break;}case 0x7:{switch(selection[0x1][_0x391c37(0x19b)][selection[0x1][_0x391c37(0x192)]]['value']){case'Kilometri':{input[0x1][_0x391c37(0x196)]=input[0x0]['value']/0x99ca;break;}case'Metri':{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]/39.37;break;}case'Centimetri':{input[0x1][_0x391c37(0x196)]=input[0x0]['value']*2.54;break;}case _0x391c37(0x18f):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*25.4;break;}case'Mikrometri':{input[0x1][_0x391c37(0x196)]=input[0x0]['value']*0x6338;break;}case _0x391c37(0x19c):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)]*0x18392c0;break;}case _0x391c37(0x18b):{input[0x1]['value']=input[0x0][_0x391c37(0x196)]/0xf780;break;}case _0x391c37(0x19e):{input[0x1][_0x391c37(0x196)]=input[0x0][_0x391c37(0x196)];break;}}break;}}});