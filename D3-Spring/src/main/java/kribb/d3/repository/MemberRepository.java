package kribb.d3.repository;

import kribb.d3.entity.FileNameInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<FileNameInfo, Long> {
	
}	
