/* Javascript 샘플 코드 */


var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '='+'서비스키'; /*Service Key*/
queryParams += '&' + encodeURIComponent('solYear') + '=' + encodeURIComponent('2015'); /**/
queryParams += '&' + encodeURIComponent('solMonth') + '=' + encodeURIComponent('09'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+'nHeaders: '+JSON.stringify(this.getAllResponseHeaders())+'nBody: '+this.responseText);
    }
};

xhr.send('');