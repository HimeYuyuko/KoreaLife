package kribb.d3;

import kribb.d3.dto.filenamedto;
import kribb.d3.entity.FileNameInfo;
import kribb.d3.entity.MemberEntity;
import kribb.d3.entity.FileNameInfo;
import kribb.d3.repository.MemberRepository;
import kribb.d3.repository.filenameDAO;
import kribb.d3.service.FileService;
import lombok.RequiredArgsConstructor;
import lombok.*;

import javax.servlet.ServletContext;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.collections.map.HashedMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.json.simple.JSONArray;

import com.raonwiz.kupload.RAONKHandler;
import com.raonwiz.kupload.event.EventClass;

import javax.swing.filechooser.FileSystemView;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.io.IOException;
import java.io.InputStream;
import java.net.SocketException;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.http.MediaType;

import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;

@Controller

public class HomeController {
	private static String UPLOADED_FOLDER = "D://test//";

	@Autowired
	private FileService fileService;
	private MemberRepository memberRepository;
	private FileSystemResource ftpDownloadDir;
	// FTP 접속
	protected static String FTP_IP = "192.168.159.193";
	protected static int FTP_PORT = 21;
	protected static String FTP_ID = "tester";
	protected static String FTP_PWD = "tester";
	protected static String FTP_PATH = "";

	FTPClient ftpclient = null;

	public HomeController() {
		ftpclient = new FTPClient();
	}

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@RequestMapping(value = "/filename", method = { RequestMethod.POST, RequestMethod.GET })
	public ResponseEntity<FileNameInfo> save(HttpServletRequest req, String data) throws ParseException {
		// System.out.println(str+" dd");
		// 특수문자 제거
		String match = "[^a-zA-Z0-9/,. _ ]";
		JSONParser parser = new JSONParser();
		Object obj = parser.parse(data);
		JSONObject jsonObj = (JSONObject) obj;
		Object obname = jsonObj.get("originalName");
		Object size = jsonObj.get("size");
		Object token = jsonObj.get("token");
		Object upath = jsonObj.get("uploadPath");
		String sname = String.valueOf(obname);	
		String ssize = String.valueOf(size);
		String stoken = String.valueOf(token);
		String supath = String.valueOf(upath);
		ArrayList list = new ArrayList();
		ssize = ssize.replaceAll(match, "");
		sname = sname.replaceAll(match, "");
		supath = supath.replaceAll(match, "");
		String snstr[] = sname.split(",");
		String sistr[] = ssize.split(",");
		String tostr[] = stoken.split(",");
		String upstr[] = supath.split(",");
		List<String> lname = new ArrayList<String>();
		lname = Arrays.asList(snstr);
		final FileNameInfo member = FileNameInfo
				.builder()
				.title(sname)
				.size(ssize)
				.token(stoken)
				.pathroot(supath)
				.build();
		return new ResponseEntity<FileNameInfo>(fileService.save(member), HttpStatus.OK);

	}

	@RequestMapping(value = "/Network")
	public String Network() {
		return "Network";
	}

	@RequestMapping("/upload")
	public String upload() {
		return "upload";
	}

	@RequestMapping(value = "/sample_add_formdata")
	public String sample_add_formdata() {
		return "sample_add_formdata";

	}

