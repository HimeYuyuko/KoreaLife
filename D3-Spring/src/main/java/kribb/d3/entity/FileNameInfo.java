package kribb.d3.entity;


import lombok.*;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonInclude;

@Getter // 6.
@Setter

@NoArgsConstructor(access = AccessLevel.PROTECTED) // 5.
@Entity(name="FILENAME")
@ToString
@JsonInclude(JsonInclude.Include.NON_NULL)
public class FileNameInfo {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long fnum;
	@Column(nullable = true, unique = true)
     private String title;
	@Column(nullable = false)
     private String size;
	@Column(nullable = false)
	 private String token;
    @Column(nullable = false)
    private String pathroot;
	@Builder
    public FileNameInfo(Long fnum, String title, String size, String token , String pathroot) {
    	this.title = title;
    	this.size = size;
    	this.token = token;
    	this.pathroot = pathroot;
    }

}
