package kribb.d3.repository;

import kribb.d3.entity.FileNameInfo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<FileNameInfo, Long> {
		FileNameInfo findByTitle(String title);
		Page<FileNameInfo> findByTitle(String title, Pageable pageable);
}	