	@RequestMapping("/handler")
	public void handler(HttpServletRequest request, HttpServletResponse response) throws Exception {
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
		response.setHeader("Access-Control-Allow-Headers", "content-type, RAONK-Encoded");
		response.setHeader("Access-Control-Allow-Origin", "*");
		// out.clear(); // Servlet으로 handler 작업을 하시려면 제거해주세요.

		request.setCharacterEncoding("UTF-8");

		RAONKHandler upload = new RAONKHandler();

		upload.settingVo.setDebugMode(true, "C");

		EventClass event = new EventClass();

		/*
		 * event.addBeforeUploadEventListener(new BeforeUploadEventListener() { public
		 * void beforeUploadEvent(EventVo eventVo) { //파일을 업로드하기 전에 발생하는 이벤트 입니다. //파일에
		 * 대한 저장 경로를 변경해야 하는 경우 사용합니다.
		 * 
		 * HttpServletRequest request = eventVo.getRequest(); //Request Value
		 * HttpServletResponse response = eventVo.getResponse(); //Response Value String
		 * strNewFileLocation = eventVo.getNewFileLocation(); //NewFileLocation Value
		 * String strCustomValue = eventVo.getCustomValue(); //CustomValue String
		 * strFileIndex = eventVo.getFileIndex(); //FileIndex Value - 마지막 파일은 index 뒤에
		 * z가 붙습니다. String strOriginalFileName = eventVo.getOriginalFileName();
		 * //Original File Name String strGuid = eventVo.getGuid(); //Guid
		 * 
		 * String[] aryParameterValue =
		 * eventVo.getUpload().getParameterValue("ParameterName"); //클라이언트에서
		 * AddFormData를 이용하여 추가된 파라미터를 얻습니다.
		 * 
		 * eventVo.setNewFileLocation(strNewFileLocation); //Change NewFileLocation
		 * Value
		 * 
		 * eventVo.setCustomError("사용자오류"); eventVo.setCustomError("901", "이예!");
		 * //Error Code를 설정하실 때에는 900이상의 3자리로 설정 } });
		 */

		/*
		 * event.addAfterUploadEventListener(new AfterUploadEventListener() { public
		 * void afterUploadEvent(EventVo eventVo) { //파일을 업로드한 후에 발생하는 이벤트 입니다. //업로드된
		 * 파일을 변경하는 경우 사용됩니다.(DRM처리, Image API 처리) //경로가 변경된 경우 Response되는 파일경로도 변경해야
		 * 합니다.(ResponseFileServerPath)
		 * 
		 * HttpServletRequest request = eventVo.getRequest(); //Request Value
		 * HttpServletResponse response = eventVo.getResponse(); //Response Value String
		 * strNewFileLocation = eventVo.getNewFileLocation(); //NewFileLocation Value
		 * String strResponseFileServerPath = eventVo.getResponseFileServerPath();
		 * //ResponseFileServerPath Value String strCustomValue =
		 * eventVo.getCustomValue(); //CustomValue String strFileIndex =
		 * eventVo.getFileIndex(); //FileIndex Value - 마지막 파일은 index 뒤에 z가 붙습니다. String
		 * strOriginalFileName = eventVo.getOriginalFileName(); //Original File Name
		 * String strGuid = eventVo.getGuid(); //Guid String strHashValue =
		 * eventVo.getHashValue(); //File Hash(MD5) 값 추출(Client UseHashExtract 1 설정시)
		 * 
		 * String[] aryParameterValue =
		 * eventVo.getUpload().getParameterValue("ParameterName"); //클라이언트에서
		 * AddFormData를 이용하여 추가된 파라미터를 얻습니다.
		 * 
		 * eventVo.setResponseFileServerPath(strResponseFileServerPath); //Change
		 * ResponseFileServerPath Value
		 * eventVo.setResponseCustomValue("ResponseCustomValue"); //Set
		 * ResponseCustomValue
		 * 
		 * eventVo.setCustomError("사용자오류"); eventVo.setCustomError("999", "사용자오류");
		 * //Error Code를 설정하실 때에는 900이상의 3자리로 설정
		 */
		// 이미지 처리 관련 API (SMB Protocol 설정 후 업로드시 사용이 불가능합니다.)
		/*
		 * try { //float fJpegQuality = 100; // JPG 품질 (1 ~ 100) //boolean bAntialiasing
		 * = false; // 이미지 안티앨리어싱 활성화
		 * 
		 * //String strTempFilePath = ""; //String strSourceFileFullPath =
		 * strNewFileLocation;
		 * 
		 * //동일 폴더에 이미지 썸네일 생성하기 //strTempFilePath =
		 * ImageApi.makeThumbnail(strSourceFileFullPath, "", 200, 0, true, fJpegQuality,
		 * bAntialiasing);
		 * 
		 * //특정위치에 이미지 썸네일 생성하기 //String targetFileFullPath =
		 * "c:\\temp\\test_thumb.jpg"; //strTempFilePath =
		 * ImageApi.makeThumbnailEX(strSourceFileFullPath, targetFileFullPath, 200, 0,
		 * false, fJpegQuality, bAntialiasing);
		 * 
		 * //이미지 포멧 변경 //strTempFilePath =
		 * ImageApi.convertImageFormat(strSourceFileFullPath, "", "png", false, false,
		 * fJpegQuality, bAntialiasing);
		 * 
		 * //이미지 크기 변환 //ImageApi.convertImageSize(strSourceFileFullPath, 500, 30,
		 * fJpegQuality, bAntialiasing);
		 * 
		 * //비율로 이미지 크기 변환 //ImageApi.convertImageSizeByPercent(strSourceFileFullPath,
		 * 50, fJpegQuality, bAntialiasing);
		 * 
		 * //이미지 회전 //ImageApi.rotate(strSourceFileFullPath, 90, fJpegQuality);
		 * 
		 * //이미지 워터마크 //String strWaterMarkFilePath = "c:\\temp\\raonk_logo.png";
		 * //ImageApi.setImageWaterMark(strSourceFileFullPath, strWaterMarkFilePath,
		 * "TOP", 10, "RIGHT", 10, 0, fJpegQuality);
		 * 
		 * //텍스트 워터마크 //com.raonwiz.kupload.util.TextWaterMarkVo txtWaterMarkVo = new
		 * com.raonwiz.kupload.util.TextWaterMarkVo("RAONK Upload", "굴림", 12,
		 * "#FF00FF"); //ImageApi.setTextWaterMark(strSourceFileFullPath,
		 * txtWaterMarkVo, "TOP", 10, "CENTER", 10, 0, 0, fJpegQuality);
		 * 
		 * //이미지 크기 //java.awt.Dimension size =
		 * ImageApi.getImageSize(strSourceFileFullPath); //int _width = size.width;
		 * //int _height = size.height;
		 * 
		 * //EXIF 추출 (Exif standard 2.2, JEITA CP-2451) //jdk 1.6 이상에서만 사용가능합니다. //기능
		 * 활성화를 원하시면 1.6버전으로 컴파일된 jar를 고객센터로 요청하십시오.
		 * //com.raonwiz.kupload.common.ImageExif exif = new
		 * com.raonwiz.kupload.common.ImageExif();
		 * //com.raonwiz.kupload.common.exif.ExifEntity exifData =
		 * exif.getExifData(strSourceFileFullPath);
		 * 
		 * //동일 폴더에 잘라낸 이미지 생성하기 (좌,우,상,하) //strTempFilePath =
		 * ImageApi.makeCropImage(strSourceFileFullPath, "", 10, 10, 10, 10, true,
		 * fJpegQuality);
		 * 
		 * //특정위치에 잘라낸 이미지 생성하기 (좌,우,상,하) //String targetFileFullPath =
		 * "c:\\temp\\test_crop.jpg"; //strTempFilePath =
		 * ImageApi.makeCropImageEX(strSourceFileFullPath, targetFileFullPath, 10, 10,
		 * 10, 10, false, fJpegQuality); } catch (Exception ex) { String errorMsg =
		 * ex.getMessage(); } } });
		 */

		/*
		 * event.addBeforeDownloadEventListener(new BeforeDownloadEventListener() {
		 * public void beforeDownloadEvent(EventVo eventVo) { //파일을 다운로드하기 전에 발생하는 이벤트
		 * 입니다. //파일에 대한 다운로드 경로를 변경하거나 서버에서 구해지는 Stream 다운로드로 처리할 경우 사용합니다.
		 * 
		 * HttpServletRequest request = eventVo.getRequest(); //Request Value
		 * HttpServletResponse response = eventVo.getResponse(); //Response Value
		 * String[] aryDownloadFilePath = eventVo.getDownloadFilePath();
		 * //DownloadFilePath Value String[] aryDownloadCustomValue =
		 * eventVo.getDownloadCustomValue(); //DownloadCustomValue
		 * 
		 * eventVo.setDownloadFilePath(aryDownloadFilePath); //Change DownloadFilePath
		 * Value
		 * 
		 * eventVo.setCustomError("사용자오류"); eventVo.setCustomError("999", "사용자오류");
		 * //Error Code를 설정하실 때에는 900이상의 3자리로 설정
		 * 
		 * ///////////////////////////////////////////////////////////////////////////
		 * //Stream 다운로드 처리 시 해당 Stream을 이용하여 특정 위치에 파일을 쓰고,// //해당 파일 경로를
		 * SetDownloadFilePath에 설정하시면 됩니다. //
		 * ///////////////////////////////////////////////////////////////////////////
		 * //예) //String[] aryDownloadFilePath = eventVo.getDownloadFilePath(); int
		 * iDownloadFilePathLength = aryDownloadFilePath.length; for (int i = 0; i <
		 * iDownloadFilePathLength; i++) { // //Stream을 이용하여 파일을 쓴 후 해당 파일의 경로를
		 * strDownloadFilePath 변수에 설정 String strDownloadFilePath = ".....";
		 * aryDownloadFilePath[i] = strDownloadFilePath; }
		 * eventVo.setDownloadFilePath(aryDownloadFilePath);
		 * /////////////////////////////////////////////////////////////////////////// }
		 * });
		 */

		/*
		 * event.addAfterDownloadEventListener(new AfterDownloadEventListener() { public
		 * void afterDownloadEvent(EventVo eventVo) { //파일을 다운로드한 후에 발생하는 이벤트 입니다.
		 * //다운로드 받을 파일에 대한 정보를 얻은 후 해당 정보에 대하여 로그출력을 하려는 경우 사용합니다.
		 * 
		 * HttpServletRequest request = eventVo.getRequest(); //Request Value
		 * HttpServletResponse response = eventVo.getResponse(); //Response Value
		 * String[] aryDownloadFilePath = eventVo.getDownloadFilePath();
		 * //DownloadFilePath Value String[] aryDownloadCustomValue =
		 * eventVo.getDownloadCustomValue(); //DownloadCustomValue
		 * 
		 * /////////////////////////////////////////////////////////////////////////////
		 * ///// //Stream 다운로드 처리 시 특정 위치에 써진 파일을 다음과 같이 제거하시면 됩니다.//
		 * /////////////////////////////////////////////////////////////////////////////
		 * ///// //예) // String[] aryDownloadFilePath = eventVo.getDownloadFilePath();
		 * // int iDownloadFilePathLength = aryDownloadFilePath.length; // for (int i =
		 * 0; i < iDownloadFilePathLength; i++) { // new
		 * java.io.File(aryDownloadFilePath[i]).delete(); // }
		 * /////////////////////////////////////////////////////////////////////////////
		 * ///// } });
		 * 
		 * event.addLoggerEventListener(new LoggerEventListener() { public void
		 * loggerEvent(EventVo eventVo) { //로그 출력 전에 발생하는 이벤트 입니다. //로그 출력 전에 로그 정보를
		 * 변경하거나 로그 출력 여부를 변경하려는 경우 사용합니다.
		 * 
		 * String strDateTime = eventVo.getDatetime(); //DateTime Value String
		 * strPathInfo = eventVo.getPathInfo(); //PathInfo Value String strLogMode =
		 * eventVo.getLogMode(); //LogMode Value (FATAL,ERROR,WARN,INFO,DEBUG) String
		 * strLogText = eventVo.getLogText(); //LogText Value
		 * 
		 * eventVo.setDatetime(strDateTime); //Change DateTime Value
		 * eventVo.setPathInfo(strPathInfo); //Change PathInfo Value
		 * eventVo.setLogMode(strLogMode); //Change LogMode Value
		 * (FATAL,ERROR,WARN,INFO,DEBUG) eventVo.setLogText(strLogText); //Change
		 * LogText Value eventVo.setLogWriteFlag(true); // 로그 출력여부 설정 } });
		 */

		// -------------------- [설정방법1] 물리적 경로 설정 시작 --------------------//

		// 해당 설정은 PhysicalPath를 RAONK Upload 제품폴더\raonkuploaddata\ 를 저장 Root 경로로 설정하는
		// 내용입니다.
		/*
		 * String strPathChar = com.raonwiz.kupload.util.StaticVariables.strPathChar;
		 * String strRootFolder = request.getServletPath(); strRootFolder =
		 * strRootFolder.substring(0, strRootFolder.lastIndexOf("/")); strRootFolder =
		 * request.getSession().getServletContext()
		 * .getRealPath(strRootFolder.substring(0, strRootFolder.lastIndexOf("/")));
		 */
		upload.settingVo.setPhysicalPath("D:\\kupload\\raonkuploaddata");

		// 임시파일 물리적 경로설정 ( setPhysicalPath에 설정된 경로 + raonktemp )
		upload.settingVo.setTempPath("D:\\kupload\\raonkuploaddata\\raonktemp");

		// ***************보안 설정 : 업로드 가능한 경로 설정 - 이외의 경로로 업로드 불가능***************
		String[] arrAllowUploadDirectoryPath = { "D:\\kupload\\raonkuploaddata" };
		upload.settingVo.setAllowUploadDirectoryPath(arrAllowUploadDirectoryPath);

		// ***************보안 설정 : 다운로드 가능한 경로 설정 - 이외의 경로에서 다운로드 불가능***************
		// context.Request.MapPath("/") 값은 샘플 동작을 위한 설정으로 실제 적용 시 제외하시면 됩니다.
		String[] arrAllowDownloadDirectoryPath = { "D:\\kupload\\raonkuploaddata",
				request.getSession().getServletContext().getRealPath("/") };
		upload.settingVo.setAllowDownloadDirectoryPath(arrAllowDownloadDirectoryPath);

		// -------------------- [설정방법1] 물리적 경로 설정 끝 --------------------//

		// -------------------- [설정방법2] 가상경로 설정 시작 ---------------------//

		/*
		 * upload.settingVo.setVirtualPath("/");
		 * 
		 * // 임시파일 물리적 경로설정 ( setVirtualPath에 설정된 경로 + raonktemp )
		 * upload.settingVo.setTempPath(
		 * request.getSession().getServletContext().getRealPath("/") +
		 * java.io.File.separator + "raonktemp");
		 * 
		 * // ***************보안 설정 : 업로드 가능한 경로 설정 - 이외의 경로로 업로드 불가능***************
		 * String[] arrAllowUploadDirectoryPath = {
		 * request.getSession().getServletContext().getRealPath("/") };
		 * upload.settingVo.setAllowUploadDirectoryPath(arrAllowUploadDirectoryPath);
		 * 
		 * // ***************보안 설정 : 다운로드 가능한 경로 설정 - 이외의 경로에서 다운로드 불가능***************
		 * // context.Request.MapPath("/") 값은 샘플 동작을 위한 설정으로 실제 적용 시 제외하시면 됩니다. String[]
		 * arrAllowDownloadDirectoryPath = {
		 * request.getSession().getServletContext().getRealPath("/") };
		 * upload.settingVo.setAllowDownloadDirectoryPath(arrAllowDownloadDirectoryPath)
		 * ;
		 */
		// -------------------- [설정방법2] 가상경로 설정 끝 --------------------//

		// 위에 설정된 임시파일 물리적 경로에 불필요한 파일을 삭제 처리하는 설정 (단위: 일)
		upload.settingVo.setGarbageCleanDay(2);

		// ***************보안 설정 : 업로드 제한 확장자 설정***************
		// 적용에 필요 없는 확장자는 제외하시면 됩니다.
		// setUploadCheckFileExtension 1번째 Parameter : 0-제한,1-허용 , 2번째 Parameter : 확장자
		// 리스트 Array Type
		String[] arrUploadCheckFileExtension = { "exe", "bat", "sh", "jsp", "php" };
		upload.settingVo.setUploadCheckFileExtension(0, arrUploadCheckFileExtension);

		// Servlet으로 handler 작업을 하시려면 다음과 같이 작성해 주세요.
		// Servlet으로 구성하실 때 해당 Function의 Return Type은 void로 선언 후 return 되는 값은 반드시
		// 없어야합니다.

		// 만일 getServletContext()가 undefined 이면
		// request.getSession().getServletContext(); 으로 하시면 됩니다.
		ServletContext application = request.getSession().getServletContext();

		String result = "";
		try {
			result = upload.Process(request, response, application, event);
		} catch (Exception e) {
			e.printStackTrace();
		}

		if (!result.equals("")) {
			response.setContentType("text/html");
			ServletOutputStream out = response.getOutputStream();
			out.print(result);
			out.close();
		}
	}

