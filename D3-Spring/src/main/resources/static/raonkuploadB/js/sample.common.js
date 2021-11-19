//////////////////////////////////////////////////////////////////////////////////////////////////
// K Upload API
//////////////////////////////////////////////////////////////////////////////////////////////////

// 전송시작

function fn_transfer(currUploadID) {
	if (currUploadID) {
		RAONKUPLOAD.Transfer(currUploadID);
	} else {
		RAONKUPLOAD.Transfer(G_UploadID);
	}
}

// 파일추가 
function fn_openFileDialog(currUploadID) {
	if (currUploadID) {
		RAONKUPLOAD.OpenFileDialog(currUploadID);
	} else {
		RAONKUPLOAD.OpenFileDialog(G_UploadID);
	}
}

// 모든 파일삭제
function fn_deleteAllFile(currUploadID) {
	if (currUploadID) {
		RAONKUPLOAD.DeleteAllFile(currUploadID);
	} else {
		RAONKUPLOAD.DeleteAllFile(G_UploadID);
	}
}

// 선택한 파일삭제
function fn_deleteSelectedFile(currUploadID) {
	if (currUploadID) {
		RAONKUPLOAD.DeleteSelectedFile(currUploadID);
	} else {
		RAONKUPLOAD.DeleteSelectedFile(G_UploadID);
	}
}

// 선택한 파일 다운로드
function fn_downloadFile(currUploadID) {
	if (currUploadID) {
		RAONKUPLOAD.DownloadFile(currUploadID);
	} else {
		RAONKUPLOAD.DownloadFile(G_UploadID);
	}
}

// 모든파일 다운로드
function fn_downloadAllFile(currUploadID) {
	if (currUploadID) {
		RAONKUPLOAD.DownloadAllFile(currUploadID);
	} else {
		RAONKUPLOAD.DownloadAllFile(G_UploadID);
	}
}

// 전체 파일개수
function fn_getTotalFileCount(currUploadID) {
	if (currUploadID) {
		alert(RAONKUPLOAD.GetTotalFileCount(currUploadID));
	} else {
		alert(RAONKUPLOAD.GetTotalFileCount(G_UploadID));
	}
}

// 전체 파일크기(Bytes)
function fn_getTotalFileSize(currUploadID) {
	if (currUploadID) {
		alert(RAONKUPLOAD.GetTotalFileSize(currUploadID));
	} else {
		alert(RAONKUPLOAD.GetTotalFileSize(G_UploadID));
	}
}

// 업로드 모드 변경
function fn_setUploadMode(mode, currUploadID) {
	// mode : edit / view / open / download
	if (currUploadID) {
		RAONKUPLOAD.SetUploadMode(mode, currUploadID);
	} else {
		RAONKUPLOAD.SetUploadMode(mode, G_UploadID);
	}
}

// 업로드 보이기
function fn_uploadShow(currUploadID) {
	if (currUploadID) {
		RAONKUPLOAD.Show(currUploadID);
	} else {
		RAONKUPLOAD.Show(G_UploadID);
	}
}

