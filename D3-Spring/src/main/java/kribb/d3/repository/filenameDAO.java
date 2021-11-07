package kribb.d3.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import kribb.d3.entity.FileNameInfo;

public interface filenameDAO  extends JpaRepository<FileNameInfo, String>{
	
}