	@RequestMapping(value = "/download")
	public String download(Model model) {
		List<filenamedto> filenamedtoList = fileService.getFileNameInfoList();
		model.addAttribute("filename", filenamedtoList);
		return "/download";
	}

	@RequestMapping("/ftpupload")
	public String ftpupload() {
		return "ftpupload";
	}

	// ftp 페이지 호출
	@RequestMapping(value = "/gipsyFtp", method = RequestMethod.GET)
	public String gipsyFtp(Model model) {

		if (!ftpclient.isConnected()) {
			model.addAttribute("connMessage", 0);
		} else {
			model.addAttribute("connMessage", 1);
		}

		return "/gipsyFtpForm";
	}

	// 연결 및 로그인
	@RequestMapping(value = "/connectGipsy", method = { RequestMethod.POST, RequestMethod.GET })
	public String connectGipsy() {
		try {
			ftpclient.connect(FTP_IP, FTP_PORT);
			ftpclient.login(FTP_ID, FTP_PWD);

			System.out.println("FTP 연결 시도중");

			int reply = ftpclient.getReplyCode();// 연결후 응답 확인

			if (!FTPReply.isPositiveCompletion(reply)) {
				System.out.println("FTP 연결 거부");
			} else {
				System.out.println("FTP 연결됨");
				System.out.println(ftpDownloadDir);
			}
		} catch (SocketException e) {
			e.printStackTrace();
		} catch (IOException e) {
			if (ftpclient.isConnected()) {
				try {
					ftpclient.disconnect();
				} catch (IOException e1) {
					e1.printStackTrace();
				}
			}
			System.out.println("연결 실패");
			e.printStackTrace();
		}
		return "redirect:/gipsyFtp";
	}

