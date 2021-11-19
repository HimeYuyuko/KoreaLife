package kribb.d3.dto;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import lombok.*;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonInclude;

import kribb.d3.entity.FileNameInfo;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class filenamedto {
	private long fnum;
	private String title;
	private String size;
	
	public FileNameInfo toEntity() {
		FileNameInfo build = FileNameInfo.builder()
				.fnum(fnum)
				.title(title)
				.size(size)
				.build();
				
				return build;
	}
	
	@Builder
	public filenamedto(Long fnum, String title, String size) {
		this.fnum = fnum;
		this.title  = title;
		this.size = size;
	}
}
