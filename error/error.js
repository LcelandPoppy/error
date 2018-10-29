//将页面上的javascript错误获取到并打印到页面上的方法如下，
//当然也可以利用这个方法把页面上的错误记录到日志里面去

//Window.onerror
window.onerror = function(sMessage,sUrl,sLine){};
//onerror函数的三个参数用于确定错误确切的信息，
//代表的意思依次为：错误信息；发生错误的文件；发生错误的行号。
示例：
<SCRIPT>
window.onerror=fnErrorTrap;
function fnErrorTrap(sMsg,sUrl,sLine){
	oErrorLog.innerHTML="<b>An error was thrown and caught.</b><p>";
	oErrorLog.innerHTML+="Error: " + sMsg + "<br>";oErrorLog.innerHTML+="Line: " + sLine + "<br>";
	oErrorLog.innerHTML+="URL: " + sUrl + "<br>";return false;
}
function fnThrow(){
	eval(oErrorCode.value);
}
</SCRIPT>
<INPUT TYPE="text" ID=oErrorCode VALUE="someObject.someProperty=true;">
<INPUT TYPE="button" VALUE="Throw Error" onclick="fnThrow()"><P><DIV ID="oErrorLog"></DIV>

$(document).ajaxError
$(document).ajaxError(function(event, xhr, settings, exception) { 
	if (xhr.status == 401) {    
		window.location = "login.html";   
		return;   
	}  
	alert("<li>Error requesting uri: " + settings.url + "<br/>" + xhr.responseText + "</li>");
});

//参数说明
//function(event,xhr,options,exc)

//描述


//必需。规定当请求失败时运行的函数。
//
//额外的参数：
//1.event - 包含 event 对象
//2.xhr - 包含 XMLHttpRequest 对象
//3.options - 包含 AJAX请求中使用的选项
//4.exc - 包含 JavaScript exception
//--------------------- 
//作者：alexxiyang 
//来源：CSDN 
//原文：https://blog.csdn.net/nsrainbow/article/details/41043863 