	// 연결 끊기
	@RequestMapping(value = "/disconnectGispy", method = { RequestMethod.POST, RequestMethod.GET })
	public String disconnectGipsy(HttpSession Session) {
		try {
			ftpclient.logout();
			ftpclient.disconnect();
		} catch (IOException e) {
			System.out.println("FTP 연결 해제 실패");
			e.printStackTrace();
			return "redirect:/gipsyFtp";
		}
		System.out.println("연결 해제 성공");
		return "redirect:/gipsyFtp";
	}

	// 파일 가져오기
	@RequestMapping(value = "/downloadFile", method = { RequestMethod.POST, RequestMethod.GET })
	public String downloadFile() throws IOException {
		FileOutputStream out = null;
		InputStream in = null;
		// FTP에서 가지고 올 파일 경로
		// String filedir = "D:/test";
		String path1 = "D:/test/out";
		String path2 = "D:/test/in";

		// String filepath = ftpDownloadDir.getPath() + "D:\\test\\"; // 파일 저장할 경로
		new File(path1).mkdirs();
		new File(path2).mkdirs();

		// 기본 파일 생성
		try (FileOutputStream fos = new FileOutputStream(path1 + "/test.dat")) {
			fos.write("the Test file".getBytes());

		}
		System.out.println("파일 가져오기 성공");

		return "redirect:/ftp/gipsyFtp";

	}

