var a = ['', 'нэг ', 'хоёр ', 'гурав ', 'дөрөв ', 'тав ', 'зургаа ', 'долоо ', 'найм ', 'ес ', 'арав ', 'арван нэг ', 'арван хоёр ', 'арван гурав ', 'арван дөрөв ', 'арван долоо', 'арван зургаа ', 'арван долоо ', 'арван найм ', 'арван ес '];
var b = ['', 'арван', 'хорин', 'гучин', 'дөчин', 'тавин', 'жаран', 'далан', 'наян', 'ерэн'];

module.exports =  function inWords(string) {
    var numbers = string.split(".");
    var str = '';
    str += toWord(numbers[0]);
    if (numbers[1] && numbers[1].length > 0) {
        switch (numbers[1].length) {
            case 1:
                str += 'аравны ';
                break;
            case 2:
                str += 'зууны ';
                break;
            case 3:
                str += 'мянганы ';
                break;
            case 4:
                str += 'арав мянганы ';
                break;
            case 5:
                str += 'зуун мянганы ';
                break;
            case 6:
                str += 'саяны ';
                break;
            case 7:
                str += 'арав саяны ';
                break;
            case 8:
                str += 'зуун саяны ';
                break;
            case 9:
                str += 'тэрбумны ';
                break;
            case 10:
                str += 'арав тэрбумны ';
                break;
            case 11:
                str += 'зуун тэрбумны ';
                break;
            case 12:
                str += 'их наядны ';
                break;
            default:
                str += ' ';
        }
        str += toWord(numbers[1]);
    } else if (numbers[1] && numbers[1].length < 12) {
        str += 'Мэдэхгүйнээ';
    }
    return str;
}

function toWord(num) {
    if ((num = num.toString()).length > 15) return 'Мэдэхгүйнээ';
    n = ('000000000000000' + num).substr(-15).match(/^(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'зуун ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'их наяд ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'зуун ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'тэрбум ' : '';
    str += (n[5] != 0) ? (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'зуун сая ' : '';
    str += (n[6] != 0) ? (a[Number(n[6])] || b[n[6][0]] + ' ' + a[n[6][1]]) + 'сая ' : '';
    str += (n[7] != 0) ? (a[Number(n[7])] || b[n[7][0]] + ' ' + a[n[7][1]]) + 'зуун ' : '';
    str += (n[8] != 0) ? (a[Number(n[8])] || b[n[8][0]] + ' ' + a[n[8][1]]) + 'мянга ' : '';
    str += (n[9] != 0) ? (a[Number(n[9])] || b[n[9][0]] + ' ' + a[n[9][1]]) + 'зуун ' : '';
    str += (n[10] != 0) ? ((str != '') ? ' ' : '') + (a[Number(n[10])] || b[n[10][0]] + ' ' + a[n[10][1]]) + '' : '';
    return str;
}