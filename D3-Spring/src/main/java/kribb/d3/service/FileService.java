package kribb.d3.service;

import kribb.d3.repository.MemberRepository;
import lombok.*;
import kribb.d3.entity.FileNameInfo;
import kribb.d3.dto.filenamedto;
import kribb.d3.entity.FileNameInfo.FileNameInfoBuilder;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

@Service
public class FileService {
	@Autowired
	private MemberRepository memberRepository;

	public FileNameInfo save(FileNameInfo FILENAME) {
		memberRepository.save(FILENAME);
		return FILENAME;

	}
	@Async
	@Transactional
	public List<filenamedto> getFileNameInfoList() {
		List<FileNameInfo> members = memberRepository.findAll();
		List<filenamedto> filenamedtoList =null;
		filenamedtoList = new ArrayList<>();
		for(FileNameInfo filenameinfo : members) {
			filenamedto filenameDto = filenamedto.builder()
					.fnum(filenameinfo.getFnum())
					.title(filenameinfo.getTitle())
					.size(filenameinfo.getSize())
					.build();
			filenamedtoList.add(filenameDto);
			//System.out.println(filenameDto);
			//System.out.println(members);
		}
		return filenamedtoList;
		
		
	}

}