	@RequestMapping("/viewer")
	public void viewer(HttpServletRequest request, HttpServletResponse response) throws Exception {

		response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
		response.setHeader("Access-Control-Allow-Headers", "content-type, RAONK-Encoded");
		response.setHeader("Access-Control-Allow-Origin", "*");

		// out.clear();

		request.setCharacterEncoding("UTF-8");

		RAONKHandler upload = new RAONKHandler();

		// 디버깅
		// 2번째 파라미터의 Log Mode 설명
		// - C : 일반로그 출력(System.out.println 로그 출력)
		// - L : 1. Log4j 모듈에 의한 로그 출력(/handler/JAVA 폴더의 log4j.properties 파일을
		// WEB-INF/classes에 적용)
		// 2. 기존 설정파일이 존재할 경우 /handler/JAVA 폴더의 log4j.properties 파일 내용 중 "# K Upload
		// Log" 항목을 기존 설정파일에 적용
		// 3. 기존 설정파일의 위치가 WEB-INF/classes/log4j.properties 경로가 아닐 경우 3번째 파라미터에 해당 경로 설정
		// 4. WEB-INF/lib에 log4j-......jar 파일이 존재하지 않을 경우 DebugMode가 false로 설정됨
		// upload.settingVo.setDebugMode(true, "C");
		// upload.settingVo.setDebugMode(true, "L");

		// Viewer 페이지의 Encoding을 설정할 때 사용 (기본값 : utf-8)
		// upload.SetEncoding("utf-8");

		String result = upload.Viewer(request, response);

		if (!result.equals("")) {
			response.setContentType("text/html");
			ServletOutputStream out = response.getOutputStream();
			out.print(result);
		}
	}

	private static void getUploadList(String root, List<String> files, List<String> directories) {
		File upload = new File(root);
		// root로 받은 경로의 파일 리스트를 받아 온다.
		for (File file : upload.listFiles()) {
			// 리스트의 객체가 파일이면
			if (file.isFile()) {
				// files 리스트에 경로를 추가한다.
				files.add(file.getAbsolutePath());
			} else {
				// 디렉토리리면 함수의 재귀적 방식으로 하위 탐색을 시작한다.
				getUploadList(file.getAbsolutePath(), files, directories);
				// directories 리스트에 디렉토리 경로를 추가한다.
				directories.add(file.getAbsolutePath().replace(root, ""));
			}
		}

	}
}