// 업로드 숨기기
function fn_uploadHidden(currUploadID) {
	if (currUploadID) {
		RAONKUPLOAD.Hidden(currUploadID);
	} else {
		RAONKUPLOAD.Hidden(G_UploadID);
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////
// UTIL
//////////////////////////////////////////////////////////////////////////////////////////////////
function fn_RPAD(s, c, n) {
	if (!s || !c || s.length >= n) {
		return s;
	}

	var max = (n - s.length) / c.length;
	for (var i = 0; i < max; i++) {
		s += c;
	}

	return s;
}


// json
function fn_newJsonToString(jsonNew) {
	var tempPath = location.href;
	
	tempPath = tempPath.substring(0, tempPath.lastIndexOf('/'));
		
	tempPath = tempPath + "/filename";

	var str = '-- 업로드 파일 정보 시작 --<br/>';
	str += fn_RPAD('RealFileName', ' ', 5) + ' : {0}<br/>';
	str += fn_RPAD('ServerFileName', ' ', 5) + ' : {1}<br/>';
	str += fn_RPAD('IsLargeFile', ' ', 5) + ' : {2}<br/>';
	str += fn_RPAD('Size', ' ', 5) + ' : {3}<br/>';
	str += fn_RPAD('UploadPath', ' ', 5) + ' : {4}<br/>';
	str += fn_RPAD('LogicalPath', ' ', 5) + ' : {5}<br/>';
	str += fn_RPAD('fileExtention', ' ', 5) + ' : {6}<br/>';
	str += fn_RPAD('LocalPath', ' ', 5) + ' : {7}<br/>';
	str += fn_RPAD('CustomValue', ' ', 5) + ' : {8}<br/>';
	str += fn_RPAD('ResponseCustomValue', ' ', 5) + ' : {9}<br/>';
	str += fn_RPAD('Order', ' ', 5) + ' : {10}<br/>';
	str += '-- 업로드 파일 정보 끝 --<br/>';

	var originalName = jsonNew.originalName;
	var uploadName = jsonNew.uploadName;
	var isLargeFile = jsonNew.isLargeFile;
	var size = jsonNew.size;
	var uploadPath = jsonNew.uploadPath;
	var logicalPath = jsonNew.logicalPath;
	var fileExtension = jsonNew.extension;
	var localPath = jsonNew.localPath;
	var customValue = jsonNew.customValue;
	var responseCustomValue = jsonNew.responseCustomValue;
	var order = jsonNew.order;

	str = str.replace('{0}', originalName);
	str = str.replace('{1}', uploadName);
	str = str.replace('{2}', isLargeFile);
	str = str.replace('{3}', size);
	str = str.replace('{4}', uploadPath);
	str = str.replace('{5}', logicalPath);
	str = str.replace('{6}', fileExtension);
	str = str.replace('{7}', localPath);
	str = str.replace('{8}', customValue);
	str = str.replace('{9}', responseCustomValue);
	str = str.replace('{10}', order);

	var logBox = document.getElementById("logBox");
	logBox.innerHTML += str;
	var sjson = JSON.stringify(jsonNew);
	$(document).ajaxStart(function() {
		console.log("Ajax Start");
	});
	$(document).ajaxStop(function() { 
		console.log("Ajax stop"); 
		});

	$.ajax({
		url: tempPath,
		type: "POST",
		data: {"data" : sjson},
		success: function(data){
			console.log("성공");
		},
		error: function(textStatus, errorThrown){
			console.log("Error: " + textStatus + " : " + errorThrown);
		}
	
	});

}

function openWin(url) {
    ReportPrintPreview = window.open("about:blank", "ReportPrintPreview", "width=1000,height=500,left=250,top=50,dependent=yes,menubar=no,status=no,resizable=yes,toolbar=no,scrollbars=yes");
    ReportPrintPreview.location.href = url;
    ReportPrintPreview.focus();
    return false;
}

function fn_delJsonToString(jsonDel) {
	var str = '-- 삭제된 파일 정보 --<br/>';
	str += fn_RPAD('Key', ' ', 8) + ' : {0}<br/>';
	str += fn_RPAD('FileName', ' ', 8) + ' : {1}<br/>';
	str += fn_RPAD('Size', ' ', 8) + ' : {2}<br/>';
	str += '-- 삭제된 파일 정보 끝 --<br/>';

	var uniqKey = jsonDel.uniqKey;
	var originalName = jsonDel.originalName;
	var size = jsonDel.size;

	var sUniqKey = '';
	var sOriginalName = '';
	var sSize = '';

	for (var i = 0; i < originalName.length; i++) {
		if (i != 0) {
			sUniqKey += ',';
			sOriginalName += ',';
			sSize += ',';
		}

		sUniqKey += uniqKey[i];
		sOriginalName += originalName[i];
		sSize += size[i];
	}

	str = str.replace('{0}', sUniqKey);
	str = str.replace('{1}', sOriginalName);
	str = str.replace('{2}', sSize);

	var logBox = document.getElementById("logBox");

	logBox.innerHTML += str;
}