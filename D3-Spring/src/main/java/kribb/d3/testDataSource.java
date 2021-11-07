package kribb.d3;

import java.sql.Connection;
import java.sql.DriverManager;
 
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
 
public class testDataSource {
    //로깅을 위한 변수 선언
    private static final Logger logger=
            LoggerFactory.getLogger(testDataSource.class);
    private static final String DRIVER
    ="com.mysql.jdbc.Driver";
    //연결문자열 jdbc:oracle:thin:@호스트:포트:sid
    private static final String URL
    ="jdbc:mysql://127.0.0.1:3306/dbdata";
    private static final String USER="root";//아이디
    private static final String PW="1234";//
    
    @Test//Junit이 테스트하는 메소드
    public void test() throws ClassNotFoundException {
        Class.forName(DRIVER);//jdbc 드라이버 로딩
        
        //괄호안에 리소스 자동 삭제 
        try(Connection conn=DriverManager.getConnection(URL, USER, PW)){
            logger.info("오라클에 연결되었습니다");
        }catch(Exception e) {
            e.printStackTrace();
        }
    }
 
}