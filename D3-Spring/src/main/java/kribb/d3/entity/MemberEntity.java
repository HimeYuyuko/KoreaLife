package kribb.d3.entity;

import lombok.*;
import javax.persistence.*;

@Getter // getter 메소드 생성
@Builder // 빌더를 사용할 수 있게 함
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity(name = "filedata") // 테이블 명을 작성
public class MemberEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long pid;
	@Column(nullable = false, unique = true, length = 30)
	private String name;
	@Column(nullable = false, length = 100)
	private String size;

	public MemberEntity(String name, String size) {
		this.name = name;
		this.size = size;
	}
}
